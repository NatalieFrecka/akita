import { __extends } from "tslib";
import { StateHistoryPlugin } from './stateHistoryPlugin';
import { toBoolean } from '../../toBoolean';
import { skip } from 'rxjs/operators';
import { EntityCollectionPlugin } from '../entityCollectionPlugin';
var EntityStateHistoryPlugin = /** @class */ (function (_super) {
    __extends(EntityStateHistoryPlugin, _super);
    function EntityStateHistoryPlugin(query, params) {
        if (params === void 0) { params = {}; }
        var _this = _super.call(this, query, params.entityIds) || this;
        _this.query = query;
        _this.params = params;
        params.maxAge = toBoolean(params.maxAge) ? params.maxAge : 10;
        _this.activate();
        _this.selectIds()
            .pipe(skip(1))
            .subscribe(function (ids) { return _this.activate(ids); });
        return _this;
    }
    EntityStateHistoryPlugin.prototype.redo = function (ids) {
        this.forEachId(ids, function (e) { return e.redo(); });
    };
    EntityStateHistoryPlugin.prototype.undo = function (ids) {
        this.forEachId(ids, function (e) { return e.undo(); });
    };
    EntityStateHistoryPlugin.prototype.hasPast = function (id) {
        if (this.hasEntity(id)) {
            return this.getEntity(id).hasPast;
        }
    };
    EntityStateHistoryPlugin.prototype.hasFuture = function (id) {
        if (this.hasEntity(id)) {
            return this.getEntity(id).hasFuture;
        }
    };
    EntityStateHistoryPlugin.prototype.jumpToFuture = function (ids, index) {
        this.forEachId(ids, function (e) { return e.jumpToFuture(index); });
    };
    EntityStateHistoryPlugin.prototype.jumpToPast = function (ids, index) {
        this.forEachId(ids, function (e) { return e.jumpToPast(index); });
    };
    EntityStateHistoryPlugin.prototype.clear = function (ids, customUpdateFn) {
        this.forEachId(ids, function (e) { return e.clear(customUpdateFn); });
    };
    EntityStateHistoryPlugin.prototype.destroy = function (ids, clearHistory) {
        if (clearHistory === void 0) { clearHistory = false; }
        this.forEachId(ids, function (e) { return e.destroy(clearHistory); });
    };
    EntityStateHistoryPlugin.prototype.ignoreNext = function (ids) {
        this.forEachId(ids, function (e) { return e.ignoreNext(); });
    };
    EntityStateHistoryPlugin.prototype.instantiatePlugin = function (id) {
        return new StateHistoryPlugin(this.query, this.params, id);
    };
    return EntityStateHistoryPlugin;
}(EntityCollectionPlugin));
export { EntityStateHistoryPlugin };
//# sourceMappingURL=entityStateHistoryPlugin.js.map