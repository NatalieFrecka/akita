import { __rest } from 'tslib';
import { ɵɵdefineInjectable, ɵɵgetInheritedFactory, ɵsetClassMetadata, Injectable, InjectionToken, ɵɵinject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, Inject, Optional, SkipSelf, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { logAction } from '@datorama/akita';
import { takeUntil } from 'rxjs/operators';
export { action as createAction, payload, props } from 'ts-action';
export { ofType } from 'ts-action-operators';

class Actions extends Subject {
    dispatch(value) {
        this.logAction(value);
        this.next(value);
    }
    logAction(value) {
        const { type } = value, props = __rest(value, ["type"]);
        const hasPayload = Object.getOwnPropertyNames(props).length > 0;
        logAction(type, null, hasPayload ? props : null);
    }
}
Actions.ɵfac = function Actions_Factory(t) { return ɵActions_BaseFactory(t || Actions); };
Actions.ɵprov = ɵɵdefineInjectable({ token: Actions, factory: Actions.ɵfac, providedIn: 'root' });
const ɵActions_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(Actions);
/*@__PURE__*/ (function () { ɵsetClassMetadata(Actions, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const _ROOT_EFFECTS = new InjectionToken('@datorama/akita Internal Root Effects');
const ROOT_EFFECT_INSTANCES = new InjectionToken('@datorama/akita Root Effects');
const _FEATURE_EFFECTS = new InjectionToken('@datorama/akita Internal Feature Effects');
const FEATURE_EFFECT_INSTANCES = new InjectionToken('@datorama/akita Feature Effects');

class ModuleManager {
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
ModuleManager.ɵfac = function ModuleManager_Factory(t) { return new (t || ModuleManager)(ɵɵinject(Actions)); };
ModuleManager.ɵprov = ɵɵdefineInjectable({ token: ModuleManager, factory: ModuleManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModuleManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: Actions }]; }, null); })();

class EffectsRootModule {
    constructor(moduleManager, actions, rootEffects, parentModule) {
        this.moduleManager = moduleManager;
        this.actions = actions;
        this.parentModule = parentModule;
        this.rootGuard();
        rootEffects.forEach((effect) => this.moduleManager.subscribeToEffects(effect));
    }
    rootGuard() {
        if (this.parentModule) {
            throw new Error('EffectsRootModule is already loaded. Import it in the AppModule only');
        }
    }
}
EffectsRootModule.ɵmod = ɵɵdefineNgModule({ type: EffectsRootModule });
EffectsRootModule.ɵinj = ɵɵdefineInjector({ factory: function EffectsRootModule_Factory(t) { return new (t || EffectsRootModule)(ɵɵinject(ModuleManager), ɵɵinject(Actions), ɵɵinject(ROOT_EFFECT_INSTANCES), ɵɵinject(EffectsRootModule, 12)); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EffectsRootModule, [{
        type: NgModule
    }], function () { return [{ type: ModuleManager }, { type: Actions }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROOT_EFFECT_INSTANCES]
            }] }, { type: EffectsRootModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

class EffectsFeatureModule {
    constructor(moduleManager, featureEffects) {
        this.moduleManager = moduleManager;
        featureEffects.forEach((group) => group.forEach((effect) => {
            this.moduleManager.subscribeToEffects(effect);
        }));
    }
}
EffectsFeatureModule.ɵmod = ɵɵdefineNgModule({ type: EffectsFeatureModule });
EffectsFeatureModule.ɵinj = ɵɵdefineInjector({ factory: function EffectsFeatureModule_Factory(t) { return new (t || EffectsFeatureModule)(ɵɵinject(ModuleManager), ɵɵinject(FEATURE_EFFECT_INSTANCES)); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EffectsFeatureModule, [{
        type: NgModule
    }], function () { return [{ type: ModuleManager }, { type: undefined, decorators: [{
                type: Inject,
                args: [FEATURE_EFFECT_INSTANCES]
            }] }]; }, null); })();

class AkitaNgEffectsModule {
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
AkitaNgEffectsModule.ɵmod = ɵɵdefineNgModule({ type: AkitaNgEffectsModule });
AkitaNgEffectsModule.ɵinj = ɵɵdefineInjector({ factory: function AkitaNgEffectsModule_Factory(t) { return new (t || AkitaNgEffectsModule)(); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AkitaNgEffectsModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
function createEffectInstances(injector, effectGroups, moduleManager) {
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

function setMetadata(effect, propertyName, effectOptions) {
    Object.defineProperty(effect, 'isEffect', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: true,
    });
    Object.defineProperty(effect, 'name', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: propertyName,
    });
    Object.defineProperty(effect, 'dispatchAction', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: effectOptions.dispatch,
    });
}

function Effect(options) {
    options = Object.assign({ dispatch: false }, options);
    return function (classProto, propKey) {
        let returnValue;
        Object.defineProperty(classProto, propKey, {
            get: function () {
                return returnValue;
            },
            set: function (value) {
                setMetadata(value, propKey, options);
                returnValue = value;
            },
            enumerable: true,
        });
    };
}

function createEffect(actions$, options) {
    const effect = actions$();
    options = Object.assign({ dispatch: false }, options);
    setMetadata(effect, null, options);
    return effect;
}

/**
 * Generated bundle index. Do not edit.
 */

export { Actions, AkitaNgEffectsModule, Effect, EffectsRootModule, createEffect };
//# sourceMappingURL=datorama-akita-ng-effects.js.map
