import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
export var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
export var ofType = function (type) { return filter(function (action) { return action.type === type; }); };
export var filterMethod = function (method) {
    return filter(function (action) { return action.method === method; });
};
export var filterStore = function (name) { return filter(function (action) { return action.storeName === name; }); };
var NgEntityServiceNotifier = /** @class */ (function () {
    function NgEntityServiceNotifier() {
        this.dispatcher = new Subject();
        this.action$ = this.dispatcher.asObservable();
    }
    NgEntityServiceNotifier.prototype.dispatch = function (event) {
        this.dispatcher.next(event);
    };
    NgEntityServiceNotifier.ɵfac = function NgEntityServiceNotifier_Factory(t) { return new (t || NgEntityServiceNotifier)(); };
    NgEntityServiceNotifier.ɵprov = i0.ɵɵdefineInjectable({ token: NgEntityServiceNotifier, factory: NgEntityServiceNotifier.ɵfac, providedIn: 'root' });
    return NgEntityServiceNotifier;
}());
export { NgEntityServiceNotifier };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgEntityServiceNotifier, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=ng-entity-service-notifier.js.map