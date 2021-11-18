(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/1Ks":
/*!************************************************************!*\
  !*** ./libs/akita-ng-router-store/src/lib/router.store.ts ***!
  \************************************************************/
/*! exports provided: createInitialRouterState, RouterStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialRouterState", function() { return createInitialRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStore", function() { return RouterStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




function createInitialRouterState() {
    return {
        state: null,
        navigationId: null
    };
}
let RouterStore = class RouterStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"] {
    constructor() {
        super(createInitialRouterState());
    }
};
RouterStore.ɵfac = function RouterStore_Factory(t) { return new (t || RouterStore)(); };
RouterStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouterStore, factory: RouterStore.ɵfac, providedIn: 'root' });
RouterStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'router' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RouterStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/SVk":
/*!*******************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/product-page/product-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/state/products.query */ "05AR");
/* harmony import */ var _products_state_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products/state/products.service */ "GRt5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");












function ProductPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.description);
} }
let ProductPageComponent = class ProductPageComponent {
    constructor(activatedRoute, productsService, productsQuery) {
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.productsQuery = productsQuery;
        this.product$ = this.productsQuery.selectEntity(this.productId);
    }
    ngOnInit() {
        this.activatedRoute.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((params) => params.get('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((id) => !this.productsQuery.hasEntity(id)), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((id) => this.productsService.getProduct(id)))
            .subscribe();
    }
    get productId() {
        return this.activatedRoute.snapshot.params.id;
    }
    ngOnDestroy() { }
};
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_state_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"])); };
ProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["ng-component"]], decls: 2, vars: 3, consts: [["class", "padding", 4, "ngIf"], [1, "padding"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductPageComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.product$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2 });
ProductPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _products_state_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]])
], ProductPageComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                template: `
    <div *ngIf="product$ | async as product" class="padding">
      <h1>{{ product.title }}</h1>
      <h6>{{ product.description }}</h6>
    </div>
  `,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _products_state_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] }, { type: _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"] }]; }, null); })();


/***/ }),

/***/ "/V8x":
/*!*************************************************************************!*\
  !*** ./libs/akita/src/lib/plugins/dirtyCheck/entityDirtyCheckPlugin.ts ***!
  \*************************************************************************/
/*! exports provided: EntityDirtyCheckPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityDirtyCheckPlugin", function() { return EntityDirtyCheckPlugin; });
/* harmony import */ var _dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirtyCheckPlugin */ "Qu3/");
/* harmony import */ var _entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entityCollectionPlugin */ "gUUV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../coerceArray */ "6ukB");





class EntityDirtyCheckPlugin extends _entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionPlugin"] {
    constructor(query, params = {}) {
        super(query, params.entityIds);
        this.query = query;
        this.params = params;
        this._someDirty = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.someDirty$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.query.select(state => state.entities), this._someDirty.asObservable()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.checkSomeDirty()));
        this.params = Object.assign(Object.assign({}, _dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["dirtyCheckDefaultParams"]), params);
        // TODO lazy activate?
        this.activate();
        this.selectIds()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1))
            .subscribe(ids => {
            super.rebase(ids, { afterAdd: plugin => plugin.setHead() });
        });
    }
    setHead(ids) {
        if (this.params.entityIds && ids) {
            const toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
            const someAreWatched = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.params.entityIds).some(id => toArray.indexOf(id) > -1);
            if (someAreWatched === false) {
                return this;
            }
        }
        this.forEachId(ids, e => e.setHead());
        this._someDirty.next();
        return this;
    }
    hasHead(id) {
        if (this.entities.has(id)) {
            const entity = this.getEntity(id);
            return entity.hasHead();
        }
        return false;
    }
    reset(ids, params = {}) {
        this.forEachId(ids, e => e.reset(params));
    }
    isDirty(id, asObservable = true) {
        if (this.entities.has(id)) {
            const entity = this.getEntity(id);
            return asObservable ? entity.isDirty$ : entity.isDirty();
        }
        return false;
    }
    someDirty() {
        return this.checkSomeDirty();
    }
    isPathDirty(id, path) {
        if (this.entities.has(id)) {
            const head = this.getEntity(id).getHead();
            const current = this.query.getEntity(id);
            const currentPathValue = Object(_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["getNestedPath"])(current, path);
            const headPathValue = Object(_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["getNestedPath"])(head, path);
            return this.params.comparator(currentPathValue, headPathValue);
        }
        return null;
    }
    destroy(ids) {
        this.forEachId(ids, e => e.destroy());
        /** complete only when the plugin destroys */
        if (!ids) {
            this._someDirty.complete();
        }
    }
    instantiatePlugin(id) {
        return new _dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["DirtyCheckPlugin"](this.query, this.params, id);
    }
    checkSomeDirty() {
        const entitiesIds = this.resolvedIds();
        for (const id of entitiesIds) {
            if (this.getEntity(id).isDirty()) {
                return true;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "/m3n":
/*!*************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/state/products.store.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsStore", function() { return ProductsStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




let ProductsStore = class ProductsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super({ active: [] });
    }
};
ProductsStore.ɵfac = function ProductsStore_Factory(t) { return new (t || ProductsStore)(); };
ProductsStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsStore, factory: ProductsStore.ɵfac, providedIn: 'root' });
ProductsStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'products' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProductsStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./apps/angular-store-app/src/main.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/natalie.frecka/Desktop/client/akita/apps/angular-store-app/src/main.ts */"MhGE");


/***/ }),

/***/ "05AR":
/*!*************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/state/products.query.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsQuery", function() { return ProductsQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.store */ "/m3n");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @datorama/akita */ "cBsy");






let ProductsQuery = class ProductsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_3__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
    getProducts(term, sortBy) {
        return this.selectAll({
            sortBy,
            filterBy: entity => entity.title.toLowerCase().includes(term)
        });
    }
};
ProductsQuery.ɵfac = function ProductsQuery_Factory(t) { return new (t || ProductsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_products_store__WEBPACK_IMPORTED_MODULE_2__["ProductsStore"])); };
ProductsQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsQuery, factory: ProductsQuery.ɵfac, providedIn: 'root' });
ProductsQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["QueryConfig"])({ sortBy: 'price' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_products_store__WEBPACK_IMPORTED_MODULE_2__["ProductsStore"]])
], ProductsQuery);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _products_store__WEBPACK_IMPORTED_MODULE_2__["ProductsStore"] }]; }, null); })();


/***/ }),

/***/ "0Eth":
/*!***********************************************************************!*\
  !*** ./libs/akita/src/lib/plugins/persistForm/persistNgFormPlugin.ts ***!
  \***********************************************************************/
/*! exports provided: PersistNgFormPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistNgFormPlugin", function() { return PersistNgFormPlugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin */ "J5PQ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _getValueByString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../getValueByString */ "doWv");
/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toBoolean */ "KA1R");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../isString */ "oJ0C");
/* harmony import */ var _setValueByString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../setValueByString */ "QRUx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "Q8dH");







class PersistNgFormPlugin extends _plugin__WEBPACK_IMPORTED_MODULE_0__["AkitaPlugin"] {
    constructor(query, factoryFnOrPath, params = {}) {
        super(query);
        this.query = query;
        this.factoryFnOrPath = factoryFnOrPath;
        this.params = params;
        this.params = Object.assign({ debounceTime: 300, formKey: 'akitaForm', emitEvent: false, arrControlFactory: v => this.builder.control(v) }, params);
        this.isRootKeys = Object(_toBoolean__WEBPACK_IMPORTED_MODULE_3__["toBoolean"])(factoryFnOrPath) === false;
        this.isKeyBased = Object(_isString__WEBPACK_IMPORTED_MODULE_4__["isString"])(factoryFnOrPath) || this.isRootKeys;
    }
    setForm(form, builder) {
        this.form = form;
        this.builder = builder;
        this.activate();
        return this;
    }
    reset(initialState) {
        let value;
        if (initialState) {
            value = initialState;
        }
        else {
            value = this.isKeyBased ? this.initialValue : this.factoryFnOrPath();
        }
        if (this.isKeyBased) {
            Object.keys(this.initialValue).forEach(stateKey => {
                const value = this.initialValue[stateKey];
                if (Array.isArray(value) && this.builder) {
                    const formArray = this.form.controls[stateKey];
                    this.cleanArray(formArray);
                    value.forEach((v, i) => {
                        this.form.get(stateKey).insert(i, this.params.arrControlFactory(v));
                    });
                }
            });
        }
        this.form.patchValue(value, { emitEvent: this.params.emitEvent });
        const storeValue = this.isKeyBased ? Object(_setValueByString__WEBPACK_IMPORTED_MODULE_5__["setValue"])(this.getQuery().getValue(), `${this.getStore().storeName}.${this.factoryFnOrPath}`, value) : { [this.params.formKey]: value };
        this.updateStore(storeValue);
    }
    cleanArray(control) {
        while (control.length !== 0) {
            control.removeAt(0);
        }
    }
    resolveInitialValue(formValue, root) {
        if (!formValue)
            return;
        return Object.keys(formValue).reduce((acc, stateKey) => {
            const value = root[stateKey];
            if (Array.isArray(value) && this.builder) {
                const factory = this.params.arrControlFactory;
                this.cleanArray(this.form.get(stateKey));
                value.forEach((v, i) => {
                    this.form.get(stateKey).insert(i, factory(v));
                });
            }
            acc[stateKey] = root[stateKey];
            return acc;
        }, {});
    }
    activate() {
        let path;
        if (this.isKeyBased) {
            if (this.isRootKeys) {
                this.initialValue = this.resolveInitialValue(this.form.value, this.getQuery().getValue());
                this.form.patchValue(this.initialValue, { emitEvent: this.params.emitEvent });
            }
            else {
                path = `${this.getStore().storeName}.${this.factoryFnOrPath}`;
                const root = Object(_getValueByString__WEBPACK_IMPORTED_MODULE_2__["getValue"])(this.getQuery().getValue(), path);
                this.initialValue = this.resolveInitialValue(root, root);
                this.form.patchValue(this.initialValue, { emitEvent: this.params.emitEvent });
            }
        }
        else {
            if (!this.getQuery().getValue()[this.params.formKey]) {
                Object(_actions__WEBPACK_IMPORTED_MODULE_6__["logAction"])('@PersistNgFormPlugin activate');
                this.updateStore({ [this.params.formKey]: this.factoryFnOrPath() });
            }
            const value = this.getQuery().getValue()[this.params.formKey];
            this.form.patchValue(value);
        }
        this.formChanges = this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(this.params.debounceTime)).subscribe(value => {
            Object(_actions__WEBPACK_IMPORTED_MODULE_6__["logAction"])('@PersistForm - Update');
            let newState;
            if (this.isKeyBased) {
                if (this.isRootKeys) {
                    newState = state => (Object.assign(Object.assign({}, state), value));
                }
                else {
                    newState = state => Object(_setValueByString__WEBPACK_IMPORTED_MODULE_5__["setValue"])(state, path, value);
                }
            }
            else {
                newState = () => ({ [this.params.formKey]: value });
            }
            this.updateStore(newState(this.getQuery().getValue()));
        });
    }
    destroy() {
        this.formChanges && this.formChanges.unsubscribe();
        this.form = null;
        this.builder = null;
    }
}


/***/ }),

/***/ "0Fb4":
/*!************************************************!*\
  !*** ./libs/akita/src/lib/toEntitiesObject.ts ***!
  \************************************************/
/*! exports provided: toEntitiesObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEntitiesObject", function() { return toEntitiesObject; });
// @internal
function toEntitiesObject(entities, idKey, preAddEntity) {
    const acc = {
        entities: {},
        ids: []
    };
    for (const entity of entities) {
        // evaluate the middleware first to support dynamic ids
        const current = preAddEntity(entity);
        acc.entities[current[idKey]] = current;
        acc.ids.push(current[idKey]);
    }
    return acc;
}


/***/ }),

/***/ "0L1a":
/*!********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/products.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "ADtu");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "NMJT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _state_products_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/products.effects */ "K/Dx");
/* harmony import */ var _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/akita-ng-effects/src/lib/effect-feature.module */ "roSn");










const publicApi = [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]];
class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_6__["AkitaNgEffectsModule"].forFeature([_state_products_effects__WEBPACK_IMPORTED_MODULE_7__["ProductsEffects"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_8__["EffectsFeatureModule"]], exports: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_6__["AkitaNgEffectsModule"].forFeature([_state_products_effects__WEBPACK_IMPORTED_MODULE_7__["ProductsEffects"]])],
                declarations: [publicApi],
                exports: [publicApi],
            }]
    }], null, null); })();


/***/ }),

/***/ "18rb":
/*!*************************************!*\
  !*** ./libs/akita/src/lib/store.ts ***!
  \*************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "Q8dH");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "LteI");
/* harmony import */ var _deepFreeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deepFreeze */ "LKi4");
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchers */ "zqjR");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./env */ "VCUg");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors */ "CKFZ");
/* harmony import */ var _isDefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isDefined */ "Y5+g");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isPlainObject */ "Sr74");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./root */ "1Jmr");
/* harmony import */ var _storeConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storeConfig */ "gySQ");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stores */ "40zj");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transaction */ "UiMj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















/**
 *
 * Store for managing any type of data
 *
 * @example
 *
 * export interface SessionState {
 *   token: string;
 *   userDetails: UserDetails
 * }
 *
 * export function createInitialState(): SessionState {
 *  return {
 *    token: '',
 *    userDetails: null
 *  };
 * }
 *
 * @StoreConfig({ name: 'session' })
 * export class SessionStore extends Store<SessionState> {
 *   constructor() {
 *    super(createInitialState());
 *   }
 * }
 */
class Store {
    constructor(initialState, options = {}) {
        this.options = options;
        this.inTransaction = false;
        this.cache = {
            active: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false),
            ttl: null,
        };
        this.onInit(initialState);
    }
    /**
     *  Set the loading state
     *
     *  @example
     *
     *  store.setLoading(true)
     *
     */
    setLoading(loading = false) {
        if (loading !== this._value().loading) {
            Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Set Loading');
            this._setState((state) => (Object.assign(Object.assign({}, state), { loading })));
        }
    }
    /**
     *
     * Set whether the data is cached
     *
     * @example
     *
     * store.setHasCache(true)
     * store.setHasCache(false)
     * store.setHasCache(true, { restartTTL: true })
     *
     */
    setHasCache(hasCache, options = { restartTTL: false }) {
        if (hasCache !== this.cache.active.value) {
            this.cache.active.next(hasCache);
        }
        if (options.restartTTL) {
            const ttlConfig = this.getCacheTTL();
            if (ttlConfig) {
                if (this.cache.ttl !== null) {
                    clearTimeout(this.cache.ttl);
                }
                this.cache.ttl = setTimeout(() => this.setHasCache(false), ttlConfig);
            }
        }
    }
    /**
     *
     * Sometimes we need to access the store value from a store
     *
     * @example middleware
     *
     */
    getValue() {
        return this.storeValue;
    }
    /**
     *  Set the error state
     *
     *  @example
     *
     *  store.setError({text: 'unable to load data' })
     *
     */
    setError(error) {
        if (error !== this._value().error) {
            Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Set Error');
            this._setState((state) => (Object.assign(Object.assign({}, state), { error })));
        }
    }
    // @internal
    _select(project) {
        return this.store.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((snapshot) => project(snapshot.state)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    // @internal
    _value() {
        return this.storeValue;
    }
    // @internal
    _cache() {
        return this.cache.active;
    }
    // @internal
    get config() {
        return this.constructor[_storeConfig__WEBPACK_IMPORTED_MODULE_12__["configKey"]] || {};
    }
    // @internal
    get storeName() {
        return this.config.storeName || this.options.storeName || this.options.name;
    }
    // @internal
    get deepFreeze() {
        return this.config.deepFreezeFn || this.options.deepFreezeFn || _deepFreeze__WEBPACK_IMPORTED_MODULE_4__["deepFreeze"];
    }
    // @internal
    get cacheConfig() {
        return this.config.cache || this.options.cache;
    }
    get _producerFn() {
        return this.config.producerFn || this.options.producerFn || Object(_config__WEBPACK_IMPORTED_MODULE_3__["getGlobalProducerFn"])();
    }
    // @internal
    get resettable() {
        return Object(_isDefined__WEBPACK_IMPORTED_MODULE_8__["isDefined"])(this.config.resettable) ? this.config.resettable : this.options.resettable;
    }
    // @internal
    _setState(newState, _dispatchAction = true) {
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(newState)) {
            const _newState = newState(this._value());
            this.storeValue = _env__WEBPACK_IMPORTED_MODULE_6__["__DEV__"] ? this.deepFreeze(_newState) : _newState;
        }
        else {
            this.storeValue = newState;
        }
        if (!this.store) {
            this.store = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ state: this.storeValue });
            if (Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])()) {
                this.store.subscribe(({ action }) => {
                    if (action) {
                        Object(_dispatchers__WEBPACK_IMPORTED_MODULE_5__["dispatchUpdate"])(this.storeName, action);
                    }
                });
            }
            return;
        }
        if (Object(_transaction__WEBPACK_IMPORTED_MODULE_14__["isTransactionInProcess"])()) {
            this.handleTransaction();
            return;
        }
        this.dispatch(this.storeValue, _dispatchAction);
    }
    /**
     *
     * Reset the current store back to the initial value
     *
     * @example
     *
     * store.reset()
     *
     */
    reset() {
        if (this.isResettable()) {
            Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Reset');
            this._setState(() => Object.assign({}, this._initialState));
            this.setHasCache(false);
        }
        else {
            Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && console.warn(`You need to enable the reset functionality`);
        }
    }
    update(stateOrCallback) {
        Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Update');
        let newState;
        const currentState = this._value();
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(stateOrCallback)) {
            newState = Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(this._producerFn) ? this._producerFn(currentState, stateOrCallback) : stateOrCallback(currentState);
        }
        else {
            newState = stateOrCallback;
        }
        const withHook = this.akitaPreUpdate(currentState, Object.assign(Object.assign({}, currentState), newState));
        const resolved = Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_10__["isPlainObject"])(currentState) ? withHook : new currentState.constructor(withHook);
        this._setState(resolved);
    }
    updateStoreConfig(newOptions) {
        this.options = Object.assign(Object.assign({}, this.options), newOptions);
    }
    // @internal
    akitaPreUpdate(_, nextState) {
        return nextState;
    }
    /**
     *
     * @deprecated
     *
     * This method will be removed in v7
     *
     * Akita isn't coupled to Angular and should not use Angular
     * specific code
     *
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     *
     * Destroy the store
     *
     * @example
     *
     * store.destroy()
     *
     */
    destroy() {
        const hmrEnabled = _root__WEBPACK_IMPORTED_MODULE_11__["isBrowser"] ? window.hmrEnabled : false;
        if (!hmrEnabled && this === _stores__WEBPACK_IMPORTED_MODULE_13__["__stores__"][this.storeName]) {
            delete _stores__WEBPACK_IMPORTED_MODULE_13__["__stores__"][this.storeName];
            Object(_dispatchers__WEBPACK_IMPORTED_MODULE_5__["dispatchDeleted"])(this.storeName);
            this.setHasCache(false);
            this.cache.active.complete();
            this.store.complete();
        }
    }
    onInit(initialState) {
        _stores__WEBPACK_IMPORTED_MODULE_13__["__stores__"][this.storeName] = this;
        this._setState(() => initialState);
        Object(_dispatchers__WEBPACK_IMPORTED_MODULE_5__["dispatchAdded"])(this.storeName);
        if (this.isResettable()) {
            this._initialState = initialState;
        }
        Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_errors__WEBPACK_IMPORTED_MODULE_7__["assertStoreHasName"])(this.storeName, this.constructor.name);
    }
    dispatch(state, _dispatchAction = true) {
        let action = undefined;
        if (_dispatchAction) {
            action = _actions__WEBPACK_IMPORTED_MODULE_2__["currentAction"];
            Object(_actions__WEBPACK_IMPORTED_MODULE_2__["resetCustomAction"])();
        }
        this.store.next({ state, action });
    }
    watchTransaction() {
        Object(_transaction__WEBPACK_IMPORTED_MODULE_14__["commit"])().subscribe(() => {
            this.inTransaction = false;
            this.dispatch(this._value());
        });
    }
    isResettable() {
        if (this.resettable === false) {
            return false;
        }
        return this.resettable || Object(_config__WEBPACK_IMPORTED_MODULE_3__["getAkitaConfig"])().resettable;
    }
    handleTransaction() {
        if (!this.inTransaction) {
            this.watchTransaction();
            this.inTransaction = true;
        }
    }
    getCacheTTL() {
        return (this.cacheConfig && this.cacheConfig.ttl) || Object(_config__WEBPACK_IMPORTED_MODULE_3__["getAkitaConfig"])().ttl;
    }
}
Store.ɵfac = function Store_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinvalidFactory"](); };
Store.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: Store, factory: Store.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵsetClassMetadata"](Store, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__["Injectable"]
    }], function () { return [{ type: undefined }, { type: undefined }]; }, null); })();


/***/ }),

/***/ "1Jmr":
/*!************************************!*\
  !*** ./libs/akita/src/lib/root.ts ***!
  \************************************/
/*! exports provided: isBrowser, isNotBrowser, hasLocalStorage, hasSessionStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotBrowser", function() { return isNotBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLocalStorage", function() { return hasLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSessionStorage", function() { return hasSessionStorage; });
const isBrowser = typeof window !== 'undefined';
const isNotBrowser = !isBrowser;
// export const isNativeScript = typeof global !== 'undefined' && (<any>global).__runtimeVersion !== 'undefined'; TODO is this used?
const hasLocalStorage = () => {
    try {
        return typeof localStorage !== 'undefined';
    }
    catch (_a) {
        return false;
    }
};
const hasSessionStorage = () => {
    try {
        return typeof sessionStorage !== 'undefined';
    }
    catch (_a) {
        return false;
    }
};


/***/ }),

/***/ "2EyP":
/*!***************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/cart.component.ts ***!
  \***************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_cart_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/cart.query */ "xv5F");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _state_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/cart.actions */ "JMny");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CartComponent_ng_container_1_table_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_1_table_1_tr_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.remove(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r6.total, "$");
} }
function CartComponent_ng_container_1_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_ng_container_1_table_1_tr_14_Template, 13, 4, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1);
} }
function CartComponent_ng_container_1_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_container_1_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "credit_card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r4.total$), "$ ");
} }
function CartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_container_1_table_1_Template, 15, 1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_ng_container_1_h3_2_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_ng_container_1_h4_3_Template, 5, 3, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !items_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.length);
} }
class CartComponent {
    constructor(cartQuery, actions) {
        this.cartQuery = cartQuery;
        this.actions = actions;
    }
    ngOnInit() {
        this.items$ = this.cartQuery.selectItems$;
        this.total$ = this.cartQuery.selectTotal$;
        this.notify$ = this.cartQuery.selectNotification$;
    }
    remove({ productId }) {
        this.actions.dispatch(_state_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItem({ productId }));
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_cart_query__WEBPACK_IMPORTED_MODULE_1__["CartQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 3, vars: 3, consts: [[1, "padding"], [4, "ngIf"], ["class", "striped", 4, "ngIf"], ["class", "flex align-center", 4, "ngIf"], [1, "striped"], [4, "ngFor", "ngForOf"], [1, "btn", "waves-effect", "waves-light", "red", 3, "click"], [1, "material-icons"], [1, "flex", "align-center"], [1, "material-icons", "medium", "mr5"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.items$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './cart.component.html'
            }]
    }], function () { return [{ type: _state_cart_query__WEBPACK_IMPORTED_MODULE_1__["CartQuery"] }, { type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }]; }, null); })();


/***/ }),

/***/ "2NMn":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/addEntities.ts ***!
  \*******************************************/
/*! exports provided: addEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntities", function() { return addEntities; });
/* harmony import */ var _hasEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasEntity */ "dNb/");

// @internal
function addEntities({ state, entities, idKey, options = {}, preAddEntity }) {
    let newEntities = {};
    let newIds = [];
    let hasNewEntities = false;
    for (const entity of entities) {
        if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_0__["hasEntity"])(state.entities, entity[idKey]) === false) {
            // evaluate the middleware first to support dynamic ids
            const current = preAddEntity(entity);
            const entityId = current[idKey];
            newEntities[entityId] = current;
            if (options.prepend)
                newIds.unshift(entityId);
            else
                newIds.push(entityId);
            hasNewEntities = true;
        }
    }
    return hasNewEntities
        ? {
            newState: Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), newEntities), ids: options.prepend ? [...newIds, ...state.ids] : [...state.ids, ...newIds] }),
            newIds
        }
        : null;
}


/***/ }),

/***/ "2zEB":
/*!*****************************************************************!*\
  !*** ./libs/akita/src/lib/plugins/paginator/paginatorPlugin.ts ***!
  \*****************************************************************/
/*! exports provided: PaginatorPlugin, Paginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorPlugin", function() { return PaginatorPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "Q8dH");
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../isNil */ "82/w");
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../isUndefined */ "9NJV");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../transaction */ "UiMj");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugin */ "J5PQ");








