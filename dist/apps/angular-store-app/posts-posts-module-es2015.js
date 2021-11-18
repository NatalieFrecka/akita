(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "1GkC":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/state/posts.query.ts ***!
  \*******************************************************************/
/*! exports provided: PostsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsQuery", function() { return PostsQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _posts_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.store */ "5C14");





class PostsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
PostsQuery.ɵfac = function PostsQuery_Factory(t) { return new (t || PostsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_posts_store__WEBPACK_IMPORTED_MODULE_2__["PostsStore"])); };
PostsQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsQuery, factory: PostsQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _posts_store__WEBPACK_IMPORTED_MODULE_2__["PostsStore"] }]; }, null); })();


/***/ }),

/***/ "5C14":
/*!*******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/state/posts.store.ts ***!
  \*******************************************************************/
/*! exports provided: PostsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsStore", function() { return PostsStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




let PostsStore = class PostsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
PostsStore.ɵfac = function PostsStore_Factory(t) { return new (t || PostsStore)(); };
PostsStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostsStore, factory: PostsStore.ɵfac, providedIn: 'root' });
PostsStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'posts' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PostsStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostsStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LeYo":
/*!*************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/state/index.ts ***!
  \*************************************************************/
/*! exports provided: PostsQuery, PostsStore, PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.query */ "1GkC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsQuery", function() { return _posts_query__WEBPACK_IMPORTED_MODULE_0__["PostsQuery"]; });

/* harmony import */ var _posts_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.store */ "5C14");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsStore", function() { return _posts_store__WEBPACK_IMPORTED_MODULE_1__["PostsStore"]; });

/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.service */ "oKJY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]; });

/* harmony import */ var _post_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.model */ "ifIA");
/* empty/unused harmony star reexport */





/***/ }),

/***/ "V8DZ":
/*!**************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/posts.module.ts ***!
  \**************************************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ "cy6G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _state_post_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/post.effects */ "lJt0");
/* harmony import */ var _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/akita-ng-effects/src/lib/effect-feature.module */ "roSn");









const routes = [
    {
        path: '',
        component: _posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"],
    },
];
class PostsModule {
}
PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsModule_Factory(t) { return new (t || PostsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_4__["AkitaNgEffectsModule"].forFeature([_state_post_effects__WEBPACK_IMPORTED_MODULE_5__["PostEffects"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_4__["AkitaNgEffectsModule"].forFeature([_state_post_effects__WEBPACK_IMPORTED_MODULE_5__["PostEffects"]])],
            }]
    }], null, null); })();


/***/ }),

