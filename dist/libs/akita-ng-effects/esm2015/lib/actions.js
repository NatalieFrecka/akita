import { __rest } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { logAction } from '@datorama/akita';
import * as i0 from "@angular/core";
export class Actions extends Subject {
    dispatch(value) {
        this.logAction(value);
        this.next(value);
    }
    logAction(value) {
        const { type } = value, props = __rest(value, ["type"]);
        const hasPayload = Object.getOwnPropertyNames(props).length > 0;
        logAction(type, null, hasPayload ? props : null);
    }
}
Actions.ɵfac = function Actions_Factory(t) { return ɵActions_BaseFactory(t || Actions); };
Actions.ɵprov = i0.ɵɵdefineInjectable({ token: Actions, factory: Actions.ɵfac, providedIn: 'root' });
const ɵActions_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(Actions);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Actions, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=actions.js.map