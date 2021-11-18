export { action, currentAction, logAction, resetCustomAction, setAction, setSkipAction } from './actions';
export { getExitingActives, hasActiveState, isMultiActiveState, resolveActiveEntity } from './activeState';
export { addEntities } from './addEntities';
export { arrayAdd } from './arrayAdd';
export { arrayFind, distinctUntilArrayItemChanged, find } from './arrayFind';
export { arrayRemove } from './arrayRemove';
export { arrayToggle, byId, byKey } from './arrayToggle';
export { arrayUpdate } from './arrayUpdate';
export { arrayUpsert } from './arrayUpsert';
export { cacheable } from './cacheable';
export { coerceArray } from './coerceArray';
export { combineQueries } from './combineQueries';
export { akitaConfig, getAkitaConfig } from './config';
export { DEFAULT_ID_KEY } from './defaultIDKey';
export { akitaDevtools } from './devtools';
export * from './dispatchers';
export { entitiesToArray } from './entitiesToArray';
export { entitiesToMap } from './entitiesToMap';
export * from './entityActions';
export { EntityService } from './entityService';
export { EntityStore, EntityUIStore } from './entityStore';
export { enableAkitaProdMode, isDev, __DEV__ } from './env';
export { filterNil, filterNilValue } from './filterNil';
export { createEntityQuery, createEntityStore, createQuery, createStore } from './fp';
export { getActiveEntities } from './getActiveEntities';
export { getInitialEntitiesState } from './getInitialEntitiesState';
export { getValue } from './getValueByString';
export { guid } from './guid';
export { hasEntity } from './hasEntity';
export { isArray } from './isArray';
export { isDefined } from './isDefined';
export { isEmpty } from './isEmpty';
export { isFunction } from './isFunction';
export { isNil } from './isNil';
export { isNumber } from './isNumber';
export { isObject } from './isObject';
export { isPlainObject } from './isPlainObject';
export { isString } from './isString';
export { isUndefined } from './isUndefined';
export { persistState, selectPersistStateInit } from './persistState';
export { dirtyCheckDefaultParams, DirtyCheckPlugin, getNestedPath } from './plugins/dirtyCheck/dirtyCheckPlugin';
export { EntityDirtyCheckPlugin } from './plugins/dirtyCheck/entityDirtyCheckPlugin';
export { EntityCollectionPlugin } from './plugins/entityCollectionPlugin';
export { Paginator, PaginatorPlugin } from './plugins/paginator/paginatorPlugin';
export { PersistNgFormPlugin } from './plugins/persistForm/persistNgFormPlugin';
export { AkitaPlugin } from './plugins/plugin';
export { EntityStateHistoryPlugin } from './plugins/stateHistory/entityStateHistoryPlugin';
export { StateHistoryPlugin } from './plugins/stateHistory/stateHistoryPlugin';
export { Query } from './query';
export { QueryConfig, queryConfigKey } from './queryConfig';
export { EntityUIQuery, QueryEntity } from './queryEntity';
export { removeAllEntities, removeEntities } from './removeEntities';
export { resetStores } from './resetStores';
export { isNotBrowser } from './root';
export { EntityStoreAction, getEntityStore, getEntityStoreByName, getStore, getStoreByName, runEntityStoreAction, runStoreAction, StoreAction } from './runStoreAction';
export { isEntityState, setEntities } from './setEntities';
export { setLoading } from './setLoading';
export { setLoadingAndError } from './setLoadingAndError';
export { setValue } from './setValueByString';
export { SnapshotManager, snapshotManager } from './snapshotManager';
export { compareValues, Order } from './sort';
export { sortByOptions } from './sortByOptions';
export { Store } from './store';
export { configKey, StoreConfig } from './storeConfig';
export { __stores__ } from './stores';
export { toBoolean } from './toBoolean';
export { toEntitiesIds } from './toEntitiesIds';
export { toEntitiesObject } from './toEntitiesObject';
export { trackIdChanges } from './trackIdChanges';
export { applyTransaction, commit, endBatch, isTransactionInProcess, startBatch, transaction, transactionManager, withTransaction } from './transaction';
export * from './types';
export { updateEntities } from './updateEntities';
//# sourceMappingURL=index.js.map