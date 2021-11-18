import { __extends, __rest } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { logAction } from '@datorama/akita';
import * as i0 from "@angular/core";
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
        logAction(type, null, hasPayload ? props : null);
    };
    Actions.ɵfac = function Actions_Factory(t) { return ɵActions_BaseFactory(t || Actions); };
    Actions.ɵprov = i0.ɵɵdefineInjectable({ token: Actions, factory: Actions.ɵfac, providedIn: 'root' });
    return Actions;
}(Subject));
export { Actions };
var ɵActions_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(Actions);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Actions, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=actions.js.map