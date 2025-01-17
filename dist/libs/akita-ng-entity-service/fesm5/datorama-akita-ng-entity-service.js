import { __spread, __extends, __assign } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, InjectionToken, inject } from '@angular/core';
import { isNumber, isString, isObject, isFunction, isDefined, EntityService } from '@datorama/akita';
import { Subject, ReplaySubject, isObservable, of, throwError } from 'rxjs';
import { filter, map, switchMap, tap, catchError, finalize } from 'rxjs/operators';

function successAction(storeName, notifier) {
    return function (_a) {
        var payload = _a.payload, method = _a.method, successMsg = _a.successMsg;
        notifier.dispatch({
            type: 'success',
            storeName: storeName,
            payload: payload,
            method: method,
            successMsg: successMsg
        });
    };
}
function errorAction(storeName, notifier) {
    return function (_a) {
        var payload = _a.payload, method = _a.method, errorMsg = _a.errorMsg;
        notifier.dispatch({
            type: 'error',
            storeName: storeName,
            payload: payload,
            method: method,
            errorMsg: errorMsg
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
var ofType = function (type) { return filter(function (action) { return action.type === type; }); };
var filterMethod = function (method) {
    return filter(function (action) { return action.method === method; });
};
var filterStore = function (name) { return filter(function (action) { return action.storeName === name; }); };
var NgEntityServiceNotifier = /** @class */ (function () {
    function NgEntityServiceNotifier() {
        this.dispatcher = new Subject();
        this.action$ = this.dispatcher.asObservable();
    }
    NgEntityServiceNotifier.prototype.dispatch = function (event) {
        this.dispatcher.next(event);
    };
    NgEntityServiceNotifier.ɵfac = function NgEntityServiceNotifier_Factory(t) { return new (t || NgEntityServiceNotifier)(); };
    NgEntityServiceNotifier.ɵprov = ɵɵdefineInjectable({ token: NgEntityServiceNotifier, factory: NgEntityServiceNotifier.ɵfac, providedIn: 'root' });
    return NgEntityServiceNotifier;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgEntityServiceNotifier, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

var NG_ENTITY_SERVICE_CONFIG = new InjectionToken('NgEntityServiceGlobalConfig');
var defaultConfig = {
    httpMethods: {
        GET: HttpMethod.GET,
        POST: HttpMethod.POST,
        PATCH: HttpMethod.PATCH,
        PUT: HttpMethod.PUT,
        DELETE: HttpMethod.DELETE,
    },
};
function mergeDeep(target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return mergeDeep.apply(void 0, __spread([target], sources));
}
function NgEntityServiceConfig(config) {
    if (config === void 0) { config = {}; }
    return function (constructor) {
        if (config.baseUrl) {
            constructor['baseUrl'] = config.baseUrl;
        }
        if (config.resourceName) {
            constructor['resourceName'] = config.resourceName;
        }
    };
}

var NgEntityServiceLoader = /** @class */ (function () {
    function NgEntityServiceLoader() {
        this.dispatcher = new ReplaySubject(1);
        this.loading$ = this.dispatcher.asObservable();
    }
    NgEntityServiceLoader.prototype.dispatch = function (event) {
        this.dispatcher.next(event);
    };
    NgEntityServiceLoader.prototype.loadersFor = function (name) {
        var _this = this;
        var filterStore = filter(function (_a) {
            var storeName = _a.storeName;
            return (name ? storeName === name : true);
        });
        var filterMethod = function (mthd) {
            return filter(function (_a) {
                var method = _a.method;
                return isFunction(mthd) ? mthd(method) : method === mthd;
            });
        };
        var actionBased = function (current) {
            return _this.loading$.pipe(filterStore, filterMethod(current), map(function (action) { return action.loading; }));
        };
        var idBased = function (id, mthd) {
            return _this.loading$.pipe(filterStore, filterMethod(mthd), filter(function (action) { return action.entityId === id; }), map(function (action) { return action.loading; }));
        };
        return {
            get$: actionBased(HttpMethod.GET),
            add$: actionBased(HttpMethod.POST),
            update$: actionBased(function (method) { return method === HttpMethod.PUT || method === HttpMethod.PATCH; }),
            delete$: actionBased(HttpMethod.DELETE),
            getEntity: function (id) { return idBased(id, HttpMethod.GET); },
            updateEntity: function (id) { return idBased(id, function (method) { return method === HttpMethod.PUT || method === HttpMethod.PATCH; }); },
            deleteEntity: function (id) { return idBased(id, HttpMethod.DELETE); },
        };
    };
    NgEntityServiceLoader.ɵfac = function NgEntityServiceLoader_Factory(t) { return new (t || NgEntityServiceLoader)(); };
    NgEntityServiceLoader.ɵprov = ɵɵdefineInjectable({ token: NgEntityServiceLoader, factory: NgEntityServiceLoader.ɵfac, providedIn: 'root' });
    return NgEntityServiceLoader;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgEntityServiceLoader, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

var mapResponse = function (config) {
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

/**
 * Generated bundle index. Do not edit.
 */

export { HttpMethod, NG_ENTITY_SERVICE_CONFIG, NgEntityService, NgEntityServiceConfig, NgEntityServiceLoader, NgEntityServiceNotifier, defaultConfig, errorAction, filterMethod, filterStore, isID, mapResponse, mergeDeep, ofType, successAction };
//# sourceMappingURL=datorama-akita-ng-entity-service.js.map
