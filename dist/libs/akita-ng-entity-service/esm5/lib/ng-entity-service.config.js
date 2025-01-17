import { __read, __spread } from "tslib";
import { InjectionToken } from '@angular/core';
import { isObject } from '@datorama/akita';
import { HttpMethod } from './ng-entity-service-notifier';
export var NG_ENTITY_SERVICE_CONFIG = new InjectionToken('NgEntityServiceGlobalConfig');
export var defaultConfig = {
    httpMethods: {
        GET: HttpMethod.GET,
        POST: HttpMethod.POST,
        PATCH: HttpMethod.PATCH,
        PUT: HttpMethod.PUT,
        DELETE: HttpMethod.DELETE,
    },
};
export function mergeDeep(target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return mergeDeep.apply(void 0, __spread([target], sources));
}
export function NgEntityServiceConfig(config) {
    if (config === void 0) { config = {}; }
    return function (constructor) {
        if (config.baseUrl) {
            constructor['baseUrl'] = config.baseUrl;
        }
        if (config.resourceName) {
            constructor['resourceName'] = config.resourceName;
        }
    };
}
//# sourceMappingURL=ng-entity-service.config.js.map