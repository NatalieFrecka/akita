import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Actions } from './actions';
import * as i0 from "@angular/core";
import * as i1 from "./actions";
export class ModuleManager {
    constructor(actions$) {
        this.actions$ = actions$;
        this.effectInstanceSources = new WeakSet();
        this.destroyEffects$ = new Subject();
    }
    subscribeToEffects(effectInstance) {
        for (let key in effectInstance) {
            const property = effectInstance[key];
            if (property.isEffect === true) {
                property.pipe(takeUntil(this.destroyEffects$)).subscribe((actionOrSkip) => {
                    this.dispatchAction(property, actionOrSkip);
                });
            }
        }
    }
    has(effect) {
        return this.effectInstanceSources.has(effect);
    }
    add(effect) {
        this.effectInstanceSources.add(effect);
    }
    dispatchAction(property, actionOrSkip) {
        if (property.dispatchAction && this.checkAction(actionOrSkip)) {
            this.actions$.dispatch(actionOrSkip);
        }
    }
    checkAction(action) {
        if (action.type) {
            return true;
        }
        throw new TypeError('Make sure to provide a valid action type or set the option {dispatch: false}');
    }
    ngOnDestroy() {
        // modules aren't supposed to be destroyed; might not be needed
        this.destroyEffects$.next();
        this.effectInstanceSources = new WeakSet();
    }
}
ModuleManager.ɵfac = function ModuleManager_Factory(t) { return new (t || ModuleManager)(i0.ɵɵinject(i1.Actions)); };
ModuleManager.ɵprov = i0.ɵɵdefineInjectable({ token: ModuleManager, factory: ModuleManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModuleManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.Actions }]; }, null); })();
//# sourceMappingURL=module-manager.service.js.map