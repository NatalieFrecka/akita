import { Inject, NgModule } from '@angular/core';
import { FEATURE_EFFECT_INSTANCES } from './tokens';
import { ModuleManager } from './module-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "./module-manager.service";
export class EffectsFeatureModule {
    constructor(moduleManager, featureEffects) {
        this.moduleManager = moduleManager;
        featureEffects.forEach((group) => group.forEach((effect) => {
            this.moduleManager.subscribeToEffects(effect);
        }));
    }
}
EffectsFeatureModule.ɵmod = i0.ɵɵdefineNgModule({ type: EffectsFeatureModule });
EffectsFeatureModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EffectsFeatureModule_Factory(t) { return new (t || EffectsFeatureModule)(i0.ɵɵinject(i1.ModuleManager), i0.ɵɵinject(FEATURE_EFFECT_INSTANCES)); } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EffectsFeatureModule, [{
        type: NgModule
    }], function () { return [{ type: i1.ModuleManager }, { type: undefined, decorators: [{
                type: Inject,
                args: [FEATURE_EFFECT_INSTANCES]
            }] }]; }, null); })();
//# sourceMappingURL=effect-feature.module.js.map