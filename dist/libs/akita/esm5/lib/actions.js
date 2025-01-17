export var currentAction = {
    type: null,
    entityIds: null,
    skip: false,
    payload: null
};
var customActionActive = false;
export function resetCustomAction() {
    customActionActive = false;
}
// public API for custom actions. Custom action always wins
export function logAction(type, entityIds, payload) {
    setAction(type, entityIds, payload);
    customActionActive = true;
}
export function setAction(type, entityIds, payload) {
    if (customActionActive === false) {
        currentAction.type = type;
        currentAction.entityIds = entityIds;
        currentAction.payload = payload;
    }
}
export function setSkipAction(skip) {
    if (skip === void 0) { skip = true; }
    currentAction.skip = skip;
}
export function action(action, entityIds) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            logAction(action, entityIds);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
//# sourceMappingURL=actions.js.map