import { __assign, __extends } from "tslib";
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
export var mapResponse = function (config) {
    return switchMap(function (res) {
        var mappedResponse = !!(config === null || config === void 0 ? void 0 : config.mapResponseFn) ? config.mapResponseFn(res) : res;
        return isObservable(mappedResponse) ? mappedResponse : of(mappedResponse);
    });
};
var NgEntityService = /** @class */ (function (_super) {
    __extends(NgEntityService, _super);
    function NgEntityService(store, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.config = config;
        _this.http = inject(HttpClient);
        _this.loader = inject(NgEntityServiceLoader);
        _this.notifier = inject(NgEntityServiceNotifier);
        var globalConfig = inject(NG_ENTITY_SERVICE_CONFIG);
        _this.mergedConfig = mergeDeep({}, defaultConfig, globalConfig, _this.getDecoratorConfig(), config);
        _this.baseUrl = _this.mergedConfig.baseUrl;
        _this.httpMethodMap = _this.mergedConfig.httpMethods;
        _this.dispatchSuccess = successAction(_this.store.storeName, _this.notifier);
        _this.dispatchError = errorAction(_this.store.storeName, _this.notifier);
        return _this;
    }
    Object.defineProperty(NgEntityService.prototype, "api", {
        get: function () {
            if (!this.baseUrl) {
                throw new Error("baseUrl of " + this.constructor.name + " is not defined.");
            }
            return this.baseUrl + "/" + this.resourceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NgEntityService.prototype, "resourceName", {
        get: function () {
            return this.mergedConfig.resourceName || this.store.storeName;
        },
        enumerable: false,
        configurable: true
    });
    NgEntityService.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl = baseUrl;
    };
    NgEntityService.prototype.getHttp = function () {
        return this.http;
    };
    NgEntityService.prototype.getConfig = function () {
        return this.mergedConfig;
    };
    NgEntityService.prototype.get = function (idOrConfig, config) {
        var _this = this;
        var method = this.getHttpMethod(HttpMethod.GET);
        var isSingle = isID(idOrConfig);
        var entityId = isSingle ? idOrConfig : undefined;
        var conf = (!isSingle ? idOrConfig : config) || {};
        var url = this.resolveUrl(conf, entityId);
        this.loader.dispatch({
            method: method,
            loading: true,
            entityId: entityId,
            storeName: this.store.storeName,
        });
        return this.http.request(method, url, conf).pipe(mapResponse(conf), tap(function (data) {
            if (!conf.skipWrite) {
                if (isSingle) {
                    _this.store.upsert(entityId, data, function (id, newState) { return (__assign({ id: id }, newState)); });
                }
                else {
                    if (conf.append) {
                        _this.store.add(data);
                    }
                    else if (conf.upsert) {
                        _this.store.upsertMany(data);
                    }
                    else {
                        _this.store.set(data);
                    }
                }
            }
            _this.dispatchSuccess({
                method: method,
                payload: data,
                successMsg: conf.successMsg,
            });
        }), catchError(function (error) { return _this.handleError(method, error, conf.errorMsg); }), finalize(function () {
            _this.loader.dispatch({
                method: method,
                loading: false,
                entityId: entityId,
                storeName: _this.store.storeName,
            });
        }));
    };
    /**
     * Add a new entity - Creates a POST request
     *
     * @example
     * service.add(entity).subscribe()
     * service.add(entity, config).subscribe()
     */
    NgEntityService.prototype.add = function (entity, config) {
        var _this = this;
        var url = this.resolveUrl(config);
        var method = this.getHttpMethod(HttpMethod.POST);
        this.loader.dispatch({
            method: method,
            loading: true,
            storeName: this.store.storeName,
        });
        var configWithBody = __assign(__assign({}, config), { body: entity });
        return this.http.request(method, url, configWithBody).pipe(mapResponse(config), tap(function (responseEntity) {
            if (!config || (config && !config.skipWrite)) {
                _this.store.add(responseEntity, config);
            }
            _this.dispatchSuccess({
                method: method,
                payload: responseEntity,
                successMsg: config && config.successMsg,
            });
        }), catchError(function (error) { return _this.handleError(method, error, config && config.errorMsg); }), finalize(function () {
            _this.loader.dispatch({
                method: method,
                loading: false,
                storeName: _this.store.storeName,
            });
        }));
    };
    /**
     * Update an entity - Creates a PUT/PATCH request
     *
     * @example
     * service.update(id, entity).subscribe()
     * service.update(id, entity, config).subscribe()
     */
    NgEntityService.prototype.update = function (id, entity, config) {
        var _this = this;
        var url = this.resolveUrl(config, id);
        var method = (config && config.method) || this.getHttpMethod(HttpMethod.PUT);
        this.loader.dispatch({
            method: method,
            loading: true,
            entityId: id,
            storeName: this.store.storeName,
        });
        var configWithBody = __assign(__assign({}, config), { body: entity });
        return this.http.request(method, url, configWithBody).pipe(mapResponse(config), tap(function (responseEntity) {
            if (!config || (config && !config.skipWrite)) {
                _this.store.update(id, responseEntity);
            }
            _this.dispatchSuccess({
                method: method,
                payload: responseEntity,
                successMsg: config && config.successMsg,
            });
        }), catchError(function (error) { return _this.handleError(method, error, config && config.errorMsg); }), finalize(function () {
            _this.loader.dispatch({
                method: method,
                loading: false,
                entityId: id,
                storeName: _this.store.storeName,
            });
        }));
    };
    /**
     * Delete an entity - Creates a DELETE request
     *
     * @example
     * service.delete(id).subscribe()
     * service.delete(id, config).subscribe()
     */
    NgEntityService.prototype.delete = function (id, config) {
        var _this = this;
        var url = this.resolveUrl(config, id);
        var method = this.getHttpMethod(HttpMethod.DELETE);
        this.loader.dispatch({
            method: method,
            loading: true,
            entityId: id,
            storeName: this.store.storeName,
        });
        return this.http.request(method, url, config).pipe(mapResponse(config), tap(function (res) {
            if (!config || (config && !config.skipWrite)) {
                _this.store.remove(id);
            }
            _this.dispatchSuccess({
                method: method,
                payload: res,
                successMsg: config && config.successMsg,
            });
        }), catchError(function (error) { return _this.handleError(method, error, config && config.errorMsg); }), finalize(function () {
            _this.loader.dispatch({
                method: method,
                loading: false,
                entityId: id,
                storeName: _this.store.storeName,
            });
        }));
    };
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
    NgEntityService.prototype.getHttpMethod = function (type) {
        var httpMethod;
        if (this.httpMethodMap) {
            httpMethod = this.httpMethodMap[type];
        }
        if (!httpMethod) {
            throw new Error('Unknown HttpMethod');
        }
        return httpMethod;
    };
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
    NgEntityService.prototype.getDecoratorValue = function (key) {
        return this.constructor[key];
    };
    NgEntityService.prototype.getDecoratorConfig = function () {
        var config = {};
        var baseUrl = this.getDecoratorValue('baseUrl');
        if (baseUrl) {
            config.baseUrl = baseUrl;
        }
        var resourceName = this.getDecoratorValue('resourceName');
        if (resourceName) {
            config.resourceName = resourceName;
        }
        return config;
    };
    NgEntityService.prototype.resolveUrl = function (config, id) {
        var _a = Object(config), url = _a.url, urlPostfix = _a.urlPostfix;
        var final = this.api;
        if (url) {
            return url;
        }
        if (isDefined(id)) {
            final += "/" + id;
        }
        if (urlPostfix) {
            final += "/" + urlPostfix;
        }
        return final;
    };
    NgEntityService.prototype.handleError = function (method, error, errorMsg) {
        this.dispatchError({
            method: method,
            errorMsg: errorMsg,
            payload: error,
        });
        return throwError(error);
    };
    return NgEntityService;
}(EntityService));
export { NgEntityService };
//# sourceMappingURL=ng-entity.service.js.map