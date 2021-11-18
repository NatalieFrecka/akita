import { Msg } from './types';
import * as i0 from "@angular/core";
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}
export declare type ActionType = 'success' | 'error';
export declare type EntityServiceAction = {
    storeName: string;
    type: ActionType;
    payload: any;
    method: HttpMethod;
} & Msg;
export declare const ofType: (type: ActionType) => import("rxjs").MonoTypeOperatorFunction<EntityServiceAction>;
export declare const filterMethod: (method: HttpMethod | keyof (typeof HttpMethod)) => import("rxjs").MonoTypeOperatorFunction<EntityServiceAction>;
export declare const filterStore: (name: string) => import("rxjs").MonoTypeOperatorFunction<EntityServiceAction>;
export declare class NgEntityServiceNotifier {
    private dispatcher;
    action$: import("rxjs").Observable<EntityServiceAction>;
    dispatch(event: EntityServiceAction): void;
    static ɵfac: i0.ɵɵFactoryDef<NgEntityServiceNotifier, never>;
    static ɵprov: i0.ɵɵInjectableDef<NgEntityServiceNotifier>;
}