const paginatorDefaults = {
    pagesControls: false,
    range: false,
    startWith: 1,
    cacheTimeout: undefined,
    clearStoreWithCache: true,
};
class PaginatorPlugin extends _plugin__WEBPACK_IMPORTED_MODULE_7__["AkitaPlugin"] {
    constructor(query, config = {}) {
        super(query, {
            resetFn: () => {
                this.initial = false;
                this.destroy({ clearCache: true, currentPage: 1 });
            },
        });
        this.query = query;
        this.config = config;
        /** Save current filters, sorting, etc. in cache */
        this.metadata = new Map();
        this.pages = new Map();
        this.pagination = {
            currentPage: 1,
            perPage: 0,
            total: 0,
            lastPage: 0,
            data: [],
        };
        /**
         * When the user navigates to a different page and return
         * we don't want to call `clearCache` on first time.
         */
        this.initial = true;
        /**
         * Proxy to the query loading
         */
        this.isLoading$ = this.query.selectLoading().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0));
        this.config = Object.assign(Object.assign({}, paginatorDefaults), config);
        const { startWith, cacheTimeout } = this.config;
        this.page = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](startWith);
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(cacheTimeout)) {
            this.clearCacheSubscription = cacheTimeout.subscribe(() => this.clearCache());
        }
    }
    /**
     * Listen to page changes
     */
    get pageChanges() {
        return this.page.asObservable();
    }
    /**
     * Get the current page number
     */
    get currentPage() {
        return this.pagination.currentPage;
    }
    /**
     * Check if current page is the first one
     */
    get isFirst() {
        return this.currentPage === 1;
    }
    /**
     * Check if current page is the last one
     */
    get isLast() {
        return this.currentPage === this.pagination.lastPage;
    }
    /**
     * Whether to generate an array of pages for *ngFor
     * [1, 2, 3, 4]
     */
    withControls() {
        this.config.pagesControls = true;
        return this;
    }
    /**
     * Whether to generate the `from` and `to` keys
     * [1, 2, 3, 4]
     */
    withRange() {
        this.config.range = true;
        return this;
    }
    /**
     * Set the loading state
     */
    setLoading(value = true) {
        this.getStore().setLoading(value);
    }
    /**
     * Update the pagination object and add the page
     */
    update(response) {
        this.pagination = response;
        this.addPage(response.data);
    }
    /**
     *
     * Set the ids and add the page to store
     */
    addPage(data) {
        this.pages.set(this.currentPage, { ids: data.map((entity) => entity[this.getStore().idKey]) });
        this.getStore().upsertMany(data);
    }
    /**
     * Clear the cache.
     */
    clearCache(options = {}) {
        if (!this.initial) {
            Object(_actions__WEBPACK_IMPORTED_MODULE_3__["logAction"])('@Pagination - Clear Cache');
            if (options.clearStore !== false && (this.config.clearStoreWithCache || options.clearStore)) {
                this.getStore().remove();
            }
            this.pages = new Map();
            this.metadata = new Map();
        }
        this.initial = false;
    }
    clearPage(page) {
        this.pages.delete(page);
    }
    /**
     * Clear the cache timeout and optionally the pages
     */
    destroy({ clearCache, currentPage } = {}) {
        if (this.clearCacheSubscription) {
            this.clearCacheSubscription.unsubscribe();
        }
        if (clearCache) {
            this.clearCache();
        }
        if (!Object(_isUndefined__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(currentPage)) {
            this.setPage(currentPage);
        }
        this.initial = true;
    }
    /**
     * Whether the provided page is active
     */
    isPageActive(page) {
        return this.currentPage === page;
    }
    /**
     * Set the current page
     */
    setPage(page) {
        if (page !== this.currentPage || !this.hasPage(page)) {
            this.page.next((this.pagination.currentPage = page));
        }
    }
    /**
     * Increment current page
     */
    nextPage() {
        if (this.currentPage !== this.pagination.lastPage) {
            this.setPage(this.pagination.currentPage + 1);
        }
    }
    /**
     * Decrement current page
     */
    prevPage() {
        if (this.pagination.currentPage > 1) {
            this.setPage(this.pagination.currentPage - 1);
        }
    }
    /**
     * Set current page to last
     */
    setLastPage() {
        this.setPage(this.pagination.lastPage);
    }
    /**
     * Set current page to first
     */
    setFirstPage() {
        this.setPage(1);
    }
    /**
     * Check if page exists in cache
     */
    hasPage(page) {
        return this.pages.has(page);
    }
    /**
     * Get the current page if it's in cache, otherwise invoke the request
     */
    getPage(req) {
        let page = this.pagination.currentPage;
        if (this.hasPage(page)) {
            return this.selectPage(page);
        }
        else {
            this.setLoading(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(req()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((config) => {
                page = config.currentPage;
                Object(_transaction__WEBPACK_IMPORTED_MODULE_6__["applyTransaction"])(() => {
                    this.setLoading(false);
                    this.update(config);
                });
                return this.selectPage(page);
            }));
        }
    }
    getQuery() {
        return this.query;
    }
    refreshCurrentPage() {
        if (Object(_isNil__WEBPACK_IMPORTED_MODULE_4__["isNil"])(this.currentPage) === false) {
            this.clearPage(this.currentPage);
            this.setPage(this.currentPage);
        }
    }
    getFrom() {
        if (this.isFirst) {
            return 1;
        }
        return (this.currentPage - 1) * this.pagination.perPage + 1;
    }
    getTo() {
        if (this.isLast) {
            return this.pagination.total;
        }
        return this.currentPage * this.pagination.perPage;
    }
    /**
     * Select the page
     */
    selectPage(page) {
        return this.query.selectAll({ asObject: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entities) => {
            const response = Object.assign(Object.assign({}, this.pagination), { data: this.pages.get(page).ids.map((id) => entities[id]) });
            const { range, pagesControls } = this.config;
            /** If no total - calc it */
            if (isNaN(this.pagination.total)) {
                if (response.lastPage === 1) {
                    response.total = response.data ? response.data.length : 0;
                }
                else {
                    response.total = response.perPage * response.lastPage;
                }
                this.pagination.total = response.total;
            }
            if (range) {
                response.from = this.getFrom();
                response.to = this.getTo();
            }
            if (pagesControls) {
                response.pageControls = generatePages(this.pagination.total, this.pagination.perPage);
            }
            return response;
        }));
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_actions__WEBPACK_IMPORTED_MODULE_3__["action"])('@Pagination - New Page'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PaginatorPlugin.prototype, "update", null);
/**
 * Generate an array so we can ngFor them to navigate between pages
 */
function generatePages(total, perPage) {
    const len = Math.ceil(total / perPage);
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i + 1);
    }
    return arr;
}
/** backward compatibility */
const Paginator = PaginatorPlugin;


/***/ }),

/***/ "40zj":
/*!**************************************!*\
  !*** ./libs/akita/src/lib/stores.ts ***!
  \**************************************/
/*! exports provided: __stores__, __queries__ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__stores__", function() { return __stores__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__queries__", function() { return __queries__; });
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ "1Jmr");

// @internal
const __stores__ = {};
// @internal
const __queries__ = {};
if (_root__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    window.$$stores = __stores__;
    window.$$queries = __queries__;
}


/***/ }),

/***/ "4F+6":
/*!*************************************!*\
  !*** ./libs/akita/src/lib/index.ts ***!
  \*************************************/
/*! exports provided: action, currentAction, logAction, resetCustomAction, setAction, setSkipAction, getExitingActives, hasActiveState, isMultiActiveState, resolveActiveEntity, addEntities, arrayAdd, arrayFind, distinctUntilArrayItemChanged, find, arrayRemove, arrayToggle, byId, byKey, arrayUpdate, arrayUpsert, cacheable, coerceArray, combineQueries, akitaConfig, getAkitaConfig, DEFAULT_ID_KEY, akitaDevtools, $$deleteStore, $$addStore, $$updateStore, dispatchDeleted, dispatchAdded, dispatchUpdate, entitiesToArray, entitiesToMap, EntityActions, EntityService, EntityStore, EntityUIStore, enableAkitaProdMode, isDev, __DEV__, filterNil, filterNilValue, createEntityQuery, createEntityStore, createQuery, createStore, getActiveEntities, getInitialEntitiesState, getValue, guid, hasEntity, isArray, isDefined, isEmpty, isFunction, isNil, isNumber, isObject, isPlainObject, isString, isUndefined, persistState, selectPersistStateInit, dirtyCheckDefaultParams, DirtyCheckPlugin, getNestedPath, EntityDirtyCheckPlugin, EntityCollectionPlugin, Paginator, PaginatorPlugin, PersistNgFormPlugin, AkitaPlugin, EntityStateHistoryPlugin, StateHistoryPlugin, Query, QueryConfig, queryConfigKey, EntityUIQuery, QueryEntity, removeAllEntities, removeEntities, resetStores, isNotBrowser, EntityStoreAction, getEntityStore, getEntityStoreByName, getStore, getStoreByName, runEntityStoreAction, runStoreAction, StoreAction, isEntityState, setEntities, setLoading, setLoadingAndError, setValue, SnapshotManager, snapshotManager, compareValues, Order, sortByOptions, Store, configKey, StoreConfig, __stores__, toBoolean, toEntitiesIds, toEntitiesObject, trackIdChanges, applyTransaction, commit, endBatch, isTransactionInProcess, startBatch, transaction, transactionManager, withTransaction, updateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "Q8dH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "action", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["action"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["currentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["logAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCustomAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["resetCustomAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSkipAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setSkipAction"]; });

/* harmony import */ var _activeState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeState */ "odxm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExitingActives", function() { return _activeState__WEBPACK_IMPORTED_MODULE_1__["getExitingActives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasActiveState", function() { return _activeState__WEBPACK_IMPORTED_MODULE_1__["hasActiveState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMultiActiveState", function() { return _activeState__WEBPACK_IMPORTED_MODULE_1__["isMultiActiveState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveActiveEntity", function() { return _activeState__WEBPACK_IMPORTED_MODULE_1__["resolveActiveEntity"]; });

/* harmony import */ var _addEntities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addEntities */ "2NMn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEntities", function() { return _addEntities__WEBPACK_IMPORTED_MODULE_2__["addEntities"]; });

/* harmony import */ var _arrayAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrayAdd */ "RPUs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayAdd", function() { return _arrayAdd__WEBPACK_IMPORTED_MODULE_3__["arrayAdd"]; });

/* harmony import */ var _arrayFind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrayFind */ "8vam");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return _arrayFind__WEBPACK_IMPORTED_MODULE_4__["arrayFind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilArrayItemChanged", function() { return _arrayFind__WEBPACK_IMPORTED_MODULE_4__["distinctUntilArrayItemChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _arrayFind__WEBPACK_IMPORTED_MODULE_4__["find"]; });

/* harmony import */ var _arrayRemove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrayRemove */ "WKK6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _arrayRemove__WEBPACK_IMPORTED_MODULE_5__["arrayRemove"]; });

/* harmony import */ var _arrayToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arrayToggle */ "yMBE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayToggle", function() { return _arrayToggle__WEBPACK_IMPORTED_MODULE_6__["arrayToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byId", function() { return _arrayToggle__WEBPACK_IMPORTED_MODULE_6__["byId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byKey", function() { return _arrayToggle__WEBPACK_IMPORTED_MODULE_6__["byKey"]; });

/* harmony import */ var _arrayUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arrayUpdate */ "WRE0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayUpdate", function() { return _arrayUpdate__WEBPACK_IMPORTED_MODULE_7__["arrayUpdate"]; });

/* harmony import */ var _arrayUpsert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arrayUpsert */ "aw1X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayUpsert", function() { return _arrayUpsert__WEBPACK_IMPORTED_MODULE_8__["arrayUpsert"]; });

/* harmony import */ var _cacheable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cacheable */ "Devl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheable", function() { return _cacheable__WEBPACK_IMPORTED_MODULE_9__["cacheable"]; });

/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coerceArray */ "6ukB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return _coerceArray__WEBPACK_IMPORTED_MODULE_10__["coerceArray"]; });

/* harmony import */ var _combineQueries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./combineQueries */ "PK/g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineQueries", function() { return _combineQueries__WEBPACK_IMPORTED_MODULE_11__["combineQueries"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config */ "LteI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "akitaConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_12__["akitaConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAkitaConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_12__["getAkitaConfig"]; });

/* harmony import */ var _defaultIDKey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultIDKey */ "kBYr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ID_KEY", function() { return _defaultIDKey__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_ID_KEY"]; });

/* harmony import */ var _devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./devtools */ "WYxI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "akitaDevtools", function() { return _devtools__WEBPACK_IMPORTED_MODULE_14__["akitaDevtools"]; });

/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dispatchers */ "zqjR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$deleteStore", function() { return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["$$deleteStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$addStore", function() { return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["$$addStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$updateStore", function() { return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["$$updateStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchDeleted", function() { return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["dispatchDeleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchAdded", function() { return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["dispatchAdded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchUpdate", function() { return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["dispatchUpdate"]; });

/* harmony import */ var _entitiesToArray__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./entitiesToArray */ "JoxY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitiesToArray", function() { return _entitiesToArray__WEBPACK_IMPORTED_MODULE_16__["entitiesToArray"]; });

/* harmony import */ var _entitiesToMap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entitiesToMap */ "5odZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitiesToMap", function() { return _entitiesToMap__WEBPACK_IMPORTED_MODULE_17__["entitiesToMap"]; });

/* harmony import */ var _entityActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entityActions */ "RK5a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityActions", function() { return _entityActions__WEBPACK_IMPORTED_MODULE_18__["EntityActions"]; });

/* harmony import */ var _entityService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entityService */ "iXoB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _entityService__WEBPACK_IMPORTED_MODULE_19__["EntityService"]; });

/* harmony import */ var _entityStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./entityStore */ "syuU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityStore", function() { return _entityStore__WEBPACK_IMPORTED_MODULE_20__["EntityStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityUIStore", function() { return _entityStore__WEBPACK_IMPORTED_MODULE_20__["EntityUIStore"]; });

/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./env */ "VCUg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableAkitaProdMode", function() { return _env__WEBPACK_IMPORTED_MODULE_21__["enableAkitaProdMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return _env__WEBPACK_IMPORTED_MODULE_21__["isDev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DEV__", function() { return _env__WEBPACK_IMPORTED_MODULE_21__["__DEV__"]; });

/* harmony import */ var _filterNil__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./filterNil */ "klkp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNil", function() { return _filterNil__WEBPACK_IMPORTED_MODULE_22__["filterNil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNilValue", function() { return _filterNil__WEBPACK_IMPORTED_MODULE_22__["filterNilValue"]; });

/* harmony import */ var _fp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fp */ "rYvI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntityQuery", function() { return _fp__WEBPACK_IMPORTED_MODULE_23__["createEntityQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntityStore", function() { return _fp__WEBPACK_IMPORTED_MODULE_23__["createEntityStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createQuery", function() { return _fp__WEBPACK_IMPORTED_MODULE_23__["createQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _fp__WEBPACK_IMPORTED_MODULE_23__["createStore"]; });

/* harmony import */ var _getActiveEntities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./getActiveEntities */ "fVEQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveEntities", function() { return _getActiveEntities__WEBPACK_IMPORTED_MODULE_24__["getActiveEntities"]; });

/* harmony import */ var _getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./getInitialEntitiesState */ "EJe+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialEntitiesState", function() { return _getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_25__["getInitialEntitiesState"]; });

/* harmony import */ var _getValueByString__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./getValueByString */ "doWv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _getValueByString__WEBPACK_IMPORTED_MODULE_26__["getValue"]; });

/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guid */ "L/Kq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _guid__WEBPACK_IMPORTED_MODULE_27__["guid"]; });

/* harmony import */ var _hasEntity__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hasEntity */ "dNb/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasEntity", function() { return _hasEntity__WEBPACK_IMPORTED_MODULE_28__["hasEntity"]; });

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./isArray */ "aDq+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _isArray__WEBPACK_IMPORTED_MODULE_29__["isArray"]; });

/* harmony import */ var _isDefined__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./isDefined */ "Y5+g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _isDefined__WEBPACK_IMPORTED_MODULE_30__["isDefined"]; });

/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./isEmpty */ "x9kZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_31__["isEmpty"]; });

/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _isFunction__WEBPACK_IMPORTED_MODULE_32__["isFunction"]; });

/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return _isNil__WEBPACK_IMPORTED_MODULE_33__["isNil"]; });

/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./isNumber */ "TPbr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _isNumber__WEBPACK_IMPORTED_MODULE_34__["isNumber"]; });

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./isObject */ "iJBq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _isObject__WEBPACK_IMPORTED_MODULE_35__["isObject"]; });

/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./isPlainObject */ "Sr74");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _isPlainObject__WEBPACK_IMPORTED_MODULE_36__["isPlainObject"]; });

/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./isString */ "oJ0C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString__WEBPACK_IMPORTED_MODULE_37__["isString"]; });

/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./isUndefined */ "9NJV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _isUndefined__WEBPACK_IMPORTED_MODULE_38__["isUndefined"]; });

/* harmony import */ var _persistState__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./persistState */ "gF6S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistState", function() { return _persistState__WEBPACK_IMPORTED_MODULE_39__["persistState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPersistStateInit", function() { return _persistState__WEBPACK_IMPORTED_MODULE_39__["selectPersistStateInit"]; });

/* harmony import */ var _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./plugins/dirtyCheck/dirtyCheckPlugin */ "Qu3/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirtyCheckDefaultParams", function() { return _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__["dirtyCheckDefaultParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirtyCheckPlugin", function() { return _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__["DirtyCheckPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNestedPath", function() { return _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__["getNestedPath"]; });

/* harmony import */ var _plugins_dirtyCheck_entityDirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./plugins/dirtyCheck/entityDirtyCheckPlugin */ "/V8x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityDirtyCheckPlugin", function() { return _plugins_dirtyCheck_entityDirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_41__["EntityDirtyCheckPlugin"]; });

/* harmony import */ var _plugins_entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./plugins/entityCollectionPlugin */ "gUUV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityCollectionPlugin", function() { return _plugins_entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_42__["EntityCollectionPlugin"]; });

/* harmony import */ var _plugins_paginator_paginatorPlugin__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./plugins/paginator/paginatorPlugin */ "2zEB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _plugins_paginator_paginatorPlugin__WEBPACK_IMPORTED_MODULE_43__["Paginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorPlugin", function() { return _plugins_paginator_paginatorPlugin__WEBPACK_IMPORTED_MODULE_43__["PaginatorPlugin"]; });

/* harmony import */ var _plugins_persistForm_persistNgFormPlugin__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./plugins/persistForm/persistNgFormPlugin */ "0Eth");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistNgFormPlugin", function() { return _plugins_persistForm_persistNgFormPlugin__WEBPACK_IMPORTED_MODULE_44__["PersistNgFormPlugin"]; });

/* harmony import */ var _plugins_plugin__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./plugins/plugin */ "J5PQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkitaPlugin", function() { return _plugins_plugin__WEBPACK_IMPORTED_MODULE_45__["AkitaPlugin"]; });

/* harmony import */ var _plugins_stateHistory_entityStateHistoryPlugin__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./plugins/stateHistory/entityStateHistoryPlugin */ "H/iu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityStateHistoryPlugin", function() { return _plugins_stateHistory_entityStateHistoryPlugin__WEBPACK_IMPORTED_MODULE_46__["EntityStateHistoryPlugin"]; });

/* harmony import */ var _plugins_stateHistory_stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./plugins/stateHistory/stateHistoryPlugin */ "gqnR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateHistoryPlugin", function() { return _plugins_stateHistory_stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_47__["StateHistoryPlugin"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./query */ "Rbjf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _query__WEBPACK_IMPORTED_MODULE_48__["Query"]; });

/* harmony import */ var _queryConfig__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./queryConfig */ "mKZq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryConfig", function() { return _queryConfig__WEBPACK_IMPORTED_MODULE_49__["QueryConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryConfigKey", function() { return _queryConfig__WEBPACK_IMPORTED_MODULE_49__["queryConfigKey"]; });

/* harmony import */ var _queryEntity__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./queryEntity */ "GErp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityUIQuery", function() { return _queryEntity__WEBPACK_IMPORTED_MODULE_50__["EntityUIQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryEntity", function() { return _queryEntity__WEBPACK_IMPORTED_MODULE_50__["QueryEntity"]; });

/* harmony import */ var _removeEntities__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./removeEntities */ "M7vU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAllEntities", function() { return _removeEntities__WEBPACK_IMPORTED_MODULE_51__["removeAllEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEntities", function() { return _removeEntities__WEBPACK_IMPORTED_MODULE_51__["removeEntities"]; });

/* harmony import */ var _resetStores__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./resetStores */ "uFMm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetStores", function() { return _resetStores__WEBPACK_IMPORTED_MODULE_52__["resetStores"]; });

/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./root */ "1Jmr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotBrowser", function() { return _root__WEBPACK_IMPORTED_MODULE_53__["isNotBrowser"]; });

/* harmony import */ var _runStoreAction__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./runStoreAction */ "QElp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityStoreAction", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["EntityStoreAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityStore", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getEntityStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityStoreByName", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getEntityStoreByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoreByName", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getStoreByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runEntityStoreAction", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["runEntityStoreAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runStoreAction", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["runStoreAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreAction", function() { return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["StoreAction"]; });

/* harmony import */ var _setEntities__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./setEntities */ "n9dC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEntityState", function() { return _setEntities__WEBPACK_IMPORTED_MODULE_55__["isEntityState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEntities", function() { return _setEntities__WEBPACK_IMPORTED_MODULE_55__["setEntities"]; });

/* harmony import */ var _setLoading__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./setLoading */ "mVyF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _setLoading__WEBPACK_IMPORTED_MODULE_56__["setLoading"]; });

/* harmony import */ var _setLoadingAndError__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./setLoadingAndError */ "A9tG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoadingAndError", function() { return _setLoadingAndError__WEBPACK_IMPORTED_MODULE_57__["setLoadingAndError"]; });

/* harmony import */ var _setValueByString__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./setValueByString */ "QRUx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return _setValueByString__WEBPACK_IMPORTED_MODULE_58__["setValue"]; });

/* harmony import */ var _snapshotManager__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./snapshotManager */ "EZ05");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnapshotManager", function() { return _snapshotManager__WEBPACK_IMPORTED_MODULE_59__["SnapshotManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotManager", function() { return _snapshotManager__WEBPACK_IMPORTED_MODULE_59__["snapshotManager"]; });

/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./sort */ "yKN+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareValues", function() { return _sort__WEBPACK_IMPORTED_MODULE_60__["compareValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _sort__WEBPACK_IMPORTED_MODULE_60__["Order"]; });

/* harmony import */ var _sortByOptions__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./sortByOptions */ "yVIH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortByOptions", function() { return _sortByOptions__WEBPACK_IMPORTED_MODULE_61__["sortByOptions"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./store */ "18rb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _store__WEBPACK_IMPORTED_MODULE_62__["Store"]; });

/* harmony import */ var _storeConfig__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./storeConfig */ "gySQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configKey", function() { return _storeConfig__WEBPACK_IMPORTED_MODULE_63__["configKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreConfig", function() { return _storeConfig__WEBPACK_IMPORTED_MODULE_63__["StoreConfig"]; });

/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./stores */ "40zj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__stores__", function() { return _stores__WEBPACK_IMPORTED_MODULE_64__["__stores__"]; });

/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./toBoolean */ "KA1R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _toBoolean__WEBPACK_IMPORTED_MODULE_65__["toBoolean"]; });

/* harmony import */ var _toEntitiesIds__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./toEntitiesIds */ "YBZY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toEntitiesIds", function() { return _toEntitiesIds__WEBPACK_IMPORTED_MODULE_66__["toEntitiesIds"]; });

/* harmony import */ var _toEntitiesObject__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./toEntitiesObject */ "0Fb4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toEntitiesObject", function() { return _toEntitiesObject__WEBPACK_IMPORTED_MODULE_67__["toEntitiesObject"]; });

/* harmony import */ var _trackIdChanges__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./trackIdChanges */ "b89F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackIdChanges", function() { return _trackIdChanges__WEBPACK_IMPORTED_MODULE_68__["trackIdChanges"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./transaction */ "UiMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyTransaction", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["applyTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commit", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["commit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endBatch", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["endBatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTransactionInProcess", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["isTransactionInProcess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBatch", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["startBatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["transaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionManager", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["transactionManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTransaction", function() { return _transaction__WEBPACK_IMPORTED_MODULE_69__["withTransaction"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./types */ "98u3");
/* empty/unused harmony star reexport *//* harmony import */ var _updateEntities__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./updateEntities */ "MduY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateEntities", function() { return _updateEntities__WEBPACK_IMPORTED_MODULE_71__["updateEntities"]; });











































































/***/ }),

/***/ "4IkZ":
/*!**********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/login/login.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _state_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/auth.service */ "dpu8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");








class LoginComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.login = this.fb.group({
            email: this.fb.control(''),
            password: this.fb.control('')
        });
    }
    submit() {
        this.authService.login(this.login.value).subscribe(() => {
            this.router.navigate(['/']);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 19, vars: 1, consts: [[1, "row", "padding", 2, "width", "50%", "margin", "auto"], [1, "col", "s12", 3, "formGroup", "submit"], [1, "row"], [1, "input-field"], [1, "material-icons", "prefix"], ["id", "icon_prefix", "type", "text", "formControlName", "email", 1, "validate"], ["for", "icon_prefix"], ["id", "icon_telephone", "type", "tel", "formControlName", "password", 1, "validate"], ["for", "icon_telephone"], ["type", "submit", 1, "btn", "waves-effect", "waves-light", "flex", 2, "margin-left", "auto"], [1, "material-icons", "right"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "lock_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.login);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './login.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "5OdB":
/*!**************************************************************!*\
  !*** ./libs/akita-ng-devtools/src/lib/ng-devtools.module.ts ***!
  \**************************************************************/
/*! exports provided: DEVTOOLS_OPTIONS, AkitaDevtools, d, init, AkitaNgDevtools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVTOOLS_OPTIONS", function() { return DEVTOOLS_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkitaDevtools", function() { return AkitaDevtools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkitaNgDevtools", function() { return AkitaNgDevtools; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");



const DEVTOOLS_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DevtoolsOptions');
class AkitaDevtools {
    constructor(ngZone, options) {
        this.ngZone = ngZone;
        this.options = options;
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["akitaDevtools"])(this.ngZone, this.options);
    }
}
AkitaDevtools.ɵfac = function AkitaDevtools_Factory(t) { return new (t || AkitaDevtools)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DEVTOOLS_OPTIONS)); };
AkitaDevtools.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AkitaDevtools, factory: AkitaDevtools.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaDevtools, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [DEVTOOLS_OPTIONS]
            }] }]; }, null); })();
// auto initialize the devtools
function d() { }
function init(akitaDevtools) {
    return d;
}
class AkitaNgDevtools {
    static forRoot(options) {
        return {
            ngModule: AkitaNgDevtools,
            providers: [
                {
                    provide: DEVTOOLS_OPTIONS,
                    useValue: options
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: init,
                    deps: [AkitaDevtools],
                    multi: true
                }
            ]
        };
    }
}
AkitaNgDevtools.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AkitaNgDevtools });
AkitaNgDevtools.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AkitaNgDevtools_Factory(t) { return new (t || AkitaNgDevtools)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaNgDevtools, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();


/***/ }),

/***/ "5odZ":
/*!*********************************************!*\
  !*** ./libs/akita/src/lib/entitiesToMap.ts ***!
  \*********************************************/
/*! exports provided: entitiesToMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesToMap", function() { return entitiesToMap; });
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coerceArray */ "6ukB");


// @internal
function entitiesToMap(state, options) {
    const map = {};
    const { filterBy, limitTo } = options;
    const { ids, entities } = state;
    if (!filterBy && !limitTo) {
        return entities;
    }
    const hasLimit = Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(limitTo) === false;
    if (filterBy && hasLimit) {
        let count = 0;
        for (let i = 0, length = ids.length; i < length; i++) {
            if (count === limitTo)
                break;
            const id = ids[i];
            const entity = entities[id];
            const allPass = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(filterBy).every(fn => fn(entity, i));
            if (allPass) {
                map[id] = entity;
                count++;
            }
        }
    }
    else {
        const finalLength = Math.min(limitTo || ids.length, ids.length);
        for (let i = 0; i < finalLength; i++) {
            const id = ids[i];
            const entity = entities[id];
            if (!filterBy) {
                map[id] = entity;
                continue;
            }
            const allPass = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(filterBy).every(fn => fn(entity, i));
            if (allPass) {
                map[id] = entity;
            }
        }
    }
    return map;
}


/***/ }),

/***/ "6/9y":
/*!*******************************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/lib/ng-entity.service.ts ***!
  \*******************************************************************/
/*! exports provided: mapResponse, NgEntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapResponse", function() { return mapResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEntityService", function() { return NgEntityService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _action_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-factory */ "fRdR");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "Rv9Z");
/* harmony import */ var _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-entity-service-notifier */ "ZY5P");
/* harmony import */ var _ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-entity-service.config */ "sog1");
/* harmony import */ var _ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng-entity-service.loader */ "YCCL");










const mapResponse = (config) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((res) => {
    const mappedResponse = !!(config === null || config === void 0 ? void 0 : config.mapResponseFn) ? config.mapResponseFn(res) : res;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["isObservable"])(mappedResponse) ? mappedResponse : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(mappedResponse);
});
class NgEntityService extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityService"] {
    constructor(store, config = {}) {
        super();
        this.store = store;
        this.config = config;
        this.http = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
        this.loader = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_9__["NgEntityServiceLoader"]);
        this.notifier = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["NgEntityServiceNotifier"]);
        const globalConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__["NG_ENTITY_SERVICE_CONFIG"]);
        this.mergedConfig = Object(_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__["mergeDeep"])({}, _ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__["defaultConfig"], globalConfig, this.getDecoratorConfig(), config);
        this.baseUrl = this.mergedConfig.baseUrl;
        this.httpMethodMap = this.mergedConfig.httpMethods;
        this.dispatchSuccess = Object(_action_factory__WEBPACK_IMPORTED_MODULE_5__["successAction"])(this.store.storeName, this.notifier);
        this.dispatchError = Object(_action_factory__WEBPACK_IMPORTED_MODULE_5__["errorAction"])(this.store.storeName, this.notifier);
    }
    get api() {
        if (!this.baseUrl) {
            throw new Error(`baseUrl of ${this.constructor.name} is not defined.`);
        }
        return `${this.baseUrl}/${this.resourceName}`;
    }
    get resourceName() {
        return this.mergedConfig.resourceName || this.store.storeName;
    }
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getHttp() {
        return this.http;
    }
    getConfig() {
        return this.mergedConfig;
    }
    get(idOrConfig, config) {
        const method = this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].GET);
        const isSingle = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["isID"])(idOrConfig);
        const entityId = isSingle ? idOrConfig : undefined;
        const conf = (!isSingle ? idOrConfig : config) || {};
        const url = this.resolveUrl(conf, entityId);
        this.loader.dispatch({
            method,
            loading: true,
            entityId,
            storeName: this.store.storeName,
        });
        return this.http.request(method, url, conf).pipe(mapResponse(conf), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            if (!conf.skipWrite) {
                if (isSingle) {
                    this.store.upsert(entityId, data, (id, newState) => (Object.assign({ id }, newState)));
                }
                else {
                    if (conf.append) {
                        this.store.add(data);
                    }
                    else if (conf.upsert) {
                        this.store.upsertMany(data);
                    }
                    else {
                        this.store.set(data);
                    }
                }
            }
            this.dispatchSuccess({
                method,
                payload: data,
                successMsg: conf.successMsg,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => this.handleError(method, error, conf.errorMsg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loader.dispatch({
                method,
                loading: false,
                entityId,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Add a new entity - Creates a POST request
     *
     * @example
     * service.add(entity).subscribe()
     * service.add(entity, config).subscribe()
     */
    add(entity, config) {
        const url = this.resolveUrl(config);
        const method = this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].POST);
        this.loader.dispatch({
            method,
            loading: true,
            storeName: this.store.storeName,
        });
        const configWithBody = Object.assign(Object.assign({}, config), { body: entity });
        return this.http.request(method, url, configWithBody).pipe(mapResponse(config), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((responseEntity) => {
            if (!config || (config && !config.skipWrite)) {
                this.store.add(responseEntity, config);
            }
            this.dispatchSuccess({
                method,
                payload: responseEntity,
                successMsg: config && config.successMsg,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => this.handleError(method, error, config && config.errorMsg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loader.dispatch({
                method,
                loading: false,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Update an entity - Creates a PUT/PATCH request
     *
     * @example
     * service.update(id, entity).subscribe()
     * service.update(id, entity, config).subscribe()
     */
    update(id, entity, config) {
        const url = this.resolveUrl(config, id);
        const method = (config && config.method) || this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].PUT);
        this.loader.dispatch({
            method,
            loading: true,
            entityId: id,
            storeName: this.store.storeName,
        });
        const configWithBody = Object.assign(Object.assign({}, config), { body: entity });
        return this.http.request(method, url, configWithBody).pipe(mapResponse(config), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((responseEntity) => {
            if (!config || (config && !config.skipWrite)) {
                this.store.update(id, responseEntity);
            }
            this.dispatchSuccess({
                method,
                payload: responseEntity,
                successMsg: config && config.successMsg,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => this.handleError(method, error, config && config.errorMsg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loader.dispatch({
                method,
                loading: false,
                entityId: id,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Delete an entity - Creates a DELETE request
     *
     * @example
     * service.delete(id).subscribe()
     * service.delete(id, config).subscribe()
     */
    delete(id, config) {
        const url = this.resolveUrl(config, id);
        const method = this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].DELETE);
        this.loader.dispatch({
            method,
            loading: true,
            entityId: id,
            storeName: this.store.storeName,
        });
        return this.http.request(method, url, config).pipe(mapResponse(config), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            if (!config || (config && !config.skipWrite)) {
                this.store.remove(id);
            }
            this.dispatchSuccess({
                method,
                payload: res,
                successMsg: config && config.successMsg,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => this.handleError(method, error, config && config.errorMsg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loader.dispatch({
                method,
                loading: false,
                entityId: id,
                storeName: this.store.storeName,
            });
        }));
    }
    /**
     * Gets the mapped HttpMethod.
     *
     * The default HttpMethod can be changed like so:
     * ```ts
     * {
     *   provide: NG_ENTITY_SERVICE_CONFIG,
     *   useValue: {
     *     httpMethods: {
     *       PUT: HttpMethod.PATCH,
     *     },
     *   } as NgEntityServiceGlobalConfig,
     * }
     * ```
     *
     * @param type HttpMethod to get the user configured HttpMethod for
     * @returns User configured HttpMethod for the method, else the default HttpMethod
     */
    getHttpMethod(type) {
        let httpMethod;
        if (this.httpMethodMap) {
            httpMethod = this.httpMethodMap[type];
        }
        if (!httpMethod) {
            throw new Error('Unknown HttpMethod');
        }
        return httpMethod;
    }
    /**
     * Gets the value given via the NgEntityServiceConfig decorator
     *
     * ```ts
     * @NgEntityServiceConfig({
     *   baseUrl: 'foo',
     *   resourceName: 'bar',
     * })
     * ```
     *
     * @param key The property key
     * @returns The value of the given decorator key
     */
    getDecoratorValue(key) {
        return this.constructor[key];
    }
    getDecoratorConfig() {
        const config = {};
        const baseUrl = this.getDecoratorValue('baseUrl');
        if (baseUrl) {
            config.baseUrl = baseUrl;
        }
        const resourceName = this.getDecoratorValue('resourceName');
        if (resourceName) {
            config.resourceName = resourceName;
        }
        return config;
    }
    resolveUrl(config, id) {
        const { url, urlPostfix } = Object(config);
        let final = this.api;
        if (url) {
            return url;
        }
        if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(id)) {
            final += `/${id}`;
        }
        if (urlPostfix) {
            final += `/${urlPostfix}`;
        }
        return final;
    }
    handleError(method, error, errorMsg) {
        this.dispatchError({
            method,
            errorMsg,
            payload: error,
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
}


/***/ }),

/***/ "6t7H":
/*!************************************************************!*\
  !*** ./libs/akita-ng-router-store/src/lib/router.query.ts ***!
  \************************************************************/
/*! exports provided: RouterQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterQuery", function() { return RouterQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router.store */ "/1Ks");







function slice(section) {
    return (source) => {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data.state)).pipe(Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["filterNilValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((state) => state[section]));
    };
}
class RouterQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor(store) {
        super(store);
        this.store = store;
        this.__navigationCancel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.__navigationError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    selectParams(names) {
        if (names === undefined) {
            return this.select().pipe(slice('params'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        }
        const select = (p) => this.select().pipe(slice('params'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(p), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        if (Array.isArray(names)) {
            const sources = names.map(select);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(sources);
        }
        return select(names).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    getParams(name) {
        if (this.getValue().state) {
            const params = this.getValue().state.params;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    }
    selectQueryParams(names) {
        if (names === undefined) {
            return this.select().pipe(slice('queryParams'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        }
        const select = (p) => this.select().pipe(slice('queryParams'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(p), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        if (Array.isArray(names)) {
            const sources = names.map(select);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(sources);
        }
        return select(names);
    }
    getQueryParams(name) {
        if (this.getValue().state) {
            const params = this.getValue().state.queryParams;
            if (name === undefined) {
                return params;
            }
            return params[name];
        }
        return null;
    }
    selectFragment() {
        return this.select().pipe(slice('fragment'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    getFragment() {
        if (this.getValue().state) {
            return this.getValue().state.fragment;
        }
        return null;
    }
    selectData(name) {
        if (name === undefined) {
            return this.select().pipe(slice('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        }
        return this.select().pipe(slice('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    getData(name) {
        if (this.getValue().state) {
            const data = this.getValue().state.data;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    }
    selectNavigationExtras(name) {
        if (name === undefined) {
            return this.select().pipe(slice('navigationExtras'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        }
        return this.select().pipe(slice('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    getNavigationExtras(name) {
        if (this.getValue().state) {
            const data = this.getValue().state.navigationExtras;
            if (name === undefined) {
                return data;
            }
            return data[name];
        }
        return null;
    }
    selectNavigationCancel() {
        return this.__navigationCancel.asObservable();
    }
    selectNavigationError() {
        return this.__navigationError.asObservable();
    }
}
RouterQuery.ɵfac = function RouterQuery_Factory(t) { return new (t || RouterQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStore"])); };
RouterQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterQuery, factory: RouterQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStore"] }]; }, null); })();


/***/ }),

/***/ "6ukB":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/coerceArray.ts ***!
  \*******************************************/
/*! exports provided: coerceArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNil */ "82/w");

// @internal
function coerceArray(value) {
    if (Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value)) {
        return [];
    }
    return Array.isArray(value) ? value : [value];
}


/***/ }),

/***/ "79eE":
/*!*************************************************!*\
  !*** ./libs/akita-ng-router-store/src/index.ts ***!
  \*************************************************/
/*! exports provided: AkitaNgRouterStoreModule, RouterQuery, RouterService, createInitialRouterState, RouterStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/router.module */ "GapQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkitaNgRouterStoreModule", function() { return _lib_router_module__WEBPACK_IMPORTED_MODULE_0__["AkitaNgRouterStoreModule"]; });

/* harmony import */ var _lib_router_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/router.query */ "6t7H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterQuery", function() { return _lib_router_query__WEBPACK_IMPORTED_MODULE_1__["RouterQuery"]; });

/* harmony import */ var _lib_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/router.service */ "Sq83");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return _lib_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]; });

/* harmony import */ var _lib_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/router.store */ "/1Ks");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInitialRouterState", function() { return _lib_router_store__WEBPACK_IMPORTED_MODULE_3__["createInitialRouterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterStore", function() { return _lib_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStore"]; });







/***/ }),

/***/ "82/w":
/*!*************************************!*\
  !*** ./libs/akita/src/lib/isNil.ts ***!
  \*************************************/
/*! exports provided: isNil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
// @internal
function isNil(v) {
    return v === null || v === undefined;
}


/***/ }),

/***/ "8p+e":
/*!******************************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/akita-ng-effects.module.ts ***!
  \******************************************************************/
/*! exports provided: AkitaNgEffectsModule, createEffectInstances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkitaNgEffectsModule", function() { return AkitaNgEffectsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEffectInstances", function() { return createEffectInstances; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens */ "EdJo");
/* harmony import */ var _effect_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effect-root.module */ "phQS");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "fZ2q");
/* harmony import */ var _effect_feature_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effect-feature.module */ "roSn");
/* harmony import */ var _module_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-manager.service */ "KdTy");







class AkitaNgEffectsModule {
    static forRoot(rootEffects = []) {
        return {
            ngModule: _effect_root_module__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"],
            providers: [
                _module_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManager"],
                _actions__WEBPACK_IMPORTED_MODULE_3__["Actions"],
                rootEffects,
                {
                    provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["_ROOT_EFFECTS"],
                    useValue: [rootEffects],
                },
                {
                    provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["ROOT_EFFECT_INSTANCES"],
                    useFactory: createEffectInstances,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _tokens__WEBPACK_IMPORTED_MODULE_1__["_ROOT_EFFECTS"], _module_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManager"]],
                },
            ],
        };
    }
    static forFeature(featureEffects = []) {
        return {
            ngModule: _effect_feature_module__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"],
            providers: [
                featureEffects,
                {
                    provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["_FEATURE_EFFECTS"],
                    useValue: featureEffects,
                    multi: true,
                },
                {
                    provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["FEATURE_EFFECT_INSTANCES"],
                    multi: true,
                    useFactory: createEffectInstances,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _tokens__WEBPACK_IMPORTED_MODULE_1__["_FEATURE_EFFECTS"], _module_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManager"]],
                },
            ],
        };
    }
}
AkitaNgEffectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AkitaNgEffectsModule });
AkitaNgEffectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AkitaNgEffectsModule_Factory(t) { return new (t || AkitaNgEffectsModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaNgEffectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();
function createEffectInstances(injector, effectGroups, moduleManager) {
    const mergedEffects = [];
    for (const effectGroup of effectGroups) {
        mergedEffects.push(...effectGroup);
    }
    // todo we shouldn't use a map to avoid registering the effects twice;
    // fix the underlying issue for feature is called twice
    const effectInstances = mergedEffects.reduce((acc, effect) => {
        if (!moduleManager.has(effect)) {
            moduleManager.add(effect);
            acc.push(injector.get(effect));
        }
        return acc;
    }, []);
    return effectInstances;
}


/***/ }),

/***/ "8vam":
/*!*****************************************!*\
  !*** ./libs/akita/src/lib/arrayFind.ts ***!
  \*****************************************/
/*! exports provided: find, distinctUntilArrayItemChanged, arrayFind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilArrayItemChanged", function() { return distinctUntilArrayItemChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coerceArray */ "6ukB");
/* harmony import */ var _defaultIDKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultIDKey */ "kBYr");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray */ "aDq+");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isEmpty */ "x9kZ");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isFunction */ "u21x");






// @internal
function find(collection, idsOrPredicate, idKey) {
    const result = [];
    if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(idsOrPredicate)) {
        for (const entity of collection) {
            if (idsOrPredicate(entity) === true) {
                result.push(entity);
            }
        }
    }
    else {
        const toSet = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(idsOrPredicate).reduce((acc, current) => acc.add(current), new Set());
        for (const entity of collection) {
            if (toSet.has(entity[idKey])) {
                result.push(entity);
            }
        }
    }
    return result;
}
// @internal
function distinctUntilArrayItemChanged() {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])((prevCollection, currentCollection) => {
        if (prevCollection === currentCollection) {
            return true;
        }
        if (!Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["isArray"])(prevCollection) || !Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["isArray"])(currentCollection)) {
            return false;
        }
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(prevCollection) && Object(_isEmpty__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(currentCollection)) {
            return true;
        }
        if (prevCollection.length !== currentCollection.length) {
            return false;
        }
        const isOneOfItemReferenceChanged = currentCollection.some((item, i) => {
            return prevCollection[i] !== item;
        });
        // return false means there is a change and we want to call next()
        return isOneOfItemReferenceChanged === false;
    });
}
function arrayFind(idsOrPredicate, idKey) {
    return function (source) {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((collection) => {
            // which means the user deleted the root entity or set the collection to nil
            if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["isArray"])(collection) === false) {
                return collection;
            }
            return find(collection, idsOrPredicate, idKey || _defaultIDKey__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ID_KEY"]);
        }), distinctUntilArrayItemChanged(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((value) => {
            if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value) === false) {
                return value;
            }
            if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["isArray"])(idsOrPredicate) || Object(_isFunction__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(idsOrPredicate)) {
                return value;
            }
            return value[0];
        }));
    };
}


/***/ }),

/***/ "98u3":
/*!*************************************!*\
  !*** ./libs/akita/src/lib/types.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "9NJV":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/isUndefined.ts ***!
  \*******************************************/
/*! exports provided: isUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
// @internal
function isUndefined(value) {
    return value === undefined;
}


/***/ }),

/***/ "A9tG":
/*!**************************************************!*\
  !*** ./libs/akita/src/lib/setLoadingAndError.ts ***!
  \**************************************************/
/*! exports provided: setLoadingAndError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingAndError", function() { return setLoadingAndError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function setLoadingAndError(store) {
    return function (source) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => {
            store.setLoading(true);
            store.setError(null);
            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])({
                error(err) {
                    store.setLoading(false);
                    store.setError(err);
                },
                complete() {
                    store.setLoading(false);
                },
            }));
        });
    };
}


/***/ }),

/***/ "ADtu":
/*!***********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/products.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/products.service */ "GRt5");
/* harmony import */ var _state_products_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/products.query */ "05AR");
/* harmony import */ var _cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/state/cart.service */ "PiDp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "NMJT");














function ProductsComponent_ng_container_5_app_product_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("add", function ProductsComponent_ng_container_5_app_product_14_Template_app_product_add_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.addProductToCart($event); })("subtract", function ProductsComponent_ng_container_5_app_product_14_Template_app_product_subtract_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.subtract($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r4);
} }
function ProductsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sort by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductsComponent_ng_container_5_app_product_14_Template, 1, 1, "app-product", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.sortControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 3, ctx_r0.products$));
} }
function ProductsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductsComponent {
    constructor(productsService, cartService, productsQuery) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.productsQuery = productsQuery;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.sortControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('title');
    }
    ngOnInit() {
        this.productsService.get().subscribe();
        this.loading$ = this.productsQuery.selectLoading();
        this.products$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.search.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('')), this.sortControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('title'))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([term, sortBy]) => this.productsQuery.getProducts(term, sortBy)));
    }
    addProductToCart({ id }) {
        this.cartService.addProductToCart(id);
    }
    subtract({ id }) {
        this.cartService.subtract(id);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 9, vars: 4, consts: [[1, "padding"], [1, "grey-text", "flex", "align-center"], [1, "large", "material-icons"], [4, "ngIf", "ngIfElse"], ["loadingTpl", ""], [1, "col", "s12"], [1, "browser-default", 3, "formControl"], ["value", "title"], ["value", "price"], [1, "input-field"], [1, "material-icons", "prefix"], ["placeholder", "Search Product..", 3, "formControl"], [1, "mt", "flex"], [3, "product", "add", "subtract", 4, "ngFor", "ngForOf"], [3, "product", "add", "subtract"], [1, "progress"], [1, "indeterminate"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsComponent_ng_container_5_Template, 16, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductsComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.loading$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: `./products.component.html`
            }]
    }], function () { return [{ type: _state_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }, { type: _state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"] }]; }, null); })();


/***/ }),

/***/ "AW4r":
/*!*****************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/state/cart.model.ts ***!
  \*****************************************************************/
/*! exports provided: createCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCartItem", function() { return createCartItem; });
function createCartItem(params) {
    return Object.assign({ total: 0, quantity: 1 }, params);
}


/***/ }),

