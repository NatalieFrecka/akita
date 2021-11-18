import { NgModule } from '@angular/core';
import { RouterService } from './router.service';
import * as i0 from "@angular/core";
import * as i1 from "./router.service";
var AkitaNgRouterStoreModule = /** @class */ (function () {
    function AkitaNgRouterStoreModule(routerService) {
        this.routerService = routerService;
        this.routerService.init();
    }
    AkitaNgRouterStoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: AkitaNgRouterStoreModule });
    AkitaNgRouterStoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AkitaNgRouterStoreModule_Factory(t) { return new (t || AkitaNgRouterStoreModule)(i0.ɵɵinject(i1.RouterService)); } });
    return AkitaNgRouterStoreModule;
}());
export { AkitaNgRouterStoreModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AkitaNgRouterStoreModule, [{
        type: NgModule
    }], function () { return [{ type: i1.RouterService }]; }, null); })();
//# sourceMappingURL=router.module.js.map