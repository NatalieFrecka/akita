import { Inject, NgModule } from '@angular/core';
import { FEATURE_EFFECT_INSTANCES } from './tokens';
import { ModuleManager } from './module-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "./module-manager.service";
var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(moduleManager, featureEffects) {
        var _this = this;
        this.moduleManager = moduleManager;
        featureEffects.forEach(function (group) {
            return group.forEach(function (effect) {
                _this.moduleManager.subscribeToEffects(effect);
            });
        });
    }
    EffectsFeatureModule.ɵmod = i0.ɵɵdefineNgModule({ type: EffectsFeatureModule });
    EffectsFeatureModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EffectsFeatureModule_Factory(t) { return new (t || EffectsFeatureModule)(i0.ɵɵinject(i1.ModuleManager), i0.ɵɵinject(FEATURE_EFFECT_INSTANCES)); } });
    return EffectsFeatureModule;
}());
export { EffectsFeatureModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EffectsFeatureModule, [{
        type: NgModule
    }], function () { return [{ type: i1.ModuleManager }, { type: undefined, decorators: [{
                type: Inject,
                args: [FEATURE_EFFECT_INSTANCES]
            }] }]; }, null); })();
//# sourceMappingURL=effect-feature.module.js.map