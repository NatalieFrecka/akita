import { HttpClient } from '@angular/common/http';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, InjectionToken, inject } from '@angular/core';
import { isNumber, isString, isObject, isFunction, EntityService, isDefined } from '@datorama/akita';
import { Subject, ReplaySubject, isObservable, of, throwError } from 'rxjs';
import { filter, map, switchMap, tap, catchError, finalize } from 'rxjs/operators';

function successAction(storeName, notifier) {
    return function ({ payload, method, successMsg }) {
        notifier.dispatch({
            type: 'success',
            storeName,
            payload,
            method,
            successMsg
        });
    };
}
function errorAction(storeName, notifier) {
    return function ({ payload, method, errorMsg }) {
        notifier.dispatch({
            type: 'error',
            storeName,
            payload,
            method,
            errorMsg
        });
    };
}

function isID(idOrConfig) {
    return isNumber(idOrConfig) || isString(idOrConfig);
}

var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
const ofType = (type) => filter((action) => action.type === type);
const filterMethod = (method) => filter((action) => action.method === method);
const filterStore = (name) => filter((action) => action.storeName === name);
class NgEntityServiceNotifier {
    constructor() {
        this.dispatcher = new Subject();
        this.action$ = this.dispatcher.asObservable();
    }
    dispatch(event) {
        this.dispatcher.next(event);
    }
}
NgEntityServiceNotifier.ɵfac = function NgEntityServiceNotifier_Factory(t) { return new (t || NgEntityServiceNotifier)(); };
NgEntityServiceNotifier.ɵprov = ɵɵdefineInjectable({ token: NgEntityServiceNotifier, factory: NgEntityServiceNotifier.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgEntityServiceNotifier, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

const NG_ENTITY_SERVICE_CONFIG = new InjectionToken('NgEntityServiceGlobalConfig');
const defaultConfig = {
    httpMethods: {
        GET: HttpMethod.GET,
        POST: HttpMethod.POST,
        PATCH: HttpMethod.PATCH,
        PUT: HttpMethod.PUT,
        DELETE: HttpMethod.DELETE,
    },
};
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
function NgEntityServiceConfig(config = {}) {
    return function (constructor) {
        if (config.baseUrl) {
            constructor['baseUrl'] = config.baseUrl;
        }
        if (config.resourceName) {
            constructor['resourceName'] = config.resourceName;
        }
    };
}

class NgEntityServiceLoader {
    constructor() {
        this.dispatcher = new ReplaySubject(1);
        this.loading$ = this.dispatcher.asObservable();
    }
    dispatch(event) {
        this.dispatcher.next(event);
    }
    loadersFor(name) {
        const filterStore = filter(({ storeName }) => (name ? storeName === name : true));
        const filterMethod = (mthd) => filter(({ method }) => {
            return isFunction(mthd) ? mthd(method) : method === mthd;
        });
        const actionBased = (current) => this.loading$.pipe(filterStore, filterMethod(current), map((action) => action.loading));
        const idBased = (id, mthd) => this.loading$.pipe(filterStore, filterMethod(mthd), filter((action) => action.entityId === id), map((action) => action.loading));
        return {
            get$: actionBased(HttpMethod.GET),
            add$: actionBased(HttpMethod.POST),
            update$: actionBased((method) => method === HttpMethod.PUT || method === HttpMethod.PATCH),
            delete$: actionBased(HttpMethod.DELETE),
            getEntity: (id) => idBased(id, HttpMethod.GET),
            updateEntity: (id) => idBased(id, (method) => method === HttpMethod.PUT || method === HttpMethod.PATCH),
            deleteEntity: (id) => idBased(id, HttpMethod.DELETE),
        };
    }
}
NgEntityServiceLoader.ɵfac = function NgEntityServiceLoader_Factory(t) { return new (t || NgEntityServiceLoader)(); };
NgEntityServiceLoader.ɵprov = ɵɵdefineInjectable({ token: NgEntityServiceLoader, factory: NgEntityServiceLoader.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgEntityServiceLoader, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

const mapResponse = (config) => switchMap((res) => {
    const mappedResponse = !!(config === null || config === void 0 ? void 0 : config.mapResponseFn) ? config.mapResponseFn(res) : res;
    return isObservable(mappedResponse) ? mappedResponse : of(mappedResponse);
});
class NgEntityService extends EntityService {
    constructor(store, config = {}) {
        super();
        this.store = store;
        this.config = config;
        this.http = inject(HttpClient);
        this.loader = inject(NgEntityServiceLoader);
        this.notifier = inject(NgEntityServiceNotifier);
        const globalConfig = inject(NG_ENTITY_SERVICE_CONFIG);
        this.mergedConfig = mergeDeep({}, defaultConfig, globalConfig, this.getDecoratorConfig(), config);
        this.baseUrl = this.mergedConfig.baseUrl;
        this.httpMethodMap = this.mergedConfig.httpMethods;
        this.dispatchSuccess = successAction(this.store.storeName, this.notifier);
        this.dispatchError = errorAction(this.store.storeName, this.notifier);
    }
    get api() {
        if (!this.baseUrl) {
            throw new Error(`baseUrl of ${this.constructor.name} is not defined.`);
        }
        return `${this.baseUrl}/${this.resourceName}`;
    }
    get resourceName() {
        return this.mergedConfig.resourceName || this.store.storeName;
    }
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getHttp() {
        return this.http;
    }
    getConfig() {
        return this.mergedConfig;
    }
    get(idOrConfig, config) {
        const method = this.getHttpMethod(HttpMethod.GET);
        const isSingle = isID(idOrConfig);
        const entityId = isSingle ? idOrConfig : undefined;
        const conf = (!isSingle ? idOrConfig : config) || {};
        const url = this.resolveUrl(conf, entityId);
        this.loader.dispatch({
            method,
            loading: true,
            entityId,
            storeName: this.store.storeName,
        });
        return this.http.request(method, url, conf).pipe(mapResponse(conf), tap((data) => {
            if (!conf.skipWrite) {
                if (isSingle) {
                    this.store.upsert(entityId, data, (id, newState) => (Object.assign({ id }, newState)));
                }
                else {
                    if (conf.append) {
                        this.store.add(data);
                    }
                    else if (conf.upsert) {
                        this.store.upsertMany(data);
                    }
                    else {
                        this.store.set(data);
                    }
                }
            }
            this.dispatchSuccess({
                method,
                payload: data,
                successMsg: conf.successMsg,
            });
        }), catchError((error) => this.handleError(method, error, conf.errorMsg)), finalize(() => {
            this.loader.dispatch({
                method,
                loading: false,
                entityId,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Add a new entity - Creates a POST request
     *
     * @example
     * service.add(entity).subscribe()
     * service.add(entity, config).subscribe()
     */
    add(entity, config) {
        const url = this.resolveUrl(config);
        const method = this.getHttpMethod(HttpMethod.POST);
        this.loader.dispatch({
            method,
            loading: true,
            storeName: this.store.storeName,
        });
        const configWithBody = Object.assign(Object.assign({}, config), { body: entity });
        return this.http.request(method, url, configWithBody).pipe(mapResponse(config), tap((responseEntity) => {
            if (!config || (config && !config.skipWrite)) {
                this.store.add(responseEntity, config);
            }
            this.dispatchSuccess({
                method,
                payload: responseEntity,
                successMsg: config && config.successMsg,
            });
        }), catchError((error) => this.handleError(method, error, config && config.errorMsg)), finalize(() => {
            this.loader.dispatch({
                method,
                loading: false,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Update an entity - Creates a PUT/PATCH request
     *
     * @example
     * service.update(id, entity).subscribe()
     * service.update(id, entity, config).subscribe()
     */
    update(id, entity, config) {
        const url = this.resolveUrl(config, id);
        const method = (config && config.method) || this.getHttpMethod(HttpMethod.PUT);
        this.loader.dispatch({
            method,
            loading: true,
            entityId: id,
            storeName: this.store.storeName,
        });
        const configWithBody = Object.assign(Object.assign({}, config), { body: entity });
        return this.http.request(method, url, configWithBody).pipe(mapResponse(config), tap((responseEntity) => {
            if (!config || (config && !config.skipWrite)) {
                this.store.update(id, responseEntity);
            }
            this.dispatchSuccess({
                method,
                payload: responseEntity,
                successMsg: config && config.successMsg,
            });
        }), catchError((error) => this.handleError(method, error, config && config.errorMsg)), finalize(() => {
            this.loader.dispatch({
                method,
                loading: false,
                entityId: id,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Delete an entity - Creates a DELETE request
     *
     * @example
     * service.delete(id).subscribe()
     * service.delete(id, config).subscribe()
     */
    delete(id, config) {
        const url = this.resolveUrl(config, id);
        const method = this.getHttpMethod(HttpMethod.DELETE);
        this.loader.dispatch({
            method,
            loading: true,
            entityId: id,
            storeName: this.store.storeName,
        });
        return this.http.request(method, url, config).pipe(mapResponse(config), tap((res) => {
            if (!config || (config && !config.skipWrite)) {
                this.store.remove(id);
            }
            this.dispatchSuccess({
                method,
                payload: res,
                successMsg: config && config.successMsg,
            });
        }), catchError((error) => this.handleError(method, error, config && config.errorMsg)), finalize(() => {
            this.loader.dispatch({
                method,
                loading: false,
                entityId: id,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Gets the mapped HttpMethod.
     *
     * The default HttpMethod can be changed like so:
     * ```ts
     * {
     *   provide: NG_ENTITY_SERVICE_CONFIG,
     *   useValue: {
     *     httpMethods: {
     *       PUT: HttpMethod.PATCH,
     *     },
     *   } as NgEntityServiceGlobalConfig,
     * }
     * ```
     *
     * @param type HttpMethod to get the user configured HttpMethod for
     * @returns User configured HttpMethod for the method, else the default HttpMethod
     */
    getHttpMethod(type) {
        let httpMethod;
        if (this.httpMethodMap) {
            httpMethod = this.httpMethodMap[type];
        }
        if (!httpMethod) {
            throw new Error('Unknown HttpMethod');
        }
        return httpMethod;
    }
    /**
     * Gets the value given via the NgEntityServiceConfig decorator
     *
     * ```ts
     * @NgEntityServiceConfig({
     *   baseUrl: 'foo',
     *   resourceName: 'bar',
     * })
     * ```
     *
     * @param key The property key
     * @returns The value of the given decorator key
     */
    getDecoratorValue(key) {
        return this.constructor[key];
    }
    getDecoratorConfig() {
        const config = {};
        const baseUrl = this.getDecoratorValue('baseUrl');
        if (baseUrl) {
            config.baseUrl = baseUrl;
        }
        const resourceName = this.getDecoratorValue('resourceName');
        if (resourceName) {
            config.resourceName = resourceName;
        }
        return config;
    }
    resolveUrl(config, id) {
        const { url, urlPostfix } = Object(config);
        let final = this.api;
        if (url) {
            return url;
        }
        if (isDefined(id)) {
            final += `/${id}`;
        }
        if (urlPostfix) {
            final += `/${urlPostfix}`;
        }
        return final;
    }
    handleError(method, error, errorMsg) {
        this.dispatchError({
            method,
            errorMsg,
            payload: error,
        });
        return throwError(error);
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { HttpMethod, NG_ENTITY_SERVICE_CONFIG, NgEntityService, NgEntityServiceConfig, NgEntityServiceLoader, NgEntityServiceNotifier, defaultConfig, errorAction, filterMethod, filterStore, isID, mapResponse, mergeDeep, ofType, successAction };
//# sourceMappingURL=datorama-akita-ng-entity-service.js.map
