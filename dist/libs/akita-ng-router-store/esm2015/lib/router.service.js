import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { GuardsCheckEnd, NavigationCancel, NavigationEnd, NavigationError, ResolveEnd, Router, RoutesRecognized } from '@angular/router';
import { RouterStore } from './router.store';
import { RouterQuery } from './router.query';
import { action, setSkipAction } from '@datorama/akita';
import * as i0 from "@angular/core";
import * as i1 from "./router.store";
import * as i2 from "./router.query";
import * as i3 from "@angular/router";
export class RouterService {
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
RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(i0.ɵɵinject(i1.RouterStore), i0.ɵɵinject(i2.RouterQuery), i0.ɵɵinject(i3.Router)); };
RouterService.ɵprov = i0.ɵɵdefineInjectable({ token: RouterService, factory: RouterService.ɵfac, providedIn: 'root' });
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RouterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RouterStore }, { type: i2.RouterQuery }, { type: i3.Router }]; }, { dispatchRouterCancel: [], dispatchRouterError: [], dispatchRouterSuccess: [] }); })();
//# sourceMappingURL=router.service.js.map