import { Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { ROOT_EFFECT_INSTANCES } from './tokens';
import { Actions } from './actions';
import { ModuleManager } from './module-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "./module-manager.service";
import * as i2 from "./actions";
var EffectsRootModule = /** @class */ (function () {
    function EffectsRootModule(moduleManager, actions, rootEffects, parentModule) {
        var _this = this;
        this.moduleManager = moduleManager;
        this.actions = actions;
        this.parentModule = parentModule;
        this.rootGuard();
        rootEffects.forEach(function (effect) { return _this.moduleManager.subscribeToEffects(effect); });
    }
    EffectsRootModule.prototype.rootGuard = function () {
        if (this.parentModule) {
            throw new Error('EffectsRootModule is already loaded. Import it in the AppModule only');
        }
    };
    EffectsRootModule.ɵmod = i0.ɵɵdefineNgModule({ type: EffectsRootModule });
    EffectsRootModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EffectsRootModule_Factory(t) { return new (t || EffectsRootModule)(i0.ɵɵinject(i1.ModuleManager), i0.ɵɵinject(i2.Actions), i0.ɵɵinject(ROOT_EFFECT_INSTANCES), i0.ɵɵinject(EffectsRootModule, 12)); } });
    return EffectsRootModule;
}());
export { EffectsRootModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EffectsRootModule, [{
        type: NgModule
    }], function () { return [{ type: i1.ModuleManager }, { type: i2.Actions }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROOT_EFFECT_INSTANCES]
            }] }, { type: EffectsRootModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=effect-root.module.js.map