import { Actions } from './actions';
import { ModuleManager } from './module-manager.service';
import * as i0 from "@angular/core";
export declare class EffectsRootModule {
    private moduleManager;
    private actions;
    private parentModule?;
    constructor(moduleManager: ModuleManager, actions: Actions, rootEffects: any[], parentModule?: EffectsRootModule);
    rootGuard(): void;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<EffectsRootModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDef<EffectsRootModule>;
}
