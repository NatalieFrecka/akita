import { __assign } from "tslib";
import { setMetadata } from './effect.utils';
export function createEffect(actions$, options) {
    var effect = actions$();
    options = __assign({ dispatch: false }, options);
    setMetadata(effect, null, options);
    return effect;
}
//# sourceMappingURL=create-effect.util.js.map