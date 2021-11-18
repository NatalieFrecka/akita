(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-movies-module"],{

/***/ "+6Sc":
/*!*************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/normalized.ts ***!
  \*************************************************************/
/*! exports provided: movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movies", function() { return movies; });
const movies = {
    entities: {
        genres: {
            '1': {
                id: 1,
                name: 'Action'
            },
            '2': {
                id: 2,
                name: 'Adventure'
            },
            '3': {
                id: 3,
                name: 'Crime'
            },
            '4': {
                id: 4,
                name: 'Drama'
            },
            '5': {
                id: 5,
                name: 'Mystery'
            },
            '6': {
                id: 6,
                name: 'Sci-Fi'
            }
        },
        actors: {
            '288': {
                id: 288,
                name: 'Christian Bale'
            },
            '323': {
                id: 323,
                name: 'Michael Caine'
            },
            '5132': {
                id: 5132,
                name: 'Heath Ledger'
            },
            '413168': {
                id: 413168,
                name: 'Hugh Jackman'
            },
            '3822462': {
                id: 3822462,
                name: 'Rila Fukushima'
            },
            '5148840': {
                id: 5148840,
                name: 'Tao Okamoto'
            }
        },
        movies: {
            '468569': {
                id: 468569,
                title: 'The Dark Knight',
                genres: [1, 3, 4],
                actors: [288, 5132, 323]
            },
            '482571': {
                id: 482571,
                title: 'The Prestige',
                genres: [4, 5, 6],
                actors: [413168, 288, 323]
            },
            '1430132': {
                id: 1430132,
                title: 'The Wolverine',
                genres: [1, 2, 6],
                actors: [413168, 5148840, 3822462]
            }
        }
    },
    result: [468569, 482571, 1430132]
};


/***/ }),

/***/ "2pD2":
/*!***********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/state/movies.service.ts ***!
  \***********************************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.store */ "uHP3");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _normalized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../normalized */ "+6Sc");
/* harmony import */ var _actors_state_actors_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actors/state/actors.store */ "hEgd");
/* harmony import */ var _genres_state_genres_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../genres/state/genres.store */ "KFit");
/* harmony import */ var _movies_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movies.query */ "zGrh");















class MoviesService {
    constructor(moviesStore, actorsStore, genresStore, moviesQuery) {
        this.moviesStore = moviesStore;
        this.actorsStore = actorsStore;
        this.genresStore = genresStore;
        this.moviesQuery = moviesQuery;
    }
    getMovies() {
        const request$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(_normalized__WEBPACK_IMPORTED_MODULE_6__["movies"]), Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["withTransaction"])(response => {
            this.actorsStore.set(response.entities.actors);
            this.genresStore.set(response.entities.genres);
            const movies = {
                entities: response.entities.movies,
                ids: response.result
            };
            this.moviesStore.set(movies);
        }));
        return this.moviesQuery.getHasCache() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])() : request$;
    }
    updateActorName(id, name) {
        this.actorsStore.update(id, { name });
    }
    markAsOpen(id) {
        this.moviesStore.ui.update(id, entity => ({ isOpen: !entity.isOpen }));
    }
    deleteActor(id) {
        this.actorsStore.remove(id);
        this.moviesStore.update(null, entity => ({ actors: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["arrayRemove"])(entity.actors, id) }));
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_movies_store__WEBPACK_IMPORTED_MODULE_2__["MoviesStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_actors_state_actors_store__WEBPACK_IMPORTED_MODULE_7__["ActorsStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_genres_state_genres_store__WEBPACK_IMPORTED_MODULE_8__["GenresStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_movies_query__WEBPACK_IMPORTED_MODULE_9__["MoviesQuery"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["transaction"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoviesService.prototype, "deleteActor", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _movies_store__WEBPACK_IMPORTED_MODULE_2__["MoviesStore"] }, { type: _actors_state_actors_store__WEBPACK_IMPORTED_MODULE_7__["ActorsStore"] }, { type: _genres_state_genres_store__WEBPACK_IMPORTED_MODULE_8__["GenresStore"] }, { type: _movies_query__WEBPACK_IMPORTED_MODULE_9__["MoviesQuery"] }]; }, { deleteActor: [] }); })();


/***/ }),

/***/ "40K9":
/*!****************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/genres/state/genres.query.ts ***!
  \****************************************************************************/
/*! exports provided: GenresQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresQuery", function() { return GenresQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _genres_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genres.store */ "KFit");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");





class GenresQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
GenresQuery.ɵfac = function GenresQuery_Factory(t) { return new (t || GenresQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_genres_store__WEBPACK_IMPORTED_MODULE_1__["GenresStore"])); };
GenresQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenresQuery, factory: GenresQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenresQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _genres_store__WEBPACK_IMPORTED_MODULE_1__["GenresStore"] }]; }, null); })();