/***/ "AWF0":
/*!*************************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/create-effect.util.ts ***!
  \*************************************************************/
/*! exports provided: createEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEffect", function() { return createEffect; });
/* harmony import */ var _effect_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effect.utils */ "Nm76");

function createEffect(actions$, options) {
    const effect = actions$();
    options = Object.assign({ dispatch: false }, options);
    Object(_effect_utils__WEBPACK_IMPORTED_MODULE_0__["setMetadata"])(effect, null, options);
    return effect;
}


/***/ }),

/***/ "CKFZ":
/*!**************************************!*\
  !*** ./libs/akita/src/lib/errors.ts ***!
  \**************************************/
/*! exports provided: AkitaError, assertStoreHasName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkitaError", function() { return AkitaError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertStoreHasName", function() { return assertStoreHasName; });
// @internal
class AkitaError extends Error {
    constructor(message) {
        super(message);
    }
}
// @internal
function assertStoreHasName(name, className) {
    if (!name) {
        console.error(`@StoreConfig({ name }) is missing in ${className}`);
    }
}


/***/ }),

/***/ "Devl":
/*!*****************************************!*\
  !*** ./libs/akita/src/lib/cacheable.ts ***!
  \*****************************************/
/*! exports provided: cacheable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheable", function() { return cacheable; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

/**
 *
 * Helper function for checking if we have data in cache
 *
 * export class ProductsService {
 *   constructor(private productsStore: ProductsStore) {}

 *   get(): Observable<void> {
 *     const request = this.http.get().pipe(
 *       tap(this.productsStore.set(response))
 *     );
 *
 *     return cacheable(this.productsStore, request);
 *   }
 * }
 */
function cacheable(store, request$, options = { emitNext: false }) {
    if (store._cache().value) {
        return options.emitNext ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined) : rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
    }
    return request$;
}


/***/ }),

/***/ "Dr0E":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/state/cart.effects.ts ***!
  \*******************************************************************/
/*! exports provided: CartEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartEffects", function() { return CartEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.actions */ "JMny");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.store */ "gtU3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");










class CartEffects {
    constructor(actions$, cartStore) {
        this.actions$ = actions$;
        this.cartStore = cartStore;
        this.removeItem$ = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItem), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(({ productId }) => this.cartStore.remove(productId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((_) => {
            return _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItemSuccess();
        })), { dispatch: true });
        this.removeItemSuccess = this.actions$.pipe(Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItemSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((_) => this.cartStore.notify(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((state) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((_) => this.cartStore.notify(false)))));
    }
}
CartEffects.ɵfac = function CartEffects_Factory(t) { return new (t || CartEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_5__["CartStore"])); };
CartEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartEffects, factory: CartEffects.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CartEffects.prototype, "removeItemSuccess", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _cart_store__WEBPACK_IMPORTED_MODULE_5__["CartStore"] }]; }, { removeItemSuccess: [] }); })();


/***/ }),

/***/ "EJe+":
/*!*******************************************************!*\
  !*** ./libs/akita/src/lib/getInitialEntitiesState.ts ***!
  \*******************************************************/
/*! exports provided: getInitialEntitiesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialEntitiesState", function() { return getInitialEntitiesState; });
// @internal
const getInitialEntitiesState = () => ({
    entities: {},
    ids: [],
    loading: true,
    error: null
});


/***/ }),

/***/ "EZ05":
/*!***********************************************!*\
  !*** ./libs/akita/src/lib/snapshotManager.ts ***!
  \***********************************************/
/*! exports provided: SnapshotManager, snapshotManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapshotManager", function() { return SnapshotManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotManager", function() { return snapshotManager; });
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores */ "40zj");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isString */ "oJ0C");
/* harmony import */ var _persistState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persistState */ "gF6S");
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatchers */ "zqjR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class SnapshotManager {
    /**
     * Get a snapshot of the whole state or a specific stores
     * Use it ONLY for things such as saving the state in the server
     */
    getStoresSnapshot(stores = []) {
        let acc = {};
        const hasInclude = stores.length > 0;
        const keys = hasInclude ? stores : Object.keys(_stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"]);
        for (let i = 0; i < keys.length; i++) {
            let storeName = keys[i];
            if (storeName !== 'router') {
                acc[storeName] = _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][storeName]._value();
            }
        }
        return acc;
    }
    setStoresSnapshot(stores, options) {
        const mergedOptions = Object.assign({ skipStorageUpdate: false, lazy: false }, options);
        mergedOptions.skipStorageUpdate && Object(_persistState__WEBPACK_IMPORTED_MODULE_2__["setSkipStorageUpdate"])(true);
        let normalizedStores = stores;
        if (Object(_isString__WEBPACK_IMPORTED_MODULE_1__["isString"])(stores)) {
            normalizedStores = JSON.parse(normalizedStores);
        }
        const size = Object.keys(normalizedStores).length;
        if (mergedOptions.lazy) {
            _dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$addStore"]
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(name => normalizedStores.hasOwnProperty(name)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(size))
                .subscribe(name => _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][name]._setState(() => normalizedStores[name]));
        }
        else {
            for (let i = 0, keys = Object.keys(normalizedStores); i < keys.length; i++) {
                const storeName = keys[i];
                if (_stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][storeName]) {
                    _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][storeName]._setState(() => normalizedStores[storeName]);
                }
            }
        }
        mergedOptions.skipStorageUpdate && Object(_persistState__WEBPACK_IMPORTED_MODULE_2__["setSkipStorageUpdate"])(false);
    }
}
const snapshotManager = new SnapshotManager();


/***/ }),

/***/ "EdJo":
/*!*************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/tokens.ts ***!
  \*************************************************/
/*! exports provided: _ROOT_EFFECTS, ROOT_EFFECT_INSTANCES, _FEATURE_EFFECTS, FEATURE_EFFECT_INSTANCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ROOT_EFFECTS", function() { return _ROOT_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_EFFECT_INSTANCES", function() { return ROOT_EFFECT_INSTANCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FEATURE_EFFECTS", function() { return _FEATURE_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_EFFECT_INSTANCES", function() { return FEATURE_EFFECT_INSTANCES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _ROOT_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Internal Root Effects');
const ROOT_EFFECT_INSTANCES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Root Effects');
const _FEATURE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Internal Feature Effects');
const FEATURE_EFFECT_INSTANCES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Feature Effects');


/***/ }),

/***/ "F33U":
/*!***********************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/auth.guard.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_auth_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/auth.query */ "N1t3");







class AuthGuard {
    constructor(router, authQuery) {
        this.router = router;
        this.authQuery = authQuery;
    }
    canActivate() {
        // For sync storage
        return this.authQuery.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(isAuth => {
            if (isAuth) {
                return true;
            }
            this.router.navigateByUrl('login');
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        // For async storage
        // return combineLatest([
        //   this.authQuery.isLoggedIn$,
        //   selectPersistStateInit(),
        // ]).pipe(
        //   map(([isAuth]) => {
        //     if(isAuth) {
        //       return true;
        //     }
        //     this.router.navigateByUrl('login');
        //     return false;
        //   }),
        //   take(1)
        // );
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"] }]; }, null); })();


/***/ }),

/***/ "Fen9":
/*!************************************************!*\
  !*** ./libs/akita/src/lib/mapSkipUndefined.ts ***!
  \************************************************/
/*! exports provided: mapSkipUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSkipUndefined", function() { return mapSkipUndefined; });
// @internal
function mapSkipUndefined(arr, callbackFn) {
    return arr.reduce((result, value, index, array) => {
        const val = callbackFn(value, index, array);
        if (val !== undefined) {
            result.push(val);
        }
        return result;
    }, []);
}


/***/ }),

/***/ "GErp":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/queryEntity.ts ***!
  \*******************************************/
/*! exports provided: QueryEntity, EntityUIQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEntity", function() { return QueryEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityUIQuery", function() { return EntityUIQuery; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _arrayFind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayFind */ "8vam");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coerceArray */ "6ukB");
/* harmony import */ var _entitiesToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entitiesToArray */ "JoxY");
/* harmony import */ var _entitiesToMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entitiesToMap */ "5odZ");
/* harmony import */ var _getEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getEntity */ "v4lr");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isArray */ "aDq+");
/* harmony import */ var _isDefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isDefined */ "Y5+g");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony import */ var _mapSkipUndefined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapSkipUndefined */ "Fen9");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./query */ "Rbjf");
/* harmony import */ var _sortByOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sortByOptions */ "yVIH");
/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toBoolean */ "KA1R");















