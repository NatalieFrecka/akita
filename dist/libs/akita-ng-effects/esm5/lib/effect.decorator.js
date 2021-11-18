import { __assign } from "tslib";
import { setMetadata } from './effect.utils';
export function Effect(options) {
    options = __assign({ dispatch: false }, options);
    return function (classProto, propKey) {
        var returnValue;
        Object.defineProperty(classProto, propKey, {
            get: function () {
                return returnValue;
            },
            set: function (value) {
                setMetadata(value, propKey, options);
                returnValue = value;
            },
            enumerable: true,
        });
    };
}
//# sourceMappingURL=effect.decorator.js.map