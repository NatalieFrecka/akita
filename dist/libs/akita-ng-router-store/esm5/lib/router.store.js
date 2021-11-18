import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as i0 from "@angular/core";
export function createInitialRouterState() {
    return {
        state: null,
        navigationId: null
    };
}
var RouterStore = /** @class */ (function (_super) {
    __extends(RouterStore, _super);
    function RouterStore() {
        return _super.call(this, createInitialRouterState()) || this;
    }
    RouterStore.ɵfac = function RouterStore_Factory(t) { return new (t || RouterStore)(); };
    RouterStore.ɵprov = i0.ɵɵdefineInjectable({ token: RouterStore, factory: RouterStore.ɵfac, providedIn: 'root' });
    RouterStore = __decorate([
        StoreConfig({ name: 'router' }),
        __metadata("design:paramtypes", [])
    ], RouterStore);
    return RouterStore;
}(Store));
export { RouterStore };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RouterStore, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=router.store.js.map