/***/ }),

/***/ "KFit":
/*!****************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/genres/state/genres.store.ts ***!
  \****************************************************************************/
/*! exports provided: GenresStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresStore", function() { return GenresStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




let GenresStore = class GenresStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
GenresStore.ɵfac = function GenresStore_Factory(t) { return new (t || GenresStore)(); };
GenresStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GenresStore, factory: GenresStore.ɵfac, providedIn: 'root' });
GenresStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'genres' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], GenresStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GenresStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "f76n":
/*!**********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/state/movie.effects.ts ***!
  \**********************************************************************/
/*! exports provided: MovieEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEffects", function() { return MovieEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _movies_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.store */ "uHP3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








class MovieEffects {
    constructor(actions$, movieStore) {
        this.actions$ = actions$;
        this.movieStore = movieStore;
        this.allActionsMovie = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((action) => console.log('movie effect', action)));
    }
}
MovieEffects.ɵfac = function MovieEffects_Factory(t) { return new (t || MovieEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_movies_store__WEBPACK_IMPORTED_MODULE_3__["MoviesStore"])); };
MovieEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MovieEffects, factory: MovieEffects.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MovieEffects.prototype, "allActionsMovie", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _movies_store__WEBPACK_IMPORTED_MODULE_3__["MoviesStore"] }]; }, { allActionsMovie: [] }); })();


/***/ }),

/***/ "hEgd":
/*!****************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/actors/state/actors.store.ts ***!
  \****************************************************************************/
/*! exports provided: ActorsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsStore", function() { return ActorsStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




let ActorsStore = class ActorsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
ActorsStore.ɵfac = function ActorsStore_Factory(t) { return new (t || ActorsStore)(); };
ActorsStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActorsStore, factory: ActorsStore.ɵfac, providedIn: 'root' });
ActorsStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'actors' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ActorsStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActorsStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hMRL":
/*!****************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/movies.module.ts ***!
  \****************************************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies/movies.component */ "vSle");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @datorama/akita-ng-effects */ "al6x");
/* harmony import */ var _state_movie_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/movie.effects */ "f76n");
/* harmony import */ var _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/akita-ng-effects/src/lib/effect-feature.module */ "roSn");









const routes = [
    {
        path: '',
        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"],
    },
];
class MoviesModule {
}
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesModule_Factory(t) { return new (t || MoviesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_4__["AkitaNgEffectsModule"].forFeature([_state_movie_effects__WEBPACK_IMPORTED_MODULE_5__["MovieEffects"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_4__["AkitaNgEffectsModule"].forFeature([_state_movie_effects__WEBPACK_IMPORTED_MODULE_5__["MovieEffects"]])],
                declarations: [_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "lnbf":
/*!****************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/actors/state/actors.query.ts ***!
  \****************************************************************************/
/*! exports provided: ActorsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsQuery", function() { return ActorsQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actors_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actors.store */ "hEgd");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");





class ActorsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
ActorsQuery.ɵfac = function ActorsQuery_Factory(t) { return new (t || ActorsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_actors_store__WEBPACK_IMPORTED_MODULE_1__["ActorsStore"])); };
ActorsQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActorsQuery, factory: ActorsQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActorsQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _actors_store__WEBPACK_IMPORTED_MODULE_1__["ActorsStore"] }]; }, null); })();


/***/ }),

/***/ "uHP3":
/*!*********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/state/movies.store.ts ***!
  \*********************************************************************/
/*! exports provided: MoviesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesStore", function() { return MoviesStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




let MoviesStore = class MoviesStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
        this.createUIStore().setInitialEntityState({ isOpen: true });
    }
};
MoviesStore.ɵfac = function MoviesStore_Factory(t) { return new (t || MoviesStore)(); };
MoviesStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MoviesStore, factory: MoviesStore.ɵfac, providedIn: 'root' });
MoviesStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'movies' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MoviesStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MoviesStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vSle":
/*!**************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/movies/movies.component.ts ***!
  \**************************************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_movies_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/movies.query */ "zGrh");
/* harmony import */ var _state_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/movies.service */ "2pD2");
/* harmony import */ var _actors_state_actors_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actors/state/actors.query */ "lnbf");
/* harmony import */ var helpful_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpful-decorators */ "QTw5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");











function MoviesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MoviesComponent_tr_15_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](actor_r6.name);
} }
function MoviesComponent_tr_15_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](genre_r7.name);
} }
const _c0 = function () { return { background: "lightgrey" }; };
function MoviesComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviesComponent_tr_15_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const movie_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.markAsOpen(movie_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MoviesComponent_tr_15_span_5_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MoviesComponent_tr_15_span_7_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx_r1.isOpen(movie_r3.id)) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", movie_r3.actors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", movie_r3.genres);
} }
function MoviesComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MoviesComponent_tr_25_Template_input_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const actor_r10 = ctx.$implicit; const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.edit(actor_r10.id, _r11.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviesComponent_tr_25_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const actor_r10 = ctx.$implicit; const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.toggleView(actor_r10.id, _r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviesComponent_tr_25_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const actor_r10 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.deleteActor(actor_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("view", !ctx_r2.inEditMode(actor_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", actor_r10.name);
} }
class MoviesComponent {
    constructor(moviesQuery, actorsQuery, moviesService) {
        this.moviesQuery = moviesQuery;
        this.actorsQuery = actorsQuery;
        this.moviesService = moviesService;
        this.edits = new Set();
    }
    ngOnInit() {
        this.isLoading$ = this.moviesQuery.selectLoading();
        this.movies$ = this.moviesQuery.selectMovies();
        this.actors$ = this.actorsQuery.selectAll();
        this.moviesService.getMovies().subscribe();
    }
    edit(id, name) {
        this.moviesService.updateActorName(id, name);
        this.edits.delete(id);
    }
    toggleView(id, actorName) {
        if (this.edits.has(id)) {
            this.edits.delete(id);
        }
        else {
            this.edits.add(id);
            actorName.focus();
        }
    }
    inEditMode(id) {
        return this.edits.has(id);
    }
    isOpen(id) {
        return this.moviesQuery.ui.selectEntity(id, 'isOpen');
    }
    markAsOpen(id) {
        this.moviesService.markAsOpen(id);
    }
    deleteActor(actor) {
        this.moviesService.deleteActor(actor.id);
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_movies_query__WEBPACK_IMPORTED_MODULE_2__["MoviesQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_actors_state_actors_query__WEBPACK_IMPORTED_MODULE_4__["ActorsQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 27, vars: 9, consts: [[1, "padding"], ["class", "progress", 4, "ngIf"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [2, "width", "30%"], [4, "ngFor", "ngForOf"], [1, "progress"], [1, "indeterminate"], [3, "ngStyle", "click"], [1, "flex", "align-center"], [1, "actor-input", 3, "value", "keyup.enter"], ["actorName", ""], [1, "tiny", "material-icons", 3, "click"], [3, "click"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviesComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Actors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Genres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MoviesComponent_tr_15_Template, 8, 7, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Actors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MoviesComponent_tr_25_Template, 9, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 5, ctx.movies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 7, ctx.actors$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["span[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: ', '\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRiIsImZpbGUiOiJtb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW46bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICBjb250ZW50OiAnLCAnXG59Il19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(helpful_decorators__WEBPACK_IMPORTED_MODULE_5__["memo"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoviesComponent.prototype, "isOpen", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.css']
            }]
    }], function () { return [{ type: _state_movies_query__WEBPACK_IMPORTED_MODULE_2__["MoviesQuery"] }, { type: _actors_state_actors_query__WEBPACK_IMPORTED_MODULE_4__["ActorsQuery"] }, { type: _state_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }]; }, { isOpen: [] }); })();


/***/ }),

/***/ "zGrh":
/*!*********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/movies/state/movies.query.ts ***!
  \*********************************************************************/
/*! exports provided: MoviesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesQuery", function() { return MoviesQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.store */ "uHP3");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actors_state_actors_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actors/state/actors.query */ "lnbf");
/* harmony import */ var _genres_state_genres_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../genres/state/genres.query */ "40K9");










class MoviesQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store, actorsQuery, genresQuery) {
        super(store);
        this.store = store;
        this.actorsQuery = actorsQuery;
        this.genresQuery = genresQuery;
        this.createUIQuery();
    }
    selectMovies() {
        return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["combineQueries"])([
            this.selectAll(),
            this.actorsQuery.selectAll({ asObject: true }),
            this.genresQuery.selectAll({ asObject: true })
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([movies, actors, genres]) => {
            return movies.map(movie => {
                return Object.assign(Object.assign({}, movie), { actors: movie.actors.map(actorId => actors[actorId]), genres: movie.genres.map(genreId => genres[genreId]) });
            });
        }));
    }
}
MoviesQuery.ɵfac = function MoviesQuery_Factory(t) { return new (t || MoviesQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_movies_store__WEBPACK_IMPORTED_MODULE_1__["MoviesStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_actors_state_actors_query__WEBPACK_IMPORTED_MODULE_4__["ActorsQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_genres_state_genres_query__WEBPACK_IMPORTED_MODULE_5__["GenresQuery"])); };
MoviesQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesQuery, factory: MoviesQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _movies_store__WEBPACK_IMPORTED_MODULE_1__["MoviesStore"] }, { type: _actors_state_actors_query__WEBPACK_IMPORTED_MODULE_4__["ActorsQuery"] }, { type: _genres_state_genres_query__WEBPACK_IMPORTED_MODULE_5__["GenresQuery"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=movies-movies-module-es2015.js.map