import { __read, __spread, __values } from "tslib";
import { Injector, NgModule } from '@angular/core';
import { _FEATURE_EFFECTS, _ROOT_EFFECTS, FEATURE_EFFECT_INSTANCES, ROOT_EFFECT_INSTANCES } from './tokens';
import { EffectsRootModule } from './effect-root.module';
import { Actions } from './actions';
import { EffectsFeatureModule } from './effect-feature.module';
import { ModuleManager } from './module-manager.service';
import * as i0 from "@angular/core";
var AkitaNgEffectsModule = /** @class */ (function () {
    function AkitaNgEffectsModule() {
    }
    AkitaNgEffectsModule.forRoot = function (rootEffects) {
        if (rootEffects === void 0) { rootEffects = []; }
        return {
            ngModule: EffectsRootModule,
            providers: [
                ModuleManager,
                Actions,
                rootEffects,
                {
                    provide: _ROOT_EFFECTS,
                    useValue: [rootEffects],
                },
                {
                    provide: ROOT_EFFECT_INSTANCES,
                    useFactory: createEffectInstances,
                    deps: [Injector, _ROOT_EFFECTS, ModuleManager],
                },
            ],
        };
    };
    AkitaNgEffectsModule.forFeature = function (featureEffects) {
        if (featureEffects === void 0) { featureEffects = []; }
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: _FEATURE_EFFECTS,
                    useValue: featureEffects,
                    multi: true,
                },
                {
                    provide: FEATURE_EFFECT_INSTANCES,
                    multi: true,
                    useFactory: createEffectInstances,
                    deps: [Injector, _FEATURE_EFFECTS, ModuleManager],
                },
            ],
        };
    };
    AkitaNgEffectsModule.ɵmod = i0.ɵɵdefineNgModule({ type: AkitaNgEffectsModule });
    AkitaNgEffectsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AkitaNgEffectsModule_Factory(t) { return new (t || AkitaNgEffectsModule)(); } });
    return AkitaNgEffectsModule;
}());
export { AkitaNgEffectsModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AkitaNgEffectsModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
export function createEffectInstances(injector, effectGroups, moduleManager) {
    var e_1, _a;
    var mergedEffects = [];
    try {
        for (var effectGroups_1 = __values(effectGroups), effectGroups_1_1 = effectGroups_1.next(); !effectGroups_1_1.done; effectGroups_1_1 = effectGroups_1.next()) {
            var effectGroup = effectGroups_1_1.value;
            mergedEffects.push.apply(mergedEffects, __spread(effectGroup));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (effectGroups_1_1 && !effectGroups_1_1.done && (_a = effectGroups_1.return)) _a.call(effectGroups_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // todo we shouldn't use a map to avoid registering the effects twice;
    // fix the underlying issue for feature is called twice
    var effectInstances = mergedEffects.reduce(function (acc, effect) {
        if (!moduleManager.has(effect)) {
            moduleManager.add(effect);
            acc.push(injector.get(effect));
        }
        return acc;
    }, []);
    return effectInstances;
}
//# sourceMappingURL=akita-ng-effects.module.js.map