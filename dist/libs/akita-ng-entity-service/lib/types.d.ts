import { HttpHeaders, HttpParams } from '@angular/common/http';
import { AddEntitiesOptions } from '@datorama/akita';
import { Observable } from 'rxjs';
import { HttpMethod } from './ng-entity-service-notifier';
export interface NgEntityServiceParams {
    baseUrl?: string;
    resourceName?: string;
}
declare type _HttpHeaders = HttpHeaders | {
    [header: string]: string | string[];
};
declare type _HttpParams = HttpParams | {
    [param: string]: string | string[];
};
export declare type Msg = {
    successMsg?: string;
    errorMsg?: string;
};
export declare type HttpConfig<Entity = any> = {
    params?: _HttpParams;
    headers?: _HttpHeaders;
    url?: string;
    urlPostfix?: string;
    mapResponseFn?: (res: any) => Entity | Entity[] | Observable<Entity | Entity[]>;
};
interface StoreWrite {
    /**
     * Disables writing to the store
     *
     * You then have to manually write to the store.
     * This is useful when pairing the NgEntityService with the PaginatorPlugin
     */
    skipWrite?: boolean;
}
export declare type HttpGetConfig<Entity = any> = HttpConfig<Entity> & {
    append?: boolean;
    upsert?: boolean;
} & StoreWrite & Msg;
export declare type HttpAddConfig<Entity = any> = HttpConfig<Entity> & Pick<AddEntitiesOptions, 'prepend'> & StoreWrite & Msg;
export declare type HttpUpdateConfig<Entity = any> = HttpConfig<Entity> & {
    method?: HttpMethod.PUT | HttpMethod.PATCH;
} & StoreWrite & Msg;
export declare type HttpDeleteConfig<Entity = any> = HttpConfig<Entity> & StoreWrite & Msg;
export {};
