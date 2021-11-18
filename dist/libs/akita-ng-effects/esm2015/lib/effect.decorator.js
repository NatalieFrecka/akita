import { setMetadata } from './effect.utils';
export function Effect(options) {
    options = Object.assign({ dispatch: false }, options);
    return function (classProto, propKey) {
        let returnValue;
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