/**
 *
 *  The Entity Query is similar to the general Query, with additional functionality tailored for EntityStores.
 *
 *  class WidgetsQuery extends QueryEntity<WidgetsState> {
 *     constructor(protected store: WidgetsStore) {
 *       super(store);
 *     }
 *  }
 *
 *
 *
 */
class QueryEntity extends _query__WEBPACK_IMPORTED_MODULE_12__["Query"] {
    constructor(store, options = {}) {
        super(store);
        this.options = options;
        this.__store__ = store;
    }
    selectAll(options = {
        asObject: false,
    }) {
        return this.select((state) => state.entities).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => this.getAll(options)));
    }
    getAll(options = { asObject: false, filterBy: undefined, limitTo: undefined }) {
        if (options.asObject) {
            return Object(_entitiesToMap__WEBPACK_IMPORTED_MODULE_5__["entitiesToMap"])(this.getValue(), options);
        }
        Object(_sortByOptions__WEBPACK_IMPORTED_MODULE_13__["sortByOptions"])(options, this.config || this.options);
        return Object(_entitiesToArray__WEBPACK_IMPORTED_MODULE_4__["entitiesToArray"])(this.getValue(), options);
    }
    selectMany(ids, project) {
        if (!ids || !ids.length)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        return this.select((state) => state.entities).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((entities) => Object(_mapSkipUndefined__WEBPACK_IMPORTED_MODULE_11__["mapSkipUndefined"])(ids, (id) => Object(_getEntity__WEBPACK_IMPORTED_MODULE_6__["getEntity"])(id, project)(entities))), Object(_arrayFind__WEBPACK_IMPORTED_MODULE_2__["distinctUntilArrayItemChanged"])());
    }
    selectEntity(idOrPredicate, project) {
        let id = idOrPredicate;
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(idOrPredicate)) {
            // For performance reason we expect the entity to be in the store
            id = Object(_getEntity__WEBPACK_IMPORTED_MODULE_6__["findEntityByPredicate"])(idOrPredicate, this.getValue().entities);
        }
        return this.select((state) => state.entities).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Object(_getEntity__WEBPACK_IMPORTED_MODULE_6__["getEntity"])(id, project)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    /**
     * Get an entity by id
     *
     * @example
     *
     * this.query.getEntity(1);
     */
    getEntity(id) {
        return this.getValue().entities[id];
    }
    /**
     * Select the active entity's id
     *
     * @example
     *
     * this.query.selectActiveId()
     */
    selectActiveId() {
        return this.select((state) => state.active);
    }
    /**
     * Get the active id
     *
     * @example
     *
     * this.query.getActiveId()
     */
    getActiveId() {
        return this.getValue().active;
    }
    selectActive(project) {
        if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(this.getActive())) {
            return this.selectActiveId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((ids) => this.selectMany(ids, project)));
        }
        return this.selectActiveId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((ids) => this.selectEntity(ids, project)));
    }
    getActive() {
        const activeId = this.getActiveId();
        if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(activeId)) {
            return activeId.map((id) => this.getValue().entities[id]);
        }
        return Object(_toBoolean__WEBPACK_IMPORTED_MODULE_14__["toBoolean"])(activeId) ? this.getEntity(activeId) : undefined;
    }
    /**
     * Select the store's entity collection length
     *
     * @example
     *
     * this.query.selectCount()
     * this.query.selectCount(entity => entity.completed)
     */
    selectCount(predicate) {
        return this.select((state) => state.entities).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => this.getCount(predicate)));
    }
    /**
     * Get the store's entity collection length
     *
     * @example
     *
     * this.query.getCount()
     * this.query.getCount(entity => entity.completed)
     */
    getCount(predicate) {
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(predicate)) {
            return this.getAll().filter(predicate).length;
        }
        return this.getValue().ids.length;
    }
    selectLast(project) {
        return this.selectAt((ids) => ids[ids.length - 1], project);
    }
    selectFirst(project) {
        return this.selectAt((ids) => ids[0], project);
    }
    selectEntityAction(actionOrActions) {
        if (Object(_isNil__WEBPACK_IMPORTED_MODULE_10__["isNil"])(actionOrActions)) {
            return this.store.selectEntityAction$;
        }
        const project = Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(actionOrActions) ? (action) => action : ({ ids }) => ids;
        const actions = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_3__["coerceArray"])(actionOrActions);
        return this.store.selectEntityAction$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(({ type }) => actions.includes(type)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => project(action)));
    }
    hasEntity(projectOrIds) {
        if (Object(_isNil__WEBPACK_IMPORTED_MODULE_10__["isNil"])(projectOrIds)) {
            return this.getValue().ids.length > 0;
        }
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(projectOrIds)) {
            return this.getAll().some(projectOrIds);
        }
        if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(projectOrIds)) {
            return projectOrIds.every((id) => id in this.getValue().entities);
        }
        return projectOrIds in this.getValue().entities;
    }
    /**
     * Returns whether entity store has an active entity
     *
     * @example
     *
     * this.query.hasActive()
     * this.query.hasActive(3)
     *
     */
    hasActive(id) {
        const active = this.getValue().active;
        const isIdProvided = Object(_isDefined__WEBPACK_IMPORTED_MODULE_8__["isDefined"])(id);
        if (Array.isArray(active)) {
            if (isIdProvided) {
                return active.includes(id);
            }
            return active.length > 0;
        }
        return isIdProvided ? active === id : Object(_isDefined__WEBPACK_IMPORTED_MODULE_8__["isDefined"])(active);
    }
    /**
     *
     * Create sub UI query for querying Entity's UI state
     *
     * @example
     *
     *
     * export class ProductsQuery extends QueryEntity<ProductsState> {
     *   ui: EntityUIQuery<ProductsUIState>;
     *
     *   constructor(protected store: ProductsStore) {
     *     super(store);
     *     this.createUIQuery();
     *   }
     *
     * }
     */
    createUIQuery() {
        this.ui = new EntityUIQuery(this.__store__.ui);
    }
    selectAt(mapFn, project) {
        return this.select((state) => state.ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(mapFn), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((id) => this.selectEntity(id, project)));
    }
}
// @internal
class EntityUIQuery extends QueryEntity {
    constructor(store) {
        super(store);
    }
}


/***/ }),

/***/ "GRt5":
/*!***************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/state/products.service.ts ***!
  \***************************************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.store */ "/m3n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _products_mocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.mocks */ "Z+wF");








class ProductsService {
    constructor(productsStore) {
        this.productsStore = productsStore;
    }
    get() {
        const request = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(_products_mocks__WEBPACK_IMPORTED_MODULE_5__["products"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => this.productsStore.set(response)));
        return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_4__["cacheable"])(this.productsStore, request);
    }
    getProduct(id) {
        const product = _products_mocks__WEBPACK_IMPORTED_MODULE_5__["products"].find(current => current.id === +id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.productsStore.add(product)));
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_store__WEBPACK_IMPORTED_MODULE_1__["ProductsStore"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _products_store__WEBPACK_IMPORTED_MODULE_1__["ProductsStore"] }]; }, null); })();


/***/ }),

/***/ "GapQ":
/*!*************************************************************!*\
  !*** ./libs/akita-ng-router-store/src/lib/router.module.ts ***!
  \*************************************************************/
/*! exports provided: AkitaNgRouterStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkitaNgRouterStoreModule", function() { return AkitaNgRouterStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.service */ "Sq83");




class AkitaNgRouterStoreModule {
    constructor(routerService) {
        this.routerService = routerService;
        this.routerService.init();
    }
}
AkitaNgRouterStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AkitaNgRouterStoreModule });
AkitaNgRouterStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AkitaNgRouterStoreModule_Factory(t) { return new (t || AkitaNgRouterStoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"])); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaNgRouterStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"] }]; }, null); })();


/***/ }),

/***/ "GjRw":
/*!**************************************************************!*\
  !*** ./apps/angular-store-app/src/app/app-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "F33U");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "4IkZ");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "2EyP");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-page/product-page.component */ "/SVk");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "ADtu");









const routes = [
    {
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
        path: '',
        pathMatch: 'full',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        component: _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__["ProductPageComponent"],
        path: 'product/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"],
        path: 'cart',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        path: 'login',
    },
    {
        path: 'todos',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | todos-app-todos-module */ "todos-app-todos-module").then(__webpack_require__.bind(null, /*! ./todos-app/todos.module */ "wsaO")).then((m) => m.TodosModule),
    },
    {
        path: 'contacts',
        loadChildren: () => __webpack_require__.e(/*! import() | contacts-contacts-module */ "contacts-contacts-module").then(__webpack_require__.bind(null, /*! ./contacts/contacts.module */ "z7DU")).then((m) => m.ContactsModule),
    },
    {
        path: 'stories',
        loadChildren: () => __webpack_require__.e(/*! import() | stories-stories-module */ "stories-stories-module").then(__webpack_require__.bind(null, /*! ./stories/stories.module */ "bnrc")).then((m) => m.StoriesModule),
    },
    {
        path: 'movies',
        loadChildren: () => Promise.all(/*! import() | movies-movies-module */[__webpack_require__.e("default~movies-movies-module~posts-posts-module"), __webpack_require__.e("movies-movies-module")]).then(__webpack_require__.bind(null, /*! ./movies/movies.module */ "hMRL")).then((m) => m.MoviesModule),
    },
    {
        path: 'widgets',
        loadChildren: () => __webpack_require__.e(/*! import() | widgets-widgets-module */ "widgets-widgets-module").then(__webpack_require__.bind(null, /*! ./widgets/widgets.module */ "xLnP")).then((m) => m.WidgetsModule),
    },
    {
        path: 'posts',
        loadChildren: () => Promise.all(/*! import() | posts-posts-module */[__webpack_require__.e("default~movies-movies-module~posts-posts-module"), __webpack_require__.e("posts-posts-module")]).then(__webpack_require__.bind(null, /*! ./posts/posts.module */ "V8DZ")).then((m) => m.PostsModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "H/iu":
/*!*****************************************************************************!*\
  !*** ./libs/akita/src/lib/plugins/stateHistory/entityStateHistoryPlugin.ts ***!
  \*****************************************************************************/
/*! exports provided: EntityStateHistoryPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStateHistoryPlugin", function() { return EntityStateHistoryPlugin; });
/* harmony import */ var _stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateHistoryPlugin */ "gqnR");
/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toBoolean */ "KA1R");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entityCollectionPlugin */ "gUUV");




class EntityStateHistoryPlugin extends _entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_3__["EntityCollectionPlugin"] {
    constructor(query, params = {}) {
        super(query, params.entityIds);
        this.query = query;
        this.params = params;
        params.maxAge = Object(_toBoolean__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(params.maxAge) ? params.maxAge : 10;
        this.activate();
        this.selectIds()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1))
            .subscribe((ids) => this.activate(ids));
    }
    redo(ids) {
        this.forEachId(ids, (e) => e.redo());
    }
    undo(ids) {
        this.forEachId(ids, (e) => e.undo());
    }
    hasPast(id) {
        if (this.hasEntity(id)) {
            return this.getEntity(id).hasPast;
        }
    }
    hasFuture(id) {
        if (this.hasEntity(id)) {
            return this.getEntity(id).hasFuture;
        }
    }
    jumpToFuture(ids, index) {
        this.forEachId(ids, (e) => e.jumpToFuture(index));
    }
    jumpToPast(ids, index) {
        this.forEachId(ids, (e) => e.jumpToPast(index));
    }
    clear(ids, customUpdateFn) {
        this.forEachId(ids, (e) => e.clear(customUpdateFn));
    }
    destroy(ids, clearHistory = false) {
        this.forEachId(ids, (e) => e.destroy(clearHistory));
    }
    ignoreNext(ids) {
        this.forEachId(ids, (e) => e.ignoreNext());
    }
    instantiatePlugin(id) {
        return new _stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_0__["StateHistoryPlugin"](this.query, this.params, id);
    }
}


/***/ }),

/***/ "ILSo":
/*!************************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/auth.module.ts ***!
  \************************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.module */ "ONmh");
/* harmony import */ var _state_auth_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/auth.effects */ "Qqp4");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/akita-ng-effects/src/lib/effect-feature.module */ "roSn");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_3__["AkitaNgEffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_2__["AuthEffects"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_3__["AkitaNgEffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_2__["AuthEffects"]])],
            }]
    }], null, null); })();


/***/ }),

/***/ "J2Ln":
/*!****************************************************************!*\
  !*** ./apps/angular-store-app/src/environments/environment.ts ***!
  \****************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "J5PQ":
/*!**********************************************!*\
  !*** ./libs/akita/src/lib/plugins/plugin.ts ***!
  \**********************************************/
/*! exports provided: AkitaPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkitaPlugin", function() { return AkitaPlugin; });
/* harmony import */ var _filterNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filterNil */ "klkp");
/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toBoolean */ "KA1R");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "LteI");
/* harmony import */ var _getValueByString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getValueByString */ "doWv");
/* harmony import */ var _setValueByString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setValueByString */ "QRUx");





class AkitaPlugin {
    constructor(query, config) {
        this.query = query;
        if (config && config.resetFn) {
            if (Object(_config__WEBPACK_IMPORTED_MODULE_2__["getAkitaConfig"])().resettable) {
                this.onReset(config.resetFn);
            }
        }
    }
    /** This method is responsible for getting access to the query. */
    getQuery() {
        return this.query;
    }
    /** This method is responsible for getting access to the store. */
    getStore() {
        return this.getQuery().__store__;
    }
    /** This method is responsible tells whether the plugin is entityBased or not.  */
    isEntityBased(entityId) {
        return Object(_toBoolean__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(entityId);
    }
    /** This method is responsible for selecting the source; it can be the whole store or one entity. */
    selectSource(entityId, property) {
        if (this.isEntityBased(entityId)) {
            return this.getQuery().selectEntity(entityId).pipe(Object(_filterNil__WEBPACK_IMPORTED_MODULE_0__["filterNilValue"])());
        }
        if (property) {
            return this.getQuery().select((state) => Object(_getValueByString__WEBPACK_IMPORTED_MODULE_3__["getValue"])(state, this.withStoreName(property)));
        }
        return this.getQuery().select();
    }
    getSource(entityId, property) {
        if (this.isEntityBased(entityId)) {
            return this.getQuery().getEntity(entityId);
        }
        const state = this.getQuery().getValue();
        if (property) {
            return Object(_getValueByString__WEBPACK_IMPORTED_MODULE_3__["getValue"])(state, this.withStoreName(property));
        }
        return state;
    }
    withStoreName(prop) {
        return `${this.storeName}.${prop}`;
    }
    get storeName() {
        return this.getStore().storeName;
    }
    /** This method is responsible for updating the store or one entity; it can be the whole store or one entity. */
    updateStore(newState, entityId, property, replace = false) {
        if (this.isEntityBased(entityId)) {
            const store = this.getStore();
            replace ? store.replace(entityId, newState) : store.update(entityId, newState);
        }
        else {
            if (property) {
                this.getStore()._setState((state) => {
                    return Object(_setValueByString__WEBPACK_IMPORTED_MODULE_4__["setValue"])(state, this.withStoreName(property), newState, true);
                });
                return;
            }
            const nextState = replace ? newState : (state) => (Object.assign(Object.assign({}, state), newState));
            this.getStore()._setState(nextState);
        }
    }
    /**
     * Function to invoke upon reset
     */
    onReset(fn) {
        const original = this.getStore().reset;
        this.getStore().reset = (...params) => {
            /** It should run after the plugin destroy method */
            setTimeout(() => {
                original.apply(this.getStore(), params);
                fn();
            });
        };
    }
}


/***/ }),

/***/ "JMny":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/state/cart.actions.ts ***!
  \*******************************************************************/
/*! exports provided: CartActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartActions", function() { return CartActions; });
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");

var CartActions;
(function (CartActions) {
    CartActions.removeItem = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Remove Item', Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["props"])());
    CartActions.removeItemSuccess = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Remove Item Success');
    CartActions.test = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Testing Action');
})(CartActions || (CartActions = {}));
// alternatively
// export const removeItem = createAction("[Cart] Remove Item", payload<{productId: ID}>())


/***/ }),

/***/ "JoxY":
/*!***********************************************!*\
  !*** ./libs/akita/src/lib/entitiesToArray.ts ***!
  \***********************************************/
/*! exports provided: entitiesToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesToArray", function() { return entitiesToArray; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort */ "yKN+");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coerceArray */ "6ukB");



// @internal
function entitiesToArray(state, options) {
    let arr = [];
    const { ids, entities } = state;
    const { filterBy, limitTo, sortBy, sortByOrder } = options;
    for (let i = 0; i < ids.length; i++) {
        const entity = entities[ids[i]];
        if (!filterBy) {
            arr.push(entity);
            continue;
        }
        const toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_2__["coerceArray"])(filterBy);
        const allPass = toArray.every(fn => fn(entity, i));
        if (allPass) {
            arr.push(entity);
        }
    }
    if (sortBy) {
        let _sortBy = Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(sortBy) ? sortBy : Object(_sort__WEBPACK_IMPORTED_MODULE_1__["compareValues"])(sortBy, sortByOrder);
        arr = arr.sort((a, b) => _sortBy(a, b, state));
    }
    const length = Math.min(limitTo || arr.length, arr.length);
    return length === arr.length ? arr : arr.slice(0, length);
}


/***/ }),

/***/ "K/Dx":
/*!***************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/state/products.effects.ts ***!
  \***************************************************************************/
/*! exports provided: ProductsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsEffects", function() { return ProductsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _products_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.store */ "/m3n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








class ProductsEffects {
    constructor(actions$, productsStore) {
        this.actions$ = actions$;
        this.productsStore = productsStore;
        this.allActionsProducts = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((action) => console.log('product effect', action)));
    }
}
ProductsEffects.ɵfac = function ProductsEffects_Factory(t) { return new (t || ProductsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_products_store__WEBPACK_IMPORTED_MODULE_3__["ProductsStore"])); };
ProductsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsEffects, factory: ProductsEffects.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProductsEffects.prototype, "allActionsProducts", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _products_store__WEBPACK_IMPORTED_MODULE_3__["ProductsStore"] }]; }, { allActionsProducts: [] }); })();


/***/ }),

/***/ "KA1R":
/*!*****************************************!*\
  !*** ./libs/akita/src/lib/toBoolean.ts ***!
  \*****************************************/
/*! exports provided: toBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
// @internal
function toBoolean(value) {
    return value != null && `${value}` !== 'false';
}


/***/ }),

/***/ "KdTy":
/*!*****************************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/module-manager.service.ts ***!
  \*****************************************************************/
/*! exports provided: ModuleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleManager", function() { return ModuleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "fZ2q");






class ModuleManager {
    constructor(actions$) {
        this.actions$ = actions$;
        this.effectInstanceSources = new WeakSet();
        this.destroyEffects$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    subscribeToEffects(effectInstance) {
        for (let key in effectInstance) {
            const property = effectInstance[key];
            if (property.isEffect === true) {
                property.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyEffects$)).subscribe((actionOrSkip) => {
                    this.dispatchAction(property, actionOrSkip);
                });
            }
        }
    }
    has(effect) {
        return this.effectInstanceSources.has(effect);
    }
    add(effect) {
        this.effectInstanceSources.add(effect);
    }
    dispatchAction(property, actionOrSkip) {
        if (property.dispatchAction && this.checkAction(actionOrSkip)) {
            this.actions$.dispatch(actionOrSkip);
        }
    }
    checkAction(action) {
        if (action.type) {
            return true;
        }
        throw new TypeError('Make sure to provide a valid action type or set the option {dispatch: false}');
    }
    ngOnDestroy() {
        // modules aren't supposed to be destroyed; might not be needed
        this.destroyEffects$.next();
        this.effectInstanceSources = new WeakSet();
    }
}
ModuleManager.ɵfac = function ModuleManager_Factory(t) { return new (t || ModuleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_actions__WEBPACK_IMPORTED_MODULE_3__["Actions"])); };
ModuleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModuleManager, factory: ModuleManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _actions__WEBPACK_IMPORTED_MODULE_3__["Actions"] }]; }, null); })();


/***/ }),

/***/ "L/Kq":
/*!************************************!*\
  !*** ./libs/akita/src/lib/guid.ts ***!
  \************************************/
/*! exports provided: guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
/**
 * Generate random guid
 *
 * @example
 *
 * {
 *   id: guid()
 * }
 *
 * @remarks this isn't a GUID, but a 10 char random alpha-num
 */
function guid() {
    return Math.random()
        .toString(36)
        .slice(2);
}


/***/ }),

/***/ "LKi4":
/*!******************************************!*\
  !*** ./libs/akita/src/lib/deepFreeze.ts ***!
  \******************************************/
/*! exports provided: deepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepFreeze", function() { return deepFreeze; });
// @internal
function deepFreeze(o) {
    Object.freeze(o);
    const oIsFunction = typeof o === 'function';
    const hasOwnProp = Object.prototype.hasOwnProperty;
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (hasOwnProp.call(o, prop) &&
            (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}


/***/ }),

/***/ "LteI":
/*!**************************************!*\
  !*** ./libs/akita/src/lib/config.ts ***!
  \**************************************/
/*! exports provided: akitaConfig, getAkitaConfig, getGlobalProducerFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "akitaConfig", function() { return akitaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAkitaConfig", function() { return getAkitaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalProducerFn", function() { return getGlobalProducerFn; });
let CONFIG = {
    resettable: false,
    ttl: null,
    producerFn: undefined
};
function akitaConfig(config) {
    CONFIG = Object.assign(Object.assign({}, CONFIG), config);
}
// @internal
function getAkitaConfig() {
    return CONFIG;
}
function getGlobalProducerFn() {
    return CONFIG.producerFn;
}


/***/ }),

/***/ "M7vU":
/*!**********************************************!*\
  !*** ./libs/akita/src/lib/removeEntities.ts ***!
  \**********************************************/
/*! exports provided: removeEntities, removeAllEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntities", function() { return removeEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllEntities", function() { return removeAllEntities; });
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony import */ var _activeState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeState */ "odxm");


// @internal
function removeEntities({ state, ids }) {
    if (Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(ids))
        return removeAllEntities(state);
    const entities = state.entities;
    let newEntities = {};
    for (const id of state.ids) {
        if (ids.includes(id) === false) {
            newEntities[id] = entities[id];
        }
    }
    const newState = Object.assign(Object.assign({}, state), { entities: newEntities, ids: state.ids.filter(current => ids.includes(current) === false) });
    if (Object(_activeState__WEBPACK_IMPORTED_MODULE_1__["hasActiveState"])(state)) {
        newState.active = Object(_activeState__WEBPACK_IMPORTED_MODULE_1__["resolveActiveEntity"])(newState);
    }
    return newState;
}
// @internal
function removeAllEntities(state) {
    return Object.assign(Object.assign({}, state), { entities: {}, ids: [], active: Object(_activeState__WEBPACK_IMPORTED_MODULE_1__["isMultiActiveState"])(state.active) ? [] : null });
}


/***/ }),

/***/ "MduY":
/*!**********************************************!*\
  !*** ./libs/akita/src/lib/updateEntities.ts ***!
  \**********************************************/
/*! exports provided: updateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntities", function() { return updateEntities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _hasEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasEntity */ "dNb/");
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isPlainObject */ "Sr74");




// @internal
function updateEntities({ state, ids, idKey, newStateOrFn, preUpdateEntity, producerFn, onEntityIdChanges }) {
    const updatedEntities = {};
    let isUpdatingIdKey = false;
    let idToUpdate;
    for (const id of ids) {
        // if the entity doesn't exist don't do anything
        if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_2__["hasEntity"])(state.entities, id) === false) {
            continue;
        }
        const oldEntity = state.entities[id];
        let newState;
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(newStateOrFn)) {
            newState = Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(producerFn) ? producerFn(oldEntity, newStateOrFn) : newStateOrFn(oldEntity);
        }
        else {
            newState = newStateOrFn;
        }
        const isIdChanged = newState.hasOwnProperty(idKey) && newState[idKey] !== oldEntity[idKey];
        let newEntity;
        idToUpdate = id;
        if (isIdChanged) {
            isUpdatingIdKey = true;
            idToUpdate = newState[idKey];
        }
        const merged = Object.assign(Object.assign({}, oldEntity), newState);
        if (Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(oldEntity)) {
            newEntity = merged;
        }
        else {
            /**
             * In case that new state is class of it's own, there's
             * a possibility that it will be different than the old
             * class.
             * For example, Old state is an instance of animal class
             * and new state is instance of person class.
             * To avoid run over new person class with the old animal
             * class we check if the new state is a class of it's own.
             * If so, use it. Otherwise, use the old state class
             */
            if (Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(newState)) {
                newEntity = new oldEntity.constructor(merged);
            }
            else {
                newEntity = new newState.constructor(merged);
            }
        }
        updatedEntities[idToUpdate] = preUpdateEntity(oldEntity, newEntity);
    }
    let updatedIds = state.ids;
    let stateEntities = state.entities;
    if (isUpdatingIdKey) {
        const [id] = ids;
        const _a = state.entities, _b = id, deletedEntity = _a[_b], rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        stateEntities = rest;
        updatedIds = state.ids.map((current) => (current === id ? idToUpdate : current));
        onEntityIdChanges(id, idToUpdate);
    }
    return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, stateEntities), updatedEntities), ids: updatedIds });
}


/***/ }),

/***/ "MhGE":
/*!********************************************!*\
  !*** ./apps/angular-store-app/src/main.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "J2Ln");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "tPHU");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["enableAkitaProdMode"])();
}
const storage = Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["persistState"])({
    key: 'akitaPlayground',
    include: ['auth.token', 'todos'],
});
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]([{ provide: 'persistStorage', useValue: storage }]).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "N1t3":
/*!*****************************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/state/auth.query.ts ***!
  \*****************************************************************/
/*! exports provided: AuthQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthQuery", function() { return AuthQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.store */ "OD9W");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");





class AuthQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"] {
    constructor(store) {
        super(store);
        this.store = store;
        this.isLoggedIn$ = this.select(user => !!user.token);
    }
}
AuthQuery.ɵfac = function AuthQuery_Factory(t) { return new (t || AuthQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"])); };
AuthQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthQuery, factory: AuthQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"] }]; }, null); })();


/***/ }),

/***/ "NMJT":
/*!******************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/product/product.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/product", a1]; };
class ProductComponent {
    constructor() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subtract = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, outputs: { add: "add", subtract: "subtract" }, decls: 17, vars: 9, consts: [[1, "card", "p-width"], [1, "card-image", "pointer", 3, "routerLink"], [3, "src"], [1, "card-content", "pointer", 3, "routerLink"], [1, "mbb"], [1, "card-action", "flex", "flex-end"], [1, "btn", "waves-effect", "waves-light", "cyan", "lighten-2", "mr", 3, "click"], [1, "material-icons"], [1, "btn", "waves-effect", "waves-light", "blue-grey", "lighten-3", 3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_11_listener() { return ctx.add.emit(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "exposure_plus_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_14_listener() { return ctx.subtract.emit(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "exposure_neg_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.product.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://via.placeholder.com/359x269?text=", ctx.product.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.product.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.price, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: `./product.component.html`
            }]
    }], null, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], add: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], subtract: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Nm76":
/*!*******************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/effect.utils.ts ***!
  \*******************************************************/
