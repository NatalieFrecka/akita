import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Actions } from './actions';
import * as i0 from "@angular/core";
import * as i1 from "./actions";
var ModuleManager = /** @class */ (function () {
    function ModuleManager(actions$) {
        this.actions$ = actions$;
        this.effectInstanceSources = new WeakSet();
        this.destroyEffects$ = new Subject();
    }
    ModuleManager.prototype.subscribeToEffects = function (effectInstance) {
        var _this = this;
        var _loop_1 = function (key) {
            var property = effectInstance[key];
            if (property.isEffect === true) {
                property.pipe(takeUntil(this_1.destroyEffects$)).subscribe(function (actionOrSkip) {
                    _this.dispatchAction(property, actionOrSkip);
                });
            }
        };
        var this_1 = this;
        for (var key in effectInstance) {
            _loop_1(key);
        }
    };
    ModuleManager.prototype.has = function (effect) {
        return this.effectInstanceSources.has(effect);
    };
    ModuleManager.prototype.add = function (effect) {
        this.effectInstanceSources.add(effect);
    };
    ModuleManager.prototype.dispatchAction = function (property, actionOrSkip) {
        if (property.dispatchAction && this.checkAction(actionOrSkip)) {
            this.actions$.dispatch(actionOrSkip);
        }
    };
    ModuleManager.prototype.checkAction = function (action) {
        if (action.type) {
            return true;
        }
        throw new TypeError('Make sure to provide a valid action type or set the option {dispatch: false}');
    };
    ModuleManager.prototype.ngOnDestroy = function () {
        // modules aren't supposed to be destroyed; might not be needed
        this.destroyEffects$.next();
        this.effectInstanceSources = new WeakSet();
    };
    ModuleManager.ɵfac = function ModuleManager_Factory(t) { return new (t || ModuleManager)(i0.ɵɵinject(i1.Actions)); };
    ModuleManager.ɵprov = i0.ɵɵdefineInjectable({ token: ModuleManager, factory: ModuleManager.ɵfac, providedIn: 'root' });
    return ModuleManager;
}());
export { ModuleManager };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModuleManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.Actions }]; }, null); })();
//# sourceMappingURL=module-manager.service.js.map