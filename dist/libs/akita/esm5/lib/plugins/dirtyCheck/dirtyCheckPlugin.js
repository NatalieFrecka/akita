import { __assign, __extends } from "tslib";
import { AkitaPlugin } from '../plugin';
import { QueryEntity } from '../../queryEntity';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, map, skip } from 'rxjs/operators';
import { isUndefined } from '../../isUndefined';
import { coerceArray } from '../../coerceArray';
import { isFunction } from '../../isFunction';
import { logAction } from '../../actions';
var ɵ0 = function (head, current) { return JSON.stringify(head) !== JSON.stringify(current); };
export var dirtyCheckDefaultParams = {
    comparator: ɵ0,
};
export function getNestedPath(nestedObj, path) {
    var pathAsArray = path.split('.');
    return pathAsArray.reduce(function (obj, key) { return (obj && obj[key] !== 'undefined' ? obj[key] : undefined); }, nestedObj);
}
var DirtyCheckPlugin = /** @class */ (function (_super) {
    __extends(DirtyCheckPlugin, _super);
    function DirtyCheckPlugin(query, params, _entityId) {
        var _this = _super.call(this, query) || this;
        _this.query = query;
        _this.params = params;
        _this._entityId = _entityId;
        _this.dirty = new BehaviorSubject(false);
        _this.active = false;
        _this._reset = new Subject();
        _this.isDirty$ = _this.dirty.asObservable().pipe(distinctUntilChanged());
        _this.reset$ = _this._reset.asObservable();
        _this.params = __assign(__assign({}, dirtyCheckDefaultParams), params);
        if (_this.params.watchProperty) {
            var watchProp = coerceArray(_this.params.watchProperty);
            if (query instanceof QueryEntity && watchProp.includes('entities') && !watchProp.includes('ids')) {
                watchProp.push('ids');
            }
            _this.params.watchProperty = watchProp;
        }
        return _this;
    }
    DirtyCheckPlugin.prototype.reset = function (params) {
        if (params === void 0) { params = {}; }
        var currentValue = this.head;
        if (isFunction(params.updateFn)) {
            if (this.isEntityBased(this._entityId)) {
                currentValue = params.updateFn(this.head, this.getQuery().getEntity(this._entityId));
            }
            else {
                currentValue = params.updateFn(this.head, this.getQuery().getValue());
            }
        }
        logAction("@DirtyCheck - Revert");
        this.updateStore(currentValue, this._entityId);
        this._reset.next();
    };
    DirtyCheckPlugin.prototype.setHead = function () {
        if (!this.active) {
            this.activate();
            this.active = true;
        }
        else {
            this.head = this._getHead();
        }
        this.updateDirtiness(false);
        return this;
    };
    DirtyCheckPlugin.prototype.isDirty = function () {
        return !!this.dirty.value;
    };
    DirtyCheckPlugin.prototype.hasHead = function () {
        return !!this.getHead();
    };
    DirtyCheckPlugin.prototype.destroy = function () {
        this.head = null;
        this.subscription && this.subscription.unsubscribe();
        this._reset && this._reset.complete();
    };
    DirtyCheckPlugin.prototype.isPathDirty = function (path) {
        var head = this.getHead();
        var current = this.getQuery().getValue();
        var currentPathValue = getNestedPath(current, path);
        var headPathValue = getNestedPath(head, path);
        return this.params.comparator(currentPathValue, headPathValue);
    };
    DirtyCheckPlugin.prototype.getHead = function () {
        return this.head;
    };
    DirtyCheckPlugin.prototype.activate = function () {
        var _this = this;
        this.head = this._getHead();
        /** if we are tracking specific properties select only the relevant ones */
        var sources = this.params.watchProperty
            ? this.params.watchProperty.map(function (prop) {
                return _this.query
                    .select(function (state) { return state[prop]; })
                    .pipe(map(function (val) { return ({
                    val: val,
                    __akitaKey: prop,
                }); }));
            })
            : [this.selectSource(this._entityId)];
        this.subscription = combineLatest(sources)
            .pipe(skip(1))
            .subscribe(function (currentState) {
            if (isUndefined(_this.head))
                return;
            /** __akitaKey is used to determine if we are tracking a specific property or a store change */
            var isChange = currentState.some(function (state) {
                var head = state.__akitaKey ? _this.head[state.__akitaKey] : _this.head;
                var compareTo = state.__akitaKey ? state.val : state;
                return _this.params.comparator(head, compareTo);
            });
            _this.updateDirtiness(isChange);
        });
    };
    DirtyCheckPlugin.prototype.updateDirtiness = function (isDirty) {
        this.dirty.next(isDirty);
    };
    DirtyCheckPlugin.prototype._getHead = function () {
        var head = this.getSource(this._entityId);
        if (this.params.watchProperty) {
            head = this.getWatchedValues(head);
        }
        return head;
    };
    DirtyCheckPlugin.prototype.getWatchedValues = function (source) {
        return this.params.watchProperty.reduce(function (watched, prop) {
            watched[prop] = source[prop];
            return watched;
        }, {});
    };
    return DirtyCheckPlugin;
}(AkitaPlugin));
export { DirtyCheckPlugin };
export { ɵ0 };
//# sourceMappingURL=dirtyCheckPlugin.js.map