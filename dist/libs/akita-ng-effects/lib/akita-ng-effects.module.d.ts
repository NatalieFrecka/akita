import { Injector, ModuleWithProviders, Type } from '@angular/core';
import { EffectsRootModule } from './effect-root.module';
import { EffectsFeatureModule } from './effect-feature.module';
import { ModuleManager } from './module-manager.service';
import * as i0 from "@angular/core";
export declare class AkitaNgEffectsModule {
    static forRoot(rootEffects?: Type<any>[]): ModuleWithProviders<EffectsRootModule>;
    static forFeature(featureEffects?: Type<any>[]): ModuleWithProviders<EffectsFeatureModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<AkitaNgEffectsModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDef<AkitaNgEffectsModule>;
}
export declare function createEffectInstances(injector: Injector, effectGroups: Type<any>[][], moduleManager: ModuleManager): any[];
