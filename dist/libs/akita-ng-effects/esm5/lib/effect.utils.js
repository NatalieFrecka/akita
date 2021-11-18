export function setMetadata(effect, propertyName, effectOptions) {
    Object.defineProperty(effect, 'isEffect', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: true,
    });
    Object.defineProperty(effect, 'name', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: propertyName,
    });
    Object.defineProperty(effect, 'dispatchAction', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: effectOptions.dispatch,
    });
}
//# sourceMappingURL=effect.utils.js.map