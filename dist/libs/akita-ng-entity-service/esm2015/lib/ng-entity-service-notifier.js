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
export const ofType = (type) => filter((action) => action.type === type);
export const filterMethod = (method) => filter((action) => action.method === method);
export const filterStore = (name) => filter((action) => action.storeName === name);
export class NgEntityServiceNotifier {
    constructor() {
        this.dispatcher = new Subject();
        this.action$ = this.dispatcher.asObservable();
    }
    dispatch(event) {
        this.dispatcher.next(event);
    }
}
NgEntityServiceNotifier.ɵfac = function NgEntityServiceNotifier_Factory(t) { return new (t || NgEntityServiceNotifier)(); };
NgEntityServiceNotifier.ɵprov = i0.ɵɵdefineInjectable({ token: NgEntityServiceNotifier, factory: NgEntityServiceNotifier.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgEntityServiceNotifier, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=ng-entity-service-notifier.js.map