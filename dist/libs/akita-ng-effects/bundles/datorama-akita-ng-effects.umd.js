(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@datorama/akita'), require('rxjs/operators'), require('ts-action'), require('ts-action-operators')) :
    typeof define === 'function' && define.amd ? define('@datorama/akita-ng-effects', ['exports', '@angular/core', 'rxjs', '@datorama/akita', 'rxjs/operators', 'ts-action', 'ts-action-operators'], factory) :
    (global = global || self, factory((global.datorama = global.datorama || {}, global.datorama['akita-ng-effects'] = {}), global.ng.core, global.rxjs, global.akita, global.rxjs.operators, global.tsAction, global.tsActionOperators));
}(this, (function (exports, core, rxjs, akita, operators, tsAction, tsActionOperators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            akita.logAction(type, null, hasPayload ? props : null);
        };
        Actions.ɵfac = function Actions_Factory(t) { return ɵActions_BaseFactory(t || Actions); };
        Actions.ɵprov = core["ɵɵdefineInjectable"]({ token: Actions, factory: Actions.ɵfac, providedIn: 'root' });
        return Actions;
    }(rxjs.Subject));
    var ɵActions_BaseFactory = /*@__PURE__*/ core["ɵɵgetInheritedFactory"](Actions);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Actions, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], null, null); })();

    var _ROOT_EFFECTS = new core.InjectionToken('@datorama/akita Internal Root Effects');
    var ROOT_EFFECT_INSTANCES = new core.InjectionToken('@datorama/akita Root Effects');
    var _FEATURE_EFFECTS = new core.InjectionToken('@datorama/akita Internal Feature Effects');
    var FEATURE_EFFECT_INSTANCES = new core.InjectionToken('@datorama/akita Feature Effects');

    var ModuleManager = /** @class */ (function () {
        function ModuleManager(actions$) {
            this.actions$ = actions$;
            this.effectInstanceSources = new WeakSet();
            this.destroyEffects$ = new rxjs.Subject();
        }
        ModuleManager.prototype.subscribeToEffects = function (effectInstance) {
            var _this = this;
            var _loop_1 = function (key) {
                var property = effectInstance[key];
                if (property.isEffect === true) {
                    property.pipe(operators.takeUntil(this_1.destroyEffects$)).subscribe(function (actionOrSkip) {
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
        ModuleManager.ɵfac = function ModuleManager_Factory(t) { return new (t || ModuleManager)(core["ɵɵinject"](Actions)); };
        ModuleManager.ɵprov = core["ɵɵdefineInjectable"]({ token: ModuleManager, factory: ModuleManager.ɵfac, providedIn: 'root' });
        return ModuleManager;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ModuleManager, [{
            type: core.Injectable,
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
        EffectsRootModule.ɵmod = core["ɵɵdefineNgModule"]({ type: EffectsRootModule });
        EffectsRootModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function EffectsRootModule_Factory(t) { return new (t || EffectsRootModule)(core["ɵɵinject"](ModuleManager), core["ɵɵinject"](Actions), core["ɵɵinject"](ROOT_EFFECT_INSTANCES), core["ɵɵinject"](EffectsRootModule, 12)); } });
        return EffectsRootModule;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EffectsRootModule, [{
            type: core.NgModule
        }], function () { return [{ type: ModuleManager }, { type: Actions }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [ROOT_EFFECT_INSTANCES]
                }] }, { type: EffectsRootModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
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
        EffectsFeatureModule.ɵmod = core["ɵɵdefineNgModule"]({ type: EffectsFeatureModule });
        EffectsFeatureModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function EffectsFeatureModule_Factory(t) { return new (t || EffectsFeatureModule)(core["ɵɵinject"](ModuleManager), core["ɵɵinject"](FEATURE_EFFECT_INSTANCES)); } });
        return EffectsFeatureModule;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EffectsFeatureModule, [{
            type: core.NgModule
        }], function () { return [{ type: ModuleManager }, { type: undefined, decorators: [{
                    type: core.Inject,
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
                        deps: [core.Injector, _ROOT_EFFECTS, ModuleManager],
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
                        deps: [core.Injector, _FEATURE_EFFECTS, ModuleManager],
                    },
                ],
            };
        };
        AkitaNgEffectsModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AkitaNgEffectsModule });
        AkitaNgEffectsModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AkitaNgEffectsModule_Factory(t) { return new (t || AkitaNgEffectsModule)(); } });
        return AkitaNgEffectsModule;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AkitaNgEffectsModule, [{
            type: core.NgModule,
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

    Object.defineProperty(exports, 'createAction', {
        enumerable: true,
        get: function () {
            return tsAction.action;
        }
    });
    Object.defineProperty(exports, 'payload', {
        enumerable: true,
        get: function () {
            return tsAction.payload;
        }
    });
    Object.defineProperty(exports, 'props', {
        enumerable: true,
        get: function () {
            return tsAction.props;
        }
    });
    Object.defineProperty(exports, 'ofType', {
        enumerable: true,
        get: function () {
            return tsActionOperators.ofType;
        }
    });
    exports.Actions = Actions;
    exports.AkitaNgEffectsModule = AkitaNgEffectsModule;
    exports.Effect = Effect;
    exports.EffectsRootModule = EffectsRootModule;
    exports.createEffect = createEffect;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datorama-akita-ng-effects.umd.js.map
