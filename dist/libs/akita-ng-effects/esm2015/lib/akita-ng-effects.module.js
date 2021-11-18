import { Injector, NgModule } from '@angular/core';
import { _FEATURE_EFFECTS, _ROOT_EFFECTS, FEATURE_EFFECT_INSTANCES, ROOT_EFFECT_INSTANCES } from './tokens';
import { EffectsRootModule } from './effect-root.module';
import { Actions } from './actions';
import { EffectsFeatureModule } from './effect-feature.module';
import { ModuleManager } from './module-manager.service';
import * as i0 from "@angular/core";
export class AkitaNgEffectsModule {
    static forRoot(rootEffects = []) {
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
    }
    static forFeature(featureEffects = []) {
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
    }
}
AkitaNgEffectsModule.ɵmod = i0.ɵɵdefineNgModule({ type: AkitaNgEffectsModule });
AkitaNgEffectsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AkitaNgEffectsModule_Factory(t) { return new (t || AkitaNgEffectsModule)(); } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AkitaNgEffectsModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
export function createEffectInstances(injector, effectGroups, moduleManager) {
    const mergedEffects = [];
    for (const effectGroup of effectGroups) {
        mergedEffects.push(...effectGroup);
    }
    // todo we shouldn't use a map to avoid registering the effects twice;
    // fix the underlying issue for feature is called twice
    const effectInstances = mergedEffects.reduce((acc, effect) => {
        if (!moduleManager.has(effect)) {
            moduleManager.add(effect);
            acc.push(injector.get(effect));
        }
        return acc;
    }, []);
    return effectInstances;
}
//# sourceMappingURL=akita-ng-effects.module.js.map