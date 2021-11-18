import { __extends, __rest, __values, __spread, __assign } from 'tslib';
import { ɵɵdefineInjectable, ɵɵgetInheritedFactory, ɵsetClassMetadata, Injectable, InjectionToken, ɵɵinject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, Inject, Optional, SkipSelf, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { logAction } from '@datorama/akita';
import { takeUntil } from 'rxjs/operators';
export { action as createAction, payload, props } from 'ts-action';
export { ofType } from 'ts-action-operators';

var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Actions.prototype.dispatch = function (value) {
        this.logAction(value);
        this.next(value);
    };
    Actions.prototype.logAction = function (value) {
        var type = value.type, props = __rest(value, ["type"]);
        var hasPayload = Object.getOwnPropertyNames(props).length > 0;
        logAction(type, null, hasPayload ? props : null);
    };
    Actions.ɵfac = function Actions_Factory(t) { return ɵActions_BaseFactory(t || Actions); };
    Actions.ɵprov = ɵɵdefineInjectable({ token: Actions, factory: Actions.ɵfac, providedIn: 'root' });
    return Actions;
}(Subject));
var ɵActions_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(Actions);
/*@__PURE__*/ (function () { ɵsetClassMetadata(Actions, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var _ROOT_EFFECTS = new InjectionToken('@datorama/akita Internal Root Effects');
var ROOT_EFFECT_INSTANCES = new InjectionToken('@datorama/akita Root Effects');
var _FEATURE_EFFECTS = new InjectionToken('@datorama/akita Internal Feature Effects');
var FEATURE_EFFECT_INSTANCES = new InjectionToken('@datorama/akita Feature Effects');

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
    ModuleManager.ɵfac = function ModuleManager_Factory(t) { return new (t || ModuleManager)(ɵɵinject(Actions)); };
    ModuleManager.ɵprov = ɵɵdefineInjectable({ token: ModuleManager, factory: ModuleManager.ɵfac, providedIn: 'root' });
    return ModuleManager;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModuleManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: Actions }]; }, null); })();

var EffectsRootModule = /** @class */ (function () {
    function EffectsRootModule(moduleManager, actions, rootEffects, parentModule) {
        var _this = this;
        this.moduleManager = moduleManager;
        this.actions = actions;
        this.parentModule = parentModule;
        this.rootGuard();
        rootEffects.forEach(function (effect) { return _this.moduleManager.subscribeToEffects(effect); });
    }
    EffectsRootModule.prototype.rootGuard = function () {
        if (this.parentModule) {
            throw new Error('EffectsRootModule is already loaded. Import it in the AppModule only');
        }
    };
    EffectsRootModule.ɵmod = ɵɵdefineNgModule({ type: EffectsRootModule });
    EffectsRootModule.ɵinj = ɵɵdefineInjector({ factory: function EffectsRootModule_Factory(t) { return new (t || EffectsRootModule)(ɵɵinject(ModuleManager), ɵɵinject(Actions), ɵɵinject(ROOT_EFFECT_INSTANCES), ɵɵinject(EffectsRootModule, 12)); } });
    return EffectsRootModule;
}());
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
    EffectsFeatureModule.ɵmod = ɵɵdefineNgModule({ type: EffectsFeatureModule });
    EffectsFeatureModule.ɵinj = ɵɵdefineInjector({ factory: function EffectsFeatureModule_Factory(t) { return new (t || EffectsFeatureModule)(ɵɵinject(ModuleManager), ɵɵinject(FEATURE_EFFECT_INSTANCES)); } });
    return EffectsFeatureModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EffectsFeatureModule, [{
        type: NgModule
    }], function () { return [{ type: ModuleManager }, { type: undefined, decorators: [{
                type: Inject,
                args: [FEATURE_EFFECT_INSTANCES]
            }] }]; }, null); })();

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
    AkitaNgEffectsModule.ɵmod = ɵɵdefineNgModule({ type: AkitaNgEffectsModule });
    AkitaNgEffectsModule.ɵinj = ɵɵdefineInjector({ factory: function AkitaNgEffectsModule_Factory(t) { return new (t || AkitaNgEffectsModule)(); } });
    return AkitaNgEffectsModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AkitaNgEffectsModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
function createEffectInstances(injector, effectGroups, moduleManager) {
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
    options = __assign({ dispatch: false }, options);
    return function (classProto, propKey) {
        var returnValue;
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
    var effect = actions$();
    options = __assign({ dispatch: false }, options);
    setMetadata(effect, null, options);
    return effect;
}

/**
 * Generated bundle index. Do not edit.
 */

export { Actions, AkitaNgEffectsModule, Effect, EffectsRootModule, createEffect };
//# sourceMappingURL=datorama-akita-ng-effects.js.map
