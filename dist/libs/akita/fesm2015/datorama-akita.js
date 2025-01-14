import { distinctUntilChanged, map, auditTime, tap, filter, switchMap, skip, delay, take, debounceTime, pairwise, finalize, first } from 'rxjs/operators';
import { of, EMPTY, combineLatest, Subject, ReplaySubject, BehaviorSubject, isObservable, from, merge, defer } from 'rxjs';
import { __rest, __decorate, __metadata } from 'tslib';

const currentAction = {
    type: null,
    entityIds: null,
    skip: false,
    payload: null
};
let customActionActive = false;
function resetCustomAction() {
    customActionActive = false;
}
// public API for custom actions. Custom action always wins
function logAction(type, entityIds, payload) {
    setAction(type, entityIds, payload);
    customActionActive = true;
}
function setAction(type, entityIds, payload) {
    if (customActionActive === false) {
        currentAction.type = type;
        currentAction.entityIds = entityIds;
        currentAction.payload = payload;
    }
}
function setSkipAction(skip = true) {
    currentAction.skip = skip;
}
function action(action, entityIds) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            logAction(action, entityIds);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}

// @internal
function hasEntity(entities, id) {
    return entities.hasOwnProperty(id);
}

// @internal
function isArray(value) {
    return Array.isArray(value);
}

// @internal
function hasActiveState(state) {
    return state.hasOwnProperty('active');
}
// @internal
function isMultiActiveState(active) {
    return isArray(active);
}
// @internal
function resolveActiveEntity({ active, ids, entities }) {
    if (isMultiActiveState(active)) {
        return getExitingActives(active, ids);
    }
    if (hasEntity(entities, active) === false) {
        return null;
    }
    return active;
}
// @internal
function getExitingActives(currentActivesIds, newIds) {
    const filtered = currentActivesIds.filter(id => newIds.indexOf(id) > -1);
    /** Return the same reference if nothing has changed */
    if (filtered.length === currentActivesIds.length) {
        return currentActivesIds;
    }
    return filtered;
}

// @internal
function addEntities({ state, entities, idKey, options = {}, preAddEntity }) {
    let newEntities = {};
    let newIds = [];
    let hasNewEntities = false;
    for (const entity of entities) {
        if (hasEntity(state.entities, entity[idKey]) === false) {
            // evaluate the middleware first to support dynamic ids
            const current = preAddEntity(entity);
            const entityId = current[idKey];
            newEntities[entityId] = current;
            if (options.prepend)
                newIds.unshift(entityId);
            else
                newIds.push(entityId);
            hasNewEntities = true;
        }
    }
    return hasNewEntities
        ? {
            newState: Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), newEntities), ids: options.prepend ? [...newIds, ...state.ids] : [...state.ids, ...newIds] }),
            newIds
        }
        : null;
}

// @internal
function isNil(v) {
    return v === null || v === undefined;
}

// @internal
function coerceArray(value) {
    if (isNil(value)) {
        return [];
    }
    return Array.isArray(value) ? value : [value];
}

/**
 * Add item to a collection
 *
 * @example
 *
 *
 * store.update(state => ({
 *   comments: arrayAdd(state.comments, { id: 2 })
 * }))
 *
 */
function arrayAdd(arr, newEntity, options = {}) {
    const newEntities = coerceArray(newEntity);
    const toArr = arr || [];
    return options.prepend ? [...newEntities, ...toArr] : [...toArr, ...newEntities];
}

const DEFAULT_ID_KEY = 'id';

// @internal
function isEmpty(arr) {
    if (isArray(arr)) {
        return arr.length === 0;
    }
    return false;
}

// @internal
function isFunction(value) {
    return typeof value === 'function';
}

// @internal
function find(collection, idsOrPredicate, idKey) {
    const result = [];
    if (isFunction(idsOrPredicate)) {
        for (const entity of collection) {
            if (idsOrPredicate(entity) === true) {
                result.push(entity);
            }
        }
    }
    else {
        const toSet = coerceArray(idsOrPredicate).reduce((acc, current) => acc.add(current), new Set());
        for (const entity of collection) {
            if (toSet.has(entity[idKey])) {
                result.push(entity);
            }
        }
    }
    return result;
}
// @internal
function distinctUntilArrayItemChanged() {
    return distinctUntilChanged((prevCollection, currentCollection) => {
        if (prevCollection === currentCollection) {
            return true;
        }
        if (!isArray(prevCollection) || !isArray(currentCollection)) {
            return false;
        }
        if (isEmpty(prevCollection) && isEmpty(currentCollection)) {
            return true;
        }
        if (prevCollection.length !== currentCollection.length) {
            return false;
        }
        const isOneOfItemReferenceChanged = currentCollection.some((item, i) => {
            return prevCollection[i] !== item;
        });
        // return false means there is a change and we want to call next()
        return isOneOfItemReferenceChanged === false;
    });
}
function arrayFind(idsOrPredicate, idKey) {
    return function (source) {
        return source.pipe(map((collection) => {
            // which means the user deleted the root entity or set the collection to nil
            if (isArray(collection) === false) {
                return collection;
            }
            return find(collection, idsOrPredicate, idKey || DEFAULT_ID_KEY);
        }), distinctUntilArrayItemChanged(), map((value) => {
            if (isArray(value) === false) {
                return value;
            }
            if (isArray(idsOrPredicate) || isFunction(idsOrPredicate)) {
                return value;
            }
            return value[0];
        }));
    };
}

// @internal
function isObject(value) {
    const type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}

// @internal
function not(pred) {
    return function (...args) {
        return !pred(...args);
    };
}

/**
 * Remove item from collection
 *
 * @example
 *
 *
 * store.update(state => ({
 *   names: arrayRemove(state.names, ['one', 'second'])
 * }))
 */
function arrayRemove(arr, identifier, idKey = DEFAULT_ID_KEY) {
    let identifiers;
    let filterFn;
    if (isFunction(identifier)) {
        filterFn = not(identifier);
    }
    else {
        identifiers = coerceArray(identifier);
        filterFn = (current) => {
            return identifiers.includes(isObject(current) ? current[idKey] : current) === false;
        };
    }
    if (Array.isArray(arr)) {
        return arr.filter(filterFn);
    }
}

/**
 * Create an array value comparator for a specific key of the value.
 * @param prop The property of the value to be compared.
 */
function byKey(prop) {
    return (a, b) => a[prop] === b[prop];
}
/**
 * Create an array value comparator for the id field of an array value.
 */
function byId() {
    return byKey('id');
}
/**
 * Adds or removes a value from an array by comparing its values. If a matching value exists it is removed, otherwise
 * it is added to the array.
 *
 * @param array The array to modify.
 * @param newValue The new value to toggle.
 * @param compare A compare function to determine equality of array values. Default is an equality test by object identity.
 */
function arrayToggle(array, newValue, compare = (a, b) => a === b) {
    const index = array.findIndex((oldValue) => compare(newValue, oldValue));
    return !!~index ? [...array.slice(0, index), ...array.slice(index + 1)] : [...array, newValue];
}

/**
 * Update item in a collection
 *
 * @example
 *
 *
 * store.update(1, entity => ({
 *   comments: arrayUpdate(entity.comments, 1, { name: 'newComment' })
 * }))
 */
function arrayUpdate(arr, predicateOrIds, obj, idKey = DEFAULT_ID_KEY) {
    let condition;
    if (isFunction(predicateOrIds)) {
        condition = predicateOrIds;
    }
    else {
        const ids = coerceArray(predicateOrIds);
        condition = (item) => ids.includes(isObject(item) ? item[idKey] : item) === true;
    }
    const updateFn = (state) => state.map((entity, index) => {
        if (condition(entity, index) === true) {
            return isObject(entity)
                ? Object.assign(Object.assign({}, entity), obj) : obj;
        }
        return entity;
    });
    return updateFn(arr);
}

/**
 * Upsert item in a collection
 *
 * @example
 *
 *
 * store.update(1, entity => ({
 *   comments: arrayUpsert(entity.comments, 1, { name: 'newComment' })
 * }))
 */
function arrayUpsert(arr, id, obj, idKey = DEFAULT_ID_KEY) {
    const entityIsObject = isObject(obj);
    const entityExists = arr.some(entity => (entityIsObject ? entity[idKey] === id : entity === id));
    if (entityExists) {
        return arrayUpdate(arr, id, obj, idKey);
    }
    else {
        return arrayAdd(arr, entityIsObject ? Object.assign(Object.assign({}, obj), { [idKey]: id }) : obj);
    }
}

/**
 *
 * Helper function for checking if we have data in cache
 *
 * export class ProductsService {
 *   constructor(private productsStore: ProductsStore) {}

 *   get(): Observable<void> {
 *     const request = this.http.get().pipe(
 *       tap(this.productsStore.set(response))
 *     );
 *
 *     return cacheable(this.productsStore, request);
 *   }
 * }
 */
function cacheable(store, request$, options = { emitNext: false }) {
    if (store._cache().value) {
        return options.emitNext ? of(undefined) : EMPTY;
    }
    return request$;
}

function combineQueries(observables) {
    return combineLatest(observables).pipe(auditTime(0));
}

let CONFIG = {
    resettable: false,
    ttl: null,
    producerFn: undefined
};
function akitaConfig(config) {
    CONFIG = Object.assign(Object.assign({}, CONFIG), config);
}
// @internal
function getAkitaConfig() {
    return CONFIG;
}
function getGlobalProducerFn() {
    return CONFIG.producerFn;
}

// @internal
function isDefined(val) {
    return isNil(val) === false;
}

// @internal
const $$deleteStore = new Subject();
// @internal
const $$addStore = new ReplaySubject(50, 5000);
// @internal
const $$updateStore = new Subject();
// @internal
function dispatchDeleted(storeName) {
    $$deleteStore.next(storeName);
}
// @internal
function dispatchAdded(storeName) {
    $$addStore.next(storeName);
}
// @internal
function dispatchUpdate(storeName, action) {
    $$updateStore.next({ storeName, action });
}

const isBrowser = typeof window !== 'undefined';
const isNotBrowser = !isBrowser;
// export const isNativeScript = typeof global !== 'undefined' && (<any>global).__runtimeVersion !== 'undefined'; TODO is this used?
const hasLocalStorage = () => {
    try {
        return typeof localStorage !== 'undefined';
    }
    catch (_a) {
        return false;
    }
};
const hasSessionStorage = () => {
    try {
        return typeof sessionStorage !== 'undefined';
    }
    catch (_a) {
        return false;
    }
};

// @internal
const __stores__ = {};
// @internal
const __queries__ = {};
if (isBrowser) {
    window.$$stores = __stores__;
    window.$$queries = __queries__;
}

// @internal
function capitalize(value) {
    return value && value.charAt(0).toUpperCase() + value.slice(1);
}

let subs = [];
function akitaDevtools(ngZoneOrOptions, options = {}) {
    if (isNotBrowser)
        return;
    if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
        return;
    }
    subs.length &&
        subs.forEach((s) => {
            if (s.unsubscribe) {
                s.unsubscribe();
            }
            else {
                s && s();
            }
        });
    const isAngular = ngZoneOrOptions && ngZoneOrOptions['run'];
    if (!isAngular) {
        ngZoneOrOptions = ngZoneOrOptions || {};
        ngZoneOrOptions.run = (cb) => cb();
        options = ngZoneOrOptions;
    }
    const defaultOptions = { name: 'Akita', shallow: true, storesWhitelist: [] };
    const merged = Object.assign({}, defaultOptions, options);
    const storesWhitelist = merged.storesWhitelist;
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(merged);
    let appState = {};
    const isAllowed = (storeName) => {
        if (!storesWhitelist.length) {
            return true;
        }
        return storesWhitelist.indexOf(storeName) > -1;
    };
    subs.push($$addStore.subscribe((storeName) => {
        if (isAllowed(storeName) === false)
            return;
        appState = Object.assign(Object.assign({}, appState), { [storeName]: __stores__[storeName]._value() });
        devTools.send({ type: `[${capitalize(storeName)}] - @@INIT` }, appState);
    }));
    subs.push($$deleteStore.subscribe((storeName) => {
        if (isAllowed(storeName) === false)
            return;
        delete appState[storeName];
        devTools.send({ type: `[${storeName}] - Delete Store` }, appState);
    }));
    subs.push($$updateStore.subscribe(({ storeName, action }) => {
        if (isAllowed(storeName) === false)
            return;
        const { type, entityIds, skip } = action, rest = __rest(action, ["type", "entityIds", "skip"]);
        const payload = rest.payload;
        if (skip) {
            setSkipAction(false);
            return;
        }
        const store = __stores__[storeName];
        if (!store) {
            return;
        }
        if (options.shallow === false && appState[storeName]) {
            const isEqual = JSON.stringify(store._value()) === JSON.stringify(appState[storeName]);
            if (isEqual)
                return;
        }
        appState = Object.assign(Object.assign({}, appState), { [storeName]: store._value() });
        const normalize = capitalize(storeName);
        let msg = isDefined(entityIds) ? `[${normalize}] - ${type} (ids: ${entityIds})` : `[${normalize}] - ${type}`;
        if (options.logTrace) {
            console.group(msg);
            console.trace();
            console.groupEnd();
        }
        if (options.sortAlphabetically) {
            const sortedAppState = Object.keys(appState)
                .sort()
                .reduce((acc, storeName) => {
                acc[storeName] = appState[storeName];
                return acc;
            }, {});
            devTools.send(Object.assign({ type: msg }, payload), sortedAppState);
            return;
        }
        devTools.send(Object.assign({ type: msg }, payload), appState);
    }));
    subs.push(devTools.subscribe((message) => {
        if (message.type === 'DISPATCH') {
            const payloadType = message.payload.type;
            if (payloadType === 'COMMIT') {
                devTools.init(appState);
                return;
            }
            if (message.state) {
                const rootState = JSON.parse(message.state);
                for (let i = 0, keys = Object.keys(rootState); i < keys.length; i++) {
                    const storeName = keys[i];
                    if (__stores__[storeName]) {
                        ngZoneOrOptions.run(() => {
                            __stores__[storeName]._setState(() => rootState[storeName], false);
                        });
                    }
                }
            }
        }
    }));
}