/***/ "cy6G":
/*!*****************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/posts.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "OTOy");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var helpful_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpful-decorators */ "QTw5");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "LeYo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function PostsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Idle");
} }
function PostsComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostsComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostsComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostsComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostsComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostsComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostsComponent_h3_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostsComponent_ng_template_46_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r12.title, " ");
} }
function PostsComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PostsComponent_ng_template_46_div_0_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r10.posts$));
} }
let PostsComponent = class PostsComponent {
    constructor(postsQuery, postsService, loader, notifier) {
        this.postsQuery = postsQuery;
        this.postsService = postsService;
        this.loader = loader;
        this.notifier = notifier;
        this.posts$ = this.postsQuery.selectAll();
        this.loaders = this.loader.loadersFor();
    }
    ngOnInit() {
        this.notifier.action$.pipe(Object(_datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["ofType"])('success'), Object(_datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["filterMethod"])('DELETE'), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe((v) => console.log(v));
        this.postsService
            .get({
            mapResponseFn: (res) => {
                return res;
            },
        })
            .subscribe();
        this.loaders.deleteEntity(3);
    }
    fetchOne() {
        this.postsService.get(1).subscribe(console.log);
    }
    add() {
        this.postsService.add({ id: 1222, title: 'New Post', body: '' }, { prepend: true }).subscribe();
    }
    update(id) {
        this.postsService.update(id, { title: 'New title' }).subscribe();
    }
    remove(id) {
        this.postsService
            .delete(id, {
            successMsg: 'Deleted Successfully',
        })
            .subscribe();
    }
    updateEntityLoading(id) {
        return this.loaders.updateEntity(id);
    }
    deleteEntityLoading(id) {
        return this.loaders.deleteEntity(id);
    }
    ngOnDestroy() { }
};
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state__WEBPACK_IMPORTED_MODULE_5__["PostsQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state__WEBPACK_IMPORTED_MODULE_5__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceLoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceNotifier"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["ng-component"]], decls: 48, vars: 28, consts: [[1, "padding"], ["idle", ""], [4, "ngIf", "ngIfElse"], [2, "margin-bottom", "10px"], [1, "btn", "waves-effect", "waves-light", 3, "click"], ["posts", ""], [4, "ngFor", "ngForOf"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Entity Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PostsComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Loaders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Get => ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PostsComponent_span_9_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "POST => ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PostsComponent_span_13_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "PUT => ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PostsComponent_span_17_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "DELETE => ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PostsComponent_span_21_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "PUT id 3 => ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PostsComponent_span_25_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "DELETE id 3 => ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PostsComponent_span_29_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsComponent_Template_button_click_32_listener() { return ctx.fetchOne(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fetch posts/1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsComponent_Template_button_click_34_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsComponent_Template_button_click_36_listener() { return ctx.update(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsComponent_Template_button_click_38_listener() { return ctx.remove(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsComponent_Template_button_click_40_listener() { return ctx.update(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Update id 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsComponent_Template_button_click_42_listener() { return ctx.remove(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Remove id 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, PostsComponent_h3_44_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, PostsComponent_ng_template_46_Template, 2, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 14, ctx.loaders.get$))("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 16, ctx.loaders.add$))("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 18, ctx.loaders.update$))("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 20, ctx.loaders.delete$))("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 22, ctx.updateEntityLoading(3)))("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 24, ctx.deleteEntityLoading(3)))("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 26, ctx.loaders.get$))("ngIfElse", _r9);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy5jc3MifQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(helpful_decorators__WEBPACK_IMPORTED_MODULE_4__["memo"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PostsComponent.prototype, "updateEntityLoading", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(helpful_decorators__WEBPACK_IMPORTED_MODULE_4__["memo"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PostsComponent.prototype, "deleteEntityLoading", null);
PostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_state__WEBPACK_IMPORTED_MODULE_5__["PostsQuery"], _state__WEBPACK_IMPORTED_MODULE_5__["PostsService"], _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceLoader"], _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceNotifier"]])
], PostsComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.css'],
            }]
    }], function () { return [{ type: _state__WEBPACK_IMPORTED_MODULE_5__["PostsQuery"] }, { type: _state__WEBPACK_IMPORTED_MODULE_5__["PostsService"] }, { type: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceLoader"] }, { type: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceNotifier"] }]; }, { updateEntityLoading: [], deleteEntityLoading: [] }); })();


/***/ }),

/***/ "ifIA":
/*!******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/state/post.model.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "lJt0":
/*!********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/state/post.effects.ts ***!
  \********************************************************************/
/*! exports provided: PostEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEffects", function() { return PostEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _posts_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.store */ "5C14");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








class PostEffects {
    constructor(actions$, postStore) {
        this.actions$ = actions$;
        this.postStore = postStore;
        this.allActionsPost = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((action) => console.log('post effect', action)));
    }
}
PostEffects.ɵfac = function PostEffects_Factory(t) { return new (t || PostEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_posts_store__WEBPACK_IMPORTED_MODULE_3__["PostsStore"])); };
PostEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostEffects, factory: PostEffects.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PostEffects.prototype, "allActionsPost", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _posts_store__WEBPACK_IMPORTED_MODULE_3__["PostsStore"] }]; }, { allActionsPost: [] }); })();


/***/ }),

/***/ "oKJY":
/*!*********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/posts/state/posts.service.ts ***!
  \*********************************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _posts_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.store */ "5C14");
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "OTOy");





class PostsService extends _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_2__["NgEntityService"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_posts_store__WEBPACK_IMPORTED_MODULE_1__["PostsStore"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _posts_store__WEBPACK_IMPORTED_MODULE_1__["PostsStore"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=posts-posts-module-es2015.js.map