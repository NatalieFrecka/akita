import { Injectable } from '@angular/core';
import { isFunction } from '@datorama/akita';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpMethod } from './ng-entity-service-notifier';
import * as i0 from "@angular/core";
var NgEntityServiceLoader = /** @class */ (function () {
    function NgEntityServiceLoader() {
        this.dispatcher = new ReplaySubject(1);
        this.loading$ = this.dispatcher.asObservable();
    }
    NgEntityServiceLoader.prototype.dispatch = function (event) {
        this.dispatcher.next(event);
    };
    NgEntityServiceLoader.prototype.loadersFor = function (name) {
        var _this = this;
        var filterStore = filter(function (_a) {
            var storeName = _a.storeName;
            return (name ? storeName === name : true);
        });
        var filterMethod = function (mthd) {
            return filter(function (_a) {
                var method = _a.method;
                return isFunction(mthd) ? mthd(method) : method === mthd;
            });
        };
        var actionBased = function (current) {
            return _this.loading$.pipe(filterStore, filterMethod(current), map(function (action) { return action.loading; }));
        };
        var idBased = function (id, mthd) {
            return _this.loading$.pipe(filterStore, filterMethod(mthd), filter(function (action) { return action.entityId === id; }), map(function (action) { return action.loading; }));
        };
        return {
            get$: actionBased(HttpMethod.GET),
            add$: actionBased(HttpMethod.POST),
            update$: actionBased(function (method) { return method === HttpMethod.PUT || method === HttpMethod.PATCH; }),
            delete$: actionBased(HttpMethod.DELETE),
            getEntity: function (id) { return idBased(id, HttpMethod.GET); },
            updateEntity: function (id) { return idBased(id, function (method) { return method === HttpMethod.PUT || method === HttpMethod.PATCH; }); },
            deleteEntity: function (id) { return idBased(id, HttpMethod.DELETE); },
        };
    };
    NgEntityServiceLoader.ɵfac = function NgEntityServiceLoader_Factory(t) { return new (t || NgEntityServiceLoader)(); };
    NgEntityServiceLoader.ɵprov = i0.ɵɵdefineInjectable({ token: NgEntityServiceLoader, factory: NgEntityServiceLoader.ɵfac, providedIn: 'root' });
    return NgEntityServiceLoader;
}());
export { NgEntityServiceLoader };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgEntityServiceLoader, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=ng-entity-service.loader.js.map