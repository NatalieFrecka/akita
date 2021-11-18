import { setMetadata } from './effect.utils';
export function createEffect(actions$, options) {
    const effect = actions$();
    options = Object.assign({ dispatch: false }, options);
    setMetadata(effect, null, options);
    return effect;
}
//# sourceMappingURL=create-effect.util.js.map