/*! exports provided: setMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMetadata", function() { return setMetadata; });
function setMetadata(effect, propertyName, effectOptions) {
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


/***/ }),

/***/ "OD9W":
/*!*****************************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/state/auth.store.ts ***!
  \*****************************************************************/
/*! exports provided: createInitialState, AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialState", function() { return createInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return AuthStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




function createInitialState() {
    return {
        id: null,
        firstName: '',
        lastName: '',
        token: ''
    };
}
let AuthStore = class AuthStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"] {
    constructor() {
        super(createInitialState());
    }
};
AuthStore.ɵfac = function AuthStore_Factory(t) { return new (t || AuthStore)(); };
AuthStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthStore, factory: AuthStore.ɵfac, providedIn: 'root' });
AuthStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'auth',
        resettable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AuthStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ONmh":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/login/login.module.ts ***!
  \*******************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "4IkZ");





class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "OTOy":
/*!***************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/index.ts ***!
  \***************************************************/
/*! exports provided: mapResponse, NgEntityService, NG_ENTITY_SERVICE_CONFIG, defaultConfig, mergeDeep, NgEntityServiceConfig, HttpMethod, ofType, filterMethod, filterStore, NgEntityServiceNotifier, isID, NgEntityServiceLoader, successAction, errorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ng-entity.service */ "6/9y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapResponse", function() { return _lib_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["mapResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgEntityService", function() { return _lib_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["NgEntityService"]; });

/* harmony import */ var _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ng-entity-service.config */ "sog1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NG_ENTITY_SERVICE_CONFIG", function() { return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["NG_ENTITY_SERVICE_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["defaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgEntityServiceConfig", function() { return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["NgEntityServiceConfig"]; });

/* harmony import */ var _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ng-entity-service-notifier */ "ZY5P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpMethod", function() { return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ofType", function() { return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["ofType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterMethod", function() { return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["filterMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterStore", function() { return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["filterStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgEntityServiceNotifier", function() { return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceNotifier"]; });

/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/helpers */ "Rv9Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isID", function() { return _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["isID"]; });

/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/types */ "pmvp");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ng-entity-service.loader */ "YCCL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgEntityServiceLoader", function() { return _lib_ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_5__["NgEntityServiceLoader"]; });

/* harmony import */ var _lib_action_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/action-factory */ "fRdR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "successAction", function() { return _lib_action_factory__WEBPACK_IMPORTED_MODULE_6__["successAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorAction", function() { return _lib_action_factory__WEBPACK_IMPORTED_MODULE_6__["errorAction"]; });










/***/ }),

/***/ "PK/g":
/*!**********************************************!*\
  !*** ./libs/akita/src/lib/combineQueries.ts ***!
  \**********************************************/
/*! exports provided: combineQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineQueries", function() { return combineQueries; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function combineQueries(observables) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["auditTime"])(0));
}


/***/ }),

/***/ "PaKE":
/*!*************************************************************!*\
  !*** ./apps/angular-store-app/src/app/nav/nav.component.ts ***!
  \*************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/state/auth.service */ "dpu8");
/* harmony import */ var _auth_state_auth_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/state/auth.query */ "N1t3");
/* harmony import */ var _cart_state_cart_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/state/cart.query */ "xv5F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");











function NavComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r4.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
} }
const _c0 = function () { return { hello: "world" }; };
class NavComponent {
    constructor(cartQuery, authService, authQuery, router) {
        this.cartQuery = cartQuery;
        this.authService = authService;
        this.authQuery = authQuery;
        this.router = router;
        this.navItems = ['Todos', 'Contacts', 'Stories', 'Movies', 'Widgets', 'Posts', 'FormsManager'];
        this.count$ = this.cartQuery.selectCount();
        this.isLoggedIn$ = this.authQuery.isLoggedIn$;
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('login');
    }
    resetStores() {
        this.router.navigateByUrl('login');
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_state_cart_query__WEBPACK_IMPORTED_MODULE_4__["CartQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 14, vars: 9, consts: [[1, "nav-wrapper", "cyan", "lighten-2"], ["routerLink", "/", 1, "brand-logo"], ["src", "/assets/akita.svg", 1, "logo"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "blue-text text-lighten-2", "routerLink", "cart", 3, "state"], [1, "new", "badge"], [3, "click"], ["routerLinkActive", "blue-text text-lighten-2", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_li_5_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavComponent_li_7_Template, 3, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.count$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                template: `
    <nav>
      <div class="nav-wrapper cyan lighten-2">
        <a class="brand-logo" routerLink="/">
          <img src="/assets/akita.svg" class="logo" />
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li *ngIf="isLoggedIn$ | async"><a (click)="logout()">Logout</a></li>
          <li *ngFor="let item of navItems">
            <a routerLinkActive="blue-text text-lighten-2" [routerLink]="item.toLowerCase()">{{ item }}</a>
          </li>
          <li>
            <a routerLinkActive="blue-text text-lighten-2" routerLink="cart" [state]="{ hello: 'world' }"
              >Cart <span class="new badge">{{ count$ | async }}</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  `
            }]
    }], function () { return [{ type: _cart_state_cart_query__WEBPACK_IMPORTED_MODULE_4__["CartQuery"] }, { type: _auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _auth_state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "PiDp":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/state/cart.service.ts ***!
  \*******************************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.store */ "gtU3");
/* harmony import */ var _cart_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.query */ "xv5F");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.model */ "AW4r");







class CartService {
    constructor(cartStore, cartQuery) {
        this.cartStore = cartStore;
        this.cartQuery = cartQuery;
    }
    addProductToCart(productId) {
        const findItem = this.cartQuery.getEntity(productId);
        if (!!findItem) {
            return this.cartStore.updateQuantity(productId);
        }
        const item = Object(_cart_model__WEBPACK_IMPORTED_MODULE_3__["createCartItem"])({
            productId
        });
        return this.cartStore.add(item);
    }
    subtract(productId) {
        const findItem = this.cartQuery.getEntity(productId);
        if (!!findItem) {
            if (findItem.quantity === 1) {
                return this.cartStore.remove(productId);
            }
            return this.cartStore.updateQuantity(findItem.productId, -1);
        }
    }
    remove(productId) {
        this.cartStore.remove(productId);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_query__WEBPACK_IMPORTED_MODULE_2__["CartQuery"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"] }, { type: _cart_query__WEBPACK_IMPORTED_MODULE_2__["CartQuery"] }]; }, null); })();


/***/ }),

/***/ "Pvbo":
/*!***********************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/effect.decorator.ts ***!
  \***********************************************************/
/*! exports provided: Effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return Effect; });
/* harmony import */ var _effect_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effect.utils */ "Nm76");

function Effect(options) {
    options = Object.assign({ dispatch: false }, options);
    return function (classProto, propKey) {
        let returnValue;
        Object.defineProperty(classProto, propKey, {
            get: function () {
                return returnValue;
            },
            set: function (value) {
                Object(_effect_utils__WEBPACK_IMPORTED_MODULE_0__["setMetadata"])(value, propKey, options);
                returnValue = value;
            },
            enumerable: true,
        });
    };
}


/***/ }),

/***/ "Q8dH":
/*!***************************************!*\
  !*** ./libs/akita/src/lib/actions.ts ***!
  \***************************************/
/*! exports provided: currentAction, resetCustomAction, logAction, setAction, setSkipAction, action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentAction", function() { return currentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCustomAction", function() { return resetCustomAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logAction", function() { return logAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAction", function() { return setAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSkipAction", function() { return setSkipAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
const currentAction = {
    type: null,
    entityIds: null,
    skip: false,
    payload: null
};
let customActionActive = false;
function resetCustomAction() {
    customActionActive = false;
}
// public API for custom actions. Custom action always wins
function logAction(type, entityIds, payload) {
    setAction(type, entityIds, payload);
    customActionActive = true;
}
function setAction(type, entityIds, payload) {
    if (customActionActive === false) {
        currentAction.type = type;
        currentAction.entityIds = entityIds;
        currentAction.payload = payload;
    }
}
function setSkipAction(skip = true) {
    currentAction.skip = skip;
}
function action(action, entityIds) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            logAction(action, entityIds);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}


/***/ }),

/***/ "QElp":
/*!**********************************************!*\
  !*** ./libs/akita/src/lib/runStoreAction.ts ***!
  \**********************************************/
/*! exports provided: StoreAction, EntityStoreAction, getStore, getStoreByName, getEntityStore, getEntityStoreByName, runStoreAction, runEntityStoreAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreAction", function() { return StoreAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStoreAction", function() { return EntityStoreAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreByName", function() { return getStoreByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityStore", function() { return getEntityStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityStoreByName", function() { return getEntityStoreByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runStoreAction", function() { return runStoreAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runEntityStoreAction", function() { return runEntityStoreAction; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "CKFZ");
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony import */ var _storeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeConfig */ "gySQ");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores */ "40zj");




var StoreAction;
(function (StoreAction) {
    StoreAction["Update"] = "UPDATE";
})(StoreAction || (StoreAction = {}));
const StoreActionMapping = {
    [StoreAction.Update]: 'update',
};
var EntityStoreAction;
(function (EntityStoreAction) {
    EntityStoreAction["Update"] = "UPDATE";
    EntityStoreAction["AddEntities"] = "ADD_ENTITIES";
    EntityStoreAction["SetEntities"] = "SET_ENTITIES";
    EntityStoreAction["UpdateEntities"] = "UPDATE_ENTITIES";
    EntityStoreAction["RemoveEntities"] = "REMOVE_ENTITIES";
    EntityStoreAction["UpsertEntities"] = "UPSERT_ENTITIES";
    EntityStoreAction["UpsertManyEntities"] = "UPSERT_MANY_ENTITIES";
})(EntityStoreAction || (EntityStoreAction = {}));
const EntityStoreActionMapping = {
    [EntityStoreAction.Update]: 'update',
    [EntityStoreAction.AddEntities]: 'add',
    [EntityStoreAction.SetEntities]: 'set',
    [EntityStoreAction.UpdateEntities]: 'update',
    [EntityStoreAction.RemoveEntities]: 'remove',
    [EntityStoreAction.UpsertEntities]: 'upsert',
    [EntityStoreAction.UpsertManyEntities]: 'upsertMany',
};
/**
 * Get a {@link Store} from the global store registry.
 * @param storeClass The {@link Store} class of the instance to be returned.
 */
function getStore(storeClass) {
    return getStoreByName(storeClass[_storeConfig__WEBPACK_IMPORTED_MODULE_2__["configKey"]]['storeName']);
}
/**
 * Get a {@link Store} from the global store registry.
 * @param storeName The {@link Store} name of the instance to be returned.
 */
function getStoreByName(storeName) {
    const store = _stores__WEBPACK_IMPORTED_MODULE_3__["__stores__"][storeName];
    if (Object(_isNil__WEBPACK_IMPORTED_MODULE_1__["isNil"])(store)) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_0__["AkitaError"](`${store.storeName} doesn't exist`);
    }
    return store;
}
/**
 * Get a {@link EntityStore} from the global store registry.
 * @param storeClass The {@link EntityStore} class of the instance to be returned.
 */
function getEntityStore(storeClass) {
    return getStore(storeClass);
}
/**
 * Get a {@link EntityStore} from the global store registry.
 * @param storeName The {@link EntityStore} name of the instance to be returned.
 */
function getEntityStoreByName(storeName) {
    return getStoreByName(storeName);
}
function runStoreAction(storeClassOrName, action, operation) {
    const store = typeof storeClassOrName === 'string' ? getStoreByName(storeClassOrName) : getStore(storeClassOrName);
    operation(store[StoreActionMapping[action]].bind(store));
}
function runEntityStoreAction(storeClassOrName, action, operation) {
    const store = typeof storeClassOrName === 'string' ? getEntityStoreByName(storeClassOrName) : getEntityStore(storeClassOrName);
    operation(store[EntityStoreActionMapping[action]].bind(store));
}


/***/ }),

/***/ "QRUx":
/*!************************************************!*\
  !*** ./libs/akita/src/lib/setValueByString.ts ***!
  \************************************************/
/*! exports provided: setValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "iJBq");

/**
 * @internal
 *
 * @example
 * setValue(state, 'todos.ui', { filter: {} })
 */
function setValue(obj, prop, val, replace = false) {
    const split = prop.split('.');
    if (split.length === 1) {
        return Object.assign(Object.assign({}, obj), val);
    }
    obj = Object.assign({}, obj);
    const lastIndex = split.length - 2;
    const removeStoreName = prop.split('.').slice(1);
    removeStoreName.reduce((acc, part, index) => {
        if (index !== lastIndex) {
            acc[part] = Object.assign({}, acc[part]);
            return acc && acc[part];
        }
        acc[part] = replace || Array.isArray(acc[part]) || !Object(_isObject__WEBPACK_IMPORTED_MODULE_0__["isObject"])(acc[part]) ? val : Object.assign(Object.assign({}, acc[part]), val);
        return acc && acc[part];
    }, obj);
    return obj;
}


/***/ }),

/***/ "Qqp4":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/state/auth.effects.ts ***!
  \*******************************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.store */ "OD9W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








class AuthEffects {
    constructor(actions$, authStore) {
        this.actions$ = actions$;
        this.authStore = authStore;
        this.allActionsAuth = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((action) => console.log('auth effect', action)));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AuthEffects.prototype, "allActionsAuth", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"] }]; }, { allActionsAuth: [] }); })();


/***/ }),

/***/ "Qu3/":
/*!*******************************************************************!*\
  !*** ./libs/akita/src/lib/plugins/dirtyCheck/dirtyCheckPlugin.ts ***!
  \*******************************************************************/
/*! exports provided: dirtyCheckDefaultParams, getNestedPath, DirtyCheckPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirtyCheckDefaultParams", function() { return dirtyCheckDefaultParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedPath", function() { return getNestedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirtyCheckPlugin", function() { return DirtyCheckPlugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin */ "J5PQ");
/* harmony import */ var _queryEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../queryEntity */ "GErp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../isUndefined */ "9NJV");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../coerceArray */ "6ukB");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../isFunction */ "u21x");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "Q8dH");








const dirtyCheckDefaultParams = {
    comparator: (head, current) => JSON.stringify(head) !== JSON.stringify(current),
};
function getNestedPath(nestedObj, path) {
    const pathAsArray = path.split('.');
    return pathAsArray.reduce((obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined), nestedObj);
}
class DirtyCheckPlugin extends _plugin__WEBPACK_IMPORTED_MODULE_0__["AkitaPlugin"] {
    constructor(query, params, _entityId) {
        super(query);
        this.query = query;
        this.params = params;
        this._entityId = _entityId;
        this.dirty = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.active = false;
        this._reset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isDirty$ = this.dirty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.reset$ = this._reset.asObservable();
        this.params = Object.assign(Object.assign({}, dirtyCheckDefaultParams), params);
        if (this.params.watchProperty) {
            const watchProp = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(this.params.watchProperty);
            if (query instanceof _queryEntity__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"] && watchProp.includes('entities') && !watchProp.includes('ids')) {
                watchProp.push('ids');
            }
            this.params.watchProperty = watchProp;
        }
    }
    reset(params = {}) {
        let currentValue = this.head;
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(params.updateFn)) {
            if (this.isEntityBased(this._entityId)) {
                currentValue = params.updateFn(this.head, this.getQuery().getEntity(this._entityId));
            }
            else {
                currentValue = params.updateFn(this.head, this.getQuery().getValue());
            }
        }
        Object(_actions__WEBPACK_IMPORTED_MODULE_7__["logAction"])(`@DirtyCheck - Revert`);
        this.updateStore(currentValue, this._entityId);
        this._reset.next();
    }
    setHead() {
        if (!this.active) {
            this.activate();
            this.active = true;
        }
        else {
            this.head = this._getHead();
        }
        this.updateDirtiness(false);
        return this;
    }
    isDirty() {
        return !!this.dirty.value;
    }
    hasHead() {
        return !!this.getHead();
    }
    destroy() {
        this.head = null;
        this.subscription && this.subscription.unsubscribe();
        this._reset && this._reset.complete();
    }
    isPathDirty(path) {
        const head = this.getHead();
        const current = this.getQuery().getValue();
        const currentPathValue = getNestedPath(current, path);
        const headPathValue = getNestedPath(head, path);
        return this.params.comparator(currentPathValue, headPathValue);
    }
    getHead() {
        return this.head;
    }
    activate() {
        this.head = this._getHead();
        /** if we are tracking specific properties select only the relevant ones */
        const sources = this.params.watchProperty
            ? this.params.watchProperty.map((prop) => this.query
                .select((state) => state[prop])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((val) => ({
                val,
                __akitaKey: prop,
            }))))
            : [this.selectSource(this._entityId)];
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(sources)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1))
            .subscribe((currentState) => {
            if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(this.head))
                return;
            /** __akitaKey is used to determine if we are tracking a specific property or a store change */
            const isChange = currentState.some((state) => {
                const head = state.__akitaKey ? this.head[state.__akitaKey] : this.head;
                const compareTo = state.__akitaKey ? state.val : state;
                return this.params.comparator(head, compareTo);
            });
            this.updateDirtiness(isChange);
        });
    }
    updateDirtiness(isDirty) {
        this.dirty.next(isDirty);
    }
    _getHead() {
        let head = this.getSource(this._entityId);
        if (this.params.watchProperty) {
            head = this.getWatchedValues(head);
        }
        return head;
    }
    getWatchedValues(source) {
        return this.params.watchProperty.reduce((watched, prop) => {
            watched[prop] = source[prop];
            return watched;
        }, {});
    }
}


/***/ }),

/***/ "RK5a":
/*!*********************************************!*\
  !*** ./libs/akita/src/lib/entityActions.ts ***!
  \*********************************************/
/*! exports provided: EntityActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityActions", function() { return EntityActions; });
var EntityActions;
(function (EntityActions) {
    EntityActions["Set"] = "Set";
    EntityActions["Add"] = "Add";
    EntityActions["Update"] = "Update";
    EntityActions["Remove"] = "Remove";
})(EntityActions || (EntityActions = {}));


/***/ }),

/***/ "RPUs":
/*!****************************************!*\
  !*** ./libs/akita/src/lib/arrayAdd.ts ***!
  \****************************************/
/*! exports provided: arrayAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayAdd", function() { return arrayAdd; });
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coerceArray */ "6ukB");

/**
 * Add item to a collection
 *
 * @example
 *
 *
 * store.update(state => ({
 *   comments: arrayAdd(state.comments, { id: 2 })
 * }))
 *
 */
function arrayAdd(arr, newEntity, options = {}) {
    const newEntities = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(newEntity);
    const toArr = arr || [];
    return options.prepend ? [...newEntities, ...toArr] : [...toArr, ...newEntities];
}


/***/ }),

/***/ "Rbjf":
/*!*************************************!*\
  !*** ./libs/akita/src/lib/query.ts ***!
  \*************************************/
/*! exports provided: Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var _queryConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryConfig */ "mKZq");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isString */ "oJ0C");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ "VCUg");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores */ "40zj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _compareKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compareKeys */ "aH7v");







class Query {
    constructor(store) {
        this.store = store;
        this.__store__ = store;
        if (Object(_env__WEBPACK_IMPORTED_MODULE_3__["isDev"])()) {
            // @internal
            _stores__WEBPACK_IMPORTED_MODULE_4__["__queries__"][store.storeName] = this;
        }
    }
    select(project) {
        let mapFn;
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(project)) {
            mapFn = project;
        }
        else if (Object(_isString__WEBPACK_IMPORTED_MODULE_1__["isString"])(project)) {
            mapFn = state => state[project];
        }
        else if (Array.isArray(project)) {
            return this.store
                ._select(state => state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(Object(_compareKeys__WEBPACK_IMPORTED_MODULE_6__["compareKeys"])(project)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(state => {
                if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(project[0])) {
                    return project.map(func => func(state));
                }
                return project.reduce((acc, k) => {
                    acc[k] = state[k];
                    return acc;
                }, {});
            }));
        }
        else {
            mapFn = state => state;
        }
        return this.store._select(mapFn);
    }
    /**
     * Select the loading state
     *
     * @example
     *
     * this.query.selectLoading().subscribe(isLoading => {})
     */
    selectLoading() {
        return this.select(state => state.loading);
    }
    /**
     * Select the error state
     *
     * @example
     *
     * this.query.selectError().subscribe(error => {})
     */
    selectError() {
        return this.select(state => state.error);
    }
    /**
     * Get the store's value
     *
     * @example
     *
     * this.query.getValue()
     *
     */
    getValue() {
        return this.store._value();
    }
    /**
     * Select the cache state
     *
     * @example
     *
     * this.query.selectHasCache().pipe(
     *   switchMap(hasCache => {
     *     return hasCache ? of() : http().pipe(res => store.set(res))
     *   })
     * )
     */
    selectHasCache() {
        return this.store._cache().asObservable();
    }
    /**
     * Whether we've cached data
     *
     * @example
     *
     * this.query.getHasCache()
     *
     */
    getHasCache() {
        return this.store._cache().value;
    }
    // @internal
    get config() {
        return this.constructor[_queryConfig__WEBPACK_IMPORTED_MODULE_0__["queryConfigKey"]];
    }
}


/***/ }),

/***/ "Rv9Z":
/*!*********************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/lib/helpers.ts ***!
  \*********************************************************/
/*! exports provided: isID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isID", function() { return isID; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "cBsy");

function isID(idOrConfig) {
    return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(idOrConfig) || Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["isString"])(idOrConfig);
}


/***/ }),

/***/ "Sq83":
/*!**************************************************************!*\
  !*** ./libs/akita-ng-router-store/src/lib/router.service.ts ***!
  \**************************************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.store */ "/1Ks");
/* harmony import */ var _router_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router.query */ "6t7H");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @datorama/akita */ "cBsy");










class RouterService {
    constructor(routerStore, routerQuery, router) {
        this.routerStore = routerStore;
        this.routerQuery = routerQuery;
        this.router = router;
        this.dispatchTriggeredByRouter = false;
        this.navigationTriggeredByDispatch = false;
    }
    dispatchRouterCancel(event) {
        this.update({ navigationId: event.id });
        this.routerQuery.__navigationCancel.next(event);
    }
    dispatchRouterError(event) {
        this.update({ navigationId: event.id });
        this.routerQuery.__navigationError.next(event);
    }
    dispatchRouterSuccess() {
        this.update(this.lastRouterState);
    }
    init() {
        this.setUpStoreListener();
        this.setUpStateRollbackEvents();
    }
    update(routerState) {
        this.dispatchTriggeredByRouter = true;
        this.routerStore.update((state) => {
            return Object.assign(Object.assign({}, state), routerState);
        });
        this.dispatchTriggeredByRouter = false;
        this.navigationTriggeredByDispatch = false;
    }
    setUpStoreListener() {
        this.routerQuery
            .select((state) => state)
            .subscribe((s) => {
            this.lastRouterState = s;
            this.navigateIfNeeded();
        });
    }
    navigateIfNeeded() {
        if (!this.lastRouterState || !this.lastRouterState.state || this.dispatchTriggeredByRouter) {
            return;
        }
        if (this.router.url !== this.lastRouterState.state.url) {
            this.navigationTriggeredByDispatch = true;
            Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["setSkipAction"])();
            this.router.navigateByUrl(this.lastRouterState.state.url);
        }
    }
    setUpStateRollbackEvents() {
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["GuardsCheckEnd"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ResolveEnd"]) {
                this.lastRouterState = this.serializeRoute(e);
            }
            else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                this.dispatchRouterCancel(e);
            }
            else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                this.dispatchRouterError(e);
            }
            else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && !this.navigationTriggeredByDispatch) {
                this.dispatchRouterSuccess();
            }
        });
    }
    serializeRoute(navigationEvent) {
        let state = navigationEvent.state.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params, data, queryParams, fragment } = state;
        return {
            navigationId: navigationEvent.id,
            state: {
                url: navigationEvent.url,
                urlAfterRedirects: navigationEvent.urlAfterRedirects,
                params,
                queryParams,
                fragment,
                data,
                navigationExtras: this.router.getCurrentNavigation().extras ? this.router.getCurrentNavigation().extras.state : {},
            },
        };
    }
}
RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_router_query__WEBPACK_IMPORTED_MODULE_4__["RouterQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouterService, factory: RouterService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["action"])('Navigation Cancelled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], RouterService.prototype, "dispatchRouterCancel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["action"])('Navigation Error'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], RouterService.prototype, "dispatchRouterError", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["action"])('Navigation Succeeded'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], RouterService.prototype, "dispatchRouterSuccess", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStore"] }, { type: _router_query__WEBPACK_IMPORTED_MODULE_4__["RouterQuery"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { dispatchRouterCancel: [], dispatchRouterError: [], dispatchRouterSuccess: [] }); })();


/***/ }),

/***/ "Sr74":
/*!*********************************************!*\
  !*** ./libs/akita/src/lib/isPlainObject.ts ***!
  \*********************************************/
/*! exports provided: isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toBoolean */ "KA1R");

// @internal
function isPlainObject(value) {
    return Object(_toBoolean__WEBPACK_IMPORTED_MODULE_0__["toBoolean"])(value) && value.constructor.name === 'Object';
}


/***/ }),

/***/ "TPbr":
/*!****************************************!*\
  !*** ./libs/akita/src/lib/isNumber.ts ***!
  \****************************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "aDq+");

// @internal
function isNumber(value) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && value - parseFloat(value) + 1 >= 0;
}


/***/ }),

/***/ "UiMj":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/transaction.ts ***!
  \*******************************************/
/*! exports provided: transactionManager, startBatch, endBatch, isTransactionInProcess, commit, applyTransaction, transaction, withTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionManager", function() { return transactionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBatch", function() { return startBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endBatch", function() { return endBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransactionInProcess", function() { return isTransactionInProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commit", function() { return commit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTransaction", function() { return applyTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTransaction", function() { return withTransaction; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "Q8dH");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



// @internal
const transactionFinished = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
// @internal
const transactionInProcess = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
// @internal
const transactionManager = {
    activeTransactions: 0,
    batchTransaction: null
};
// @internal
function startBatch() {
    if (!isTransactionInProcess()) {
        transactionManager.batchTransaction = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    transactionManager.activeTransactions++;
    transactionInProcess.next(true);
}
// @internal
function endBatch() {
    if (--transactionManager.activeTransactions === 0) {
        transactionManager.batchTransaction.next(true);
        transactionManager.batchTransaction.complete();
        transactionInProcess.next(false);
        transactionFinished.next(true);
    }
}
// @internal
function isTransactionInProcess() {
    return transactionManager.activeTransactions > 0;
}
// @internal
function commit() {
    return transactionManager.batchTransaction ? transactionManager.batchTransaction.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
}
/**
 *  A logical transaction.
 *  Use this transaction to optimize the dispatch of all the stores.
 *  The following code will update the store, BUT  emits only once
 *
 *  @example
 *  applyTransaction(() => {
 *    this.todosStore.add(new Todo(1, title));
 *    this.todosStore.add(new Todo(2, title));
 *  });
 *
 */
