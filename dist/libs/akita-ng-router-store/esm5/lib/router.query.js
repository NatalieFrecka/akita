import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { filterNilValue, Query } from '@datorama/akita';
import { combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { RouterStore } from './router.store';
import * as i0 from "@angular/core";
import * as i1 from "./router.store";
function slice(section) {
    return function (source) {
        return source.pipe(map(function (data) { return data.state; })).pipe(filterNilValue(), map(function (state) { return state[section]; }));
    };
}
var RouterQuery = /** @class */ (function (_super) {
    __extends(RouterQuery, _super);
    function RouterQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.__navigationCancel = new Subject();
        _this.__navigationError = new Subject();
        return _this;
    }
    RouterQuery.prototype.selectParams = function (names) {
        var _this = this;
        if (names === undefined) {
            return this.select().pipe(slice('params'), distinctUntilChanged());
        }
        var select = function (p) { return _this.select().pipe(slice('params'), pluck(p), distinctUntilChanged()); };
        if (Array.isArray(names)) {
            var sources = names.map(select);
            return combineLatest(sources);
        }
        return select(names).pipe(distinctUntilChanged());
    };
    RouterQuery.prototype.getParams = function (name) {
        if (this.getValue().state) {
            var params = this.getValue().state.params;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    };
    RouterQuery.prototype.selectQueryParams = function (names) {
        var _this = this;
        if (names === undefined) {
            return this.select().pipe(slice('queryParams'), distinctUntilChanged());
        }
        var select = function (p) { return _this.select().pipe(slice('queryParams'), pluck(p), distinctUntilChanged()); };
        if (Array.isArray(names)) {
            var sources = names.map(select);
            return combineLatest(sources);
        }
        return select(names);
    };
    RouterQuery.prototype.getQueryParams = function (name) {
        if (this.getValue().state) {
            var params = this.getValue().state.queryParams;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    };
    RouterQuery.prototype.selectFragment = function () {
        return this.select().pipe(slice('fragment'), distinctUntilChanged());
    };
    RouterQuery.prototype.getFragment = function () {
        if (this.getValue().state) {
            return this.getValue().state.fragment;
        }
        return null;
    };
    RouterQuery.prototype.selectData = function (name) {
        if (name === undefined) {
            return this.select().pipe(slice('data'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
    };
    RouterQuery.prototype.getData = function (name) {
        if (this.getValue().state) {
            var data = this.getValue().state.data;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    };
    RouterQuery.prototype.selectNavigationExtras = function (name) {
        if (name === undefined) {
            return this.select().pipe(slice('navigationExtras'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
    };
    RouterQuery.prototype.getNavigationExtras = function (name) {
        if (this.getValue().state) {
            var data = this.getValue().state.navigationExtras;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    };
    RouterQuery.prototype.selectNavigationCancel = function () {
        return this.__navigationCancel.asObservable();
    };
    RouterQuery.prototype.selectNavigationError = function () {
        return this.__navigationError.asObservable();
    };
    RouterQuery.ɵfac = function RouterQuery_Factory(t) { return new (t || RouterQuery)(i0.ɵɵinject(i1.RouterStore)); };
    RouterQuery.ɵprov = i0.ɵɵdefineInjectable({ token: RouterQuery, factory: RouterQuery.ɵfac, providedIn: 'root' });
    return RouterQuery;
}(Query));
export { RouterQuery };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RouterQuery, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RouterStore }]; }, null); })();
//# sourceMappingURL=router.query.js.map