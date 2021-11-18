import { InjectionToken } from '@angular/core';
import { HttpMethod } from './ng-entity-service-notifier';
import { NgEntityServiceParams } from './types';
export interface NgEntityServiceGlobalConfig {
    baseUrl?: string;
    httpMethods?: Partial<{
        GET: HttpMethod;
        POST: HttpMethod;
        PATCH: HttpMethod;
        PUT: HttpMethod;
        DELETE: HttpMethod;
    }>;
}
export declare const NG_ENTITY_SERVICE_CONFIG: InjectionToken<NgEntityServiceGlobalConfig>;
export declare const defaultConfig: NgEntityServiceGlobalConfig;
export declare function mergeDeep(target: any, ...sources: any[]): any;
export declare function NgEntityServiceConfig(config?: NgEntityServiceParams): (constructor: any) => void;
