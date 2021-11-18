import { InjectionToken, ɵɵinject, NgZone, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';

const DEVTOOLS_OPTIONS = new InjectionToken('DevtoolsOptions');
class AkitaDevtools {
    constructor(ngZone, options) {
        this.ngZone = ngZone;
        this.options = options;
        akitaDevtools(this.ngZone, this.options);
    }
}
AkitaDevtools.ɵfac = function AkitaDevtools_Factory(t) { return new (t || AkitaDevtools)(ɵɵinject(NgZone), ɵɵinject(DEVTOOLS_OPTIONS)); };
AkitaDevtools.ɵprov = ɵɵdefineInjectable({ token: AkitaDevtools, factory: AkitaDevtools.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AkitaDevtools, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DEVTOOLS_OPTIONS]
            }] }]; }, null); })();
// auto initialize the devtools
function d() { }
function init(akitaDevtools) {
    return d;
}
class AkitaNgDevtools {
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
AkitaNgDevtools.ɵmod = ɵɵdefineNgModule({ type: AkitaNgDevtools });
AkitaNgDevtools.ɵinj = ɵɵdefineInjector({ factory: function AkitaNgDevtools_Factory(t) { return new (t || AkitaNgDevtools)(); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AkitaNgDevtools, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AkitaDevtools, AkitaNgDevtools, DEVTOOLS_OPTIONS, d, init };
//# sourceMappingURL=datorama-akita-ngdevtools.js.map
