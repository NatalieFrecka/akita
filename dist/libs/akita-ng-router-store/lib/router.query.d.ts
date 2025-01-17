import { Query } from '@datorama/akita';
import { Observable, Subject } from 'rxjs';
import { RouterState, RouterStore } from './router.store';
import * as i0 from "@angular/core";
export declare class RouterQuery extends Query<RouterState> {
    protected store: RouterStore;
    __navigationCancel: Subject<unknown>;
    __navigationError: Subject<unknown>;
    constructor(store: RouterStore);
    selectParams<T = any>(names: string[]): Observable<T[]>;
    selectParams<T = any>(names?: string): Observable<T>;
    getParams<T = any>(name?: string): T | null;
    selectQueryParams<T = any>(names: string[]): Observable<T[]>;
    selectQueryParams<T = any>(names?: string): Observable<T>;
    getQueryParams<T = any>(name?: string): T | null;
    selectFragment(): Observable<string>;
    getFragment(): string | null;
    selectData<T = any>(name?: string): Observable<T>;
    getData<T = any>(name?: string): T | null;
    selectNavigationExtras<T = any>(name?: string): Observable<T>;
    getNavigationExtras<T = any>(name?: string): T | null;
    selectNavigationCancel(): Observable<unknown>;
    selectNavigationError(): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDef<RouterQuery, never>;
    static ɵprov: i0.ɵɵInjectableDef<RouterQuery>;
}
