(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@datorama/akita', ['exports', 'rxjs/operators', 'rxjs'], factory) :
    (global = global || self, factory((global.datorama = global.datorama || {}, global.datorama.akita = {}), global.rxjs.operators, global.rxjs));
}(this, (function (exports, operators, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var currentAction = {
        type: null,
        entityIds: null,
        skip: false,
        payload: null
    };
    var customActionActive = false;
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
    function setSkipAction(skip) {
        if (skip === void 0) { skip = true; }
        currentAction.skip = skip;
    }
    function action(action, entityIds) {
        return function (target, propertyKey, descriptor) {
            var originalMethod = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
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
    function resolveActiveEntity(_a) {
        var active = _a.active, ids = _a.ids, entities = _a.entities;
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
        var filtered = currentActivesIds.filter(function (id) { return newIds.indexOf(id) > -1; });
        /** Return the same reference if nothing has changed */
        if (filtered.length === currentActivesIds.length) {
            return currentActivesIds;
        }
        return filtered;
    }

    // @internal
    function addEntities(_a) {
        var e_1, _b;
        var state = _a.state, entities = _a.entities, idKey = _a.idKey, _c = _a.options, options = _c === void 0 ? {} : _c, preAddEntity = _a.preAddEntity;
        var newEntities = {};
        var newIds = [];
        var hasNewEntities = false;
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                if (hasEntity(state.entities, entity[idKey]) === false) {
                    // evaluate the middleware first to support dynamic ids
                    var current = preAddEntity(entity);
                    var entityId = current[idKey];
                    newEntities[entityId] = current;
                    if (options.prepend)
                        newIds.unshift(entityId);
                    else
                        newIds.push(entityId);
                    hasNewEntities = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_b = entities_1.return)) _b.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return hasNewEntities
            ? {
                newState: __assign(__assign({}, state), { entities: __assign(__assign({}, state.entities), newEntities), ids: options.prepend ? __spread(newIds, state.ids) : __spread(state.ids, newIds) }),
                newIds: newIds
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
    function arrayAdd(arr, newEntity, options) {
        if (options === void 0) { options = {}; }
        var newEntities = coerceArray(newEntity);
        var toArr = arr || [];
        return options.prepend ? __spread(newEntities, toArr) : __spread(toArr, newEntities);
    }

    var DEFAULT_ID_KEY = 'id';

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
        var e_1, _a, e_2, _b;
        var result = [];
        if (isFunction(idsOrPredicate)) {
            try {
                for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
                    var entity = collection_1_1.value;
                    if (idsOrPredicate(entity) === true) {
                        result.push(entity);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            var toSet = coerceArray(idsOrPredicate).reduce(function (acc, current) { return acc.add(current); }, new Set());
            try {
                for (var collection_2 = __values(collection), collection_2_1 = collection_2.next(); !collection_2_1.done; collection_2_1 = collection_2.next()) {
                    var entity = collection_2_1.value;
                    if (toSet.has(entity[idKey])) {
                        result.push(entity);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (collection_2_1 && !collection_2_1.done && (_b = collection_2.return)) _b.call(collection_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return result;
    }
    // @internal
    function distinctUntilArrayItemChanged() {
        return operators.distinctUntilChanged(function (prevCollection, currentCollection) {
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
            var isOneOfItemReferenceChanged = currentCollection.some(function (item, i) {
                return prevCollection[i] !== item;
            });
            // return false means there is a change and we want to call next()
            return isOneOfItemReferenceChanged === false;
        });
    }
    function arrayFind(idsOrPredicate, idKey) {
        return function (source) {
            return source.pipe(operators.map(function (collection) {
                // which means the user deleted the root entity or set the collection to nil
                if (isArray(collection) === false) {
                    return collection;
                }
                return find(collection, idsOrPredicate, idKey || DEFAULT_ID_KEY);
            }), distinctUntilArrayItemChanged(), operators.map(function (value) {
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
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    }

    // @internal
    function not(pred) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return !pred.apply(void 0, __spread(args));
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
    function arrayRemove(arr, identifier, idKey) {
        if (idKey === void 0) { idKey = DEFAULT_ID_KEY; }
        var identifiers;
        var filterFn;
        if (isFunction(identifier)) {
            filterFn = not(identifier);
        }
        else {
            identifiers = coerceArray(identifier);
            filterFn = function (current) {
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
        return function (a, b) { return a[prop] === b[prop]; };
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
    function arrayToggle(array, newValue, compare) {
        if (compare === void 0) { compare = function (a, b) { return a === b; }; }
        var index = array.findIndex(function (oldValue) { return compare(newValue, oldValue); });
        return !!~index ? __spread(array.slice(0, index), array.slice(index + 1)) : __spread(array, [newValue]);
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
    function arrayUpdate(arr, predicateOrIds, obj, idKey) {
        if (idKey === void 0) { idKey = DEFAULT_ID_KEY; }
        var condition;
        if (isFunction(predicateOrIds)) {
            condition = predicateOrIds;
        }
        else {
            var ids_1 = coerceArray(predicateOrIds);
            condition = function (item) { return ids_1.includes(isObject(item) ? item[idKey] : item) === true; };
        }
        var updateFn = function (state) {
            return state.map(function (entity, index) {
                if (condition(entity, index) === true) {
                    return isObject(entity)
                        ? __assign(__assign({}, entity), obj) : obj;
                }
                return entity;
            });
        };
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
    function arrayUpsert(arr, id, obj, idKey) {
        var _a;
        if (idKey === void 0) { idKey = DEFAULT_ID_KEY; }
        var entityIsObject = isObject(obj);
        var entityExists = arr.some(function (entity) { return (entityIsObject ? entity[idKey] === id : entity === id); });
        if (entityExists) {
            return arrayUpdate(arr, id, obj, idKey);
        }
        else {
            return arrayAdd(arr, entityIsObject ? __assign(__assign({}, obj), (_a = {}, _a[idKey] = id, _a)) : obj);
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
    function cacheable(store, request$, options) {
        if (options === void 0) { options = { emitNext: false }; }
        if (store._cache().value) {
            return options.emitNext ? rxjs.of(undefined) : rxjs.EMPTY;
        }
        return request$;
    }

    function combineQueries(observables) {
        return rxjs.combineLatest(observables).pipe(operators.auditTime(0));
    }

    var CONFIG = {
        resettable: false,
        ttl: null,
        producerFn: undefined
    };
    function akitaConfig(config) {
        CONFIG = __assign(__assign({}, CONFIG), config);
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
    var $$deleteStore = new rxjs.Subject();
    // @internal
    var $$addStore = new rxjs.ReplaySubject(50, 5000);
    // @internal
    var $$updateStore = new rxjs.Subject();
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
        $$updateStore.next({ storeName: storeName, action: action });
    }

    var isBrowser = typeof window !== 'undefined';
    var isNotBrowser = !isBrowser;
    // export const isNativeScript = typeof global !== 'undefined' && (<any>global).__runtimeVersion !== 'undefined'; TODO is this used?
    var hasLocalStorage = function () {
        try {
            return typeof localStorage !== 'undefined';
        }
        catch (_a) {
            return false;
        }
    };
    var hasSessionStorage = function () {
        try {
            return typeof sessionStorage !== 'undefined';
        }
        catch (_a) {
            return false;
        }
    };

    // @internal
    var __stores__ = {};
    // @internal
    var __queries__ = {};
    if (isBrowser) {
        window.$$stores = __stores__;
        window.$$queries = __queries__;
    }

    // @internal
    function capitalize(value) {
        return value && value.charAt(0).toUpperCase() + value.slice(1);
    }

    var subs = [];
    function akitaDevtools(ngZoneOrOptions, options) {
        if (options === void 0) { options = {}; }
        if (isNotBrowser)
            return;
        if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
            return;
        }
        subs.length &&
            subs.forEach(function (s) {
                if (s.unsubscribe) {
                    s.unsubscribe();
                }
                else {
                    s && s();
                }
            });
        var isAngular = ngZoneOrOptions && ngZoneOrOptions['run'];
        if (!isAngular) {
            ngZoneOrOptions = ngZoneOrOptions || {};
            ngZoneOrOptions.run = function (cb) { return cb(); };
            options = ngZoneOrOptions;
        }
        var defaultOptions = { name: 'Akita', shallow: true, storesWhitelist: [] };
        var merged = Object.assign({}, defaultOptions, options);
        var storesWhitelist = merged.storesWhitelist;
        var devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(merged);
        var appState = {};
        var isAllowed = function (storeName) {
            if (!storesWhitelist.length) {
                return true;
            }
            return storesWhitelist.indexOf(storeName) > -1;
        };
        subs.push($$addStore.subscribe(function (storeName) {
            var _a;
            if (isAllowed(storeName) === false)
                return;
            appState = __assign(__assign({}, appState), (_a = {}, _a[storeName] = __stores__[storeName]._value(), _a));
            devTools.send({ type: "[" + capitalize(storeName) + "] - @@INIT" }, appState);
        }));
        subs.push($$deleteStore.subscribe(function (storeName) {
            if (isAllowed(storeName) === false)
                return;
            delete appState[storeName];
            devTools.send({ type: "[" + storeName + "] - Delete Store" }, appState);
        }));
        subs.push($$updateStore.subscribe(function (_a) {
            var _b;
            var storeName = _a.storeName, action = _a.action;
            if (isAllowed(storeName) === false)
                return;
            var type = action.type, entityIds = action.entityIds, skip = action.skip, rest = __rest(action, ["type", "entityIds", "skip"]);
            var payload = rest.payload;
            if (skip) {
                setSkipAction(false);
                return;
            }
            var store = __stores__[storeName];
            if (!store) {
                return;
            }
            if (options.shallow === false && appState[storeName]) {
                var isEqual = JSON.stringify(store._value()) === JSON.stringify(appState[storeName]);
                if (isEqual)
                    return;
            }
            appState = __assign(__assign({}, appState), (_b = {}, _b[storeName] = store._value(), _b));
            var normalize = capitalize(storeName);
            var msg = isDefined(entityIds) ? "[" + normalize + "] - " + type + " (ids: " + entityIds + ")" : "[" + normalize + "] - " + type;
            if (options.logTrace) {
                console.group(msg);
                console.trace();
                console.groupEnd();
            }
            if (options.sortAlphabetically) {
                var sortedAppState = Object.keys(appState)
                    .sort()
                    .reduce(function (acc, storeName) {
                    acc[storeName] = appState[storeName];
                    return acc;
                }, {});
                devTools.send(__assign({ type: msg }, payload), sortedAppState);
                return;
            }
            devTools.send(__assign({ type: msg }, payload), appState);
        }));
        subs.push(devTools.subscribe(function (message) {
            if (message.type === 'DISPATCH') {
                var payloadType = message.payload.type;
                if (payloadType === 'COMMIT') {
                    devTools.init(appState);
                    return;
                }
                if (message.state) {
                    var rootState_1 = JSON.parse(message.state);
                    var _loop_1 = function (i, keys) {
                        var storeName = keys[i];
                        if (__stores__[storeName]) {
                            ngZoneOrOptions.run(function () {
                                __stores__[storeName]._setState(function () { return rootState_1[storeName]; }, false);
                            });
                        }
                    };
                    for (var i = 0, keys = Object.keys(rootState_1); i < keys.length; i++) {
                        _loop_1(i, keys);
                    }
                }
            }
        }));
    }


    (function (Order) {
        Order["ASC"] = "asc";
        Order["DESC"] = "desc";
    })(exports.Order || (exports.Order = {}));
    // @internal
    function compareValues(key, order) {
        if (order === void 0) { order = exports.Order.ASC; }
        return function (a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
            var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
            var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
            var comparison = 0;
            if (varA > varB) {
                comparison = 1;
            }
            else if (varA < varB) {
                comparison = -1;
            }
            return order == exports.Order.DESC ? comparison * -1 : comparison;
        };
    }

    // @internal
    function entitiesToArray(state, options) {
        var arr = [];
        var ids = state.ids, entities = state.entities;
        var filterBy = options.filterBy, limitTo = options.limitTo, sortBy = options.sortBy, sortByOrder = options.sortByOrder;
        var _loop_1 = function (i) {
            var entity = entities[ids[i]];
            if (!filterBy) {
                arr.push(entity);
                return "continue";
            }
            var toArray = coerceArray(filterBy);
            var allPass = toArray.every(function (fn) { return fn(entity, i); });
            if (allPass) {
                arr.push(entity);
            }
        };
        for (var i = 0; i < ids.length; i++) {
            _loop_1(i);
        }
        if (sortBy) {
            var _sortBy_1 = isFunction(sortBy) ? sortBy : compareValues(sortBy, sortByOrder);
            arr = arr.sort(function (a, b) { return _sortBy_1(a, b, state); });
        }
        var length = Math.min(limitTo || arr.length, arr.length);
        return length === arr.length ? arr : arr.slice(0, length);
    }

    // @internal
    function entitiesToMap(state, options) {
        var map = {};
        var filterBy = options.filterBy, limitTo = options.limitTo;
        var ids = state.ids, entities = state.entities;
        if (!filterBy && !limitTo) {
            return entities;
        }
        var hasLimit = isNil(limitTo) === false;
        if (filterBy && hasLimit) {
            var count = 0;
            var _loop_1 = function (i, length_1) {
                if (count === limitTo)
                    return "break";
                var id = ids[i];
                var entity = entities[id];
                var allPass = coerceArray(filterBy).every(function (fn) { return fn(entity, i); });
                if (allPass) {
                    map[id] = entity;
                    count++;
                }
            };
            for (var i = 0, length_1 = ids.length; i < length_1; i++) {
                var state_1 = _loop_1(i, length_1);
                if (state_1 === "break")
                    break;
            }
        }
        else {
            var finalLength = Math.min(limitTo || ids.length, ids.length);
            var _loop_2 = function (i) {
                var id = ids[i];
                var entity = entities[id];
                if (!filterBy) {
                    map[id] = entity;
                    return "continue";
                }
                var allPass = coerceArray(filterBy).every(function (fn) { return fn(entity, i); });
                if (allPass) {
                    map[id] = entity;
                }
            };
            for (var i = 0; i < finalLength; i++) {
                _loop_2(i);
            }
        }
        return map;
    }


    (function (EntityActions) {
        EntityActions["Set"] = "Set";
        EntityActions["Add"] = "Add";
        EntityActions["Update"] = "Update";
        EntityActions["Remove"] = "Remove";
    })(exports.EntityActions || (exports.EntityActions = {}));

    var EntityService = /** @class */ (function () {
        function EntityService() {
        }
        return EntityService;
    }());

    exports.__DEV__ = true;
    function enableAkitaProdMode() {
        exports.__DEV__ = false;
        if (isBrowser) {
            delete window.$$stores;
            delete window.$$queries;
        }
    }
    // @internal
    function isDev() {
        return exports.__DEV__;
    }

    // @internal
    function getActiveEntities(idOrOptions, ids, currentActive) {
        var result;
        if (isArray(idOrOptions)) {
            result = idOrOptions;
        }
        else {
            if (isObject(idOrOptions)) {
                if (isNil(currentActive))
                    return;
                idOrOptions = Object.assign({ wrap: true }, idOrOptions);
                var currentIdIndex = ids.indexOf(currentActive);
                if (idOrOptions.prev) {
                    var isFirst = currentIdIndex === 0;
                    if (isFirst && !idOrOptions.wrap)
                        return;
                    result = isFirst ? ids[ids.length - 1] : ids[currentIdIndex - 1];
                }
                else if (idOrOptions.next) {
                    var isLast = ids.length === currentIdIndex + 1;
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
    var getInitialEntitiesState = function () {
        return ({
            entities: {},
            ids: [],
            loading: true,
            error: null
        });
    };

    // @internal
    function isUndefined(value) {
        return value === undefined;
    }

    // @internal
    function removeEntities(_a) {
        var e_1, _b;
        var state = _a.state, ids = _a.ids;
        if (isNil(ids))
            return removeAllEntities(state);
        var entities = state.entities;
        var newEntities = {};
        try {
            for (var _c = __values(state.ids), _d = _c.next(); !_d.done; _d = _c.next()) {
                var id = _d.value;
                if (ids.includes(id) === false) {
                    newEntities[id] = entities[id];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var newState = __assign(__assign({}, state), { entities: newEntities, ids: state.ids.filter(function (current) { return ids.includes(current) === false; }) });
        if (hasActiveState(state)) {
            newState.active = resolveActiveEntity(newState);
        }
        return newState;
    }
    // @internal
    function removeAllEntities(state) {
        return __assign(__assign({}, state), { entities: {}, ids: [], active: isMultiActiveState(state.active) ? [] : null });
    }

    // @internal
    function toEntitiesObject(entities, idKey, preAddEntity) {
        var e_1, _a;
        var acc = {
            entities: {},
            ids: []
        };
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                // evaluate the middleware first to support dynamic ids
                var current = preAddEntity(entity);
                acc.entities[current[idKey]] = current;
                acc.ids.push(current[idKey]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return acc;
    }

    // @internal
    function isEntityState(state) {
        return state.entities && state.ids;
    }
    // @internal
    function applyMiddleware(entities, preAddEntity) {
        var e_1, _a;
        var mapped = {};
        try {
            for (var _b = __values(Object.keys(entities)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                mapped[id] = preAddEntity(entities[id]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return mapped;
    }
    // @internal
    function setEntities(_a) {
        var state = _a.state, entities = _a.entities, idKey = _a.idKey, preAddEntity = _a.preAddEntity, isNativePreAdd = _a.isNativePreAdd;
        var newEntities;
        var newIds;
        if (isArray(entities)) {
            var resolve = toEntitiesObject(entities, idKey, preAddEntity);
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
            newIds = Object.keys(newEntities).map(function (id) { return (isNaN(id) ? id : Number(id)); });
        }
        var newState = __assign(__assign({}, state), { entities: newEntities, ids: newIds, loading: false });
        if (hasActiveState(state)) {
            newState.active = resolveActiveEntity(newState);
        }
        return newState;
    }

    // @internal
    function deepFreeze(o) {
        Object.freeze(o);
        var oIsFunction = typeof o === 'function';
        var hasOwnProp = Object.prototype.hasOwnProperty;
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
    var AkitaError = /** @class */ (function (_super) {
        __extends(AkitaError, _super);
        function AkitaError(message) {
            return _super.call(this, message) || this;
        }
        return AkitaError;
    }(Error));
    // @internal
    function assertStoreHasName(name, className) {
        if (!name) {
            console.error("@StoreConfig({ name }) is missing in " + className);
        }
    }

    // @internal
    function toBoolean(value) {
        return value != null && "" + value !== 'false';
    }

    // @internal
    function isPlainObject(value) {
        return toBoolean(value) && value.constructor.name === 'Object';
    }

    var configKey = 'akitaConfig';
    function StoreConfig(metadata) {
        return function (constructor) {
            constructor[configKey] = { idKey: 'id' };
            for (var i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
                var key = keys[i];
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
    var transactionFinished = new rxjs.Subject();
    // @internal
    var transactionInProcess = new rxjs.BehaviorSubject(false);
    // @internal
    var transactionManager = {
        activeTransactions: 0,
        batchTransaction: null
    };
    // @internal
    function startBatch() {
        if (!isTransactionInProcess()) {
            transactionManager.batchTransaction = new rxjs.Subject();
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
        return transactionManager.batchTransaction ? transactionManager.batchTransaction.asObservable() : rxjs.of(true);
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
    function applyTransaction(action, thisArg) {
        if (thisArg === void 0) { thisArg = undefined; }
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
            var originalMethod = descriptor.value;
            descriptor.value = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return applyTransaction(function () {
                    return originalMethod.apply(_this, args);
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
            return source.pipe(operators.tap(function (value) { return applyTransaction(function () { return next(value); }); }));
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
    var Store = /** @class */ (function () {
        function Store(initialState, options) {
            if (options === void 0) { options = {}; }
            this.options = options;
            this.inTransaction = false;
            this.cache = {
                active: new rxjs.BehaviorSubject(false),
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
        Store.prototype.setLoading = function (loading) {
            if (loading === void 0) { loading = false; }
            if (loading !== this._value().loading) {
                isDev() && setAction('Set Loading');
                this._setState(function (state) { return (__assign(__assign({}, state), { loading: loading })); });
            }
        };
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
        Store.prototype.setHasCache = function (hasCache, options) {
            var _this = this;
            if (options === void 0) { options = { restartTTL: false }; }
            if (hasCache !== this.cache.active.value) {
                this.cache.active.next(hasCache);
            }
            if (options.restartTTL) {
                var ttlConfig = this.getCacheTTL();
                if (ttlConfig) {
                    if (this.cache.ttl !== null) {
                        clearTimeout(this.cache.ttl);
                    }
                    this.cache.ttl = setTimeout(function () { return _this.setHasCache(false); }, ttlConfig);
                }
            }
        };
        /**
         *
         * Sometimes we need to access the store value from a store
         *
         * @example middleware
         *
         */
        Store.prototype.getValue = function () {
            return this.storeValue;
        };
        /**
         *  Set the error state
         *
         *  @example
         *
         *  store.setError({text: 'unable to load data' })
         *
         */
        Store.prototype.setError = function (error) {
            if (error !== this._value().error) {
                isDev() && setAction('Set Error');
                this._setState(function (state) { return (__assign(__assign({}, state), { error: error })); });
            }
        };
        // @internal
        Store.prototype._select = function (project) {
            return this.store.asObservable().pipe(operators.map(function (snapshot) { return project(snapshot.state); }), operators.distinctUntilChanged());
        };
        // @internal
        Store.prototype._value = function () {
            return this.storeValue;
        };
        // @internal
        Store.prototype._cache = function () {
            return this.cache.active;
        };
        Object.defineProperty(Store.prototype, "config", {
            // @internal
            get: function () {
                return this.constructor[configKey] || {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Store.prototype, "storeName", {
            // @internal
            get: function () {
                return this.config.storeName || this.options.storeName || this.options.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Store.prototype, "deepFreeze", {
            // @internal
            get: function () {
                return this.config.deepFreezeFn || this.options.deepFreezeFn || deepFreeze;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Store.prototype, "cacheConfig", {
            // @internal
            get: function () {
                return this.config.cache || this.options.cache;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Store.prototype, "_producerFn", {
            get: function () {
                return this.config.producerFn || this.options.producerFn || getGlobalProducerFn();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Store.prototype, "resettable", {
            // @internal
            get: function () {
                return isDefined(this.config.resettable) ? this.config.resettable : this.options.resettable;
            },
            enumerable: false,
            configurable: true
        });
        // @internal
        Store.prototype._setState = function (newState, _dispatchAction) {
            var _this = this;
            if (_dispatchAction === void 0) { _dispatchAction = true; }
            if (isFunction(newState)) {
                var _newState = newState(this._value());
                this.storeValue = exports.__DEV__ ? this.deepFreeze(_newState) : _newState;
            }
            else {
                this.storeValue = newState;
            }
            if (!this.store) {
                this.store = new rxjs.BehaviorSubject({ state: this.storeValue });
                if (isDev()) {
                    this.store.subscribe(function (_a) {
                        var action = _a.action;
                        if (action) {
                            dispatchUpdate(_this.storeName, action);
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
        };
        /**
         *
         * Reset the current store back to the initial value
         *
         * @example
         *
         * store.reset()
         *
         */
        Store.prototype.reset = function () {
            var _this = this;
            if (this.isResettable()) {
                isDev() && setAction('Reset');
                this._setState(function () { return Object.assign({}, _this._initialState); });
                this.setHasCache(false);
            }
            else {
                isDev() && console.warn("You need to enable the reset functionality");
            }
        };
        Store.prototype.update = function (stateOrCallback) {
            isDev() && setAction('Update');
            var newState;
            var currentState = this._value();
            if (isFunction(stateOrCallback)) {
                newState = isFunction(this._producerFn) ? this._producerFn(currentState, stateOrCallback) : stateOrCallback(currentState);
            }
            else {
                newState = stateOrCallback;
            }
            var withHook = this.akitaPreUpdate(currentState, __assign(__assign({}, currentState), newState));
            var resolved = isPlainObject(currentState) ? withHook : new currentState.constructor(withHook);
            this._setState(resolved);
        };
        Store.prototype.updateStoreConfig = function (newOptions) {
            this.options = __assign(__assign({}, this.options), newOptions);
        };
        // @internal
        Store.prototype.akitaPreUpdate = function (_, nextState) {
            return nextState;
        };
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
        Store.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        /**
         *
         * Destroy the store
         *
         * @example
         *
         * store.destroy()
         *
         */
        Store.prototype.destroy = function () {
            var hmrEnabled = isBrowser ? window.hmrEnabled : false;
            if (!hmrEnabled && this === __stores__[this.storeName]) {
                delete __stores__[this.storeName];
                dispatchDeleted(this.storeName);
                this.setHasCache(false);
                this.cache.active.complete();
                this.store.complete();
            }
        };
        Store.prototype.onInit = function (initialState) {
            __stores__[this.storeName] = this;
            this._setState(function () { return initialState; });
            dispatchAdded(this.storeName);
            if (this.isResettable()) {
                this._initialState = initialState;
            }
            isDev() && assertStoreHasName(this.storeName, this.constructor.name);
        };
        Store.prototype.dispatch = function (state, _dispatchAction) {
            if (_dispatchAction === void 0) { _dispatchAction = true; }
            var action = undefined;
            if (_dispatchAction) {
                action = currentAction;
                resetCustomAction();
            }
            this.store.next({ state: state, action: action });
        };
        Store.prototype.watchTransaction = function () {
            var _this = this;
            commit().subscribe(function () {
                _this.inTransaction = false;
                _this.dispatch(_this._value());
            });
        };
        Store.prototype.isResettable = function () {
            if (this.resettable === false) {
                return false;
            }
            return this.resettable || getAkitaConfig().resettable;
        };
        Store.prototype.handleTransaction = function () {
            if (!this.inTransaction) {
                this.watchTransaction();
                this.inTransaction = true;
            }
        };
        Store.prototype.getCacheTTL = function () {
            return (this.cacheConfig && this.cacheConfig.ttl) || getAkitaConfig().ttl;
        };
        return Store;
    }());

    // @internal
    function updateEntities(_a) {
        var e_1, _b;
        var state = _a.state, ids = _a.ids, idKey = _a.idKey, newStateOrFn = _a.newStateOrFn, preUpdateEntity = _a.preUpdateEntity, producerFn = _a.producerFn, onEntityIdChanges = _a.onEntityIdChanges;
        var updatedEntities = {};
        var isUpdatingIdKey = false;
        var idToUpdate;
        try {
            for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                var id = ids_1_1.value;
                // if the entity doesn't exist don't do anything
                if (hasEntity(state.entities, id) === false) {
                    continue;
                }
                var oldEntity = state.entities[id];
                var newState = void 0;
                if (isFunction(newStateOrFn)) {
                    newState = isFunction(producerFn) ? producerFn(oldEntity, newStateOrFn) : newStateOrFn(oldEntity);
                }
                else {
                    newState = newStateOrFn;
                }
                var isIdChanged = newState.hasOwnProperty(idKey) && newState[idKey] !== oldEntity[idKey];
                var newEntity = void 0;
                idToUpdate = id;
                if (isIdChanged) {
                    isUpdatingIdKey = true;
                    idToUpdate = newState[idKey];
                }
                var merged = __assign(__assign({}, oldEntity), newState);
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (ids_1_1 && !ids_1_1.done && (_b = ids_1.return)) _b.call(ids_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var updatedIds = state.ids;
        var stateEntities = state.entities;
        if (isUpdatingIdKey) {
            var _c = __read(ids, 1), id_1 = _c[0];
            var _d = state.entities, _e = id_1, deletedEntity = _d[_e], rest = __rest(_d, [typeof _e === "symbol" ? _e : _e + ""]);
            stateEntities = rest;
            updatedIds = state.ids.map(function (current) { return (current === id_1 ? idToUpdate : current); });
            onEntityIdChanges(id_1, idToUpdate);
        }
        return __assign(__assign({}, state), { entities: __assign(__assign({}, stateEntities), updatedEntities), ids: updatedIds });
    }

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
    var EntityStore = /** @class */ (function (_super) {
        __extends(EntityStore, _super);
        function EntityStore(initialState, options) {
            if (initialState === void 0) { initialState = {}; }
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, __assign(__assign({}, getInitialEntitiesState()), initialState), options) || this;
            _this.options = options;
            _this.entityActions = new rxjs.Subject();
            _this.entityIdChanges = new rxjs.Subject();
            return _this;
        }
        Object.defineProperty(EntityStore.prototype, "selectEntityAction$", {
            // @internal
            get: function () {
                return this.entityActions.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityStore.prototype, "selectEntityIdChanges$", {
            // @internal
            get: function () {
                return this.entityIdChanges.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityStore.prototype, "idKey", {
            // @internal
            get: function () {
                return this.config.idKey || this.options.idKey || DEFAULT_ID_KEY;
            },
            enumerable: false,
            configurable: true
        });
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
        EntityStore.prototype.set = function (entities, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            if (isNil(entities))
                return;
            isDev() && setAction('Set Entity');
            var isNativePreAdd = this.akitaPreAddEntity === EntityStore.prototype.akitaPreAddEntity;
            this.setHasCache(true, { restartTTL: true });
            this._setState(function (state) {
                var newState = setEntities({
                    state: state,
                    entities: entities,
                    idKey: _this.idKey,
                    preAddEntity: _this.akitaPreAddEntity,
                    isNativePreAdd: isNativePreAdd,
                });
                if (isUndefined(options.activeId) === false) {
                    newState.active = options.activeId;
                }
                return newState;
            });
            if (this.hasInitialUIState()) {
                this.handleUICreation();
            }
            this.entityActions.next({ type: exports.EntityActions.Set, ids: this.ids });
        };
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
        EntityStore.prototype.add = function (entities, options) {
            if (options === void 0) { options = { loading: false }; }
            var collection = coerceArray(entities);
            if (isEmpty(collection))
                return;
            var data = addEntities({
                state: this._value(),
                preAddEntity: this.akitaPreAddEntity,
                entities: collection,
                idKey: this.idKey,
                options: options,
            });
            if (data) {
                isDev() && setAction('Add Entity');
                data.newState.loading = options.loading;
                this._setState(function () { return data.newState; });
                if (this.hasInitialUIState()) {
                    this.handleUICreation(true);
                }
                this.entityActions.next({ type: exports.EntityActions.Add, ids: data.newIds });
            }
        };
        EntityStore.prototype.update = function (idsOrFnOrState, newStateOrFn) {
            var _this = this;
            if (isUndefined(newStateOrFn)) {
                _super.prototype.update.call(this, idsOrFnOrState);
                return;
            }
            var ids = [];
            if (isFunction(idsOrFnOrState)) {
                // We need to filter according the predicate function
                ids = this.ids.filter(function (id) { return idsOrFnOrState(_this.entities[id]); });
            }
            else {
                // If it's nil we want all of them
                ids = isNil(idsOrFnOrState) ? this.ids : coerceArray(idsOrFnOrState);
            }
            if (isEmpty(ids))
                return;
            isDev() && setAction('Update Entity', ids);
            var entityIdChanged;
            this._setState(function (state) {
                return updateEntities({
                    idKey: _this.idKey,
                    ids: ids,
                    preUpdateEntity: _this.akitaPreUpdateEntity,
                    state: state,
                    newStateOrFn: newStateOrFn,
                    producerFn: _this._producerFn,
                    onEntityIdChanges: function (oldId, newId) {
                        entityIdChanged = { oldId: oldId, newId: newId };
                        _this.entityIdChanges.next(__assign(__assign({}, entityIdChanged), { pending: true }));
                    },
                });
            });
            if (entityIdChanged) {
                this.entityIdChanges.next(__assign(__assign({}, entityIdChanged), { pending: false }));
            }
            this.entityActions.next({ type: exports.EntityActions.Update, ids: ids });
        };
        EntityStore.prototype.upsert = function (ids, newState, onCreate, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var toArray = coerceArray(ids);
            var predicate = function (isUpdate) { return function (id) { return hasEntity(_this.entities, id) === isUpdate; }; };
            var baseClass = isFunction(onCreate) ? options.baseClass : onCreate ? onCreate.baseClass : undefined;
            var isClassBased = isFunction(baseClass);
            var updateIds = toArray.filter(predicate(true));
            var newEntities = toArray.filter(predicate(false)).map(function (id) {
                var _a;
                var newStateObj = typeof newState === 'function' ? newState({}) : newState;
                var entity = isFunction(onCreate) ? onCreate(id, newStateObj) : newStateObj;
                var withId = __assign(__assign({}, entity), (_a = {}, _a[_this.idKey] = id, _a));
                if (isClassBased) {
                    return new baseClass(withId);
                }
                return withId;
            });
            // it can be any of the three types
            this.update(updateIds, newState);
            this.add(newEntities);
            isDev() && logAction('Upsert Entity');
        };
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
        EntityStore.prototype.upsertMany = function (entities, options) {
            var e_1, _a;
            if (options === void 0) { options = {}; }
            var addedIds = [];
            var updatedIds = [];
            var updatedEntities = {};
            try {
                // Update the state directly to optimize performance
                for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                    var entity = entities_1_1.value;
                    var withPreCheckHook = this.akitaPreCheckEntity(entity);
                    var id = withPreCheckHook[this.idKey];
                    if (hasEntity(this.entities, id)) {
                        var prev = this._value().entities[id];
                        var merged = __assign(__assign({}, this._value().entities[id]), withPreCheckHook);
                        var next = options.baseClass ? new options.baseClass(merged) : merged;
                        var withHook = this.akitaPreUpdateEntity(prev, next);
                        var nextId = withHook[this.idKey];
                        updatedEntities[nextId] = withHook;
                        updatedIds.push(nextId);
                    }
                    else {
                        var newEntity = options.baseClass ? new options.baseClass(withPreCheckHook) : withPreCheckHook;
                        var withHook = this.akitaPreAddEntity(newEntity);
                        var nextId = withHook[this.idKey];
                        addedIds.push(nextId);
                        updatedEntities[nextId] = withHook;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            isDev() && logAction('Upsert Many');
            this._setState(function (state) { return (__assign(__assign({}, state), { ids: addedIds.length ? __spread(state.ids, addedIds) : state.ids, entities: __assign(__assign({}, state.entities), updatedEntities), loading: !!options.loading })); });
            updatedIds.length && this.entityActions.next({ type: exports.EntityActions.Update, ids: updatedIds });
            addedIds.length && this.entityActions.next({ type: exports.EntityActions.Add, ids: addedIds });
            if (addedIds.length && this.hasUIStore()) {
                this.handleUICreation(true);
            }
        };
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
        EntityStore.prototype.replace = function (ids, newState) {
            var e_2, _a, _b;
            var toArray = coerceArray(ids);
            if (isEmpty(toArray))
                return;
            var replaced = {};
            try {
                for (var toArray_1 = __values(toArray), toArray_1_1 = toArray_1.next(); !toArray_1_1.done; toArray_1_1 = toArray_1.next()) {
                    var id = toArray_1_1.value;
                    replaced[id] = __assign(__assign({}, newState), (_b = {}, _b[this.idKey] = id, _b));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (toArray_1_1 && !toArray_1_1.done && (_a = toArray_1.return)) _a.call(toArray_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            isDev() && setAction('Replace Entity', ids);
            this._setState(function (state) { return (__assign(__assign({}, state), { entities: __assign(__assign({}, state.entities), replaced) })); });
        };
        /**
         *
         * Move entity inside the collection
         *
         *
         * @example
         *
         * this.store.move(fromIndex, toIndex)
         */
        EntityStore.prototype.move = function (from, to) {
            var ids = this.ids.slice();
            ids.splice(to < 0 ? ids.length + to : to, 0, ids.splice(from, 1)[0]);
            isDev() && setAction('Move Entity');
            this._setState(function (state) { return (__assign(__assign({}, state), { 
                // Change the entities reference so that selectAll emit
                entities: __assign({}, state.entities), ids: ids })); });
        };
        EntityStore.prototype.remove = function (idsOrFn) {
            var _this = this;
            if (isEmpty(this.ids))
                return;
            var idPassed = isDefined(idsOrFn);
            // null means remove all
            var ids = [];
            if (isFunction(idsOrFn)) {
                ids = this.ids.filter(function (entityId) { return idsOrFn(_this.entities[entityId]); });
            }
            else {
                ids = idPassed ? coerceArray(idsOrFn) : this.ids;
            }
            if (isEmpty(ids))
                return;
            isDev() && setAction('Remove Entity', ids);
            this._setState(function (state) { return removeEntities({ state: state, ids: ids }); });
            if (!idPassed) {
                this.setHasCache(false);
            }
            this.handleUIRemove(ids);
            this.entityActions.next({ type: exports.EntityActions.Remove, ids: ids });
        };
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
        EntityStore.prototype.updateActive = function (newStateOrCallback) {
            var ids = coerceArray(this.active);
            isDev() && setAction('Update Active', ids);
            this.update(ids, newStateOrCallback);
        };
        EntityStore.prototype.setActive = function (idOrOptions) {
            var active = getActiveEntities(idOrOptions, this.ids, this.active);
            if (active === undefined) {
                return;
            }
            isDev() && setAction('Set Active', active);
            this._setActive(active);
        };
        /**
         * Add active entities
         *
         * @example
         *
         * store.addActive(2);
         * store.addActive([3, 4, 5]);
         */
        EntityStore.prototype.addActive = function (ids) {
            var _this = this;
            var toArray = coerceArray(ids);
            if (isEmpty(toArray))
                return;
            var everyExist = toArray.every(function (id) { return _this.active.indexOf(id) > -1; });
            if (everyExist)
                return;
            isDev() && setAction('Add Active', ids);
            this._setState(function (state) {
                /** Protect against case that one of the items in the array exist */
                var uniques = Array.from(new Set(__spread(state.active, toArray)));
                return __assign(__assign({}, state), { active: uniques });
            });
        };
        /**
         * Remove active entities
         *
         * @example
         *
         * store.removeActive(2)
         * store.removeActive([3, 4, 5])
         */
        EntityStore.prototype.removeActive = function (ids) {
            var _this = this;
            var toArray = coerceArray(ids);
            if (isEmpty(toArray))
                return;
            var someExist = toArray.some(function (id) { return _this.active.indexOf(id) > -1; });
            if (!someExist)
                return;
            isDev() && setAction('Remove Active', ids);
            this._setState(function (state) {
                return __assign(__assign({}, state), { active: Array.isArray(state.active) ? state.active.filter(function (currentId) { return toArray.indexOf(currentId) === -1; }) : null });
            });
        };
        /**
         * Toggle active entities
         *
         * @example
         *
         * store.toggle(2)
         * store.toggle([3, 4, 5])
         */
        EntityStore.prototype.toggleActive = function (ids) {
            var _this = this;
            var toArray = coerceArray(ids);
            var filterExists = function (remove) { return function (id) { return _this.active.includes(id) === remove; }; };
            var remove = toArray.filter(filterExists(true));
            var add = toArray.filter(filterExists(false));
            this.removeActive(remove);
            this.addActive(add);
            isDev() && logAction('Toggle Active');
        };
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
        EntityStore.prototype.createUIStore = function (initialState, storeConfig) {
            if (initialState === void 0) { initialState = {}; }
            if (storeConfig === void 0) { storeConfig = {}; }
            var defaults = { name: "UI/" + this.storeName, idKey: this.idKey };
            this.ui = new EntityUIStore(initialState, __assign(__assign({}, defaults), storeConfig));
            return this.ui;
        };
        // @internal
        EntityStore.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.ui instanceof EntityStore) {
                this.ui.destroy();
            }
            this.entityActions.complete();
        };
        // @internal
        EntityStore.prototype.akitaPreUpdateEntity = function (_, nextEntity) {
            return nextEntity;
        };
        // @internal
        EntityStore.prototype.akitaPreAddEntity = function (newEntity) {
            return newEntity;
        };
        // @internal
        EntityStore.prototype.akitaPreCheckEntity = function (newEntity) {
            return newEntity;
        };
        Object.defineProperty(EntityStore.prototype, "ids", {
            get: function () {
                return this._value().ids;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityStore.prototype, "entities", {
            get: function () {
                return this._value().entities;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityStore.prototype, "active", {
            get: function () {
                return this._value().active;
            },
            enumerable: false,
            configurable: true
        });
        EntityStore.prototype._setActive = function (ids) {
            this._setState(function (state) {
                return __assign(__assign({}, state), { active: ids });
            });
        };
        EntityStore.prototype.handleUICreation = function (add) {
            var _this = this;
            if (add === void 0) { add = false; }
            var ids = this.ids;
            var isFunc = isFunction(this.ui._akitaCreateEntityFn);
            var uiEntities;
            var createFn = function (id) {
                var _a;
                var current = _this.entities[id];
                var ui = isFunc ? _this.ui._akitaCreateEntityFn(current) : _this.ui._akitaCreateEntityFn;
                return __assign((_a = {}, _a[_this.idKey] = current[_this.idKey], _a), ui);
            };
            if (add) {
                uiEntities = this.ids.filter(function (id) { return isUndefined(_this.ui.entities[id]); }).map(createFn);
            }
            else {
                uiEntities = ids.map(createFn);
            }
            add ? this.ui.add(uiEntities) : this.ui.set(uiEntities);
        };
        EntityStore.prototype.hasInitialUIState = function () {
            return this.hasUIStore() && isUndefined(this.ui._akitaCreateEntityFn) === false;
        };
        EntityStore.prototype.handleUIRemove = function (ids) {
            if (this.hasUIStore()) {
                this.ui.remove(ids);
            }
        };
        EntityStore.prototype.hasUIStore = function () {
            return this.ui instanceof EntityUIStore;
        };
        var _a, _b;
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
        return EntityStore;
    }(Store));
    // @internal
    var EntityUIStore = /** @class */ (function (_super) {
        __extends(EntityUIStore, _super);
        function EntityUIStore(initialState, storeConfig) {
            if (initialState === void 0) { initialState = {}; }
            if (storeConfig === void 0) { storeConfig = {}; }
            return _super.call(this, initialState, storeConfig) || this;
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
        EntityUIStore.prototype.setInitialEntityState = function (createFn) {
            this._akitaCreateEntityFn = createFn;
        };
        return EntityUIStore;
    }(EntityStore));

    /**
     * @example
     *
     * query.selectEntity(2).pipe(filterNil)
     * @deprecated Use the operator function filterNilValue()
     */
    var filterNil = function (source) {
        return source.pipe(operators.filter(function (value) { return value !== null && typeof value !== 'undefined'; }));
    };
    /**
     * @example
     *
     * query.selectEntity(2).pipe(filterNilValue())
     */
    function filterNilValue() {
        return operators.filter(function (value) { return value !== null && value !== undefined; });
    }

    var queryConfigKey = 'akitaQueryConfig';
    function QueryConfig(metadata) {
        return function (constructor) {
            constructor[queryConfigKey] = {};
            for (var i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
                var key = keys[i];
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
            var isFns = isFunction(keysOrFuncs[0]);
            // Return when they are NOT changed
            return keysOrFuncs.some(function (keyOrFunc) {
                if (isFns) {
                    return keyOrFunc(prevState) !== keyOrFunc(currState);
                }
                return prevState[keyOrFunc] !== currState[keyOrFunc];
            }) === false;
        };
    }

    var Query = /** @class */ (function () {
        function Query(store) {
            this.store = store;
            this.__store__ = store;
            if (isDev()) {
                // @internal
                __queries__[store.storeName] = this;
            }
        }
        Query.prototype.select = function (project) {
            var mapFn;
            if (isFunction(project)) {
                mapFn = project;
            }
            else if (isString(project)) {
                mapFn = function (state) { return state[project]; };
            }
            else if (Array.isArray(project)) {
                return this.store
                    ._select(function (state) { return state; })
                    .pipe(operators.distinctUntilChanged(compareKeys(project)), operators.map(function (state) {
                    if (isFunction(project[0])) {
                        return project.map(function (func) { return func(state); });
                    }
                    return project.reduce(function (acc, k) {
                        acc[k] = state[k];
                        return acc;
                    }, {});
                }));
            }
            else {
                mapFn = function (state) { return state; };
            }
            return this.store._select(mapFn);
        };
        /**
         * Select the loading state
         *
         * @example
         *
         * this.query.selectLoading().subscribe(isLoading => {})
         */
        Query.prototype.selectLoading = function () {
            return this.select(function (state) { return state.loading; });
        };
        /**
         * Select the error state
         *
         * @example
         *
         * this.query.selectError().subscribe(error => {})
         */
        Query.prototype.selectError = function () {
            return this.select(function (state) { return state.error; });
        };
        /**
         * Get the store's value
         *
         * @example
         *
         * this.query.getValue()
         *
         */
        Query.prototype.getValue = function () {
            return this.store._value();
        };
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
        Query.prototype.selectHasCache = function () {
            return this.store._cache().asObservable();
        };
        /**
         * Whether we've cached data
         *
         * @example
         *
         * this.query.getHasCache()
         *
         */
        Query.prototype.getHasCache = function () {
            return this.store._cache().value;
        };
        Object.defineProperty(Query.prototype, "config", {
            // @internal
            get: function () {
                return this.constructor[queryConfigKey];
            },
            enumerable: false,
            configurable: true
        });
        return Query;
    }());

    // @internal
    function findEntityByPredicate(predicate, entities) {
        var e_1, _a;
        try {
            for (var _b = __values(Object.keys(entities)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entityId = _c.value;
                if (predicate(entities[entityId]) === true) {
                    return entityId;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    }
    // @internal
    function getEntity(id, project) {
        return function (entities) {
            var entity = entities[id];
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
        return arr.reduce(function (result, value, index, array) {
            var val = callbackFn(value, index, array);
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
    var QueryEntity = /** @class */ (function (_super) {
        __extends(QueryEntity, _super);
        function QueryEntity(store, options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, store) || this;
            _this.options = options;
            _this.__store__ = store;
            return _this;
        }
        QueryEntity.prototype.selectAll = function (options) {
            var _this = this;
            if (options === void 0) { options = {
                asObject: false,
            }; }
            return this.select(function (state) { return state.entities; }).pipe(operators.map(function () { return _this.getAll(options); }));
        };
        QueryEntity.prototype.getAll = function (options) {
            if (options === void 0) { options = { asObject: false, filterBy: undefined, limitTo: undefined }; }
            if (options.asObject) {
                return entitiesToMap(this.getValue(), options);
            }
            sortByOptions(options, this.config || this.options);
            return entitiesToArray(this.getValue(), options);
        };
        QueryEntity.prototype.selectMany = function (ids, project) {
            if (!ids || !ids.length)
                return rxjs.of([]);
            return this.select(function (state) { return state.entities; }).pipe(operators.map(function (entities) { return mapSkipUndefined(ids, function (id) { return getEntity(id, project)(entities); }); }), distinctUntilArrayItemChanged());
        };
        QueryEntity.prototype.selectEntity = function (idOrPredicate, project) {
            var id = idOrPredicate;
            if (isFunction(idOrPredicate)) {
                // For performance reason we expect the entity to be in the store
                id = findEntityByPredicate(idOrPredicate, this.getValue().entities);
            }
            return this.select(function (state) { return state.entities; }).pipe(operators.map(getEntity(id, project)), operators.distinctUntilChanged());
        };
        /**
         * Get an entity by id
         *
         * @example
         *
         * this.query.getEntity(1);
         */
        QueryEntity.prototype.getEntity = function (id) {
            return this.getValue().entities[id];
        };
        /**
         * Select the active entity's id
         *
         * @example
         *
         * this.query.selectActiveId()
         */
        QueryEntity.prototype.selectActiveId = function () {
            return this.select(function (state) { return state.active; });
        };
        /**
         * Get the active id
         *
         * @example
         *
         * this.query.getActiveId()
         */
        QueryEntity.prototype.getActiveId = function () {
            return this.getValue().active;
        };
        QueryEntity.prototype.selectActive = function (project) {
            var _this = this;
            if (isArray(this.getActive())) {
                return this.selectActiveId().pipe(operators.switchMap(function (ids) { return _this.selectMany(ids, project); }));
            }
            return this.selectActiveId().pipe(operators.switchMap(function (ids) { return _this.selectEntity(ids, project); }));
        };
        QueryEntity.prototype.getActive = function () {
            var _this = this;
            var activeId = this.getActiveId();
            if (isArray(activeId)) {
                return activeId.map(function (id) { return _this.getValue().entities[id]; });
            }
            return toBoolean(activeId) ? this.getEntity(activeId) : undefined;
        };
        /**
         * Select the store's entity collection length
         *
         * @example
         *
         * this.query.selectCount()
         * this.query.selectCount(entity => entity.completed)
         */
        QueryEntity.prototype.selectCount = function (predicate) {
            var _this = this;
            return this.select(function (state) { return state.entities; }).pipe(operators.map(function () { return _this.getCount(predicate); }));
        };
        /**
         * Get the store's entity collection length
         *
         * @example
         *
         * this.query.getCount()
         * this.query.getCount(entity => entity.completed)
         */
        QueryEntity.prototype.getCount = function (predicate) {
            if (isFunction(predicate)) {
                return this.getAll().filter(predicate).length;
            }
            return this.getValue().ids.length;
        };
        QueryEntity.prototype.selectLast = function (project) {
            return this.selectAt(function (ids) { return ids[ids.length - 1]; }, project);
        };
        QueryEntity.prototype.selectFirst = function (project) {
            return this.selectAt(function (ids) { return ids[0]; }, project);
        };
        QueryEntity.prototype.selectEntityAction = function (actionOrActions) {
            if (isNil(actionOrActions)) {
                return this.store.selectEntityAction$;
            }
            var project = isArray(actionOrActions) ? function (action) { return action; } : function (_a) {
                var ids = _a.ids;
                return ids;
            };
            var actions = coerceArray(actionOrActions);
            return this.store.selectEntityAction$.pipe(operators.filter(function (_a) {
                var type = _a.type;
                return actions.includes(type);
            }), operators.map(function (action) { return project(action); }));
        };
        QueryEntity.prototype.hasEntity = function (projectOrIds) {
            var _this = this;
            if (isNil(projectOrIds)) {
                return this.getValue().ids.length > 0;
            }
            if (isFunction(projectOrIds)) {
                return this.getAll().some(projectOrIds);
            }
            if (isArray(projectOrIds)) {
                return projectOrIds.every(function (id) { return id in _this.getValue().entities; });
            }
            return projectOrIds in this.getValue().entities;
        };
        /**
         * Returns whether entity store has an active entity
         *
         * @example
         *
         * this.query.hasActive()
         * this.query.hasActive(3)
         *
         */
        QueryEntity.prototype.hasActive = function (id) {
            var active = this.getValue().active;
            var isIdProvided = isDefined(id);
            if (Array.isArray(active)) {
                if (isIdProvided) {
                    return active.includes(id);
                }
                return active.length > 0;
            }
            return isIdProvided ? active === id : isDefined(active);
        };
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
        QueryEntity.prototype.createUIQuery = function () {
            this.ui = new EntityUIQuery(this.__store__.ui);
        };
        QueryEntity.prototype.selectAt = function (mapFn, project) {
            var _this = this;
            return this.select(function (state) { return state.ids; }).pipe(operators.map(mapFn), operators.distinctUntilChanged(), operators.switchMap(function (id) { return _this.selectEntity(id, project); }));
        };
        return QueryEntity;
    }(Query));
    // @internal
    var EntityUIQuery = /** @class */ (function (_super) {
        __extends(EntityUIQuery, _super);
        function EntityUIQuery(store) {
            return _super.call(this, store) || this;
        }
        return EntityUIQuery;
    }(QueryEntity));

    function createStore(initialState, options) {
        return new Store(initialState, options);
    }
    function createQuery(store) {
        return new Query(store);
    }
    function createEntityStore(initialState, options) {
        return new EntityStore(initialState, options);
    }
    function createEntityQuery(store, options) {
        if (options === void 0) { options = {}; }
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
        var removeStoreName = prop
            .split('.')
            .slice(1)
            .join('.');
        return removeStoreName.split('.').reduce(function (acc, part) { return acc && acc[part]; }, obj);
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
    function setValue(obj, prop, val, replace) {
        if (replace === void 0) { replace = false; }
        var split = prop.split('.');
        if (split.length === 1) {
            return __assign(__assign({}, obj), val);
        }
        obj = __assign({}, obj);
        var lastIndex = split.length - 2;
        var removeStoreName = prop.split('.').slice(1);
        removeStoreName.reduce(function (acc, part, index) {
            if (index !== lastIndex) {
                acc[part] = __assign({}, acc[part]);
                return acc && acc[part];
            }
            acc[part] = replace || Array.isArray(acc[part]) || !isObject(acc[part]) ? val : __assign(__assign({}, acc[part]), val);
            return acc && acc[part];
        }, obj);
        return obj;
    }

    var skipStorageUpdate = false;
    var _persistStateInit = new rxjs.ReplaySubject(1);
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
        if (isPromise(asyncOrValue) || rxjs.isObservable(asyncOrValue)) {
            return rxjs.from(asyncOrValue);
        }
        return rxjs.of(asyncOrValue);
    }
    function persistState(params) {
        var defaults = {
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
            preStorageUpdateOperator: function () { return function (source) { return source; }; },
        };
        var _a = Object.assign({}, defaults, params), storage = _a.storage, enableInNonBrowser = _a.enableInNonBrowser, deserialize = _a.deserialize, serialize = _a.serialize, include = _a.include, select = _a.select, key = _a.key, preStorageUpdate = _a.preStorageUpdate, persistOnDestroy = _a.persistOnDestroy, preStorageUpdateOperator = _a.preStorageUpdateOperator, preStoreUpdate = _a.preStoreUpdate, skipStorageUpdate = _a.skipStorageUpdate;
        if ((isNotBrowser && !enableInNonBrowser) || !storage)
            return;
        var hasInclude = include.length > 0;
        var hasSelect = select.length > 0;
        var includeStores;
        var selectStores;
        if (hasInclude) {
            includeStores = include.reduce(function (acc, path) {
                if (isFunction(path)) {
                    acc.fns.push(path);
                }
                else {
                    var storeName = path.split('.')[0];
                    acc[storeName] = path;
                }
                return acc;
            }, { fns: [] });
        }
        if (hasSelect) {
            selectStores = select.reduce(function (acc, selectFn) {
                acc[selectFn.storeName] = selectFn;
                return acc;
            }, {});
        }
        var stores = {};
        var acc = {};
        var subscriptions = [];
        var buffer = [];
        function _save(v) {
            observify(v).subscribe(function () {
                var next = buffer.shift();
                next && _save(next);
            });
        }
        // when we use the local/session storage we perform the serialize, otherwise we let the passed storage implementation to do it
        var isLocalStorage = (hasLocalStorage() && storage === localStorage) || (hasSessionStorage() && storage === sessionStorage);
        observify(storage.getItem(key)).subscribe(function (value) {
            var storageState = isObject(value) ? value : deserialize(value || '{}');
            function save(storeCache) {
                storageState['$cache'] = __assign(__assign({}, (storageState['$cache'] || {})), storeCache);
                storageState = Object.assign({}, storageState, acc);
                buffer.push(storage.setItem(key, isLocalStorage ? serialize(storageState) : storageState));
                _save(buffer.shift());
            }
            function subscribe(storeName, path) {
                stores[storeName] = __stores__[storeName]
                    ._select(function (state) { return getValue(state, path); })
                    .pipe(operators.skip(1), operators.map(function (store) {
                    if (hasSelect && selectStores[storeName]) {
                        return selectStores[storeName](store);
                    }
                    return store;
                }), operators.filter(function () { return skipStorageUpdate() === false; }), preStorageUpdateOperator())
                    .subscribe(function (data) {
                    acc[storeName] = preStorageUpdate(storeName, data);
                    Promise.resolve().then(function () {
                        var _a;
                        return save((_a = {}, _a[storeName] = __stores__[storeName]._cache().getValue(), _a));
                    });
                });
            }
            function setInitial(storeName, store, path) {
                if (storeName in storageState) {
                    setAction('@PersistState');
                    store._setState(function (state) {
                        return setValue(state, path, preStoreUpdate(storeName, storageState[storeName], state));
                    });
                    var hasCache = storageState['$cache'] ? storageState['$cache'][storeName] : false;
                    __stores__[storeName].setHasCache(hasCache, { restartTTL: true });
                }
            }
            subscriptions.push($$deleteStore.subscribe(function (storeName) {
                var _a;
                if (stores[storeName]) {
                    if (persistOnDestroy === false) {
                        save((_a = {}, _a[storeName] = false, _a));
                    }
                    stores[storeName].unsubscribe();
                    delete stores[storeName];
                }
            }));
            subscriptions.push($$addStore.subscribe(function (storeName) {
                if (storeName === 'router') {
                    return;
                }
                var store = __stores__[storeName];
                if (hasInclude) {
                    var path = includeStores[storeName];
                    if (!path) {
                        var passPredicate = includeStores.fns.some(function (fn) { return fn(storeName); });
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
            destroy: function () {
                subscriptions.forEach(function (s) { return s.unsubscribe(); });
                for (var i = 0, keys = Object.keys(stores); i < keys.length; i++) {
                    var storeName = keys[i];
                    stores[storeName].unsubscribe();
                }
                stores = {};
            },
            clear: function () {
                storage.clear();
            },
            clearStore: function (storeName) {
                if (isNil(storeName)) {
                    var value_1 = observify(storage.setItem(key, '{}'));
                    value_1.subscribe();
                    return;
                }
                var value = storage.getItem(key);
                observify(value).subscribe(function (v) {
                    var storageState = deserialize(v || '{}');
                    if (storageState[storeName]) {
                        delete storageState[storeName];
                        var value_2 = observify(storage.setItem(key, serialize(storageState)));
                        value_2.subscribe();
                    }
                });
            },
        };
    }

    var AkitaPlugin = /** @class */ (function () {
        function AkitaPlugin(query, config) {
            this.query = query;
            if (config && config.resetFn) {
                if (getAkitaConfig().resettable) {
                    this.onReset(config.resetFn);
                }
            }
        }
        /** This method is responsible for getting access to the query. */
        AkitaPlugin.prototype.getQuery = function () {
            return this.query;
        };
        /** This method is responsible for getting access to the store. */
        AkitaPlugin.prototype.getStore = function () {
            return this.getQuery().__store__;
        };
        /** This method is responsible tells whether the plugin is entityBased or not.  */
        AkitaPlugin.prototype.isEntityBased = function (entityId) {
            return toBoolean(entityId);
        };
        /** This method is responsible for selecting the source; it can be the whole store or one entity. */
        AkitaPlugin.prototype.selectSource = function (entityId, property) {
            var _this = this;
            if (this.isEntityBased(entityId)) {
                return this.getQuery().selectEntity(entityId).pipe(filterNilValue());
            }
            if (property) {
                return this.getQuery().select(function (state) { return getValue(state, _this.withStoreName(property)); });
            }
            return this.getQuery().select();
        };
        AkitaPlugin.prototype.getSource = function (entityId, property) {
            if (this.isEntityBased(entityId)) {
                return this.getQuery().getEntity(entityId);
            }
            var state = this.getQuery().getValue();
            if (property) {
                return getValue(state, this.withStoreName(property));
            }
            return state;
        };
        AkitaPlugin.prototype.withStoreName = function (prop) {
            return this.storeName + "." + prop;
        };
        Object.defineProperty(AkitaPlugin.prototype, "storeName", {
            get: function () {
                return this.getStore().storeName;
            },
            enumerable: false,
            configurable: true
        });
        /** This method is responsible for updating the store or one entity; it can be the whole store or one entity. */
        AkitaPlugin.prototype.updateStore = function (newState, entityId, property, replace) {
            var _this = this;
            if (replace === void 0) { replace = false; }
            if (this.isEntityBased(entityId)) {
                var store = this.getStore();
                replace ? store.replace(entityId, newState) : store.update(entityId, newState);
            }
            else {
                if (property) {
                    this.getStore()._setState(function (state) {
                        return setValue(state, _this.withStoreName(property), newState, true);
                    });
                    return;
                }
                var nextState = replace ? newState : function (state) { return (__assign(__assign({}, state), newState)); };
                this.getStore()._setState(nextState);
            }
        };
        /**
         * Function to invoke upon reset
         */
        AkitaPlugin.prototype.onReset = function (fn) {
            var _this = this;
            var original = this.getStore().reset;
            this.getStore().reset = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                /** It should run after the plugin destroy method */
                setTimeout(function () {
                    original.apply(_this.getStore(), params);
                    fn();
                });
            };
        };
        return AkitaPlugin;
    }());

    var ɵ0 = function (head, current) { return JSON.stringify(head) !== JSON.stringify(current); };
    var dirtyCheckDefaultParams = {
        comparator: ɵ0,
    };
    function getNestedPath(nestedObj, path) {
        var pathAsArray = path.split('.');
        return pathAsArray.reduce(function (obj, key) { return (obj && obj[key] !== 'undefined' ? obj[key] : undefined); }, nestedObj);
    }
    var DirtyCheckPlugin = /** @class */ (function (_super) {
        __extends(DirtyCheckPlugin, _super);
        function DirtyCheckPlugin(query, params, _entityId) {
            var _this = _super.call(this, query) || this;
            _this.query = query;
            _this.params = params;
            _this._entityId = _entityId;
            _this.dirty = new rxjs.BehaviorSubject(false);
            _this.active = false;
            _this._reset = new rxjs.Subject();
            _this.isDirty$ = _this.dirty.asObservable().pipe(operators.distinctUntilChanged());
            _this.reset$ = _this._reset.asObservable();
            _this.params = __assign(__assign({}, dirtyCheckDefaultParams), params);
            if (_this.params.watchProperty) {
                var watchProp = coerceArray(_this.params.watchProperty);
                if (query instanceof QueryEntity && watchProp.includes('entities') && !watchProp.includes('ids')) {
                    watchProp.push('ids');
                }
                _this.params.watchProperty = watchProp;
            }
            return _this;
        }
        DirtyCheckPlugin.prototype.reset = function (params) {
            if (params === void 0) { params = {}; }
            var currentValue = this.head;
            if (isFunction(params.updateFn)) {
                if (this.isEntityBased(this._entityId)) {
                    currentValue = params.updateFn(this.head, this.getQuery().getEntity(this._entityId));
                }
                else {
                    currentValue = params.updateFn(this.head, this.getQuery().getValue());
                }
            }
            logAction("@DirtyCheck - Revert");
            this.updateStore(currentValue, this._entityId);
            this._reset.next();
        };
        DirtyCheckPlugin.prototype.setHead = function () {
            if (!this.active) {
                this.activate();
                this.active = true;
            }
            else {
                this.head = this._getHead();
            }
            this.updateDirtiness(false);
            return this;
        };
        DirtyCheckPlugin.prototype.isDirty = function () {
            return !!this.dirty.value;
        };
        DirtyCheckPlugin.prototype.hasHead = function () {
            return !!this.getHead();
        };
        DirtyCheckPlugin.prototype.destroy = function () {
            this.head = null;
            this.subscription && this.subscription.unsubscribe();
            this._reset && this._reset.complete();
        };
        DirtyCheckPlugin.prototype.isPathDirty = function (path) {
            var head = this.getHead();
            var current = this.getQuery().getValue();
            var currentPathValue = getNestedPath(current, path);
            var headPathValue = getNestedPath(head, path);
            return this.params.comparator(currentPathValue, headPathValue);
        };
        DirtyCheckPlugin.prototype.getHead = function () {
            return this.head;
        };
        DirtyCheckPlugin.prototype.activate = function () {
            var _this = this;
            this.head = this._getHead();
            /** if we are tracking specific properties select only the relevant ones */
            var sources = this.params.watchProperty
                ? this.params.watchProperty.map(function (prop) {
                    return _this.query
                        .select(function (state) { return state[prop]; })
                        .pipe(operators.map(function (val) { return ({
                        val: val,
                        __akitaKey: prop,
                    }); }));
                })
                : [this.selectSource(this._entityId)];
            this.subscription = rxjs.combineLatest(sources)
                .pipe(operators.skip(1))
                .subscribe(function (currentState) {
                if (isUndefined(_this.head))
                    return;
                /** __akitaKey is used to determine if we are tracking a specific property or a store change */
                var isChange = currentState.some(function (state) {
                    var head = state.__akitaKey ? _this.head[state.__akitaKey] : _this.head;
                    var compareTo = state.__akitaKey ? state.val : state;
                    return _this.params.comparator(head, compareTo);
                });
                _this.updateDirtiness(isChange);
            });
        };
        DirtyCheckPlugin.prototype.updateDirtiness = function (isDirty) {
            this.dirty.next(isDirty);
        };
        DirtyCheckPlugin.prototype._getHead = function () {
            var head = this.getSource(this._entityId);
            if (this.params.watchProperty) {
                head = this.getWatchedValues(head);
            }
            return head;
        };
        DirtyCheckPlugin.prototype.getWatchedValues = function (source) {
            return this.params.watchProperty.reduce(function (watched, prop) {
                watched[prop] = source[prop];
                return watched;
            }, {});
        };
        return DirtyCheckPlugin;
    }(AkitaPlugin));

    /**
     * Each plugin that wants to add support for entities should extend this interface.
     */
    var EntityCollectionPlugin = /** @class */ (function () {
        function EntityCollectionPlugin(query, entityIds) {
            this.query = query;
            this.entityIds = entityIds;
            this.entities = new Map();
        }
        /**
         * Get the entity plugin instance.
         */
        EntityCollectionPlugin.prototype.getEntity = function (id) {
            return this.entities.get(id);
        };
        /**
         * Whether the entity plugin exist.
         */
        EntityCollectionPlugin.prototype.hasEntity = function (id) {
            return this.entities.has(id);
        };
        /**
         * Remove the entity plugin instance.
         */
        EntityCollectionPlugin.prototype.removeEntity = function (id) {
            this.destroy(id);
            return this.entities.delete(id);
        };
        /**
         * Set the entity plugin instance.
         */
        EntityCollectionPlugin.prototype.createEntity = function (id, plugin) {
            return this.entities.set(id, plugin);
        };
        /**
         * If the user passes `entityIds` we take them; otherwise, we take all.
         */
        EntityCollectionPlugin.prototype.getIds = function () {
            return isUndefined(this.entityIds) ? this.query.getValue().ids : coerceArray(this.entityIds);
        };
        /**
         * When you call one of the plugin methods, you can pass id/ids or undefined which means all.
         */
        EntityCollectionPlugin.prototype.resolvedIds = function (ids) {
            return isUndefined(ids) ? this.getIds() : coerceArray(ids);
        };
        /**
         * Call this method when you want to activate the plugin on init or when you need to listen to add/remove of entities dynamically.
         *
         * For example in your plugin you may do the following:
         *
         * this.query.select(state => state.ids).pipe(skip(1)).subscribe(ids => this.activate(ids));
         */
        EntityCollectionPlugin.prototype.rebase = function (ids, actions) {
            var _this = this;
            if (actions === void 0) { actions = {}; }
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
                    for (var i = 0, len = ids.length; i < len; i++) {
                        var entityId = ids[i];
                        if (this.hasEntity(entityId) === false) {
                            isFunction(actions.beforeAdd) && actions.beforeAdd(entityId);
                            var plugin = this.instantiatePlugin(entityId);
                            this.entities.set(entityId, plugin);
                            isFunction(actions.afterAdd) && actions.afterAdd(plugin);
                        }
                    }
                    this.entities.forEach(function (plugin, entityId) {
                        if (ids.indexOf(entityId) === -1) {
                            isFunction(actions.beforeRemove) && actions.beforeRemove(plugin);
                            _this.removeEntity(entityId);
                        }
                    });
                }
                else {
                    /**
                     * Which means the user passes specific ids
                     */
                    var _ids = coerceArray(this.entityIds);
                    for (var i = 0, len = _ids.length; i < len; i++) {
                        var entityId = _ids[i];
                        /** The Entity in current ids and doesn't exist, add it. */
                        if (ids.indexOf(entityId) > -1 && this.hasEntity(entityId) === false) {
                            isFunction(actions.beforeAdd) && actions.beforeAdd(entityId);
                            var plugin = this.instantiatePlugin(entityId);
                            this.entities.set(entityId, plugin);
                            isFunction(actions.afterAdd) && actions.afterAdd(plugin);
                        }
                        else {
                            this.entities.forEach(function (plugin, entityId) {
                                /** The Entity not in current ids and exists, remove it. */
                                if (ids.indexOf(entityId) === -1 && _this.hasEntity(entityId) === true) {
                                    isFunction(actions.beforeRemove) && actions.beforeRemove(plugin);
                                    _this.removeEntity(entityId);
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
                this.getIds().forEach(function (id) {
                    if (!_this.hasEntity(id))
                        _this.createEntity(id, _this.instantiatePlugin(id));
                });
            }
        };
        /**
         * Listen for add/remove entities.
         */
        EntityCollectionPlugin.prototype.selectIds = function () {
            return this.query.select(function (state) { return state.ids; });
        };
        /**
         * Base method for activation, you can override it if you need to.
         */
        EntityCollectionPlugin.prototype.activate = function (ids) {
            this.rebase(ids);
        };
        /**
         * Loop over each id and invoke the plugin method.
         */
        EntityCollectionPlugin.prototype.forEachId = function (ids, cb) {
            var _ids = this.resolvedIds(ids);
            for (var i = 0, len = _ids.length; i < len; i++) {
                var id = _ids[i];
                if (this.hasEntity(id)) {
                    cb(this.getEntity(id));
                }
            }
        };
        return EntityCollectionPlugin;
    }());

    var EntityDirtyCheckPlugin = /** @class */ (function (_super) {
        __extends(EntityDirtyCheckPlugin, _super);
        function EntityDirtyCheckPlugin(query, params) {
            if (params === void 0) { params = {}; }
            var _this = _super.call(this, query, params.entityIds) || this;
            _this.query = query;
            _this.params = params;
            _this._someDirty = new rxjs.Subject();
            _this.someDirty$ = rxjs.merge(_this.query.select(function (state) { return state.entities; }), _this._someDirty.asObservable()).pipe(operators.auditTime(0), operators.map(function () { return _this.checkSomeDirty(); }));
            _this.params = __assign(__assign({}, dirtyCheckDefaultParams), params);
            // TODO lazy activate?
            _this.activate();
            _this.selectIds()
                .pipe(operators.skip(1))
                .subscribe(function (ids) {
                _super.prototype.rebase.call(_this, ids, { afterAdd: function (plugin) { return plugin.setHead(); } });
            });
            return _this;
        }
        EntityDirtyCheckPlugin.prototype.setHead = function (ids) {
            if (this.params.entityIds && ids) {
                var toArray_1 = coerceArray(ids);
                var someAreWatched = coerceArray(this.params.entityIds).some(function (id) { return toArray_1.indexOf(id) > -1; });
                if (someAreWatched === false) {
                    return this;
                }
            }
            this.forEachId(ids, function (e) { return e.setHead(); });
            this._someDirty.next();
            return this;
        };
        EntityDirtyCheckPlugin.prototype.hasHead = function (id) {
            if (this.entities.has(id)) {
                var entity = this.getEntity(id);
                return entity.hasHead();
            }
            return false;
        };
        EntityDirtyCheckPlugin.prototype.reset = function (ids, params) {
            if (params === void 0) { params = {}; }
            this.forEachId(ids, function (e) { return e.reset(params); });
        };
        EntityDirtyCheckPlugin.prototype.isDirty = function (id, asObservable) {
            if (asObservable === void 0) { asObservable = true; }
            if (this.entities.has(id)) {
                var entity = this.getEntity(id);
                return asObservable ? entity.isDirty$ : entity.isDirty();
            }
            return false;
        };
        EntityDirtyCheckPlugin.prototype.someDirty = function () {
            return this.checkSomeDirty();
        };
        EntityDirtyCheckPlugin.prototype.isPathDirty = function (id, path) {
            if (this.entities.has(id)) {
                var head = this.getEntity(id).getHead();
                var current = this.query.getEntity(id);
                var currentPathValue = getNestedPath(current, path);
                var headPathValue = getNestedPath(head, path);
                return this.params.comparator(currentPathValue, headPathValue);
            }
            return null;
        };
        EntityDirtyCheckPlugin.prototype.destroy = function (ids) {
            this.forEachId(ids, function (e) { return e.destroy(); });
            /** complete only when the plugin destroys */
            if (!ids) {
                this._someDirty.complete();
            }
        };
        EntityDirtyCheckPlugin.prototype.instantiatePlugin = function (id) {
            return new DirtyCheckPlugin(this.query, this.params, id);
        };
        EntityDirtyCheckPlugin.prototype.checkSomeDirty = function () {
            var e_1, _a;
            var entitiesIds = this.resolvedIds();
            try {
                for (var entitiesIds_1 = __values(entitiesIds), entitiesIds_1_1 = entitiesIds_1.next(); !entitiesIds_1_1.done; entitiesIds_1_1 = entitiesIds_1.next()) {
                    var id = entitiesIds_1_1.value;
                    if (this.getEntity(id).isDirty()) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entitiesIds_1_1 && !entitiesIds_1_1.done && (_a = entitiesIds_1.return)) _a.call(entitiesIds_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        return EntityDirtyCheckPlugin;
    }(EntityCollectionPlugin));

    var paginatorDefaults = {
        pagesControls: false,
        range: false,
        startWith: 1,
        cacheTimeout: undefined,
        clearStoreWithCache: true,
    };
    var PaginatorPlugin = /** @class */ (function (_super) {
        __extends(PaginatorPlugin, _super);
        function PaginatorPlugin(query, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, query, {
                resetFn: function () {
                    _this.initial = false;
                    _this.destroy({ clearCache: true, currentPage: 1 });
                },
            }) || this;
            _this.query = query;
            _this.config = config;
            /** Save current filters, sorting, etc. in cache */
            _this.metadata = new Map();
            _this.pages = new Map();
            _this.pagination = {
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
            _this.initial = true;
            /**
             * Proxy to the query loading
             */
            _this.isLoading$ = _this.query.selectLoading().pipe(operators.delay(0));
            _this.config = __assign(__assign({}, paginatorDefaults), config);
            var _a = _this.config, startWith = _a.startWith, cacheTimeout = _a.cacheTimeout;
            _this.page = new rxjs.BehaviorSubject(startWith);
            if (rxjs.isObservable(cacheTimeout)) {
                _this.clearCacheSubscription = cacheTimeout.subscribe(function () { return _this.clearCache(); });
            }
            return _this;
        }
        Object.defineProperty(PaginatorPlugin.prototype, "pageChanges", {
            /**
             * Listen to page changes
             */
            get: function () {
                return this.page.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginatorPlugin.prototype, "currentPage", {
            /**
             * Get the current page number
             */
            get: function () {
                return this.pagination.currentPage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginatorPlugin.prototype, "isFirst", {
            /**
             * Check if current page is the first one
             */
            get: function () {
                return this.currentPage === 1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginatorPlugin.prototype, "isLast", {
            /**
             * Check if current page is the last one
             */
            get: function () {
                return this.currentPage === this.pagination.lastPage;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Whether to generate an array of pages for *ngFor
         * [1, 2, 3, 4]
         */
        PaginatorPlugin.prototype.withControls = function () {
            this.config.pagesControls = true;
            return this;
        };
        /**
         * Whether to generate the `from` and `to` keys
         * [1, 2, 3, 4]
         */
        PaginatorPlugin.prototype.withRange = function () {
            this.config.range = true;
            return this;
        };
        /**
         * Set the loading state
         */
        PaginatorPlugin.prototype.setLoading = function (value) {
            if (value === void 0) { value = true; }
            this.getStore().setLoading(value);
        };
        /**
         * Update the pagination object and add the page
         */
        PaginatorPlugin.prototype.update = function (response) {
            this.pagination = response;
            this.addPage(response.data);
        };
        /**
         *
         * Set the ids and add the page to store
         */
        PaginatorPlugin.prototype.addPage = function (data) {
            var _this = this;
            this.pages.set(this.currentPage, { ids: data.map(function (entity) { return entity[_this.getStore().idKey]; }) });
            this.getStore().upsertMany(data);
        };
        /**
         * Clear the cache.
         */
        PaginatorPlugin.prototype.clearCache = function (options) {
            if (options === void 0) { options = {}; }
            if (!this.initial) {
                logAction('@Pagination - Clear Cache');
                if (options.clearStore !== false && (this.config.clearStoreWithCache || options.clearStore)) {
                    this.getStore().remove();
                }
                this.pages = new Map();
                this.metadata = new Map();
            }
            this.initial = false;
        };
        PaginatorPlugin.prototype.clearPage = function (page) {
            this.pages.delete(page);
        };
        /**
         * Clear the cache timeout and optionally the pages
         */
        PaginatorPlugin.prototype.destroy = function (_a) {
            var _b = _a === void 0 ? {} : _a, clearCache = _b.clearCache, currentPage = _b.currentPage;
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
        };
        /**
         * Whether the provided page is active
         */
        PaginatorPlugin.prototype.isPageActive = function (page) {
            return this.currentPage === page;
        };
        /**
         * Set the current page
         */
        PaginatorPlugin.prototype.setPage = function (page) {
            if (page !== this.currentPage || !this.hasPage(page)) {
                this.page.next((this.pagination.currentPage = page));
            }
        };
        /**
         * Increment current page
         */
        PaginatorPlugin.prototype.nextPage = function () {
            if (this.currentPage !== this.pagination.lastPage) {
                this.setPage(this.pagination.currentPage + 1);
            }
        };
        /**
         * Decrement current page
         */
        PaginatorPlugin.prototype.prevPage = function () {
            if (this.pagination.currentPage > 1) {
                this.setPage(this.pagination.currentPage - 1);
            }
        };
        /**
         * Set current page to last
         */
        PaginatorPlugin.prototype.setLastPage = function () {
            this.setPage(this.pagination.lastPage);
        };
        /**
         * Set current page to first
         */
        PaginatorPlugin.prototype.setFirstPage = function () {
            this.setPage(1);
        };
        /**
         * Check if page exists in cache
         */
        PaginatorPlugin.prototype.hasPage = function (page) {
            return this.pages.has(page);
        };
        /**
         * Get the current page if it's in cache, otherwise invoke the request
         */
        PaginatorPlugin.prototype.getPage = function (req) {
            var _this = this;
            var page = this.pagination.currentPage;
            if (this.hasPage(page)) {
                return this.selectPage(page);
            }
            else {
                this.setLoading(true);
                return rxjs.from(req()).pipe(operators.switchMap(function (config) {
                    page = config.currentPage;
                    applyTransaction(function () {
                        _this.setLoading(false);
                        _this.update(config);
                    });
                    return _this.selectPage(page);
                }));
            }
        };
        PaginatorPlugin.prototype.getQuery = function () {
            return this.query;
        };
        PaginatorPlugin.prototype.refreshCurrentPage = function () {
            if (isNil(this.currentPage) === false) {
                this.clearPage(this.currentPage);
                this.setPage(this.currentPage);
            }
        };
        PaginatorPlugin.prototype.getFrom = function () {
            if (this.isFirst) {
                return 1;
            }
            return (this.currentPage - 1) * this.pagination.perPage + 1;
        };
        PaginatorPlugin.prototype.getTo = function () {
            if (this.isLast) {
                return this.pagination.total;
            }
            return this.currentPage * this.pagination.perPage;
        };
        /**
         * Select the page
         */
        PaginatorPlugin.prototype.selectPage = function (page) {
            var _this = this;
            return this.query.selectAll({ asObject: true }).pipe(operators.take(1), operators.map(function (entities) {
                var response = __assign(__assign({}, _this.pagination), { data: _this.pages.get(page).ids.map(function (id) { return entities[id]; }) });
                var _a = _this.config, range = _a.range, pagesControls = _a.pagesControls;
                /** If no total - calc it */
                if (isNaN(_this.pagination.total)) {
                    if (response.lastPage === 1) {
                        response.total = response.data ? response.data.length : 0;
                    }
                    else {
                        response.total = response.perPage * response.lastPage;
                    }
                    _this.pagination.total = response.total;
                }
                if (range) {
                    response.from = _this.getFrom();
                    response.to = _this.getTo();
                }
                if (pagesControls) {
                    response.pageControls = generatePages(_this.pagination.total, _this.pagination.perPage);
                }
                return response;
            }));
        };
        __decorate([
            action('@Pagination - New Page'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], PaginatorPlugin.prototype, "update", null);
        return PaginatorPlugin;
    }(AkitaPlugin));
    /**
     * Generate an array so we can ngFor them to navigate between pages
     */
    function generatePages(total, perPage) {
        var len = Math.ceil(total / perPage);
        var arr = [];
        for (var i = 0; i < len; i++) {
            arr.push(i + 1);
        }
        return arr;
    }
    /** backward compatibility */
    var Paginator = PaginatorPlugin;

    var PersistNgFormPlugin = /** @class */ (function (_super) {
        __extends(PersistNgFormPlugin, _super);
        function PersistNgFormPlugin(query, factoryFnOrPath, params) {
            if (params === void 0) { params = {}; }
            var _this = _super.call(this, query) || this;
            _this.query = query;
            _this.factoryFnOrPath = factoryFnOrPath;
            _this.params = params;
            _this.params = __assign({ debounceTime: 300, formKey: 'akitaForm', emitEvent: false, arrControlFactory: function (v) { return _this.builder.control(v); } }, params);
            _this.isRootKeys = toBoolean(factoryFnOrPath) === false;
            _this.isKeyBased = isString(factoryFnOrPath) || _this.isRootKeys;
            return _this;
        }
        PersistNgFormPlugin.prototype.setForm = function (form, builder) {
            this.form = form;
            this.builder = builder;
            this.activate();
            return this;
        };
        PersistNgFormPlugin.prototype.reset = function (initialState) {
            var _a;
            var _this = this;
            var value;
            if (initialState) {
                value = initialState;
            }
            else {
                value = this.isKeyBased ? this.initialValue : this.factoryFnOrPath();
            }
            if (this.isKeyBased) {
                Object.keys(this.initialValue).forEach(function (stateKey) {
                    var value = _this.initialValue[stateKey];
                    if (Array.isArray(value) && _this.builder) {
                        var formArray = _this.form.controls[stateKey];
                        _this.cleanArray(formArray);
                        value.forEach(function (v, i) {
                            _this.form.get(stateKey).insert(i, _this.params.arrControlFactory(v));
                        });
                    }
                });
            }
            this.form.patchValue(value, { emitEvent: this.params.emitEvent });
            var storeValue = this.isKeyBased ? setValue(this.getQuery().getValue(), this.getStore().storeName + "." + this.factoryFnOrPath, value) : (_a = {}, _a[this.params.formKey] = value, _a);
            this.updateStore(storeValue);
        };
        PersistNgFormPlugin.prototype.cleanArray = function (control) {
            while (control.length !== 0) {
                control.removeAt(0);
            }
        };
        PersistNgFormPlugin.prototype.resolveInitialValue = function (formValue, root) {
            var _this = this;
            if (!formValue)
                return;
            return Object.keys(formValue).reduce(function (acc, stateKey) {
                var value = root[stateKey];
                if (Array.isArray(value) && _this.builder) {
                    var factory_1 = _this.params.arrControlFactory;
                    _this.cleanArray(_this.form.get(stateKey));
                    value.forEach(function (v, i) {
                        _this.form.get(stateKey).insert(i, factory_1(v));
                    });
                }
                acc[stateKey] = root[stateKey];
                return acc;
            }, {});
        };
        PersistNgFormPlugin.prototype.activate = function () {
            var _a;
            var _this = this;
            var path;
            if (this.isKeyBased) {
                if (this.isRootKeys) {
                    this.initialValue = this.resolveInitialValue(this.form.value, this.getQuery().getValue());
                    this.form.patchValue(this.initialValue, { emitEvent: this.params.emitEvent });
                }
                else {
                    path = this.getStore().storeName + "." + this.factoryFnOrPath;
                    var root = getValue(this.getQuery().getValue(), path);
                    this.initialValue = this.resolveInitialValue(root, root);
                    this.form.patchValue(this.initialValue, { emitEvent: this.params.emitEvent });
                }
            }
            else {
                if (!this.getQuery().getValue()[this.params.formKey]) {
                    logAction('@PersistNgFormPlugin activate');
                    this.updateStore((_a = {}, _a[this.params.formKey] = this.factoryFnOrPath(), _a));
                }
                var value = this.getQuery().getValue()[this.params.formKey];
                this.form.patchValue(value);
            }
            this.formChanges = this.form.valueChanges.pipe(operators.debounceTime(this.params.debounceTime)).subscribe(function (value) {
                logAction('@PersistForm - Update');
                var newState;
                if (_this.isKeyBased) {
                    if (_this.isRootKeys) {
                        newState = function (state) { return (__assign(__assign({}, state), value)); };
                    }
                    else {
                        newState = function (state) { return setValue(state, path, value); };
                    }
                }
                else {
                    newState = function () {
                        var _a;
                        return (_a = {}, _a[_this.params.formKey] = value, _a);
                    };
                }
                _this.updateStore(newState(_this.getQuery().getValue()));
            });
        };
        PersistNgFormPlugin.prototype.destroy = function () {
            this.formChanges && this.formChanges.unsubscribe();
            this.form = null;
            this.builder = null;
        };
        return PersistNgFormPlugin;
    }(AkitaPlugin));

    var StateHistoryPlugin = /** @class */ (function (_super) {
        __extends(StateHistoryPlugin, _super);
        function StateHistoryPlugin(query, params, _entityId) {
            if (params === void 0) { params = {}; }
            var _this = _super.call(this, query, {
                resetFn: function () { return _this.clear(); },
            }) || this;
            _this.query = query;
            _this.params = params;
            _this._entityId = _entityId;
            /** Allow skipping an update from outside */
            _this.skip = false;
            _this.history = {
                past: [],
                present: null,
                future: [],
            };
            /** Skip the update when redo/undo */
            _this.skipUpdate = false;
            params.maxAge = !!params.maxAge ? params.maxAge : 10;
            params.comparator = params.comparator || (function () { return true; });
            _this.activate();
            return _this;
        }
        Object.defineProperty(StateHistoryPlugin.prototype, "hasPast$", {
            /**
             * Observable stream representing whether the history plugin has an available past
             *
             */
            get: function () {
                return this._hasPast$;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StateHistoryPlugin.prototype, "hasFuture$", {
            /**
             * Observable stream representing whether the history plugin has an available future
             *
             */
            get: function () {
                return this._hasFuture$;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StateHistoryPlugin.prototype, "hasPast", {
            get: function () {
                return this.history.past.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StateHistoryPlugin.prototype, "hasFuture", {
            get: function () {
                return this.history.future.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StateHistoryPlugin.prototype, "property", {
            get: function () {
                return this.params.watchProperty;
            },
            enumerable: false,
            configurable: true
        });
        /* Updates the hasPast$ hasFuture$ observables*/
        StateHistoryPlugin.prototype.updateHasHistory = function () {
            this.hasFutureSubject.next(this.hasFuture);
            this.hasPastSubject.next(this.hasPast);
        };
        StateHistoryPlugin.prototype.activate = function () {
            var _this = this;
            this.hasPastSubject = new rxjs.BehaviorSubject(false);
            this._hasPast$ = this.hasPastSubject.asObservable().pipe(operators.distinctUntilChanged());
            this.hasFutureSubject = new rxjs.BehaviorSubject(false);
            this._hasFuture$ = this.hasFutureSubject.asObservable().pipe(operators.distinctUntilChanged());
            this.history.present = this.getSource(this._entityId, this.property);
            this.subscription = this
                .selectSource(this._entityId, this.property)
                .pipe(operators.pairwise())
                .subscribe(function (_a) {
                var _b = __read(_a, 2), past = _b[0], present = _b[1];
                if (_this.skip) {
                    _this.skip = false;
                    return;
                }
                /**
                 *  comparator: (prev, current) => isEqual(prev, current) === false
                 */
                var shouldUpdate = _this.params.comparator(past, present);
                if (!_this.skipUpdate && shouldUpdate) {
                    if (_this.history.past.length === _this.params.maxAge) {
                        _this.history.past = _this.history.past.slice(1);
                    }
                    _this.history.past = __spread(_this.history.past, [past]);
                    _this.history.present = present;
                    _this.updateHasHistory();
                }
            });
        };
        StateHistoryPlugin.prototype.undo = function () {
            if (this.history.past.length > 0) {
                var _a = this.history, past = _a.past, present = _a.present;
                var previous = past[past.length - 1];
                this.history.past = past.slice(0, past.length - 1);
                this.history.present = previous;
                this.history.future = __spread([present], this.history.future);
                this.update();
            }
        };
        StateHistoryPlugin.prototype.redo = function () {
            if (this.history.future.length > 0) {
                var _a = this.history, past = _a.past, present = _a.present;
                var next = this.history.future[0];
                var newFuture = this.history.future.slice(1);
                this.history.past = __spread(past, [present]);
                this.history.present = next;
                this.history.future = newFuture;
                this.update('Redo');
            }
        };
        StateHistoryPlugin.prototype.jumpToPast = function (index) {
            if (index < 0 || index >= this.history.past.length)
                return;
            var _a = this.history, past = _a.past, future = _a.future, present = _a.present;
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
            var newPast = past.slice(0, index);
            var newFuture = __spread(past.slice(index + 1), [present], future);
            var newPresent = past[index];
            this.history.past = newPast;
            this.history.present = newPresent;
            this.history.future = newFuture;
            this.update();
        };
        StateHistoryPlugin.prototype.jumpToFuture = function (index) {
            if (index < 0 || index >= this.history.future.length)
                return;
            var _a = this.history, past = _a.past, future = _a.future, present = _a.present;
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
            var newPast = __spread(past, [present], future.slice(0, index));
            var newPresent = future[index];
            var newFuture = future.slice(index + 1);
            this.history.past = newPast;
            this.history.present = newPresent;
            this.history.future = newFuture;
            this.update('Redo');
        };
        /**
         *
         * jump n steps in the past or forward
         *
         */
        StateHistoryPlugin.prototype.jump = function (n) {
            if (n > 0)
                return this.jumpToFuture(n - 1);
            if (n < 0)
                return this.jumpToPast(this.history.past.length + n);
        };
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
        StateHistoryPlugin.prototype.clear = function (customUpdateFn) {
            this.history = isFunction(customUpdateFn)
                ? customUpdateFn(this.history)
                : {
                    past: [],
                    present: null,
                    future: [],
                };
            this.updateHasHistory();
        };
        StateHistoryPlugin.prototype.destroy = function (clearHistory) {
            if (clearHistory === void 0) { clearHistory = false; }
            if (clearHistory) {
                this.clear();
            }
            this.subscription.unsubscribe();
        };
        StateHistoryPlugin.prototype.ignoreNext = function () {
            this.skip = true;
        };
        StateHistoryPlugin.prototype.update = function (action) {
            if (action === void 0) { action = 'Undo'; }
            this.skipUpdate = true;
            logAction("@StateHistory - " + action);
            this.updateStore(this.history.present, this._entityId, this.property, true);
            this.updateHasHistory();
            this.skipUpdate = false;
        };
        return StateHistoryPlugin;
    }(AkitaPlugin));

    var EntityStateHistoryPlugin = /** @class */ (function (_super) {
        __extends(EntityStateHistoryPlugin, _super);
        function EntityStateHistoryPlugin(query, params) {
            if (params === void 0) { params = {}; }
            var _this = _super.call(this, query, params.entityIds) || this;
            _this.query = query;
            _this.params = params;
            params.maxAge = toBoolean(params.maxAge) ? params.maxAge : 10;
            _this.activate();
            _this.selectIds()
                .pipe(operators.skip(1))
                .subscribe(function (ids) { return _this.activate(ids); });
            return _this;
        }
        EntityStateHistoryPlugin.prototype.redo = function (ids) {
            this.forEachId(ids, function (e) { return e.redo(); });
        };
        EntityStateHistoryPlugin.prototype.undo = function (ids) {
            this.forEachId(ids, function (e) { return e.undo(); });
        };
        EntityStateHistoryPlugin.prototype.hasPast = function (id) {
            if (this.hasEntity(id)) {
                return this.getEntity(id).hasPast;
            }
        };
        EntityStateHistoryPlugin.prototype.hasFuture = function (id) {
            if (this.hasEntity(id)) {
                return this.getEntity(id).hasFuture;
            }
        };
        EntityStateHistoryPlugin.prototype.jumpToFuture = function (ids, index) {
            this.forEachId(ids, function (e) { return e.jumpToFuture(index); });
        };
        EntityStateHistoryPlugin.prototype.jumpToPast = function (ids, index) {
            this.forEachId(ids, function (e) { return e.jumpToPast(index); });
        };
        EntityStateHistoryPlugin.prototype.clear = function (ids, customUpdateFn) {
            this.forEachId(ids, function (e) { return e.clear(customUpdateFn); });
        };
        EntityStateHistoryPlugin.prototype.destroy = function (ids, clearHistory) {
            if (clearHistory === void 0) { clearHistory = false; }
            this.forEachId(ids, function (e) { return e.destroy(clearHistory); });
        };
        EntityStateHistoryPlugin.prototype.ignoreNext = function (ids) {
            this.forEachId(ids, function (e) { return e.ignoreNext(); });
        };
        EntityStateHistoryPlugin.prototype.instantiatePlugin = function (id) {
            return new StateHistoryPlugin(this.query, this.params, id);
        };
        return EntityStateHistoryPlugin;
    }(EntityCollectionPlugin));

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
        var defaults = {
            exclude: []
        };
        options = Object.assign({}, defaults, options);
        var stores = Object.keys(__stores__);
        applyTransaction(function () {
            var e_1, _a;
            try {
                for (var stores_1 = __values(stores), stores_1_1 = stores_1.next(); !stores_1_1.done; stores_1_1 = stores_1.next()) {
                    var store = stores_1_1.value;
                    var s = __stores__[store];
                    if (!options.exclude) {
                        s.reset();
                    }
                    else {
                        if (options.exclude.indexOf(s.storeName) === -1) {
                            s.reset();
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (stores_1_1 && !stores_1_1.done && (_a = stores_1.return)) _a.call(stores_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }

    var _a, _b;

    (function (StoreAction) {
        StoreAction["Update"] = "UPDATE";
    })(exports.StoreAction || (exports.StoreAction = {}));
    var StoreActionMapping = (_a = {},
        _a[exports.StoreAction.Update] = 'update',
        _a);

    (function (EntityStoreAction) {
        EntityStoreAction["Update"] = "UPDATE";
        EntityStoreAction["AddEntities"] = "ADD_ENTITIES";
        EntityStoreAction["SetEntities"] = "SET_ENTITIES";
        EntityStoreAction["UpdateEntities"] = "UPDATE_ENTITIES";
        EntityStoreAction["RemoveEntities"] = "REMOVE_ENTITIES";
        EntityStoreAction["UpsertEntities"] = "UPSERT_ENTITIES";
        EntityStoreAction["UpsertManyEntities"] = "UPSERT_MANY_ENTITIES";
    })(exports.EntityStoreAction || (exports.EntityStoreAction = {}));
    var EntityStoreActionMapping = (_b = {},
        _b[exports.EntityStoreAction.Update] = 'update',
        _b[exports.EntityStoreAction.AddEntities] = 'add',
        _b[exports.EntityStoreAction.SetEntities] = 'set',
        _b[exports.EntityStoreAction.UpdateEntities] = 'update',
        _b[exports.EntityStoreAction.RemoveEntities] = 'remove',
        _b[exports.EntityStoreAction.UpsertEntities] = 'upsert',
        _b[exports.EntityStoreAction.UpsertManyEntities] = 'upsertMany',
        _b);
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
        var store = __stores__[storeName];
        if (isNil(store)) {
            throw new AkitaError(store.storeName + " doesn't exist");
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
        var store = typeof storeClassOrName === 'string' ? getStoreByName(storeClassOrName) : getStore(storeClassOrName);
        operation(store[StoreActionMapping[action]].bind(store));
    }
    function runEntityStoreAction(storeClassOrName, action, operation) {
        var store = typeof storeClassOrName === 'string' ? getEntityStoreByName(storeClassOrName) : getEntityStore(storeClassOrName);
        operation(store[EntityStoreActionMapping[action]].bind(store));
    }

    function setLoading(store) {
        return function (source) {
            return rxjs.defer(function () {
                store.setLoading(true);
                return source.pipe(operators.finalize(function () { return store.setLoading(false); }));
            });
        };
    }

    function setLoadingAndError(store) {
        return function (source) {
            return rxjs.defer(function () {
                store.setLoading(true);
                store.setError(null);
                return source.pipe(operators.tap({
                    error: function (err) {
                        store.setLoading(false);
                        store.setError(err);
                    },
                    complete: function () {
                        store.setLoading(false);
                    },
                }));
            });
        };
    }

    var SnapshotManager = /** @class */ (function () {
        function SnapshotManager() {
        }
        /**
         * Get a snapshot of the whole state or a specific stores
         * Use it ONLY for things such as saving the state in the server
         */
        SnapshotManager.prototype.getStoresSnapshot = function (stores) {
            if (stores === void 0) { stores = []; }
            var acc = {};
            var hasInclude = stores.length > 0;
            var keys = hasInclude ? stores : Object.keys(__stores__);
            for (var i = 0; i < keys.length; i++) {
                var storeName = keys[i];
                if (storeName !== 'router') {
                    acc[storeName] = __stores__[storeName]._value();
                }
            }
            return acc;
        };
        SnapshotManager.prototype.setStoresSnapshot = function (stores, options) {
            var mergedOptions = __assign({ skipStorageUpdate: false, lazy: false }, options);
            mergedOptions.skipStorageUpdate && setSkipStorageUpdate(true);
            var normalizedStores = stores;
            if (isString(stores)) {
                normalizedStores = JSON.parse(normalizedStores);
            }
            var size = Object.keys(normalizedStores).length;
            if (mergedOptions.lazy) {
                $$addStore
                    .pipe(operators.filter(function (name) { return normalizedStores.hasOwnProperty(name); }), operators.take(size))
                    .subscribe(function (name) { return __stores__[name]._setState(function () { return normalizedStores[name]; }); });
            }
            else {
                var _loop_1 = function (i, keys) {
                    var storeName = keys[i];
                    if (__stores__[storeName]) {
                        __stores__[storeName]._setState(function () { return normalizedStores[storeName]; });
                    }
                };
                for (var i = 0, keys = Object.keys(normalizedStores); i < keys.length; i++) {
                    _loop_1(i, keys);
                }
            }
            mergedOptions.skipStorageUpdate && setSkipStorageUpdate(false);
        };
        return SnapshotManager;
    }());
    var snapshotManager = new SnapshotManager();

    // @internal
    function toEntitiesIds(entities, idKey) {
        var e_1, _a;
        if (idKey === void 0) { idKey = DEFAULT_ID_KEY; }
        var ids = [];
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                ids.push(entity[idKey]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
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
        return function (source) { return source.lift(new TrackIdChanges(query)); };
    }
    var TrackIdChanges = /** @class */ (function () {
        function TrackIdChanges(query) {
            this.query = query;
        }
        TrackIdChanges.prototype.call = function (subscriber, source) {
            var _this = this;
            return source
                .pipe(operators.first(), operators.switchMap(function (entity) {
                var currId = entity[_this.query.__store__.config.idKey];
                var pending = false;
                return rxjs.merge(rxjs.of({ newId: undefined, oldId: currId, pending: false }), _this.query.__store__.selectEntityIdChanges$).pipe(
                // the new id must differ form the old id
                operators.filter(function (change) { return change.oldId === currId; }), 
                // extract the current pending state of the id update
                operators.tap(function (change) { return (pending = change.pending); }), 
                // only update the selection query if the id update is already applied to the store
                operators.filter(function (change) { return change.newId !== currId && !pending; }), 
                // build a selection query for the new entity id
                operators.switchMap(function (change) {
                    return _this.query
                        .selectEntity((currId = change.newId || currId))
                        // skip undefined value if pending.
                        .pipe(operators.filter(function () { return !pending; }));
                }));
            }))
                .subscribe(subscriber);
        };
        return TrackIdChanges;
    }());

    exports.$$addStore = $$addStore;
    exports.$$deleteStore = $$deleteStore;
    exports.$$updateStore = $$updateStore;
    exports.AkitaPlugin = AkitaPlugin;
    exports.DEFAULT_ID_KEY = DEFAULT_ID_KEY;
    exports.DirtyCheckPlugin = DirtyCheckPlugin;
    exports.EntityCollectionPlugin = EntityCollectionPlugin;
    exports.EntityDirtyCheckPlugin = EntityDirtyCheckPlugin;
    exports.EntityService = EntityService;
    exports.EntityStateHistoryPlugin = EntityStateHistoryPlugin;
    exports.EntityStore = EntityStore;
    exports.EntityUIQuery = EntityUIQuery;
    exports.EntityUIStore = EntityUIStore;
    exports.Paginator = Paginator;
    exports.PaginatorPlugin = PaginatorPlugin;
    exports.PersistNgFormPlugin = PersistNgFormPlugin;
    exports.Query = Query;
    exports.QueryConfig = QueryConfig;
    exports.QueryEntity = QueryEntity;
    exports.SnapshotManager = SnapshotManager;
    exports.StateHistoryPlugin = StateHistoryPlugin;
    exports.Store = Store;
    exports.StoreConfig = StoreConfig;
    exports.__stores__ = __stores__;
    exports.action = action;
    exports.addEntities = addEntities;
    exports.akitaConfig = akitaConfig;
    exports.akitaDevtools = akitaDevtools;
    exports.applyTransaction = applyTransaction;
    exports.arrayAdd = arrayAdd;
    exports.arrayFind = arrayFind;
    exports.arrayRemove = arrayRemove;
    exports.arrayToggle = arrayToggle;
    exports.arrayUpdate = arrayUpdate;
    exports.arrayUpsert = arrayUpsert;
    exports.byId = byId;
    exports.byKey = byKey;
    exports.cacheable = cacheable;
    exports.coerceArray = coerceArray;
    exports.combineQueries = combineQueries;
    exports.commit = commit;
    exports.compareValues = compareValues;
    exports.configKey = configKey;
    exports.createEntityQuery = createEntityQuery;
    exports.createEntityStore = createEntityStore;
    exports.createQuery = createQuery;
    exports.createStore = createStore;
    exports.currentAction = currentAction;
    exports.dirtyCheckDefaultParams = dirtyCheckDefaultParams;
    exports.dispatchAdded = dispatchAdded;
    exports.dispatchDeleted = dispatchDeleted;
    exports.dispatchUpdate = dispatchUpdate;
    exports.distinctUntilArrayItemChanged = distinctUntilArrayItemChanged;
    exports.enableAkitaProdMode = enableAkitaProdMode;
    exports.endBatch = endBatch;
    exports.entitiesToArray = entitiesToArray;
    exports.entitiesToMap = entitiesToMap;
    exports.filterNil = filterNil;
    exports.filterNilValue = filterNilValue;
    exports.find = find;
    exports.getActiveEntities = getActiveEntities;
    exports.getAkitaConfig = getAkitaConfig;
    exports.getEntityStore = getEntityStore;
    exports.getEntityStoreByName = getEntityStoreByName;
    exports.getExitingActives = getExitingActives;
    exports.getInitialEntitiesState = getInitialEntitiesState;
    exports.getNestedPath = getNestedPath;
    exports.getStore = getStore;
    exports.getStoreByName = getStoreByName;
    exports.getValue = getValue;
    exports.guid = guid;
    exports.hasActiveState = hasActiveState;
    exports.hasEntity = hasEntity;
    exports.isArray = isArray;
    exports.isDefined = isDefined;
    exports.isDev = isDev;
    exports.isEmpty = isEmpty;
    exports.isEntityState = isEntityState;
    exports.isFunction = isFunction;
    exports.isMultiActiveState = isMultiActiveState;
    exports.isNil = isNil;
    exports.isNotBrowser = isNotBrowser;
    exports.isNumber = isNumber;
    exports.isObject = isObject;
    exports.isPlainObject = isPlainObject;
    exports.isString = isString;
    exports.isTransactionInProcess = isTransactionInProcess;
    exports.isUndefined = isUndefined;
    exports.logAction = logAction;
    exports.persistState = persistState;
    exports.queryConfigKey = queryConfigKey;
    exports.removeAllEntities = removeAllEntities;
    exports.removeEntities = removeEntities;
    exports.resetCustomAction = resetCustomAction;
    exports.resetStores = resetStores;
    exports.resolveActiveEntity = resolveActiveEntity;
    exports.runEntityStoreAction = runEntityStoreAction;
    exports.runStoreAction = runStoreAction;
    exports.selectPersistStateInit = selectPersistStateInit;
    exports.setAction = setAction;
    exports.setEntities = setEntities;
    exports.setLoading = setLoading;
    exports.setLoadingAndError = setLoadingAndError;
    exports.setSkipAction = setSkipAction;
    exports.setValue = setValue;
    exports.snapshotManager = snapshotManager;
    exports.sortByOptions = sortByOptions;
    exports.startBatch = startBatch;
    exports.toBoolean = toBoolean;
    exports.toEntitiesIds = toEntitiesIds;
    exports.toEntitiesObject = toEntitiesObject;
    exports.trackIdChanges = trackIdChanges;
    exports.transaction = transaction;
    exports.transactionManager = transactionManager;
    exports.updateEntities = updateEntities;
    exports.withTransaction = withTransaction;
    exports.ɵa = isBrowser;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datorama-akita.umd.js.map
