(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@datorama/akita'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@datorama/akita-ng-router-store', ['exports', '@angular/core', '@angular/router', '@datorama/akita', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.datorama = global.datorama || {}, global.datorama['akita-ng-router-store'] = {}), global.ng.core, global.ng.router, global.akita, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, router, akita, rxjs, operators) { 'use strict';

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

    function createInitialRouterState() {
        return {
            state: null,
            navigationId: null
        };
    }
    var RouterStore = /** @class */ (function (_super) {
        __extends(RouterStore, _super);
        function RouterStore() {
            return _super.call(this, createInitialRouterState()) || this;
        }
        RouterStore.ɵfac = function RouterStore_Factory(t) { return new (t || RouterStore)(); };
        RouterStore.ɵprov = core["ɵɵdefineInjectable"]({ token: RouterStore, factory: RouterStore.ɵfac, providedIn: 'root' });
        RouterStore = __decorate([
            akita.StoreConfig({ name: 'router' }),
            __metadata("design:paramtypes", [])
        ], RouterStore);
        return RouterStore;
    }(akita.Store));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RouterStore, [{
            type: core.Injectable,
            args: [{ providedIn: 'root' }]
        }], function () { return []; }, null); })();

    function slice(section) {
        return function (source) {
            return source.pipe(operators.map(function (data) { return data.state; })).pipe(akita.filterNilValue(), operators.map(function (state) { return state[section]; }));
        };
    }
    var RouterQuery = /** @class */ (function (_super) {
        __extends(RouterQuery, _super);
        function RouterQuery(store) {
            var _this = _super.call(this, store) || this;
            _this.store = store;
            _this.__navigationCancel = new rxjs.Subject();
            _this.__navigationError = new rxjs.Subject();
            return _this;
        }
        RouterQuery.prototype.selectParams = function (names) {
            var _this = this;
            if (names === undefined) {
                return this.select().pipe(slice('params'), operators.distinctUntilChanged());
            }
            var select = function (p) { return _this.select().pipe(slice('params'), operators.pluck(p), operators.distinctUntilChanged()); };
            if (Array.isArray(names)) {
                var sources = names.map(select);
                return rxjs.combineLatest(sources);
            }
            return select(names).pipe(operators.distinctUntilChanged());
        };
        RouterQuery.prototype.getParams = function (name) {
            if (this.getValue().state) {
                var params = this.getValue().state.params;
                if (name === undefined) {
                    return params;
                }
                return params[name];
            }
            return null;
        };
        RouterQuery.prototype.selectQueryParams = function (names) {
            var _this = this;
            if (names === undefined) {
                return this.select().pipe(slice('queryParams'), operators.distinctUntilChanged());
            }
            var select = function (p) { return _this.select().pipe(slice('queryParams'), operators.pluck(p), operators.distinctUntilChanged()); };
            if (Array.isArray(names)) {
                var sources = names.map(select);
                return rxjs.combineLatest(sources);
            }
            return select(names);
        };
        RouterQuery.prototype.getQueryParams = function (name) {
            if (this.getValue().state) {
                var params = this.getValue().state.queryParams;
                if (name === undefined) {
                    return params;
                }
                return params[name];
            }
            return null;
        };
        RouterQuery.prototype.selectFragment = function () {
            return this.select().pipe(slice('fragment'), operators.distinctUntilChanged());
        };
        RouterQuery.prototype.getFragment = function () {
            if (this.getValue().state) {
                return this.getValue().state.fragment;
            }
            return null;
        };
        RouterQuery.prototype.selectData = function (name) {
            if (name === undefined) {
                return this.select().pipe(slice('data'), operators.distinctUntilChanged());
            }
            return this.select().pipe(slice('data'), operators.pluck(name), operators.distinctUntilChanged());
        };
        RouterQuery.prototype.getData = function (name) {
            if (this.getValue().state) {
                var data = this.getValue().state.data;
                if (name === undefined) {
                    return data;
                }
                return data[name];
            }
            return null;
        };
        RouterQuery.prototype.selectNavigationExtras = function (name) {
            if (name === undefined) {
                return this.select().pipe(slice('navigationExtras'), operators.distinctUntilChanged());
            }
            return this.select().pipe(slice('data'), operators.pluck(name), operators.distinctUntilChanged());
        };
        RouterQuery.prototype.getNavigationExtras = function (name) {
            if (this.getValue().state) {
                var data = this.getValue().state.navigationExtras;
                if (name === undefined) {
                    return data;
                }
                return data[name];
            }
            return null;
        };
        RouterQuery.prototype.selectNavigationCancel = function () {
            return this.__navigationCancel.asObservable();
        };
        RouterQuery.prototype.selectNavigationError = function () {
            return this.__navigationError.asObservable();
        };
        RouterQuery.ɵfac = function RouterQuery_Factory(t) { return new (t || RouterQuery)(core["ɵɵinject"](RouterStore)); };
        RouterQuery.ɵprov = core["ɵɵdefineInjectable"]({ token: RouterQuery, factory: RouterQuery.ɵfac, providedIn: 'root' });
        return RouterQuery;
    }(akita.Query));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RouterQuery, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () { return [{ type: RouterStore }]; }, null); })();

    var RouterService = /** @class */ (function () {
        function RouterService(routerStore, routerQuery, router) {
            this.routerStore = routerStore;
            this.routerQuery = routerQuery;
            this.router = router;
            this.dispatchTriggeredByRouter = false;
            this.navigationTriggeredByDispatch = false;
        }
        RouterService.prototype.dispatchRouterCancel = function (event) {
            this.update({ navigationId: event.id });
            this.routerQuery.__navigationCancel.next(event);
        };
        RouterService.prototype.dispatchRouterError = function (event) {
            this.update({ navigationId: event.id });
            this.routerQuery.__navigationError.next(event);
        };
        RouterService.prototype.dispatchRouterSuccess = function () {
            this.update(this.lastRouterState);
        };
        RouterService.prototype.init = function () {
            this.setUpStoreListener();
            this.setUpStateRollbackEvents();
        };
        RouterService.prototype.update = function (routerState) {
            this.dispatchTriggeredByRouter = true;
            this.routerStore.update(function (state) {
                return __assign(__assign({}, state), routerState);
            });
            this.dispatchTriggeredByRouter = false;
            this.navigationTriggeredByDispatch = false;
        };
        RouterService.prototype.setUpStoreListener = function () {
            var _this = this;
            this.routerQuery
                .select(function (state) { return state; })
                .subscribe(function (s) {
                _this.lastRouterState = s;
                _this.navigateIfNeeded();
            });
        };
        RouterService.prototype.navigateIfNeeded = function () {
            if (!this.lastRouterState || !this.lastRouterState.state || this.dispatchTriggeredByRouter) {
                return;
            }
            if (this.router.url !== this.lastRouterState.state.url) {
                this.navigationTriggeredByDispatch = true;
                akita.setSkipAction();
                this.router.navigateByUrl(this.lastRouterState.state.url);
            }
        };
        RouterService.prototype.setUpStateRollbackEvents = function () {
            var _this = this;
            this.router.events.subscribe(function (e) {
                if (e instanceof router.RoutesRecognized || e instanceof router.GuardsCheckEnd || e instanceof router.ResolveEnd) {
                    _this.lastRouterState = _this.serializeRoute(e);
                }
                else if (e instanceof router.NavigationCancel) {
                    _this.dispatchRouterCancel(e);
                }
                else if (e instanceof router.NavigationError) {
                    _this.dispatchRouterError(e);
                }
                else if (e instanceof router.NavigationEnd && !_this.navigationTriggeredByDispatch) {
                    _this.dispatchRouterSuccess();
                }
            });
        };
        RouterService.prototype.serializeRoute = function (navigationEvent) {
            var state = navigationEvent.state.root;
            while (state.firstChild) {
                state = state.firstChild;
            }
            var params = state.params, data = state.data, queryParams = state.queryParams, fragment = state.fragment;
            return {
                navigationId: navigationEvent.id,
                state: {
                    url: navigationEvent.url,
                    urlAfterRedirects: navigationEvent.urlAfterRedirects,
                    params: params,
                    queryParams: queryParams,
                    fragment: fragment,
                    data: data,
                    navigationExtras: this.router.getCurrentNavigation().extras ? this.router.getCurrentNavigation().extras.state : {},
                },
            };
        };
        RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(core["ɵɵinject"](RouterStore), core["ɵɵinject"](RouterQuery), core["ɵɵinject"](router.Router)); };
        RouterService.ɵprov = core["ɵɵdefineInjectable"]({ token: RouterService, factory: RouterService.ɵfac, providedIn: 'root' });
        __decorate([
            akita.action('Navigation Cancelled'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [router.NavigationCancel]),
            __metadata("design:returntype", void 0)
        ], RouterService.prototype, "dispatchRouterCancel", null);
        __decorate([
            akita.action('Navigation Error'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [router.NavigationError]),
            __metadata("design:returntype", void 0)
        ], RouterService.prototype, "dispatchRouterError", null);
        __decorate([
            akita.action('Navigation Succeeded'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], RouterService.prototype, "dispatchRouterSuccess", null);
        return RouterService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RouterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () { return [{ type: RouterStore }, { type: RouterQuery }, { type: router.Router }]; }, { dispatchRouterCancel: [], dispatchRouterError: [], dispatchRouterSuccess: [] }); })();

    var AkitaNgRouterStoreModule = /** @class */ (function () {
        function AkitaNgRouterStoreModule(routerService) {
            this.routerService = routerService;
            this.routerService.init();
        }
        AkitaNgRouterStoreModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AkitaNgRouterStoreModule });
        AkitaNgRouterStoreModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AkitaNgRouterStoreModule_Factory(t) { return new (t || AkitaNgRouterStoreModule)(core["ɵɵinject"](RouterService)); } });
        return AkitaNgRouterStoreModule;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AkitaNgRouterStoreModule, [{
            type: core.NgModule
        }], function () { return [{ type: RouterService }]; }, null); })();

    exports.AkitaNgRouterStoreModule = AkitaNgRouterStoreModule;
    exports.RouterQuery = RouterQuery;
    exports.RouterService = RouterService;
    exports.RouterStore = RouterStore;
    exports.createInitialRouterState = createInitialRouterState;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datorama-akita-ng-router-store.umd.js.map
