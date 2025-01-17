import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { __extends, __decorate, __metadata, __assign } from 'tslib';
import { RoutesRecognized, GuardsCheckEnd, ResolveEnd, NavigationCancel, NavigationError, NavigationEnd, Router } from '@angular/router';
import { StoreConfig, Store, filterNilValue, Query, setSkipAction, action } from '@datorama/akita';
import { Subject, combineLatest } from 'rxjs';
import { map, distinctUntilChanged, pluck } from 'rxjs/operators';

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
    RouterStore.ɵprov = ɵɵdefineInjectable({ token: RouterStore, factory: RouterStore.ɵfac, providedIn: 'root' });
    RouterStore = __decorate([
        StoreConfig({ name: 'router' }),
        __metadata("design:paramtypes", [])
    ], RouterStore);
    return RouterStore;
}(Store));
/*@__PURE__*/ (function () { ɵsetClassMetadata(RouterStore, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

function slice(section) {
    return function (source) {
        return source.pipe(map(function (data) { return data.state; })).pipe(filterNilValue(), map(function (state) { return state[section]; }));
    };
}
var RouterQuery = /** @class */ (function (_super) {
    __extends(RouterQuery, _super);
    function RouterQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.__navigationCancel = new Subject();
        _this.__navigationError = new Subject();
        return _this;
    }
    RouterQuery.prototype.selectParams = function (names) {
        var _this = this;
        if (names === undefined) {
            return this.select().pipe(slice('params'), distinctUntilChanged());
        }
        var select = function (p) { return _this.select().pipe(slice('params'), pluck(p), distinctUntilChanged()); };
        if (Array.isArray(names)) {
            var sources = names.map(select);
            return combineLatest(sources);
        }
        return select(names).pipe(distinctUntilChanged());
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
            return this.select().pipe(slice('queryParams'), distinctUntilChanged());
        }
        var select = function (p) { return _this.select().pipe(slice('queryParams'), pluck(p), distinctUntilChanged()); };
        if (Array.isArray(names)) {
            var sources = names.map(select);
            return combineLatest(sources);
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
        return this.select().pipe(slice('fragment'), distinctUntilChanged());
    };
    RouterQuery.prototype.getFragment = function () {
        if (this.getValue().state) {
            return this.getValue().state.fragment;
        }
        return null;
    };
    RouterQuery.prototype.selectData = function (name) {
        if (name === undefined) {
            return this.select().pipe(slice('data'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
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
            return this.select().pipe(slice('navigationExtras'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
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
    RouterQuery.ɵfac = function RouterQuery_Factory(t) { return new (t || RouterQuery)(ɵɵinject(RouterStore)); };
    RouterQuery.ɵprov = ɵɵdefineInjectable({ token: RouterQuery, factory: RouterQuery.ɵfac, providedIn: 'root' });
    return RouterQuery;
}(Query));
/*@__PURE__*/ (function () { ɵsetClassMetadata(RouterQuery, [{
        type: Injectable,
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
            setSkipAction();
            this.router.navigateByUrl(this.lastRouterState.state.url);
        }
    };
    RouterService.prototype.setUpStateRollbackEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof RoutesRecognized || e instanceof GuardsCheckEnd || e instanceof ResolveEnd) {
                _this.lastRouterState = _this.serializeRoute(e);
            }
            else if (e instanceof NavigationCancel) {
                _this.dispatchRouterCancel(e);
            }
            else if (e instanceof NavigationError) {
                _this.dispatchRouterError(e);
            }
            else if (e instanceof NavigationEnd && !_this.navigationTriggeredByDispatch) {
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
    RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(ɵɵinject(RouterStore), ɵɵinject(RouterQuery), ɵɵinject(Router)); };
    RouterService.ɵprov = ɵɵdefineInjectable({ token: RouterService, factory: RouterService.ɵfac, providedIn: 'root' });
    __decorate([
        action('Navigation Cancelled'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [NavigationCancel]),
        __metadata("design:returntype", void 0)
    ], RouterService.prototype, "dispatchRouterCancel", null);
    __decorate([
        action('Navigation Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [NavigationError]),
        __metadata("design:returntype", void 0)
    ], RouterService.prototype, "dispatchRouterError", null);
    __decorate([
        action('Navigation Succeeded'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RouterService.prototype, "dispatchRouterSuccess", null);
    return RouterService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(RouterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RouterStore }, { type: RouterQuery }, { type: Router }]; }, { dispatchRouterCancel: [], dispatchRouterError: [], dispatchRouterSuccess: [] }); })();

var AkitaNgRouterStoreModule = /** @class */ (function () {
    function AkitaNgRouterStoreModule(routerService) {
        this.routerService = routerService;
        this.routerService.init();
    }
    AkitaNgRouterStoreModule.ɵmod = ɵɵdefineNgModule({ type: AkitaNgRouterStoreModule });
    AkitaNgRouterStoreModule.ɵinj = ɵɵdefineInjector({ factory: function AkitaNgRouterStoreModule_Factory(t) { return new (t || AkitaNgRouterStoreModule)(ɵɵinject(RouterService)); } });
    return AkitaNgRouterStoreModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AkitaNgRouterStoreModule, [{
        type: NgModule
    }], function () { return [{ type: RouterService }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AkitaNgRouterStoreModule, RouterQuery, RouterService, RouterStore, createInitialRouterState };
//# sourceMappingURL=datorama-akita-ng-router-store.js.map
