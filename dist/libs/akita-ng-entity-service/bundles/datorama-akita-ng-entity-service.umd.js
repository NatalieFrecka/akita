(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@datorama/akita'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@datorama/akita-ng-entity-service', ['exports', '@angular/common/http', '@angular/core', '@datorama/akita', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.datorama = global.datorama || {}, global.datorama['akita-ng-entity-service'] = {}), global.ng.common.http, global.ng.core, global.akita, global.rxjs, global.rxjs.operators));
}(this, (function (exports, http, core, akita, rxjs, operators) { 'use strict';

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
        return akita.isNumber(idOrConfig) || akita.isString(idOrConfig);
    }


    (function (HttpMethod) {
        HttpMethod["GET"] = "GET";
        HttpMethod["POST"] = "POST";
        HttpMethod["PUT"] = "PUT";
        HttpMethod["PATCH"] = "PATCH";
        HttpMethod["DELETE"] = "DELETE";
    })(exports.HttpMethod || (exports.HttpMethod = {}));
    var ofType = function (type) { return operators.filter(function (action) { return action.type === type; }); };
    var filterMethod = function (method) {
        return operators.filter(function (action) { return action.method === method; });
    };
    var filterStore = function (name) { return operators.filter(function (action) { return action.storeName === name; }); };
    var NgEntityServiceNotifier = /** @class */ (function () {
        function NgEntityServiceNotifier() {
            this.dispatcher = new rxjs.Subject();
            this.action$ = this.dispatcher.asObservable();
        }
        NgEntityServiceNotifier.prototype.dispatch = function (event) {
            this.dispatcher.next(event);
        };
        NgEntityServiceNotifier.ɵfac = function NgEntityServiceNotifier_Factory(t) { return new (t || NgEntityServiceNotifier)(); };
        NgEntityServiceNotifier.ɵprov = core["ɵɵdefineInjectable"]({ token: NgEntityServiceNotifier, factory: NgEntityServiceNotifier.ɵfac, providedIn: 'root' });
        return NgEntityServiceNotifier;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NgEntityServiceNotifier, [{
            type: core.Injectable,
            args: [{ providedIn: 'root' }]
        }], null, null); })();

    var NG_ENTITY_SERVICE_CONFIG = new core.InjectionToken('NgEntityServiceGlobalConfig');
    var defaultConfig = {
        httpMethods: {
            GET: exports.HttpMethod.GET,
            POST: exports.HttpMethod.POST,
            PATCH: exports.HttpMethod.PATCH,
            PUT: exports.HttpMethod.PUT,
            DELETE: exports.HttpMethod.DELETE,
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
        if (akita.isObject(target) && akita.isObject(source)) {
            for (var key in source) {
                if (akita.isObject(source[key])) {
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
            this.dispatcher = new rxjs.ReplaySubject(1);
            this.loading$ = this.dispatcher.asObservable();
        }
        NgEntityServiceLoader.prototype.dispatch = function (event) {
            this.dispatcher.next(event);
        };
        NgEntityServiceLoader.prototype.loadersFor = function (name) {
            var _this = this;
            var filterStore = operators.filter(function (_a) {
                var storeName = _a.storeName;
                return (name ? storeName === name : true);
            });
            var filterMethod = function (mthd) {
                return operators.filter(function (_a) {
                    var method = _a.method;
                    return akita.isFunction(mthd) ? mthd(method) : method === mthd;
                });
            };
            var actionBased = function (current) {
                return _this.loading$.pipe(filterStore, filterMethod(current), operators.map(function (action) { return action.loading; }));
            };
            var idBased = function (id, mthd) {
                return _this.loading$.pipe(filterStore, filterMethod(mthd), operators.filter(function (action) { return action.entityId === id; }), operators.map(function (action) { return action.loading; }));
            };
            return {
                get$: actionBased(exports.HttpMethod.GET),
                add$: actionBased(exports.HttpMethod.POST),
                update$: actionBased(function (method) { return method === exports.HttpMethod.PUT || method === exports.HttpMethod.PATCH; }),
                delete$: actionBased(exports.HttpMethod.DELETE),
                getEntity: function (id) { return idBased(id, exports.HttpMethod.GET); },
                updateEntity: function (id) { return idBased(id, function (method) { return method === exports.HttpMethod.PUT || method === exports.HttpMethod.PATCH; }); },
                deleteEntity: function (id) { return idBased(id, exports.HttpMethod.DELETE); },
            };
        };
        NgEntityServiceLoader.ɵfac = function NgEntityServiceLoader_Factory(t) { return new (t || NgEntityServiceLoader)(); };
        NgEntityServiceLoader.ɵprov = core["ɵɵdefineInjectable"]({ token: NgEntityServiceLoader, factory: NgEntityServiceLoader.ɵfac, providedIn: 'root' });
        return NgEntityServiceLoader;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NgEntityServiceLoader, [{
            type: core.Injectable,
            args: [{ providedIn: 'root' }]
        }], null, null); })();

    var mapResponse = function (config) {
        return operators.switchMap(function (res) {
            var mappedResponse = !!(config === null || config === void 0 ? void 0 : config.mapResponseFn) ? config.mapResponseFn(res) : res;
            return rxjs.isObservable(mappedResponse) ? mappedResponse : rxjs.of(mappedResponse);
        });
    };
    var NgEntityService = /** @class */ (function (_super) {
        __extends(NgEntityService, _super);
        function NgEntityService(store, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this) || this;
            _this.store = store;
            _this.config = config;
            _this.http = core.inject(http.HttpClient);
            _this.loader = core.inject(NgEntityServiceLoader);
            _this.notifier = core.inject(NgEntityServiceNotifier);
            var globalConfig = core.inject(NG_ENTITY_SERVICE_CONFIG);
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
            var method = this.getHttpMethod(exports.HttpMethod.GET);
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
            return this.http.request(method, url, conf).pipe(mapResponse(conf), operators.tap(function (data) {
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
            }), operators.catchError(function (error) { return _this.handleError(method, error, conf.errorMsg); }), operators.finalize(function () {
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
            var method = this.getHttpMethod(exports.HttpMethod.POST);
            this.loader.dispatch({
                method: method,
                loading: true,
                storeName: this.store.storeName,
            });
            var configWithBody = __assign(__assign({}, config), { body: entity });
            return this.http.request(method, url, configWithBody).pipe(mapResponse(config), operators.tap(function (responseEntity) {
                if (!config || (config && !config.skipWrite)) {
                    _this.store.add(responseEntity, config);
                }
                _this.dispatchSuccess({
                    method: method,
                    payload: responseEntity,
                    successMsg: config && config.successMsg,
                });
            }), operators.catchError(function (error) { return _this.handleError(method, error, config && config.errorMsg); }), operators.finalize(function () {
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
            var method = (config && config.method) || this.getHttpMethod(exports.HttpMethod.PUT);
            this.loader.dispatch({
                method: method,
                loading: true,
                entityId: id,
                storeName: this.store.storeName,
            });
            var configWithBody = __assign(__assign({}, config), { body: entity });
            return this.http.request(method, url, configWithBody).pipe(mapResponse(config), operators.tap(function (responseEntity) {
                if (!config || (config && !config.skipWrite)) {
                    _this.store.update(id, responseEntity);
                }
                _this.dispatchSuccess({
                    method: method,
                    payload: responseEntity,
                    successMsg: config && config.successMsg,
                });
            }), operators.catchError(function (error) { return _this.handleError(method, error, config && config.errorMsg); }), operators.finalize(function () {
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
            var method = this.getHttpMethod(exports.HttpMethod.DELETE);
            this.loader.dispatch({
                method: method,
                loading: true,
                entityId: id,
                storeName: this.store.storeName,
            });
            return this.http.request(method, url, config).pipe(mapResponse(config), operators.tap(function (res) {
                if (!config || (config && !config.skipWrite)) {
                    _this.store.remove(id);
                }
                _this.dispatchSuccess({
                    method: method,
                    payload: res,
                    successMsg: config && config.successMsg,
                });
            }), operators.catchError(function (error) { return _this.handleError(method, error, config && config.errorMsg); }), operators.finalize(function () {
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
            if (akita.isDefined(id)) {
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
            return rxjs.throwError(error);
        };
        return NgEntityService;
    }(akita.EntityService));

    exports.NG_ENTITY_SERVICE_CONFIG = NG_ENTITY_SERVICE_CONFIG;
    exports.NgEntityService = NgEntityService;
    exports.NgEntityServiceConfig = NgEntityServiceConfig;
    exports.NgEntityServiceLoader = NgEntityServiceLoader;
    exports.NgEntityServiceNotifier = NgEntityServiceNotifier;
    exports.defaultConfig = defaultConfig;
    exports.errorAction = errorAction;
    exports.filterMethod = filterMethod;
    exports.filterStore = filterStore;
    exports.isID = isID;
    exports.mapResponse = mapResponse;
    exports.mergeDeep = mergeDeep;
    exports.ofType = ofType;
    exports.successAction = successAction;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datorama-akita-ng-entity-service.umd.js.map
