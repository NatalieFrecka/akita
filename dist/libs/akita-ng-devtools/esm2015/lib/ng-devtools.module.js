import { APP_INITIALIZER, NgModule, NgZone, InjectionToken, Inject, Injectable } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';
import * as i0 from "@angular/core";
export const DEVTOOLS_OPTIONS = new InjectionToken('DevtoolsOptions');
export class AkitaDevtools {
    constructor(ngZone, options) {
        this.ngZone = ngZone;
        this.options = options;
        akitaDevtools(this.ngZone, this.options);
    }
}
AkitaDevtools.ɵfac = function AkitaDevtools_Factory(t) { return new (t || AkitaDevtools)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(DEVTOOLS_OPTIONS)); };
AkitaDevtools.ɵprov = i0.ɵɵdefineInjectable({ token: AkitaDevtools, factory: AkitaDevtools.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AkitaDevtools, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DEVTOOLS_OPTIONS]
            }] }]; }, null); })();
// auto initialize the devtools
export function d() { }
export function init(akitaDevtools) {
    return d;
}
export class AkitaNgDevtools {
    static forRoot(options) {
        return {
            ngModule: AkitaNgDevtools,
            providers: [
                {
                    provide: DEVTOOLS_OPTIONS,
                    useValue: options
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: init,
                    deps: [AkitaDevtools],
                    multi: true
                }
            ]
        };
    }
}
AkitaNgDevtools.ɵmod = i0.ɵɵdefineNgModule({ type: AkitaNgDevtools });
AkitaNgDevtools.ɵinj = i0.ɵɵdefineInjector({ factory: function AkitaNgDevtools_Factory(t) { return new (t || AkitaNgDevtools)(); } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AkitaNgDevtools, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
//# sourceMappingURL=ng-devtools.module.js.map