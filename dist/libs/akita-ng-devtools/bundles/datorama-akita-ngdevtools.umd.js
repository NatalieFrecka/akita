(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@datorama/akita')) :
    typeof define === 'function' && define.amd ? define('@datorama/akita-ngdevtools', ['exports', '@angular/core', '@datorama/akita'], factory) :
    (global = global || self, factory((global.datorama = global.datorama || {}, global.datorama['akita-ngdevtools'] = {}), global.ng.core, global.akita));
}(this, (function (exports, core, akita) { 'use strict';

    var DEVTOOLS_OPTIONS = new core.InjectionToken('DevtoolsOptions');
    var AkitaDevtools = /** @class */ (function () {
        function AkitaDevtools(ngZone, options) {
            this.ngZone = ngZone;
            this.options = options;
            akita.akitaDevtools(this.ngZone, this.options);
        }
        AkitaDevtools.ɵfac = function AkitaDevtools_Factory(t) { return new (t || AkitaDevtools)(core["ɵɵinject"](core.NgZone), core["ɵɵinject"](DEVTOOLS_OPTIONS)); };
        AkitaDevtools.ɵprov = core["ɵɵdefineInjectable"]({ token: AkitaDevtools, factory: AkitaDevtools.ɵfac, providedIn: 'root' });
        return AkitaDevtools;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AkitaDevtools, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.NgZone }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [DEVTOOLS_OPTIONS]
                }] }]; }, null); })();
    // auto initialize the devtools
    function d() { }
    function init(akitaDevtools) {
        return d;
    }
    var AkitaNgDevtools = /** @class */ (function () {
        function AkitaNgDevtools() {
        }
        AkitaNgDevtools.forRoot = function (options) {
            return {
                ngModule: AkitaNgDevtools,
                providers: [
                    {
                        provide: DEVTOOLS_OPTIONS,
                        useValue: options
                    },
                    {
                        provide: core.APP_INITIALIZER,
                        useFactory: init,
                        deps: [AkitaDevtools],
                        multi: true
                    }
                ]
            };
        };
        AkitaNgDevtools.ɵmod = core["ɵɵdefineNgModule"]({ type: AkitaNgDevtools });
        AkitaNgDevtools.ɵinj = core["ɵɵdefineInjector"]({ factory: function AkitaNgDevtools_Factory(t) { return new (t || AkitaNgDevtools)(); } });
        return AkitaNgDevtools;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AkitaNgDevtools, [{
            type: core.NgModule,
            args: [{}]
        }], null, null); })();

    exports.AkitaDevtools = AkitaDevtools;
    exports.AkitaNgDevtools = AkitaNgDevtools;
    exports.DEVTOOLS_OPTIONS = DEVTOOLS_OPTIONS;
    exports.d = d;
    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datorama-akita-ngdevtools.umd.js.map
