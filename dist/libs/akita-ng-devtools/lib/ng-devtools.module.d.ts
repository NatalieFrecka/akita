import { ModuleWithProviders, NgZone, InjectionToken } from '@angular/core';
import { DevtoolsOptions } from '@datorama/akita';
import * as i0 from "@angular/core";
export declare const DEVTOOLS_OPTIONS: InjectionToken<DevtoolsOptions>;
export declare class AkitaDevtools {
    private ngZone;
    private options;
    constructor(ngZone: NgZone, options: DevtoolsOptions);
    static ɵfac: i0.ɵɵFactoryDef<AkitaDevtools, never>;
    static ɵprov: i0.ɵɵInjectableDef<AkitaDevtools>;
}
export declare function d(): void;
export declare function init(akitaDevtools: AkitaDevtools): typeof d;
export declare class AkitaNgDevtools {
    static forRoot(options?: Partial<DevtoolsOptions>): ModuleWithProviders<AkitaNgDevtools>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<AkitaNgDevtools, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDef<AkitaNgDevtools>;
}