function applyTransaction(action, thisArg = undefined) {
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        Object(_actions__WEBPACK_IMPORTED_MODULE_1__["logAction"])('@Transaction');
        endBatch();
    }
}
/**
 *  A logical transaction.
 *  Use this transaction to optimize the dispatch of all the stores.
 *
 *  The following code will update the store, BUT  emits only once.
 *
 *  @example
 *  @transaction
 *  addTodos() {
 *    this.todosStore.add(new Todo(1, title));
 *    this.todosStore.add(new Todo(2, title));
 *  }
 *
 *
 */
function transaction() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            return applyTransaction(() => {
                return originalMethod.apply(this, args);
            }, this);
        };
        return descriptor;
    };
}
/**
 *
 * RxJS custom operator that wraps the callback inside transaction
 *
 * @example
 *
 * return http.get().pipe(
 *    withTransaction(response > {
 *      store.setActive(1);
 *      store.update();
 *      store.updateEntity(1, {});
 *    })
 * )
 *
 */
function withTransaction(next) {
    return function (source) {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(value => applyTransaction(() => next(value))));
    };
}


/***/ }),

/***/ "VCUg":
/*!***********************************!*\
  !*** ./libs/akita/src/lib/env.ts ***!
  \***********************************/
/*! exports provided: __DEV__, enableAkitaProdMode, isDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DEV__", function() { return __DEV__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAkitaProdMode", function() { return enableAkitaProdMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return isDev; });
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ "1Jmr");

let __DEV__ = true;
function enableAkitaProdMode() {
    __DEV__ = false;
    if (_root__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
        delete window.$$stores;
        delete window.$$queries;
    }
}
// @internal
function isDev() {
    return __DEV__;
}


/***/ }),

/***/ "WKK6":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/arrayRemove.ts ***!
  \*******************************************/
/*! exports provided: arrayRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony import */ var _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultIDKey */ "kBYr");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coerceArray */ "6ukB");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject */ "iJBq");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ "YVfT");





/**
 * Remove item from collection
 *
 * @example
 *
 *
 * store.update(state => ({
 *   names: arrayRemove(state.names, ['one', 'second'])
 * }))
 */
function arrayRemove(arr, identifier, idKey = _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"]) {
    let identifiers;
    let filterFn;
    if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(identifier)) {
        filterFn = Object(_not__WEBPACK_IMPORTED_MODULE_4__["not"])(identifier);
    }
    else {
        identifiers = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(identifier);
        filterFn = (current) => {
            return identifiers.includes(Object(_isObject__WEBPACK_IMPORTED_MODULE_2__["isObject"])(current) ? current[idKey] : current) === false;
        };
    }
    if (Array.isArray(arr)) {
        return arr.filter(filterFn);
    }
}


/***/ }),

/***/ "WRE0":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/arrayUpdate.ts ***!
  \*******************************************/
/*! exports provided: arrayUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayUpdate", function() { return arrayUpdate; });
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coerceArray */ "6ukB");
/* harmony import */ var _defaultIDKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultIDKey */ "kBYr");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isObject */ "iJBq");




/**
 * Update item in a collection
 *
 * @example
 *
 *
 * store.update(1, entity => ({
 *   comments: arrayUpdate(entity.comments, 1, { name: 'newComment' })
 * }))
 */
function arrayUpdate(arr, predicateOrIds, obj, idKey = _defaultIDKey__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ID_KEY"]) {
    let condition;
    if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(predicateOrIds)) {
        condition = predicateOrIds;
    }
    else {
        const ids = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(predicateOrIds);
        condition = (item) => ids.includes(Object(_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(item) ? item[idKey] : item) === true;
    }
    const updateFn = (state) => state.map((entity, index) => {
        if (condition(entity, index) === true) {
            return Object(_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(entity)
                ? Object.assign(Object.assign({}, entity), obj) : obj;
        }
        return entity;
    });
    return updateFn(arr);
}


/***/ }),

/***/ "WYxI":
/*!****************************************!*\
  !*** ./libs/akita/src/lib/devtools.ts ***!
  \****************************************/
/*! exports provided: akitaDevtools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "akitaDevtools", function() { return akitaDevtools; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "Q8dH");
/* harmony import */ var _isDefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isDefined */ "Y5+g");
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatchers */ "zqjR");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores */ "40zj");
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capitalize */ "lrWU");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root */ "1Jmr");







let subs = [];
function akitaDevtools(ngZoneOrOptions, options = {}) {
    if (_root__WEBPACK_IMPORTED_MODULE_6__["isNotBrowser"])
        return;
    if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
        return;
    }
    subs.length &&
        subs.forEach((s) => {
            if (s.unsubscribe) {
                s.unsubscribe();
            }
            else {
                s && s();
            }
        });
    const isAngular = ngZoneOrOptions && ngZoneOrOptions['run'];
    if (!isAngular) {
        ngZoneOrOptions = ngZoneOrOptions || {};
        ngZoneOrOptions.run = (cb) => cb();
        options = ngZoneOrOptions;
    }
    const defaultOptions = { name: 'Akita', shallow: true, storesWhitelist: [] };
    const merged = Object.assign({}, defaultOptions, options);
    const storesWhitelist = merged.storesWhitelist;
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(merged);
    let appState = {};
    const isAllowed = (storeName) => {
        if (!storesWhitelist.length) {
            return true;
        }
        return storesWhitelist.indexOf(storeName) > -1;
    };
    subs.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$addStore"].subscribe((storeName) => {
        if (isAllowed(storeName) === false)
            return;
        appState = Object.assign(Object.assign({}, appState), { [storeName]: _stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName]._value() });
        devTools.send({ type: `[${Object(_capitalize__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(storeName)}] - @@INIT` }, appState);
    }));
    subs.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$deleteStore"].subscribe((storeName) => {
        if (isAllowed(storeName) === false)
            return;
        delete appState[storeName];
        devTools.send({ type: `[${storeName}] - Delete Store` }, appState);
    }));
    subs.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$updateStore"].subscribe(({ storeName, action }) => {
        if (isAllowed(storeName) === false)
            return;
        const { type, entityIds, skip } = action, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(action, ["type", "entityIds", "skip"]);
        const payload = rest.payload;
        if (skip) {
            Object(_actions__WEBPACK_IMPORTED_MODULE_1__["setSkipAction"])(false);
            return;
        }
        const store = _stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName];
        if (!store) {
            return;
        }
        if (options.shallow === false && appState[storeName]) {
            const isEqual = JSON.stringify(store._value()) === JSON.stringify(appState[storeName]);
            if (isEqual)
                return;
        }
        appState = Object.assign(Object.assign({}, appState), { [storeName]: store._value() });
        const normalize = Object(_capitalize__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(storeName);
        let msg = Object(_isDefined__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(entityIds) ? `[${normalize}] - ${type} (ids: ${entityIds})` : `[${normalize}] - ${type}`;
        if (options.logTrace) {
            console.group(msg);
            console.trace();
            console.groupEnd();
        }
        if (options.sortAlphabetically) {
            const sortedAppState = Object.keys(appState)
                .sort()
                .reduce((acc, storeName) => {
                acc[storeName] = appState[storeName];
                return acc;
            }, {});
            devTools.send(Object.assign({ type: msg }, payload), sortedAppState);
            return;
        }
        devTools.send(Object.assign({ type: msg }, payload), appState);
    }));
    subs.push(devTools.subscribe((message) => {
        if (message.type === 'DISPATCH') {
            const payloadType = message.payload.type;
            if (payloadType === 'COMMIT') {
                devTools.init(appState);
                return;
            }
            if (message.state) {
                const rootState = JSON.parse(message.state);
                for (let i = 0, keys = Object.keys(rootState); i < keys.length; i++) {
                    const storeName = keys[i];
                    if (_stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName]) {
                        ngZoneOrOptions.run(() => {
                            _stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName]._setState(() => rootState[storeName], false);
                        });
                    }
                }
            }
        }
    }));
}


/***/ }),

/***/ "WjPt":
/*!*********************************************!*\
  !*** ./libs/akita-ng-devtools/src/index.ts ***!
  \*********************************************/
/*! exports provided: DEVTOOLS_OPTIONS, AkitaDevtools, d, init, AkitaNgDevtools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ng-devtools.module */ "5OdB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEVTOOLS_OPTIONS", function() { return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["DEVTOOLS_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkitaDevtools", function() { return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["AkitaDevtools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkitaNgDevtools", function() { return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["AkitaNgDevtools"]; });




/***/ }),

/***/ "Y5+g":
/*!*****************************************!*\
  !*** ./libs/akita/src/lib/isDefined.ts ***!
  \*****************************************/
/*! exports provided: isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNil */ "82/w");

// @internal
function isDefined(val) {
    return Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(val) === false;
}


/***/ }),

/***/ "YBZY":
/*!*********************************************!*\
  !*** ./libs/akita/src/lib/toEntitiesIds.ts ***!
  \*********************************************/
/*! exports provided: toEntitiesIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEntitiesIds", function() { return toEntitiesIds; });
/* harmony import */ var _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultIDKey */ "kBYr");

// @internal
function toEntitiesIds(entities, idKey = _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"]) {
    const ids = [];
    for (const entity of entities) {
        ids.push(entity[idKey]);
    }
    return ids;
}


/***/ }),

/***/ "YCCL":
/*!**************************************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/lib/ng-entity-service.loader.ts ***!
  \**************************************************************************/
/*! exports provided: NgEntityServiceLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEntityServiceLoader", function() { return NgEntityServiceLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-entity-service-notifier */ "ZY5P");






class NgEntityServiceLoader {
    constructor() {
        this.dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.loading$ = this.dispatcher.asObservable();
    }
    dispatch(event) {
        this.dispatcher.next(event);
    }
    loadersFor(name) {
        const filterStore = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(({ storeName }) => (name ? storeName === name : true));
        const filterMethod = (mthd) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(({ method }) => {
            return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(mthd) ? mthd(method) : method === mthd;
        });
        const actionBased = (current) => this.loading$.pipe(filterStore, filterMethod(current), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.loading));
        const idBased = (id, mthd) => this.loading$.pipe(filterStore, filterMethod(mthd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((action) => action.entityId === id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.loading));
        return {
            get$: actionBased(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].GET),
            add$: actionBased(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].POST),
            update$: actionBased((method) => method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PUT || method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PATCH),
            delete$: actionBased(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].DELETE),
            getEntity: (id) => idBased(id, _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].GET),
            updateEntity: (id) => idBased(id, (method) => method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PUT || method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PATCH),
            deleteEntity: (id) => idBased(id, _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].DELETE),
        };
    }
}
NgEntityServiceLoader.ɵfac = function NgEntityServiceLoader_Factory(t) { return new (t || NgEntityServiceLoader)(); };
NgEntityServiceLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgEntityServiceLoader, factory: NgEntityServiceLoader.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgEntityServiceLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "YVfT":
/*!***********************************!*\
  !*** ./libs/akita/src/lib/not.ts ***!
  \***********************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
// @internal
function not(pred) {
    return function (...args) {
        return !pred(...args);
    };
}


/***/ }),

/***/ "Z+wF":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/products/products.mocks.ts ***!
  \*******************************************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
const products = [
    {
        id: 3,
        title: 'Rx',
        description: 'Is a set of libraries to compose asynchronous and event-based programs using observable collections and Array style composition in JavaScript',
        price: 30
    },
    {
        id: 1,
        title: 'JavaScript',
        description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.',
        price: 10
    },
    {
        id: 2,
        title: 'Angular',
        description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
        price: 20
    }
];


/***/ }),

/***/ "ZY5P":
/*!****************************************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/lib/ng-entity-service-notifier.ts ***!
  \****************************************************************************/
/*! exports provided: HttpMethod, ofType, filterMethod, filterStore, NgEntityServiceNotifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMethod", function() { return HttpMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofType", function() { return ofType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterMethod", function() { return filterMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStore", function() { return filterStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEntityServiceNotifier", function() { return NgEntityServiceNotifier; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
const ofType = (type) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((action) => action.type === type);
const filterMethod = (method) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((action) => action.method === method);
const filterStore = (name) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((action) => action.storeName === name);
class NgEntityServiceNotifier {
    constructor() {
        this.dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.action$ = this.dispatcher.asObservable();
    }
    dispatch(event) {
        this.dispatcher.next(event);
    }
}
NgEntityServiceNotifier.ɵfac = function NgEntityServiceNotifier_Factory(t) { return new (t || NgEntityServiceNotifier)(); };
NgEntityServiceNotifier.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgEntityServiceNotifier, factory: NgEntityServiceNotifier.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgEntityServiceNotifier, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "aDq+":
/*!***************************************!*\
  !*** ./libs/akita/src/lib/isArray.ts ***!
  \***************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
// @internal
function isArray(value) {
    return Array.isArray(value);
}


/***/ }),

/***/ "aH7v":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/compareKeys.ts ***!
  \*******************************************/
/*! exports provided: compareKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareKeys", function() { return compareKeys; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "u21x");

function compareKeys(keysOrFuncs) {
    return function (prevState, currState) {
        const isFns = Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(keysOrFuncs[0]);
        // Return when they are NOT changed
        return keysOrFuncs.some(keyOrFunc => {
            if (isFns) {
                return keyOrFunc(prevState) !== keyOrFunc(currState);
            }
            return prevState[keyOrFunc] !== currState[keyOrFunc];
        }) === false;
    };
}


/***/ }),

/***/ "al6x":
/*!********************************************!*\
  !*** ./libs/akita-ng-effects/src/index.ts ***!
  \********************************************/
/*! exports provided: Actions, AkitaNgEffectsModule, EffectsRootModule, Effect, createEffect, createAction, props, payload, ofType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/actions */ "fZ2q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_0__["Actions"]; });

/* harmony import */ var _lib_akita_ng_effects_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/akita-ng-effects.module */ "8p+e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkitaNgEffectsModule", function() { return _lib_akita_ng_effects_module__WEBPACK_IMPORTED_MODULE_1__["AkitaNgEffectsModule"]; });

/* harmony import */ var _lib_effect_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/effect-root.module */ "phQS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectsRootModule", function() { return _lib_effect_root_module__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"]; });

/* harmony import */ var _lib_effect_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/effect.decorator */ "Pvbo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return _lib_effect_decorator__WEBPACK_IMPORTED_MODULE_3__["Effect"]; });

/* harmony import */ var _lib_create_effect_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/create-effect.util */ "AWF0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEffect", function() { return _lib_create_effect_util__WEBPACK_IMPORTED_MODULE_4__["createEffect"]; });

/* harmony import */ var ts_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-action */ "/gWv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return ts_action__WEBPACK_IMPORTED_MODULE_5__["action"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "props", function() { return ts_action__WEBPACK_IMPORTED_MODULE_5__["props"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payload", function() { return ts_action__WEBPACK_IMPORTED_MODULE_5__["payload"]; });

/* harmony import */ var ts_action_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-action-operators */ "SdWQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ofType", function() { return ts_action_operators__WEBPACK_IMPORTED_MODULE_6__["ofType"]; });










/***/ }),

/***/ "aw1X":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/arrayUpsert.ts ***!
  \*******************************************/
/*! exports provided: arrayUpsert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayUpsert", function() { return arrayUpsert; });
/* harmony import */ var _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultIDKey */ "kBYr");
/* harmony import */ var _arrayAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayAdd */ "RPUs");
/* harmony import */ var _arrayUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayUpdate */ "WRE0");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isObject */ "iJBq");




/**
 * Upsert item in a collection
 *
 * @example
 *
 *
 * store.update(1, entity => ({
 *   comments: arrayUpsert(entity.comments, 1, { name: 'newComment' })
 * }))
 */
function arrayUpsert(arr, id, obj, idKey = _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"]) {
    const entityIsObject = Object(_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(obj);
    const entityExists = arr.some(entity => (entityIsObject ? entity[idKey] === id : entity === id));
    if (entityExists) {
        return Object(_arrayUpdate__WEBPACK_IMPORTED_MODULE_2__["arrayUpdate"])(arr, id, obj, idKey);
    }
    else {
        return Object(_arrayAdd__WEBPACK_IMPORTED_MODULE_1__["arrayAdd"])(arr, entityIsObject ? Object.assign(Object.assign({}, obj), { [idKey]: id }) : obj);
    }
}


/***/ }),

/***/ "b89F":
/*!**********************************************!*\
  !*** ./libs/akita/src/lib/trackIdChanges.ts ***!
  \**********************************************/
/*! exports provided: trackIdChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackIdChanges", function() { return trackIdChanges; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


/**
 * Track id updates of an entity and re-evaluation the query with the changed entity id.
 * Hint: Don't place the operator after other operators in the same pipeline as those will be skipped on
 * re-evaluation. Also, it can't be used with the selection operator, e.g <code>selectEntity(1, e => e.title)</code>
 * @param query The query from which the entity is selected.
 * @example
 *
 *   query.selectEntity(1).pipe(trackIdChanges(query)).subscribe(entity => { ... })
 *
 */
function trackIdChanges(query) {
    return (source) => source.lift(new TrackIdChanges(query));
}
class TrackIdChanges {
    constructor(query) {
        this.query = query;
    }
    call(subscriber, source) {
        return source
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((entity) => {
            let currId = entity[this.query.__store__.config.idKey];
            let pending = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ newId: undefined, oldId: currId, pending: false }), this.query.__store__.selectEntityIdChanges$).pipe(
            // the new id must differ form the old id
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((change) => change.oldId === currId), 
            // extract the current pending state of the id update
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((change) => (pending = change.pending)), 
            // only update the selection query if the id update is already applied to the store
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((change) => change.newId !== currId && !pending), 
            // build a selection query for the new entity id
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((change) => this.query
                .selectEntity((currId = change.newId || currId))
                // skip undefined value if pending.
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => !pending))));
        }))
            .subscribe(subscriber);
    }
}


/***/ }),

/***/ "cBsy":
/*!*********************************!*\
  !*** ./libs/akita/src/index.ts ***!
  \*********************************/
/*! exports provided: action, currentAction, logAction, resetCustomAction, setAction, setSkipAction, getExitingActives, hasActiveState, isMultiActiveState, resolveActiveEntity, addEntities, arrayAdd, arrayFind, distinctUntilArrayItemChanged, find, arrayRemove, arrayToggle, byId, byKey, arrayUpdate, arrayUpsert, cacheable, coerceArray, combineQueries, akitaConfig, getAkitaConfig, DEFAULT_ID_KEY, akitaDevtools, $$deleteStore, $$addStore, $$updateStore, dispatchDeleted, dispatchAdded, dispatchUpdate, entitiesToArray, entitiesToMap, EntityActions, EntityService, EntityStore, EntityUIStore, enableAkitaProdMode, isDev, __DEV__, filterNil, filterNilValue, createEntityQuery, createEntityStore, createQuery, createStore, getActiveEntities, getInitialEntitiesState, getValue, guid, hasEntity, isArray, isDefined, isEmpty, isFunction, isNil, isNumber, isObject, isPlainObject, isString, isUndefined, persistState, selectPersistStateInit, dirtyCheckDefaultParams, DirtyCheckPlugin, getNestedPath, EntityDirtyCheckPlugin, EntityCollectionPlugin, Paginator, PaginatorPlugin, PersistNgFormPlugin, AkitaPlugin, EntityStateHistoryPlugin, StateHistoryPlugin, Query, QueryConfig, queryConfigKey, EntityUIQuery, QueryEntity, removeAllEntities, removeEntities, resetStores, isNotBrowser, EntityStoreAction, getEntityStore, getEntityStoreByName, getStore, getStoreByName, runEntityStoreAction, runStoreAction, StoreAction, isEntityState, setEntities, setLoading, setLoadingAndError, setValue, SnapshotManager, snapshotManager, compareValues, Order, sortByOptions, Store, configKey, StoreConfig, __stores__, toBoolean, toEntitiesIds, toEntitiesObject, trackIdChanges, applyTransaction, commit, endBatch, isTransactionInProcess, startBatch, transaction, transactionManager, withTransaction, updateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "4F+6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "action", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["action"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["currentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["logAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCustomAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["resetCustomAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSkipAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setSkipAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExitingActives", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getExitingActives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasActiveState", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["hasActiveState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMultiActiveState", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isMultiActiveState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveActiveEntity", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["resolveActiveEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEntities", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["addEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayAdd", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayFind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilArrayItemChanged", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["distinctUntilArrayItemChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayToggle", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byId", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["byId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byKey", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["byKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayUpdate", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayUpsert", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayUpsert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheable", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["cacheable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["coerceArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineQueries", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["combineQueries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "akitaConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["akitaConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAkitaConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getAkitaConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ID_KEY", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "akitaDevtools", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["akitaDevtools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$deleteStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["$$deleteStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$addStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["$$addStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$updateStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["$$updateStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchDeleted", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dispatchDeleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchAdded", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dispatchAdded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchUpdate", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dispatchUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitiesToArray", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["entitiesToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitiesToMap", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["entitiesToMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityActions", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityUIStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityUIStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableAkitaProdMode", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["enableAkitaProdMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isDev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DEV__", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["__DEV__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNil", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["filterNil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNilValue", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["filterNilValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntityQuery", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createEntityQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntityStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createEntityStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createQuery", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveEntities", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getActiveEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialEntitiesState", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getInitialEntitiesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["guid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasEntity", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["hasEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isNil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "persistState", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["persistState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPersistStateInit", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["selectPersistStateInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirtyCheckDefaultParams", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dirtyCheckDefaultParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirtyCheckPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["DirtyCheckPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNestedPath", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getNestedPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityDirtyCheckPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityDirtyCheckPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityCollectionPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Paginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["PaginatorPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistNgFormPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["PersistNgFormPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkitaPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["AkitaPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityStateHistoryPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityStateHistoryPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateHistoryPlugin", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["StateHistoryPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["QueryConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryConfigKey", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["queryConfigKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityUIQuery", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityUIQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryEntity", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAllEntities", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["removeAllEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEntities", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["removeEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetStores", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["resetStores"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotBrowser", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isNotBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityStoreAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityStoreAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getEntityStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityStoreByName", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getEntityStoreByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoreByName", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getStoreByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runEntityStoreAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["runEntityStoreAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runStoreAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["runStoreAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreAction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["StoreAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEntityState", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isEntityState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEntities", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoadingAndError", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setLoadingAndError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnapshotManager", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["SnapshotManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotManager", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["snapshotManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareValues", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["compareValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Order"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortByOptions", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["sortByOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configKey", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["configKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["StoreConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__stores__", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["__stores__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toEntitiesIds", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toEntitiesIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toEntitiesObject", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toEntitiesObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackIdChanges", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["trackIdChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyTransaction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["applyTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commit", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["commit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endBatch", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["endBatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTransactionInProcess", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isTransactionInProcess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBatch", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["startBatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["transaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionManager", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["transactionManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTransaction", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["withTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateEntities", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["updateEntities"]; });




/***/ }),

/***/ "dNb/":
/*!*****************************************!*\
  !*** ./libs/akita/src/lib/hasEntity.ts ***!
  \*****************************************/
/*! exports provided: hasEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEntity", function() { return hasEntity; });
// @internal
function hasEntity(entities, id) {
    return entities.hasOwnProperty(id);
}


/***/ }),

/***/ "doWv":
/*!************************************************!*\
  !*** ./libs/akita/src/lib/getValueByString.ts ***!
  \************************************************/
/*! exports provided: getValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/**
 * @internal
 *
 * @example
 *
 * getValue(state, 'todos.ui')
 *
 */
function getValue(obj, prop) {
    /** return the whole state  */
    if (prop.split('.').length === 1) {
        return obj;
    }
    const removeStoreName = prop
        .split('.')
        .slice(1)
        .join('.');
    return removeStoreName.split('.').reduce((acc, part) => acc && acc[part], obj);
}


/***/ }),

/***/ "dpu8":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/auth/state/auth.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthService, simulateRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simulateRequest", function() { return simulateRequest; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.store */ "OD9W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






class AuthService {
    constructor(authStore) {
        this.authStore = authStore;
    }
    login(creds) {
        return simulateRequest(creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(user => this.authStore.update(user)));
    }
    logout() {
        this.authStore.reset();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"] }]; }, null); })();
function simulateRequest(creds) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(400).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])({
        id: 1,
        firstName: 'Netanel',
        lastName: 'Basal',
        token: 'token'
    }));
}


/***/ }),

/***/ "fLeU":
/*!*****************************************************************************!*\
  !*** ./apps/angular-store-app/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "fLeU";

/***/ }),

/***/ "fRdR":
/*!****************************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/lib/action-factory.ts ***!
  \****************************************************************/
/*! exports provided: successAction, errorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successAction", function() { return successAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorAction", function() { return errorAction; });
function successAction(storeName, notifier) {
    return function ({ payload, method, successMsg }) {
        notifier.dispatch({
            type: 'success',
            storeName,
            payload,
            method,
            successMsg
        });
    };
}
function errorAction(storeName, notifier) {
    return function ({ payload, method, errorMsg }) {
        notifier.dispatch({
            type: 'error',
            storeName,
            payload,
            method,
            errorMsg
        });
    };
}


/***/ }),

/***/ "fVEQ":
/*!*************************************************!*\
  !*** ./libs/akita/src/lib/getActiveEntities.ts ***!
  \*************************************************/
/*! exports provided: getActiveEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveEntities", function() { return getActiveEntities; });
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "iJBq");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray */ "aDq+");



// @internal
function getActiveEntities(idOrOptions, ids, currentActive) {
    let result;
    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(idOrOptions)) {
        result = idOrOptions;
    }
    else {
        if (Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(idOrOptions)) {
            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(currentActive))
                return;
            idOrOptions = Object.assign({ wrap: true }, idOrOptions);
            const currentIdIndex = ids.indexOf(currentActive);
            if (idOrOptions.prev) {
                const isFirst = currentIdIndex === 0;
                if (isFirst && !idOrOptions.wrap)
                    return;
                result = isFirst ? ids[ids.length - 1] : ids[currentIdIndex - 1];
            }
            else if (idOrOptions.next) {
                const isLast = ids.length === currentIdIndex + 1;
                if (isLast && !idOrOptions.wrap)
                    return;
                result = isLast ? ids[0] : ids[currentIdIndex + 1];
            }
        }
        else {
            if (idOrOptions === currentActive)
                return;
            result = idOrOptions;
        }
    }
    return result;
}


/***/ }),

/***/ "fWdh":
/*!************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/cart.module.ts ***!
  \************************************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "2EyP");




const publicApi = [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]];
class CartModule {
}
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartModule_Factory(t) { return new (t || CartModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [publicApi],
                exports: [publicApi]
            }]
    }], null, null); })();


/***/ }),

/***/ "fZ2q":
/*!**************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/actions.ts ***!
  \**************************************************/
