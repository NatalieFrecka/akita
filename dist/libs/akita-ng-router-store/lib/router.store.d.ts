import { Store, HashMap } from '@datorama/akita';
import * as i0 from "@angular/core";
export declare type ActiveRouteState = {
    url: string;
    urlAfterRedirects: string;
    fragment: string;
    params: HashMap<any>;
    queryParams: HashMap<any>;
    data: HashMap<any>;
    navigationExtras: HashMap<any> | undefined;
};
export declare type RouterState = {
    state: ActiveRouteState | null;
    navigationId: number | null;
};
export declare function createInitialRouterState(): RouterState;
export declare class RouterStore extends Store<RouterState> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<RouterStore, never>;
    static ɵprov: i0.ɵɵInjectableDef<RouterStore>;
}
