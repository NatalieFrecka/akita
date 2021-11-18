import { __assign, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { GuardsCheckEnd, NavigationCancel, NavigationEnd, NavigationError, ResolveEnd, Router, RoutesRecognized } from '@angular/router';
import { RouterStore } from './router.store';
import { RouterQuery } from './router.query';
import { action, setSkipAction } from '@datorama/akita';
import * as i0 from "@angular/core";
import * as i1 from "./router.store";
import * as i2 from "./router.query";
import * as i3 from "@angular/router";
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
    return RouterService;
}());
export { RouterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RouterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RouterStore }, { type: i2.RouterQuery }, { type: i3.Router }]; }, { dispatchRouterCancel: [], dispatchRouterError: [], dispatchRouterSuccess: [] }); })();
//# sourceMappingURL=router.service.js.map