var Order;
(function (Order) {
    Order["ASC"] = "asc";
    Order["DESC"] = "desc";
})(Order || (Order = {}));
// @internal
function compareValues(key, order = Order.ASC) {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }
        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        }
        else if (varA < varB) {
            comparison = -1;
        }
        return order == Order.DESC ? comparison * -1 : comparison;
    };
}

// @internal
function entitiesToArray(state, options) {
    let arr = [];
    const { ids, entities } = state;
    const { filterBy, limitTo, sortBy, sortByOrder } = options;
    for (let i = 0; i < ids.length; i++) {
        const entity = entities[ids[i]];
        if (!filterBy) {
            arr.push(entity);
            continue;
        }
        const toArray = coerceArray(filterBy);
        const allPass = toArray.every(fn => fn(entity, i));
        if (allPass) {
            arr.push(entity);
        }
    }
    if (sortBy) {
        let _sortBy = isFunction(sortBy) ? sortBy : compareValues(sortBy, sortByOrder);
        arr = arr.sort((a, b) => _sortBy(a, b, state));
    }
    const length = Math.min(limitTo || arr.length, arr.length);
    return length === arr.length ? arr : arr.slice(0, length);
}

// @internal
function entitiesToMap(state, options) {
    const map = {};
    const { filterBy, limitTo } = options;
    const { ids, entities } = state;
    if (!filterBy && !limitTo) {
        return entities;
    }
    const hasLimit = isNil(limitTo) === false;
    if (filterBy && hasLimit) {
        let count = 0;
        for (let i = 0, length = ids.length; i < length; i++) {
            if (count === limitTo)
                break;
            const id = ids[i];
            const entity = entities[id];
            const allPass = coerceArray(filterBy).every(fn => fn(entity, i));
            if (allPass) {
                map[id] = entity;
                count++;
            }
        }
    }
    else {
        const finalLength = Math.min(limitTo || ids.length, ids.length);
        for (let i = 0; i < finalLength; i++) {
            const id = ids[i];
            const entity = entities[id];
            if (!filterBy) {
                map[id] = entity;
                continue;
            }
            const allPass = coerceArray(filterBy).every(fn => fn(entity, i));
            if (allPass) {
                map[id] = entity;
            }
        }
    }
    return map;
}

var EntityActions;
(function (EntityActions) {
    EntityActions["Set"] = "Set";
    EntityActions["Add"] = "Add";
    EntityActions["Update"] = "Update";
    EntityActions["Remove"] = "Remove";
})(EntityActions || (EntityActions = {}));

class EntityService {
}

let __DEV__ = true;
function enableAkitaProdMode() {
    __DEV__ = false;
    if (isBrowser) {
        delete window.$$stores;
        delete window.$$queries;
    }
}
// @internal
function isDev() {
    return __DEV__;
}

// @internal
function getActiveEntities(idOrOptions, ids, currentActive) {
    let result;
    if (isArray(idOrOptions)) {
        result = idOrOptions;
    }
    else {
        if (isObject(idOrOptions)) {
            if (isNil(currentActive))
                return;
            idOrOptions = Object.assign({ wrap: true }, idOrOptions);
            const currentIdIndex = ids.indexOf(currentActive);
            if (idOrOptions.prev) {
                const isFirst = currentIdIndex === 0;
                if (isFirst && !idOrOptions.wrap)
                    return;
                result = isFirst ? ids[ids.length - 1] : ids[currentIdIndex - 1];
            }
            else if (idOrOptions.next) {
                const isLast = ids.length === currentIdIndex + 1;
                if (isLast && !idOrOptions.wrap)
                    return;
                result = isLast ? ids[0] : ids[currentIdIndex + 1];
            }
        }
        else {
            if (idOrOptions === currentActive)
                return;
            result = idOrOptions;
        }
    }
    return result;
}

// @internal
const getInitialEntitiesState = () => ({
    entities: {},
    ids: [],
    loading: true,
    error: null
});

// @internal
function isUndefined(value) {
    return value === undefined;
}

// @internal
function removeEntities({ state, ids }) {
    if (isNil(ids))
        return removeAllEntities(state);
    const entities = state.entities;
    let newEntities = {};
    for (const id of state.ids) {
        if (ids.includes(id) === false) {
            newEntities[id] = entities[id];
        }
    }
    const newState = Object.assign(Object.assign({}, state), { entities: newEntities, ids: state.ids.filter(current => ids.includes(current) === false) });
    if (hasActiveState(state)) {
        newState.active = resolveActiveEntity(newState);
    }
    return newState;
}
// @internal
function removeAllEntities(state) {
    return Object.assign(Object.assign({}, state), { entities: {}, ids: [], active: isMultiActiveState(state.active) ? [] : null });
}

// @internal
function toEntitiesObject(entities, idKey, preAddEntity) {
    const acc = {
        entities: {},
        ids: []
    };
    for (const entity of entities) {
        // evaluate the middleware first to support dynamic ids
        const current = preAddEntity(entity);
        acc.entities[current[idKey]] = current;
        acc.ids.push(current[idKey]);
    }
    return acc;
}

// @internal
function isEntityState(state) {
    return state.entities && state.ids;
}
// @internal
function applyMiddleware(entities, preAddEntity) {
    let mapped = {};
    for (const id of Object.keys(entities)) {
        mapped[id] = preAddEntity(entities[id]);
    }
    return mapped;
}
// @internal
function setEntities({ state, entities, idKey, preAddEntity, isNativePreAdd }) {
    let newEntities;
    let newIds;
    if (isArray(entities)) {
        const resolve = toEntitiesObject(entities, idKey, preAddEntity);
        newEntities = resolve.entities;
        newIds = resolve.ids;
    }
    else if (isEntityState(entities)) {
        newEntities = isNativePreAdd ? entities.entities : applyMiddleware(entities.entities, preAddEntity);
        newIds = entities.ids;
    }
    else {
        // it's an object
        newEntities = isNativePreAdd ? entities : applyMiddleware(entities, preAddEntity);
        newIds = Object.keys(newEntities).map(id => (isNaN(id) ? id : Number(id)));
    }
    const newState = Object.assign(Object.assign({}, state), { entities: newEntities, ids: newIds, loading: false });
    if (hasActiveState(state)) {
        newState.active = resolveActiveEntity(newState);
    }
    return newState;
}

// @internal
function deepFreeze(o) {
    Object.freeze(o);
    const oIsFunction = typeof o === 'function';
    const hasOwnProp = Object.prototype.hasOwnProperty;
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (hasOwnProp.call(o, prop) &&
            (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}

// @internal
class AkitaError extends Error {
    constructor(message) {
        super(message);
    }
}
// @internal
function assertStoreHasName(name, className) {
    if (!name) {
        console.error(`@StoreConfig({ name }) is missing in ${className}`);
    }
}

// @internal
function toBoolean(value) {
    return value != null && `${value}` !== 'false';
}

// @internal
function isPlainObject(value) {
    return toBoolean(value) && value.constructor.name === 'Object';
}

const configKey = 'akitaConfig';
function StoreConfig(metadata) {
    return function (constructor) {
        constructor[configKey] = { idKey: 'id' };
        for (let i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            const key = keys[i];
            /* name is preserved read only key */
            if (key === 'name') {
                constructor[configKey]['storeName'] = metadata[key];
            }
            else {
                constructor[configKey][key] = metadata[key];
            }
        }
    };
}

// @internal
const transactionFinished = new Subject();
// @internal
const transactionInProcess = new BehaviorSubject(false);
// @internal
const transactionManager = {
    activeTransactions: 0,
    batchTransaction: null
};
// @internal
function startBatch() {
    if (!isTransactionInProcess()) {
        transactionManager.batchTransaction = new Subject();
    }
    transactionManager.activeTransactions++;
    transactionInProcess.next(true);
}
// @internal
function endBatch() {
    if (--transactionManager.activeTransactions === 0) {
        transactionManager.batchTransaction.next(true);
        transactionManager.batchTransaction.complete();
        transactionInProcess.next(false);
        transactionFinished.next(true);
    }
}
// @internal
function isTransactionInProcess() {
    return transactionManager.activeTransactions > 0;
}
// @internal
function commit() {
    return transactionManager.batchTransaction ? transactionManager.batchTransaction.asObservable() : of(true);
}
/**
 *  A logical transaction.
 *  Use this transaction to optimize the dispatch of all the stores.
 *  The following code will update the store, BUT  emits only once
 *
 *  @example
 *  applyTransaction(() => {
 *    this.todosStore.add(new Todo(1, title));
 *    this.todosStore.add(new Todo(2, title));
 *  });
 *
 */
function applyTransaction(action, thisArg = undefined) {
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        logAction('@Transaction');
        endBatch();
    }
}
/**
 *  A logical transaction.
 *  Use this transaction to optimize the dispatch of all the stores.
 *
 *  The following code will update the store, BUT  emits only once.
 *
 *  @example
 *  @transaction
 *  addTodos() {
 *    this.todosStore.add(new Todo(1, title));
 *    this.todosStore.add(new Todo(2, title));
 *  }
 *
 *
 */
function transaction() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            return applyTransaction(() => {
                return originalMethod.apply(this, args);
            }, this);
        };
        return descriptor;
    };
}
/**
 *
 * RxJS custom operator that wraps the callback inside transaction
 *
 * @example
 *
 * return http.get().pipe(
 *    withTransaction(response > {
 *      store.setActive(1);
 *      store.update();
 *      store.updateEntity(1, {});
 *    })
 * )
 *
 */
function withTransaction(next) {
    return function (source) {
        return source.pipe(tap(value => applyTransaction(() => next(value))));
    };
}

/**
 *
 * Store for managing any type of data
 *
 * @example
 *
 * export interface SessionState {
 *   token: string;
 *   userDetails: UserDetails
 * }
 *
 * export function createInitialState(): SessionState {
 *  return {
 *    token: '',
 *    userDetails: null
 *  };
 * }
 *
 * @StoreConfig({ name: 'session' })
 * export class SessionStore extends Store<SessionState> {
 *   constructor() {
 *    super(createInitialState());
 *   }
 * }
 */