/*! exports provided: Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @datorama/akita */ "cBsy");





class Actions extends rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"] {
    dispatch(value) {
        this.logAction(value);
        this.next(value);
    }
    logAction(value) {
        const { type } = value, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(value, ["type"]);
        const hasPayload = Object.getOwnPropertyNames(props).length > 0;
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["logAction"])(type, null, hasPayload ? props : null);
    }
}
Actions.ɵfac = function Actions_Factory(t) { return ɵActions_BaseFactory(t || Actions); };
Actions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Actions, factory: Actions.ɵfac, providedIn: 'root' });
const ɵActions_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Actions);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Actions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "gF6S":
/*!********************************************!*\
  !*** ./libs/akita/src/lib/persistState.ts ***!
  \********************************************/
/*! exports provided: selectPersistStateInit, setSkipStorageUpdate, getSkipStorageUpdate, persistState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPersistStateInit", function() { return selectPersistStateInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSkipStorageUpdate", function() { return setSkipStorageUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkipStorageUpdate", function() { return getSkipStorageUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistState", function() { return persistState; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "Q8dH");
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatchers */ "zqjR");
/* harmony import */ var _getValueByString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getValueByString */ "doWv");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isObject */ "iJBq");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root */ "1Jmr");
/* harmony import */ var _setValueByString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setValueByString */ "QRUx");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stores */ "40zj");











let skipStorageUpdate = false;
const _persistStateInit = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
function selectPersistStateInit() {
    return _persistStateInit.asObservable();
}
function setSkipStorageUpdate(skip) {
    skipStorageUpdate = skip;
}
function getSkipStorageUpdate() {
    return skipStorageUpdate;
}
function isPromise(v) {
    return v && Object(_isFunction__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(v.then);
}
function observify(asyncOrValue) {
    if (isPromise(asyncOrValue) || Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(asyncOrValue)) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(asyncOrValue);
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(asyncOrValue);
}
function persistState(params) {
    const defaults = {
        key: 'AkitaStores',
        enableInNonBrowser: false,
        storage: !Object(_root__WEBPACK_IMPORTED_MODULE_8__["hasLocalStorage"])() ? params.storage : localStorage,
        deserialize: JSON.parse,
        serialize: JSON.stringify,
        include: [],
        select: [],
        persistOnDestroy: false,
        preStorageUpdate: function (storeName, state) {
            return state;
        },
        preStoreUpdate: function (storeName, state) {
            return state;
        },
        skipStorageUpdate: getSkipStorageUpdate,
        preStorageUpdateOperator: () => (source) => source,
    };
    const { storage, enableInNonBrowser, deserialize, serialize, include, select, key, preStorageUpdate, persistOnDestroy, preStorageUpdateOperator, preStoreUpdate, skipStorageUpdate } = Object.assign({}, defaults, params);
    if ((_root__WEBPACK_IMPORTED_MODULE_8__["isNotBrowser"] && !enableInNonBrowser) || !storage)
        return;
    const hasInclude = include.length > 0;
    const hasSelect = select.length > 0;
    let includeStores;
    let selectStores;
    if (hasInclude) {
        includeStores = include.reduce((acc, path) => {
            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(path)) {
                acc.fns.push(path);
            }
            else {
                const storeName = path.split('.')[0];
                acc[storeName] = path;
            }
            return acc;
        }, { fns: [] });
    }
    if (hasSelect) {
        selectStores = select.reduce((acc, selectFn) => {
            acc[selectFn.storeName] = selectFn;
            return acc;
        }, {});
    }
    let stores = {};
    let acc = {};
    let subscriptions = [];
    const buffer = [];
    function _save(v) {
        observify(v).subscribe(() => {
            const next = buffer.shift();
            next && _save(next);
        });
    }
    // when we use the local/session storage we perform the serialize, otherwise we let the passed storage implementation to do it
    const isLocalStorage = (Object(_root__WEBPACK_IMPORTED_MODULE_8__["hasLocalStorage"])() && storage === localStorage) || (Object(_root__WEBPACK_IMPORTED_MODULE_8__["hasSessionStorage"])() && storage === sessionStorage);
    observify(storage.getItem(key)).subscribe((value) => {
        let storageState = Object(_isObject__WEBPACK_IMPORTED_MODULE_7__["isObject"])(value) ? value : deserialize(value || '{}');
        function save(storeCache) {
            storageState['$cache'] = Object.assign(Object.assign({}, (storageState['$cache'] || {})), storeCache);
            storageState = Object.assign({}, storageState, acc);
            buffer.push(storage.setItem(key, isLocalStorage ? serialize(storageState) : storageState));
            _save(buffer.shift());
        }
        function subscribe(storeName, path) {
            stores[storeName] = _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName]
                ._select((state) => Object(_getValueByString__WEBPACK_IMPORTED_MODULE_4__["getValue"])(state, path))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((store) => {
                if (hasSelect && selectStores[storeName]) {
                    return selectStores[storeName](store);
                }
                return store;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => skipStorageUpdate() === false), preStorageUpdateOperator())
                .subscribe((data) => {
                acc[storeName] = preStorageUpdate(storeName, data);
                Promise.resolve().then(() => save({ [storeName]: _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName]._cache().getValue() }));
            });
        }
        function setInitial(storeName, store, path) {
            if (storeName in storageState) {
                Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('@PersistState');
                store._setState((state) => {
                    return Object(_setValueByString__WEBPACK_IMPORTED_MODULE_9__["setValue"])(state, path, preStoreUpdate(storeName, storageState[storeName], state));
                });
                const hasCache = storageState['$cache'] ? storageState['$cache'][storeName] : false;
                _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName].setHasCache(hasCache, { restartTTL: true });
            }
        }
        subscriptions.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$deleteStore"].subscribe((storeName) => {
            if (stores[storeName]) {
                if (persistOnDestroy === false) {
                    save({ [storeName]: false });
                }
                stores[storeName].unsubscribe();
                delete stores[storeName];
            }
        }));
        subscriptions.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$addStore"].subscribe((storeName) => {
            if (storeName === 'router') {
                return;
            }
            const store = _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName];
            if (hasInclude) {
                let path = includeStores[storeName];
                if (!path) {
                    const passPredicate = includeStores.fns.some((fn) => fn(storeName));
                    if (passPredicate) {
                        path = storeName;
                    }
                    else {
                        return;
                    }
                }
                setInitial(storeName, store, path);
                subscribe(storeName, path);
            }
            else {
                setInitial(storeName, store, storeName);
                subscribe(storeName, storeName);
            }
        }));
        _persistStateInit.next();
    });
    return {
        destroy() {
            subscriptions.forEach((s) => s.unsubscribe());
            for (let i = 0, keys = Object.keys(stores); i < keys.length; i++) {
                const storeName = keys[i];
                stores[storeName].unsubscribe();
            }
            stores = {};
        },
        clear() {
            storage.clear();
        },
        clearStore(storeName) {
            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_6__["isNil"])(storeName)) {
                const value = observify(storage.setItem(key, '{}'));
                value.subscribe();
                return;
            }
            const value = storage.getItem(key);
            observify(value).subscribe((v) => {
                const storageState = deserialize(v || '{}');
                if (storageState[storeName]) {
                    delete storageState[storeName];
                    const value = observify(storage.setItem(key, serialize(storageState)));
                    value.subscribe();
                }
            });
        },
    };
}


/***/ }),

/***/ "gUUV":
/*!**************************************************************!*\
  !*** ./libs/akita/src/lib/plugins/entityCollectionPlugin.ts ***!
  \**************************************************************/
/*! exports provided: EntityCollectionPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityCollectionPlugin", function() { return EntityCollectionPlugin; });
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isUndefined */ "9NJV");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coerceArray */ "6ukB");
/* harmony import */ var _toBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toBoolean */ "KA1R");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isFunction */ "u21x");




/**
 * Each plugin that wants to add support for entities should extend this interface.
 */
class EntityCollectionPlugin {
    constructor(query, entityIds) {
        this.query = query;
        this.entityIds = entityIds;
        this.entities = new Map();
    }
    /**
     * Get the entity plugin instance.
     */
    getEntity(id) {
        return this.entities.get(id);
    }
    /**
     * Whether the entity plugin exist.
     */
    hasEntity(id) {
        return this.entities.has(id);
    }
    /**
     * Remove the entity plugin instance.
     */
    removeEntity(id) {
        this.destroy(id);
        return this.entities.delete(id);
    }
    /**
     * Set the entity plugin instance.
     */
    createEntity(id, plugin) {
        return this.entities.set(id, plugin);
    }
    /**
     * If the user passes `entityIds` we take them; otherwise, we take all.
     */
    getIds() {
        return Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(this.entityIds) ? this.query.getValue().ids : Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(this.entityIds);
    }
    /**
     * When you call one of the plugin methods, you can pass id/ids or undefined which means all.
     */
    resolvedIds(ids) {
        return Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(ids) ? this.getIds() : Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(ids);
    }
    /**
     * Call this method when you want to activate the plugin on init or when you need to listen to add/remove of entities dynamically.
     *
     * For example in your plugin you may do the following:
     *
     * this.query.select(state => state.ids).pipe(skip(1)).subscribe(ids => this.activate(ids));
     */
    rebase(ids, actions = {}) {
        /**
         *
         * If the user passes `entityIds` & we have new ids check if we need to add/remove instances.
         *
         * This phase will be called only upon update.
         */
        if (Object(_toBoolean__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(ids)) {
            /**
             * Which means all
             */
            if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(this.entityIds)) {
                for (let i = 0, len = ids.length; i < len; i++) {
                    const entityId = ids[i];
                    if (this.hasEntity(entityId) === false) {
                        Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeAdd) && actions.beforeAdd(entityId);
                        const plugin = this.instantiatePlugin(entityId);
                        this.entities.set(entityId, plugin);
                        Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.afterAdd) && actions.afterAdd(plugin);
                    }
                }
                this.entities.forEach((plugin, entityId) => {
                    if (ids.indexOf(entityId) === -1) {
                        Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeRemove) && actions.beforeRemove(plugin);
                        this.removeEntity(entityId);
                    }
                });
            }
            else {
                /**
                 * Which means the user passes specific ids
                 */
                const _ids = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(this.entityIds);
                for (let i = 0, len = _ids.length; i < len; i++) {
                    const entityId = _ids[i];
                    /** The Entity in current ids and doesn't exist, add it. */
                    if (ids.indexOf(entityId) > -1 && this.hasEntity(entityId) === false) {
                        Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeAdd) && actions.beforeAdd(entityId);
                        const plugin = this.instantiatePlugin(entityId);
                        this.entities.set(entityId, plugin);
                        Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.afterAdd) && actions.afterAdd(plugin);
                    }
                    else {
                        this.entities.forEach((plugin, entityId) => {
                            /** The Entity not in current ids and exists, remove it. */
                            if (ids.indexOf(entityId) === -1 && this.hasEntity(entityId) === true) {
                                Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeRemove) && actions.beforeRemove(plugin);
                                this.removeEntity(entityId);
                            }
                        });
                    }
                }
            }
        }
        else {
            /**
             * Otherwise, start with the provided ids or all.
             */
            this.getIds().forEach(id => {
                if (!this.hasEntity(id))
                    this.createEntity(id, this.instantiatePlugin(id));
            });
        }
    }
    /**
     * Listen for add/remove entities.
     */
    selectIds() {
        return this.query.select(state => state.ids);
    }
    /**
     * Base method for activation, you can override it if you need to.
     */
    activate(ids) {
        this.rebase(ids);
    }
    /**
     * Loop over each id and invoke the plugin method.
     */
    forEachId(ids, cb) {
        const _ids = this.resolvedIds(ids);
        for (let i = 0, len = _ids.length; i < len; i++) {
            const id = _ids[i];
            if (this.hasEntity(id)) {
                cb(this.getEntity(id));
            }
        }
    }
}


/***/ }),

/***/ "gqnR":
/*!***********************************************************************!*\
  !*** ./libs/akita/src/lib/plugins/stateHistory/stateHistoryPlugin.ts ***!
  \***********************************************************************/
/*! exports provided: StateHistoryPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateHistoryPlugin", function() { return StateHistoryPlugin; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin */ "J5PQ");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "Q8dH");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../isFunction */ "u21x");





class StateHistoryPlugin extends _plugin__WEBPACK_IMPORTED_MODULE_2__["AkitaPlugin"] {
    constructor(query, params = {}, _entityId) {
        super(query, {
            resetFn: () => this.clear(),
        });
        this.query = query;
        this.params = params;
        this._entityId = _entityId;
        /** Allow skipping an update from outside */
        this.skip = false;
        this.history = {
            past: [],
            present: null,
            future: [],
        };
        /** Skip the update when redo/undo */
        this.skipUpdate = false;
        params.maxAge = !!params.maxAge ? params.maxAge : 10;
        params.comparator = params.comparator || (() => true);
        this.activate();
    }
    /**
     * Observable stream representing whether the history plugin has an available past
     *
     */
    get hasPast$() {
        return this._hasPast$;
    }
    /**
     * Observable stream representing whether the history plugin has an available future
     *
     */
    get hasFuture$() {
        return this._hasFuture$;
    }
    get hasPast() {
        return this.history.past.length > 0;
    }
    get hasFuture() {
        return this.history.future.length > 0;
    }
    get property() {
        return this.params.watchProperty;
    }
    /* Updates the hasPast$ hasFuture$ observables*/
    updateHasHistory() {
        this.hasFutureSubject.next(this.hasFuture);
        this.hasPastSubject.next(this.hasPast);
    }
    activate() {
        this.hasPastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._hasPast$ = this.hasPastSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
        this.hasFutureSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._hasFuture$ = this.hasFutureSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
        this.history.present = this.getSource(this._entityId, this.property);
        this.subscription = this
            .selectSource(this._entityId, this.property)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pairwise"])())
            .subscribe(([past, present]) => {
            if (this.skip) {
                this.skip = false;
                return;
            }
            /**
             *  comparator: (prev, current) => isEqual(prev, current) === false
             */
            const shouldUpdate = this.params.comparator(past, present);
            if (!this.skipUpdate && shouldUpdate) {
                if (this.history.past.length === this.params.maxAge) {
                    this.history.past = this.history.past.slice(1);
                }
                this.history.past = [...this.history.past, past];
                this.history.present = present;
                this.updateHasHistory();
            }
        });
    }
    undo() {
        if (this.history.past.length > 0) {
            const { past, present } = this.history;
            const previous = past[past.length - 1];
            this.history.past = past.slice(0, past.length - 1);
            this.history.present = previous;
            this.history.future = [present, ...this.history.future];
            this.update();
        }
    }
    redo() {
        if (this.history.future.length > 0) {
            const { past, present } = this.history;
            const next = this.history.future[0];
            const newFuture = this.history.future.slice(1);
            this.history.past = [...past, present];
            this.history.present = next;
            this.history.future = newFuture;
            this.update('Redo');
        }
    }
    jumpToPast(index) {
        if (index < 0 || index >= this.history.past.length)
            return;
        const { past, future, present } = this.history;
        /**
         *
         * const past = [1, 2, 3, 4, 5];
         * const present = 6;
         * const future = [7, 8, 9];
         * const index = 2;
         *
         * newPast = past.slice(0, index) = [1, 2];
         * newPresent = past[index] = 3;
         * newFuture = [...past.slice(index + 1),present, ...future] = [4, 5, 6, 7, 8, 9];
         *
         */
        const newPast = past.slice(0, index);
        const newFuture = [...past.slice(index + 1), present, ...future];
        const newPresent = past[index];
        this.history.past = newPast;
        this.history.present = newPresent;
        this.history.future = newFuture;
        this.update();
    }
    jumpToFuture(index) {
        if (index < 0 || index >= this.history.future.length)
            return;
        const { past, future, present } = this.history;
        /**
         *
         * const past = [1, 2, 3, 4, 5];
         * const present = 6;
         * const future = [7, 8, 9, 10]
         * const index = 1
         *
         * newPast = [...past, present, ...future.slice(0, index) = [1, 2, 3, 4, 5, 6, 7];
         * newPresent = future[index] = 8;
         * newFuture = futrue.slice(index+1) = [9, 10];
         *
         */
        const newPast = [...past, present, ...future.slice(0, index)];
        const newPresent = future[index];
        const newFuture = future.slice(index + 1);
        this.history.past = newPast;
        this.history.present = newPresent;
        this.history.future = newFuture;
        this.update('Redo');
    }
    /**
     *
     * jump n steps in the past or forward
     *
     */
    jump(n) {
        if (n > 0)
            return this.jumpToFuture(n - 1);
        if (n < 0)
            return this.jumpToPast(this.history.past.length + n);
    }
    /**
     * Clear the history
     *
     * @param customUpdateFn Callback function for only clearing part of the history
     *
     * @example
     *
     * stateHistory.clear((history) => {
     *  return {
     *    past: history.past,
     *    present: history.present,
     *    future: []
     *  };
     * });
     */
    clear(customUpdateFn) {
        this.history = Object(_isFunction__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(customUpdateFn)
            ? customUpdateFn(this.history)
            : {
                past: [],
                present: null,
                future: [],
            };
        this.updateHasHistory();
    }
    destroy(clearHistory = false) {
        if (clearHistory) {
            this.clear();
        }
        this.subscription.unsubscribe();
    }
    ignoreNext() {
        this.skip = true;
    }
    update(action = 'Undo') {
        this.skipUpdate = true;
        Object(_actions__WEBPACK_IMPORTED_MODULE_3__["logAction"])(`@StateHistory - ${action}`);
        this.updateStore(this.history.present, this._entityId, this.property, true);
        this.updateHasHistory();
        this.skipUpdate = false;
    }
}


/***/ }),

/***/ "gtU3":
/*!*****************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/state/cart.store.ts ***!
  \*****************************************************************/
/*! exports provided: CartStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStore", function() { return CartStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




let CartStore = class CartStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
    updateQuantity(productId, operand = 1) {
        this.update(productId, entity => {
            const newQuantity = entity.quantity + operand;
            return Object.assign(Object.assign({}, entity), { quantity: newQuantity });
        });
    }
    notify(notify) {
        this.update(state => (Object.assign(Object.assign({}, state), { notify })));
    }
};
CartStore.ɵfac = function CartStore_Factory(t) { return new (t || CartStore)(); };
CartStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartStore, factory: CartStore.ɵfac, providedIn: 'root' });
CartStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'cart',
        idKey: 'productId'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CartStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gySQ":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/storeConfig.ts ***!
  \*******************************************/
/*! exports provided: configKey, StoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configKey", function() { return configKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreConfig", function() { return StoreConfig; });
const configKey = 'akitaConfig';
function StoreConfig(metadata) {
    return function (constructor) {
        constructor[configKey] = { idKey: 'id' };
        for (let i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            const key = keys[i];
            /* name is preserved read only key */
            if (key === 'name') {
                constructor[configKey]['storeName'] = metadata[key];
            }
            else {
                constructor[configKey][key] = metadata[key];
            }
        }
    };
}


/***/ }),

/***/ "iJBq":
/*!****************************************!*\
  !*** ./libs/akita/src/lib/isObject.ts ***!
  \****************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
// @internal
function isObject(value) {
    const type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}


/***/ }),

/***/ "iXoB":
/*!*********************************************!*\
  !*** ./libs/akita/src/lib/entityService.ts ***!
  \*********************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
class EntityService {
}


/***/ }),

/***/ "kBYr":
/*!********************************************!*\
  !*** ./libs/akita/src/lib/defaultIDKey.ts ***!
  \********************************************/
/*! exports provided: DEFAULT_ID_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ID_KEY", function() { return DEFAULT_ID_KEY; });
const DEFAULT_ID_KEY = 'id';


/***/ }),

/***/ "klkp":
/*!*****************************************!*\
  !*** ./libs/akita/src/lib/filterNil.ts ***!
  \*****************************************/
/*! exports provided: filterNil, filterNilValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNil", function() { return filterNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNilValue", function() { return filterNilValue; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

/**
 * @example
 *
 * query.selectEntity(2).pipe(filterNil)
 * @deprecated Use the operator function filterNilValue()
 */
const filterNil = (source) => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((value) => value !== null && typeof value !== 'undefined'));
/**
 * @example
 *
 * query.selectEntity(2).pipe(filterNilValue())
 */
function filterNilValue() {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((value) => value !== null && value !== undefined);
}


/***/ }),

/***/ "lrWU":
/*!******************************************!*\
  !*** ./libs/akita/src/lib/capitalize.ts ***!
  \******************************************/
/*! exports provided: capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
// @internal
function capitalize(value) {
    return value && value.charAt(0).toUpperCase() + value.slice(1);
}


/***/ }),

/***/ "mKZq":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/queryConfig.ts ***!
  \*******************************************/
/*! exports provided: queryConfigKey, QueryConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryConfigKey", function() { return queryConfigKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryConfig", function() { return QueryConfig; });
const queryConfigKey = 'akitaQueryConfig';
function QueryConfig(metadata) {
    return function (constructor) {
        constructor[queryConfigKey] = {};
        for (let i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            const key = keys[i];
            constructor[queryConfigKey][key] = metadata[key];
        }
    };
}


/***/ }),

/***/ "mVyF":
/*!******************************************!*\
  !*** ./libs/akita/src/lib/setLoading.ts ***!
  \******************************************/
/*! exports provided: setLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function setLoading(store) {
    return function (source) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => {
            store.setLoading(true);
            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => store.setLoading(false)));
        });
    };
}


/***/ }),

/***/ "n9dC":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/setEntities.ts ***!
  \*******************************************/
/*! exports provided: isEntityState, setEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityState", function() { return isEntityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEntities", function() { return setEntities; });
/* harmony import */ var _toEntitiesObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toEntitiesObject */ "0Fb4");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray */ "aDq+");
/* harmony import */ var _activeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activeState */ "odxm");



// @internal
function isEntityState(state) {
    return state.entities && state.ids;
}
// @internal
function applyMiddleware(entities, preAddEntity) {
    let mapped = {};
    for (const id of Object.keys(entities)) {
        mapped[id] = preAddEntity(entities[id]);
    }
    return mapped;
}
// @internal
function setEntities({ state, entities, idKey, preAddEntity, isNativePreAdd }) {
    let newEntities;
    let newIds;
    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(entities)) {
        const resolve = Object(_toEntitiesObject__WEBPACK_IMPORTED_MODULE_0__["toEntitiesObject"])(entities, idKey, preAddEntity);
        newEntities = resolve.entities;
        newIds = resolve.ids;
    }
    else if (isEntityState(entities)) {
        newEntities = isNativePreAdd ? entities.entities : applyMiddleware(entities.entities, preAddEntity);
        newIds = entities.ids;
    }
    else {
        // it's an object
        newEntities = isNativePreAdd ? entities : applyMiddleware(entities, preAddEntity);
        newIds = Object.keys(newEntities).map(id => (isNaN(id) ? id : Number(id)));
    }
    const newState = Object.assign(Object.assign({}, state), { entities: newEntities, ids: newIds, loading: false });
    if (Object(_activeState__WEBPACK_IMPORTED_MODULE_2__["hasActiveState"])(state)) {
        newState.active = Object(_activeState__WEBPACK_IMPORTED_MODULE_2__["resolveActiveEntity"])(newState);
    }
    return newState;
}


/***/ }),

/***/ "oJ0C":
/*!****************************************!*\
  !*** ./libs/akita/src/lib/isString.ts ***!
  \****************************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
// @internal
function isString(value) {
    return typeof value === 'string';
}


/***/ }),

/***/ "odxm":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/activeState.ts ***!
  \*******************************************/
/*! exports provided: hasActiveState, isMultiActiveState, resolveActiveEntity, getExitingActives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasActiveState", function() { return hasActiveState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiActiveState", function() { return isMultiActiveState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveActiveEntity", function() { return resolveActiveEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExitingActives", function() { return getExitingActives; });
/* harmony import */ var _hasEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasEntity */ "dNb/");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray */ "aDq+");


// @internal
function hasActiveState(state) {
    return state.hasOwnProperty('active');
}
// @internal
function isMultiActiveState(active) {
    return Object(_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(active);
}
// @internal
function resolveActiveEntity({ active, ids, entities }) {
    if (isMultiActiveState(active)) {
        return getExitingActives(active, ids);
    }
    if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_0__["hasEntity"])(entities, active) === false) {
        return null;
    }
    return active;
}
// @internal
function getExitingActives(currentActivesIds, newIds) {
    const filtered = currentActivesIds.filter(id => newIds.indexOf(id) > -1);
    /** Return the same reference if nothing has changed */
    if (filtered.length === currentActivesIds.length) {
        return currentActivesIds;
    }
    return filtered;
}


/***/ }),

/***/ "phQS":
/*!*************************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/effect-root.module.ts ***!
  \*************************************************************/
/*! exports provided: EffectsRootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsRootModule", function() { return EffectsRootModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens */ "EdJo");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "fZ2q");
/* harmony import */ var _module_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-manager.service */ "KdTy");







class EffectsRootModule {
    constructor(moduleManager, actions, rootEffects, parentModule) {
        this.moduleManager = moduleManager;
        this.actions = actions;
        this.parentModule = parentModule;
        this.rootGuard();
        rootEffects.forEach((effect) => this.moduleManager.subscribeToEffects(effect));
    }
    rootGuard() {
        if (this.parentModule) {
            throw new Error('EffectsRootModule is already loaded. Import it in the AppModule only');
        }
    }
}
EffectsRootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EffectsRootModule });
EffectsRootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EffectsRootModule_Factory(t) { return new (t || EffectsRootModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_module_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModuleManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_actions__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens__WEBPACK_IMPORTED_MODULE_1__["ROOT_EFFECT_INSTANCES"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EffectsRootModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EffectsRootModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _module_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModuleManager"] }, { type: _actions__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens__WEBPACK_IMPORTED_MODULE_1__["ROOT_EFFECT_INSTANCES"]]
            }] }, { type: EffectsRootModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "pmvp":
/*!*******************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/lib/types.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "rYvI":
/*!**********************************!*\
  !*** ./libs/akita/src/lib/fp.ts ***!
  \**********************************/
/*! exports provided: createStore, createQuery, createEntityStore, createEntityQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuery", function() { return createQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityStore", function() { return createEntityStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityQuery", function() { return createEntityQuery; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "18rb");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "Rbjf");
/* harmony import */ var _entityStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entityStore */ "syuU");
/* harmony import */ var _queryEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryEntity */ "GErp");




function createStore(initialState, options) {
    return new _store__WEBPACK_IMPORTED_MODULE_0__["Store"](initialState, options);
}
function createQuery(store) {
    return new _query__WEBPACK_IMPORTED_MODULE_1__["Query"](store);
}
function createEntityStore(initialState, options) {
    return new _entityStore__WEBPACK_IMPORTED_MODULE_2__["EntityStore"](initialState, options);
}
function createEntityQuery(store, options = {}) {
    return new _queryEntity__WEBPACK_IMPORTED_MODULE_3__["QueryEntity"](store, options);
}


/***/ }),

/***/ "roSn":
/*!****************************************************************!*\
  !*** ./libs/akita-ng-effects/src/lib/effect-feature.module.ts ***!
  \****************************************************************/
