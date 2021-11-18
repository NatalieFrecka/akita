import { Injectable } from '@angular/core';
import { isFunction } from '@datorama/akita';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpMethod } from './ng-entity-service-notifier';
import * as i0 from "@angular/core";
export class NgEntityServiceLoader {
    constructor() {
        this.dispatcher = new ReplaySubject(1);
        this.loading$ = this.dispatcher.asObservable();
    }
    dispatch(event) {
        this.dispatcher.next(event);
    }
    loadersFor(name) {
        const filterStore = filter(({ storeName }) => (name ? storeName === name : true));
        const filterMethod = (mthd) => filter(({ method }) => {
            return isFunction(mthd) ? mthd(method) : method === mthd;
        });
        const actionBased = (current) => this.loading$.pipe(filterStore, filterMethod(current), map((action) => action.loading));
        const idBased = (id, mthd) => this.loading$.pipe(filterStore, filterMethod(mthd), filter((action) => action.entityId === id), map((action) => action.loading));
        return {
            get$: actionBased(HttpMethod.GET),
            add$: actionBased(HttpMethod.POST),
            update$: actionBased((method) => method === HttpMethod.PUT || method === HttpMethod.PATCH),
            delete$: actionBased(HttpMethod.DELETE),
            getEntity: (id) => idBased(id, HttpMethod.GET),
            updateEntity: (id) => idBased(id, (method) => method === HttpMethod.PUT || method === HttpMethod.PATCH),
            deleteEntity: (id) => idBased(id, HttpMethod.DELETE),
        };
    }
}
NgEntityServiceLoader.ɵfac = function NgEntityServiceLoader_Factory(t) { return new (t || NgEntityServiceLoader)(); };
NgEntityServiceLoader.ɵprov = i0.ɵɵdefineInjectable({ token: NgEntityServiceLoader, factory: NgEntityServiceLoader.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgEntityServiceLoader, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=ng-entity-service.loader.js.map