class Store {
    constructor(initialState, options = {}) {
        this.options = options;
        this.inTransaction = false;
        this.cache = {
            active: new BehaviorSubject(false),
            ttl: null,
        };
        this.onInit(initialState);
    }
    /**
     *  Set the loading state
     *
     *  @example
     *
     *  store.setLoading(true)
     *
     */
    setLoading(loading = false) {
        if (loading !== this._value().loading) {
            isDev() && setAction('Set Loading');
            this._setState((state) => (Object.assign(Object.assign({}, state), { loading })));
        }
    }
    /**
     *
     * Set whether the data is cached
     *
     * @example
     *
     * store.setHasCache(true)
     * store.setHasCache(false)
     * store.setHasCache(true, { restartTTL: true })
     *
     */
    setHasCache(hasCache, options = { restartTTL: false }) {
        if (hasCache !== this.cache.active.value) {
            this.cache.active.next(hasCache);
        }
        if (options.restartTTL) {
            const ttlConfig = this.getCacheTTL();
            if (ttlConfig) {
                if (this.cache.ttl !== null) {
                    clearTimeout(this.cache.ttl);
                }
                this.cache.ttl = setTimeout(() => this.setHasCache(false), ttlConfig);
            }
        }
    }
    /**
     *
     * Sometimes we need to access the store value from a store
     *
     * @example middleware
     *
     */
    getValue() {
        return this.storeValue;
    }
    /**
     *  Set the error state
     *
     *  @example
     *
     *  store.setError({text: 'unable to load data' })
     *
     */
    setError(error) {
        if (error !== this._value().error) {
            isDev() && setAction('Set Error');
            this._setState((state) => (Object.assign(Object.assign({}, state), { error })));
        }
    }
    // @internal
    _select(project) {
        return this.store.asObservable().pipe(map((snapshot) => project(snapshot.state)), distinctUntilChanged());
    }
    // @internal
    _value() {
        return this.storeValue;
    }
    // @internal
    _cache() {
        return this.cache.active;
    }
    // @internal
    get config() {
        return this.constructor[configKey] || {};
    }
    // @internal
    get storeName() {
        return this.config.storeName || this.options.storeName || this.options.name;
    }
    // @internal
    get deepFreeze() {
        return this.config.deepFreezeFn || this.options.deepFreezeFn || deepFreeze;
    }
    // @internal
    get cacheConfig() {
        return this.config.cache || this.options.cache;
    }
    get _producerFn() {
        return this.config.producerFn || this.options.producerFn || getGlobalProducerFn();
    }
    // @internal
    get resettable() {
        return isDefined(this.config.resettable) ? this.config.resettable : this.options.resettable;
    }
    // @internal
    _setState(newState, _dispatchAction = true) {
        if (isFunction(newState)) {
            const _newState = newState(this._value());
            this.storeValue = __DEV__ ? this.deepFreeze(_newState) : _newState;
        }
        else {
            this.storeValue = newState;
        }
        if (!this.store) {
            this.store = new BehaviorSubject({ state: this.storeValue });
            if (isDev()) {
                this.store.subscribe(({ action }) => {
                    if (action) {
                        dispatchUpdate(this.storeName, action);
                    }
                });
            }
            return;
        }
        if (isTransactionInProcess()) {
            this.handleTransaction();
            return;
        }
        this.dispatch(this.storeValue, _dispatchAction);
    }
    /**
     *
     * Reset the current store back to the initial value
     *
     * @example
     *
     * store.reset()
     *
     */
    reset() {
        if (this.isResettable()) {
            isDev() && setAction('Reset');
            this._setState(() => Object.assign({}, this._initialState));
            this.setHasCache(false);
        }
        else {
            isDev() && console.warn(`You need to enable the reset functionality`);
        }
    }
    update(stateOrCallback) {
        isDev() && setAction('Update');
        let newState;
        const currentState = this._value();
        if (isFunction(stateOrCallback)) {
            newState = isFunction(this._producerFn) ? this._producerFn(currentState, stateOrCallback) : stateOrCallback(currentState);
        }
        else {
            newState = stateOrCallback;
        }
        const withHook = this.akitaPreUpdate(currentState, Object.assign(Object.assign({}, currentState), newState));
        const resolved = isPlainObject(currentState) ? withHook : new currentState.constructor(withHook);
        this._setState(resolved);
    }
    updateStoreConfig(newOptions) {
        this.options = Object.assign(Object.assign({}, this.options), newOptions);
    }
    // @internal
    akitaPreUpdate(_, nextState) {
        return nextState;
    }
    /**
     *
     * @deprecated
     *
     * This method will be removed in v7
     *
     * Akita isn't coupled to Angular and should not use Angular
     * specific code
     *
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     *
     * Destroy the store
     *
     * @example
     *
     * store.destroy()
     *
     */
    destroy() {
        const hmrEnabled = isBrowser ? window.hmrEnabled : false;
        if (!hmrEnabled && this === __stores__[this.storeName]) {
            delete __stores__[this.storeName];
            dispatchDeleted(this.storeName);
            this.setHasCache(false);
            this.cache.active.complete();
            this.store.complete();
        }
    }
    onInit(initialState) {
        __stores__[this.storeName] = this;
        this._setState(() => initialState);
        dispatchAdded(this.storeName);
        if (this.isResettable()) {
            this._initialState = initialState;
        }
        isDev() && assertStoreHasName(this.storeName, this.constructor.name);
    }
    dispatch(state, _dispatchAction = true) {
        let action = undefined;
        if (_dispatchAction) {
            action = currentAction;
            resetCustomAction();
        }
        this.store.next({ state, action });
    }
    watchTransaction() {
        commit().subscribe(() => {
            this.inTransaction = false;
            this.dispatch(this._value());
        });
    }
    isResettable() {
        if (this.resettable === false) {
            return false;
        }
        return this.resettable || getAkitaConfig().resettable;
    }
    handleTransaction() {
        if (!this.inTransaction) {
            this.watchTransaction();
            this.inTransaction = true;
        }
    }
    getCacheTTL() {
        return (this.cacheConfig && this.cacheConfig.ttl) || getAkitaConfig().ttl;
    }
}

// @internal
function updateEntities({ state, ids, idKey, newStateOrFn, preUpdateEntity, producerFn, onEntityIdChanges }) {
    const updatedEntities = {};
    let isUpdatingIdKey = false;
    let idToUpdate;
    for (const id of ids) {
        // if the entity doesn't exist don't do anything
        if (hasEntity(state.entities, id) === false) {
            continue;
        }
        const oldEntity = state.entities[id];
        let newState;
        if (isFunction(newStateOrFn)) {
            newState = isFunction(producerFn) ? producerFn(oldEntity, newStateOrFn) : newStateOrFn(oldEntity);
        }
        else {
            newState = newStateOrFn;
        }
        const isIdChanged = newState.hasOwnProperty(idKey) && newState[idKey] !== oldEntity[idKey];
        let newEntity;
        idToUpdate = id;
        if (isIdChanged) {
            isUpdatingIdKey = true;
            idToUpdate = newState[idKey];
        }
        const merged = Object.assign(Object.assign({}, oldEntity), newState);
        if (isPlainObject(oldEntity)) {
            newEntity = merged;
        }
        else {
            /**
             * In case that new state is class of it's own, there's
             * a possibility that it will be different than the old
             * class.
             * For example, Old state is an instance of animal class
             * and new state is instance of person class.
             * To avoid run over new person class with the old animal
             * class we check if the new state is a class of it's own.
             * If so, use it. Otherwise, use the old state class
             */
            if (isPlainObject(newState)) {
                newEntity = new oldEntity.constructor(merged);
            }
            else {
                newEntity = new newState.constructor(merged);
            }
        }
        updatedEntities[idToUpdate] = preUpdateEntity(oldEntity, newEntity);
    }
    let updatedIds = state.ids;
    let stateEntities = state.entities;
    if (isUpdatingIdKey) {
        const [id] = ids;
        const _a = state.entities, _b = id, deletedEntity = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        stateEntities = rest;
        updatedIds = state.ids.map((current) => (current === id ? idToUpdate : current));
        onEntityIdChanges(id, idToUpdate);
    }
    return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, stateEntities), updatedEntities), ids: updatedIds });
}

var _a, _b;
/**
 *
 * Store for managing a collection of entities
 *
 * @example
 *
 * export interface WidgetsState extends EntityState<Widget> { }
 *
 * @StoreConfig({ name: 'widgets' })
 *  export class WidgetsStore extends EntityStore<WidgetsState> {
 *   constructor() {
 *     super();
 *   }
 * }
 *
 *
 */