/*! exports provided: EffectsFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsFeatureModule", function() { return EffectsFeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens */ "EdJo");
/* harmony import */ var _module_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-manager.service */ "KdTy");





class EffectsFeatureModule {
    constructor(moduleManager, featureEffects) {
        this.moduleManager = moduleManager;
        featureEffects.forEach((group) => group.forEach((effect) => {
            this.moduleManager.subscribeToEffects(effect);
        }));
    }
}
EffectsFeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EffectsFeatureModule });
EffectsFeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EffectsFeatureModule_Factory(t) { return new (t || EffectsFeatureModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_module_manager_service__WEBPACK_IMPORTED_MODULE_2__["ModuleManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens__WEBPACK_IMPORTED_MODULE_1__["FEATURE_EFFECT_INSTANCES"])); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EffectsFeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _module_manager_service__WEBPACK_IMPORTED_MODULE_2__["ModuleManager"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens__WEBPACK_IMPORTED_MODULE_1__["FEATURE_EFFECT_INSTANCES"]]
            }] }]; }, null); })();


/***/ }),

/***/ "sog1":
/*!**************************************************************************!*\
  !*** ./libs/akita-ng-entity-service/src/lib/ng-entity-service.config.ts ***!
  \**************************************************************************/
/*! exports provided: NG_ENTITY_SERVICE_CONFIG, defaultConfig, mergeDeep, NgEntityServiceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ENTITY_SERVICE_CONFIG", function() { return NG_ENTITY_SERVICE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEntityServiceConfig", function() { return NgEntityServiceConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-entity-service-notifier */ "ZY5P");



const NG_ENTITY_SERVICE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgEntityServiceGlobalConfig');
const defaultConfig = {
    httpMethods: {
        GET: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].GET,
        POST: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].POST,
        PATCH: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].PATCH,
        PUT: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].PUT,
        DELETE: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].DELETE,
    },
};
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isObject"])(target) && Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isObject"])(source)) {
        for (const key in source) {
            if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isObject"])(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
function NgEntityServiceConfig(config = {}) {
    return function (constructor) {
        if (config.baseUrl) {
            constructor['baseUrl'] = config.baseUrl;
        }
        if (config.resourceName) {
            constructor['resourceName'] = config.resourceName;
        }
    };
}


/***/ }),

/***/ "syuU":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/entityStore.ts ***!
  \*******************************************/
/*! exports provided: EntityStore, EntityUIStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStore", function() { return EntityStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityUIStore", function() { return EntityUIStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "Q8dH");
/* harmony import */ var _addEntities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addEntities */ "2NMn");
/* harmony import */ var _coerceArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coerceArray */ "6ukB");
/* harmony import */ var _defaultIDKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultIDKey */ "kBYr");
/* harmony import */ var _entityActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entityActions */ "RK5a");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./env */ "VCUg");
/* harmony import */ var _getActiveEntities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getActiveEntities */ "fVEQ");
/* harmony import */ var _getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getInitialEntitiesState */ "EJe+");
/* harmony import */ var _hasEntity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hasEntity */ "dNb/");
/* harmony import */ var _isDefined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isDefined */ "Y5+g");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isEmpty */ "x9kZ");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isFunction */ "u21x");
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isNil */ "82/w");
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isUndefined */ "9NJV");
/* harmony import */ var _removeEntities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./removeEntities */ "M7vU");
/* harmony import */ var _setEntities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./setEntities */ "n9dC");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store */ "18rb");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./transaction */ "UiMj");
/* harmony import */ var _updateEntities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./updateEntities */ "MduY");
var _a, _b;





















/**
 *
 * Store for managing a collection of entities
 *
 * @example
 *
 * export interface WidgetsState extends EntityState<Widget> { }
 *
 * @StoreConfig({ name: 'widgets' })
 *  export class WidgetsStore extends EntityStore<WidgetsState> {
 *   constructor() {
 *     super();
 *   }
 * }
 *
 *
 */
class EntityStore extends _store__WEBPACK_IMPORTED_MODULE_18__["Store"] {
    constructor(initialState = {}, options = {}) {
        super(Object.assign(Object.assign({}, Object(_getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_9__["getInitialEntitiesState"])()), initialState), options);
        this.options = options;
        this.entityActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.entityIdChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // @internal
    get selectEntityAction$() {
        return this.entityActions.asObservable();
    }
    // @internal
    get selectEntityIdChanges$() {
        return this.entityIdChanges.asObservable();
    }
    // @internal
    get idKey() {
        return this.config.idKey || this.options.idKey || _defaultIDKey__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_ID_KEY"];
    }
    /**
     *
     * Replace current collection with provided collection
     *
     * @example
     *
     * this.store.set([Entity, Entity])
     * this.store.set({ids: [], entities: {}})
     * this.store.set({ 1: {}, 2: {}})
     *
     */
    set(entities, options = {}) {
        if (Object(_isNil__WEBPACK_IMPORTED_MODULE_14__["isNil"])(entities))
            return;
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Set Entity');
        const isNativePreAdd = this.akitaPreAddEntity === EntityStore.prototype.akitaPreAddEntity;
        this.setHasCache(true, { restartTTL: true });
        this._setState((state) => {
            const newState = Object(_setEntities__WEBPACK_IMPORTED_MODULE_17__["setEntities"])({
                state,
                entities,
                idKey: this.idKey,
                preAddEntity: this.akitaPreAddEntity,
                isNativePreAdd,
            });
            if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(options.activeId) === false) {
                newState.active = options.activeId;
            }
            return newState;
        });
        if (this.hasInitialUIState()) {
            this.handleUICreation();
        }
        this.entityActions.next({ type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Set, ids: this.ids });
    }
    /**
     * Add entities
     *
     * @example
     *
     * this.store.add([Entity, Entity])
     * this.store.add(Entity)
     * this.store.add(Entity, { prepend: true })
     *
     * this.store.add(Entity, { loading: false })
     */
    add(entities, options = { loading: false }) {
        const collection = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(entities);
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(collection))
            return;
        const data = Object(_addEntities__WEBPACK_IMPORTED_MODULE_3__["addEntities"])({
            state: this._value(),
            preAddEntity: this.akitaPreAddEntity,
            entities: collection,
            idKey: this.idKey,
            options,
        });
        if (data) {
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Add Entity');
            data.newState.loading = options.loading;
            this._setState(() => data.newState);
            if (this.hasInitialUIState()) {
                this.handleUICreation(true);
            }
            this.entityActions.next({ type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Add, ids: data.newIds });
        }
    }
    update(idsOrFnOrState, newStateOrFn) {
        if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(newStateOrFn)) {
            super.update(idsOrFnOrState);
            return;
        }
        let ids = [];
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(idsOrFnOrState)) {
            // We need to filter according the predicate function
            ids = this.ids.filter((id) => idsOrFnOrState(this.entities[id]));
        }
        else {
            // If it's nil we want all of them
            ids = Object(_isNil__WEBPACK_IMPORTED_MODULE_14__["isNil"])(idsOrFnOrState) ? this.ids : Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(idsOrFnOrState);
        }
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(ids))
            return;
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Update Entity', ids);
        let entityIdChanged;
        this._setState((state) => Object(_updateEntities__WEBPACK_IMPORTED_MODULE_20__["updateEntities"])({
            idKey: this.idKey,
            ids,
            preUpdateEntity: this.akitaPreUpdateEntity,
            state,
            newStateOrFn,
            producerFn: this._producerFn,
            onEntityIdChanges: (oldId, newId) => {
                entityIdChanged = { oldId, newId };
                this.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), { pending: true }));
            },
        }));
        if (entityIdChanged) {
            this.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), { pending: false }));
        }
        this.entityActions.next({ type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Update, ids });
    }
    upsert(ids, newState, onCreate, options = {}) {
        const toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
        const predicate = (isUpdate) => (id) => Object(_hasEntity__WEBPACK_IMPORTED_MODULE_10__["hasEntity"])(this.entities, id) === isUpdate;
        const baseClass = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(onCreate) ? options.baseClass : onCreate ? onCreate.baseClass : undefined;
        const isClassBased = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(baseClass);
        const updateIds = toArray.filter(predicate(true));
        const newEntities = toArray.filter(predicate(false)).map((id) => {
            const newStateObj = typeof newState === 'function' ? newState({}) : newState;
            const entity = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(onCreate) ? onCreate(id, newStateObj) : newStateObj;
            const withId = Object.assign(Object.assign({}, entity), { [this.idKey]: id });
            if (isClassBased) {
                return new baseClass(withId);
            }
            return withId;
        });
        // it can be any of the three types
        this.update(updateIds, newState);
        this.add(newEntities);
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["logAction"])('Upsert Entity');
    }
    /**
     *
     * Upsert entity collection (idKey must be present)
     *
     * @example
     *
     * store.upsertMany([ { id: 1 }, { id: 2 }]);
     *
     * store.upsertMany([ { id: 1 }, { id: 2 }], { loading: true  });
     * store.upsertMany([ { id: 1 }, { id: 2 }], { baseClass: Todo  });
     *
     */
    upsertMany(entities, options = {}) {
        const addedIds = [];
        const updatedIds = [];
        const updatedEntities = {};
        // Update the state directly to optimize performance
        for (const entity of entities) {
            const withPreCheckHook = this.akitaPreCheckEntity(entity);
            const id = withPreCheckHook[this.idKey];
            if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_10__["hasEntity"])(this.entities, id)) {
                const prev = this._value().entities[id];
                const merged = Object.assign(Object.assign({}, this._value().entities[id]), withPreCheckHook);
                const next = options.baseClass ? new options.baseClass(merged) : merged;
                const withHook = this.akitaPreUpdateEntity(prev, next);
                const nextId = withHook[this.idKey];
                updatedEntities[nextId] = withHook;
                updatedIds.push(nextId);
            }
            else {
                const newEntity = options.baseClass ? new options.baseClass(withPreCheckHook) : withPreCheckHook;
                const withHook = this.akitaPreAddEntity(newEntity);
                const nextId = withHook[this.idKey];
                addedIds.push(nextId);
                updatedEntities[nextId] = withHook;
            }
        }
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["logAction"])('Upsert Many');
        this._setState((state) => (Object.assign(Object.assign({}, state), { ids: addedIds.length ? [...state.ids, ...addedIds] : state.ids, entities: Object.assign(Object.assign({}, state.entities), updatedEntities), loading: !!options.loading })));
        updatedIds.length && this.entityActions.next({ type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Update, ids: updatedIds });
        addedIds.length && this.entityActions.next({ type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Add, ids: addedIds });
        if (addedIds.length && this.hasUIStore()) {
            this.handleUICreation(true);
        }
    }
    /**
     *
     * Replace one or more entities (except the id property)
     *
     *
     * @example
     *
     * this.store.replace(5, newEntity)
     * this.store.replace([1,2,3], newEntity)
     */
    replace(ids, newState) {
        const toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(toArray))
            return;
        const replaced = {};
        for (const id of toArray) {
            replaced[id] = Object.assign(Object.assign({}, newState), { [this.idKey]: id });
        }
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Replace Entity', ids);
        this._setState((state) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), replaced) })));
    }
    /**
     *
     * Move entity inside the collection
     *
     *
     * @example
     *
     * this.store.move(fromIndex, toIndex)
     */
    move(from, to) {
        const ids = this.ids.slice();
        ids.splice(to < 0 ? ids.length + to : to, 0, ids.splice(from, 1)[0]);
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Move Entity');
        this._setState((state) => (Object.assign(Object.assign({}, state), { 
            // Change the entities reference so that selectAll emit
            entities: Object.assign({}, state.entities), ids })));
    }
    remove(idsOrFn) {
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(this.ids))
            return;
        const idPassed = Object(_isDefined__WEBPACK_IMPORTED_MODULE_11__["isDefined"])(idsOrFn);
        // null means remove all
        let ids = [];
        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(idsOrFn)) {
            ids = this.ids.filter((entityId) => idsOrFn(this.entities[entityId]));
        }
        else {
            ids = idPassed ? Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(idsOrFn) : this.ids;
        }
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(ids))
            return;
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Remove Entity', ids);
        this._setState((state) => Object(_removeEntities__WEBPACK_IMPORTED_MODULE_16__["removeEntities"])({ state, ids }));
        if (!idPassed) {
            this.setHasCache(false);
        }
        this.handleUIRemove(ids);
        this.entityActions.next({ type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Remove, ids });
    }
    /**
     *
     * Update the active entity
     *
     * @example
     *
     * this.store.updateActive({ completed: true })
     * this.store.updateActive(active => {
     *   return {
     *     config: {
     *      ..active.config,
     *      date
     *     }
     *   }
     * })
     */
    updateActive(newStateOrCallback) {
        const ids = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.active);
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Update Active', ids);
        this.update(ids, newStateOrCallback);
    }
    setActive(idOrOptions) {
        const active = Object(_getActiveEntities__WEBPACK_IMPORTED_MODULE_8__["getActiveEntities"])(idOrOptions, this.ids, this.active);
        if (active === undefined) {
            return;
        }
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Set Active', active);
        this._setActive(active);
    }
    /**
     * Add active entities
     *
     * @example
     *
     * store.addActive(2);
     * store.addActive([3, 4, 5]);
     */
    addActive(ids) {
        const toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(toArray))
            return;
        const everyExist = toArray.every((id) => this.active.indexOf(id) > -1);
        if (everyExist)
            return;
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Add Active', ids);
        this._setState((state) => {
            /** Protect against case that one of the items in the array exist */
            const uniques = Array.from(new Set([...state.active, ...toArray]));
            return Object.assign(Object.assign({}, state), { active: uniques });
        });
    }
    /**
     * Remove active entities
     *
     * @example
     *
     * store.removeActive(2)
     * store.removeActive([3, 4, 5])
     */
    removeActive(ids) {
        const toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
        if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(toArray))
            return;
        const someExist = toArray.some((id) => this.active.indexOf(id) > -1);
        if (!someExist)
            return;
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Remove Active', ids);
        this._setState((state) => {
            return Object.assign(Object.assign({}, state), { active: Array.isArray(state.active) ? state.active.filter((currentId) => toArray.indexOf(currentId) === -1) : null });
        });
    }
    /**
     * Toggle active entities
     *
     * @example
     *
     * store.toggle(2)
     * store.toggle([3, 4, 5])
     */
    toggleActive(ids) {
        const toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
        const filterExists = (remove) => (id) => this.active.includes(id) === remove;
        const remove = toArray.filter(filterExists(true));
        const add = toArray.filter(filterExists(false));
        this.removeActive(remove);
        this.addActive(add);
        Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["logAction"])('Toggle Active');
    }
    /**
     *
     * Create sub UI store for managing Entity's UI state
     *
     * @example
     *
     * export type ProductUI = {
     *   isLoading: boolean;
     *   isOpen: boolean
     * }
     *
     * interface ProductsUIState extends EntityState<ProductUI> {}
     *
     * export class ProductsStore EntityStore<ProductsState, Product> {
     *   ui: EntityUIStore<ProductsUIState, ProductUI>;
     *
     *   constructor() {
     *     super();
     *     this.createUIStore();
     *   }
     *
     * }
     */
    createUIStore(initialState = {}, storeConfig = {}) {
        const defaults = { name: `UI/${this.storeName}`, idKey: this.idKey };
        this.ui = new EntityUIStore(initialState, Object.assign(Object.assign({}, defaults), storeConfig));
        return this.ui;
    }
    // @internal
    destroy() {
        super.destroy();
        if (this.ui instanceof EntityStore) {
            this.ui.destroy();
        }
        this.entityActions.complete();
    }
    // @internal
    akitaPreUpdateEntity(_, nextEntity) {
        return nextEntity;
    }
    // @internal
    akitaPreAddEntity(newEntity) {
        return newEntity;
    }
    // @internal
    akitaPreCheckEntity(newEntity) {
        return newEntity;
    }
    get ids() {
        return this._value().ids;
    }
    get entities() {
        return this._value().entities;
    }
    get active() {
        return this._value().active;
    }
    _setActive(ids) {
        this._setState((state) => {
            return Object.assign(Object.assign({}, state), { active: ids });
        });
    }
    handleUICreation(add = false) {
        const ids = this.ids;
        const isFunc = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(this.ui._akitaCreateEntityFn);
        let uiEntities;
        const createFn = (id) => {
            const current = this.entities[id];
            const ui = isFunc ? this.ui._akitaCreateEntityFn(current) : this.ui._akitaCreateEntityFn;
            return Object.assign({ [this.idKey]: current[this.idKey] }, ui);
        };
        if (add) {
            uiEntities = this.ids.filter((id) => Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(this.ui.entities[id])).map(createFn);
        }
        else {
            uiEntities = ids.map(createFn);
        }
        add ? this.ui.add(uiEntities) : this.ui.set(uiEntities);
    }
    hasInitialUIState() {
        return this.hasUIStore() && Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(this.ui._akitaCreateEntityFn) === false;
    }
    handleUIRemove(ids) {
        if (this.hasUIStore()) {
            this.ui.remove(ids);
        }
    }
    hasUIStore() {
        return this.ui instanceof EntityUIStore;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_transaction__WEBPACK_IMPORTED_MODULE_19__["transaction"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], EntityStore.prototype, "upsert", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_transaction__WEBPACK_IMPORTED_MODULE_19__["transaction"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof T !== "undefined" && T) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], EntityStore.prototype, "toggleActive", null);
// @internal
class EntityUIStore extends EntityStore {
    constructor(initialState = {}, storeConfig = {}) {
        super(initialState, storeConfig);
    }
    /**
     *
     * Set the initial UI entity state. This function will determine the entity's
     * initial state when we call `set()` or `add()`.
     *
     * @example
     *
     * constructor() {
     *   super();
     *   this.createUIStore().setInitialEntityState(entity => ({ isLoading: false, isOpen: true }));
     *   this.createUIStore().setInitialEntityState({ isLoading: false, isOpen: true });
     * }
     *
     */
    setInitialEntityState(createFn) {
        this._akitaCreateEntityFn = createFn;
    }
}


/***/ }),

/***/ "tPHU":
/*!******************************************************!*\
  !*** ./apps/angular-store-app/src/app/app.module.ts ***!
  \******************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "GjRw");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "ziB5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.module */ "0L1a");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.module */ "fWdh");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-page/product-page.component */ "/SVk");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "PaKE");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "ILSo");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "F33U");
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "OTOy");
/* harmony import */ var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @datorama/akita-ng-router-store */ "79eE");
/* harmony import */ var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @datorama/akita-ngdevtools */ "WjPt");
/* harmony import */ var _cart_state_cart_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart/state/cart.effects */ "Dr0E");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _libs_akita_ng_devtools_src_lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../libs/akita-ng-devtools/src/lib/ng-devtools.module */ "5OdB");
/* harmony import */ var _libs_akita_ng_effects_src_lib_effect_root_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../libs/akita-ng-effects/src/lib/effect-root.module */ "phQS");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
        {
            provide: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["NG_ENTITY_SERVICE_CONFIG"],
            useFactory: function () {
                return {
                    baseUrl: 'https://jsonplaceholder.typicode.com',
                    httpMethods: {
                        PUT: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["HttpMethod"].PATCH,
                    },
                };
            },
            deps: [],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"],
            _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__["CartModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
            _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__["AkitaNgRouterStoreModule"],
            _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__["AkitaNgDevtools"].forRoot(),
            _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_17__["AkitaNgEffectsModule"].forRoot([_cart_state_cart_effects__WEBPACK_IMPORTED_MODULE_16__["CartEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"],
        _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__["CartModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
        _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__["AkitaNgRouterStoreModule"], _libs_akita_ng_devtools_src_lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_18__["AkitaNgDevtools"], _libs_akita_ng_effects_src_lib_effect_root_module__WEBPACK_IMPORTED_MODULE_19__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductPageComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"],
                    _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__["CartModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                    _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__["AkitaNgRouterStoreModule"],
                    _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__["AkitaNgDevtools"].forRoot(),
                    _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_17__["AkitaNgEffectsModule"].forRoot([_cart_state_cart_effects__WEBPACK_IMPORTED_MODULE_16__["CartEffects"]]),
                ],
                providers: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                    {
                        provide: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["NG_ENTITY_SERVICE_CONFIG"],
                        useFactory: function () {
                            return {
                                baseUrl: 'https://jsonplaceholder.typicode.com',
                                httpMethods: {
                                    PUT: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["HttpMethod"].PATCH,
                                },
                            };
                        },
                        deps: [],
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "u21x":
/*!******************************************!*\
  !*** ./libs/akita/src/lib/isFunction.ts ***!
  \******************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
// @internal
function isFunction(value) {
    return typeof value === 'function';
}


/***/ }),

/***/ "uFMm":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/resetStores.ts ***!
  \*******************************************/
/*! exports provided: resetStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStores", function() { return resetStores; });
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores */ "40zj");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction */ "UiMj");


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
function resetStores(options) {
    const defaults = {
        exclude: []
    };
    options = Object.assign({}, defaults, options);
    const stores = Object.keys(_stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"]);
    Object(_transaction__WEBPACK_IMPORTED_MODULE_1__["applyTransaction"])(() => {
        for (const store of stores) {
            const s = _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][store];
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


/***/ }),

/***/ "v4lr":
/*!*****************************************!*\
  !*** ./libs/akita/src/lib/getEntity.ts ***!
  \*****************************************/
/*! exports provided: findEntityByPredicate, getEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEntityByPredicate", function() { return findEntityByPredicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ "9NJV");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isString */ "oJ0C");


// @internal
function findEntityByPredicate(predicate, entities) {
    for (const entityId of Object.keys(entities)) {
        if (predicate(entities[entityId]) === true) {
            return entityId;
        }
    }
    return undefined;
}
// @internal
function getEntity(id, project) {
    return function (entities) {
        const entity = entities[id];
        if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(entity)) {
            return undefined;
        }
        if (!project) {
            return entity;
        }
        if (Object(_isString__WEBPACK_IMPORTED_MODULE_1__["isString"])(project)) {
            return entity[project];
        }
        return project(entity);
    };
}


/***/ }),

/***/ "x9kZ":
/*!***************************************!*\
  !*** ./libs/akita/src/lib/isEmpty.ts ***!
  \***************************************/
/*! exports provided: isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "aDq+");

// @internal
function isEmpty(arr) {
    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(arr)) {
        return arr.length === 0;
    }
    return false;
}


/***/ }),

/***/ "xv5F":
/*!*****************************************************************!*\
  !*** ./apps/angular-store-app/src/app/cart/state/cart.query.ts ***!
  \*****************************************************************/
/*! exports provided: CartQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartQuery", function() { return CartQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.store */ "gtU3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products/state/products.query */ "05AR");









class CartQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_4__["QueryEntity"] {
    constructor(store, productsQuery) {
        super(store);
        this.store = store;
        this.productsQuery = productsQuery;
        this.selectItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.selectAll(), this.productsQuery.selectAll({ asObject: true })]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(joinItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.selectTotal$ = this.selectItems$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(items => items.reduce((acc, item) => acc + item.total, 0)));
        this.selectNotification$ = this.select((state) => state.notify);
    }
}
CartQuery.ɵfac = function CartQuery_Factory(t) { return new (t || CartQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"])); };
CartQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartQuery, factory: CartQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"] }, { type: _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"] }]; }, null); })();
function joinItems([cartItems, products]) {
    return cartItems.map(cartItem => {
        const product = products[cartItem.productId];
        return Object.assign(Object.assign(Object.assign({}, cartItem), product), { total: cartItem.quantity * product.price });
    });
}


/***/ }),

/***/ "yKN+":
/*!************************************!*\
  !*** ./libs/akita/src/lib/sort.ts ***!
  \************************************/
/*! exports provided: Order, compareValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareValues", function() { return compareValues; });
var Order;
(function (Order) {
    Order["ASC"] = "asc";
    Order["DESC"] = "desc";
})(Order || (Order = {}));
// @internal
function compareValues(key, order = Order.ASC) {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }
        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        }
        else if (varA < varB) {
            comparison = -1;
        }
        return order == Order.DESC ? comparison * -1 : comparison;
    };
}


/***/ }),

/***/ "yMBE":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/arrayToggle.ts ***!
  \*******************************************/
/*! exports provided: byKey, byId, arrayToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byKey", function() { return byKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byId", function() { return byId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToggle", function() { return arrayToggle; });
/**
 * Create an array value comparator for a specific key of the value.
 * @param prop The property of the value to be compared.
 */
function byKey(prop) {
    return (a, b) => a[prop] === b[prop];
}
/**
 * Create an array value comparator for the id field of an array value.
 */
function byId() {
    return byKey('id');
}
/**
 * Adds or removes a value from an array by comparing its values. If a matching value exists it is removed, otherwise
 * it is added to the array.
 *
 * @param array The array to modify.
 * @param newValue The new value to toggle.
 * @param compare A compare function to determine equality of array values. Default is an equality test by object identity.
 */
function arrayToggle(array, newValue, compare = (a, b) => a === b) {
    const index = array.findIndex((oldValue) => compare(newValue, oldValue));
    return !!~index ? [...array.slice(0, index), ...array.slice(index + 1)] : [...array, newValue];
}


/***/ }),

/***/ "yVIH":
/*!*********************************************!*\
  !*** ./libs/akita/src/lib/sortByOptions.ts ***!
  \*********************************************/
/*! exports provided: sortByOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByOptions", function() { return sortByOptions; });
// @internal
function sortByOptions(options, config) {
    options.sortBy = options.sortBy || (config && config.sortBy);
    options.sortByOrder = options.sortByOrder || (config && config.sortByOrder);
}


/***/ }),

/***/ "ziB5":
/*!*********************************************************!*\
  !*** ./apps/angular-store-app/src/app/app.component.ts ***!
  \*********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita-ng-router-store */ "79eE");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ "PaKE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(r) {
        // r.select().subscribe(console.log);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_1__["RouterQuery"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "flex", "flex-column", "height"], [1, "block"], [1, "flex-1"], [1, "page-footer", "cyan", "lighten-2"], [1, "footer-copyright"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A9 2018 Copyright Datorama ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_1__["RouterQuery"] }]; }, null); })();


/***/ }),

/***/ "zqjR":
/*!*******************************************!*\
  !*** ./libs/akita/src/lib/dispatchers.ts ***!
  \*******************************************/
/*! exports provided: $$deleteStore, $$addStore, $$updateStore, dispatchDeleted, dispatchAdded, dispatchUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$deleteStore", function() { return $$deleteStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$addStore", function() { return $$addStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$updateStore", function() { return $$updateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchDeleted", function() { return dispatchDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchAdded", function() { return dispatchAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchUpdate", function() { return dispatchUpdate; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

// @internal
const $$deleteStore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
// @internal
const $$addStore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](50, 5000);
// @internal
const $$updateStore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
// @internal
function dispatchDeleted(storeName) {
    $$deleteStore.next(storeName);
}
// @internal
function dispatchAdded(storeName) {
    $$addStore.next(storeName);
}
// @internal
function dispatchUpdate(storeName, action) {
    $$updateStore.next({ storeName, action });
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map