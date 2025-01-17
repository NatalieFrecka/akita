import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { EntityService, isDefined } from '@datorama/akita';
import { isObservable, of, throwError } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { errorAction, successAction } from './action-factory';
import { isID } from './helpers';
import { HttpMethod, NgEntityServiceNotifier } from './ng-entity-service-notifier';
import { defaultConfig, mergeDeep, NG_ENTITY_SERVICE_CONFIG } from './ng-entity-service.config';
import { NgEntityServiceLoader } from './ng-entity-service.loader';
export const mapResponse = (config) => switchMap((res) => {
    const mappedResponse = !!(config === null || config === void 0 ? void 0 : config.mapResponseFn) ? config.mapResponseFn(res) : res;
    return isObservable(mappedResponse) ? mappedResponse : of(mappedResponse);
});
export class NgEntityService extends EntityService {
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
//# sourceMappingURL=ng-entity.service.js.map