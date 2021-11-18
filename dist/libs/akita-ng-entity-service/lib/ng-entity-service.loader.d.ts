import { HttpMethod } from './ng-entity-service-notifier';
import * as i0 from "@angular/core";
export declare type Event = {
    method: HttpMethod;
    loading: boolean;
    storeName: string;
    entityId?: any;
};
export declare class NgEntityServiceLoader {
    private dispatcher;
    loading$: import("rxjs").Observable<Event>;
    dispatch(event: Event): void;
    loadersFor(name?: string): {
        get$: import("rxjs").Observable<boolean>;
        add$: import("rxjs").Observable<boolean>;
        update$: import("rxjs").Observable<boolean>;
        delete$: import("rxjs").Observable<boolean>;
        getEntity: (id: any) => import("rxjs").Observable<boolean>;
        updateEntity: (id: any) => import("rxjs").Observable<boolean>;
        deleteEntity: (id: any) => import("rxjs").Observable<boolean>;
    };
    static ɵfac: i0.ɵɵFactoryDef<NgEntityServiceLoader, never>;
    static ɵprov: i0.ɵɵInjectableDef<NgEntityServiceLoader>;
}
