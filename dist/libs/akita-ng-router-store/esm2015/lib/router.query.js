import { Injectable } from '@angular/core';
import { filterNilValue, Query } from '@datorama/akita';
import { combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { RouterStore } from './router.store';
import * as i0 from "@angular/core";
import * as i1 from "./router.store";
function slice(section) {
    return (source) => {
        return source.pipe(map((data) => data.state)).pipe(filterNilValue(), map((state) => state[section]));
    };
}
export class RouterQuery extends Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.__navigationCancel = new Subject();
        this.__navigationError = new Subject();
    }
    selectParams(names) {
        if (names === undefined) {
            return this.select().pipe(slice('params'), distinctUntilChanged());
        }
        const select = (p) => this.select().pipe(slice('params'), pluck(p), distinctUntilChanged());
        if (Array.isArray(names)) {
            const sources = names.map(select);
            return combineLatest(sources);
        }
        return select(names).pipe(distinctUntilChanged());
    }
    getParams(name) {
        if (this.getValue().state) {
            const params = this.getValue().state.params;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    }
    selectQueryParams(names) {
        if (names === undefined) {
            return this.select().pipe(slice('queryParams'), distinctUntilChanged());
        }
        const select = (p) => this.select().pipe(slice('queryParams'), pluck(p), distinctUntilChanged());
        if (Array.isArray(names)) {
            const sources = names.map(select);
            return combineLatest(sources);
        }
        return select(names);
    }
    getQueryParams(name) {
        if (this.getValue().state) {
            const params = this.getValue().state.queryParams;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    }
    selectFragment() {
        return this.select().pipe(slice('fragment'), distinctUntilChanged());
    }
    getFragment() {
        if (this.getValue().state) {
            return this.getValue().state.fragment;
        }
        return null;
    }
    selectData(name) {
        if (name === undefined) {
            return this.select().pipe(slice('data'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
    }
    getData(name) {
        if (this.getValue().state) {
            const data = this.getValue().state.data;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    }
    selectNavigationExtras(name) {
        if (name === undefined) {
            return this.select().pipe(slice('navigationExtras'), distinctUntilChanged());
        }
        return this.select().pipe(slice('data'), pluck(name), distinctUntilChanged());
    }
    getNavigationExtras(name) {
        if (this.getValue().state) {
            const data = this.getValue().state.navigationExtras;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    }
    selectNavigationCancel() {
        return this.__navigationCancel.asObservable();
    }
    selectNavigationError() {
        return this.__navigationError.asObservable();
    }
}
RouterQuery.ɵfac = function RouterQuery_Factory(t) { return new (t || RouterQuery)(i0.ɵɵinject(i1.RouterStore)); };
RouterQuery.ɵprov = i0.ɵɵdefineInjectable({ token: RouterQuery, factory: RouterQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RouterQuery, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RouterStore }]; }, null); })();
//# sourceMappingURL=router.query.js.map