class EntityStore extends Store {
    constructor(initialState = {}, options = {}) {
        super(Object.assign(Object.assign({}, getInitialEntitiesState()), initialState), options);
        this.options = options;
        this.entityActions = new Subject();
        this.entityIdChanges = new Subject();
    }
    // @internal
    get selectEntityAction$() {
        return this.entityActions.asObservable();
    }
    // @internal
    get selectEntityIdChanges$() {
        return this.entityIdChanges.asObservable();
    }
    // @internal
    get idKey() {
        return this.config.idKey || this.options.idKey || DEFAULT_ID_KEY;
    }
    /**
     *
     * Replace current collection with provided collection
     *
     * @example
     *
     * this.store.set([Entity, Entity])
     * this.store.set({ids: [], entities: {}})
     * this.store.set({ 1: {}, 2: {}})
     *
     */
    set(entities, options = {}) {
        if (isNil(entities))
            return;
        isDev() && setAction('Set Entity');
        const isNativePreAdd = this.akitaPreAddEntity === EntityStore.prototype.akitaPreAddEntity;
        this.setHasCache(true, { restartTTL: true });
        this._setState((state) => {
            const newState = setEntities({
                state,
                entities,
                idKey: this.idKey,
                preAddEntity: this.akitaPreAddEntity,
                isNativePreAdd,
            });
            if (isUndefined(options.activeId) === false) {
                newState.active = options.activeId;
            }
            return newState;
        });
        if (this.hasInitialUIState()) {
            this.handleUICreation();
        }
        this.entityActions.next({ type: EntityActions.Set, ids: this.ids });
    }
    /**
     * Add entities
     *
     * @example
     *
     * this.store.add([Entity, Entity])
     * this.store.add(Entity)
     * this.store.add(Entity, { prepend: true })
     *
     * this.store.add(Entity, { loading: false })
     */
    add(entities, options = { loading: false }) {
        const collection = coerceArray(entities);
        if (isEmpty(collection))
            return;
        const data = addEntities({
            state: this._value(),
            preAddEntity: this.akitaPreAddEntity,
            entities: collection,
            idKey: this.idKey,
            options,
        });
        if (data) {
            isDev() && setAction('Add Entity');
            data.newState.loading = options.loading;
            this._setState(() => data.newState);
            if (this.hasInitialUIState()) {
                this.handleUICreation(true);
            }
            this.entityActions.next({ type: EntityActions.Add, ids: data.newIds });
        }
    }
    update(idsOrFnOrState, newStateOrFn) {
        if (isUndefined(newStateOrFn)) {
            super.update(idsOrFnOrState);
            return;
        }
        let ids = [];
        if (isFunction(idsOrFnOrState)) {
            // We need to filter according the predicate function
            ids = this.ids.filter((id) => idsOrFnOrState(this.entities[id]));
        }
        else {
            // If it's nil we want all of them
            ids = isNil(idsOrFnOrState) ? this.ids : coerceArray(idsOrFnOrState);
        }
        if (isEmpty(ids))
            return;
        isDev() && setAction('Update Entity', ids);
        let entityIdChanged;
        this._setState((state) => updateEntities({
            idKey: this.idKey,
            ids,
            preUpdateEntity: this.akitaPreUpdateEntity,
            state,
            newStateOrFn,
            producerFn: this._producerFn,
            onEntityIdChanges: (oldId, newId) => {
                entityIdChanged = { oldId, newId };
                this.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), { pending: true }));
            },
        }));
        if (entityIdChanged) {
            this.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), { pending: false }));
        }
        this.entityActions.next({ type: EntityActions.Update, ids });
    }
    upsert(ids, newState, onCreate, options = {}) {
        const toArray = coerceArray(ids);
        const predicate = (isUpdate) => (id) => hasEntity(this.entities, id) === isUpdate;
        const baseClass = isFunction(onCreate) ? options.baseClass : onCreate ? onCreate.baseClass : undefined;
        const isClassBased = isFunction(baseClass);
        const updateIds = toArray.filter(predicate(true));
        const newEntities = toArray.filter(predicate(false)).map((id) => {
            const newStateObj = typeof newState === 'function' ? newState({}) : newState;
            const entity = isFunction(onCreate) ? onCreate(id, newStateObj) : newStateObj;
            const withId = Object.assign(Object.assign({}, entity), { [this.idKey]: id });
            if (isClassBased) {
                return new baseClass(withId);
            }
            return withId;
        });
        // it can be any of the three types
        this.update(updateIds, newState);
        this.add(newEntities);
        isDev() && logAction('Upsert Entity');
    }
    /**
     *
     * Upsert entity collection (idKey must be present)
     *
     * @example
     *
     * store.upsertMany([ { id: 1 }, { id: 2 }]);
     *
     * store.upsertMany([ { id: 1 }, { id: 2 }], { loading: true  });
     * store.upsertMany([ { id: 1 }, { id: 2 }], { baseClass: Todo  });
     *
     */
    upsertMany(entities, options = {}) {
        const addedIds = [];
        const updatedIds = [];
        const updatedEntities = {};
        // Update the state directly to optimize performance
        for (const entity of entities) {
            const withPreCheckHook = this.akitaPreCheckEntity(entity);
            const id = withPreCheckHook[this.idKey];
            if (hasEntity(this.entities, id)) {
                const prev = this._value().entities[id];
                const merged = Object.assign(Object.assign({}, this._value().entities[id]), withPreCheckHook);
                const next = options.baseClass ? new options.baseClass(merged) : merged;
                const withHook = this.akitaPreUpdateEntity(prev, next);
                const nextId = withHook[this.idKey];
                updatedEntities[nextId] = withHook;
                updatedIds.push(nextId);
            }
            else {
                const newEntity = options.baseClass ? new options.baseClass(withPreCheckHook) : withPreCheckHook;
                const withHook = this.akitaPreAddEntity(newEntity);
                const nextId = withHook[this.idKey];
                addedIds.push(nextId);
                updatedEntities[nextId] = withHook;
            }
        }
        isDev() && logAction('Upsert Many');
        this._setState((state) => (Object.assign(Object.assign({}, state), { ids: addedIds.length ? [...state.ids, ...addedIds] : state.ids, entities: Object.assign(Object.assign({}, state.entities), updatedEntities), loading: !!options.loading })));
        updatedIds.length && this.entityActions.next({ type: EntityActions.Update, ids: updatedIds });
        addedIds.length && this.entityActions.next({ type: EntityActions.Add, ids: addedIds });
        if (addedIds.length && this.hasUIStore()) {
            this.handleUICreation(true);
        }
    }
    /**
     *
     * Replace one or more entities (except the id property)
     *
     *
     * @example
     *
     * this.store.replace(5, newEntity)
     * this.store.replace([1,2,3], newEntity)
     */
    replace(ids, newState) {
        const toArray = coerceArray(ids);
        if (isEmpty(toArray))
            return;
        const replaced = {};
        for (const id of toArray) {
            replaced[id] = Object.assign(Object.assign({}, newState), { [this.idKey]: id });
        }
        isDev() && setAction('Replace Entity', ids);
        this._setState((state) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), replaced) })));
    }
    /**
     *
     * Move entity inside the collection
     *
     *
     * @example
     *
     * this.store.move(fromIndex, toIndex)
     */
    move(from, to) {
        const ids = this.ids.slice();
        ids.splice(to < 0 ? ids.length + to : to, 0, ids.splice(from, 1)[0]);
        isDev() && setAction('Move Entity');
        this._setState((state) => (Object.assign(Object.assign({}, state), { 
            // Change the entities reference so that selectAll emit
            entities: Object.assign({}, state.entities), ids })));
    }
    remove(idsOrFn) {
        if (isEmpty(this.ids))
            return;
        const idPassed = isDefined(idsOrFn);
        // null means remove all
        let ids = [];
        if (isFunction(idsOrFn)) {
            ids = this.ids.filter((entityId) => idsOrFn(this.entities[entityId]));
        }
        else {
            ids = idPassed ? coerceArray(idsOrFn) : this.ids;
        }
        if (isEmpty(ids))
            return;
        isDev() && setAction('Remove Entity', ids);
        this._setState((state) => removeEntities({ state, ids }));
        if (!idPassed) {
            this.setHasCache(false);
        }
        this.handleUIRemove(ids);
        this.entityActions.next({ type: EntityActions.Remove, ids });
    }
    /**
     *
     * Update the active entity
     *
     * @example
     *
     * this.store.updateActive({ completed: true })
     * this.store.updateActive(active => {
     *   return {
     *     config: {
     *      ..active.config,
     *      date
     *     }
     *   }
     * })
     */
    updateActive(newStateOrCallback) {
        const ids = coerceArray(this.active);
        isDev() && setAction('Update Active', ids);
        this.update(ids, newStateOrCallback);
    }
    setActive(idOrOptions) {
        const active = getActiveEntities(idOrOptions, this.ids, this.active);
        if (active === undefined) {
            return;
        }
        isDev() && setAction('Set Active', active);
        this._setActive(active);
    }
    /**
     * Add active entities
     *
     * @example
     *
     * store.addActive(2);
     * store.addActive([3, 4, 5]);
     */
    addActive(ids) {
        const toArray = coerceArray(ids);
        if (isEmpty(toArray))
            return;
        const everyExist = toArray.every((id) => this.active.indexOf(id) > -1);
        if (everyExist)
            return;
        isDev() && setAction('Add Active', ids);
        this._setState((state) => {
            /** Protect against case that one of the items in the array exist */
            const uniques = Array.from(new Set([...state.active, ...toArray]));
            return Object.assign(Object.assign({}, state), { active: uniques });
        });
    }
    /**
     * Remove active entities
     *
     * @example
     *
     * store.removeActive(2)
     * store.removeActive([3, 4, 5])
     */
    removeActive(ids) {
        const toArray = coerceArray(ids);
        if (isEmpty(toArray))
            return;
        const someExist = toArray.some((id) => this.active.indexOf(id) > -1);
        if (!someExist)
            return;
        isDev() && setAction('Remove Active', ids);
        this._setState((state) => {
            return Object.assign(Object.assign({}, state), { active: Array.isArray(state.active) ? state.active.filter((currentId) => toArray.indexOf(currentId) === -1) : null });
        });
    }
    /**
     * Toggle active entities
     *
     * @example
     *
     * store.toggle(2)
     * store.toggle([3, 4, 5])
     */
    toggleActive(ids) {
        const toArray = coerceArray(ids);
        const filterExists = (remove) => (id) => this.active.includes(id) === remove;
        const remove = toArray.filter(filterExists(true));
        const add = toArray.filter(filterExists(false));
        this.removeActive(remove);
        this.addActive(add);
        isDev() && logAction('Toggle Active');
    }
    /**
     *
     * Create sub UI store for managing Entity's UI state
     *
     * @example
     *
     * export type ProductUI = {
     *   isLoading: boolean;
     *   isOpen: boolean
     * }
     *
     * interface ProductsUIState extends EntityState<ProductUI> {}
     *
     * export class ProductsStore EntityStore<ProductsState, Product> {
     *   ui: EntityUIStore<ProductsUIState, ProductUI>;
     *
     *   constructor() {
     *     super();
     *     this.createUIStore();
     *   }
     *
     * }
     */
    createUIStore(initialState = {}, storeConfig = {}) {
        const defaults = { name: `UI/${this.storeName}`, idKey: this.idKey };
        this.ui = new EntityUIStore(initialState, Object.assign(Object.assign({}, defaults), storeConfig));
        return this.ui;
    }
    // @internal
    destroy() {
        super.destroy();
        if (this.ui instanceof EntityStore) {
            this.ui.destroy();
        }
        this.entityActions.complete();
    }
    // @internal
    akitaPreUpdateEntity(_, nextEntity) {
        return nextEntity;
    }
    // @internal
    akitaPreAddEntity(newEntity) {
        return newEntity;
    }
    // @internal
    akitaPreCheckEntity(newEntity) {
        return newEntity;
    }
    get ids() {
        return this._value().ids;
    }
    get entities() {
        return this._value().entities;
    }
    get active() {
        return this._value().active;
    }
    _setActive(ids) {
        this._setState((state) => {
            return Object.assign(Object.assign({}, state), { active: ids });
        });
    }
    handleUICreation(add = false) {
        const ids = this.ids;
        const isFunc = isFunction(this.ui._akitaCreateEntityFn);
        let uiEntities;
        const createFn = (id) => {
            const current = this.entities[id];
            const ui = isFunc ? this.ui._akitaCreateEntityFn(current) : this.ui._akitaCreateEntityFn;
            return Object.assign({ [this.idKey]: current[this.idKey] }, ui);
        };
        if (add) {
            uiEntities = this.ids.filter((id) => isUndefined(this.ui.entities[id])).map(createFn);
        }
        else {
            uiEntities = ids.map(createFn);
        }
        add ? this.ui.add(uiEntities) : this.ui.set(uiEntities);
    }
    hasInitialUIState() {
        return this.hasUIStore() && isUndefined(this.ui._akitaCreateEntityFn) === false;
    }
    handleUIRemove(ids) {
        if (this.hasUIStore()) {
            this.ui.remove(ids);
        }
    }
    hasUIStore() {
        return this.ui instanceof EntityUIStore;
    }
}
__decorate([
    transaction(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], EntityStore.prototype, "upsert", null);
__decorate([
    transaction(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof T !== "undefined" && T) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], EntityStore.prototype, "toggleActive", null);
// @internal
class EntityUIStore extends EntityStore {
    constructor(initialState = {}, storeConfig = {}) {
        super(initialState, storeConfig);
    }
    /**
     *
     * Set the initial UI entity state. This function will determine the entity's
     * initial state when we call `set()` or `add()`.
     *
     * @example
     *
     * constructor() {
     *   super();
     *   this.createUIStore().setInitialEntityState(entity => ({ isLoading: false, isOpen: true }));
     *   this.createUIStore().setInitialEntityState({ isLoading: false, isOpen: true });
     * }
     *
     */
    setInitialEntityState(createFn) {
        this._akitaCreateEntityFn = createFn;
    }
}

/**
 * @example
 *
 * query.selectEntity(2).pipe(filterNil)
 * @deprecated Use the operator function filterNilValue()
 */
const filterNil = (source) => source.pipe(filter((value) => value !== null && typeof value !== 'undefined'));
/**
 * @example
 *
 * query.selectEntity(2).pipe(filterNilValue())
 */
function filterNilValue() {
    return filter((value) => value !== null && value !== undefined);
}

const queryConfigKey = 'akitaQueryConfig';
function QueryConfig(metadata) {
    return function (constructor) {
        constructor[queryConfigKey] = {};
        for (let i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            const key = keys[i];
            constructor[queryConfigKey][key] = metadata[key];
        }
    };
}

// @internal
function isString(value) {
    return typeof value === 'string';
}

function compareKeys(keysOrFuncs) {
    return function (prevState, currState) {
        const isFns = isFunction(keysOrFuncs[0]);
        // Return when they are NOT changed
        return keysOrFuncs.some(keyOrFunc => {
            if (isFns) {
                return keyOrFunc(prevState) !== keyOrFunc(currState);
            }
            return prevState[keyOrFunc] !== currState[keyOrFunc];
        }) === false;
    };
}

class Query {
    constructor(store) {
        this.store = store;
        this.__store__ = store;
        if (isDev()) {
            // @internal
            __queries__[store.storeName] = this;
        }
    }
    select(project) {
        let mapFn;
        if (isFunction(project)) {
            mapFn = project;
        }
        else if (isString(project)) {
            mapFn = state => state[project];
        }
        else if (Array.isArray(project)) {
            return this.store
                ._select(state => state)
                .pipe(distinctUntilChanged(compareKeys(project)), map(state => {
                if (isFunction(project[0])) {
                    return project.map(func => func(state));
                }
                return project.reduce((acc, k) => {
                    acc[k] = state[k];
                    return acc;
                }, {});
            }));
        }
        else {
            mapFn = state => state;
        }
        return this.store._select(mapFn);
    }
    /**
     * Select the loading state
     *
     * @example
     *
     * this.query.selectLoading().subscribe(isLoading => {})
     */
    selectLoading() {
        return this.select(state => state.loading);
    }
    /**
     * Select the error state
     *
     * @example
     *
     * this.query.selectError().subscribe(error => {})
     */
    selectError() {
        return this.select(state => state.error);
    }
    /**
     * Get the store's value
     *
     * @example
     *
     * this.query.getValue()
     *
     */
    getValue() {
        return this.store._value();
    }
    /**
     * Select the cache state
     *
     * @example
     *
     * this.query.selectHasCache().pipe(
     *   switchMap(hasCache => {
     *     return hasCache ? of() : http().pipe(res => store.set(res))
     *   })
     * )
     */
    selectHasCache() {
        return this.store._cache().asObservable();
    }
    /**
     * Whether we've cached data
     *
     * @example
     *
     * this.query.getHasCache()
     *
     */
    getHasCache() {
        return this.store._cache().value;
    }
    // @internal
    get config() {
        return this.constructor[queryConfigKey];
    }
}

// @internal
function findEntityByPredicate(predicate, entities) {
    for (const entityId of Object.keys(entities)) {
        if (predicate(entities[entityId]) === true) {
            return entityId;
        }
    }
    return undefined;
}
// @internal
function getEntity(id, project) {
    return function (entities) {
        const entity = entities[id];
        if (isUndefined(entity)) {
            return undefined;
        }
        if (!project) {
            return entity;
        }
        if (isString(project)) {
            return entity[project];
        }
        return project(entity);
    };
}

// @internal
function mapSkipUndefined(arr, callbackFn) {
    return arr.reduce((result, value, index, array) => {
        const val = callbackFn(value, index, array);
        if (val !== undefined) {
            result.push(val);
        }
        return result;
    }, []);
}

// @internal
function sortByOptions(options, config) {
    options.sortBy = options.sortBy || (config && config.sortBy);
    options.sortByOrder = options.sortByOrder || (config && config.sortByOrder);
}

/**
 *
 *  The Entity Query is similar to the general Query, with additional functionality tailored for EntityStores.
 *
 *  class WidgetsQuery extends QueryEntity<WidgetsState> {
 *     constructor(protected store: WidgetsStore) {
 *       super(store);
 *     }
 *  }
 *
 *
 *
 */
class QueryEntity extends Query {
    constructor(store, options = {}) {
        super(store);
        this.options = options;
        this.__store__ = store;
    }
    selectAll(options = {
        asObject: false,
    }) {
        return this.select((state) => state.entities).pipe(map(() => this.getAll(options)));
    }
    getAll(options = { asObject: false, filterBy: undefined, limitTo: undefined }) {
        if (options.asObject) {
            return entitiesToMap(this.getValue(), options);
        }
        sortByOptions(options, this.config || this.options);
        return entitiesToArray(this.getValue(), options);
    }
    selectMany(ids, project) {
        if (!ids || !ids.length)
            return of([]);
        return this.select((state) => state.entities).pipe(map((entities) => mapSkipUndefined(ids, (id) => getEntity(id, project)(entities))), distinctUntilArrayItemChanged());
    }
    selectEntity(idOrPredicate, project) {
        let id = idOrPredicate;
        if (isFunction(idOrPredicate)) {
            // For performance reason we expect the entity to be in the store
            id = findEntityByPredicate(idOrPredicate, this.getValue().entities);
        }
        return this.select((state) => state.entities).pipe(map(getEntity(id, project)), distinctUntilChanged());
    }
    /**
     * Get an entity by id
     *
     * @example
     *
     * this.query.getEntity(1);
     */
    getEntity(id) {
        return this.getValue().entities[id];
    }
    /**
     * Select the active entity's id
     *
     * @example
     *
     * this.query.selectActiveId()
     */
    selectActiveId() {
        return this.select((state) => state.active);
    }
    /**
     * Get the active id
     *
     * @example
     *
     * this.query.getActiveId()
     */
    getActiveId() {
        return this.getValue().active;
    }
    selectActive(project) {
        if (isArray(this.getActive())) {
            return this.selectActiveId().pipe(switchMap((ids) => this.selectMany(ids, project)));
        }
        return this.selectActiveId().pipe(switchMap((ids) => this.selectEntity(ids, project)));
    }
    getActive() {
        const activeId = this.getActiveId();
        if (isArray(activeId)) {
            return activeId.map((id) => this.getValue().entities[id]);
        }
        return toBoolean(activeId) ? this.getEntity(activeId) : undefined;
    }
    /**
     * Select the store's entity collection length
     *
     * @example
     *
     * this.query.selectCount()
     * this.query.selectCount(entity => entity.completed)
     */
    selectCount(predicate) {
        return this.select((state) => state.entities).pipe(map(() => this.getCount(predicate)));
    }
    /**
     * Get the store's entity collection length
     *
     * @example
     *
     * this.query.getCount()
     * this.query.getCount(entity => entity.completed)
     */
    getCount(predicate) {
        if (isFunction(predicate)) {
            return this.getAll().filter(predicate).length;
        }
        return this.getValue().ids.length;
    }
    selectLast(project) {
        return this.selectAt((ids) => ids[ids.length - 1], project);
    }
    selectFirst(project) {
        return this.selectAt((ids) => ids[0], project);
    }
    selectEntityAction(actionOrActions) {
        if (isNil(actionOrActions)) {
            return this.store.selectEntityAction$;
        }
        const project = isArray(actionOrActions) ? (action) => action : ({ ids }) => ids;
        const actions = coerceArray(actionOrActions);
        return this.store.selectEntityAction$.pipe(filter(({ type }) => actions.includes(type)), map((action) => project(action)));
    }
    hasEntity(projectOrIds) {
        if (isNil(projectOrIds)) {
            return this.getValue().ids.length > 0;
        }
        if (isFunction(projectOrIds)) {
            return this.getAll().some(projectOrIds);
        }
        if (isArray(projectOrIds)) {
            return projectOrIds.every((id) => id in this.getValue().entities);
        }
        return projectOrIds in this.getValue().entities;
    }
    /**
     * Returns whether entity store has an active entity
     *
     * @example
     *
     * this.query.hasActive()
     * this.query.hasActive(3)
     *
     */
    hasActive(id) {
        const active = this.getValue().active;
        const isIdProvided = isDefined(id);
        if (Array.isArray(active)) {
            if (isIdProvided) {
                return active.includes(id);
            }
            return active.length > 0;
        }
        return isIdProvided ? active === id : isDefined(active);
    }
    /**
     *
     * Create sub UI query for querying Entity's UI state
     *
     * @example
     *
     *
     * export class ProductsQuery extends QueryEntity<ProductsState> {
     *   ui: EntityUIQuery<ProductsUIState>;
     *
     *   constructor(protected store: ProductsStore) {
     *     super(store);
     *     this.createUIQuery();
     *   }
     *
     * }
     */
    createUIQuery() {
        this.ui = new EntityUIQuery(this.__store__.ui);
    }
    selectAt(mapFn, project) {
        return this.select((state) => state.ids).pipe(map(mapFn), distinctUntilChanged(), switchMap((id) => this.selectEntity(id, project)));
    }
}
// @internal
class EntityUIQuery extends QueryEntity {
    constructor(store) {
        super(store);
    }
}

function createStore(initialState, options) {
    return new Store(initialState, options);
}
function createQuery(store) {
    return new Query(store);
}
function createEntityStore(initialState, options) {
    return new EntityStore(initialState, options);
}
function createEntityQuery(store, options = {}) {
    return new QueryEntity(store, options);
}

/**
 * @internal
 *
 * @example
 *
 * getValue(state, 'todos.ui')
 *
 */
function getValue(obj, prop) {
    /** return the whole state  */
    if (prop.split('.').length === 1) {
        return obj;
    }
    const removeStoreName = prop
        .split('.')
        .slice(1)
        .join('.');
    return removeStoreName.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Generate random guid
 *
 * @example
 *
 * {
 *   id: guid()
 * }
 *
 * @remarks this isn't a GUID, but a 10 char random alpha-num
 */
function guid() {
    return Math.random()
        .toString(36)
        .slice(2);
}

// @internal
function isNumber(value) {
    return !isArray(value) && value - parseFloat(value) + 1 >= 0;
}

/**
 * @internal
 *
 * @example
 * setValue(state, 'todos.ui', { filter: {} })
 */
function setValue(obj, prop, val, replace = false) {
    const split = prop.split('.');
    if (split.length === 1) {
        return Object.assign(Object.assign({}, obj), val);
    }
    obj = Object.assign({}, obj);
    const lastIndex = split.length - 2;
    const removeStoreName = prop.split('.').slice(1);
    removeStoreName.reduce((acc, part, index) => {
        if (index !== lastIndex) {
            acc[part] = Object.assign({}, acc[part]);
            return acc && acc[part];
        }
        acc[part] = replace || Array.isArray(acc[part]) || !isObject(acc[part]) ? val : Object.assign(Object.assign({}, acc[part]), val);
        return acc && acc[part];
    }, obj);
    return obj;
}

let skipStorageUpdate = false;
const _persistStateInit = new ReplaySubject(1);
function selectPersistStateInit() {
    return _persistStateInit.asObservable();
}
function setSkipStorageUpdate(skip) {
    skipStorageUpdate = skip;
}
function getSkipStorageUpdate() {
    return skipStorageUpdate;
}
function isPromise(v) {
    return v && isFunction(v.then);
}
function observify(asyncOrValue) {
    if (isPromise(asyncOrValue) || isObservable(asyncOrValue)) {
        return from(asyncOrValue);
    }
    return of(asyncOrValue);
}
function persistState(params) {
    const defaults = {
        key: 'AkitaStores',
        enableInNonBrowser: false,
        storage: !hasLocalStorage() ? params.storage : localStorage,
        deserialize: JSON.parse,
        serialize: JSON.stringify,
        include: [],
        select: [],
        persistOnDestroy: false,
        preStorageUpdate: function (storeName, state) {
            return state;
        },
        preStoreUpdate: function (storeName, state) {
            return state;
        },
        skipStorageUpdate: getSkipStorageUpdate,
        preStorageUpdateOperator: () => (source) => source,
    };
    const { storage, enableInNonBrowser, deserialize, serialize, include, select, key, preStorageUpdate, persistOnDestroy, preStorageUpdateOperator, preStoreUpdate, skipStorageUpdate } = Object.assign({}, defaults, params);
    if ((isNotBrowser && !enableInNonBrowser) || !storage)
        return;
    const hasInclude = include.length > 0;
    const hasSelect = select.length > 0;
    let includeStores;
    let selectStores;
    if (hasInclude) {
        includeStores = include.reduce((acc, path) => {
            if (isFunction(path)) {
                acc.fns.push(path);
            }
            else {
                const storeName = path.split('.')[0];
                acc[storeName] = path;
            }
            return acc;
        }, { fns: [] });
    }
    if (hasSelect) {
        selectStores = select.reduce((acc, selectFn) => {
            acc[selectFn.storeName] = selectFn;
            return acc;
        }, {});
    }
    let stores = {};
    let acc = {};
    let subscriptions = [];
    const buffer = [];
    function _save(v) {
        observify(v).subscribe(() => {
            const next = buffer.shift();
            next && _save(next);
        });
    }
    // when we use the local/session storage we perform the serialize, otherwise we let the passed storage implementation to do it
    const isLocalStorage = (hasLocalStorage() && storage === localStorage) || (hasSessionStorage() && storage === sessionStorage);
    observify(storage.getItem(key)).subscribe((value) => {
        let storageState = isObject(value) ? value : deserialize(value || '{}');
        function save(storeCache) {
            storageState['$cache'] = Object.assign(Object.assign({}, (storageState['$cache'] || {})), storeCache);
            storageState = Object.assign({}, storageState, acc);
            buffer.push(storage.setItem(key, isLocalStorage ? serialize(storageState) : storageState));
            _save(buffer.shift());
        }
        function subscribe(storeName, path) {
            stores[storeName] = __stores__[storeName]
                ._select((state) => getValue(state, path))
                .pipe(skip(1), map((store) => {
                if (hasSelect && selectStores[storeName]) {
                    return selectStores[storeName](store);
                }
                return store;
            }), filter(() => skipStorageUpdate() === false), preStorageUpdateOperator())
                .subscribe((data) => {
                acc[storeName] = preStorageUpdate(storeName, data);
                Promise.resolve().then(() => save({ [storeName]: __stores__[storeName]._cache().getValue() }));
            });
        }
        function setInitial(storeName, store, path) {
            if (storeName in storageState) {
                setAction('@PersistState');
                store._setState((state) => {
                    return setValue(state, path, preStoreUpdate(storeName, storageState[storeName], state));
                });
                const hasCache = storageState['$cache'] ? storageState['$cache'][storeName] : false;
                __stores__[storeName].setHasCache(hasCache, { restartTTL: true });
            }
        }
        subscriptions.push($$deleteStore.subscribe((storeName) => {
            if (stores[storeName]) {
                if (persistOnDestroy === false) {
                    save({ [storeName]: false });
                }
                stores[storeName].unsubscribe();
                delete stores[storeName];
            }
        }));
        subscriptions.push($$addStore.subscribe((storeName) => {
            if (storeName === 'router') {
                return;
            }
            const store = __stores__[storeName];
            if (hasInclude) {
                let path = includeStores[storeName];
                if (!path) {
                    const passPredicate = includeStores.fns.some((fn) => fn(storeName));
                    if (passPredicate) {
                        path = storeName;
                    }
                    else {
                        return;
                    }
                }
                setInitial(storeName, store, path);
                subscribe(storeName, path);
            }
            else {
                setInitial(storeName, store, storeName);
                subscribe(storeName, storeName);
            }
        }));
        _persistStateInit.next();
    });
    return {
        destroy() {
            subscriptions.forEach((s) => s.unsubscribe());
            for (let i = 0, keys = Object.keys(stores); i < keys.length; i++) {
                const storeName = keys[i];
                stores[storeName].unsubscribe();
            }
            stores = {};
        },
        clear() {
            storage.clear();
        },
        clearStore(storeName) {
            if (isNil(storeName)) {
                const value = observify(storage.setItem(key, '{}'));
                value.subscribe();
                return;
            }
            const value = storage.getItem(key);
            observify(value).subscribe((v) => {
                const storageState = deserialize(v || '{}');
                if (storageState[storeName]) {
                    delete storageState[storeName];
                    const value = observify(storage.setItem(key, serialize(storageState)));
                    value.subscribe();
                }
            });
        },
    };
}

class AkitaPlugin {
    constructor(query, config) {
        this.query = query;
        if (config && config.resetFn) {
            if (getAkitaConfig().resettable) {
                this.onReset(config.resetFn);
            }
        }
    }
    /** This method is responsible for getting access to the query. */
    getQuery() {
        return this.query;
    }
    /** This method is responsible for getting access to the store. */
    getStore() {
        return this.getQuery().__store__;
    }
    /** This method is responsible tells whether the plugin is entityBased or not.  */
    isEntityBased(entityId) {
        return toBoolean(entityId);
    }
    /** This method is responsible for selecting the source; it can be the whole store or one entity. */
    selectSource(entityId, property) {
        if (this.isEntityBased(entityId)) {
            return this.getQuery().selectEntity(entityId).pipe(filterNilValue());
        }
        if (property) {
            return this.getQuery().select((state) => getValue(state, this.withStoreName(property)));
        }
        return this.getQuery().select();
    }
    getSource(entityId, property) {
        if (this.isEntityBased(entityId)) {
            return this.getQuery().getEntity(entityId);
        }
        const state = this.getQuery().getValue();
        if (property) {
            return getValue(state, this.withStoreName(property));
        }
        return state;
    }
    withStoreName(prop) {
        return `${this.storeName}.${prop}`;
    }
    get storeName() {
        return this.getStore().storeName;
    }
    /** This method is responsible for updating the store or one entity; it can be the whole store or one entity. */
    updateStore(newState, entityId, property, replace = false) {
        if (this.isEntityBased(entityId)) {
            const store = this.getStore();
            replace ? store.replace(entityId, newState) : store.update(entityId, newState);
        }
        else {
            if (property) {
                this.getStore()._setState((state) => {
                    return setValue(state, this.withStoreName(property), newState, true);
                });
                return;
            }
            const nextState = replace ? newState : (state) => (Object.assign(Object.assign({}, state), newState));
            this.getStore()._setState(nextState);
        }
    }
    /**
     * Function to invoke upon reset
     */
    onReset(fn) {
        const original = this.getStore().reset;
        this.getStore().reset = (...params) => {
            /** It should run after the plugin destroy method */
            setTimeout(() => {
                original.apply(this.getStore(), params);
                fn();
            });
        };
    }
}

const ɵ0 = (head, current) => JSON.stringify(head) !== JSON.stringify(current);
const dirtyCheckDefaultParams = {
    comparator: ɵ0,
};
function getNestedPath(nestedObj, path) {
    const pathAsArray = path.split('.');
    return pathAsArray.reduce((obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined), nestedObj);
}
class DirtyCheckPlugin extends AkitaPlugin {
    constructor(query, params, _entityId) {
        super(query);
        this.query = query;
        this.params = params;
        this._entityId = _entityId;
        this.dirty = new BehaviorSubject(false);
        this.active = false;
        this._reset = new Subject();
        this.isDirty$ = this.dirty.asObservable().pipe(distinctUntilChanged());
        this.reset$ = this._reset.asObservable();
        this.params = Object.assign(Object.assign({}, dirtyCheckDefaultParams), params);
        if (this.params.watchProperty) {
            const watchProp = coerceArray(this.params.watchProperty);
            if (query instanceof QueryEntity && watchProp.includes('entities') && !watchProp.includes('ids')) {
                watchProp.push('ids');
            }
            this.params.watchProperty = watchProp;
        }
    }
    reset(params = {}) {
        let currentValue = this.head;
        if (isFunction(params.updateFn)) {
            if (this.isEntityBased(this._entityId)) {
                currentValue = params.updateFn(this.head, this.getQuery().getEntity(this._entityId));
            }
            else {
                currentValue = params.updateFn(this.head, this.getQuery().getValue());
            }
        }
        logAction(`@DirtyCheck - Revert`);
        this.updateStore(currentValue, this._entityId);
        this._reset.next();
    }
    setHead() {
        if (!this.active) {
            this.activate();
            this.active = true;
        }
        else {
            this.head = this._getHead();
        }
        this.updateDirtiness(false);
        return this;
    }
    isDirty() {
        return !!this.dirty.value;
    }
    hasHead() {
        return !!this.getHead();
    }
    destroy() {
        this.head = null;
        this.subscription && this.subscription.unsubscribe();
        this._reset && this._reset.complete();
    }
    isPathDirty(path) {
        const head = this.getHead();
        const current = this.getQuery().getValue();
        const currentPathValue = getNestedPath(current, path);
        const headPathValue = getNestedPath(head, path);
        return this.params.comparator(currentPathValue, headPathValue);
    }
    getHead() {
        return this.head;
    }
    activate() {
        this.head = this._getHead();
        /** if we are tracking specific properties select only the relevant ones */
        const sources = this.params.watchProperty
            ? this.params.watchProperty.map((prop) => this.query
                .select((state) => state[prop])
                .pipe(map((val) => ({
                val,
                __akitaKey: prop,
            }))))
            : [this.selectSource(this._entityId)];
        this.subscription = combineLatest(sources)
            .pipe(skip(1))
            .subscribe((currentState) => {
            if (isUndefined(this.head))
                return;
            /** __akitaKey is used to determine if we are tracking a specific property or a store change */
            const isChange = currentState.some((state) => {
                const head = state.__akitaKey ? this.head[state.__akitaKey] : this.head;
                const compareTo = state.__akitaKey ? state.val : state;
                return this.params.comparator(head, compareTo);
            });
            this.updateDirtiness(isChange);
        });
    }
    updateDirtiness(isDirty) {
        this.dirty.next(isDirty);
    }
    _getHead() {
        let head = this.getSource(this._entityId);
        if (this.params.watchProperty) {
            head = this.getWatchedValues(head);
        }
        return head;
    }
    getWatchedValues(source) {
        return this.params.watchProperty.reduce((watched, prop) => {
            watched[prop] = source[prop];
            return watched;
        }, {});
    }
}

/**
 * Each plugin that wants to add support for entities should extend this interface.
 */
class EntityCollectionPlugin {
    constructor(query, entityIds) {
        this.query = query;
        this.entityIds = entityIds;
        this.entities = new Map();
    }
    /**
     * Get the entity plugin instance.
     */
    getEntity(id) {
        return this.entities.get(id);
    }
    /**
     * Whether the entity plugin exist.
     */
    hasEntity(id) {
        return this.entities.has(id);
    }
    /**
     * Remove the entity plugin instance.
     */
    removeEntity(id) {
        this.destroy(id);
        return this.entities.delete(id);
    }
    /**
     * Set the entity plugin instance.
     */
    createEntity(id, plugin) {
        return this.entities.set(id, plugin);
    }
    /**
     * If the user passes `entityIds` we take them; otherwise, we take all.
     */
    getIds() {
        return isUndefined(this.entityIds) ? this.query.getValue().ids : coerceArray(this.entityIds);
    }
    /**
     * When you call one of the plugin methods, you can pass id/ids or undefined which means all.
     */
    resolvedIds(ids) {
        return isUndefined(ids) ? this.getIds() : coerceArray(ids);
    }
    /**
     * Call this method when you want to activate the plugin on init or when you need to listen to add/remove of entities dynamically.
     *
     * For example in your plugin you may do the following:
     *
     * this.query.select(state => state.ids).pipe(skip(1)).subscribe(ids => this.activate(ids));
     */
    rebase(ids, actions = {}) {
        /**
         *
         * If the user passes `entityIds` & we have new ids check if we need to add/remove instances.
         *
         * This phase will be called only upon update.
         */
        if (toBoolean(ids)) {
            /**
             * Which means all
             */
            if (isUndefined(this.entityIds)) {
                for (let i = 0, len = ids.length; i < len; i++) {
                    const entityId = ids[i];
                    if (this.hasEntity(entityId) === false) {
                        isFunction(actions.beforeAdd) && actions.beforeAdd(entityId);
                        const plugin = this.instantiatePlugin(entityId);
                        this.entities.set(entityId, plugin);
                        isFunction(actions.afterAdd) && actions.afterAdd(plugin);
                    }
                }
                this.entities.forEach((plugin, entityId) => {
                    if (ids.indexOf(entityId) === -1) {
                        isFunction(actions.beforeRemove) && actions.beforeRemove(plugin);
                        this.removeEntity(entityId);
                    }
                });
            }
            else {
                /**
                 * Which means the user passes specific ids
                 */
                const _ids = coerceArray(this.entityIds);
                for (let i = 0, len = _ids.length; i < len; i++) {
                    const entityId = _ids[i];
                    /** The Entity in current ids and doesn't exist, add it. */
                    if (ids.indexOf(entityId) > -1 && this.hasEntity(entityId) === false) {
                        isFunction(actions.beforeAdd) && actions.beforeAdd(entityId);
                        const plugin = this.instantiatePlugin(entityId);
                        this.entities.set(entityId, plugin);
                        isFunction(actions.afterAdd) && actions.afterAdd(plugin);
                    }
                    else {
                        this.entities.forEach((plugin, entityId) => {
                            /** The Entity not in current ids and exists, remove it. */
                            if (ids.indexOf(entityId) === -1 && this.hasEntity(entityId) === true) {
                                isFunction(actions.beforeRemove) && actions.beforeRemove(plugin);
                                this.removeEntity(entityId);
                            }
                        });
                    }
                }
            }
        }
        else {
            /**
             * Otherwise, start with the provided ids or all.
             */
            this.getIds().forEach(id => {
                if (!this.hasEntity(id))
                    this.createEntity(id, this.instantiatePlugin(id));
            });
        }
    }
    /**
     * Listen for add/remove entities.
     */
    selectIds() {
        return this.query.select(state => state.ids);
    }
    /**
     * Base method for activation, you can override it if you need to.
     */
    activate(ids) {
        this.rebase(ids);
    }
    /**
     * Loop over each id and invoke the plugin method.
     */
    forEachId(ids, cb) {
        const _ids = this.resolvedIds(ids);
        for (let i = 0, len = _ids.length; i < len; i++) {
            const id = _ids[i];
            if (this.hasEntity(id)) {
                cb(this.getEntity(id));
            }
        }
    }
}

class EntityDirtyCheckPlugin extends EntityCollectionPlugin {
    constructor(query, params = {}) {
        super(query, params.entityIds);
        this.query = query;
        this.params = params;
        this._someDirty = new Subject();
        this.someDirty$ = merge(this.query.select(state => state.entities), this._someDirty.asObservable()).pipe(auditTime(0), map(() => this.checkSomeDirty()));
        this.params = Object.assign(Object.assign({}, dirtyCheckDefaultParams), params);
        // TODO lazy activate?
        this.activate();
        this.selectIds()
            .pipe(skip(1))
            .subscribe(ids => {
            super.rebase(ids, { afterAdd: plugin => plugin.setHead() });
        });
    }
    setHead(ids) {
        if (this.params.entityIds && ids) {
            const toArray = coerceArray(ids);
            const someAreWatched = coerceArray(this.params.entityIds).some(id => toArray.indexOf(id) > -1);
            if (someAreWatched === false) {
                return this;
            }
        }
        this.forEachId(ids, e => e.setHead());
        this._someDirty.next();
        return this;
    }
    hasHead(id) {
        if (this.entities.has(id)) {
            const entity = this.getEntity(id);
            return entity.hasHead();
        }
        return false;
    }
    reset(ids, params = {}) {
        this.forEachId(ids, e => e.reset(params));
    }
    isDirty(id, asObservable = true) {
        if (this.entities.has(id)) {
            const entity = this.getEntity(id);
            return asObservable ? entity.isDirty$ : entity.isDirty();
        }
        return false;
    }
    someDirty() {
        return this.checkSomeDirty();
    }
    isPathDirty(id, path) {
        if (this.entities.has(id)) {
            const head = this.getEntity(id).getHead();
            const current = this.query.getEntity(id);
            const currentPathValue = getNestedPath(current, path);
            const headPathValue = getNestedPath(head, path);
            return this.params.comparator(currentPathValue, headPathValue);
        }
        return null;
    }
    destroy(ids) {
        this.forEachId(ids, e => e.destroy());
        /** complete only when the plugin destroys */
        if (!ids) {
            this._someDirty.complete();
        }
    }
    instantiatePlugin(id) {
        return new DirtyCheckPlugin(this.query, this.params, id);
    }
    checkSomeDirty() {
        const entitiesIds = this.resolvedIds();
        for (const id of entitiesIds) {
            if (this.getEntity(id).isDirty()) {
                return true;
            }
        }
        return false;
    }
}

const paginatorDefaults = {
    pagesControls: false,
    range: false,
    startWith: 1,
    cacheTimeout: undefined,
    clearStoreWithCache: true,
};
class PaginatorPlugin extends AkitaPlugin {
    constructor(query, config = {}) {
        super(query, {
            resetFn: () => {
                this.initial = false;
                this.destroy({ clearCache: true, currentPage: 1 });
            },
        });
        this.query = query;
        this.config = config;
        /** Save current filters, sorting, etc. in cache */
        this.metadata = new Map();
        this.pages = new Map();
        this.pagination = {
            currentPage: 1,
            perPage: 0,
            total: 0,
            lastPage: 0,
            data: [],
        };
        /**
         * When the user navigates to a different page and return
         * we don't want to call `clearCache` on first time.
         */
        this.initial = true;
        /**
         * Proxy to the query loading
         */
        this.isLoading$ = this.query.selectLoading().pipe(delay(0));
        this.config = Object.assign(Object.assign({}, paginatorDefaults), config);
        const { startWith, cacheTimeout } = this.config;
        this.page = new BehaviorSubject(startWith);
        if (isObservable(cacheTimeout)) {
            this.clearCacheSubscription = cacheTimeout.subscribe(() => this.clearCache());
        }
    }
    /**
     * Listen to page changes
     */
    get pageChanges() {
        return this.page.asObservable();
    }
    /**
     * Get the current page number
     */
    get currentPage() {
        return this.pagination.currentPage;
    }
    /**
     * Check if current page is the first one
     */
    get isFirst() {
        return this.currentPage === 1;
    }
    /**
     * Check if current page is the last one
     */
    get isLast() {
        return this.currentPage === this.pagination.lastPage;
    }
    /**
     * Whether to generate an array of pages for *ngFor
     * [1, 2, 3, 4]
     */
    withControls() {
        this.config.pagesControls = true;
        return this;
    }
    /**
     * Whether to generate the `from` and `to` keys
     * [1, 2, 3, 4]
     */
    withRange() {
        this.config.range = true;
        return this;
    }
    /**
     * Set the loading state
     */
    setLoading(value = true) {
        this.getStore().setLoading(value);
    }
    /**
     * Update the pagination object and add the page
     */
    update(response) {
        this.pagination = response;
        this.addPage(response.data);
    }
    /**
     *
     * Set the ids and add the page to store
     */
    addPage(data) {
        this.pages.set(this.currentPage, { ids: data.map((entity) => entity[this.getStore().idKey]) });
        this.getStore().upsertMany(data);
    }
    /**
     * Clear the cache.
     */
    clearCache(options = {}) {
        if (!this.initial) {
            logAction('@Pagination - Clear Cache');
            if (options.clearStore !== false && (this.config.clearStoreWithCache || options.clearStore)) {
                this.getStore().remove();
            }
            this.pages = new Map();
            this.metadata = new Map();
        }
        this.initial = false;
    }
    clearPage(page) {
        this.pages.delete(page);
    }
    /**
     * Clear the cache timeout and optionally the pages
     */
    destroy({ clearCache, currentPage } = {}) {
        if (this.clearCacheSubscription) {
            this.clearCacheSubscription.unsubscribe();
        }
        if (clearCache) {
            this.clearCache();
        }
        if (!isUndefined(currentPage)) {
            this.setPage(currentPage);
        }
        this.initial = true;
    }
    /**
     * Whether the provided page is active
     */
    isPageActive(page) {
        return this.currentPage === page;
    }
    /**
     * Set the current page
     */
    setPage(page) {
        if (page !== this.currentPage || !this.hasPage(page)) {
            this.page.next((this.pagination.currentPage = page));
        }
    }
    /**
     * Increment current page
     */
    nextPage() {
        if (this.currentPage !== this.pagination.lastPage) {
            this.setPage(this.pagination.currentPage + 1);
        }
    }
    /**
     * Decrement current page
     */
    prevPage() {
        if (this.pagination.currentPage > 1) {
            this.setPage(this.pagination.currentPage - 1);
        }
    }
    /**
     * Set current page to last
     */
    setLastPage() {
        this.setPage(this.pagination.lastPage);
    }
    /**
     * Set current page to first
     */
    setFirstPage() {
        this.setPage(1);
    }
    /**
     * Check if page exists in cache
     */
    hasPage(page) {
        return this.pages.has(page);
    }
    /**
     * Get the current page if it's in cache, otherwise invoke the request
     */
    getPage(req) {
        let page = this.pagination.currentPage;
        if (this.hasPage(page)) {
            return this.selectPage(page);
        }
        else {
            this.setLoading(true);
            return from(req()).pipe(switchMap((config) => {
                page = config.currentPage;
                applyTransaction(() => {
                    this.setLoading(false);
                    this.update(config);
                });
                return this.selectPage(page);
            }));
        }
    }
    getQuery() {
        return this.query;
    }
    refreshCurrentPage() {
        if (isNil(this.currentPage) === false) {
            this.clearPage(this.currentPage);
            this.setPage(this.currentPage);
        }
    }
    getFrom() {
        if (this.isFirst) {
            return 1;
        }
        return (this.currentPage - 1) * this.pagination.perPage + 1;
    }
    getTo() {
        if (this.isLast) {
            return this.pagination.total;
        }
        return this.currentPage * this.pagination.perPage;
    }
    /**
     * Select the page
     */
    selectPage(page) {
        return this.query.selectAll({ asObject: true }).pipe(take(1), map((entities) => {
            const response = Object.assign(Object.assign({}, this.pagination), { data: this.pages.get(page).ids.map((id) => entities[id]) });
            const { range, pagesControls } = this.config;
            /** If no total - calc it */
            if (isNaN(this.pagination.total)) {
                if (response.lastPage === 1) {
                    response.total = response.data ? response.data.length : 0;
                }
                else {
                    response.total = response.perPage * response.lastPage;
                }
                this.pagination.total = response.total;
            }
            if (range) {
                response.from = this.getFrom();
                response.to = this.getTo();
            }
            if (pagesControls) {
                response.pageControls = generatePages(this.pagination.total, this.pagination.perPage);
            }
            return response;
        }));
    }
}
__decorate([
    action('@Pagination - New Page'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatorPlugin.prototype, "update", null);
/**
 * Generate an array so we can ngFor them to navigate between pages
 */
function generatePages(total, perPage) {
    const len = Math.ceil(total / perPage);
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i + 1);
    }
    return arr;
}
/** backward compatibility */
const Paginator = PaginatorPlugin;

class PersistNgFormPlugin extends AkitaPlugin {
    constructor(query, factoryFnOrPath, params = {}) {
        super(query);
        this.query = query;
        this.factoryFnOrPath = factoryFnOrPath;
        this.params = params;
        this.params = Object.assign({ debounceTime: 300, formKey: 'akitaForm', emitEvent: false, arrControlFactory: v => this.builder.control(v) }, params);
        this.isRootKeys = toBoolean(factoryFnOrPath) === false;
        this.isKeyBased = isString(factoryFnOrPath) || this.isRootKeys;
    }
    setForm(form, builder) {
        this.form = form;
        this.builder = builder;
        this.activate();
        return this;
    }
    reset(initialState) {
        let value;
        if (initialState) {
            value = initialState;
        }
        else {
            value = this.isKeyBased ? this.initialValue : this.factoryFnOrPath();
        }
        if (this.isKeyBased) {
            Object.keys(this.initialValue).forEach(stateKey => {
                const value = this.initialValue[stateKey];
                if (Array.isArray(value) && this.builder) {
                    const formArray = this.form.controls[stateKey];
                    this.cleanArray(formArray);
                    value.forEach((v, i) => {
                        this.form.get(stateKey).insert(i, this.params.arrControlFactory(v));
                    });
                }
            });
        }
        this.form.patchValue(value, { emitEvent: this.params.emitEvent });
        const storeValue = this.isKeyBased ? setValue(this.getQuery().getValue(), `${this.getStore().storeName}.${this.factoryFnOrPath}`, value) : { [this.params.formKey]: value };
        this.updateStore(storeValue);
    }
    cleanArray(control) {
        while (control.length !== 0) {
            control.removeAt(0);
        }
    }
    resolveInitialValue(formValue, root) {
        if (!formValue)
            return;
        return Object.keys(formValue).reduce((acc, stateKey) => {
            const value = root[stateKey];
            if (Array.isArray(value) && this.builder) {
                const factory = this.params.arrControlFactory;
                this.cleanArray(this.form.get(stateKey));
                value.forEach((v, i) => {
                    this.form.get(stateKey).insert(i, factory(v));
                });
            }
            acc[stateKey] = root[stateKey];
            return acc;
        }, {});
    }
    activate() {
        let path;
        if (this.isKeyBased) {
            if (this.isRootKeys) {
                this.initialValue = this.resolveInitialValue(this.form.value, this.getQuery().getValue());
                this.form.patchValue(this.initialValue, { emitEvent: this.params.emitEvent });
            }
            else {
                path = `${this.getStore().storeName}.${this.factoryFnOrPath}`;
                const root = getValue(this.getQuery().getValue(), path);
                this.initialValue = this.resolveInitialValue(root, root);
                this.form.patchValue(this.initialValue, { emitEvent: this.params.emitEvent });
            }
        }
        else {
            if (!this.getQuery().getValue()[this.params.formKey]) {
                logAction('@PersistNgFormPlugin activate');
                this.updateStore({ [this.params.formKey]: this.factoryFnOrPath() });
            }
            const value = this.getQuery().getValue()[this.params.formKey];
            this.form.patchValue(value);
        }
        this.formChanges = this.form.valueChanges.pipe(debounceTime(this.params.debounceTime)).subscribe(value => {
            logAction('@PersistForm - Update');
            let newState;
            if (this.isKeyBased) {
                if (this.isRootKeys) {
                    newState = state => (Object.assign(Object.assign({}, state), value));
                }
                else {
                    newState = state => setValue(state, path, value);
                }
            }
            else {
                newState = () => ({ [this.params.formKey]: value });
            }
            this.updateStore(newState(this.getQuery().getValue()));
        });
    }
    destroy() {
        this.formChanges && this.formChanges.unsubscribe();
        this.form = null;
        this.builder = null;
    }
}

class StateHistoryPlugin extends AkitaPlugin {
    constructor(query, params = {}, _entityId) {
        super(query, {
            resetFn: () => this.clear(),
        });
        this.query = query;
        this.params = params;
        this._entityId = _entityId;
        /** Allow skipping an update from outside */
        this.skip = false;
        this.history = {
            past: [],
            present: null,
            future: [],
        };
        /** Skip the update when redo/undo */
        this.skipUpdate = false;
        params.maxAge = !!params.maxAge ? params.maxAge : 10;
        params.comparator = params.comparator || (() => true);
        this.activate();
    }
    /**
     * Observable stream representing whether the history plugin has an available past
     *
     */
    get hasPast$() {
        return this._hasPast$;
    }
    /**
     * Observable stream representing whether the history plugin has an available future
     *
     */
    get hasFuture$() {
        return this._hasFuture$;
    }
    get hasPast() {
        return this.history.past.length > 0;
    }
    get hasFuture() {
        return this.history.future.length > 0;
    }
    get property() {
        return this.params.watchProperty;
    }
    /* Updates the hasPast$ hasFuture$ observables*/
    updateHasHistory() {
        this.hasFutureSubject.next(this.hasFuture);
        this.hasPastSubject.next(this.hasPast);
    }
    activate() {
        this.hasPastSubject = new BehaviorSubject(false);
        this._hasPast$ = this.hasPastSubject.asObservable().pipe(distinctUntilChanged());
        this.hasFutureSubject = new BehaviorSubject(false);
        this._hasFuture$ = this.hasFutureSubject.asObservable().pipe(distinctUntilChanged());
        this.history.present = this.getSource(this._entityId, this.property);
        this.subscription = this
            .selectSource(this._entityId, this.property)
            .pipe(pairwise())
            .subscribe(([past, present]) => {
            if (this.skip) {
                this.skip = false;
                return;
            }
            /**
             *  comparator: (prev, current) => isEqual(prev, current) === false
             */
            const shouldUpdate = this.params.comparator(past, present);
            if (!this.skipUpdate && shouldUpdate) {
                if (this.history.past.length === this.params.maxAge) {
                    this.history.past = this.history.past.slice(1);
                }
                this.history.past = [...this.history.past, past];
                this.history.present = present;
                this.updateHasHistory();
            }
        });
    }
    undo() {
        if (this.history.past.length > 0) {
            const { past, present } = this.history;
            const previous = past[past.length - 1];
            this.history.past = past.slice(0, past.length - 1);
            this.history.present = previous;
            this.history.future = [present, ...this.history.future];
            this.update();
        }
    }
    redo() {
        if (this.history.future.length > 0) {
            const { past, present } = this.history;
            const next = this.history.future[0];
            const newFuture = this.history.future.slice(1);
            this.history.past = [...past, present];
            this.history.present = next;
            this.history.future = newFuture;
            this.update('Redo');
        }
    }
    jumpToPast(index) {
        if (index < 0 || index >= this.history.past.length)
            return;
        const { past, future, present } = this.history;
        /**
         *
         * const past = [1, 2, 3, 4, 5];
         * const present = 6;
         * const future = [7, 8, 9];
         * const index = 2;
         *
         * newPast = past.slice(0, index) = [1, 2];
         * newPresent = past[index] = 3;
         * newFuture = [...past.slice(index + 1),present, ...future] = [4, 5, 6, 7, 8, 9];
         *
         */
        const newPast = past.slice(0, index);
        const newFuture = [...past.slice(index + 1), present, ...future];
        const newPresent = past[index];
        this.history.past = newPast;
        this.history.present = newPresent;
        this.history.future = newFuture;
        this.update();
    }
    jumpToFuture(index) {
        if (index < 0 || index >= this.history.future.length)
            return;
        const { past, future, present } = this.history;
        /**
         *
         * const past = [1, 2, 3, 4, 5];
         * const present = 6;
         * const future = [7, 8, 9, 10]
         * const index = 1
         *
         * newPast = [...past, present, ...future.slice(0, index) = [1, 2, 3, 4, 5, 6, 7];
         * newPresent = future[index] = 8;
         * newFuture = futrue.slice(index+1) = [9, 10];
         *
         */
        const newPast = [...past, present, ...future.slice(0, index)];
        const newPresent = future[index];
        const newFuture = future.slice(index + 1);
        this.history.past = newPast;
        this.history.present = newPresent;
        this.history.future = newFuture;
        this.update('Redo');
    }
    /**
     *
     * jump n steps in the past or forward
     *
     */
    jump(n) {
        if (n > 0)
            return this.jumpToFuture(n - 1);
        if (n < 0)
            return this.jumpToPast(this.history.past.length + n);
    }
    /**
     * Clear the history
     *
     * @param customUpdateFn Callback function for only clearing part of the history
     *
     * @example
     *
     * stateHistory.clear((history) => {
     *  return {
     *    past: history.past,
     *    present: history.present,
     *    future: []
     *  };
     * });
     */
    clear(customUpdateFn) {
        this.history = isFunction(customUpdateFn)
            ? customUpdateFn(this.history)
            : {
                past: [],
                present: null,
                future: [],
            };
        this.updateHasHistory();
    }
    destroy(clearHistory = false) {
        if (clearHistory) {
            this.clear();
        }
        this.subscription.unsubscribe();
    }
    ignoreNext() {
        this.skip = true;
    }
    update(action = 'Undo') {
        this.skipUpdate = true;
        logAction(`@StateHistory - ${action}`);
        this.updateStore(this.history.present, this._entityId, this.property, true);
        this.updateHasHistory();
        this.skipUpdate = false;
    }
}

class EntityStateHistoryPlugin extends EntityCollectionPlugin {
    constructor(query, params = {}) {
        super(query, params.entityIds);
        this.query = query;
        this.params = params;
        params.maxAge = toBoolean(params.maxAge) ? params.maxAge : 10;
        this.activate();
        this.selectIds()
            .pipe(skip(1))
            .subscribe((ids) => this.activate(ids));
    }
    redo(ids) {
        this.forEachId(ids, (e) => e.redo());
    }
    undo(ids) {
        this.forEachId(ids, (e) => e.undo());
    }
    hasPast(id) {
        if (this.hasEntity(id)) {
            return this.getEntity(id).hasPast;
        }
    }
    hasFuture(id) {
        if (this.hasEntity(id)) {
            return this.getEntity(id).hasFuture;
        }
    }
    jumpToFuture(ids, index) {
        this.forEachId(ids, (e) => e.jumpToFuture(index));
    }
    jumpToPast(ids, index) {
        this.forEachId(ids, (e) => e.jumpToPast(index));
    }
    clear(ids, customUpdateFn) {
        this.forEachId(ids, (e) => e.clear(customUpdateFn));
    }
    destroy(ids, clearHistory = false) {
        this.forEachId(ids, (e) => e.destroy(clearHistory));
    }
    ignoreNext(ids) {
        this.forEachId(ids, (e) => e.ignoreNext());
    }
    instantiatePlugin(id) {
        return new StateHistoryPlugin(this.query, this.params, id);
    }
}

/**
 * Reset stores back to their initial state
 *
 * @example
 *
 * resetStores()
 * resetStores({
 *   exclude: ['auth']
 * })
 */
function resetStores(options) {
    const defaults = {
        exclude: []
    };
    options = Object.assign({}, defaults, options);
    const stores = Object.keys(__stores__);
    applyTransaction(() => {
        for (const store of stores) {
            const s = __stores__[store];
            if (!options.exclude) {
                s.reset();
            }
            else {
                if (options.exclude.indexOf(s.storeName) === -1) {
                    s.reset();
                }
            }
        }
    });
}

var StoreAction;
(function (StoreAction) {
    StoreAction["Update"] = "UPDATE";
})(StoreAction || (StoreAction = {}));
const StoreActionMapping = {
    [StoreAction.Update]: 'update',
};
var EntityStoreAction;
(function (EntityStoreAction) {
    EntityStoreAction["Update"] = "UPDATE";
    EntityStoreAction["AddEntities"] = "ADD_ENTITIES";
    EntityStoreAction["SetEntities"] = "SET_ENTITIES";
    EntityStoreAction["UpdateEntities"] = "UPDATE_ENTITIES";
    EntityStoreAction["RemoveEntities"] = "REMOVE_ENTITIES";
    EntityStoreAction["UpsertEntities"] = "UPSERT_ENTITIES";
    EntityStoreAction["UpsertManyEntities"] = "UPSERT_MANY_ENTITIES";
})(EntityStoreAction || (EntityStoreAction = {}));
const EntityStoreActionMapping = {
    [EntityStoreAction.Update]: 'update',
    [EntityStoreAction.AddEntities]: 'add',
    [EntityStoreAction.SetEntities]: 'set',
    [EntityStoreAction.UpdateEntities]: 'update',
    [EntityStoreAction.RemoveEntities]: 'remove',
    [EntityStoreAction.UpsertEntities]: 'upsert',
    [EntityStoreAction.UpsertManyEntities]: 'upsertMany',
};
/**
 * Get a {@link Store} from the global store registry.
 * @param storeClass The {@link Store} class of the instance to be returned.
 */
function getStore(storeClass) {
    return getStoreByName(storeClass[configKey]['storeName']);
}
/**
 * Get a {@link Store} from the global store registry.
 * @param storeName The {@link Store} name of the instance to be returned.
 */
function getStoreByName(storeName) {
    const store = __stores__[storeName];
    if (isNil(store)) {
        throw new AkitaError(`${store.storeName} doesn't exist`);
    }
    return store;
}
/**
 * Get a {@link EntityStore} from the global store registry.
 * @param storeClass The {@link EntityStore} class of the instance to be returned.
 */
function getEntityStore(storeClass) {
    return getStore(storeClass);
}
/**
 * Get a {@link EntityStore} from the global store registry.
 * @param storeName The {@link EntityStore} name of the instance to be returned.
 */
function getEntityStoreByName(storeName) {
    return getStoreByName(storeName);
}
function runStoreAction(storeClassOrName, action, operation) {
    const store = typeof storeClassOrName === 'string' ? getStoreByName(storeClassOrName) : getStore(storeClassOrName);
    operation(store[StoreActionMapping[action]].bind(store));
}
function runEntityStoreAction(storeClassOrName, action, operation) {
    const store = typeof storeClassOrName === 'string' ? getEntityStoreByName(storeClassOrName) : getEntityStore(storeClassOrName);
    operation(store[EntityStoreActionMapping[action]].bind(store));
}

function setLoading(store) {
    return function (source) {
        return defer(() => {
            store.setLoading(true);
            return source.pipe(finalize(() => store.setLoading(false)));
        });
    };
}

function setLoadingAndError(store) {
    return function (source) {
        return defer(() => {
            store.setLoading(true);
            store.setError(null);
            return source.pipe(tap({
                error(err) {
                    store.setLoading(false);
                    store.setError(err);
                },
                complete() {
                    store.setLoading(false);
                },
            }));
        });
    };
}

class SnapshotManager {
    /**
     * Get a snapshot of the whole state or a specific stores
     * Use it ONLY for things such as saving the state in the server
     */
    getStoresSnapshot(stores = []) {
        let acc = {};
        const hasInclude = stores.length > 0;
        const keys = hasInclude ? stores : Object.keys(__stores__);
        for (let i = 0; i < keys.length; i++) {
            let storeName = keys[i];
            if (storeName !== 'router') {
                acc[storeName] = __stores__[storeName]._value();
            }
        }
        return acc;
    }
    setStoresSnapshot(stores, options) {
        const mergedOptions = Object.assign({ skipStorageUpdate: false, lazy: false }, options);
        mergedOptions.skipStorageUpdate && setSkipStorageUpdate(true);
        let normalizedStores = stores;
        if (isString(stores)) {
            normalizedStores = JSON.parse(normalizedStores);
        }
        const size = Object.keys(normalizedStores).length;
        if (mergedOptions.lazy) {
            $$addStore
                .pipe(filter(name => normalizedStores.hasOwnProperty(name)), take(size))
                .subscribe(name => __stores__[name]._setState(() => normalizedStores[name]));
        }
        else {
            for (let i = 0, keys = Object.keys(normalizedStores); i < keys.length; i++) {
                const storeName = keys[i];
                if (__stores__[storeName]) {
                    __stores__[storeName]._setState(() => normalizedStores[storeName]);
                }
            }
        }
        mergedOptions.skipStorageUpdate && setSkipStorageUpdate(false);
    }
}
const snapshotManager = new SnapshotManager();

// @internal
function toEntitiesIds(entities, idKey = DEFAULT_ID_KEY) {
    const ids = [];
    for (const entity of entities) {
        ids.push(entity[idKey]);
    }
    return ids;
}

/**
 * Track id updates of an entity and re-evaluation the query with the changed entity id.
 * Hint: Don't place the operator after other operators in the same pipeline as those will be skipped on
 * re-evaluation. Also, it can't be used with the selection operator, e.g <code>selectEntity(1, e => e.title)</code>
 * @param query The query from which the entity is selected.
 * @example
 *
 *   query.selectEntity(1).pipe(trackIdChanges(query)).subscribe(entity => { ... })
 *
 */
function trackIdChanges(query) {
    return (source) => source.lift(new TrackIdChanges(query));
}
class TrackIdChanges {
    constructor(query) {
        this.query = query;
    }
    call(subscriber, source) {
        return source
            .pipe(first(), switchMap((entity) => {
            let currId = entity[this.query.__store__.config.idKey];
            let pending = false;
            return merge(of({ newId: undefined, oldId: currId, pending: false }), this.query.__store__.selectEntityIdChanges$).pipe(
            // the new id must differ form the old id
            filter((change) => change.oldId === currId), 
            // extract the current pending state of the id update
            tap((change) => (pending = change.pending)), 
            // only update the selection query if the id update is already applied to the store
            filter((change) => change.newId !== currId && !pending), 
            // build a selection query for the new entity id
            switchMap((change) => this.query
                .selectEntity((currId = change.newId || currId))
                // skip undefined value if pending.
                .pipe(filter(() => !pending))));
        }))
            .subscribe(subscriber);
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { $$addStore, $$deleteStore, $$updateStore, AkitaPlugin, DEFAULT_ID_KEY, DirtyCheckPlugin, EntityActions, EntityCollectionPlugin, EntityDirtyCheckPlugin, EntityService, EntityStateHistoryPlugin, EntityStore, EntityStoreAction, EntityUIQuery, EntityUIStore, Order, Paginator, PaginatorPlugin, PersistNgFormPlugin, Query, QueryConfig, QueryEntity, SnapshotManager, StateHistoryPlugin, Store, StoreAction, StoreConfig, __DEV__, __stores__, action, addEntities, akitaConfig, akitaDevtools, applyTransaction, arrayAdd, arrayFind, arrayRemove, arrayToggle, arrayUpdate, arrayUpsert, byId, byKey, cacheable, coerceArray, combineQueries, commit, compareValues, configKey, createEntityQuery, createEntityStore, createQuery, createStore, currentAction, dirtyCheckDefaultParams, dispatchAdded, dispatchDeleted, dispatchUpdate, distinctUntilArrayItemChanged, enableAkitaProdMode, endBatch, entitiesToArray, entitiesToMap, filterNil, filterNilValue, find, getActiveEntities, getAkitaConfig, getEntityStore, getEntityStoreByName, getExitingActives, getInitialEntitiesState, getNestedPath, getStore, getStoreByName, getValue, guid, hasActiveState, hasEntity, isArray, isDefined, isDev, isEmpty, isEntityState, isFunction, isMultiActiveState, isNil, isNotBrowser, isNumber, isObject, isPlainObject, isString, isTransactionInProcess, isUndefined, logAction, persistState, queryConfigKey, removeAllEntities, removeEntities, resetCustomAction, resetStores, resolveActiveEntity, runEntityStoreAction, runStoreAction, selectPersistStateInit, setAction, setEntities, setLoading, setLoadingAndError, setSkipAction, setValue, snapshotManager, sortByOptions, startBatch, toBoolean, toEntitiesIds, toEntitiesObject, trackIdChanges, transaction, transactionManager, updateEntities, withTransaction, isBrowser as ɵa };
//# sourceMappingURL=datorama-akita.js.map
