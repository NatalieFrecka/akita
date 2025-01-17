import { __stores__ } from './stores';
import { applyTransaction } from './transaction';
/**
 * Reset stores back to their initial state
 *
 * @example
 *
 * resetStores()
 * resetStores({
 *   exclude: ['auth']
 * })
 */
export function resetStores(options) {
    const defaults = {
        exclude: []
    };
    options = Object.assign({}, defaults, options);
    const stores = Object.keys(__stores__);
    applyTransaction(() => {
        for (const store of stores) {
            const s = __stores__[store];
            if (!options.exclude) {
                s.reset();
            }
            else {
                if (options.exclude.indexOf(s.storeName) === -1) {
                    s.reset();
                }
            }
        }
    });
}
//# sourceMappingURL=resetStores.js.map