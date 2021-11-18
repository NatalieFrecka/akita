import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { RoutesRecognized, GuardsCheckEnd, ResolveEnd, NavigationCancel, NavigationError, NavigationEnd, Router } from '@angular/router';
import { Store, StoreConfig, filterNilValue, Query, setSkipAction, action } from '@datorama/akita';
import { Subject, combineLatest } from 'rxjs';
import { map, distinctUntilChanged, pluck } from 'rxjs/operators';

function createInitialRouterState() {
    return {
        state: null,
        navigationId: null
    };
}
let RouterStore = class RouterStore extends Store {
    constructor() {
        super(createInitialRouterState());
    }
};
RouterStore.ɵfac = function RouterStore_Factory(t) { return new (t || RouterStore)(); };
RouterStore.ɵprov = ɵɵdefineInjectable({ token: RouterStore, factory: RouterStore.ɵfac, providedIn: 'root' });
RouterStore = __decorate([
    StoreConfig({ name: 'router' }),
    __metadata("design:paramtypes", [])
], RouterStore);
/*@__PURE__*/ (function () { ɵsetClassMetadata(RouterStore, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

function slice(section) {
    return (source) => {
        return source.pipe(map((data) => data.state)).pipe(filterNilValue(), map((state) => state[section]));
    };
}
class RouterQuery extends Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.__navigationCancel = new Subject();
        this.__navigationError = new Subject();
    }
    selectParams(names) {
        if (names === undefined) {
            return this.select().pipe(slice('params'), distinctUntilChanged());
        }
        const select = (p) => this.select().pipe(slice('params'), pluck(p), distinctUntilChanged());
        if (Array.isArray(names)) {
            const sources = names.map(select);
            return combineLatest(sources);
        }
        return select(names).pipe(distinctUntilChanged());
    }
    getParams(name) {
        if (this.getValue().state) {
            const params = this.getValue().state.params;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    }
    selectQueryParams(names) {
        if (names === undefined) {
            return this.select().pipe(slice('queryParams'), distinctUntilChanged());
        }
        const select = (p) => this.select().pipe(slice('queryParams'), pluck(p), distinctUntilChanged());
        if (Array.isArray(names)) {
            const sources = names.map(select);
            return combineLatest(sources);
        }
        return select(names);
    }
    getQueryParams(name) {
        if (this.getValue().state) {
            const params = this.getValue().state.queryParams;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    }
    selectFragment() {
        return this.select().pipe(slice('fragment'), distinctUntilChanged());
    }
    getFragment() {
        if (this.getValue().state) {
            return this.getValue().state.fragment;
        }
        return null;
    }
    selectData(name) {
        if (name === undefined) {
            return this.select().pipe(slice('data'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
    }
    getData(name) {
        if (this.getValue().state) {
            const data = this.getValue().state.data;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    }
    selectNavigationExtras(name) {
        if (name === undefined) {
            return this.select().pipe(slice('navigationExtras'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
    }
    getNavigationExtras(name) {
        if (this.getValue().state) {
            const data = this.getValue().state.navigationExtras;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    }
    selectNavigationCancel() {
        return this.__navigationCancel.asObservable();
    }
    selectNavigationError() {
        return this.__navigationError.asObservable();
    }
}
RouterQuery.ɵfac = function RouterQuery_Factory(t) { return new (t || RouterQuery)(ɵɵinject(RouterStore)); };
RouterQuery.ɵprov = ɵɵdefineInjectable({ token: RouterQuery, factory: RouterQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RouterQuery, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RouterStore }]; }, null); })();

class RouterService {
    constructor(routerStore, routerQuery, router) {
        this.routerStore = routerStore;
        this.routerQuery = routerQuery;
        this.router = router;
        this.dispatchTriggeredByRouter = false;
        this.navigationTriggeredByDispatch = false;
    }
    dispatchRouterCancel(event) {
        this.update({ navigationId: event.id });
        this.routerQuery.__navigationCancel.next(event);
    }
    dispatchRouterError(event) {
        this.update({ navigationId: event.id });
        this.routerQuery.__navigationError.next(event);
    }
    dispatchRouterSuccess() {
        this.update(this.lastRouterState);
    }
    init() {
        this.setUpStoreListener();
        this.setUpStateRollbackEvents();
    }
    update(routerState) {
        this.dispatchTriggeredByRouter = true;
        this.routerStore.update((state) => {
            return Object.assign(Object.assign({}, state), routerState);
        });
        this.dispatchTriggeredByRouter = false;
        this.navigationTriggeredByDispatch = false;
    }
    setUpStoreListener() {
        this.routerQuery
            .select((state) => state)
            .subscribe((s) => {
            this.lastRouterState = s;
            this.navigateIfNeeded();
        });
    }
    navigateIfNeeded() {
        if (!this.lastRouterState || !this.lastRouterState.state || this.dispatchTriggeredByRouter) {
            return;
        }
        if (this.router.url !== this.lastRouterState.state.url) {
            this.navigationTriggeredByDispatch = true;
            setSkipAction();
            this.router.navigateByUrl(this.lastRouterState.state.url);
        }
    }
    setUpStateRollbackEvents() {
        this.router.events.subscribe((e) => {
            if (e instanceof RoutesRecognized || e instanceof GuardsCheckEnd || e instanceof ResolveEnd) {
                this.lastRouterState = this.serializeRoute(e);
            }
            else if (e instanceof NavigationCancel) {
                this.dispatchRouterCancel(e);
            }
            else if (e instanceof NavigationError) {
                this.dispatchRouterError(e);
            }
            else if (e instanceof NavigationEnd && !this.navigationTriggeredByDispatch) {
                this.dispatchRouterSuccess();
            }
        });
    }
    serializeRoute(navigationEvent) {
        let state = navigationEvent.state.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params, data, queryParams, fragment } = state;
        return {
            navigationId: navigationEvent.id,
            state: {
                url: navigationEvent.url,
                urlAfterRedirects: navigationEvent.urlAfterRedirects,
                params,
                queryParams,
                fragment,
                data,
                navigationExtras: this.router.getCurrentNavigation().extras ? this.router.getCurrentNavigation().extras.state : {},
            },
        };
    }
}
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(RouterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RouterStore }, { type: RouterQuery }, { type: Router }]; }, { dispatchRouterCancel: [], dispatchRouterError: [], dispatchRouterSuccess: [] }); })();

class AkitaNgRouterStoreModule {
    constructor(routerService) {
        this.routerService = routerService;
        this.routerService.init();
    }
}
AkitaNgRouterStoreModule.ɵmod = ɵɵdefineNgModule({ type: AkitaNgRouterStoreModule });
AkitaNgRouterStoreModule.ɵinj = ɵɵdefineInjector({ factory: function AkitaNgRouterStoreModule_Factory(t) { return new (t || AkitaNgRouterStoreModule)(ɵɵinject(RouterService)); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AkitaNgRouterStoreModule, [{
        type: NgModule
    }], function () { return [{ type: RouterService }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AkitaNgRouterStoreModule, RouterQuery, RouterService, RouterStore, createInitialRouterState };
//# sourceMappingURL=datorama-akita-ng-router-store.js.map
