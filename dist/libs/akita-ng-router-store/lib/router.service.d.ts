import { NavigationCancel, NavigationError, Router } from '@angular/router';
import { RouterStore } from './router.store';
import { RouterQuery } from './router.query';
import * as i0 from "@angular/core";
export declare class RouterService {
    private routerStore;
    private routerQuery;
    private router;
    private dispatchTriggeredByRouter;
    private navigationTriggeredByDispatch;
    private lastRouterState;
    constructor(routerStore: RouterStore, routerQuery: RouterQuery, router: Router);
    dispatchRouterCancel(event: NavigationCancel): void;
    dispatchRouterError(event: NavigationError): void;
    dispatchRouterSuccess(): void;
    init(): void;
    private update;
    private setUpStoreListener;
    private navigateIfNeeded;
    private setUpStateRollbackEvents;
    private serializeRoute;
    static ɵfac: i0.ɵɵFactoryDef<RouterService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RouterService>;
}
