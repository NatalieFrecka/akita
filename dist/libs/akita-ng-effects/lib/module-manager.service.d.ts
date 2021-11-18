import { OnDestroy, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { Actions } from './actions';
import * as i0 from "@angular/core";
export declare class ModuleManager implements OnDestroy {
    private actions$;
    effectInstanceSources: WeakSet<object>;
    destroyEffects$: Subject<unknown>;
    constructor(actions$: Actions);
    subscribeToEffects(effectInstance: Type<any>): void;
    has(effect: Type<any>): boolean;
    add(effect: Type<any>): void;
    private dispatchAction;
    private checkAction;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ModuleManager, never>;
    static ɵprov: i0.ɵɵInjectableDef<ModuleManager>;
}
