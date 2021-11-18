(function () {
  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/1Ks":
    /*!************************************************************!*\
      !*** ./libs/akita-ng-router-store/src/lib/router.store.ts ***!
      \************************************************************/

    /*! exports provided: createInitialRouterState, RouterStore */

    /***/
    function Ks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createInitialRouterState", function () {
        return createInitialRouterState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterStore", function () {
        return RouterStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      function createInitialRouterState() {
        return {
          state: null,
          navigationId: null
        };
      }

      var RouterStore = /*#__PURE__*/function (_datorama_akita__WEBP) {
        _inherits(RouterStore, _datorama_akita__WEBP);

        var _super = _createSuper(RouterStore);

        function RouterStore() {
          _classCallCheck(this, RouterStore);

          return _super.call(this, createInitialRouterState());
        }

        return RouterStore;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]);

      RouterStore.ɵfac = function RouterStore_Factory(t) {
        return new (t || RouterStore)();
      };

      RouterStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RouterStore,
        factory: RouterStore.ɵfac,
        providedIn: 'root'
      });
      RouterStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'router'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RouterStore);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterStore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/SVk":
    /*!*******************************************************************************!*\
      !*** ./apps/angular-store-app/src/app/product-page/product-page.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ProductPageComponent */

    /***/
    function SVk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function () {
        return ProductPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "VfN6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../products/state/products.query */
      "05AR");
      /* harmony import */


      var _products_state_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../products/state/products.service */
      "GRt5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductPageComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.description);
        }
      }

      var ProductPageComponent = /*#__PURE__*/function () {
        function ProductPageComponent(activatedRoute, productsService, productsQuery) {
          _classCallCheck(this, ProductPageComponent);

          this.activatedRoute = activatedRoute;
          this.productsService = productsService;
          this.productsQuery = productsQuery;
          this.product$ = this.productsQuery.selectEntity(this.productId);
        }

        _createClass(ProductPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
              return params.get('id');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (id) {
              return !_this.productsQuery.hasEntity(id);
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
              return _this.productsService.getProduct(id);
            })).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "productId",
          get: function get() {
            return this.activatedRoute.snapshot.params.id;
          }
        }]);

        return ProductPageComponent;
      }();

      ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) {
        return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_state_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]));
      };

      ProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProductPageComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 3,
        consts: [["class", "padding", 4, "ngIf"], [1, "padding"]],
        template: function ProductPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductPageComponent_div_0_Template, 5, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.product$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        encapsulation: 2
      });
      ProductPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _products_state_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]])], ProductPageComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            template: "\n    <div *ngIf=\"product$ | async as product\" class=\"padding\">\n      <h1>{{ product.title }}</h1>\n      <h6>{{ product.description }}</h6>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _products_state_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
          }, {
            type: _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/V8x":
    /*!*************************************************************************!*\
      !*** ./libs/akita/src/lib/plugins/dirtyCheck/entityDirtyCheckPlugin.ts ***!
      \*************************************************************************/

    /*! exports provided: EntityDirtyCheckPlugin */

    /***/
    function V8x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityDirtyCheckPlugin", function () {
        return EntityDirtyCheckPlugin;
      });
      /* harmony import */


      var _dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dirtyCheckPlugin */
      "Qu3/");
      /* harmony import */


      var _entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../entityCollectionPlugin */
      "gUUV");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../coerceArray */
      "6ukB");

      var EntityDirtyCheckPlugin = /*#__PURE__*/function (_entityCollectionPlug) {
        _inherits(EntityDirtyCheckPlugin, _entityCollectionPlug);

        var _super2 = _createSuper(EntityDirtyCheckPlugin);

        function EntityDirtyCheckPlugin(query) {
          var _thisSuper, _this2;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityDirtyCheckPlugin);

          _this2 = _super2.call(this, query, params.entityIds);
          _this2.query = query;
          _this2.params = params;
          _this2._someDirty = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          _this2.someDirty$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this2.query.select(function (state) {
            return state.entities;
          }), _this2._someDirty.asObservable()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this2.checkSomeDirty();
          }));
          _this2.params = Object.assign(Object.assign({}, _dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["dirtyCheckDefaultParams"]), params); // TODO lazy activate?

          _this2.activate();

          _this2.selectIds().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1)).subscribe(function (ids) {
            _get((_thisSuper = _assertThisInitialized(_this2), _getPrototypeOf(EntityDirtyCheckPlugin.prototype)), "rebase", _thisSuper).call(_thisSuper, ids, {
              afterAdd: function afterAdd(plugin) {
                return plugin.setHead();
              }
            });
          });

          return _this2;
        }

        _createClass(EntityDirtyCheckPlugin, [{
          key: "setHead",
          value: function setHead(ids) {
            if (this.params.entityIds && ids) {
              var toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
              var someAreWatched = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.params.entityIds).some(function (id) {
                return toArray.indexOf(id) > -1;
              });

              if (someAreWatched === false) {
                return this;
              }
            }

            this.forEachId(ids, function (e) {
              return e.setHead();
            });

            this._someDirty.next();

            return this;
          }
        }, {
          key: "hasHead",
          value: function hasHead(id) {
            if (this.entities.has(id)) {
              var entity = this.getEntity(id);
              return entity.hasHead();
            }

            return false;
          }
        }, {
          key: "reset",
          value: function reset(ids) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.forEachId(ids, function (e) {
              return e.reset(params);
            });
          }
        }, {
          key: "isDirty",
          value: function isDirty(id) {
            var asObservable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.entities.has(id)) {
              var entity = this.getEntity(id);
              return asObservable ? entity.isDirty$ : entity.isDirty();
            }

            return false;
          }
        }, {
          key: "someDirty",
          value: function someDirty() {
            return this.checkSomeDirty();
          }
        }, {
          key: "isPathDirty",
          value: function isPathDirty(id, path) {
            if (this.entities.has(id)) {
              var head = this.getEntity(id).getHead();
              var current = this.query.getEntity(id);
              var currentPathValue = Object(_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["getNestedPath"])(current, path);
              var headPathValue = Object(_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["getNestedPath"])(head, path);
              return this.params.comparator(currentPathValue, headPathValue);
            }

            return null;
          }
        }, {
          key: "destroy",
          value: function destroy(ids) {
            this.forEachId(ids, function (e) {
              return e.destroy();
            });
            /** complete only when the plugin destroys */

            if (!ids) {
              this._someDirty.complete();
            }
          }
        }, {
          key: "instantiatePlugin",
          value: function instantiatePlugin(id) {
            return new _dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_0__["DirtyCheckPlugin"](this.query, this.params, id);
          }
        }, {
          key: "checkSomeDirty",
          value: function checkSomeDirty() {
            var entitiesIds = this.resolvedIds();

            var _iterator = _createForOfIteratorHelper(entitiesIds),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var id = _step.value;

                if (this.getEntity(id).isDirty()) {
                  return true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return false;
          }
        }]);

        return EntityDirtyCheckPlugin;
      }(_entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_1__["EntityCollectionPlugin"]);
      /***/

    },

    /***/
    "/m3n":
    /*!*************************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/state/products.store.ts ***!
      \*************************************************************************/

    /*! exports provided: ProductsStore */

    /***/
    function m3n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsStore", function () {
        return ProductsStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      var ProductsStore = /*#__PURE__*/function (_datorama_akita__WEBP2) {
        _inherits(ProductsStore, _datorama_akita__WEBP2);

        var _super3 = _createSuper(ProductsStore);

        function ProductsStore() {
          _classCallCheck(this, ProductsStore);

          return _super3.call(this, {
            active: []
          });
        }

        return ProductsStore;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]);

      ProductsStore.ɵfac = function ProductsStore_Factory(t) {
        return new (t || ProductsStore)();
      };

      ProductsStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProductsStore,
        factory: ProductsStore.ɵfac,
        providedIn: 'root'
      });
      ProductsStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'products'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProductsStore);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsStore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!**************************************************!*\
      !*** multi ./apps/angular-store-app/src/main.ts ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/natalie.frecka/Desktop/client/akita/apps/angular-store-app/src/main.ts */
      "MhGE");
      /***/
    },

    /***/
    "05AR":
    /*!*************************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/state/products.query.ts ***!
      \*************************************************************************/

    /*! exports provided: ProductsQuery */

    /***/
    function AR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsQuery", function () {
        return ProductsQuery;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _products_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./products.store */
      "/m3n");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      var ProductsQuery = /*#__PURE__*/function (_datorama_akita__WEBP3) {
        _inherits(ProductsQuery, _datorama_akita__WEBP3);

        var _super4 = _createSuper(ProductsQuery);

        function ProductsQuery(store) {
          var _this3;

          _classCallCheck(this, ProductsQuery);

          _this3 = _super4.call(this, store);
          _this3.store = store;
          return _this3;
        }

        _createClass(ProductsQuery, [{
          key: "getProducts",
          value: function getProducts(term, sortBy) {
            return this.selectAll({
              sortBy: sortBy,
              filterBy: function filterBy(entity) {
                return entity.title.toLowerCase().includes(term);
              }
            });
          }
        }]);

        return ProductsQuery;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["QueryEntity"]);

      ProductsQuery.ɵfac = function ProductsQuery_Factory(t) {
        return new (t || ProductsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_products_store__WEBPACK_IMPORTED_MODULE_2__["ProductsStore"]));
      };

      ProductsQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProductsQuery,
        factory: ProductsQuery.ɵfac,
        providedIn: 'root'
      });
      ProductsQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["QueryConfig"])({
        sortBy: 'price'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_products_store__WEBPACK_IMPORTED_MODULE_2__["ProductsStore"]])], ProductsQuery);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsQuery, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _products_store__WEBPACK_IMPORTED_MODULE_2__["ProductsStore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0Eth":
    /*!***********************************************************************!*\
      !*** ./libs/akita/src/lib/plugins/persistForm/persistNgFormPlugin.ts ***!
      \***********************************************************************/

    /*! exports provided: PersistNgFormPlugin */

    /***/
    function Eth(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersistNgFormPlugin", function () {
        return PersistNgFormPlugin;
      });
      /* harmony import */


      var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../plugin */
      "J5PQ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _getValueByString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../getValueByString */
      "doWv");
      /* harmony import */


      var _toBoolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../toBoolean */
      "KA1R");
      /* harmony import */


      var _isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../isString */
      "oJ0C");
      /* harmony import */


      var _setValueByString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../setValueByString */
      "QRUx");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../actions */
      "Q8dH");

      var PersistNgFormPlugin = /*#__PURE__*/function (_plugin__WEBPACK_IMPO) {
        _inherits(PersistNgFormPlugin, _plugin__WEBPACK_IMPO);

        var _super5 = _createSuper(PersistNgFormPlugin);

        function PersistNgFormPlugin(query, factoryFnOrPath) {
          var _this4;

          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          _classCallCheck(this, PersistNgFormPlugin);

          _this4 = _super5.call(this, query);
          _this4.query = query;
          _this4.factoryFnOrPath = factoryFnOrPath;
          _this4.params = params;
          _this4.params = Object.assign({
            debounceTime: 300,
            formKey: 'akitaForm',
            emitEvent: false,
            arrControlFactory: function arrControlFactory(v) {
              return _this4.builder.control(v);
            }
          }, params);
          _this4.isRootKeys = Object(_toBoolean__WEBPACK_IMPORTED_MODULE_3__["toBoolean"])(factoryFnOrPath) === false;
          _this4.isKeyBased = Object(_isString__WEBPACK_IMPORTED_MODULE_4__["isString"])(factoryFnOrPath) || _this4.isRootKeys;
          return _this4;
        }

        _createClass(PersistNgFormPlugin, [{
          key: "setForm",
          value: function setForm(form, builder) {
            this.form = form;
            this.builder = builder;
            this.activate();
            return this;
          }
        }, {
          key: "reset",
          value: function reset(initialState) {
            var _this5 = this;

            var value;

            if (initialState) {
              value = initialState;
            } else {
              value = this.isKeyBased ? this.initialValue : this.factoryFnOrPath();
            }

            if (this.isKeyBased) {
              Object.keys(this.initialValue).forEach(function (stateKey) {
                var value = _this5.initialValue[stateKey];

                if (Array.isArray(value) && _this5.builder) {
                  var formArray = _this5.form.controls[stateKey];

                  _this5.cleanArray(formArray);

                  value.forEach(function (v, i) {
                    _this5.form.get(stateKey).insert(i, _this5.params.arrControlFactory(v));
                  });
                }
              });
            }

            this.form.patchValue(value, {
              emitEvent: this.params.emitEvent
            });
            var storeValue = this.isKeyBased ? Object(_setValueByString__WEBPACK_IMPORTED_MODULE_5__["setValue"])(this.getQuery().getValue(), "".concat(this.getStore().storeName, ".").concat(this.factoryFnOrPath), value) : _defineProperty({}, this.params.formKey, value);
            this.updateStore(storeValue);
          }
        }, {
          key: "cleanArray",
          value: function cleanArray(control) {
            while (control.length !== 0) {
              control.removeAt(0);
            }
          }
        }, {
          key: "resolveInitialValue",
          value: function resolveInitialValue(formValue, root) {
            var _this6 = this;

            if (!formValue) return;
            return Object.keys(formValue).reduce(function (acc, stateKey) {
              var value = root[stateKey];

              if (Array.isArray(value) && _this6.builder) {
                var factory = _this6.params.arrControlFactory;

                _this6.cleanArray(_this6.form.get(stateKey));

                value.forEach(function (v, i) {
                  _this6.form.get(stateKey).insert(i, factory(v));
                });
              }

              acc[stateKey] = root[stateKey];
              return acc;
            }, {});
          }
        }, {
          key: "activate",
          value: function activate() {
            var _this7 = this;

            var path;

            if (this.isKeyBased) {
              if (this.isRootKeys) {
                this.initialValue = this.resolveInitialValue(this.form.value, this.getQuery().getValue());
                this.form.patchValue(this.initialValue, {
                  emitEvent: this.params.emitEvent
                });
              } else {
                path = "".concat(this.getStore().storeName, ".").concat(this.factoryFnOrPath);
                var root = Object(_getValueByString__WEBPACK_IMPORTED_MODULE_2__["getValue"])(this.getQuery().getValue(), path);
                this.initialValue = this.resolveInitialValue(root, root);
                this.form.patchValue(this.initialValue, {
                  emitEvent: this.params.emitEvent
                });
              }
            } else {
              if (!this.getQuery().getValue()[this.params.formKey]) {
                Object(_actions__WEBPACK_IMPORTED_MODULE_6__["logAction"])('@PersistNgFormPlugin activate');
                this.updateStore(_defineProperty({}, this.params.formKey, this.factoryFnOrPath()));
              }

              var value = this.getQuery().getValue()[this.params.formKey];
              this.form.patchValue(value);
            }

            this.formChanges = this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(this.params.debounceTime)).subscribe(function (value) {
              Object(_actions__WEBPACK_IMPORTED_MODULE_6__["logAction"])('@PersistForm - Update');
              var newState;

              if (_this7.isKeyBased) {
                if (_this7.isRootKeys) {
                  newState = function newState(state) {
                    return Object.assign(Object.assign({}, state), value);
                  };
                } else {
                  newState = function newState(state) {
                    return Object(_setValueByString__WEBPACK_IMPORTED_MODULE_5__["setValue"])(state, path, value);
                  };
                }
              } else {
                newState = function newState() {
                  return _defineProperty({}, _this7.params.formKey, value);
                };
              }

              _this7.updateStore(newState(_this7.getQuery().getValue()));
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.formChanges && this.formChanges.unsubscribe();
            this.form = null;
            this.builder = null;
          }
        }]);

        return PersistNgFormPlugin;
      }(_plugin__WEBPACK_IMPORTED_MODULE_0__["AkitaPlugin"]);
      /***/

    },

    /***/
    "0Fb4":
    /*!************************************************!*\
      !*** ./libs/akita/src/lib/toEntitiesObject.ts ***!
      \************************************************/

    /*! exports provided: toEntitiesObject */

    /***/
    function Fb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesObject", function () {
        return toEntitiesObject;
      }); // @internal


      function toEntitiesObject(entities, idKey, preAddEntity) {
        var acc = {
          entities: {},
          ids: []
        };

        var _iterator2 = _createForOfIteratorHelper(entities),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var entity = _step2.value;
            // evaluate the middleware first to support dynamic ids
            var current = preAddEntity(entity);
            acc.entities[current[idKey]] = current;
            acc.ids.push(current[idKey]);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return acc;
      }
      /***/

    },

    /***/
    "0L1a":
    /*!********************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/products.module.ts ***!
      \********************************************************************/

    /*! exports provided: ProductsModule */

    /***/
    function L1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
        return ProductsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./products.component */
      "ADtu");
      /* harmony import */


      var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product/product.component */
      "NMJT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");
      /* harmony import */


      var _state_products_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./state/products.effects */
      "K/Dx");
      /* harmony import */


      var _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../libs/akita-ng-effects/src/lib/effect-feature.module */
      "roSn");

      var publicApi = [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]];

      var ProductsModule = function ProductsModule() {
        _classCallCheck(this, ProductsModule);
      };

      ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductsModule
      });
      ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductsModule_Factory(t) {
          return new (t || ProductsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_6__["AkitaNgEffectsModule"].forFeature([_state_products_effects__WEBPACK_IMPORTED_MODULE_7__["ProductsEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
          declarations: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_8__["EffectsFeatureModule"]],
          exports: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_6__["AkitaNgEffectsModule"].forFeature([_state_products_effects__WEBPACK_IMPORTED_MODULE_7__["ProductsEffects"]])],
            declarations: [publicApi],
            exports: [publicApi]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "18rb":
    /*!*************************************!*\
      !*** ./libs/akita/src/lib/store.ts ***!
      \*************************************/

    /*! exports provided: Store */

    /***/
    function rb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Store", function () {
        return Store;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actions */
      "Q8dH");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config */
      "LteI");
      /* harmony import */


      var _deepFreeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./deepFreeze */
      "LKi4");
      /* harmony import */


      var _dispatchers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dispatchers */
      "zqjR");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./env */
      "VCUg");
      /* harmony import */


      var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./errors */
      "CKFZ");
      /* harmony import */


      var _isDefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./isDefined */
      "Y5+g");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _isPlainObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./isPlainObject */
      "Sr74");
      /* harmony import */


      var _root__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./root */
      "1Jmr");
      /* harmony import */


      var _storeConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./storeConfig */
      "gySQ");
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./stores */
      "40zj");
      /* harmony import */


      var _transaction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./transaction */
      "UiMj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var Store = /*#__PURE__*/function () {
        function Store(initialState) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Store);

          this.options = options;
          this.inTransaction = false;
          this.cache = {
            active: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false),
            ttl: null
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


        _createClass(Store, [{
          key: "setLoading",
          value: function setLoading() {
            var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (loading !== this._value().loading) {
              Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Set Loading');

              this._setState(function (state) {
                return Object.assign(Object.assign({}, state), {
                  loading: loading
                });
              });
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

        }, {
          key: "setHasCache",
          value: function setHasCache(hasCache) {
            var _this8 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              restartTTL: false
            };

            if (hasCache !== this.cache.active.value) {
              this.cache.active.next(hasCache);
            }

            if (options.restartTTL) {
              var ttlConfig = this.getCacheTTL();

              if (ttlConfig) {
                if (this.cache.ttl !== null) {
                  clearTimeout(this.cache.ttl);
                }

                this.cache.ttl = setTimeout(function () {
                  return _this8.setHasCache(false);
                }, ttlConfig);
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

        }, {
          key: "getValue",
          value: function getValue() {
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

        }, {
          key: "setError",
          value: function setError(error) {
            if (error !== this._value().error) {
              Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Set Error');

              this._setState(function (state) {
                return Object.assign(Object.assign({}, state), {
                  error: error
                });
              });
            }
          } // @internal

        }, {
          key: "_select",
          value: function _select(project) {
            return this.store.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (snapshot) {
              return project(snapshot.state);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          } // @internal

        }, {
          key: "_value",
          value: function _value() {
            return this.storeValue;
          } // @internal

        }, {
          key: "_cache",
          value: function _cache() {
            return this.cache.active;
          } // @internal

        }, {
          key: "_setState",
          // @internal
          value: function _setState(newState) {
            var _this9 = this;

            var _dispatchAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(newState)) {
              var _newState = newState(this._value());

              this.storeValue = _env__WEBPACK_IMPORTED_MODULE_6__["__DEV__"] ? this.deepFreeze(_newState) : _newState;
            } else {
              this.storeValue = newState;
            }

            if (!this.store) {
              this.store = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
                state: this.storeValue
              });

              if (Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])()) {
                this.store.subscribe(function (_ref3) {
                  var action = _ref3.action;

                  if (action) {
                    Object(_dispatchers__WEBPACK_IMPORTED_MODULE_5__["dispatchUpdate"])(_this9.storeName, action);
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

        }, {
          key: "reset",
          value: function reset() {
            var _this10 = this;

            if (this.isResettable()) {
              Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Reset');

              this._setState(function () {
                return Object.assign({}, _this10._initialState);
              });

              this.setHasCache(false);
            } else {
              Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && console.warn("You need to enable the reset functionality");
            }
          }
        }, {
          key: "update",
          value: function update(stateOrCallback) {
            Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Update');
            var newState;

            var currentState = this._value();

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(stateOrCallback)) {
              newState = Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(this._producerFn) ? this._producerFn(currentState, stateOrCallback) : stateOrCallback(currentState);
            } else {
              newState = stateOrCallback;
            }

            var withHook = this.akitaPreUpdate(currentState, Object.assign(Object.assign({}, currentState), newState));
            var resolved = Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_10__["isPlainObject"])(currentState) ? withHook : new currentState.constructor(withHook);

            this._setState(resolved);
          }
        }, {
          key: "updateStoreConfig",
          value: function updateStoreConfig(newOptions) {
            this.options = Object.assign(Object.assign({}, this.options), newOptions);
          } // @internal

        }, {
          key: "akitaPreUpdate",
          value: function akitaPreUpdate(_, nextState) {
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

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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

        }, {
          key: "destroy",
          value: function destroy() {
            var hmrEnabled = _root__WEBPACK_IMPORTED_MODULE_11__["isBrowser"] ? window.hmrEnabled : false;

            if (!hmrEnabled && this === _stores__WEBPACK_IMPORTED_MODULE_13__["__stores__"][this.storeName]) {
              delete _stores__WEBPACK_IMPORTED_MODULE_13__["__stores__"][this.storeName];
              Object(_dispatchers__WEBPACK_IMPORTED_MODULE_5__["dispatchDeleted"])(this.storeName);
              this.setHasCache(false);
              this.cache.active.complete();
              this.store.complete();
            }
          }
        }, {
          key: "onInit",
          value: function onInit(initialState) {
            _stores__WEBPACK_IMPORTED_MODULE_13__["__stores__"][this.storeName] = this;

            this._setState(function () {
              return initialState;
            });

            Object(_dispatchers__WEBPACK_IMPORTED_MODULE_5__["dispatchAdded"])(this.storeName);

            if (this.isResettable()) {
              this._initialState = initialState;
            }

            Object(_env__WEBPACK_IMPORTED_MODULE_6__["isDev"])() && Object(_errors__WEBPACK_IMPORTED_MODULE_7__["assertStoreHasName"])(this.storeName, this.constructor.name);
          }
        }, {
          key: "dispatch",
          value: function dispatch(state) {
            var _dispatchAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var action = undefined;

            if (_dispatchAction) {
              action = _actions__WEBPACK_IMPORTED_MODULE_2__["currentAction"];
              Object(_actions__WEBPACK_IMPORTED_MODULE_2__["resetCustomAction"])();
            }

            this.store.next({
              state: state,
              action: action
            });
          }
        }, {
          key: "watchTransaction",
          value: function watchTransaction() {
            var _this11 = this;

            Object(_transaction__WEBPACK_IMPORTED_MODULE_14__["commit"])().subscribe(function () {
              _this11.inTransaction = false;

              _this11.dispatch(_this11._value());
            });
          }
        }, {
          key: "isResettable",
          value: function isResettable() {
            if (this.resettable === false) {
              return false;
            }

            return this.resettable || Object(_config__WEBPACK_IMPORTED_MODULE_3__["getAkitaConfig"])().resettable;
          }
        }, {
          key: "handleTransaction",
          value: function handleTransaction() {
            if (!this.inTransaction) {
              this.watchTransaction();
              this.inTransaction = true;
            }
          }
        }, {
          key: "getCacheTTL",
          value: function getCacheTTL() {
            return this.cacheConfig && this.cacheConfig.ttl || Object(_config__WEBPACK_IMPORTED_MODULE_3__["getAkitaConfig"])().ttl;
          }
        }, {
          key: "config",
          get: function get() {
            return this.constructor[_storeConfig__WEBPACK_IMPORTED_MODULE_12__["configKey"]] || {};
          } // @internal

        }, {
          key: "storeName",
          get: function get() {
            return this.config.storeName || this.options.storeName || this.options.name;
          } // @internal

        }, {
          key: "deepFreeze",
          get: function get() {
            return this.config.deepFreezeFn || this.options.deepFreezeFn || _deepFreeze__WEBPACK_IMPORTED_MODULE_4__["deepFreeze"];
          } // @internal

        }, {
          key: "cacheConfig",
          get: function get() {
            return this.config.cache || this.options.cache;
          }
        }, {
          key: "_producerFn",
          get: function get() {
            return this.config.producerFn || this.options.producerFn || Object(_config__WEBPACK_IMPORTED_MODULE_3__["getGlobalProducerFn"])();
          } // @internal

        }, {
          key: "resettable",
          get: function get() {
            return Object(_isDefined__WEBPACK_IMPORTED_MODULE_8__["isDefined"])(this.config.resettable) ? this.config.resettable : this.options.resettable;
          }
        }]);

        return Store;
      }();

      Store.ɵfac = function Store_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinvalidFactory"]();
      };

      Store.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({
        token: Store,
        factory: Store.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵsetClassMetadata"](Store, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__["Injectable"]
        }], function () {
          return [{
            type: undefined
          }, {
            type: undefined
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1Jmr":
    /*!************************************!*\
      !*** ./libs/akita/src/lib/root.ts ***!
      \************************************/

    /*! exports provided: isBrowser, isNotBrowser, hasLocalStorage, hasSessionStorage */

    /***/
    function Jmr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isBrowser", function () {
        return isBrowser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNotBrowser", function () {
        return isNotBrowser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasLocalStorage", function () {
        return hasLocalStorage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasSessionStorage", function () {
        return hasSessionStorage;
      });

      var isBrowser = typeof window !== 'undefined';
      var isNotBrowser = !isBrowser; // export const isNativeScript = typeof global !== 'undefined' && (<any>global).__runtimeVersion !== 'undefined'; TODO is this used?

      var hasLocalStorage = function hasLocalStorage() {
        try {
          return typeof localStorage !== 'undefined';
        } catch (_a) {
          return false;
        }
      };

      var hasSessionStorage = function hasSessionStorage() {
        try {
          return typeof sessionStorage !== 'undefined';
        } catch (_a) {
          return false;
        }
      };
      /***/

    },

    /***/
    "2EyP":
    /*!***************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/cart.component.ts ***!
      \***************************************************************/

    /*! exports provided: CartComponent */

    /***/
    function EyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _state_cart_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state/cart.query */
      "xv5F");
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");
      /* harmony import */


      var _state_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state/cart.actions */
      "JMny");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CartComponent_ng_container_1_table_1_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_1_table_1_tr_14_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var item_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r7.remove(item_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete_forever");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r6.total, "$");
        }
      }

      function CartComponent_ng_container_1_table_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1);
        }
      }

      function CartComponent_ng_container_1_h3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your cart is empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CartComponent_ng_container_1_h4_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "credit_card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r4.total$), "$ ");
        }
      }

      function CartComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_container_1_table_1_Template, 15, 1, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_ng_container_1_h3_2_Template, 2, 0, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_ng_container_1_h4_3_Template, 5, 3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var items_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !items_r1.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.length);
        }
      }

      var CartComponent = /*#__PURE__*/function () {
        function CartComponent(cartQuery, actions) {
          _classCallCheck(this, CartComponent);

          this.cartQuery = cartQuery;
          this.actions = actions;
        }

        _createClass(CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.items$ = this.cartQuery.selectItems$;
            this.total$ = this.cartQuery.selectTotal$;
            this.notify$ = this.cartQuery.selectNotification$;
          }
        }, {
          key: "remove",
          value: function remove(_ref4) {
            var productId = _ref4.productId;
            this.actions.dispatch(_state_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItem({
              productId: productId
            }));
          }
        }]);

        return CartComponent;
      }();

      CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_cart_query__WEBPACK_IMPORTED_MODULE_1__["CartQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]));
      };

      CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartComponent,
        selectors: [["app-cart"]],
        decls: 3,
        vars: 3,
        consts: [[1, "padding"], [4, "ngIf"], ["class", "striped", 4, "ngIf"], ["class", "flex align-center", 4, "ngIf"], [1, "striped"], [4, "ngFor", "ngForOf"], [1, "btn", "waves-effect", "waves-light", "red", 3, "click"], [1, "material-icons"], [1, "flex", "align-center"], [1, "material-icons", "medium", "mr5"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_container_1_Template, 4, 3, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.items$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cart',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            templateUrl: './cart.component.html'
          }]
        }], function () {
          return [{
            type: _state_cart_query__WEBPACK_IMPORTED_MODULE_1__["CartQuery"]
          }, {
            type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2NMn":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/addEntities.ts ***!
      \*******************************************/

    /*! exports provided: addEntities */

    /***/
    function NMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addEntities", function () {
        return addEntities;
      });
      /* harmony import */


      var _hasEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hasEntity */
      "dNb/"); // @internal


      function addEntities(_ref5) {
        var state = _ref5.state,
            entities = _ref5.entities,
            idKey = _ref5.idKey,
            _ref5$options = _ref5.options,
            options = _ref5$options === void 0 ? {} : _ref5$options,
            preAddEntity = _ref5.preAddEntity;
        var newEntities = {};
        var newIds = [];
        var hasNewEntities = false;

        var _iterator3 = _createForOfIteratorHelper(entities),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var entity = _step3.value;

            if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_0__["hasEntity"])(state.entities, entity[idKey]) === false) {
              // evaluate the middleware first to support dynamic ids
              var current = preAddEntity(entity);
              var entityId = current[idKey];
              newEntities[entityId] = current;
              if (options.prepend) newIds.unshift(entityId);else newIds.push(entityId);
              hasNewEntities = true;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return hasNewEntities ? {
          newState: Object.assign(Object.assign({}, state), {
            entities: Object.assign(Object.assign({}, state.entities), newEntities),
            ids: options.prepend ? [].concat(newIds, _toConsumableArray(state.ids)) : [].concat(_toConsumableArray(state.ids), newIds)
          }),
          newIds: newIds
        } : null;
      }
      /***/

    },

    /***/
    "2zEB":
    /*!*****************************************************************!*\
      !*** ./libs/akita/src/lib/plugins/paginator/paginatorPlugin.ts ***!
      \*****************************************************************/

    /*! exports provided: PaginatorPlugin, Paginator */

    /***/
    function zEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatorPlugin", function () {
        return PaginatorPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Paginator", function () {
        return Paginator;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../actions */
      "Q8dH");
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../isNil */
      "82/w");
      /* harmony import */


      var _isUndefined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../isUndefined */
      "9NJV");
      /* harmony import */


      var _transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../transaction */
      "UiMj");
      /* harmony import */


      var _plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../plugin */
      "J5PQ");

      var paginatorDefaults = {
        pagesControls: false,
        range: false,
        startWith: 1,
        cacheTimeout: undefined,
        clearStoreWithCache: true
      };

      var PaginatorPlugin = /*#__PURE__*/function (_plugin__WEBPACK_IMPO2) {
        _inherits(PaginatorPlugin, _plugin__WEBPACK_IMPO2);

        var _super6 = _createSuper(PaginatorPlugin);

        function PaginatorPlugin(query) {
          var _this12;

          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, PaginatorPlugin);

          _this12 = _super6.call(this, query, {
            resetFn: function resetFn() {
              _this12.initial = false;

              _this12.destroy({
                clearCache: true,
                currentPage: 1
              });
            }
          });
          _this12.query = query;
          _this12.config = config;
          /** Save current filters, sorting, etc. in cache */

          _this12.metadata = new Map();
          _this12.pages = new Map();
          _this12.pagination = {
            currentPage: 1,
            perPage: 0,
            total: 0,
            lastPage: 0,
            data: []
          };
          /**
           * When the user navigates to a different page and return
           * we don't want to call `clearCache` on first time.
           */

          _this12.initial = true;
          /**
           * Proxy to the query loading
           */

          _this12.isLoading$ = _this12.query.selectLoading().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0));
          _this12.config = Object.assign(Object.assign({}, paginatorDefaults), config);
          var _this12$config = _this12.config,
              startWith = _this12$config.startWith,
              cacheTimeout = _this12$config.cacheTimeout;
          _this12.page = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](startWith);

          if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(cacheTimeout)) {
            _this12.clearCacheSubscription = cacheTimeout.subscribe(function () {
              return _this12.clearCache();
            });
          }

          return _this12;
        }
        /**
         * Listen to page changes
         */


        _createClass(PaginatorPlugin, [{
          key: "withControls",

          /**
           * Whether to generate an array of pages for *ngFor
           * [1, 2, 3, 4]
           */
          value: function withControls() {
            this.config.pagesControls = true;
            return this;
          }
          /**
           * Whether to generate the `from` and `to` keys
           * [1, 2, 3, 4]
           */

        }, {
          key: "withRange",
          value: function withRange() {
            this.config.range = true;
            return this;
          }
          /**
           * Set the loading state
           */

        }, {
          key: "setLoading",
          value: function setLoading() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.getStore().setLoading(value);
          }
          /**
           * Update the pagination object and add the page
           */

        }, {
          key: "update",
          value: function update(response) {
            this.pagination = response;
            this.addPage(response.data);
          }
          /**
           *
           * Set the ids and add the page to store
           */

        }, {
          key: "addPage",
          value: function addPage(data) {
            var _this13 = this;

            this.pages.set(this.currentPage, {
              ids: data.map(function (entity) {
                return entity[_this13.getStore().idKey];
              })
            });
            this.getStore().upsertMany(data);
          }
          /**
           * Clear the cache.
           */

        }, {
          key: "clearCache",
          value: function clearCache() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
        }, {
          key: "clearPage",
          value: function clearPage(page) {
            this.pages["delete"](page);
          }
          /**
           * Clear the cache timeout and optionally the pages
           */

        }, {
          key: "destroy",
          value: function destroy() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                clearCache = _ref6.clearCache,
                currentPage = _ref6.currentPage;

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

        }, {
          key: "isPageActive",
          value: function isPageActive(page) {
            return this.currentPage === page;
          }
          /**
           * Set the current page
           */

        }, {
          key: "setPage",
          value: function setPage(page) {
            if (page !== this.currentPage || !this.hasPage(page)) {
              this.page.next(this.pagination.currentPage = page);
            }
          }
          /**
           * Increment current page
           */

        }, {
          key: "nextPage",
          value: function nextPage() {
            if (this.currentPage !== this.pagination.lastPage) {
              this.setPage(this.pagination.currentPage + 1);
            }
          }
          /**
           * Decrement current page
           */

        }, {
          key: "prevPage",
          value: function prevPage() {
            if (this.pagination.currentPage > 1) {
              this.setPage(this.pagination.currentPage - 1);
            }
          }
          /**
           * Set current page to last
           */

        }, {
          key: "setLastPage",
          value: function setLastPage() {
            this.setPage(this.pagination.lastPage);
          }
          /**
           * Set current page to first
           */

        }, {
          key: "setFirstPage",
          value: function setFirstPage() {
            this.setPage(1);
          }
          /**
           * Check if page exists in cache
           */

        }, {
          key: "hasPage",
          value: function hasPage(page) {
            return this.pages.has(page);
          }
          /**
           * Get the current page if it's in cache, otherwise invoke the request
           */

        }, {
          key: "getPage",
          value: function getPage(req) {
            var _this14 = this;

            var page = this.pagination.currentPage;

            if (this.hasPage(page)) {
              return this.selectPage(page);
            } else {
              this.setLoading(true);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(req()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (config) {
                page = config.currentPage;
                Object(_transaction__WEBPACK_IMPORTED_MODULE_6__["applyTransaction"])(function () {
                  _this14.setLoading(false);

                  _this14.update(config);
                });
                return _this14.selectPage(page);
              }));
            }
          }
        }, {
          key: "getQuery",
          value: function getQuery() {
            return this.query;
          }
        }, {
          key: "refreshCurrentPage",
          value: function refreshCurrentPage() {
            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_4__["isNil"])(this.currentPage) === false) {
              this.clearPage(this.currentPage);
              this.setPage(this.currentPage);
            }
          }
        }, {
          key: "getFrom",
          value: function getFrom() {
            if (this.isFirst) {
              return 1;
            }

            return (this.currentPage - 1) * this.pagination.perPage + 1;
          }
        }, {
          key: "getTo",
          value: function getTo() {
            if (this.isLast) {
              return this.pagination.total;
            }

            return this.currentPage * this.pagination.perPage;
          }
          /**
           * Select the page
           */

        }, {
          key: "selectPage",
          value: function selectPage(page) {
            var _this15 = this;

            return this.query.selectAll({
              asObject: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entities) {
              var response = Object.assign(Object.assign({}, _this15.pagination), {
                data: _this15.pages.get(page).ids.map(function (id) {
                  return entities[id];
                })
              });
              var _this15$config = _this15.config,
                  range = _this15$config.range,
                  pagesControls = _this15$config.pagesControls;
              /** If no total - calc it */

              if (isNaN(_this15.pagination.total)) {
                if (response.lastPage === 1) {
                  response.total = response.data ? response.data.length : 0;
                } else {
                  response.total = response.perPage * response.lastPage;
                }

                _this15.pagination.total = response.total;
              }

              if (range) {
                response.from = _this15.getFrom();
                response.to = _this15.getTo();
              }

              if (pagesControls) {
                response.pageControls = generatePages(_this15.pagination.total, _this15.pagination.perPage);
              }

              return response;
            }));
          }
        }, {
          key: "pageChanges",
          get: function get() {
            return this.page.asObservable();
          }
          /**
           * Get the current page number
           */

        }, {
          key: "currentPage",
          get: function get() {
            return this.pagination.currentPage;
          }
          /**
           * Check if current page is the first one
           */

        }, {
          key: "isFirst",
          get: function get() {
            return this.currentPage === 1;
          }
          /**
           * Check if current page is the last one
           */

        }, {
          key: "isLast",
          get: function get() {
            return this.currentPage === this.pagination.lastPage;
          }
        }]);

        return PaginatorPlugin;
      }(_plugin__WEBPACK_IMPORTED_MODULE_7__["AkitaPlugin"]);

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_actions__WEBPACK_IMPORTED_MODULE_3__["action"])('@Pagination - New Page'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], PaginatorPlugin.prototype, "update", null);
      /**
       * Generate an array so we can ngFor them to navigate between pages
       */

      function generatePages(total, perPage) {
        var len = Math.ceil(total / perPage);
        var arr = [];

        for (var i = 0; i < len; i++) {
          arr.push(i + 1);
        }

        return arr;
      }
      /** backward compatibility */


      var Paginator = PaginatorPlugin;
      /***/
    },

    /***/
    "40zj":
    /*!**************************************!*\
      !*** ./libs/akita/src/lib/stores.ts ***!
      \**************************************/

    /*! exports provided: __stores__, __queries__ */

    /***/
    function zj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__stores__", function () {
        return __stores__;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__queries__", function () {
        return __queries__;
      });
      /* harmony import */


      var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./root */
      "1Jmr"); // @internal


      var __stores__ = {}; // @internal

      var __queries__ = {};

      if (_root__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
        window.$$stores = __stores__;
        window.$$queries = __queries__;
      }
      /***/

    },

    /***/
    "4F+6":
    /*!*************************************!*\
      !*** ./libs/akita/src/lib/index.ts ***!
      \*************************************/

    /*! exports provided: action, currentAction, logAction, resetCustomAction, setAction, setSkipAction, getExitingActives, hasActiveState, isMultiActiveState, resolveActiveEntity, addEntities, arrayAdd, arrayFind, distinctUntilArrayItemChanged, find, arrayRemove, arrayToggle, byId, byKey, arrayUpdate, arrayUpsert, cacheable, coerceArray, combineQueries, akitaConfig, getAkitaConfig, DEFAULT_ID_KEY, akitaDevtools, $$deleteStore, $$addStore, $$updateStore, dispatchDeleted, dispatchAdded, dispatchUpdate, entitiesToArray, entitiesToMap, EntityActions, EntityService, EntityStore, EntityUIStore, enableAkitaProdMode, isDev, __DEV__, filterNil, filterNilValue, createEntityQuery, createEntityStore, createQuery, createStore, getActiveEntities, getInitialEntitiesState, getValue, guid, hasEntity, isArray, isDefined, isEmpty, isFunction, isNil, isNumber, isObject, isPlainObject, isString, isUndefined, persistState, selectPersistStateInit, dirtyCheckDefaultParams, DirtyCheckPlugin, getNestedPath, EntityDirtyCheckPlugin, EntityCollectionPlugin, Paginator, PaginatorPlugin, PersistNgFormPlugin, AkitaPlugin, EntityStateHistoryPlugin, StateHistoryPlugin, Query, QueryConfig, queryConfigKey, EntityUIQuery, QueryEntity, removeAllEntities, removeEntities, resetStores, isNotBrowser, EntityStoreAction, getEntityStore, getEntityStoreByName, getStore, getStoreByName, runEntityStoreAction, runStoreAction, StoreAction, isEntityState, setEntities, setLoading, setLoadingAndError, setValue, SnapshotManager, snapshotManager, compareValues, Order, sortByOptions, Store, configKey, StoreConfig, __stores__, toBoolean, toEntitiesIds, toEntitiesObject, trackIdChanges, applyTransaction, commit, endBatch, isTransactionInProcess, startBatch, transaction, transactionManager, withTransaction, updateEntities */

    /***/
    function F6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions */
      "Q8dH");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "action", function () {
        return _actions__WEBPACK_IMPORTED_MODULE_0__["action"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "currentAction", function () {
        return _actions__WEBPACK_IMPORTED_MODULE_0__["currentAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "logAction", function () {
        return _actions__WEBPACK_IMPORTED_MODULE_0__["logAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "resetCustomAction", function () {
        return _actions__WEBPACK_IMPORTED_MODULE_0__["resetCustomAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setAction", function () {
        return _actions__WEBPACK_IMPORTED_MODULE_0__["setAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setSkipAction", function () {
        return _actions__WEBPACK_IMPORTED_MODULE_0__["setSkipAction"];
      });
      /* harmony import */


      var _activeState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./activeState */
      "odxm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getExitingActives", function () {
        return _activeState__WEBPACK_IMPORTED_MODULE_1__["getExitingActives"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "hasActiveState", function () {
        return _activeState__WEBPACK_IMPORTED_MODULE_1__["hasActiveState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isMultiActiveState", function () {
        return _activeState__WEBPACK_IMPORTED_MODULE_1__["isMultiActiveState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "resolveActiveEntity", function () {
        return _activeState__WEBPACK_IMPORTED_MODULE_1__["resolveActiveEntity"];
      });
      /* harmony import */


      var _addEntities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addEntities */
      "2NMn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "addEntities", function () {
        return _addEntities__WEBPACK_IMPORTED_MODULE_2__["addEntities"];
      });
      /* harmony import */


      var _arrayAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./arrayAdd */
      "RPUs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayAdd", function () {
        return _arrayAdd__WEBPACK_IMPORTED_MODULE_3__["arrayAdd"];
      });
      /* harmony import */


      var _arrayFind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./arrayFind */
      "8vam");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayFind", function () {
        return _arrayFind__WEBPACK_IMPORTED_MODULE_4__["arrayFind"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "distinctUntilArrayItemChanged", function () {
        return _arrayFind__WEBPACK_IMPORTED_MODULE_4__["distinctUntilArrayItemChanged"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "find", function () {
        return _arrayFind__WEBPACK_IMPORTED_MODULE_4__["find"];
      });
      /* harmony import */


      var _arrayRemove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./arrayRemove */
      "WKK6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayRemove", function () {
        return _arrayRemove__WEBPACK_IMPORTED_MODULE_5__["arrayRemove"];
      });
      /* harmony import */


      var _arrayToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./arrayToggle */
      "yMBE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayToggle", function () {
        return _arrayToggle__WEBPACK_IMPORTED_MODULE_6__["arrayToggle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "byId", function () {
        return _arrayToggle__WEBPACK_IMPORTED_MODULE_6__["byId"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "byKey", function () {
        return _arrayToggle__WEBPACK_IMPORTED_MODULE_6__["byKey"];
      });
      /* harmony import */


      var _arrayUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./arrayUpdate */
      "WRE0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayUpdate", function () {
        return _arrayUpdate__WEBPACK_IMPORTED_MODULE_7__["arrayUpdate"];
      });
      /* harmony import */


      var _arrayUpsert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./arrayUpsert */
      "aw1X");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayUpsert", function () {
        return _arrayUpsert__WEBPACK_IMPORTED_MODULE_8__["arrayUpsert"];
      });
      /* harmony import */


      var _cacheable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./cacheable */
      "Devl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cacheable", function () {
        return _cacheable__WEBPACK_IMPORTED_MODULE_9__["cacheable"];
      });
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return _coerceArray__WEBPACK_IMPORTED_MODULE_10__["coerceArray"];
      });
      /* harmony import */


      var _combineQueries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./combineQueries */
      "PK/g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "combineQueries", function () {
        return _combineQueries__WEBPACK_IMPORTED_MODULE_11__["combineQueries"];
      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./config */
      "LteI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "akitaConfig", function () {
        return _config__WEBPACK_IMPORTED_MODULE_12__["akitaConfig"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getAkitaConfig", function () {
        return _config__WEBPACK_IMPORTED_MODULE_12__["getAkitaConfig"];
      });
      /* harmony import */


      var _defaultIDKey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./defaultIDKey */
      "kBYr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_ID_KEY", function () {
        return _defaultIDKey__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_ID_KEY"];
      });
      /* harmony import */


      var _devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./devtools */
      "WYxI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "akitaDevtools", function () {
        return _devtools__WEBPACK_IMPORTED_MODULE_14__["akitaDevtools"];
      });
      /* harmony import */


      var _dispatchers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./dispatchers */
      "zqjR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "$$deleteStore", function () {
        return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["$$deleteStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "$$addStore", function () {
        return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["$$addStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "$$updateStore", function () {
        return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["$$updateStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dispatchDeleted", function () {
        return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["dispatchDeleted"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dispatchAdded", function () {
        return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["dispatchAdded"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dispatchUpdate", function () {
        return _dispatchers__WEBPACK_IMPORTED_MODULE_15__["dispatchUpdate"];
      });
      /* harmony import */


      var _entitiesToArray__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./entitiesToArray */
      "JoxY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "entitiesToArray", function () {
        return _entitiesToArray__WEBPACK_IMPORTED_MODULE_16__["entitiesToArray"];
      });
      /* harmony import */


      var _entitiesToMap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./entitiesToMap */
      "5odZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "entitiesToMap", function () {
        return _entitiesToMap__WEBPACK_IMPORTED_MODULE_17__["entitiesToMap"];
      });
      /* harmony import */


      var _entityActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./entityActions */
      "RK5a");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityActions", function () {
        return _entityActions__WEBPACK_IMPORTED_MODULE_18__["EntityActions"];
      });
      /* harmony import */


      var _entityService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./entityService */
      "iXoB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityService", function () {
        return _entityService__WEBPACK_IMPORTED_MODULE_19__["EntityService"];
      });
      /* harmony import */


      var _entityStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./entityStore */
      "syuU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityStore", function () {
        return _entityStore__WEBPACK_IMPORTED_MODULE_20__["EntityStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityUIStore", function () {
        return _entityStore__WEBPACK_IMPORTED_MODULE_20__["EntityUIStore"];
      });
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./env */
      "VCUg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "enableAkitaProdMode", function () {
        return _env__WEBPACK_IMPORTED_MODULE_21__["enableAkitaProdMode"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isDev", function () {
        return _env__WEBPACK_IMPORTED_MODULE_21__["isDev"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "__DEV__", function () {
        return _env__WEBPACK_IMPORTED_MODULE_21__["__DEV__"];
      });
      /* harmony import */


      var _filterNil__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./filterNil */
      "klkp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "filterNil", function () {
        return _filterNil__WEBPACK_IMPORTED_MODULE_22__["filterNil"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "filterNilValue", function () {
        return _filterNil__WEBPACK_IMPORTED_MODULE_22__["filterNilValue"];
      });
      /* harmony import */


      var _fp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./fp */
      "rYvI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createEntityQuery", function () {
        return _fp__WEBPACK_IMPORTED_MODULE_23__["createEntityQuery"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createEntityStore", function () {
        return _fp__WEBPACK_IMPORTED_MODULE_23__["createEntityStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createQuery", function () {
        return _fp__WEBPACK_IMPORTED_MODULE_23__["createQuery"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createStore", function () {
        return _fp__WEBPACK_IMPORTED_MODULE_23__["createStore"];
      });
      /* harmony import */


      var _getActiveEntities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./getActiveEntities */
      "fVEQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getActiveEntities", function () {
        return _getActiveEntities__WEBPACK_IMPORTED_MODULE_24__["getActiveEntities"];
      });
      /* harmony import */


      var _getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./getInitialEntitiesState */
      "EJe+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getInitialEntitiesState", function () {
        return _getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_25__["getInitialEntitiesState"];
      });
      /* harmony import */


      var _getValueByString__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./getValueByString */
      "doWv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getValue", function () {
        return _getValueByString__WEBPACK_IMPORTED_MODULE_26__["getValue"];
      });
      /* harmony import */


      var _guid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./guid */
      "L/Kq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "guid", function () {
        return _guid__WEBPACK_IMPORTED_MODULE_27__["guid"];
      });
      /* harmony import */


      var _hasEntity__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./hasEntity */
      "dNb/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "hasEntity", function () {
        return _hasEntity__WEBPACK_IMPORTED_MODULE_28__["hasEntity"];
      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./isArray */
      "aDq+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return _isArray__WEBPACK_IMPORTED_MODULE_29__["isArray"];
      });
      /* harmony import */


      var _isDefined__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./isDefined */
      "Y5+g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isDefined", function () {
        return _isDefined__WEBPACK_IMPORTED_MODULE_30__["isDefined"];
      });
      /* harmony import */


      var _isEmpty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./isEmpty */
      "x9kZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return _isEmpty__WEBPACK_IMPORTED_MODULE_31__["isEmpty"];
      });
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isFunction", function () {
        return _isFunction__WEBPACK_IMPORTED_MODULE_32__["isFunction"];
      });
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isNil", function () {
        return _isNil__WEBPACK_IMPORTED_MODULE_33__["isNil"];
      });
      /* harmony import */


      var _isNumber__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./isNumber */
      "TPbr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return _isNumber__WEBPACK_IMPORTED_MODULE_34__["isNumber"];
      });
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./isObject */
      "iJBq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isObject", function () {
        return _isObject__WEBPACK_IMPORTED_MODULE_35__["isObject"];
      });
      /* harmony import */


      var _isPlainObject__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./isPlainObject */
      "Sr74");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isPlainObject", function () {
        return _isPlainObject__WEBPACK_IMPORTED_MODULE_36__["isPlainObject"];
      });
      /* harmony import */


      var _isString__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./isString */
      "oJ0C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isString", function () {
        return _isString__WEBPACK_IMPORTED_MODULE_37__["isString"];
      });
      /* harmony import */


      var _isUndefined__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./isUndefined */
      "9NJV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isUndefined", function () {
        return _isUndefined__WEBPACK_IMPORTED_MODULE_38__["isUndefined"];
      });
      /* harmony import */


      var _persistState__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./persistState */
      "gF6S");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "persistState", function () {
        return _persistState__WEBPACK_IMPORTED_MODULE_39__["persistState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "selectPersistStateInit", function () {
        return _persistState__WEBPACK_IMPORTED_MODULE_39__["selectPersistStateInit"];
      });
      /* harmony import */


      var _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./plugins/dirtyCheck/dirtyCheckPlugin */
      "Qu3/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dirtyCheckDefaultParams", function () {
        return _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__["dirtyCheckDefaultParams"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DirtyCheckPlugin", function () {
        return _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__["DirtyCheckPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getNestedPath", function () {
        return _plugins_dirtyCheck_dirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_40__["getNestedPath"];
      });
      /* harmony import */


      var _plugins_dirtyCheck_entityDirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./plugins/dirtyCheck/entityDirtyCheckPlugin */
      "/V8x");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityDirtyCheckPlugin", function () {
        return _plugins_dirtyCheck_entityDirtyCheckPlugin__WEBPACK_IMPORTED_MODULE_41__["EntityDirtyCheckPlugin"];
      });
      /* harmony import */


      var _plugins_entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./plugins/entityCollectionPlugin */
      "gUUV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityCollectionPlugin", function () {
        return _plugins_entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_42__["EntityCollectionPlugin"];
      });
      /* harmony import */


      var _plugins_paginator_paginatorPlugin__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./plugins/paginator/paginatorPlugin */
      "2zEB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Paginator", function () {
        return _plugins_paginator_paginatorPlugin__WEBPACK_IMPORTED_MODULE_43__["Paginator"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaginatorPlugin", function () {
        return _plugins_paginator_paginatorPlugin__WEBPACK_IMPORTED_MODULE_43__["PaginatorPlugin"];
      });
      /* harmony import */


      var _plugins_persistForm_persistNgFormPlugin__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./plugins/persistForm/persistNgFormPlugin */
      "0Eth");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PersistNgFormPlugin", function () {
        return _plugins_persistForm_persistNgFormPlugin__WEBPACK_IMPORTED_MODULE_44__["PersistNgFormPlugin"];
      });
      /* harmony import */


      var _plugins_plugin__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./plugins/plugin */
      "J5PQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AkitaPlugin", function () {
        return _plugins_plugin__WEBPACK_IMPORTED_MODULE_45__["AkitaPlugin"];
      });
      /* harmony import */


      var _plugins_stateHistory_entityStateHistoryPlugin__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./plugins/stateHistory/entityStateHistoryPlugin */
      "H/iu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityStateHistoryPlugin", function () {
        return _plugins_stateHistory_entityStateHistoryPlugin__WEBPACK_IMPORTED_MODULE_46__["EntityStateHistoryPlugin"];
      });
      /* harmony import */


      var _plugins_stateHistory_stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./plugins/stateHistory/stateHistoryPlugin */
      "gqnR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StateHistoryPlugin", function () {
        return _plugins_stateHistory_stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_47__["StateHistoryPlugin"];
      });
      /* harmony import */


      var _query__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./query */
      "Rbjf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Query", function () {
        return _query__WEBPACK_IMPORTED_MODULE_48__["Query"];
      });
      /* harmony import */


      var _queryConfig__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./queryConfig */
      "mKZq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QueryConfig", function () {
        return _queryConfig__WEBPACK_IMPORTED_MODULE_49__["QueryConfig"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "queryConfigKey", function () {
        return _queryConfig__WEBPACK_IMPORTED_MODULE_49__["queryConfigKey"];
      });
      /* harmony import */


      var _queryEntity__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./queryEntity */
      "GErp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityUIQuery", function () {
        return _queryEntity__WEBPACK_IMPORTED_MODULE_50__["EntityUIQuery"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QueryEntity", function () {
        return _queryEntity__WEBPACK_IMPORTED_MODULE_50__["QueryEntity"];
      });
      /* harmony import */


      var _removeEntities__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./removeEntities */
      "M7vU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "removeAllEntities", function () {
        return _removeEntities__WEBPACK_IMPORTED_MODULE_51__["removeAllEntities"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "removeEntities", function () {
        return _removeEntities__WEBPACK_IMPORTED_MODULE_51__["removeEntities"];
      });
      /* harmony import */


      var _resetStores__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./resetStores */
      "uFMm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "resetStores", function () {
        return _resetStores__WEBPACK_IMPORTED_MODULE_52__["resetStores"];
      });
      /* harmony import */


      var _root__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./root */
      "1Jmr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isNotBrowser", function () {
        return _root__WEBPACK_IMPORTED_MODULE_53__["isNotBrowser"];
      });
      /* harmony import */


      var _runStoreAction__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./runStoreAction */
      "QElp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityStoreAction", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["EntityStoreAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getEntityStore", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getEntityStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getEntityStoreByName", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getEntityStoreByName"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getStore", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getStoreByName", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["getStoreByName"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "runEntityStoreAction", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["runEntityStoreAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "runStoreAction", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["runStoreAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoreAction", function () {
        return _runStoreAction__WEBPACK_IMPORTED_MODULE_54__["StoreAction"];
      });
      /* harmony import */


      var _setEntities__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./setEntities */
      "n9dC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isEntityState", function () {
        return _setEntities__WEBPACK_IMPORTED_MODULE_55__["isEntityState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setEntities", function () {
        return _setEntities__WEBPACK_IMPORTED_MODULE_55__["setEntities"];
      });
      /* harmony import */


      var _setLoading__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./setLoading */
      "mVyF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setLoading", function () {
        return _setLoading__WEBPACK_IMPORTED_MODULE_56__["setLoading"];
      });
      /* harmony import */


      var _setLoadingAndError__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./setLoadingAndError */
      "A9tG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setLoadingAndError", function () {
        return _setLoadingAndError__WEBPACK_IMPORTED_MODULE_57__["setLoadingAndError"];
      });
      /* harmony import */


      var _setValueByString__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./setValueByString */
      "QRUx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setValue", function () {
        return _setValueByString__WEBPACK_IMPORTED_MODULE_58__["setValue"];
      });
      /* harmony import */


      var _snapshotManager__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ./snapshotManager */
      "EZ05");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SnapshotManager", function () {
        return _snapshotManager__WEBPACK_IMPORTED_MODULE_59__["SnapshotManager"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "snapshotManager", function () {
        return _snapshotManager__WEBPACK_IMPORTED_MODULE_59__["snapshotManager"];
      });
      /* harmony import */


      var _sort__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./sort */
      "yKN+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "compareValues", function () {
        return _sort__WEBPACK_IMPORTED_MODULE_60__["compareValues"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return _sort__WEBPACK_IMPORTED_MODULE_60__["Order"];
      });
      /* harmony import */


      var _sortByOptions__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./sortByOptions */
      "yVIH");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortByOptions", function () {
        return _sortByOptions__WEBPACK_IMPORTED_MODULE_61__["sortByOptions"];
      });
      /* harmony import */


      var _store__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ./store */
      "18rb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Store", function () {
        return _store__WEBPACK_IMPORTED_MODULE_62__["Store"];
      });
      /* harmony import */


      var _storeConfig__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ./storeConfig */
      "gySQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "configKey", function () {
        return _storeConfig__WEBPACK_IMPORTED_MODULE_63__["configKey"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoreConfig", function () {
        return _storeConfig__WEBPACK_IMPORTED_MODULE_63__["StoreConfig"];
      });
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ./stores */
      "40zj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "__stores__", function () {
        return _stores__WEBPACK_IMPORTED_MODULE_64__["__stores__"];
      });
      /* harmony import */


      var _toBoolean__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ./toBoolean */
      "KA1R");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toBoolean", function () {
        return _toBoolean__WEBPACK_IMPORTED_MODULE_65__["toBoolean"];
      });
      /* harmony import */


      var _toEntitiesIds__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ./toEntitiesIds */
      "YBZY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesIds", function () {
        return _toEntitiesIds__WEBPACK_IMPORTED_MODULE_66__["toEntitiesIds"];
      });
      /* harmony import */


      var _toEntitiesObject__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ./toEntitiesObject */
      "0Fb4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesObject", function () {
        return _toEntitiesObject__WEBPACK_IMPORTED_MODULE_67__["toEntitiesObject"];
      });
      /* harmony import */


      var _trackIdChanges__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ./trackIdChanges */
      "b89F");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "trackIdChanges", function () {
        return _trackIdChanges__WEBPACK_IMPORTED_MODULE_68__["trackIdChanges"];
      });
      /* harmony import */


      var _transaction__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ./transaction */
      "UiMj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "applyTransaction", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["applyTransaction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "commit", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["commit"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "endBatch", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["endBatch"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isTransactionInProcess", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["isTransactionInProcess"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "startBatch", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["startBatch"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "transaction", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["transaction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "transactionManager", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["transactionManager"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "withTransaction", function () {
        return _transaction__WEBPACK_IMPORTED_MODULE_69__["withTransaction"];
      });
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! ./types */
      "98u3");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _updateEntities__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! ./updateEntities */
      "MduY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "updateEntities", function () {
        return _updateEntities__WEBPACK_IMPORTED_MODULE_71__["updateEntities"];
      });
      /***/

    },

    /***/
    "4IkZ":
    /*!**********************************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/login/login.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function IkZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _state_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../state/auth.service */
      "dpu8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, router, authService) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.router = router;
          this.authService = authService;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.login = this.fb.group({
              email: this.fb.control(''),
              password: this.fb.control('')
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this16 = this;

            this.authService.login(this.login.value).subscribe(function () {
              _this16.router.navigate(['/']);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["ng-component"]],
        decls: 19,
        vars: 1,
        consts: [[1, "row", "padding", 2, "width", "50%", "margin", "auto"], [1, "col", "s12", 3, "formGroup", "submit"], [1, "row"], [1, "input-field"], [1, "material-icons", "prefix"], ["id", "icon_prefix", "type", "text", "formControlName", "email", 1, "validate"], ["for", "icon_prefix"], ["id", "icon_telephone", "type", "tel", "formControlName", "password", 1, "validate"], ["for", "icon_telephone"], ["type", "submit", 1, "btn", "waves-effect", "waves-light", "flex", 2, "margin-left", "auto"], [1, "material-icons", "right"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() {
              return ctx.submit();
            });

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.login);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './login.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5OdB":
    /*!**************************************************************!*\
      !*** ./libs/akita-ng-devtools/src/lib/ng-devtools.module.ts ***!
      \**************************************************************/

    /*! exports provided: DEVTOOLS_OPTIONS, AkitaDevtools, d, init, AkitaNgDevtools */

    /***/
    function OdB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEVTOOLS_OPTIONS", function () {
        return DEVTOOLS_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AkitaDevtools", function () {
        return AkitaDevtools;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "init", function () {
        return init;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AkitaNgDevtools", function () {
        return AkitaNgDevtools;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      var DEVTOOLS_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DevtoolsOptions');

      var AkitaDevtools = function AkitaDevtools(ngZone, options) {
        _classCallCheck(this, AkitaDevtools);

        this.ngZone = ngZone;
        this.options = options;
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["akitaDevtools"])(this.ngZone, this.options);
      };

      AkitaDevtools.ɵfac = function AkitaDevtools_Factory(t) {
        return new (t || AkitaDevtools)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DEVTOOLS_OPTIONS));
      };

      AkitaDevtools.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AkitaDevtools,
        factory: AkitaDevtools.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaDevtools, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [DEVTOOLS_OPTIONS]
            }]
          }];
        }, null);
      })(); // auto initialize the devtools


      function d() {}

      function init(akitaDevtools) {
        return d;
      }

      var AkitaNgDevtools = /*#__PURE__*/function () {
        function AkitaNgDevtools() {
          _classCallCheck(this, AkitaNgDevtools);
        }

        _createClass(AkitaNgDevtools, null, [{
          key: "forRoot",
          value: function forRoot(options) {
            return {
              ngModule: AkitaNgDevtools,
              providers: [{
                provide: DEVTOOLS_OPTIONS,
                useValue: options
              }, {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                useFactory: init,
                deps: [AkitaDevtools],
                multi: true
              }]
            };
          }
        }]);

        return AkitaNgDevtools;
      }();

      AkitaNgDevtools.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AkitaNgDevtools
      });
      AkitaNgDevtools.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AkitaNgDevtools_Factory(t) {
          return new (t || AkitaNgDevtools)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaNgDevtools, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5odZ":
    /*!*********************************************!*\
      !*** ./libs/akita/src/lib/entitiesToMap.ts ***!
      \*********************************************/

    /*! exports provided: entitiesToMap */

    /***/
    function odZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "entitiesToMap", function () {
        return entitiesToMap;
      });
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB"); // @internal


      function entitiesToMap(state, options) {
        var map = {};
        var filterBy = options.filterBy,
            limitTo = options.limitTo;
        var ids = state.ids,
            entities = state.entities;

        if (!filterBy && !limitTo) {
          return entities;
        }

        var hasLimit = Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(limitTo) === false;

        if (filterBy && hasLimit) {
          var count = 0;

          var _loop = function _loop(i, length) {
            if (count === limitTo) return "break";
            var id = ids[i];
            var entity = entities[id];
            var allPass = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(filterBy).every(function (fn) {
              return fn(entity, i);
            });

            if (allPass) {
              map[id] = entity;
              count++;
            }
          };

          for (var i = 0, length = ids.length; i < length; i++) {
            var _ret = _loop(i, length);

            if (_ret === "break") break;
          }
        } else {
          var finalLength = Math.min(limitTo || ids.length, ids.length);

          var _loop2 = function _loop2(_i) {
            var id = ids[_i];
            var entity = entities[id];

            if (!filterBy) {
              map[id] = entity;
              return "continue";
            }

            var allPass = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(filterBy).every(function (fn) {
              return fn(entity, _i);
            });

            if (allPass) {
              map[id] = entity;
            }
          };

          for (var _i = 0; _i < finalLength; _i++) {
            var _ret2 = _loop2(_i);

            if (_ret2 === "continue") continue;
          }
        }

        return map;
      }
      /***/

    },

    /***/
    "6/9y":
    /*!*******************************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/lib/ng-entity.service.ts ***!
      \*******************************************************************/

    /*! exports provided: mapResponse, NgEntityService */

    /***/
    function y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mapResponse", function () {
        return mapResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgEntityService", function () {
        return NgEntityService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _action_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./action-factory */
      "fRdR");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./helpers */
      "Rv9Z");
      /* harmony import */


      var _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ng-entity-service-notifier */
      "ZY5P");
      /* harmony import */


      var _ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ng-entity-service.config */
      "sog1");
      /* harmony import */


      var _ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ng-entity-service.loader */
      "YCCL");

      var mapResponse = function mapResponse(config) {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
          var mappedResponse = !!(config === null || config === void 0 ? void 0 : config.mapResponseFn) ? config.mapResponseFn(res) : res;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["isObservable"])(mappedResponse) ? mappedResponse : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(mappedResponse);
        });
      };

      var NgEntityService = /*#__PURE__*/function (_datorama_akita__WEBP4) {
        _inherits(NgEntityService, _datorama_akita__WEBP4);

        var _super7 = _createSuper(NgEntityService);

        function NgEntityService(store) {
          var _this17;

          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, NgEntityService);

          _this17 = _super7.call(this);
          _this17.store = store;
          _this17.config = config;
          _this17.http = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
          _this17.loader = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_9__["NgEntityServiceLoader"]);
          _this17.notifier = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["NgEntityServiceNotifier"]);
          var globalConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__["NG_ENTITY_SERVICE_CONFIG"]);
          _this17.mergedConfig = Object(_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__["mergeDeep"])({}, _ng_entity_service_config__WEBPACK_IMPORTED_MODULE_8__["defaultConfig"], globalConfig, _this17.getDecoratorConfig(), config);
          _this17.baseUrl = _this17.mergedConfig.baseUrl;
          _this17.httpMethodMap = _this17.mergedConfig.httpMethods;
          _this17.dispatchSuccess = Object(_action_factory__WEBPACK_IMPORTED_MODULE_5__["successAction"])(_this17.store.storeName, _this17.notifier);
          _this17.dispatchError = Object(_action_factory__WEBPACK_IMPORTED_MODULE_5__["errorAction"])(_this17.store.storeName, _this17.notifier);
          return _this17;
        }

        _createClass(NgEntityService, [{
          key: "setBaseUrl",
          value: function setBaseUrl(baseUrl) {
            this.baseUrl = baseUrl;
          }
        }, {
          key: "getHttp",
          value: function getHttp() {
            return this.http;
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            return this.mergedConfig;
          }
        }, {
          key: "get",
          value: function get(idOrConfig, config) {
            var _this18 = this;

            var method = this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].GET);
            var isSingle = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["isID"])(idOrConfig);
            var entityId = isSingle ? idOrConfig : undefined;
            var conf = (!isSingle ? idOrConfig : config) || {};
            var url = this.resolveUrl(conf, entityId);
            this.loader.dispatch({
              method: method,
              loading: true,
              entityId: entityId,
              storeName: this.store.storeName
            });
            return this.http.request(method, url, conf).pipe(mapResponse(conf), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              if (!conf.skipWrite) {
                if (isSingle) {
                  _this18.store.upsert(entityId, data, function (id, newState) {
                    return Object.assign({
                      id: id
                    }, newState);
                  });
                } else {
                  if (conf.append) {
                    _this18.store.add(data);
                  } else if (conf.upsert) {
                    _this18.store.upsertMany(data);
                  } else {
                    _this18.store.set(data);
                  }
                }
              }

              _this18.dispatchSuccess({
                method: method,
                payload: data,
                successMsg: conf.successMsg
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return _this18.handleError(method, error, conf.errorMsg);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this18.loader.dispatch({
                method: method,
                loading: false,
                entityId: entityId,
                storeName: _this18.store.storeName
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

        }, {
          key: "add",
          value: function add(entity, config) {
            var _this19 = this;

            var url = this.resolveUrl(config);
            var method = this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].POST);
            this.loader.dispatch({
              method: method,
              loading: true,
              storeName: this.store.storeName
            });
            var configWithBody = Object.assign(Object.assign({}, config), {
              body: entity
            });
            return this.http.request(method, url, configWithBody).pipe(mapResponse(config), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (responseEntity) {
              if (!config || config && !config.skipWrite) {
                _this19.store.add(responseEntity, config);
              }

              _this19.dispatchSuccess({
                method: method,
                payload: responseEntity,
                successMsg: config && config.successMsg
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return _this19.handleError(method, error, config && config.errorMsg);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this19.loader.dispatch({
                method: method,
                loading: false,
                storeName: _this19.store.storeName
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

        }, {
          key: "update",
          value: function update(id, entity, config) {
            var _this20 = this;

            var url = this.resolveUrl(config, id);
            var method = config && config.method || this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].PUT);
            this.loader.dispatch({
              method: method,
              loading: true,
              entityId: id,
              storeName: this.store.storeName
            });
            var configWithBody = Object.assign(Object.assign({}, config), {
              body: entity
            });
            return this.http.request(method, url, configWithBody).pipe(mapResponse(config), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (responseEntity) {
              if (!config || config && !config.skipWrite) {
                _this20.store.update(id, responseEntity);
              }

              _this20.dispatchSuccess({
                method: method,
                payload: responseEntity,
                successMsg: config && config.successMsg
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return _this20.handleError(method, error, config && config.errorMsg);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this20.loader.dispatch({
                method: method,
                loading: false,
                entityId: id,
                storeName: _this20.store.storeName
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

        }, {
          key: "delete",
          value: function _delete(id, config) {
            var _this21 = this;

            var url = this.resolveUrl(config, id);
            var method = this.getHttpMethod(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_7__["HttpMethod"].DELETE);
            this.loader.dispatch({
              method: method,
              loading: true,
              entityId: id,
              storeName: this.store.storeName
            });
            return this.http.request(method, url, config).pipe(mapResponse(config), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
              if (!config || config && !config.skipWrite) {
                _this21.store.remove(id);
              }

              _this21.dispatchSuccess({
                method: method,
                payload: res,
                successMsg: config && config.successMsg
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return _this21.handleError(method, error, config && config.errorMsg);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this21.loader.dispatch({
                method: method,
                loading: false,
                entityId: id,
                storeName: _this21.store.storeName
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

        }, {
          key: "getHttpMethod",
          value: function getHttpMethod(type) {
            var httpMethod;

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

        }, {
          key: "getDecoratorValue",
          value: function getDecoratorValue(key) {
            return this.constructor[key];
          }
        }, {
          key: "getDecoratorConfig",
          value: function getDecoratorConfig() {
            var config = {};
            var baseUrl = this.getDecoratorValue('baseUrl');

            if (baseUrl) {
              config.baseUrl = baseUrl;
            }

            var resourceName = this.getDecoratorValue('resourceName');

            if (resourceName) {
              config.resourceName = resourceName;
            }

            return config;
          }
        }, {
          key: "resolveUrl",
          value: function resolveUrl(config, id) {
            var _Object = Object(config),
                url = _Object.url,
                urlPostfix = _Object.urlPostfix;

            var _final = this.api;

            if (url) {
              return url;
            }

            if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(id)) {
              _final += "/".concat(id);
            }

            if (urlPostfix) {
              _final += "/".concat(urlPostfix);
            }

            return _final;
          }
        }, {
          key: "handleError",
          value: function handleError(method, error, errorMsg) {
            this.dispatchError({
              method: method,
              errorMsg: errorMsg,
              payload: error
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }
        }, {
          key: "api",
          get: function get() {
            if (!this.baseUrl) {
              throw new Error("baseUrl of ".concat(this.constructor.name, " is not defined."));
            }

            return "".concat(this.baseUrl, "/").concat(this.resourceName);
          }
        }, {
          key: "resourceName",
          get: function get() {
            return this.mergedConfig.resourceName || this.store.storeName;
          }
        }]);

        return NgEntityService;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityService"]);
      /***/

    },

    /***/
    "6t7H":
    /*!************************************************************!*\
      !*** ./libs/akita-ng-router-store/src/lib/router.query.ts ***!
      \************************************************************/

    /*! exports provided: RouterQuery */

    /***/
    function t7H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterQuery", function () {
        return RouterQuery;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./router.store */
      "/1Ks");

      function slice(section) {
        return function (source) {
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.state;
          })).pipe(Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["filterNilValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
            return state[section];
          }));
        };
      }

      var RouterQuery = /*#__PURE__*/function (_datorama_akita__WEBP5) {
        _inherits(RouterQuery, _datorama_akita__WEBP5);

        var _super8 = _createSuper(RouterQuery);

        function RouterQuery(store) {
          var _this22;

          _classCallCheck(this, RouterQuery);

          _this22 = _super8.call(this, store);
          _this22.store = store;
          _this22.__navigationCancel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this22.__navigationError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          return _this22;
        }

        _createClass(RouterQuery, [{
          key: "selectParams",
          value: function selectParams(names) {
            var _this23 = this;

            if (names === undefined) {
              return this.select().pipe(slice('params'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            }

            var select = function select(p) {
              return _this23.select().pipe(slice('params'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(p), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            };

            if (Array.isArray(names)) {
              var sources = names.map(select);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(sources);
            }

            return select(names).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          }
        }, {
          key: "getParams",
          value: function getParams(name) {
            if (this.getValue().state) {
              var params = this.getValue().state.params;

              if (name === undefined) {
                return params;
              }

              return params[name];
            }

            return null;
          }
        }, {
          key: "selectQueryParams",
          value: function selectQueryParams(names) {
            var _this24 = this;

            if (names === undefined) {
              return this.select().pipe(slice('queryParams'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            }

            var select = function select(p) {
              return _this24.select().pipe(slice('queryParams'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(p), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            };

            if (Array.isArray(names)) {
              var sources = names.map(select);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(sources);
            }

            return select(names);
          }
        }, {
          key: "getQueryParams",
          value: function getQueryParams(name) {
            if (this.getValue().state) {
              var params = this.getValue().state.queryParams;

              if (name === undefined) {
                return params;
              }

              return params[name];
            }

            return null;
          }
        }, {
          key: "selectFragment",
          value: function selectFragment() {
            return this.select().pipe(slice('fragment'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          }
        }, {
          key: "getFragment",
          value: function getFragment() {
            if (this.getValue().state) {
              return this.getValue().state.fragment;
            }

            return null;
          }
        }, {
          key: "selectData",
          value: function selectData(name) {
            if (name === undefined) {
              return this.select().pipe(slice('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            }

            return this.select().pipe(slice('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          }
        }, {
          key: "getData",
          value: function getData(name) {
            if (this.getValue().state) {
              var data = this.getValue().state.data;

              if (name === undefined) {
                return data;
              }

              return data[name];
            }

            return null;
          }
        }, {
          key: "selectNavigationExtras",
          value: function selectNavigationExtras(name) {
            if (name === undefined) {
              return this.select().pipe(slice('navigationExtras'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            }

            return this.select().pipe(slice('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          }
        }, {
          key: "getNavigationExtras",
          value: function getNavigationExtras(name) {
            if (this.getValue().state) {
              var data = this.getValue().state.navigationExtras;

              if (name === undefined) {
                return data;
              }

              return data[name];
            }

            return null;
          }
        }, {
          key: "selectNavigationCancel",
          value: function selectNavigationCancel() {
            return this.__navigationCancel.asObservable();
          }
        }, {
          key: "selectNavigationError",
          value: function selectNavigationError() {
            return this.__navigationError.asObservable();
          }
        }]);

        return RouterQuery;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]);

      RouterQuery.ɵfac = function RouterQuery_Factory(t) {
        return new (t || RouterQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStore"]));
      };

      RouterQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RouterQuery,
        factory: RouterQuery.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterQuery, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6ukB":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/coerceArray.ts ***!
      \*******************************************/

    /*! exports provided: coerceArray */

    /***/
    function ukB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isNil */
      "82/w"); // @internal


      function coerceArray(value) {
        if (Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value)) {
          return [];
        }

        return Array.isArray(value) ? value : [value];
      }
      /***/

    },

    /***/
    "79eE":
    /*!*************************************************!*\
      !*** ./libs/akita-ng-router-store/src/index.ts ***!
      \*************************************************/

    /*! exports provided: AkitaNgRouterStoreModule, RouterQuery, RouterService, createInitialRouterState, RouterStore */

    /***/
    function eE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/router.module */
      "GapQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AkitaNgRouterStoreModule", function () {
        return _lib_router_module__WEBPACK_IMPORTED_MODULE_0__["AkitaNgRouterStoreModule"];
      });
      /* harmony import */


      var _lib_router_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/router.query */
      "6t7H");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RouterQuery", function () {
        return _lib_router_query__WEBPACK_IMPORTED_MODULE_1__["RouterQuery"];
      });
      /* harmony import */


      var _lib_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/router.service */
      "Sq83");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RouterService", function () {
        return _lib_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"];
      });
      /* harmony import */


      var _lib_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/router.store */
      "/1Ks");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createInitialRouterState", function () {
        return _lib_router_store__WEBPACK_IMPORTED_MODULE_3__["createInitialRouterState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RouterStore", function () {
        return _lib_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStore"];
      });
      /***/

    },

    /***/
    "82/w":
    /*!*************************************!*\
      !*** ./libs/akita/src/lib/isNil.ts ***!
      \*************************************/

    /*! exports provided: isNil */

    /***/
    function w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNil", function () {
        return isNil;
      }); // @internal


      function isNil(v) {
        return v === null || v === undefined;
      }
      /***/

    },

    /***/
    "8p+e":
    /*!******************************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/akita-ng-effects.module.ts ***!
      \******************************************************************/

    /*! exports provided: AkitaNgEffectsModule, createEffectInstances */

    /***/
    function pE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AkitaNgEffectsModule", function () {
        return AkitaNgEffectsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEffectInstances", function () {
        return createEffectInstances;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tokens */
      "EdJo");
      /* harmony import */


      var _effect_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./effect-root.module */
      "phQS");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./actions */
      "fZ2q");
      /* harmony import */


      var _effect_feature_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./effect-feature.module */
      "roSn");
      /* harmony import */


      var _module_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./module-manager.service */
      "KdTy");

      var AkitaNgEffectsModule = /*#__PURE__*/function () {
        function AkitaNgEffectsModule() {
          _classCallCheck(this, AkitaNgEffectsModule);
        }

        _createClass(AkitaNgEffectsModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var rootEffects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return {
              ngModule: _effect_root_module__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"],
              providers: [_module_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManager"], _actions__WEBPACK_IMPORTED_MODULE_3__["Actions"], rootEffects, {
                provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["_ROOT_EFFECTS"],
                useValue: [rootEffects]
              }, {
                provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["ROOT_EFFECT_INSTANCES"],
                useFactory: createEffectInstances,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _tokens__WEBPACK_IMPORTED_MODULE_1__["_ROOT_EFFECTS"], _module_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManager"]]
              }]
            };
          }
        }, {
          key: "forFeature",
          value: function forFeature() {
            var featureEffects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return {
              ngModule: _effect_feature_module__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"],
              providers: [featureEffects, {
                provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["_FEATURE_EFFECTS"],
                useValue: featureEffects,
                multi: true
              }, {
                provide: _tokens__WEBPACK_IMPORTED_MODULE_1__["FEATURE_EFFECT_INSTANCES"],
                multi: true,
                useFactory: createEffectInstances,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _tokens__WEBPACK_IMPORTED_MODULE_1__["_FEATURE_EFFECTS"], _module_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManager"]]
              }]
            };
          }
        }]);

        return AkitaNgEffectsModule;
      }();

      AkitaNgEffectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AkitaNgEffectsModule
      });
      AkitaNgEffectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AkitaNgEffectsModule_Factory(t) {
          return new (t || AkitaNgEffectsModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaNgEffectsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], null, null);
      })();

      function createEffectInstances(injector, effectGroups, moduleManager) {
        var mergedEffects = [];

        var _iterator4 = _createForOfIteratorHelper(effectGroups),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var effectGroup = _step4.value;
            mergedEffects.push.apply(mergedEffects, _toConsumableArray(effectGroup));
          } // todo we shouldn't use a map to avoid registering the effects twice;
          // fix the underlying issue for feature is called twice

        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        var effectInstances = mergedEffects.reduce(function (acc, effect) {
          if (!moduleManager.has(effect)) {
            moduleManager.add(effect);
            acc.push(injector.get(effect));
          }

          return acc;
        }, []);
        return effectInstances;
      }
      /***/

    },

    /***/
    "8vam":
    /*!*****************************************!*\
      !*** ./libs/akita/src/lib/arrayFind.ts ***!
      \*****************************************/

    /*! exports provided: find, distinctUntilArrayItemChanged, arrayFind */

    /***/
    function vam(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "find", function () {
        return find;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "distinctUntilArrayItemChanged", function () {
        return distinctUntilArrayItemChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayFind", function () {
        return arrayFind;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB");
      /* harmony import */


      var _defaultIDKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./defaultIDKey */
      "kBYr");
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./isArray */
      "aDq+");
      /* harmony import */


      var _isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./isEmpty */
      "x9kZ");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./isFunction */
      "u21x"); // @internal


      function find(collection, idsOrPredicate, idKey) {
        var result = [];

        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(idsOrPredicate)) {
          var _iterator5 = _createForOfIteratorHelper(collection),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var entity = _step5.value;

              if (idsOrPredicate(entity) === true) {
                result.push(entity);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        } else {
          var toSet = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(idsOrPredicate).reduce(function (acc, current) {
            return acc.add(current);
          }, new Set());

          var _iterator6 = _createForOfIteratorHelper(collection),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _entity = _step6.value;

              if (toSet.has(_entity[idKey])) {
                result.push(_entity);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }

        return result;
      } // @internal


      function distinctUntilArrayItemChanged() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(function (prevCollection, currentCollection) {
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

          var isOneOfItemReferenceChanged = currentCollection.some(function (item, i) {
            return prevCollection[i] !== item;
          }); // return false means there is a change and we want to call next()

          return isOneOfItemReferenceChanged === false;
        });
      }

      function arrayFind(idsOrPredicate, idKey) {
        return function (source) {
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (collection) {
            // which means the user deleted the root entity or set the collection to nil
            if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["isArray"])(collection) === false) {
              return collection;
            }

            return find(collection, idsOrPredicate, idKey || _defaultIDKey__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ID_KEY"]);
          }), distinctUntilArrayItemChanged(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (value) {
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
      /***/

    },

    /***/
    "98u3":
    /*!*************************************!*\
      !*** ./libs/akita/src/lib/types.ts ***!
      \*************************************/

    /*! no exports provided */

    /***/
    function u3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "9NJV":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/isUndefined.ts ***!
      \*******************************************/

    /*! exports provided: isUndefined */

    /***/
    function NJV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isUndefined", function () {
        return isUndefined;
      }); // @internal


      function isUndefined(value) {
        return value === undefined;
      }
      /***/

    },

    /***/
    "A9tG":
    /*!**************************************************!*\
      !*** ./libs/akita/src/lib/setLoadingAndError.ts ***!
      \**************************************************/

    /*! exports provided: setLoadingAndError */

    /***/
    function A9tG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLoadingAndError", function () {
        return setLoadingAndError;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function setLoadingAndError(store) {
        return function (source) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
            store.setLoading(true);
            store.setError(null);
            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])({
              error: function error(err) {
                store.setLoading(false);
                store.setError(err);
              },
              complete: function complete() {
                store.setLoading(false);
              }
            }));
          });
        };
      }
      /***/

    },

    /***/
    "ADtu":
    /*!***********************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/products.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function ADtu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _state_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./state/products.service */
      "GRt5");
      /* harmony import */


      var _state_products_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./state/products.query */
      "05AR");
      /* harmony import */


      var _cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../cart/state/cart.service */
      "PiDp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./product/product.component */
      "NMJT");

      function ProductsComponent_ng_container_5_app_product_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("add", function ProductsComponent_ng_container_5_app_product_14_Template_app_product_add_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.addProductToCart($event);
          })("subtract", function ProductsComponent_ng_container_5_app_product_14_Template_app_product_subtract_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.subtract($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r4);
        }
      }

      function ProductsComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.sortControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 3, ctx_r0.products$));
        }
      }

      function ProductsComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(productsService, cartService, productsQuery) {
          _classCallCheck(this, ProductsComponent);

          this.productsService = productsService;
          this.cartService = cartService;
          this.productsQuery = productsQuery;
          this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.sortControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('title');
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.productsService.get().subscribe();
            this.loading$ = this.productsQuery.selectLoading();
            this.products$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.search.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('')), this.sortControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('title'))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  term = _ref8[0],
                  sortBy = _ref8[1];

              return _this25.productsQuery.getProducts(term, sortBy);
            }));
          }
        }, {
          key: "addProductToCart",
          value: function addProductToCart(_ref9) {
            var id = _ref9.id;
            this.cartService.addProductToCart(id);
          }
        }, {
          key: "subtract",
          value: function subtract(_ref10) {
            var id = _ref10.id;
            this.cartService.subtract(id);
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]));
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        decls: 9,
        vars: 4,
        consts: [[1, "padding"], [1, "grey-text", "flex", "align-center"], [1, "large", "material-icons"], [4, "ngIf", "ngIfElse"], ["loadingTpl", ""], [1, "col", "s12"], [1, "browser-default", 3, "formControl"], ["value", "title"], ["value", "price"], [1, "input-field"], [1, "material-icons", "prefix"], ["placeholder", "Search Product..", 3, "formControl"], [1, "mt", "flex"], [3, "product", "add", "subtract", 4, "ngFor", "ngForOf"], [3, "product", "add", "subtract"], [1, "progress"], [1, "indeterminate"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.loading$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: "./products.component.html"
          }]
        }], function () {
          return [{
            type: _state_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
          }, {
            type: _cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
          }, {
            type: _state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AW4r":
    /*!*****************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/state/cart.model.ts ***!
      \*****************************************************************/

    /*! exports provided: createCartItem */

    /***/
    function AW4r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createCartItem", function () {
        return createCartItem;
      });

      function createCartItem(params) {
        return Object.assign({
          total: 0,
          quantity: 1
        }, params);
      }
      /***/

    },

    /***/
    "AWF0":
    /*!*************************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/create-effect.util.ts ***!
      \*************************************************************/

    /*! exports provided: createEffect */

    /***/
    function AWF0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEffect", function () {
        return createEffect;
      });
      /* harmony import */


      var _effect_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./effect.utils */
      "Nm76");

      function createEffect(actions$, options) {
        var effect = actions$();
        options = Object.assign({
          dispatch: false
        }, options);
        Object(_effect_utils__WEBPACK_IMPORTED_MODULE_0__["setMetadata"])(effect, null, options);
        return effect;
      }
      /***/

    },

    /***/
    "CKFZ":
    /*!**************************************!*\
      !*** ./libs/akita/src/lib/errors.ts ***!
      \**************************************/

    /*! exports provided: AkitaError, assertStoreHasName */

    /***/
    function CKFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AkitaError", function () {
        return AkitaError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "assertStoreHasName", function () {
        return assertStoreHasName;
      }); // @internal


      var AkitaError = /*#__PURE__*/function (_Error) {
        _inherits(AkitaError, _Error);

        var _super9 = _createSuper(AkitaError);

        function AkitaError(message) {
          _classCallCheck(this, AkitaError);

          return _super9.call(this, message);
        }

        return AkitaError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)); // @internal


      function assertStoreHasName(name, className) {
        if (!name) {
          console.error("@StoreConfig({ name }) is missing in ".concat(className));
        }
      }
      /***/

    },

    /***/
    "Devl":
    /*!*****************************************!*\
      !*** ./libs/akita/src/lib/cacheable.ts ***!
      \*****************************************/

    /*! exports provided: cacheable */

    /***/
    function Devl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cacheable", function () {
        return cacheable;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
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


      function cacheable(store, request$) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          emitNext: false
        };

        if (store._cache().value) {
          return options.emitNext ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined) : rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
        }

        return request$;
      }
      /***/

    },

    /***/
    "Dr0E":
    /*!*******************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/state/cart.effects.ts ***!
      \*******************************************************************/

    /*! exports provided: CartEffects */

    /***/
    function Dr0E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartEffects", function () {
        return CartEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");
      /* harmony import */


      var _cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.actions */
      "JMny");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _cart_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart.store */
      "gtU3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CartEffects = function CartEffects(actions$, cartStore) {
        var _this26 = this;

        _classCallCheck(this, CartEffects);

        this.actions$ = actions$;
        this.cartStore = cartStore;
        this.removeItem$ = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
          return _this26.actions$.pipe(Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItem), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_ref11) {
            var productId = _ref11.productId;
            return _this26.cartStore.remove(productId);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_) {
            return _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItemSuccess();
          }));
        }, {
          dispatch: true
        });
        this.removeItemSuccess = this.actions$.pipe(Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActions"].removeItemSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
          return _this26.cartStore.notify(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this26.cartStore.notify(false);
          }));
        }));
      };

      CartEffects.ɵfac = function CartEffects_Factory(t) {
        return new (t || CartEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_5__["CartStore"]));
      };

      CartEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CartEffects,
        factory: CartEffects.ɵfac,
        providedIn: 'root'
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CartEffects.prototype, "removeItemSuccess", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }, {
            type: _cart_store__WEBPACK_IMPORTED_MODULE_5__["CartStore"]
          }];
        }, {
          removeItemSuccess: []
        });
      })();
      /***/

    },

    /***/
    "EJe+":
    /*!*******************************************************!*\
      !*** ./libs/akita/src/lib/getInitialEntitiesState.ts ***!
      \*******************************************************/

    /*! exports provided: getInitialEntitiesState */

    /***/
    function EJe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getInitialEntitiesState", function () {
        return getInitialEntitiesState;
      }); // @internal


      var getInitialEntitiesState = function getInitialEntitiesState() {
        return {
          entities: {},
          ids: [],
          loading: true,
          error: null
        };
      };
      /***/

    },

    /***/
    "EZ05":
    /*!***********************************************!*\
      !*** ./libs/akita/src/lib/snapshotManager.ts ***!
      \***********************************************/

    /*! exports provided: SnapshotManager, snapshotManager */

    /***/
    function EZ05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnapshotManager", function () {
        return SnapshotManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "snapshotManager", function () {
        return snapshotManager;
      });
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stores */
      "40zj");
      /* harmony import */


      var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isString */
      "oJ0C");
      /* harmony import */


      var _persistState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./persistState */
      "gF6S");
      /* harmony import */


      var _dispatchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dispatchers */
      "zqjR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var SnapshotManager = /*#__PURE__*/function () {
        function SnapshotManager() {
          _classCallCheck(this, SnapshotManager);
        }

        _createClass(SnapshotManager, [{
          key: "getStoresSnapshot",

          /**
           * Get a snapshot of the whole state or a specific stores
           * Use it ONLY for things such as saving the state in the server
           */
          value: function getStoresSnapshot() {
            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var acc = {};
            var hasInclude = stores.length > 0;
            var keys = hasInclude ? stores : Object.keys(_stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"]);

            for (var i = 0; i < keys.length; i++) {
              var storeName = keys[i];

              if (storeName !== 'router') {
                acc[storeName] = _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][storeName]._value();
              }
            }

            return acc;
          }
        }, {
          key: "setStoresSnapshot",
          value: function setStoresSnapshot(stores, options) {
            var mergedOptions = Object.assign({
              skipStorageUpdate: false,
              lazy: false
            }, options);
            mergedOptions.skipStorageUpdate && Object(_persistState__WEBPACK_IMPORTED_MODULE_2__["setSkipStorageUpdate"])(true);
            var normalizedStores = stores;

            if (Object(_isString__WEBPACK_IMPORTED_MODULE_1__["isString"])(stores)) {
              normalizedStores = JSON.parse(normalizedStores);
            }

            var size = Object.keys(normalizedStores).length;

            if (mergedOptions.lazy) {
              _dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$addStore"].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (name) {
                return normalizedStores.hasOwnProperty(name);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(size)).subscribe(function (name) {
                return _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][name]._setState(function () {
                  return normalizedStores[name];
                });
              });
            } else {
              var _loop3 = function _loop3(i, keys) {
                var storeName = keys[i];

                if (_stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][storeName]) {
                  _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][storeName]._setState(function () {
                    return normalizedStores[storeName];
                  });
                }
              };

              for (var i = 0, keys = Object.keys(normalizedStores); i < keys.length; i++) {
                _loop3(i, keys);
              }
            }

            mergedOptions.skipStorageUpdate && Object(_persistState__WEBPACK_IMPORTED_MODULE_2__["setSkipStorageUpdate"])(false);
          }
        }]);

        return SnapshotManager;
      }();

      var snapshotManager = new SnapshotManager();
      /***/
    },

    /***/
    "EdJo":
    /*!*************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/tokens.ts ***!
      \*************************************************/

    /*! exports provided: _ROOT_EFFECTS, ROOT_EFFECT_INSTANCES, _FEATURE_EFFECTS, FEATURE_EFFECT_INSTANCES */

    /***/
    function EdJo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_ROOT_EFFECTS", function () {
        return _ROOT_EFFECTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROOT_EFFECT_INSTANCES", function () {
        return ROOT_EFFECT_INSTANCES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_FEATURE_EFFECTS", function () {
        return _FEATURE_EFFECTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FEATURE_EFFECT_INSTANCES", function () {
        return FEATURE_EFFECT_INSTANCES;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _ROOT_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Internal Root Effects');

      var ROOT_EFFECT_INSTANCES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Root Effects');

      var _FEATURE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Internal Feature Effects');

      var FEATURE_EFFECT_INSTANCES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@datorama/akita Feature Effects');
      /***/
    },

    /***/
    "F33U":
    /*!***********************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/auth.guard.ts ***!
      \***********************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function F33U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _state_auth_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state/auth.query */
      "N1t3");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authQuery) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authQuery = authQuery;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this27 = this;

            // For sync storage
            return this.authQuery.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuth) {
              if (isAuth) {
                return true;
              }

              _this27.router.navigateByUrl('login');

              return false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)); // For async storage
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
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
          }, {
            type: _state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Fen9":
    /*!************************************************!*\
      !*** ./libs/akita/src/lib/mapSkipUndefined.ts ***!
      \************************************************/

    /*! exports provided: mapSkipUndefined */

    /***/
    function Fen9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mapSkipUndefined", function () {
        return mapSkipUndefined;
      }); // @internal


      function mapSkipUndefined(arr, callbackFn) {
        return arr.reduce(function (result, value, index, array) {
          var val = callbackFn(value, index, array);

          if (val !== undefined) {
            result.push(val);
          }

          return result;
        }, []);
      }
      /***/

    },

    /***/
    "GErp":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/queryEntity.ts ***!
      \*******************************************/

    /*! exports provided: QueryEntity, EntityUIQuery */

    /***/
    function GErp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryEntity", function () {
        return QueryEntity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityUIQuery", function () {
        return EntityUIQuery;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _arrayFind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./arrayFind */
      "8vam");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB");
      /* harmony import */


      var _entitiesToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./entitiesToArray */
      "JoxY");
      /* harmony import */


      var _entitiesToMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./entitiesToMap */
      "5odZ");
      /* harmony import */


      var _getEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./getEntity */
      "v4lr");
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./isArray */
      "aDq+");
      /* harmony import */


      var _isDefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./isDefined */
      "Y5+g");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony import */


      var _mapSkipUndefined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./mapSkipUndefined */
      "Fen9");
      /* harmony import */


      var _query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./query */
      "Rbjf");
      /* harmony import */


      var _sortByOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./sortByOptions */
      "yVIH");
      /* harmony import */


      var _toBoolean__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./toBoolean */
      "KA1R");
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


      var QueryEntity = /*#__PURE__*/function (_query__WEBPACK_IMPOR) {
        _inherits(QueryEntity, _query__WEBPACK_IMPOR);

        var _super10 = _createSuper(QueryEntity);

        function QueryEntity(store) {
          var _this28;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, QueryEntity);

          _this28 = _super10.call(this, store);
          _this28.options = options;
          _this28.__store__ = store;
          return _this28;
        }

        _createClass(QueryEntity, [{
          key: "selectAll",
          value: function selectAll() {
            var _this29 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              asObject: false
            };
            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
              return _this29.getAll(options);
            }));
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              asObject: false,
              filterBy: undefined,
              limitTo: undefined
            };

            if (options.asObject) {
              return Object(_entitiesToMap__WEBPACK_IMPORTED_MODULE_5__["entitiesToMap"])(this.getValue(), options);
            }

            Object(_sortByOptions__WEBPACK_IMPORTED_MODULE_13__["sortByOptions"])(options, this.config || this.options);
            return Object(_entitiesToArray__WEBPACK_IMPORTED_MODULE_4__["entitiesToArray"])(this.getValue(), options);
          }
        }, {
          key: "selectMany",
          value: function selectMany(ids, project) {
            if (!ids || !ids.length) return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (entities) {
              return Object(_mapSkipUndefined__WEBPACK_IMPORTED_MODULE_11__["mapSkipUndefined"])(ids, function (id) {
                return Object(_getEntity__WEBPACK_IMPORTED_MODULE_6__["getEntity"])(id, project)(entities);
              });
            }), Object(_arrayFind__WEBPACK_IMPORTED_MODULE_2__["distinctUntilArrayItemChanged"])());
          }
        }, {
          key: "selectEntity",
          value: function selectEntity(idOrPredicate, project) {
            var id = idOrPredicate;

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(idOrPredicate)) {
              // For performance reason we expect the entity to be in the store
              id = Object(_getEntity__WEBPACK_IMPORTED_MODULE_6__["findEntityByPredicate"])(idOrPredicate, this.getValue().entities);
            }

            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Object(_getEntity__WEBPACK_IMPORTED_MODULE_6__["getEntity"])(id, project)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          }
          /**
           * Get an entity by id
           *
           * @example
           *
           * this.query.getEntity(1);
           */

        }, {
          key: "getEntity",
          value: function getEntity(id) {
            return this.getValue().entities[id];
          }
          /**
           * Select the active entity's id
           *
           * @example
           *
           * this.query.selectActiveId()
           */

        }, {
          key: "selectActiveId",
          value: function selectActiveId() {
            return this.select(function (state) {
              return state.active;
            });
          }
          /**
           * Get the active id
           *
           * @example
           *
           * this.query.getActiveId()
           */

        }, {
          key: "getActiveId",
          value: function getActiveId() {
            return this.getValue().active;
          }
        }, {
          key: "selectActive",
          value: function selectActive(project) {
            var _this30 = this;

            if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(this.getActive())) {
              return this.selectActiveId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (ids) {
                return _this30.selectMany(ids, project);
              }));
            }

            return this.selectActiveId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (ids) {
              return _this30.selectEntity(ids, project);
            }));
          }
        }, {
          key: "getActive",
          value: function getActive() {
            var _this31 = this;

            var activeId = this.getActiveId();

            if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(activeId)) {
              return activeId.map(function (id) {
                return _this31.getValue().entities[id];
              });
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

        }, {
          key: "selectCount",
          value: function selectCount(predicate) {
            var _this32 = this;

            return this.select(function (state) {
              return state.entities;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
              return _this32.getCount(predicate);
            }));
          }
          /**
           * Get the store's entity collection length
           *
           * @example
           *
           * this.query.getCount()
           * this.query.getCount(entity => entity.completed)
           */

        }, {
          key: "getCount",
          value: function getCount(predicate) {
            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(predicate)) {
              return this.getAll().filter(predicate).length;
            }

            return this.getValue().ids.length;
          }
        }, {
          key: "selectLast",
          value: function selectLast(project) {
            return this.selectAt(function (ids) {
              return ids[ids.length - 1];
            }, project);
          }
        }, {
          key: "selectFirst",
          value: function selectFirst(project) {
            return this.selectAt(function (ids) {
              return ids[0];
            }, project);
          }
        }, {
          key: "selectEntityAction",
          value: function selectEntityAction(actionOrActions) {
            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_10__["isNil"])(actionOrActions)) {
              return this.store.selectEntityAction$;
            }

            var project = Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(actionOrActions) ? function (action) {
              return action;
            } : function (_ref12) {
              var ids = _ref12.ids;
              return ids;
            };
            var actions = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_3__["coerceArray"])(actionOrActions);
            return this.store.selectEntityAction$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref13) {
              var type = _ref13.type;
              return actions.includes(type);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
              return project(action);
            }));
          }
        }, {
          key: "hasEntity",
          value: function hasEntity(projectOrIds) {
            var _this33 = this;

            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_10__["isNil"])(projectOrIds)) {
              return this.getValue().ids.length > 0;
            }

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(projectOrIds)) {
              return this.getAll().some(projectOrIds);
            }

            if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__["isArray"])(projectOrIds)) {
              return projectOrIds.every(function (id) {
                return id in _this33.getValue().entities;
              });
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

        }, {
          key: "hasActive",
          value: function hasActive(id) {
            var active = this.getValue().active;
            var isIdProvided = Object(_isDefined__WEBPACK_IMPORTED_MODULE_8__["isDefined"])(id);

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

        }, {
          key: "createUIQuery",
          value: function createUIQuery() {
            this.ui = new EntityUIQuery(this.__store__.ui);
          }
        }, {
          key: "selectAt",
          value: function selectAt(mapFn, project) {
            var _this34 = this;

            return this.select(function (state) {
              return state.ids;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(mapFn), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (id) {
              return _this34.selectEntity(id, project);
            }));
          }
        }]);

        return QueryEntity;
      }(_query__WEBPACK_IMPORTED_MODULE_12__["Query"]); // @internal


      var EntityUIQuery = /*#__PURE__*/function (_QueryEntity) {
        _inherits(EntityUIQuery, _QueryEntity);

        var _super11 = _createSuper(EntityUIQuery);

        function EntityUIQuery(store) {
          _classCallCheck(this, EntityUIQuery);

          return _super11.call(this, store);
        }

        return EntityUIQuery;
      }(QueryEntity);
      /***/

    },

    /***/
    "GRt5":
    /*!***************************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/state/products.service.ts ***!
      \***************************************************************************/

    /*! exports provided: ProductsService */

    /***/
    function GRt5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return ProductsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _products_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products.store */
      "/m3n");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");
      /* harmony import */


      var _products_mocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../products.mocks */
      "Z+wF");

      var ProductsService = /*#__PURE__*/function () {
        function ProductsService(productsStore) {
          _classCallCheck(this, ProductsService);

          this.productsStore = productsStore;
        }

        _createClass(ProductsService, [{
          key: "get",
          value: function get() {
            var _this35 = this;

            var request = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(_products_mocks__WEBPACK_IMPORTED_MODULE_5__["products"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return _this35.productsStore.set(response);
            }));
            return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_4__["cacheable"])(this.productsStore, request);
          }
        }, {
          key: "getProduct",
          value: function getProduct(id) {
            var _this36 = this;

            var product = _products_mocks__WEBPACK_IMPORTED_MODULE_5__["products"].find(function (current) {
              return current.id === +id;
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              return _this36.productsStore.add(product);
            }));
          }
        }]);

        return ProductsService;
      }();

      ProductsService.ɵfac = function ProductsService_Factory(t) {
        return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_store__WEBPACK_IMPORTED_MODULE_1__["ProductsStore"]));
      };

      ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductsService,
        factory: ProductsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _products_store__WEBPACK_IMPORTED_MODULE_1__["ProductsStore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GapQ":
    /*!*************************************************************!*\
      !*** ./libs/akita-ng-router-store/src/lib/router.module.ts ***!
      \*************************************************************/

    /*! exports provided: AkitaNgRouterStoreModule */

    /***/
    function GapQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AkitaNgRouterStoreModule", function () {
        return AkitaNgRouterStoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _router_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./router.service */
      "Sq83");

      var AkitaNgRouterStoreModule = function AkitaNgRouterStoreModule(routerService) {
        _classCallCheck(this, AkitaNgRouterStoreModule);

        this.routerService = routerService;
        this.routerService.init();
      };

      AkitaNgRouterStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AkitaNgRouterStoreModule
      });
      AkitaNgRouterStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AkitaNgRouterStoreModule_Factory(t) {
          return new (t || AkitaNgRouterStoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]));
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkitaNgRouterStoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
        }], function () {
          return [{
            type: _router_service__WEBPACK_IMPORTED_MODULE_1__["RouterService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GjRw":
    /*!**************************************************************!*\
      !*** ./apps/angular-store-app/src/app/app-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function GjRw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth.guard */
      "F33U");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "4IkZ");
      /* harmony import */


      var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cart/cart.component */
      "2EyP");
      /* harmony import */


      var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-page/product-page.component */
      "/SVk");
      /* harmony import */


      var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./products/products.component */
      "ADtu");

      var routes = [{
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
        path: '',
        pathMatch: 'full',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        component: _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__["ProductPageComponent"],
        path: 'product/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"],
        path: 'cart',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        path: 'login'
      }, {
        path: 'todos',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | todos-app-todos-module */
          "todos-app-todos-module").then(__webpack_require__.bind(null,
          /*! ./todos-app/todos.module */
          "wsaO")).then(function (m) {
            return m.TodosModule;
          });
        }
      }, {
        path: 'contacts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | contacts-contacts-module */
          "contacts-contacts-module").then(__webpack_require__.bind(null,
          /*! ./contacts/contacts.module */
          "z7DU")).then(function (m) {
            return m.ContactsModule;
          });
        }
      }, {
        path: 'stories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | stories-stories-module */
          "stories-stories-module").then(__webpack_require__.bind(null,
          /*! ./stories/stories.module */
          "bnrc")).then(function (m) {
            return m.StoriesModule;
          });
        }
      }, {
        path: 'movies',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | movies-movies-module */
          [__webpack_require__.e("default~movies-movies-module~posts-posts-module"), __webpack_require__.e("movies-movies-module")]).then(__webpack_require__.bind(null,
          /*! ./movies/movies.module */
          "hMRL")).then(function (m) {
            return m.MoviesModule;
          });
        }
      }, {
        path: 'widgets',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | widgets-widgets-module */
          "widgets-widgets-module").then(__webpack_require__.bind(null,
          /*! ./widgets/widgets.module */
          "xLnP")).then(function (m) {
            return m.WidgetsModule;
          });
        }
      }, {
        path: 'posts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | posts-posts-module */
          [__webpack_require__.e("default~movies-movies-module~posts-posts-module"), __webpack_require__.e("posts-posts-module")]).then(__webpack_require__.bind(null,
          /*! ./posts/posts.module */
          "V8DZ")).then(function (m) {
            return m.PostsModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "H/iu":
    /*!*****************************************************************************!*\
      !*** ./libs/akita/src/lib/plugins/stateHistory/entityStateHistoryPlugin.ts ***!
      \*****************************************************************************/

    /*! exports provided: EntityStateHistoryPlugin */

    /***/
    function HIu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityStateHistoryPlugin", function () {
        return EntityStateHistoryPlugin;
      });
      /* harmony import */


      var _stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stateHistoryPlugin */
      "gqnR");
      /* harmony import */


      var _toBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../toBoolean */
      "KA1R");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../entityCollectionPlugin */
      "gUUV");

      var EntityStateHistoryPlugin = /*#__PURE__*/function (_entityCollectionPlug2) {
        _inherits(EntityStateHistoryPlugin, _entityCollectionPlug2);

        var _super12 = _createSuper(EntityStateHistoryPlugin);

        function EntityStateHistoryPlugin(query) {
          var _this37;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityStateHistoryPlugin);

          _this37 = _super12.call(this, query, params.entityIds);
          _this37.query = query;
          _this37.params = params;
          params.maxAge = Object(_toBoolean__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(params.maxAge) ? params.maxAge : 10;

          _this37.activate();

          _this37.selectIds().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1)).subscribe(function (ids) {
            return _this37.activate(ids);
          });

          return _this37;
        }

        _createClass(EntityStateHistoryPlugin, [{
          key: "redo",
          value: function redo(ids) {
            this.forEachId(ids, function (e) {
              return e.redo();
            });
          }
        }, {
          key: "undo",
          value: function undo(ids) {
            this.forEachId(ids, function (e) {
              return e.undo();
            });
          }
        }, {
          key: "hasPast",
          value: function hasPast(id) {
            if (this.hasEntity(id)) {
              return this.getEntity(id).hasPast;
            }
          }
        }, {
          key: "hasFuture",
          value: function hasFuture(id) {
            if (this.hasEntity(id)) {
              return this.getEntity(id).hasFuture;
            }
          }
        }, {
          key: "jumpToFuture",
          value: function jumpToFuture(ids, index) {
            this.forEachId(ids, function (e) {
              return e.jumpToFuture(index);
            });
          }
        }, {
          key: "jumpToPast",
          value: function jumpToPast(ids, index) {
            this.forEachId(ids, function (e) {
              return e.jumpToPast(index);
            });
          }
        }, {
          key: "clear",
          value: function clear(ids, customUpdateFn) {
            this.forEachId(ids, function (e) {
              return e.clear(customUpdateFn);
            });
          }
        }, {
          key: "destroy",
          value: function destroy(ids) {
            var clearHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.forEachId(ids, function (e) {
              return e.destroy(clearHistory);
            });
          }
        }, {
          key: "ignoreNext",
          value: function ignoreNext(ids) {
            this.forEachId(ids, function (e) {
              return e.ignoreNext();
            });
          }
        }, {
          key: "instantiatePlugin",
          value: function instantiatePlugin(id) {
            return new _stateHistoryPlugin__WEBPACK_IMPORTED_MODULE_0__["StateHistoryPlugin"](this.query, this.params, id);
          }
        }]);

        return EntityStateHistoryPlugin;
      }(_entityCollectionPlugin__WEBPACK_IMPORTED_MODULE_3__["EntityCollectionPlugin"]);
      /***/

    },

    /***/
    "ILSo":
    /*!************************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/auth.module.ts ***!
      \************************************************************/

    /*! exports provided: AuthModule */

    /***/
    function ILSo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.module */
      "ONmh");
      /* harmony import */


      var _state_auth_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state/auth.effects */
      "Qqp4");
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");
      /* harmony import */


      var _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../libs/akita-ng-effects/src/lib/effect-feature.module */
      "roSn");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_3__["AkitaNgEffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_2__["AuthEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          imports: [_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _libs_akita_ng_effects_src_lib_effect_feature_module__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_3__["AkitaNgEffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_2__["AuthEffects"]])]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "J2Ln":
    /*!****************************************************************!*\
      !*** ./apps/angular-store-app/src/environments/environment.ts ***!
      \****************************************************************/

    /*! exports provided: environment */

    /***/
    function J2Ln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "J5PQ":
    /*!**********************************************!*\
      !*** ./libs/akita/src/lib/plugins/plugin.ts ***!
      \**********************************************/

    /*! exports provided: AkitaPlugin */

    /***/
    function J5PQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AkitaPlugin", function () {
        return AkitaPlugin;
      });
      /* harmony import */


      var _filterNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../filterNil */
      "klkp");
      /* harmony import */


      var _toBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toBoolean */
      "KA1R");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../config */
      "LteI");
      /* harmony import */


      var _getValueByString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../getValueByString */
      "doWv");
      /* harmony import */


      var _setValueByString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../setValueByString */
      "QRUx");

      var AkitaPlugin = /*#__PURE__*/function () {
        function AkitaPlugin(query, config) {
          _classCallCheck(this, AkitaPlugin);

          this.query = query;

          if (config && config.resetFn) {
            if (Object(_config__WEBPACK_IMPORTED_MODULE_2__["getAkitaConfig"])().resettable) {
              this.onReset(config.resetFn);
            }
          }
        }
        /** This method is responsible for getting access to the query. */


        _createClass(AkitaPlugin, [{
          key: "getQuery",
          value: function getQuery() {
            return this.query;
          }
          /** This method is responsible for getting access to the store. */

        }, {
          key: "getStore",
          value: function getStore() {
            return this.getQuery().__store__;
          }
          /** This method is responsible tells whether the plugin is entityBased or not.  */

        }, {
          key: "isEntityBased",
          value: function isEntityBased(entityId) {
            return Object(_toBoolean__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(entityId);
          }
          /** This method is responsible for selecting the source; it can be the whole store or one entity. */

        }, {
          key: "selectSource",
          value: function selectSource(entityId, property) {
            var _this38 = this;

            if (this.isEntityBased(entityId)) {
              return this.getQuery().selectEntity(entityId).pipe(Object(_filterNil__WEBPACK_IMPORTED_MODULE_0__["filterNilValue"])());
            }

            if (property) {
              return this.getQuery().select(function (state) {
                return Object(_getValueByString__WEBPACK_IMPORTED_MODULE_3__["getValue"])(state, _this38.withStoreName(property));
              });
            }

            return this.getQuery().select();
          }
        }, {
          key: "getSource",
          value: function getSource(entityId, property) {
            if (this.isEntityBased(entityId)) {
              return this.getQuery().getEntity(entityId);
            }

            var state = this.getQuery().getValue();

            if (property) {
              return Object(_getValueByString__WEBPACK_IMPORTED_MODULE_3__["getValue"])(state, this.withStoreName(property));
            }

            return state;
          }
        }, {
          key: "withStoreName",
          value: function withStoreName(prop) {
            return "".concat(this.storeName, ".").concat(prop);
          }
        }, {
          key: "updateStore",

          /** This method is responsible for updating the store or one entity; it can be the whole store or one entity. */
          value: function updateStore(newState, entityId, property) {
            var _this39 = this;

            var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (this.isEntityBased(entityId)) {
              var store = this.getStore();
              replace ? store.replace(entityId, newState) : store.update(entityId, newState);
            } else {
              if (property) {
                this.getStore()._setState(function (state) {
                  return Object(_setValueByString__WEBPACK_IMPORTED_MODULE_4__["setValue"])(state, _this39.withStoreName(property), newState, true);
                });

                return;
              }

              var nextState = replace ? newState : function (state) {
                return Object.assign(Object.assign({}, state), newState);
              };

              this.getStore()._setState(nextState);
            }
          }
          /**
           * Function to invoke upon reset
           */

        }, {
          key: "onReset",
          value: function onReset(fn) {
            var _this40 = this;

            var original = this.getStore().reset;

            this.getStore().reset = function () {
              for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
              }

              /** It should run after the plugin destroy method */
              setTimeout(function () {
                original.apply(_this40.getStore(), params);
                fn();
              });
            };
          }
        }, {
          key: "storeName",
          get: function get() {
            return this.getStore().storeName;
          }
        }]);

        return AkitaPlugin;
      }();
      /***/

    },

    /***/
    "JMny":
    /*!*******************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/state/cart.actions.ts ***!
      \*******************************************************************/

    /*! exports provided: CartActions */

    /***/
    function JMny(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartActions", function () {
        return CartActions;
      });
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");

      var CartActions;

      (function (CartActions) {
        CartActions.removeItem = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Remove Item', Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["props"])());
        CartActions.removeItemSuccess = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Remove Item Success');
        CartActions.test = Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_0__["createAction"])('Testing Action');
      })(CartActions || (CartActions = {})); // alternatively
      // export const removeItem = createAction("[Cart] Remove Item", payload<{productId: ID}>())

      /***/

    },

    /***/
    "JoxY":
    /*!***********************************************!*\
      !*** ./libs/akita/src/lib/entitiesToArray.ts ***!
      \***********************************************/

    /*! exports provided: entitiesToArray */

    /***/
    function JoxY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "entitiesToArray", function () {
        return entitiesToArray;
      });
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sort */
      "yKN+");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB"); // @internal


      function entitiesToArray(state, options) {
        var arr = [];
        var ids = state.ids,
            entities = state.entities;
        var filterBy = options.filterBy,
            limitTo = options.limitTo,
            sortBy = options.sortBy,
            sortByOrder = options.sortByOrder;

        var _loop4 = function _loop4(i) {
          var entity = entities[ids[i]];

          if (!filterBy) {
            arr.push(entity);
            return "continue";
          }

          var toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_2__["coerceArray"])(filterBy);
          var allPass = toArray.every(function (fn) {
            return fn(entity, i);
          });

          if (allPass) {
            arr.push(entity);
          }
        };

        for (var i = 0; i < ids.length; i++) {
          var _ret3 = _loop4(i);

          if (_ret3 === "continue") continue;
        }

        if (sortBy) {
          var _sortBy = Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(sortBy) ? sortBy : Object(_sort__WEBPACK_IMPORTED_MODULE_1__["compareValues"])(sortBy, sortByOrder);

          arr = arr.sort(function (a, b) {
            return _sortBy(a, b, state);
          });
        }

        var length = Math.min(limitTo || arr.length, arr.length);
        return length === arr.length ? arr : arr.slice(0, length);
      }
      /***/

    },

    /***/
    "K/Dx":
    /*!***************************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/state/products.effects.ts ***!
      \***************************************************************************/

    /*! exports provided: ProductsEffects */

    /***/
    function KDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsEffects", function () {
        return ProductsEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");
      /* harmony import */


      var _products_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./products.store */
      "/m3n");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ProductsEffects = function ProductsEffects(actions$, productsStore) {
        _classCallCheck(this, ProductsEffects);

        this.actions$ = actions$;
        this.productsStore = productsStore;
        this.allActionsProducts = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
          return console.log('product effect', action);
        }));
      };

      ProductsEffects.ɵfac = function ProductsEffects_Factory(t) {
        return new (t || ProductsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_products_store__WEBPACK_IMPORTED_MODULE_3__["ProductsStore"]));
      };

      ProductsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProductsEffects,
        factory: ProductsEffects.ɵfac,
        providedIn: 'root'
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProductsEffects.prototype, "allActionsProducts", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }, {
            type: _products_store__WEBPACK_IMPORTED_MODULE_3__["ProductsStore"]
          }];
        }, {
          allActionsProducts: []
        });
      })();
      /***/

    },

    /***/
    "KA1R":
    /*!*****************************************!*\
      !*** ./libs/akita/src/lib/toBoolean.ts ***!
      \*****************************************/

    /*! exports provided: toBoolean */

    /***/
    function KA1R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toBoolean", function () {
        return toBoolean;
      }); // @internal


      function toBoolean(value) {
        return value != null && "".concat(value) !== 'false';
      }
      /***/

    },

    /***/
    "KdTy":
    /*!*****************************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/module-manager.service.ts ***!
      \*****************************************************************/

    /*! exports provided: ModuleManager */

    /***/
    function KdTy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModuleManager", function () {
        return ModuleManager;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./actions */
      "fZ2q");

      var ModuleManager = /*#__PURE__*/function () {
        function ModuleManager(actions$) {
          _classCallCheck(this, ModuleManager);

          this.actions$ = actions$;
          this.effectInstanceSources = new WeakSet();
          this.destroyEffects$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(ModuleManager, [{
          key: "subscribeToEffects",
          value: function subscribeToEffects(effectInstance) {
            var _this41 = this;

            var _loop5 = function _loop5(key) {
              var property = effectInstance[key];

              if (property.isEffect === true) {
                property.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this41.destroyEffects$)).subscribe(function (actionOrSkip) {
                  _this41.dispatchAction(property, actionOrSkip);
                });
              }
            };

            for (var key in effectInstance) {
              _loop5(key);
            }
          }
        }, {
          key: "has",
          value: function has(effect) {
            return this.effectInstanceSources.has(effect);
          }
        }, {
          key: "add",
          value: function add(effect) {
            this.effectInstanceSources.add(effect);
          }
        }, {
          key: "dispatchAction",
          value: function dispatchAction(property, actionOrSkip) {
            if (property.dispatchAction && this.checkAction(actionOrSkip)) {
              this.actions$.dispatch(actionOrSkip);
            }
          }
        }, {
          key: "checkAction",
          value: function checkAction(action) {
            if (action.type) {
              return true;
            }

            throw new TypeError('Make sure to provide a valid action type or set the option {dispatch: false}');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // modules aren't supposed to be destroyed; might not be needed
            this.destroyEffects$.next();
            this.effectInstanceSources = new WeakSet();
          }
        }]);

        return ModuleManager;
      }();

      ModuleManager.ɵfac = function ModuleManager_Factory(t) {
        return new (t || ModuleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_actions__WEBPACK_IMPORTED_MODULE_3__["Actions"]));
      };

      ModuleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ModuleManager,
        factory: ModuleManager.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _actions__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "L/Kq":
    /*!************************************!*\
      !*** ./libs/akita/src/lib/guid.ts ***!
      \************************************/

    /*! exports provided: guid */

    /***/
    function LKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guid", function () {
        return guid;
      });
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
        return Math.random().toString(36).slice(2);
      }
      /***/

    },

    /***/
    "LKi4":
    /*!******************************************!*\
      !*** ./libs/akita/src/lib/deepFreeze.ts ***!
      \******************************************/

    /*! exports provided: deepFreeze */

    /***/
    function LKi4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deepFreeze", function () {
        return deepFreeze;
      }); // @internal


      function deepFreeze(o) {
        Object.freeze(o);
        var oIsFunction = typeof o === 'function';
        var hasOwnProp = Object.prototype.hasOwnProperty;
        Object.getOwnPropertyNames(o).forEach(function (prop) {
          if (hasOwnProp.call(o, prop) && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true) && o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
          }
        });
        return o;
      }
      /***/

    },

    /***/
    "LteI":
    /*!**************************************!*\
      !*** ./libs/akita/src/lib/config.ts ***!
      \**************************************/

    /*! exports provided: akitaConfig, getAkitaConfig, getGlobalProducerFn */

    /***/
    function LteI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "akitaConfig", function () {
        return akitaConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAkitaConfig", function () {
        return getAkitaConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGlobalProducerFn", function () {
        return getGlobalProducerFn;
      });

      var CONFIG = {
        resettable: false,
        ttl: null,
        producerFn: undefined
      };

      function akitaConfig(config) {
        CONFIG = Object.assign(Object.assign({}, CONFIG), config);
      } // @internal


      function getAkitaConfig() {
        return CONFIG;
      }

      function getGlobalProducerFn() {
        return CONFIG.producerFn;
      }
      /***/

    },

    /***/
    "M7vU":
    /*!**********************************************!*\
      !*** ./libs/akita/src/lib/removeEntities.ts ***!
      \**********************************************/

    /*! exports provided: removeEntities, removeAllEntities */

    /***/
    function M7vU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeEntities", function () {
        return removeEntities;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeAllEntities", function () {
        return removeAllEntities;
      });
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony import */


      var _activeState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./activeState */
      "odxm"); // @internal


      function removeEntities(_ref14) {
        var state = _ref14.state,
            ids = _ref14.ids;
        if (Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(ids)) return removeAllEntities(state);
        var entities = state.entities;
        var newEntities = {};

        var _iterator7 = _createForOfIteratorHelper(state.ids),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var id = _step7.value;

            if (ids.includes(id) === false) {
              newEntities[id] = entities[id];
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        var newState = Object.assign(Object.assign({}, state), {
          entities: newEntities,
          ids: state.ids.filter(function (current) {
            return ids.includes(current) === false;
          })
        });

        if (Object(_activeState__WEBPACK_IMPORTED_MODULE_1__["hasActiveState"])(state)) {
          newState.active = Object(_activeState__WEBPACK_IMPORTED_MODULE_1__["resolveActiveEntity"])(newState);
        }

        return newState;
      } // @internal


      function removeAllEntities(state) {
        return Object.assign(Object.assign({}, state), {
          entities: {},
          ids: [],
          active: Object(_activeState__WEBPACK_IMPORTED_MODULE_1__["isMultiActiveState"])(state.active) ? [] : null
        });
      }
      /***/

    },

    /***/
    "MduY":
    /*!**********************************************!*\
      !*** ./libs/akita/src/lib/updateEntities.ts ***!
      \**********************************************/

    /*! exports provided: updateEntities */

    /***/
    function MduY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateEntities", function () {
        return updateEntities;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _hasEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hasEntity */
      "dNb/");
      /* harmony import */


      var _isPlainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./isPlainObject */
      "Sr74"); // @internal


      function updateEntities(_ref15) {
        var state = _ref15.state,
            ids = _ref15.ids,
            idKey = _ref15.idKey,
            newStateOrFn = _ref15.newStateOrFn,
            preUpdateEntity = _ref15.preUpdateEntity,
            producerFn = _ref15.producerFn,
            onEntityIdChanges = _ref15.onEntityIdChanges;
        var updatedEntities = {};
        var isUpdatingIdKey = false;
        var idToUpdate;

        var _iterator8 = _createForOfIteratorHelper(ids),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _id = _step8.value;

            // if the entity doesn't exist don't do anything
            if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_2__["hasEntity"])(state.entities, _id) === false) {
              continue;
            }

            var oldEntity = state.entities[_id];
            var newState = void 0;

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(newStateOrFn)) {
              newState = Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(producerFn) ? producerFn(oldEntity, newStateOrFn) : newStateOrFn(oldEntity);
            } else {
              newState = newStateOrFn;
            }

            var isIdChanged = newState.hasOwnProperty(idKey) && newState[idKey] !== oldEntity[idKey];
            var newEntity = void 0;
            idToUpdate = _id;

            if (isIdChanged) {
              isUpdatingIdKey = true;
              idToUpdate = newState[idKey];
            }

            var merged = Object.assign(Object.assign({}, oldEntity), newState);

            if (Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(oldEntity)) {
              newEntity = merged;
            } else {
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
              } else {
                newEntity = new newState.constructor(merged);
              }
            }

            updatedEntities[idToUpdate] = preUpdateEntity(oldEntity, newEntity);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        var updatedIds = state.ids;
        var stateEntities = state.entities;

        if (isUpdatingIdKey) {
          var _ids2 = _slicedToArray(ids, 1),
              id = _ids2[0];

          var _a = state.entities,
              _b = id,
              deletedEntity = _a[_b],
              rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
          stateEntities = rest;
          updatedIds = state.ids.map(function (current) {
            return current === id ? idToUpdate : current;
          });
          onEntityIdChanges(id, idToUpdate);
        }

        return Object.assign(Object.assign({}, state), {
          entities: Object.assign(Object.assign({}, stateEntities), updatedEntities),
          ids: updatedIds
        });
      }
      /***/

    },

    /***/
    "MhGE":
    /*!********************************************!*\
      !*** ./apps/angular-store-app/src/main.ts ***!
      \********************************************/

    /*! no exports provided */

    /***/
    function MhGE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "J2Ln");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "tPHU");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["enableAkitaProdMode"])();
      }

      var storage = Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["persistState"])({
        key: 'akitaPlayground',
        include: ['auth.token', 'todos']
      });

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]([{
        provide: 'persistStorage',
        useValue: storage
      }]).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "N1t3":
    /*!*****************************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/state/auth.query.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthQuery */

    /***/
    function N1t3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthQuery", function () {
        return AuthQuery;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.store */
      "OD9W");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      var AuthQuery = /*#__PURE__*/function (_datorama_akita__WEBP6) {
        _inherits(AuthQuery, _datorama_akita__WEBP6);

        var _super13 = _createSuper(AuthQuery);

        function AuthQuery(store) {
          var _this42;

          _classCallCheck(this, AuthQuery);

          _this42 = _super13.call(this, store);
          _this42.store = store;
          _this42.isLoggedIn$ = _this42.select(function (user) {
            return !!user.token;
          });
          return _this42;
        }

        return AuthQuery;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"]);

      AuthQuery.ɵfac = function AuthQuery_Factory(t) {
        return new (t || AuthQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"]));
      };

      AuthQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthQuery,
        factory: AuthQuery.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthQuery, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NMJT":
    /*!******************************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/product/product.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProductComponent */

    /***/
    function NMJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
        return ProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1) {
        return ["/product", a1];
      };

      var ProductComponent = function ProductComponent() {
        _classCallCheck(this, ProductComponent);

        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subtract = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      };

      ProductComponent.ɵfac = function ProductComponent_Factory(t) {
        return new (t || ProductComponent)();
      };

      ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductComponent,
        selectors: [["app-product"]],
        inputs: {
          product: "product"
        },
        outputs: {
          add: "add",
          subtract: "subtract"
        },
        decls: 17,
        vars: 9,
        consts: [[1, "card", "p-width"], [1, "card-image", "pointer", 3, "routerLink"], [3, "src"], [1, "card-content", "pointer", 3, "routerLink"], [1, "mbb"], [1, "card-action", "flex", "flex-end"], [1, "btn", "waves-effect", "waves-light", "cyan", "lighten-2", "mr", 3, "click"], [1, "material-icons"], [1, "btn", "waves-effect", "waves-light", "blue-grey", "lighten-3", 3, "click"]],
        template: function ProductComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_11_listener() {
              return ctx.add.emit(ctx.product);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "exposure_plus_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_14_listener() {
              return ctx.subtract.emit(ctx.product);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "exposure_neg_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            templateUrl: "./product.component.html"
          }]
        }], null, {
          product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          add: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          subtract: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Nm76":
    /*!*******************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/effect.utils.ts ***!
      \*******************************************************/

    /*! exports provided: setMetadata */

    /***/
    function Nm76(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setMetadata", function () {
        return setMetadata;
      });

      function setMetadata(effect, propertyName, effectOptions) {
        Object.defineProperty(effect, 'isEffect', {
          enumerable: true,
          configurable: false,
          writable: false,
          value: true
        });
        Object.defineProperty(effect, 'name', {
          enumerable: true,
          configurable: false,
          writable: false,
          value: propertyName
        });
        Object.defineProperty(effect, 'dispatchAction', {
          enumerable: true,
          configurable: false,
          writable: false,
          value: effectOptions.dispatch
        });
      }
      /***/

    },

    /***/
    "OD9W":
    /*!*****************************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/state/auth.store.ts ***!
      \*****************************************************************/

    /*! exports provided: createInitialState, AuthStore */

    /***/
    function OD9W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createInitialState", function () {
        return createInitialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthStore", function () {
        return AuthStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      function createInitialState() {
        return {
          id: null,
          firstName: '',
          lastName: '',
          token: ''
        };
      }

      var AuthStore = /*#__PURE__*/function (_datorama_akita__WEBP7) {
        _inherits(AuthStore, _datorama_akita__WEBP7);

        var _super14 = _createSuper(AuthStore);

        function AuthStore() {
          _classCallCheck(this, AuthStore);

          return _super14.call(this, createInitialState());
        }

        return AuthStore;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]);

      AuthStore.ɵfac = function AuthStore_Factory(t) {
        return new (t || AuthStore)();
      };

      AuthStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthStore,
        factory: AuthStore.ɵfac,
        providedIn: 'root'
      });
      AuthStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'auth',
        resettable: true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AuthStore);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthStore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ONmh":
    /*!*******************************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/login/login.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LoginModule */

    /***/
    function ONmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.component */
      "4IkZ");

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LoginModule
      });
      LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LoginModule_Factory(t) {
          return new (t || LoginModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "OTOy":
    /*!***************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/index.ts ***!
      \***************************************************/

    /*! exports provided: mapResponse, NgEntityService, NG_ENTITY_SERVICE_CONFIG, defaultConfig, mergeDeep, NgEntityServiceConfig, HttpMethod, ofType, filterMethod, filterStore, NgEntityServiceNotifier, isID, NgEntityServiceLoader, successAction, errorAction */

    /***/
    function OTOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/ng-entity.service */
      "6/9y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mapResponse", function () {
        return _lib_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["mapResponse"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgEntityService", function () {
        return _lib_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["NgEntityService"];
      });
      /* harmony import */


      var _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/ng-entity-service.config */
      "sog1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NG_ENTITY_SERVICE_CONFIG", function () {
        return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["NG_ENTITY_SERVICE_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "defaultConfig", function () {
        return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["defaultConfig"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeDeep", function () {
        return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgEntityServiceConfig", function () {
        return _lib_ng_entity_service_config__WEBPACK_IMPORTED_MODULE_1__["NgEntityServiceConfig"];
      });
      /* harmony import */


      var _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/ng-entity-service-notifier */
      "ZY5P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HttpMethod", function () {
        return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ofType", function () {
        return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["ofType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "filterMethod", function () {
        return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["filterMethod"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "filterStore", function () {
        return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["filterStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgEntityServiceNotifier", function () {
        return _lib_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["NgEntityServiceNotifier"];
      });
      /* harmony import */


      var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/helpers */
      "Rv9Z");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isID", function () {
        return _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["isID"];
      });
      /* harmony import */


      var _lib_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lib/types */
      "pmvp");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _lib_ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lib/ng-entity-service.loader */
      "YCCL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgEntityServiceLoader", function () {
        return _lib_ng_entity_service_loader__WEBPACK_IMPORTED_MODULE_5__["NgEntityServiceLoader"];
      });
      /* harmony import */


      var _lib_action_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lib/action-factory */
      "fRdR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "successAction", function () {
        return _lib_action_factory__WEBPACK_IMPORTED_MODULE_6__["successAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "errorAction", function () {
        return _lib_action_factory__WEBPACK_IMPORTED_MODULE_6__["errorAction"];
      });
      /***/

    },

    /***/
    "PK/g":
    /*!**********************************************!*\
      !*** ./libs/akita/src/lib/combineQueries.ts ***!
      \**********************************************/

    /*! exports provided: combineQueries */

    /***/
    function PKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineQueries", function () {
        return combineQueries;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function combineQueries(observables) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["auditTime"])(0));
      }
      /***/

    },

    /***/
    "PaKE":
    /*!*************************************************************!*\
      !*** ./apps/angular-store-app/src/app/nav/nav.component.ts ***!
      \*************************************************************/

    /*! exports provided: NavComponent */

    /***/
    function PaKE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth/state/auth.service */
      "dpu8");
      /* harmony import */


      var _auth_state_auth_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth/state/auth.query */
      "N1t3");
      /* harmony import */


      var _cart_state_cart_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../cart/state/cart.query */
      "xv5F");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_5_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r4.toLowerCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
        }
      }

      var _c0 = function _c0() {
        return {
          hello: "world"
        };
      };

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent(cartQuery, authService, authQuery, router) {
          _classCallCheck(this, NavComponent);

          this.cartQuery = cartQuery;
          this.authService = authService;
          this.authQuery = authQuery;
          this.router = router;
          this.navItems = ['Todos', 'Contacts', 'Stories', 'Movies', 'Widgets', 'Posts', 'FormsManager'];
          this.count$ = this.cartQuery.selectCount();
          this.isLoggedIn$ = this.authQuery.isLoggedIn$;
        }

        _createClass(NavComponent, [{
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigateByUrl('login');
          }
        }, {
          key: "resetStores",
          value: function resetStores() {
            this.router.navigateByUrl('login');
          }
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_state_cart_query__WEBPACK_IMPORTED_MODULE_4__["CartQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 14,
        vars: 9,
        consts: [[1, "nav-wrapper", "cyan", "lighten-2"], ["routerLink", "/", 1, "brand-logo"], ["src", "/assets/akita.svg", 1, "logo"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "blue-text text-lighten-2", "routerLink", "cart", 3, "state"], [1, "new", "badge"], [3, "click"], ["routerLinkActive", "blue-text text-lighten-2", 3, "routerLink"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.isLoggedIn$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.count$));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav',
            template: "\n    <nav>\n      <div class=\"nav-wrapper cyan lighten-2\">\n        <a class=\"brand-logo\" routerLink=\"/\">\n          <img src=\"/assets/akita.svg\" class=\"logo\" />\n        </a>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li *ngIf=\"isLoggedIn$ | async\"><a (click)=\"logout()\">Logout</a></li>\n          <li *ngFor=\"let item of navItems\">\n            <a routerLinkActive=\"blue-text text-lighten-2\" [routerLink]=\"item.toLowerCase()\">{{ item }}</a>\n          </li>\n          <li>\n            <a routerLinkActive=\"blue-text text-lighten-2\" routerLink=\"cart\" [state]=\"{ hello: 'world' }\"\n              >Cart <span class=\"new badge\">{{ count$ | async }}</span></a\n            >\n          </li>\n        </ul>\n      </div>\n    </nav>\n  "
          }]
        }], function () {
          return [{
            type: _cart_state_cart_query__WEBPACK_IMPORTED_MODULE_4__["CartQuery"]
          }, {
            type: _auth_state_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _auth_state_auth_query__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PiDp":
    /*!*******************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/state/cart.service.ts ***!
      \*******************************************************************/

    /*! exports provided: CartService */

    /***/
    function PiDp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cart_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cart.store */
      "gtU3");
      /* harmony import */


      var _cart_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart.query */
      "xv5F");
      /* harmony import */


      var _cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.model */
      "AW4r");

      var CartService = /*#__PURE__*/function () {
        function CartService(cartStore, cartQuery) {
          _classCallCheck(this, CartService);

          this.cartStore = cartStore;
          this.cartQuery = cartQuery;
        }

        _createClass(CartService, [{
          key: "addProductToCart",
          value: function addProductToCart(productId) {
            var findItem = this.cartQuery.getEntity(productId);

            if (!!findItem) {
              return this.cartStore.updateQuantity(productId);
            }

            var item = Object(_cart_model__WEBPACK_IMPORTED_MODULE_3__["createCartItem"])({
              productId: productId
            });
            return this.cartStore.add(item);
          }
        }, {
          key: "subtract",
          value: function subtract(productId) {
            var findItem = this.cartQuery.getEntity(productId);

            if (!!findItem) {
              if (findItem.quantity === 1) {
                return this.cartStore.remove(productId);
              }

              return this.cartStore.updateQuantity(findItem.productId, -1);
            }
          }
        }, {
          key: "remove",
          value: function remove(productId) {
            this.cartStore.remove(productId);
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_query__WEBPACK_IMPORTED_MODULE_2__["CartQuery"]));
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"]
          }, {
            type: _cart_query__WEBPACK_IMPORTED_MODULE_2__["CartQuery"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Pvbo":
    /*!***********************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/effect.decorator.ts ***!
      \***********************************************************/

    /*! exports provided: Effect */

    /***/
    function Pvbo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Effect", function () {
        return Effect;
      });
      /* harmony import */


      var _effect_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./effect.utils */
      "Nm76");

      function Effect(options) {
        options = Object.assign({
          dispatch: false
        }, options);
        return function (classProto, propKey) {
          var returnValue;
          Object.defineProperty(classProto, propKey, {
            get: function get() {
              return returnValue;
            },
            set: function set(value) {
              Object(_effect_utils__WEBPACK_IMPORTED_MODULE_0__["setMetadata"])(value, propKey, options);
              returnValue = value;
            },
            enumerable: true
          });
        };
      }
      /***/

    },

    /***/
    "Q8dH":
    /*!***************************************!*\
      !*** ./libs/akita/src/lib/actions.ts ***!
      \***************************************/

    /*! exports provided: currentAction, resetCustomAction, logAction, setAction, setSkipAction, action */

    /***/
    function Q8dH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "currentAction", function () {
        return currentAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resetCustomAction", function () {
        return resetCustomAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logAction", function () {
        return logAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setAction", function () {
        return setAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setSkipAction", function () {
        return setSkipAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "action", function () {
        return action;
      });

      var currentAction = {
        type: null,
        entityIds: null,
        skip: false,
        payload: null
      };
      var customActionActive = false;

      function resetCustomAction() {
        customActionActive = false;
      } // public API for custom actions. Custom action always wins


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

      function setSkipAction() {
        var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        currentAction.skip = skip;
      }

      function action(action, entityIds) {
        return function (target, propertyKey, descriptor) {
          var originalMethod = descriptor.value;

          descriptor.value = function () {
            logAction(action, entityIds);

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return originalMethod.apply(this, args);
          };

          return descriptor;
        };
      }
      /***/

    },

    /***/
    "QElp":
    /*!**********************************************!*\
      !*** ./libs/akita/src/lib/runStoreAction.ts ***!
      \**********************************************/

    /*! exports provided: StoreAction, EntityStoreAction, getStore, getStoreByName, getEntityStore, getEntityStoreByName, runStoreAction, runEntityStoreAction */

    /***/
    function QElp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _EntityStoreActionMap;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreAction", function () {
        return StoreAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityStoreAction", function () {
        return EntityStoreAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStore", function () {
        return getStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStoreByName", function () {
        return getStoreByName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEntityStore", function () {
        return getEntityStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEntityStoreByName", function () {
        return getEntityStoreByName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "runStoreAction", function () {
        return runStoreAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "runEntityStoreAction", function () {
        return runEntityStoreAction;
      });
      /* harmony import */


      var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./errors */
      "CKFZ");
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony import */


      var _storeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storeConfig */
      "gySQ");
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stores */
      "40zj");

      var StoreAction;

      (function (StoreAction) {
        StoreAction["Update"] = "UPDATE";
      })(StoreAction || (StoreAction = {}));

      var StoreActionMapping = _defineProperty({}, StoreAction.Update, 'update');

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

      var EntityStoreActionMapping = (_EntityStoreActionMap = {}, _defineProperty(_EntityStoreActionMap, EntityStoreAction.Update, 'update'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.AddEntities, 'add'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.SetEntities, 'set'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.UpdateEntities, 'update'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.RemoveEntities, 'remove'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.UpsertEntities, 'upsert'), _defineProperty(_EntityStoreActionMap, EntityStoreAction.UpsertManyEntities, 'upsertMany'), _EntityStoreActionMap);
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
        var store = _stores__WEBPACK_IMPORTED_MODULE_3__["__stores__"][storeName];

        if (Object(_isNil__WEBPACK_IMPORTED_MODULE_1__["isNil"])(store)) {
          throw new _errors__WEBPACK_IMPORTED_MODULE_0__["AkitaError"]("".concat(store.storeName, " doesn't exist"));
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
        var store = typeof storeClassOrName === 'string' ? getStoreByName(storeClassOrName) : getStore(storeClassOrName);
        operation(store[StoreActionMapping[action]].bind(store));
      }

      function runEntityStoreAction(storeClassOrName, action, operation) {
        var store = typeof storeClassOrName === 'string' ? getEntityStoreByName(storeClassOrName) : getEntityStore(storeClassOrName);
        operation(store[EntityStoreActionMapping[action]].bind(store));
      }
      /***/

    },

    /***/
    "QRUx":
    /*!************************************************!*\
      !*** ./libs/akita/src/lib/setValueByString.ts ***!
      \************************************************/

    /*! exports provided: setValue */

    /***/
    function QRUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setValue", function () {
        return setValue;
      });
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isObject */
      "iJBq");
      /**
       * @internal
       *
       * @example
       * setValue(state, 'todos.ui', { filter: {} })
       */


      function setValue(obj, prop, val) {
        var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var split = prop.split('.');

        if (split.length === 1) {
          return Object.assign(Object.assign({}, obj), val);
        }

        obj = Object.assign({}, obj);
        var lastIndex = split.length - 2;
        var removeStoreName = prop.split('.').slice(1);
        removeStoreName.reduce(function (acc, part, index) {
          if (index !== lastIndex) {
            acc[part] = Object.assign({}, acc[part]);
            return acc && acc[part];
          }

          acc[part] = replace || Array.isArray(acc[part]) || !Object(_isObject__WEBPACK_IMPORTED_MODULE_0__["isObject"])(acc[part]) ? val : Object.assign(Object.assign({}, acc[part]), val);
          return acc && acc[part];
        }, obj);
        return obj;
      }
      /***/

    },

    /***/
    "Qqp4":
    /*!*******************************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/state/auth.effects.ts ***!
      \*******************************************************************/

    /*! exports provided: AuthEffects */

    /***/
    function Qqp4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
        return AuthEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");
      /* harmony import */


      var _auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.store */
      "OD9W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthEffects = function AuthEffects(actions$, authStore) {
        _classCallCheck(this, AuthEffects);

        this.actions$ = actions$;
        this.authStore = authStore;
        this.allActionsAuth = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
          return console.log('auth effect', action);
        }));
      };

      AuthEffects.ɵfac = function AuthEffects_Factory(t) {
        return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]));
      };

      AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthEffects,
        factory: AuthEffects.ɵfac,
        providedIn: 'root'
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({
        dispatch: false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AuthEffects.prototype, "allActionsAuth", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }, {
            type: _auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]
          }];
        }, {
          allActionsAuth: []
        });
      })();
      /***/

    },

    /***/
    "Qu3/":
    /*!*******************************************************************!*\
      !*** ./libs/akita/src/lib/plugins/dirtyCheck/dirtyCheckPlugin.ts ***!
      \*******************************************************************/

    /*! exports provided: dirtyCheckDefaultParams, getNestedPath, DirtyCheckPlugin */

    /***/
    function Qu3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dirtyCheckDefaultParams", function () {
        return dirtyCheckDefaultParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNestedPath", function () {
        return getNestedPath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirtyCheckPlugin", function () {
        return DirtyCheckPlugin;
      });
      /* harmony import */


      var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../plugin */
      "J5PQ");
      /* harmony import */


      var _queryEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../queryEntity */
      "GErp");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _isUndefined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../isUndefined */
      "9NJV");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../coerceArray */
      "6ukB");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../isFunction */
      "u21x");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../actions */
      "Q8dH");

      var dirtyCheckDefaultParams = {
        comparator: function comparator(head, current) {
          return JSON.stringify(head) !== JSON.stringify(current);
        }
      };

      function getNestedPath(nestedObj, path) {
        var pathAsArray = path.split('.');
        return pathAsArray.reduce(function (obj, key) {
          return obj && obj[key] !== 'undefined' ? obj[key] : undefined;
        }, nestedObj);
      }

      var DirtyCheckPlugin = /*#__PURE__*/function (_plugin__WEBPACK_IMPO3) {
        _inherits(DirtyCheckPlugin, _plugin__WEBPACK_IMPO3);

        var _super15 = _createSuper(DirtyCheckPlugin);

        function DirtyCheckPlugin(query, params, _entityId) {
          var _this43;

          _classCallCheck(this, DirtyCheckPlugin);

          _this43 = _super15.call(this, query);
          _this43.query = query;
          _this43.params = params;
          _this43._entityId = _entityId;
          _this43.dirty = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          _this43.active = false;
          _this43._reset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this43.isDirty$ = _this43.dirty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          _this43.reset$ = _this43._reset.asObservable();
          _this43.params = Object.assign(Object.assign({}, dirtyCheckDefaultParams), params);

          if (_this43.params.watchProperty) {
            var watchProp = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(_this43.params.watchProperty);

            if (query instanceof _queryEntity__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"] && watchProp.includes('entities') && !watchProp.includes('ids')) {
              watchProp.push('ids');
            }

            _this43.params.watchProperty = watchProp;
          }

          return _this43;
        }

        _createClass(DirtyCheckPlugin, [{
          key: "reset",
          value: function reset() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var currentValue = this.head;

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(params.updateFn)) {
              if (this.isEntityBased(this._entityId)) {
                currentValue = params.updateFn(this.head, this.getQuery().getEntity(this._entityId));
              } else {
                currentValue = params.updateFn(this.head, this.getQuery().getValue());
              }
            }

            Object(_actions__WEBPACK_IMPORTED_MODULE_7__["logAction"])("@DirtyCheck - Revert");
            this.updateStore(currentValue, this._entityId);

            this._reset.next();
          }
        }, {
          key: "setHead",
          value: function setHead() {
            if (!this.active) {
              this.activate();
              this.active = true;
            } else {
              this.head = this._getHead();
            }

            this.updateDirtiness(false);
            return this;
          }
        }, {
          key: "isDirty",
          value: function isDirty() {
            return !!this.dirty.value;
          }
        }, {
          key: "hasHead",
          value: function hasHead() {
            return !!this.getHead();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.head = null;
            this.subscription && this.subscription.unsubscribe();
            this._reset && this._reset.complete();
          }
        }, {
          key: "isPathDirty",
          value: function isPathDirty(path) {
            var head = this.getHead();
            var current = this.getQuery().getValue();
            var currentPathValue = getNestedPath(current, path);
            var headPathValue = getNestedPath(head, path);
            return this.params.comparator(currentPathValue, headPathValue);
          }
        }, {
          key: "getHead",
          value: function getHead() {
            return this.head;
          }
        }, {
          key: "activate",
          value: function activate() {
            var _this44 = this;

            this.head = this._getHead();
            /** if we are tracking specific properties select only the relevant ones */

            var sources = this.params.watchProperty ? this.params.watchProperty.map(function (prop) {
              return _this44.query.select(function (state) {
                return state[prop];
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) {
                return {
                  val: val,
                  __akitaKey: prop
                };
              }));
            }) : [this.selectSource(this._entityId)];
            this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1)).subscribe(function (currentState) {
              if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(_this44.head)) return;
              /** __akitaKey is used to determine if we are tracking a specific property or a store change */

              var isChange = currentState.some(function (state) {
                var head = state.__akitaKey ? _this44.head[state.__akitaKey] : _this44.head;
                var compareTo = state.__akitaKey ? state.val : state;
                return _this44.params.comparator(head, compareTo);
              });

              _this44.updateDirtiness(isChange);
            });
          }
        }, {
          key: "updateDirtiness",
          value: function updateDirtiness(isDirty) {
            this.dirty.next(isDirty);
          }
        }, {
          key: "_getHead",
          value: function _getHead() {
            var head = this.getSource(this._entityId);

            if (this.params.watchProperty) {
              head = this.getWatchedValues(head);
            }

            return head;
          }
        }, {
          key: "getWatchedValues",
          value: function getWatchedValues(source) {
            return this.params.watchProperty.reduce(function (watched, prop) {
              watched[prop] = source[prop];
              return watched;
            }, {});
          }
        }]);

        return DirtyCheckPlugin;
      }(_plugin__WEBPACK_IMPORTED_MODULE_0__["AkitaPlugin"]);
      /***/

    },

    /***/
    "RK5a":
    /*!*********************************************!*\
      !*** ./libs/akita/src/lib/entityActions.ts ***!
      \*********************************************/

    /*! exports provided: EntityActions */

    /***/
    function RK5a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityActions", function () {
        return EntityActions;
      });

      var EntityActions;

      (function (EntityActions) {
        EntityActions["Set"] = "Set";
        EntityActions["Add"] = "Add";
        EntityActions["Update"] = "Update";
        EntityActions["Remove"] = "Remove";
      })(EntityActions || (EntityActions = {}));
      /***/

    },

    /***/
    "RPUs":
    /*!****************************************!*\
      !*** ./libs/akita/src/lib/arrayAdd.ts ***!
      \****************************************/

    /*! exports provided: arrayAdd */

    /***/
    function RPUs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayAdd", function () {
        return arrayAdd;
      });
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB");
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


      function arrayAdd(arr, newEntity) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var newEntities = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(newEntity);
        var toArr = arr || [];
        return options.prepend ? [].concat(_toConsumableArray(newEntities), _toConsumableArray(toArr)) : [].concat(_toConsumableArray(toArr), _toConsumableArray(newEntities));
      }
      /***/

    },

    /***/
    "Rbjf":
    /*!*************************************!*\
      !*** ./libs/akita/src/lib/query.ts ***!
      \*************************************/

    /*! exports provided: Query */

    /***/
    function Rbjf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Query", function () {
        return Query;
      });
      /* harmony import */


      var _queryConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./queryConfig */
      "mKZq");
      /* harmony import */


      var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isString */
      "oJ0C");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./env */
      "VCUg");
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./stores */
      "40zj");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _compareKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./compareKeys */
      "aH7v");

      var Query = /*#__PURE__*/function () {
        function Query(store) {
          _classCallCheck(this, Query);

          this.store = store;
          this.__store__ = store;

          if (Object(_env__WEBPACK_IMPORTED_MODULE_3__["isDev"])()) {
            // @internal
            _stores__WEBPACK_IMPORTED_MODULE_4__["__queries__"][store.storeName] = this;
          }
        }

        _createClass(Query, [{
          key: "select",
          value: function select(project) {
            var mapFn;

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(project)) {
              mapFn = project;
            } else if (Object(_isString__WEBPACK_IMPORTED_MODULE_1__["isString"])(project)) {
              mapFn = function mapFn(state) {
                return state[project];
              };
            } else if (Array.isArray(project)) {
              return this.store._select(function (state) {
                return state;
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(Object(_compareKeys__WEBPACK_IMPORTED_MODULE_6__["compareKeys"])(project)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) {
                if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(project[0])) {
                  return project.map(function (func) {
                    return func(state);
                  });
                }

                return project.reduce(function (acc, k) {
                  acc[k] = state[k];
                  return acc;
                }, {});
              }));
            } else {
              mapFn = function mapFn(state) {
                return state;
              };
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

        }, {
          key: "selectLoading",
          value: function selectLoading() {
            return this.select(function (state) {
              return state.loading;
            });
          }
          /**
           * Select the error state
           *
           * @example
           *
           * this.query.selectError().subscribe(error => {})
           */

        }, {
          key: "selectError",
          value: function selectError() {
            return this.select(function (state) {
              return state.error;
            });
          }
          /**
           * Get the store's value
           *
           * @example
           *
           * this.query.getValue()
           *
           */

        }, {
          key: "getValue",
          value: function getValue() {
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

        }, {
          key: "selectHasCache",
          value: function selectHasCache() {
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

        }, {
          key: "getHasCache",
          value: function getHasCache() {
            return this.store._cache().value;
          } // @internal

        }, {
          key: "config",
          get: function get() {
            return this.constructor[_queryConfig__WEBPACK_IMPORTED_MODULE_0__["queryConfigKey"]];
          }
        }]);

        return Query;
      }();
      /***/

    },

    /***/
    "Rv9Z":
    /*!*********************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/lib/helpers.ts ***!
      \*********************************************************/

    /*! exports provided: isID */

    /***/
    function Rv9Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isID", function () {
        return isID;
      });
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      function isID(idOrConfig) {
        return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(idOrConfig) || Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["isString"])(idOrConfig);
      }
      /***/

    },

    /***/
    "Sq83":
    /*!**************************************************************!*\
      !*** ./libs/akita-ng-router-store/src/lib/router.service.ts ***!
      \**************************************************************/

    /*! exports provided: RouterService */

    /***/
    function Sq83(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterService", function () {
        return RouterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./router.store */
      "/1Ks");
      /* harmony import */


      var _router_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./router.query */
      "6t7H");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      var RouterService = /*#__PURE__*/function () {
        function RouterService(routerStore, routerQuery, router) {
          _classCallCheck(this, RouterService);

          this.routerStore = routerStore;
          this.routerQuery = routerQuery;
          this.router = router;
          this.dispatchTriggeredByRouter = false;
          this.navigationTriggeredByDispatch = false;
        }

        _createClass(RouterService, [{
          key: "dispatchRouterCancel",
          value: function dispatchRouterCancel(event) {
            this.update({
              navigationId: event.id
            });

            this.routerQuery.__navigationCancel.next(event);
          }
        }, {
          key: "dispatchRouterError",
          value: function dispatchRouterError(event) {
            this.update({
              navigationId: event.id
            });

            this.routerQuery.__navigationError.next(event);
          }
        }, {
          key: "dispatchRouterSuccess",
          value: function dispatchRouterSuccess() {
            this.update(this.lastRouterState);
          }
        }, {
          key: "init",
          value: function init() {
            this.setUpStoreListener();
            this.setUpStateRollbackEvents();
          }
        }, {
          key: "update",
          value: function update(routerState) {
            this.dispatchTriggeredByRouter = true;
            this.routerStore.update(function (state) {
              return Object.assign(Object.assign({}, state), routerState);
            });
            this.dispatchTriggeredByRouter = false;
            this.navigationTriggeredByDispatch = false;
          }
        }, {
          key: "setUpStoreListener",
          value: function setUpStoreListener() {
            var _this45 = this;

            this.routerQuery.select(function (state) {
              return state;
            }).subscribe(function (s) {
              _this45.lastRouterState = s;

              _this45.navigateIfNeeded();
            });
          }
        }, {
          key: "navigateIfNeeded",
          value: function navigateIfNeeded() {
            if (!this.lastRouterState || !this.lastRouterState.state || this.dispatchTriggeredByRouter) {
              return;
            }

            if (this.router.url !== this.lastRouterState.state.url) {
              this.navigationTriggeredByDispatch = true;
              Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["setSkipAction"])();
              this.router.navigateByUrl(this.lastRouterState.state.url);
            }
          }
        }, {
          key: "setUpStateRollbackEvents",
          value: function setUpStateRollbackEvents() {
            var _this46 = this;

            this.router.events.subscribe(function (e) {
              if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["GuardsCheckEnd"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ResolveEnd"]) {
                _this46.lastRouterState = _this46.serializeRoute(e);
              } else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                _this46.dispatchRouterCancel(e);
              } else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this46.dispatchRouterError(e);
              } else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && !_this46.navigationTriggeredByDispatch) {
                _this46.dispatchRouterSuccess();
              }
            });
          }
        }, {
          key: "serializeRoute",
          value: function serializeRoute(navigationEvent) {
            var state = navigationEvent.state.root;

            while (state.firstChild) {
              state = state.firstChild;
            }

            var _state = state,
                params = _state.params,
                data = _state.data,
                queryParams = _state.queryParams,
                fragment = _state.fragment;
            return {
              navigationId: navigationEvent.id,
              state: {
                url: navigationEvent.url,
                urlAfterRedirects: navigationEvent.urlAfterRedirects,
                params: params,
                queryParams: queryParams,
                fragment: fragment,
                data: data,
                navigationExtras: this.router.getCurrentNavigation().extras ? this.router.getCurrentNavigation().extras.state : {}
              }
            };
          }
        }]);

        return RouterService;
      }();

      RouterService.ɵfac = function RouterService_Factory(t) {
        return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_router_query__WEBPACK_IMPORTED_MODULE_4__["RouterQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      RouterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RouterService,
        factory: RouterService.ɵfac,
        providedIn: 'root'
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["action"])('Navigation Cancelled'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RouterService.prototype, "dispatchRouterCancel", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["action"])('Navigation Error'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RouterService.prototype, "dispatchRouterError", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["action"])('Navigation Succeeded'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RouterService.prototype, "dispatchRouterSuccess", null);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStore"]
          }, {
            type: _router_query__WEBPACK_IMPORTED_MODULE_4__["RouterQuery"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          dispatchRouterCancel: [],
          dispatchRouterError: [],
          dispatchRouterSuccess: []
        });
      })();
      /***/

    },

    /***/
    "Sr74":
    /*!*********************************************!*\
      !*** ./libs/akita/src/lib/isPlainObject.ts ***!
      \*********************************************/

    /*! exports provided: isPlainObject */

    /***/
    function Sr74(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPlainObject", function () {
        return isPlainObject;
      });
      /* harmony import */


      var _toBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toBoolean */
      "KA1R"); // @internal


      function isPlainObject(value) {
        return Object(_toBoolean__WEBPACK_IMPORTED_MODULE_0__["toBoolean"])(value) && value.constructor.name === 'Object';
      }
      /***/

    },

    /***/
    "TPbr":
    /*!****************************************!*\
      !*** ./libs/akita/src/lib/isNumber.ts ***!
      \****************************************/

    /*! exports provided: isNumber */

    /***/
    function TPbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return isNumber;
      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      "aDq+"); // @internal


      function isNumber(value) {
        return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && value - parseFloat(value) + 1 >= 0;
      }
      /***/

    },

    /***/
    "UiMj":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/transaction.ts ***!
      \*******************************************/

    /*! exports provided: transactionManager, startBatch, endBatch, isTransactionInProcess, commit, applyTransaction, transaction, withTransaction */

    /***/
    function UiMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transactionManager", function () {
        return transactionManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startBatch", function () {
        return startBatch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "endBatch", function () {
        return endBatch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTransactionInProcess", function () {
        return isTransactionInProcess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "commit", function () {
        return commit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyTransaction", function () {
        return applyTransaction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transaction", function () {
        return transaction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "withTransaction", function () {
        return withTransaction;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions */
      "Q8dH");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // @internal


      var transactionFinished = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // @internal

      var transactionInProcess = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false); // @internal

      var transactionManager = {
        activeTransactions: 0,
        batchTransaction: null
      }; // @internal

      function startBatch() {
        if (!isTransactionInProcess()) {
          transactionManager.batchTransaction = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        transactionManager.activeTransactions++;
        transactionInProcess.next(true);
      } // @internal


      function endBatch() {
        if (--transactionManager.activeTransactions === 0) {
          transactionManager.batchTransaction.next(true);
          transactionManager.batchTransaction.complete();
          transactionInProcess.next(false);
          transactionFinished.next(true);
        }
      } // @internal


      function isTransactionInProcess() {
        return transactionManager.activeTransactions > 0;
      } // @internal


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


      function applyTransaction(action) {
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        startBatch();

        try {
          return action.apply(thisArg);
        } finally {
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
          var originalMethod = descriptor.value;

          descriptor.value = function () {
            var _this47 = this;

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return applyTransaction(function () {
              return originalMethod.apply(_this47, args);
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
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
            return applyTransaction(function () {
              return next(value);
            });
          }));
        };
      }
      /***/

    },

    /***/
    "VCUg":
    /*!***********************************!*\
      !*** ./libs/akita/src/lib/env.ts ***!
      \***********************************/

    /*! exports provided: __DEV__, enableAkitaProdMode, isDev */

    /***/
    function VCUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__DEV__", function () {
        return __DEV__;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableAkitaProdMode", function () {
        return enableAkitaProdMode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDev", function () {
        return isDev;
      });
      /* harmony import */


      var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./root */
      "1Jmr");

      var __DEV__ = true;

      function enableAkitaProdMode() {
        __DEV__ = false;

        if (_root__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
          delete window.$$stores;
          delete window.$$queries;
        }
      } // @internal


      function isDev() {
        return __DEV__;
      }
      /***/

    },

    /***/
    "WKK6":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/arrayRemove.ts ***!
      \*******************************************/

    /*! exports provided: arrayRemove */

    /***/
    function WKK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayRemove", function () {
        return arrayRemove;
      });
      /* harmony import */


      var _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./defaultIDKey */
      "kBYr");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB");
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./isObject */
      "iJBq");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./not */
      "YVfT");
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


      function arrayRemove(arr, identifier) {
        var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"];
        var identifiers;
        var filterFn;

        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(identifier)) {
          filterFn = Object(_not__WEBPACK_IMPORTED_MODULE_4__["not"])(identifier);
        } else {
          identifiers = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(identifier);

          filterFn = function filterFn(current) {
            return identifiers.includes(Object(_isObject__WEBPACK_IMPORTED_MODULE_2__["isObject"])(current) ? current[idKey] : current) === false;
          };
        }

        if (Array.isArray(arr)) {
          return arr.filter(filterFn);
        }
      }
      /***/

    },

    /***/
    "WRE0":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/arrayUpdate.ts ***!
      \*******************************************/

    /*! exports provided: arrayUpdate */

    /***/
    function WRE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayUpdate", function () {
        return arrayUpdate;
      });
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB");
      /* harmony import */


      var _defaultIDKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./defaultIDKey */
      "kBYr");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./isObject */
      "iJBq");
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


      function arrayUpdate(arr, predicateOrIds, obj) {
        var idKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultIDKey__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ID_KEY"];
        var condition;

        if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(predicateOrIds)) {
          condition = predicateOrIds;
        } else {
          var ids = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(predicateOrIds);

          condition = function condition(item) {
            return ids.includes(Object(_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(item) ? item[idKey] : item) === true;
          };
        }

        var updateFn = function updateFn(state) {
          return state.map(function (entity, index) {
            if (condition(entity, index) === true) {
              return Object(_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(entity) ? Object.assign(Object.assign({}, entity), obj) : obj;
            }

            return entity;
          });
        };

        return updateFn(arr);
      }
      /***/

    },

    /***/
    "WYxI":
    /*!****************************************!*\
      !*** ./libs/akita/src/lib/devtools.ts ***!
      \****************************************/

    /*! exports provided: akitaDevtools */

    /***/
    function WYxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "akitaDevtools", function () {
        return akitaDevtools;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions */
      "Q8dH");
      /* harmony import */


      var _isDefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./isDefined */
      "Y5+g");
      /* harmony import */


      var _dispatchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dispatchers */
      "zqjR");
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./stores */
      "40zj");
      /* harmony import */


      var _capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./capitalize */
      "lrWU");
      /* harmony import */


      var _root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./root */
      "1Jmr");

      var subs = [];

      function akitaDevtools(ngZoneOrOptions) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (_root__WEBPACK_IMPORTED_MODULE_6__["isNotBrowser"]) return;

        if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
          return;
        }

        subs.length && subs.forEach(function (s) {
          if (s.unsubscribe) {
            s.unsubscribe();
          } else {
            s && s();
          }
        });
        var isAngular = ngZoneOrOptions && ngZoneOrOptions['run'];

        if (!isAngular) {
          ngZoneOrOptions = ngZoneOrOptions || {};

          ngZoneOrOptions.run = function (cb) {
            return cb();
          };

          options = ngZoneOrOptions;
        }

        var defaultOptions = {
          name: 'Akita',
          shallow: true,
          storesWhitelist: []
        };
        var merged = Object.assign({}, defaultOptions, options);
        var storesWhitelist = merged.storesWhitelist;

        var devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(merged);

        var appState = {};

        var isAllowed = function isAllowed(storeName) {
          if (!storesWhitelist.length) {
            return true;
          }

          return storesWhitelist.indexOf(storeName) > -1;
        };

        subs.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$addStore"].subscribe(function (storeName) {
          if (isAllowed(storeName) === false) return;
          appState = Object.assign(Object.assign({}, appState), _defineProperty({}, storeName, _stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName]._value()));
          devTools.send({
            type: "[".concat(Object(_capitalize__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(storeName), "] - @@INIT")
          }, appState);
        }));
        subs.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$deleteStore"].subscribe(function (storeName) {
          if (isAllowed(storeName) === false) return;
          delete appState[storeName];
          devTools.send({
            type: "[".concat(storeName, "] - Delete Store")
          }, appState);
        }));
        subs.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$updateStore"].subscribe(function (_ref16) {
          var storeName = _ref16.storeName,
              action = _ref16.action;
          if (isAllowed(storeName) === false) return;
          var type = action.type,
              entityIds = action.entityIds,
              skip = action.skip,
              rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(action, ["type", "entityIds", "skip"]);
          var payload = rest.payload;

          if (skip) {
            Object(_actions__WEBPACK_IMPORTED_MODULE_1__["setSkipAction"])(false);
            return;
          }

          var store = _stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName];

          if (!store) {
            return;
          }

          if (options.shallow === false && appState[storeName]) {
            var isEqual = JSON.stringify(store._value()) === JSON.stringify(appState[storeName]);
            if (isEqual) return;
          }

          appState = Object.assign(Object.assign({}, appState), _defineProperty({}, storeName, store._value()));
          var normalize = Object(_capitalize__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(storeName);
          var msg = Object(_isDefined__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(entityIds) ? "[".concat(normalize, "] - ").concat(type, " (ids: ").concat(entityIds, ")") : "[".concat(normalize, "] - ").concat(type);

          if (options.logTrace) {
            console.group(msg);
            console.trace();
            console.groupEnd();
          }

          if (options.sortAlphabetically) {
            var sortedAppState = Object.keys(appState).sort().reduce(function (acc, storeName) {
              acc[storeName] = appState[storeName];
              return acc;
            }, {});
            devTools.send(Object.assign({
              type: msg
            }, payload), sortedAppState);
            return;
          }

          devTools.send(Object.assign({
            type: msg
          }, payload), appState);
        }));
        subs.push(devTools.subscribe(function (message) {
          if (message.type === 'DISPATCH') {
            var payloadType = message.payload.type;

            if (payloadType === 'COMMIT') {
              devTools.init(appState);
              return;
            }

            if (message.state) {
              (function () {
                var rootState = JSON.parse(message.state);

                var _loop6 = function _loop6(i, keys) {
                  var storeName = keys[i];

                  if (_stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName]) {
                    ngZoneOrOptions.run(function () {
                      _stores__WEBPACK_IMPORTED_MODULE_4__["__stores__"][storeName]._setState(function () {
                        return rootState[storeName];
                      }, false);
                    });
                  }
                };

                for (var i = 0, keys = Object.keys(rootState); i < keys.length; i++) {
                  _loop6(i, keys);
                }
              })();
            }
          }
        }));
      }
      /***/

    },

    /***/
    "WjPt":
    /*!*********************************************!*\
      !*** ./libs/akita-ng-devtools/src/index.ts ***!
      \*********************************************/

    /*! exports provided: DEVTOOLS_OPTIONS, AkitaDevtools, d, init, AkitaNgDevtools */

    /***/
    function WjPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/ng-devtools.module */
      "5OdB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEVTOOLS_OPTIONS", function () {
        return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["DEVTOOLS_OPTIONS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AkitaDevtools", function () {
        return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["AkitaDevtools"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["d"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "init", function () {
        return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["init"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AkitaNgDevtools", function () {
        return _lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_0__["AkitaNgDevtools"];
      });
      /***/

    },

    /***/
    "Y5+g":
    /*!*****************************************!*\
      !*** ./libs/akita/src/lib/isDefined.ts ***!
      \*****************************************/

    /*! exports provided: isDefined */

    /***/
    function Y5G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDefined", function () {
        return isDefined;
      });
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isNil */
      "82/w"); // @internal


      function isDefined(val) {
        return Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(val) === false;
      }
      /***/

    },

    /***/
    "YBZY":
    /*!*********************************************!*\
      !*** ./libs/akita/src/lib/toEntitiesIds.ts ***!
      \*********************************************/

    /*! exports provided: toEntitiesIds */

    /***/
    function YBZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesIds", function () {
        return toEntitiesIds;
      });
      /* harmony import */


      var _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./defaultIDKey */
      "kBYr"); // @internal


      function toEntitiesIds(entities) {
        var idKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"];
        var ids = [];

        var _iterator9 = _createForOfIteratorHelper(entities),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var entity = _step9.value;
            ids.push(entity[idKey]);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return ids;
      }
      /***/

    },

    /***/
    "YCCL":
    /*!**************************************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/lib/ng-entity-service.loader.ts ***!
      \**************************************************************************/

    /*! exports provided: NgEntityServiceLoader */

    /***/
    function YCCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgEntityServiceLoader", function () {
        return NgEntityServiceLoader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ng-entity-service-notifier */
      "ZY5P");

      var NgEntityServiceLoader = /*#__PURE__*/function () {
        function NgEntityServiceLoader() {
          _classCallCheck(this, NgEntityServiceLoader);

          this.dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          this.loading$ = this.dispatcher.asObservable();
        }

        _createClass(NgEntityServiceLoader, [{
          key: "dispatch",
          value: function dispatch(event) {
            this.dispatcher.next(event);
          }
        }, {
          key: "loadersFor",
          value: function loadersFor(name) {
            var _this48 = this;

            var filterStore = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref17) {
              var storeName = _ref17.storeName;
              return name ? storeName === name : true;
            });

            var filterMethod = function filterMethod(mthd) {
              return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref18) {
                var method = _ref18.method;
                return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(mthd) ? mthd(method) : method === mthd;
              });
            };

            var actionBased = function actionBased(current) {
              return _this48.loading$.pipe(filterStore, filterMethod(current), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
                return action.loading;
              }));
            };

            var idBased = function idBased(id, mthd) {
              return _this48.loading$.pipe(filterStore, filterMethod(mthd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (action) {
                return action.entityId === id;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
                return action.loading;
              }));
            };

            return {
              get$: actionBased(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].GET),
              add$: actionBased(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].POST),
              update$: actionBased(function (method) {
                return method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PUT || method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PATCH;
              }),
              delete$: actionBased(_ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].DELETE),
              getEntity: function getEntity(id) {
                return idBased(id, _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].GET);
              },
              updateEntity: function updateEntity(id) {
                return idBased(id, function (method) {
                  return method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PUT || method === _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].PATCH;
                });
              },
              deleteEntity: function deleteEntity(id) {
                return idBased(id, _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_4__["HttpMethod"].DELETE);
              }
            };
          }
        }]);

        return NgEntityServiceLoader;
      }();

      NgEntityServiceLoader.ɵfac = function NgEntityServiceLoader_Factory(t) {
        return new (t || NgEntityServiceLoader)();
      };

      NgEntityServiceLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgEntityServiceLoader,
        factory: NgEntityServiceLoader.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgEntityServiceLoader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "YVfT":
    /*!***********************************!*\
      !*** ./libs/akita/src/lib/not.ts ***!
      \***********************************/

    /*! exports provided: not */

    /***/
    function YVfT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "not", function () {
        return not;
      }); // @internal


      function not(pred) {
        return function () {
          return !pred.apply(void 0, arguments);
        };
      }
      /***/

    },

    /***/
    "Z+wF":
    /*!*******************************************************************!*\
      !*** ./apps/angular-store-app/src/app/products/products.mocks.ts ***!
      \*******************************************************************/

    /*! exports provided: products */

    /***/
    function ZWF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "products", function () {
        return products;
      });

      var products = [{
        id: 3,
        title: 'Rx',
        description: 'Is a set of libraries to compose asynchronous and event-based programs using observable collections and Array style composition in JavaScript',
        price: 30
      }, {
        id: 1,
        title: 'JavaScript',
        description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.',
        price: 10
      }, {
        id: 2,
        title: 'Angular',
        description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
        price: 20
      }];
      /***/
    },

    /***/
    "ZY5P":
    /*!****************************************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/lib/ng-entity-service-notifier.ts ***!
      \****************************************************************************/

    /*! exports provided: HttpMethod, ofType, filterMethod, filterStore, NgEntityServiceNotifier */

    /***/
    function ZY5P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpMethod", function () {
        return HttpMethod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ofType", function () {
        return ofType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterMethod", function () {
        return filterMethod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterStore", function () {
        return filterStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgEntityServiceNotifier", function () {
        return NgEntityServiceNotifier;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var HttpMethod;

      (function (HttpMethod) {
        HttpMethod["GET"] = "GET";
        HttpMethod["POST"] = "POST";
        HttpMethod["PUT"] = "PUT";
        HttpMethod["PATCH"] = "PATCH";
        HttpMethod["DELETE"] = "DELETE";
      })(HttpMethod || (HttpMethod = {}));

      var ofType = function ofType(type) {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (action) {
          return action.type === type;
        });
      };

      var filterMethod = function filterMethod(method) {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (action) {
          return action.method === method;
        });
      };

      var filterStore = function filterStore(name) {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (action) {
          return action.storeName === name;
        });
      };

      var NgEntityServiceNotifier = /*#__PURE__*/function () {
        function NgEntityServiceNotifier() {
          _classCallCheck(this, NgEntityServiceNotifier);

          this.dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.action$ = this.dispatcher.asObservable();
        }

        _createClass(NgEntityServiceNotifier, [{
          key: "dispatch",
          value: function dispatch(event) {
            this.dispatcher.next(event);
          }
        }]);

        return NgEntityServiceNotifier;
      }();

      NgEntityServiceNotifier.ɵfac = function NgEntityServiceNotifier_Factory(t) {
        return new (t || NgEntityServiceNotifier)();
      };

      NgEntityServiceNotifier.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: NgEntityServiceNotifier,
        factory: NgEntityServiceNotifier.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgEntityServiceNotifier, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aDq+":
    /*!***************************************!*\
      !*** ./libs/akita/src/lib/isArray.ts ***!
      \***************************************/

    /*! exports provided: isArray */

    /***/
    function aDq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return isArray;
      }); // @internal


      function isArray(value) {
        return Array.isArray(value);
      }
      /***/

    },

    /***/
    "aH7v":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/compareKeys.ts ***!
      \*******************************************/

    /*! exports provided: compareKeys */

    /***/
    function aH7v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compareKeys", function () {
        return compareKeys;
      });
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");

      function compareKeys(keysOrFuncs) {
        return function (prevState, currState) {
          var isFns = Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(keysOrFuncs[0]); // Return when they are NOT changed

          return keysOrFuncs.some(function (keyOrFunc) {
            if (isFns) {
              return keyOrFunc(prevState) !== keyOrFunc(currState);
            }

            return prevState[keyOrFunc] !== currState[keyOrFunc];
          }) === false;
        };
      }
      /***/

    },

    /***/
    "al6x":
    /*!********************************************!*\
      !*** ./libs/akita-ng-effects/src/index.ts ***!
      \********************************************/

    /*! exports provided: Actions, AkitaNgEffectsModule, EffectsRootModule, Effect, createEffect, createAction, props, payload, ofType */

    /***/
    function al6x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/actions */
      "fZ2q");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Actions", function () {
        return _lib_actions__WEBPACK_IMPORTED_MODULE_0__["Actions"];
      });
      /* harmony import */


      var _lib_akita_ng_effects_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/akita-ng-effects.module */
      "8p+e");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AkitaNgEffectsModule", function () {
        return _lib_akita_ng_effects_module__WEBPACK_IMPORTED_MODULE_1__["AkitaNgEffectsModule"];
      });
      /* harmony import */


      var _lib_effect_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/effect-root.module */
      "phQS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EffectsRootModule", function () {
        return _lib_effect_root_module__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"];
      });
      /* harmony import */


      var _lib_effect_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/effect.decorator */
      "Pvbo");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Effect", function () {
        return _lib_effect_decorator__WEBPACK_IMPORTED_MODULE_3__["Effect"];
      });
      /* harmony import */


      var _lib_create_effect_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lib/create-effect.util */
      "AWF0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createEffect", function () {
        return _lib_create_effect_util__WEBPACK_IMPORTED_MODULE_4__["createEffect"];
      });
      /* harmony import */


      var ts_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ts-action */
      "/gWv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createAction", function () {
        return ts_action__WEBPACK_IMPORTED_MODULE_5__["action"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "props", function () {
        return ts_action__WEBPACK_IMPORTED_MODULE_5__["props"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "payload", function () {
        return ts_action__WEBPACK_IMPORTED_MODULE_5__["payload"];
      });
      /* harmony import */


      var ts_action_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ts-action-operators */
      "SdWQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ofType", function () {
        return ts_action_operators__WEBPACK_IMPORTED_MODULE_6__["ofType"];
      });
      /***/

    },

    /***/
    "aw1X":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/arrayUpsert.ts ***!
      \*******************************************/

    /*! exports provided: arrayUpsert */

    /***/
    function aw1X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayUpsert", function () {
        return arrayUpsert;
      });
      /* harmony import */


      var _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./defaultIDKey */
      "kBYr");
      /* harmony import */


      var _arrayAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./arrayAdd */
      "RPUs");
      /* harmony import */


      var _arrayUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./arrayUpdate */
      "WRE0");
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./isObject */
      "iJBq");
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


      function arrayUpsert(arr, id, obj) {
        var idKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultIDKey__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"];
        var entityIsObject = Object(_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(obj);
        var entityExists = arr.some(function (entity) {
          return entityIsObject ? entity[idKey] === id : entity === id;
        });

        if (entityExists) {
          return Object(_arrayUpdate__WEBPACK_IMPORTED_MODULE_2__["arrayUpdate"])(arr, id, obj, idKey);
        } else {
          return Object(_arrayAdd__WEBPACK_IMPORTED_MODULE_1__["arrayAdd"])(arr, entityIsObject ? Object.assign(Object.assign({}, obj), _defineProperty({}, idKey, id)) : obj);
        }
      }
      /***/

    },

    /***/
    "b89F":
    /*!**********************************************!*\
      !*** ./libs/akita/src/lib/trackIdChanges.ts ***!
      \**********************************************/

    /*! exports provided: trackIdChanges */

    /***/
    function b89F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackIdChanges", function () {
        return trackIdChanges;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
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
        return function (source) {
          return source.lift(new TrackIdChanges(query));
        };
      }

      var TrackIdChanges = /*#__PURE__*/function () {
        function TrackIdChanges(query) {
          _classCallCheck(this, TrackIdChanges);

          this.query = query;
        }

        _createClass(TrackIdChanges, [{
          key: "call",
          value: function call(subscriber, source) {
            var _this49 = this;

            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (entity) {
              var currId = entity[_this49.query.__store__.config.idKey];
              var pending = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
                newId: undefined,
                oldId: currId,
                pending: false
              }), _this49.query.__store__.selectEntityIdChanges$).pipe( // the new id must differ form the old id
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (change) {
                return change.oldId === currId;
              }), // extract the current pending state of the id update
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (change) {
                return pending = change.pending;
              }), // only update the selection query if the id update is already applied to the store
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (change) {
                return change.newId !== currId && !pending;
              }), // build a selection query for the new entity id
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (change) {
                return _this49.query.selectEntity(currId = change.newId || currId) // skip undefined value if pending.
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () {
                  return !pending;
                }));
              }));
            })).subscribe(subscriber);
          }
        }]);

        return TrackIdChanges;
      }();
      /***/

    },

    /***/
    "cBsy":
    /*!*********************************!*\
      !*** ./libs/akita/src/index.ts ***!
      \*********************************/

    /*! exports provided: action, currentAction, logAction, resetCustomAction, setAction, setSkipAction, getExitingActives, hasActiveState, isMultiActiveState, resolveActiveEntity, addEntities, arrayAdd, arrayFind, distinctUntilArrayItemChanged, find, arrayRemove, arrayToggle, byId, byKey, arrayUpdate, arrayUpsert, cacheable, coerceArray, combineQueries, akitaConfig, getAkitaConfig, DEFAULT_ID_KEY, akitaDevtools, $$deleteStore, $$addStore, $$updateStore, dispatchDeleted, dispatchAdded, dispatchUpdate, entitiesToArray, entitiesToMap, EntityActions, EntityService, EntityStore, EntityUIStore, enableAkitaProdMode, isDev, __DEV__, filterNil, filterNilValue, createEntityQuery, createEntityStore, createQuery, createStore, getActiveEntities, getInitialEntitiesState, getValue, guid, hasEntity, isArray, isDefined, isEmpty, isFunction, isNil, isNumber, isObject, isPlainObject, isString, isUndefined, persistState, selectPersistStateInit, dirtyCheckDefaultParams, DirtyCheckPlugin, getNestedPath, EntityDirtyCheckPlugin, EntityCollectionPlugin, Paginator, PaginatorPlugin, PersistNgFormPlugin, AkitaPlugin, EntityStateHistoryPlugin, StateHistoryPlugin, Query, QueryConfig, queryConfigKey, EntityUIQuery, QueryEntity, removeAllEntities, removeEntities, resetStores, isNotBrowser, EntityStoreAction, getEntityStore, getEntityStoreByName, getStore, getStoreByName, runEntityStoreAction, runStoreAction, StoreAction, isEntityState, setEntities, setLoading, setLoadingAndError, setValue, SnapshotManager, snapshotManager, compareValues, Order, sortByOptions, Store, configKey, StoreConfig, __stores__, toBoolean, toEntitiesIds, toEntitiesObject, trackIdChanges, applyTransaction, commit, endBatch, isTransactionInProcess, startBatch, transaction, transactionManager, withTransaction, updateEntities */

    /***/
    function cBsy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/index */
      "4F+6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "action", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["action"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "currentAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["currentAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "logAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["logAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "resetCustomAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["resetCustomAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setSkipAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setSkipAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getExitingActives", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getExitingActives"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "hasActiveState", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["hasActiveState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isMultiActiveState", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isMultiActiveState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "resolveActiveEntity", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["resolveActiveEntity"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "addEntities", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["addEntities"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayAdd", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayAdd"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayFind", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayFind"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "distinctUntilArrayItemChanged", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["distinctUntilArrayItemChanged"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "find", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["find"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayRemove", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayToggle", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayToggle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "byId", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["byId"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "byKey", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["byKey"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayUpdate", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayUpdate"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arrayUpsert", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["arrayUpsert"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cacheable", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["cacheable"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["coerceArray"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "combineQueries", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["combineQueries"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "akitaConfig", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["akitaConfig"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getAkitaConfig", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getAkitaConfig"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_ID_KEY", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ID_KEY"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "akitaDevtools", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["akitaDevtools"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "$$deleteStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["$$deleteStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "$$addStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["$$addStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "$$updateStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["$$updateStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dispatchDeleted", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dispatchDeleted"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dispatchAdded", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dispatchAdded"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dispatchUpdate", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dispatchUpdate"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "entitiesToArray", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["entitiesToArray"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "entitiesToMap", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["entitiesToMap"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityActions", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityActions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityService", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityUIStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityUIStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "enableAkitaProdMode", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["enableAkitaProdMode"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isDev", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isDev"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "__DEV__", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["__DEV__"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "filterNil", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["filterNil"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "filterNilValue", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["filterNilValue"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createEntityQuery", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createEntityQuery"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createEntityStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createEntityStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createQuery", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createQuery"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getActiveEntities", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getActiveEntities"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getInitialEntitiesState", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getInitialEntitiesState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getValue", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getValue"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "guid", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["guid"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "hasEntity", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["hasEntity"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isArray"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isDefined", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isDefined"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isEmpty"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isFunction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isFunction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isNil", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isNil"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isNumber"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isObject", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isObject"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isPlainObject", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isString", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isString"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isUndefined", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isUndefined"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "persistState", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["persistState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "selectPersistStateInit", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["selectPersistStateInit"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dirtyCheckDefaultParams", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dirtyCheckDefaultParams"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DirtyCheckPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["DirtyCheckPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getNestedPath", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getNestedPath"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityDirtyCheckPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityDirtyCheckPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityCollectionPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Paginator", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Paginator"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaginatorPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["PaginatorPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PersistNgFormPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["PersistNgFormPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AkitaPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["AkitaPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityStateHistoryPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityStateHistoryPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StateHistoryPlugin", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["StateHistoryPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Query", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Query"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QueryConfig", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["QueryConfig"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "queryConfigKey", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["queryConfigKey"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityUIQuery", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityUIQuery"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QueryEntity", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "removeAllEntities", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["removeAllEntities"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "removeEntities", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["removeEntities"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "resetStores", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["resetStores"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isNotBrowser", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isNotBrowser"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EntityStoreAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["EntityStoreAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getEntityStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getEntityStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getEntityStoreByName", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getEntityStoreByName"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getStore", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getStore"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getStoreByName", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["getStoreByName"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "runEntityStoreAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["runEntityStoreAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "runStoreAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["runStoreAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoreAction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["StoreAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isEntityState", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isEntityState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setEntities", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setEntities"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setLoading", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setLoading"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setLoadingAndError", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setLoadingAndError"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setValue", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setValue"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SnapshotManager", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["SnapshotManager"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "snapshotManager", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["snapshotManager"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "compareValues", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["compareValues"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Order"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortByOptions", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["sortByOptions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Store", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["Store"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "configKey", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["configKey"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoreConfig", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["StoreConfig"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "__stores__", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["__stores__"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toBoolean", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toBoolean"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesIds", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toEntitiesIds"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toEntitiesObject", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toEntitiesObject"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "trackIdChanges", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["trackIdChanges"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "applyTransaction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["applyTransaction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "commit", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["commit"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "endBatch", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["endBatch"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isTransactionInProcess", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["isTransactionInProcess"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "startBatch", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["startBatch"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "transaction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["transaction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "transactionManager", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["transactionManager"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "withTransaction", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["withTransaction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "updateEntities", function () {
        return _lib_index__WEBPACK_IMPORTED_MODULE_0__["updateEntities"];
      });
      /***/

    },

    /***/
    "dNb/":
    /*!*****************************************!*\
      !*** ./libs/akita/src/lib/hasEntity.ts ***!
      \*****************************************/

    /*! exports provided: hasEntity */

    /***/
    function dNb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasEntity", function () {
        return hasEntity;
      }); // @internal


      function hasEntity(entities, id) {
        return entities.hasOwnProperty(id);
      }
      /***/

    },

    /***/
    "doWv":
    /*!************************************************!*\
      !*** ./libs/akita/src/lib/getValueByString.ts ***!
      \************************************************/

    /*! exports provided: getValue */

    /***/
    function doWv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getValue", function () {
        return getValue;
      });
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

        var removeStoreName = prop.split('.').slice(1).join('.');
        return removeStoreName.split('.').reduce(function (acc, part) {
          return acc && acc[part];
        }, obj);
      }
      /***/

    },

    /***/
    "dpu8":
    /*!*******************************************************************!*\
      !*** ./apps/angular-store-app/src/app/auth/state/auth.service.ts ***!
      \*******************************************************************/

    /*! exports provided: AuthService, simulateRequest */

    /***/
    function dpu8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simulateRequest", function () {
        return simulateRequest;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.store */
      "OD9W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(authStore) {
          _classCallCheck(this, AuthService);

          this.authStore = authStore;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(creds) {
            var _this50 = this;

            return simulateRequest(creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) {
              return _this50.authStore.update(user);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authStore.reset();
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_store__WEBPACK_IMPORTED_MODULE_1__["AuthStore"]
          }];
        }, null);
      })();

      function simulateRequest(creds) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(400).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])({
          id: 1,
          firstName: 'Netanel',
          lastName: 'Basal',
          token: 'token'
        }));
      }
      /***/

    },

    /***/
    "fLeU":
    /*!*****************************************************************************!*\
      !*** ./apps/angular-store-app/$$_lazy_route_resource lazy namespace object ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function fLeU(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "fLeU";
      /***/
    },

    /***/
    "fRdR":
    /*!****************************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/lib/action-factory.ts ***!
      \****************************************************************/

    /*! exports provided: successAction, errorAction */

    /***/
    function fRdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "successAction", function () {
        return successAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorAction", function () {
        return errorAction;
      });

      function successAction(storeName, notifier) {
        return function (_ref19) {
          var payload = _ref19.payload,
              method = _ref19.method,
              successMsg = _ref19.successMsg;
          notifier.dispatch({
            type: 'success',
            storeName: storeName,
            payload: payload,
            method: method,
            successMsg: successMsg
          });
        };
      }

      function errorAction(storeName, notifier) {
        return function (_ref20) {
          var payload = _ref20.payload,
              method = _ref20.method,
              errorMsg = _ref20.errorMsg;
          notifier.dispatch({
            type: 'error',
            storeName: storeName,
            payload: payload,
            method: method,
            errorMsg: errorMsg
          });
        };
      }
      /***/

    },

    /***/
    "fVEQ":
    /*!*************************************************!*\
      !*** ./libs/akita/src/lib/getActiveEntities.ts ***!
      \*************************************************/

    /*! exports provided: getActiveEntities */

    /***/
    function fVEQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getActiveEntities", function () {
        return getActiveEntities;
      });
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isObject */
      "iJBq");
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./isArray */
      "aDq+"); // @internal


      function getActiveEntities(idOrOptions, ids, currentActive) {
        var result;

        if (Object(_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(idOrOptions)) {
          result = idOrOptions;
        } else {
          if (Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(idOrOptions)) {
            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_0__["isNil"])(currentActive)) return;
            idOrOptions = Object.assign({
              wrap: true
            }, idOrOptions);
            var currentIdIndex = ids.indexOf(currentActive);

            if (idOrOptions.prev) {
              var isFirst = currentIdIndex === 0;
              if (isFirst && !idOrOptions.wrap) return;
              result = isFirst ? ids[ids.length - 1] : ids[currentIdIndex - 1];
            } else if (idOrOptions.next) {
              var isLast = ids.length === currentIdIndex + 1;
              if (isLast && !idOrOptions.wrap) return;
              result = isLast ? ids[0] : ids[currentIdIndex + 1];
            }
          } else {
            if (idOrOptions === currentActive) return;
            result = idOrOptions;
          }
        }

        return result;
      }
      /***/

    },

    /***/
    "fWdh":
    /*!************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/cart.module.ts ***!
      \************************************************************/

    /*! exports provided: CartModule */

    /***/
    function fWdh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModule", function () {
        return CartModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart.component */
      "2EyP");

      var publicApi = [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]];

      var CartModule = function CartModule() {
        _classCallCheck(this, CartModule);
      };

      CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CartModule
      });
      CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CartModule_Factory(t) {
          return new (t || CartModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartModule, {
          declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [publicApi],
            exports: [publicApi]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fZ2q":
    /*!**************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/actions.ts ***!
      \**************************************************/

    /*! exports provided: Actions */

    /***/
    function fZ2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Actions", function () {
        return Actions;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      var Actions = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
        _inherits(Actions, _rxjs__WEBPACK_IMPORT);

        var _super16 = _createSuper(Actions);

        function Actions() {
          _classCallCheck(this, Actions);

          return _super16.apply(this, arguments);
        }

        _createClass(Actions, [{
          key: "dispatch",
          value: function dispatch(value) {
            this.logAction(value);
            this.next(value);
          }
        }, {
          key: "logAction",
          value: function logAction(value) {
            var type = value.type,
                props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(value, ["type"]);
            var hasPayload = Object.getOwnPropertyNames(props).length > 0;
            Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["logAction"])(type, null, hasPayload ? props : null);
          }
        }]);

        return Actions;
      }(rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]);

      Actions.ɵfac = function Actions_Factory(t) {
        return ɵActions_BaseFactory(t || Actions);
      };

      Actions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Actions,
        factory: Actions.ɵfac,
        providedIn: 'root'
      });

      var ɵActions_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Actions);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Actions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "gF6S":
    /*!********************************************!*\
      !*** ./libs/akita/src/lib/persistState.ts ***!
      \********************************************/

    /*! exports provided: selectPersistStateInit, setSkipStorageUpdate, getSkipStorageUpdate, persistState */

    /***/
    function gF6S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectPersistStateInit", function () {
        return selectPersistStateInit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setSkipStorageUpdate", function () {
        return setSkipStorageUpdate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSkipStorageUpdate", function () {
        return getSkipStorageUpdate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "persistState", function () {
        return persistState;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actions */
      "Q8dH");
      /* harmony import */


      var _dispatchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dispatchers */
      "zqjR");
      /* harmony import */


      var _getValueByString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./getValueByString */
      "doWv");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony import */


      var _isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./isObject */
      "iJBq");
      /* harmony import */


      var _root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./root */
      "1Jmr");
      /* harmony import */


      var _setValueByString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./setValueByString */
      "QRUx");
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./stores */
      "40zj");

      var skipStorageUpdate = false;

      var _persistStateInit = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);

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
        var defaults = {
          key: 'AkitaStores',
          enableInNonBrowser: false,
          storage: !Object(_root__WEBPACK_IMPORTED_MODULE_8__["hasLocalStorage"])() ? params.storage : localStorage,
          deserialize: JSON.parse,
          serialize: JSON.stringify,
          include: [],
          select: [],
          persistOnDestroy: false,
          preStorageUpdate: function preStorageUpdate(storeName, state) {
            return state;
          },
          preStoreUpdate: function preStoreUpdate(storeName, state) {
            return state;
          },
          skipStorageUpdate: getSkipStorageUpdate,
          preStorageUpdateOperator: function preStorageUpdateOperator() {
            return function (source) {
              return source;
            };
          }
        };

        var _Object$assign4 = Object.assign({}, defaults, params),
            storage = _Object$assign4.storage,
            enableInNonBrowser = _Object$assign4.enableInNonBrowser,
            deserialize = _Object$assign4.deserialize,
            serialize = _Object$assign4.serialize,
            include = _Object$assign4.include,
            select = _Object$assign4.select,
            key = _Object$assign4.key,
            preStorageUpdate = _Object$assign4.preStorageUpdate,
            persistOnDestroy = _Object$assign4.persistOnDestroy,
            preStorageUpdateOperator = _Object$assign4.preStorageUpdateOperator,
            preStoreUpdate = _Object$assign4.preStoreUpdate,
            skipStorageUpdate = _Object$assign4.skipStorageUpdate;

        if (_root__WEBPACK_IMPORTED_MODULE_8__["isNotBrowser"] && !enableInNonBrowser || !storage) return;
        var hasInclude = include.length > 0;
        var hasSelect = select.length > 0;
        var includeStores;
        var selectStores;

        if (hasInclude) {
          includeStores = include.reduce(function (acc, path) {
            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(path)) {
              acc.fns.push(path);
            } else {
              var storeName = path.split('.')[0];
              acc[storeName] = path;
            }

            return acc;
          }, {
            fns: []
          });
        }

        if (hasSelect) {
          selectStores = select.reduce(function (acc, selectFn) {
            acc[selectFn.storeName] = selectFn;
            return acc;
          }, {});
        }

        var stores = {};
        var acc = {};
        var subscriptions = [];
        var buffer = [];

        function _save(v) {
          observify(v).subscribe(function () {
            var next = buffer.shift();
            next && _save(next);
          });
        } // when we use the local/session storage we perform the serialize, otherwise we let the passed storage implementation to do it


        var isLocalStorage = Object(_root__WEBPACK_IMPORTED_MODULE_8__["hasLocalStorage"])() && storage === localStorage || Object(_root__WEBPACK_IMPORTED_MODULE_8__["hasSessionStorage"])() && storage === sessionStorage;
        observify(storage.getItem(key)).subscribe(function (value) {
          var storageState = Object(_isObject__WEBPACK_IMPORTED_MODULE_7__["isObject"])(value) ? value : deserialize(value || '{}');

          function save(storeCache) {
            storageState['$cache'] = Object.assign(Object.assign({}, storageState['$cache'] || {}), storeCache);
            storageState = Object.assign({}, storageState, acc);
            buffer.push(storage.setItem(key, isLocalStorage ? serialize(storageState) : storageState));

            _save(buffer.shift());
          }

          function subscribe(storeName, path) {
            stores[storeName] = _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName]._select(function (state) {
              return Object(_getValueByString__WEBPACK_IMPORTED_MODULE_4__["getValue"])(state, path);
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (store) {
              if (hasSelect && selectStores[storeName]) {
                return selectStores[storeName](store);
              }

              return store;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () {
              return skipStorageUpdate() === false;
            }), preStorageUpdateOperator()).subscribe(function (data) {
              acc[storeName] = preStorageUpdate(storeName, data);
              Promise.resolve().then(function () {
                return save(_defineProperty({}, storeName, _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName]._cache().getValue()));
              });
            });
          }

          function setInitial(storeName, store, path) {
            if (storeName in storageState) {
              Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('@PersistState');

              store._setState(function (state) {
                return Object(_setValueByString__WEBPACK_IMPORTED_MODULE_9__["setValue"])(state, path, preStoreUpdate(storeName, storageState[storeName], state));
              });

              var hasCache = storageState['$cache'] ? storageState['$cache'][storeName] : false;

              _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName].setHasCache(hasCache, {
                restartTTL: true
              });
            }
          }

          subscriptions.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$deleteStore"].subscribe(function (storeName) {
            if (stores[storeName]) {
              if (persistOnDestroy === false) {
                save(_defineProperty({}, storeName, false));
              }

              stores[storeName].unsubscribe();
              delete stores[storeName];
            }
          }));
          subscriptions.push(_dispatchers__WEBPACK_IMPORTED_MODULE_3__["$$addStore"].subscribe(function (storeName) {
            if (storeName === 'router') {
              return;
            }

            var store = _stores__WEBPACK_IMPORTED_MODULE_10__["__stores__"][storeName];

            if (hasInclude) {
              var path = includeStores[storeName];

              if (!path) {
                var passPredicate = includeStores.fns.some(function (fn) {
                  return fn(storeName);
                });

                if (passPredicate) {
                  path = storeName;
                } else {
                  return;
                }
              }

              setInitial(storeName, store, path);
              subscribe(storeName, path);
            } else {
              setInitial(storeName, store, storeName);
              subscribe(storeName, storeName);
            }
          }));

          _persistStateInit.next();
        });
        return {
          destroy: function destroy() {
            subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });

            for (var i = 0, keys = Object.keys(stores); i < keys.length; i++) {
              var storeName = keys[i];
              stores[storeName].unsubscribe();
            }

            stores = {};
          },
          clear: function clear() {
            storage.clear();
          },
          clearStore: function clearStore(storeName) {
            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_6__["isNil"])(storeName)) {
              var _value2 = observify(storage.setItem(key, '{}'));

              _value2.subscribe();

              return;
            }

            var value = storage.getItem(key);
            observify(value).subscribe(function (v) {
              var storageState = deserialize(v || '{}');

              if (storageState[storeName]) {
                delete storageState[storeName];

                var _value3 = observify(storage.setItem(key, serialize(storageState)));

                _value3.subscribe();
              }
            });
          }
        };
      }
      /***/

    },

    /***/
    "gUUV":
    /*!**************************************************************!*\
      !*** ./libs/akita/src/lib/plugins/entityCollectionPlugin.ts ***!
      \**************************************************************/

    /*! exports provided: EntityCollectionPlugin */

    /***/
    function gUUV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityCollectionPlugin", function () {
        return EntityCollectionPlugin;
      });
      /* harmony import */


      var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../isUndefined */
      "9NJV");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../coerceArray */
      "6ukB");
      /* harmony import */


      var _toBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../toBoolean */
      "KA1R");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../isFunction */
      "u21x");
      /**
       * Each plugin that wants to add support for entities should extend this interface.
       */


      var EntityCollectionPlugin = /*#__PURE__*/function () {
        function EntityCollectionPlugin(query, entityIds) {
          _classCallCheck(this, EntityCollectionPlugin);

          this.query = query;
          this.entityIds = entityIds;
          this.entities = new Map();
        }
        /**
         * Get the entity plugin instance.
         */


        _createClass(EntityCollectionPlugin, [{
          key: "getEntity",
          value: function getEntity(id) {
            return this.entities.get(id);
          }
          /**
           * Whether the entity plugin exist.
           */

        }, {
          key: "hasEntity",
          value: function hasEntity(id) {
            return this.entities.has(id);
          }
          /**
           * Remove the entity plugin instance.
           */

        }, {
          key: "removeEntity",
          value: function removeEntity(id) {
            this.destroy(id);
            return this.entities["delete"](id);
          }
          /**
           * Set the entity plugin instance.
           */

        }, {
          key: "createEntity",
          value: function createEntity(id, plugin) {
            return this.entities.set(id, plugin);
          }
          /**
           * If the user passes `entityIds` we take them; otherwise, we take all.
           */

        }, {
          key: "getIds",
          value: function getIds() {
            return Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(this.entityIds) ? this.query.getValue().ids : Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(this.entityIds);
          }
          /**
           * When you call one of the plugin methods, you can pass id/ids or undefined which means all.
           */

        }, {
          key: "resolvedIds",
          value: function resolvedIds(ids) {
            return Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(ids) ? this.getIds() : Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(ids);
          }
          /**
           * Call this method when you want to activate the plugin on init or when you need to listen to add/remove of entities dynamically.
           *
           * For example in your plugin you may do the following:
           *
           * this.query.select(state => state.ids).pipe(skip(1)).subscribe(ids => this.activate(ids));
           */

        }, {
          key: "rebase",
          value: function rebase(ids) {
            var _this51 = this;

            var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
                for (var i = 0, len = ids.length; i < len; i++) {
                  var entityId = ids[i];

                  if (this.hasEntity(entityId) === false) {
                    Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeAdd) && actions.beforeAdd(entityId);
                    var plugin = this.instantiatePlugin(entityId);
                    this.entities.set(entityId, plugin);
                    Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.afterAdd) && actions.afterAdd(plugin);
                  }
                }

                this.entities.forEach(function (plugin, entityId) {
                  if (ids.indexOf(entityId) === -1) {
                    Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeRemove) && actions.beforeRemove(plugin);

                    _this51.removeEntity(entityId);
                  }
                });
              } else {
                /**
                 * Which means the user passes specific ids
                 */
                var _ids = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(this.entityIds);

                for (var _i2 = 0, _len4 = _ids.length; _i2 < _len4; _i2++) {
                  var _entityId2 = _ids[_i2];
                  /** The Entity in current ids and doesn't exist, add it. */

                  if (ids.indexOf(_entityId2) > -1 && this.hasEntity(_entityId2) === false) {
                    Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeAdd) && actions.beforeAdd(_entityId2);

                    var _plugin = this.instantiatePlugin(_entityId2);

                    this.entities.set(_entityId2, _plugin);
                    Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.afterAdd) && actions.afterAdd(_plugin);
                  } else {
                    this.entities.forEach(function (plugin, entityId) {
                      /** The Entity not in current ids and exists, remove it. */
                      if (ids.indexOf(entityId) === -1 && _this51.hasEntity(entityId) === true) {
                        Object(_isFunction__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(actions.beforeRemove) && actions.beforeRemove(plugin);

                        _this51.removeEntity(entityId);
                      }
                    });
                  }
                }
              }
            } else {
              /**
               * Otherwise, start with the provided ids or all.
               */
              this.getIds().forEach(function (id) {
                if (!_this51.hasEntity(id)) _this51.createEntity(id, _this51.instantiatePlugin(id));
              });
            }
          }
          /**
           * Listen for add/remove entities.
           */

        }, {
          key: "selectIds",
          value: function selectIds() {
            return this.query.select(function (state) {
              return state.ids;
            });
          }
          /**
           * Base method for activation, you can override it if you need to.
           */

        }, {
          key: "activate",
          value: function activate(ids) {
            this.rebase(ids);
          }
          /**
           * Loop over each id and invoke the plugin method.
           */

        }, {
          key: "forEachId",
          value: function forEachId(ids, cb) {
            var _ids = this.resolvedIds(ids);

            for (var i = 0, len = _ids.length; i < len; i++) {
              var id = _ids[i];

              if (this.hasEntity(id)) {
                cb(this.getEntity(id));
              }
            }
          }
        }]);

        return EntityCollectionPlugin;
      }();
      /***/

    },

    /***/
    "gqnR":
    /*!***********************************************************************!*\
      !*** ./libs/akita/src/lib/plugins/stateHistory/stateHistoryPlugin.ts ***!
      \***********************************************************************/

    /*! exports provided: StateHistoryPlugin */

    /***/
    function gqnR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateHistoryPlugin", function () {
        return StateHistoryPlugin;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../plugin */
      "J5PQ");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../actions */
      "Q8dH");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../isFunction */
      "u21x");

      var StateHistoryPlugin = /*#__PURE__*/function (_plugin__WEBPACK_IMPO4) {
        _inherits(StateHistoryPlugin, _plugin__WEBPACK_IMPO4);

        var _super17 = _createSuper(StateHistoryPlugin);

        function StateHistoryPlugin(query) {
          var _this52;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var _entityId = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, StateHistoryPlugin);

          _this52 = _super17.call(this, query, {
            resetFn: function resetFn() {
              return _this52.clear();
            }
          });
          _this52.query = query;
          _this52.params = params;
          _this52._entityId = _entityId;
          /** Allow skipping an update from outside */

          _this52.skip = false;
          _this52.history = {
            past: [],
            present: null,
            future: []
          };
          /** Skip the update when redo/undo */

          _this52.skipUpdate = false;
          params.maxAge = !!params.maxAge ? params.maxAge : 10;

          params.comparator = params.comparator || function () {
            return true;
          };

          _this52.activate();

          return _this52;
        }
        /**
         * Observable stream representing whether the history plugin has an available past
         *
         */


        _createClass(StateHistoryPlugin, [{
          key: "updateHasHistory",

          /* Updates the hasPast$ hasFuture$ observables*/
          value: function updateHasHistory() {
            this.hasFutureSubject.next(this.hasFuture);
            this.hasPastSubject.next(this.hasPast);
          }
        }, {
          key: "activate",
          value: function activate() {
            var _this53 = this;

            this.hasPastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this._hasPast$ = this.hasPastSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
            this.hasFutureSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this._hasFuture$ = this.hasFutureSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
            this.history.present = this.getSource(this._entityId, this.property);
            this.subscription = this.selectSource(this._entityId, this.property).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pairwise"])()).subscribe(function (_ref21) {
              var _ref22 = _slicedToArray(_ref21, 2),
                  past = _ref22[0],
                  present = _ref22[1];

              if (_this53.skip) {
                _this53.skip = false;
                return;
              }
              /**
               *  comparator: (prev, current) => isEqual(prev, current) === false
               */


              var shouldUpdate = _this53.params.comparator(past, present);

              if (!_this53.skipUpdate && shouldUpdate) {
                if (_this53.history.past.length === _this53.params.maxAge) {
                  _this53.history.past = _this53.history.past.slice(1);
                }

                _this53.history.past = [].concat(_toConsumableArray(_this53.history.past), [past]);
                _this53.history.present = present;

                _this53.updateHasHistory();
              }
            });
          }
        }, {
          key: "undo",
          value: function undo() {
            if (this.history.past.length > 0) {
              var _this$history = this.history,
                  past = _this$history.past,
                  present = _this$history.present;
              var previous = past[past.length - 1];
              this.history.past = past.slice(0, past.length - 1);
              this.history.present = previous;
              this.history.future = [present].concat(_toConsumableArray(this.history.future));
              this.update();
            }
          }
        }, {
          key: "redo",
          value: function redo() {
            if (this.history.future.length > 0) {
              var _this$history2 = this.history,
                  past = _this$history2.past,
                  present = _this$history2.present;
              var next = this.history.future[0];
              var newFuture = this.history.future.slice(1);
              this.history.past = [].concat(_toConsumableArray(past), [present]);
              this.history.present = next;
              this.history.future = newFuture;
              this.update('Redo');
            }
          }
        }, {
          key: "jumpToPast",
          value: function jumpToPast(index) {
            if (index < 0 || index >= this.history.past.length) return;
            var _this$history3 = this.history,
                past = _this$history3.past,
                future = _this$history3.future,
                present = _this$history3.present;
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

            var newPast = past.slice(0, index);
            var newFuture = [].concat(_toConsumableArray(past.slice(index + 1)), [present], _toConsumableArray(future));
            var newPresent = past[index];
            this.history.past = newPast;
            this.history.present = newPresent;
            this.history.future = newFuture;
            this.update();
          }
        }, {
          key: "jumpToFuture",
          value: function jumpToFuture(index) {
            if (index < 0 || index >= this.history.future.length) return;
            var _this$history4 = this.history,
                past = _this$history4.past,
                future = _this$history4.future,
                present = _this$history4.present;
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

            var newPast = [].concat(_toConsumableArray(past), [present], _toConsumableArray(future.slice(0, index)));
            var newPresent = future[index];
            var newFuture = future.slice(index + 1);
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

        }, {
          key: "jump",
          value: function jump(n) {
            if (n > 0) return this.jumpToFuture(n - 1);
            if (n < 0) return this.jumpToPast(this.history.past.length + n);
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

        }, {
          key: "clear",
          value: function clear(customUpdateFn) {
            this.history = Object(_isFunction__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(customUpdateFn) ? customUpdateFn(this.history) : {
              past: [],
              present: null,
              future: []
            };
            this.updateHasHistory();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var clearHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (clearHistory) {
              this.clear();
            }

            this.subscription.unsubscribe();
          }
        }, {
          key: "ignoreNext",
          value: function ignoreNext() {
            this.skip = true;
          }
        }, {
          key: "update",
          value: function update() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Undo';
            this.skipUpdate = true;
            Object(_actions__WEBPACK_IMPORTED_MODULE_3__["logAction"])("@StateHistory - ".concat(action));
            this.updateStore(this.history.present, this._entityId, this.property, true);
            this.updateHasHistory();
            this.skipUpdate = false;
          }
        }, {
          key: "hasPast$",
          get: function get() {
            return this._hasPast$;
          }
          /**
           * Observable stream representing whether the history plugin has an available future
           *
           */

        }, {
          key: "hasFuture$",
          get: function get() {
            return this._hasFuture$;
          }
        }, {
          key: "hasPast",
          get: function get() {
            return this.history.past.length > 0;
          }
        }, {
          key: "hasFuture",
          get: function get() {
            return this.history.future.length > 0;
          }
        }, {
          key: "property",
          get: function get() {
            return this.params.watchProperty;
          }
        }]);

        return StateHistoryPlugin;
      }(_plugin__WEBPACK_IMPORTED_MODULE_2__["AkitaPlugin"]);
      /***/

    },

    /***/
    "gtU3":
    /*!*****************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/state/cart.store.ts ***!
      \*****************************************************************/

    /*! exports provided: CartStore */

    /***/
    function gtU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartStore", function () {
        return CartStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");

      var CartStore = /*#__PURE__*/function (_datorama_akita__WEBP8) {
        _inherits(CartStore, _datorama_akita__WEBP8);

        var _super18 = _createSuper(CartStore);

        function CartStore() {
          _classCallCheck(this, CartStore);

          return _super18.call(this);
        }

        _createClass(CartStore, [{
          key: "updateQuantity",
          value: function updateQuantity(productId) {
            var operand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            this.update(productId, function (entity) {
              var newQuantity = entity.quantity + operand;
              return Object.assign(Object.assign({}, entity), {
                quantity: newQuantity
              });
            });
          }
        }, {
          key: "notify",
          value: function notify(_notify) {
            this.update(function (state) {
              return Object.assign(Object.assign({}, state), {
                notify: _notify
              });
            });
          }
        }]);

        return CartStore;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]);

      CartStore.ɵfac = function CartStore_Factory(t) {
        return new (t || CartStore)();
      };

      CartStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CartStore,
        factory: CartStore.ɵfac,
        providedIn: 'root'
      });
      CartStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'cart',
        idKey: 'productId'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CartStore);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartStore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gySQ":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/storeConfig.ts ***!
      \*******************************************/

    /*! exports provided: configKey, StoreConfig */

    /***/
    function gySQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configKey", function () {
        return configKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreConfig", function () {
        return StoreConfig;
      });

      var configKey = 'akitaConfig';

      function StoreConfig(metadata) {
        return function (constructor) {
          constructor[configKey] = {
            idKey: 'id'
          };

          for (var i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            var key = keys[i];
            /* name is preserved read only key */

            if (key === 'name') {
              constructor[configKey]['storeName'] = metadata[key];
            } else {
              constructor[configKey][key] = metadata[key];
            }
          }
        };
      }
      /***/

    },

    /***/
    "iJBq":
    /*!****************************************!*\
      !*** ./libs/akita/src/lib/isObject.ts ***!
      \****************************************/

    /*! exports provided: isObject */

    /***/
    function iJBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isObject", function () {
        return isObject;
      }); // @internal


      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }
      /***/

    },

    /***/
    "iXoB":
    /*!*********************************************!*\
      !*** ./libs/akita/src/lib/entityService.ts ***!
      \*********************************************/

    /*! exports provided: EntityService */

    /***/
    function iXoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityService", function () {
        return EntityService;
      });

      var EntityService = function EntityService() {
        _classCallCheck(this, EntityService);
      };
      /***/

    },

    /***/
    "kBYr":
    /*!********************************************!*\
      !*** ./libs/akita/src/lib/defaultIDKey.ts ***!
      \********************************************/

    /*! exports provided: DEFAULT_ID_KEY */

    /***/
    function kBYr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_ID_KEY", function () {
        return DEFAULT_ID_KEY;
      });

      var DEFAULT_ID_KEY = 'id';
      /***/
    },

    /***/
    "klkp":
    /*!*****************************************!*\
      !*** ./libs/akita/src/lib/filterNil.ts ***!
      \*****************************************/

    /*! exports provided: filterNil, filterNilValue */

    /***/
    function klkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNil", function () {
        return filterNil;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNilValue", function () {
        return filterNilValue;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @example
       *
       * query.selectEntity(2).pipe(filterNil)
       * @deprecated Use the operator function filterNilValue()
       */


      var filterNil = function filterNil(source) {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (value) {
          return value !== null && typeof value !== 'undefined';
        }));
      };
      /**
       * @example
       *
       * query.selectEntity(2).pipe(filterNilValue())
       */


      function filterNilValue() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (value) {
          return value !== null && value !== undefined;
        });
      }
      /***/

    },

    /***/
    "lrWU":
    /*!******************************************!*\
      !*** ./libs/akita/src/lib/capitalize.ts ***!
      \******************************************/

    /*! exports provided: capitalize */

    /***/
    function lrWU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "capitalize", function () {
        return capitalize;
      }); // @internal


      function capitalize(value) {
        return value && value.charAt(0).toUpperCase() + value.slice(1);
      }
      /***/

    },

    /***/
    "mKZq":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/queryConfig.ts ***!
      \*******************************************/

    /*! exports provided: queryConfigKey, QueryConfig */

    /***/
    function mKZq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queryConfigKey", function () {
        return queryConfigKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryConfig", function () {
        return QueryConfig;
      });

      var queryConfigKey = 'akitaQueryConfig';

      function QueryConfig(metadata) {
        return function (constructor) {
          constructor[queryConfigKey] = {};

          for (var i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
            var key = keys[i];
            constructor[queryConfigKey][key] = metadata[key];
          }
        };
      }
      /***/

    },

    /***/
    "mVyF":
    /*!******************************************!*\
      !*** ./libs/akita/src/lib/setLoading.ts ***!
      \******************************************/

    /*! exports provided: setLoading */

    /***/
    function mVyF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLoading", function () {
        return setLoading;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function setLoading(store) {
        return function (source) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
            store.setLoading(true);
            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              return store.setLoading(false);
            }));
          });
        };
      }
      /***/

    },

    /***/
    "n9dC":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/setEntities.ts ***!
      \*******************************************/

    /*! exports provided: isEntityState, setEntities */

    /***/
    function n9dC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEntityState", function () {
        return isEntityState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setEntities", function () {
        return setEntities;
      });
      /* harmony import */


      var _toEntitiesObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toEntitiesObject */
      "0Fb4");
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isArray */
      "aDq+");
      /* harmony import */


      var _activeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activeState */
      "odxm"); // @internal


      function isEntityState(state) {
        return state.entities && state.ids;
      } // @internal


      function applyMiddleware(entities, preAddEntity) {
        var mapped = {};

        for (var _i3 = 0, _Object$keys = Object.keys(entities); _i3 < _Object$keys.length; _i3++) {
          var id = _Object$keys[_i3];
          mapped[id] = preAddEntity(entities[id]);
        }

        return mapped;
      } // @internal


      function setEntities(_ref23) {
        var state = _ref23.state,
            entities = _ref23.entities,
            idKey = _ref23.idKey,
            preAddEntity = _ref23.preAddEntity,
            isNativePreAdd = _ref23.isNativePreAdd;
        var newEntities;
        var newIds;

        if (Object(_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(entities)) {
          var resolve = Object(_toEntitiesObject__WEBPACK_IMPORTED_MODULE_0__["toEntitiesObject"])(entities, idKey, preAddEntity);
          newEntities = resolve.entities;
          newIds = resolve.ids;
        } else if (isEntityState(entities)) {
          newEntities = isNativePreAdd ? entities.entities : applyMiddleware(entities.entities, preAddEntity);
          newIds = entities.ids;
        } else {
          // it's an object
          newEntities = isNativePreAdd ? entities : applyMiddleware(entities, preAddEntity);
          newIds = Object.keys(newEntities).map(function (id) {
            return isNaN(id) ? id : Number(id);
          });
        }

        var newState = Object.assign(Object.assign({}, state), {
          entities: newEntities,
          ids: newIds,
          loading: false
        });

        if (Object(_activeState__WEBPACK_IMPORTED_MODULE_2__["hasActiveState"])(state)) {
          newState.active = Object(_activeState__WEBPACK_IMPORTED_MODULE_2__["resolveActiveEntity"])(newState);
        }

        return newState;
      }
      /***/

    },

    /***/
    "oJ0C":
    /*!****************************************!*\
      !*** ./libs/akita/src/lib/isString.ts ***!
      \****************************************/

    /*! exports provided: isString */

    /***/
    function oJ0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isString", function () {
        return isString;
      }); // @internal


      function isString(value) {
        return typeof value === 'string';
      }
      /***/

    },

    /***/
    "odxm":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/activeState.ts ***!
      \*******************************************/

    /*! exports provided: hasActiveState, isMultiActiveState, resolveActiveEntity, getExitingActives */

    /***/
    function odxm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasActiveState", function () {
        return hasActiveState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMultiActiveState", function () {
        return isMultiActiveState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resolveActiveEntity", function () {
        return resolveActiveEntity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getExitingActives", function () {
        return getExitingActives;
      });
      /* harmony import */


      var _hasEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hasEntity */
      "dNb/");
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isArray */
      "aDq+"); // @internal


      function hasActiveState(state) {
        return state.hasOwnProperty('active');
      } // @internal


      function isMultiActiveState(active) {
        return Object(_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(active);
      } // @internal


      function resolveActiveEntity(_ref24) {
        var active = _ref24.active,
            ids = _ref24.ids,
            entities = _ref24.entities;

        if (isMultiActiveState(active)) {
          return getExitingActives(active, ids);
        }

        if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_0__["hasEntity"])(entities, active) === false) {
          return null;
        }

        return active;
      } // @internal


      function getExitingActives(currentActivesIds, newIds) {
        var filtered = currentActivesIds.filter(function (id) {
          return newIds.indexOf(id) > -1;
        });
        /** Return the same reference if nothing has changed */

        if (filtered.length === currentActivesIds.length) {
          return currentActivesIds;
        }

        return filtered;
      }
      /***/

    },

    /***/
    "phQS":
    /*!*************************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/effect-root.module.ts ***!
      \*************************************************************/

    /*! exports provided: EffectsRootModule */

    /***/
    function phQS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectsRootModule", function () {
        return EffectsRootModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tokens */
      "EdJo");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actions */
      "fZ2q");
      /* harmony import */


      var _module_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./module-manager.service */
      "KdTy");

      var EffectsRootModule = /*#__PURE__*/function () {
        function EffectsRootModule(moduleManager, actions, rootEffects, parentModule) {
          var _this54 = this;

          _classCallCheck(this, EffectsRootModule);

          this.moduleManager = moduleManager;
          this.actions = actions;
          this.parentModule = parentModule;
          this.rootGuard();
          rootEffects.forEach(function (effect) {
            return _this54.moduleManager.subscribeToEffects(effect);
          });
        }

        _createClass(EffectsRootModule, [{
          key: "rootGuard",
          value: function rootGuard() {
            if (this.parentModule) {
              throw new Error('EffectsRootModule is already loaded. Import it in the AppModule only');
            }
          }
        }]);

        return EffectsRootModule;
      }();

      EffectsRootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EffectsRootModule
      });
      EffectsRootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EffectsRootModule_Factory(t) {
          return new (t || EffectsRootModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_module_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModuleManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_actions__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens__WEBPACK_IMPORTED_MODULE_1__["ROOT_EFFECT_INSTANCES"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EffectsRootModule, 12));
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EffectsRootModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
        }], function () {
          return [{
            type: _module_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModuleManager"]
          }, {
            type: _actions__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_tokens__WEBPACK_IMPORTED_MODULE_1__["ROOT_EFFECT_INSTANCES"]]
            }]
          }, {
            type: EffectsRootModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pmvp":
    /*!*******************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/lib/types.ts ***!
      \*******************************************************/

    /*! no exports provided */

    /***/
    function pmvp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "rYvI":
    /*!**********************************!*\
      !*** ./libs/akita/src/lib/fp.ts ***!
      \**********************************/

    /*! exports provided: createStore, createQuery, createEntityStore, createEntityQuery */

    /***/
    function rYvI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createStore", function () {
        return createStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createQuery", function () {
        return createQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEntityStore", function () {
        return createEntityStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEntityQuery", function () {
        return createEntityQuery;
      });
      /* harmony import */


      var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./store */
      "18rb");
      /* harmony import */


      var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./query */
      "Rbjf");
      /* harmony import */


      var _entityStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entityStore */
      "syuU");
      /* harmony import */


      var _queryEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./queryEntity */
      "GErp");

      function createStore(initialState, options) {
        return new _store__WEBPACK_IMPORTED_MODULE_0__["Store"](initialState, options);
      }

      function createQuery(store) {
        return new _query__WEBPACK_IMPORTED_MODULE_1__["Query"](store);
      }

      function createEntityStore(initialState, options) {
        return new _entityStore__WEBPACK_IMPORTED_MODULE_2__["EntityStore"](initialState, options);
      }

      function createEntityQuery(store) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return new _queryEntity__WEBPACK_IMPORTED_MODULE_3__["QueryEntity"](store, options);
      }
      /***/

    },

    /***/
    "roSn":
    /*!****************************************************************!*\
      !*** ./libs/akita-ng-effects/src/lib/effect-feature.module.ts ***!
      \****************************************************************/

    /*! exports provided: EffectsFeatureModule */

    /***/
    function roSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectsFeatureModule", function () {
        return EffectsFeatureModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tokens */
      "EdJo");
      /* harmony import */


      var _module_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./module-manager.service */
      "KdTy");

      var EffectsFeatureModule = function EffectsFeatureModule(moduleManager, featureEffects) {
        var _this55 = this;

        _classCallCheck(this, EffectsFeatureModule);

        this.moduleManager = moduleManager;
        featureEffects.forEach(function (group) {
          return group.forEach(function (effect) {
            _this55.moduleManager.subscribeToEffects(effect);
          });
        });
      };

      EffectsFeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EffectsFeatureModule
      });
      EffectsFeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EffectsFeatureModule_Factory(t) {
          return new (t || EffectsFeatureModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_module_manager_service__WEBPACK_IMPORTED_MODULE_2__["ModuleManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens__WEBPACK_IMPORTED_MODULE_1__["FEATURE_EFFECT_INSTANCES"]));
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EffectsFeatureModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
        }], function () {
          return [{
            type: _module_manager_service__WEBPACK_IMPORTED_MODULE_2__["ModuleManager"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_tokens__WEBPACK_IMPORTED_MODULE_1__["FEATURE_EFFECT_INSTANCES"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sog1":
    /*!**************************************************************************!*\
      !*** ./libs/akita-ng-entity-service/src/lib/ng-entity-service.config.ts ***!
      \**************************************************************************/

    /*! exports provided: NG_ENTITY_SERVICE_CONFIG, defaultConfig, mergeDeep, NgEntityServiceConfig */

    /***/
    function sog1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_ENTITY_SERVICE_CONFIG", function () {
        return NG_ENTITY_SERVICE_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultConfig", function () {
        return defaultConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeDeep", function () {
        return mergeDeep;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgEntityServiceConfig", function () {
        return NgEntityServiceConfig;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");
      /* harmony import */


      var _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ng-entity-service-notifier */
      "ZY5P");

      var NG_ENTITY_SERVICE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgEntityServiceGlobalConfig');
      var defaultConfig = {
        httpMethods: {
          GET: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].GET,
          POST: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].POST,
          PATCH: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].PATCH,
          PUT: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].PUT,
          DELETE: _ng_entity_service_notifier__WEBPACK_IMPORTED_MODULE_2__["HttpMethod"].DELETE
        }
      };

      function mergeDeep(target) {
        for (var _len5 = arguments.length, sources = new Array(_len5 > 1 ? _len5 - 1 : 0), _key4 = 1; _key4 < _len5; _key4++) {
          sources[_key4 - 1] = arguments[_key4];
        }

        if (!sources.length) return target;
        var source = sources.shift();

        if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isObject"])(target) && Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isObject"])(source)) {
          for (var key in source) {
            if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["isObject"])(source[key])) {
              if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
              mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, _defineProperty({}, key, source[key]));
            }
          }
        }

        return mergeDeep.apply(void 0, [target].concat(sources));
      }

      function NgEntityServiceConfig() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (constructor) {
          if (config.baseUrl) {
            constructor['baseUrl'] = config.baseUrl;
          }

          if (config.resourceName) {
            constructor['resourceName'] = config.resourceName;
          }
        };
      }
      /***/

    },

    /***/
    "syuU":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/entityStore.ts ***!
      \*******************************************/

    /*! exports provided: EntityStore, EntityUIStore */

    /***/
    function syuU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityStore", function () {
        return EntityStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityUIStore", function () {
        return EntityUIStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actions */
      "Q8dH");
      /* harmony import */


      var _addEntities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addEntities */
      "2NMn");
      /* harmony import */


      var _coerceArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./coerceArray */
      "6ukB");
      /* harmony import */


      var _defaultIDKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./defaultIDKey */
      "kBYr");
      /* harmony import */


      var _entityActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./entityActions */
      "RK5a");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./env */
      "VCUg");
      /* harmony import */


      var _getActiveEntities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./getActiveEntities */
      "fVEQ");
      /* harmony import */


      var _getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./getInitialEntitiesState */
      "EJe+");
      /* harmony import */


      var _hasEntity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./hasEntity */
      "dNb/");
      /* harmony import */


      var _isDefined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./isDefined */
      "Y5+g");
      /* harmony import */


      var _isEmpty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./isEmpty */
      "x9kZ");
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./isFunction */
      "u21x");
      /* harmony import */


      var _isNil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./isNil */
      "82/w");
      /* harmony import */


      var _isUndefined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./isUndefined */
      "9NJV");
      /* harmony import */


      var _removeEntities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./removeEntities */
      "M7vU");
      /* harmony import */


      var _setEntities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./setEntities */
      "n9dC");
      /* harmony import */


      var _store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./store */
      "18rb");
      /* harmony import */


      var _transaction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./transaction */
      "UiMj");
      /* harmony import */


      var _updateEntities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./updateEntities */
      "MduY");

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


      var EntityStore = /*#__PURE__*/function (_store__WEBPACK_IMPOR) {
        _inherits(EntityStore, _store__WEBPACK_IMPOR);

        var _super19 = _createSuper(EntityStore);

        function EntityStore() {
          var _this56;

          var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityStore);

          _this56 = _super19.call(this, Object.assign(Object.assign({}, Object(_getInitialEntitiesState__WEBPACK_IMPORTED_MODULE_9__["getInitialEntitiesState"])()), initialState), options);
          _this56.options = options;
          _this56.entityActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          _this56.entityIdChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          return _this56;
        } // @internal


        _createClass(EntityStore, [{
          key: "set",

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
          value: function set(entities) {
            var _this57 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (Object(_isNil__WEBPACK_IMPORTED_MODULE_14__["isNil"])(entities)) return;
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Set Entity');
            var isNativePreAdd = this.akitaPreAddEntity === EntityStore.prototype.akitaPreAddEntity;
            this.setHasCache(true, {
              restartTTL: true
            });

            this._setState(function (state) {
              var newState = Object(_setEntities__WEBPACK_IMPORTED_MODULE_17__["setEntities"])({
                state: state,
                entities: entities,
                idKey: _this57.idKey,
                preAddEntity: _this57.akitaPreAddEntity,
                isNativePreAdd: isNativePreAdd
              });

              if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(options.activeId) === false) {
                newState.active = options.activeId;
              }

              return newState;
            });

            if (this.hasInitialUIState()) {
              this.handleUICreation();
            }

            this.entityActions.next({
              type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Set,
              ids: this.ids
            });
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

        }, {
          key: "add",
          value: function add(entities) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              loading: false
            };
            var collection = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(entities);
            if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(collection)) return;
            var data = Object(_addEntities__WEBPACK_IMPORTED_MODULE_3__["addEntities"])({
              state: this._value(),
              preAddEntity: this.akitaPreAddEntity,
              entities: collection,
              idKey: this.idKey,
              options: options
            });

            if (data) {
              Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Add Entity');
              data.newState.loading = options.loading;

              this._setState(function () {
                return data.newState;
              });

              if (this.hasInitialUIState()) {
                this.handleUICreation(true);
              }

              this.entityActions.next({
                type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Add,
                ids: data.newIds
              });
            }
          }
        }, {
          key: "update",
          value: function update(idsOrFnOrState, newStateOrFn) {
            var _this58 = this;

            if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(newStateOrFn)) {
              _get(_getPrototypeOf(EntityStore.prototype), "update", this).call(this, idsOrFnOrState);

              return;
            }

            var ids = [];

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(idsOrFnOrState)) {
              // We need to filter according the predicate function
              ids = this.ids.filter(function (id) {
                return idsOrFnOrState(_this58.entities[id]);
              });
            } else {
              // If it's nil we want all of them
              ids = Object(_isNil__WEBPACK_IMPORTED_MODULE_14__["isNil"])(idsOrFnOrState) ? this.ids : Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(idsOrFnOrState);
            }

            if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(ids)) return;
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Update Entity', ids);
            var entityIdChanged;

            this._setState(function (state) {
              return Object(_updateEntities__WEBPACK_IMPORTED_MODULE_20__["updateEntities"])({
                idKey: _this58.idKey,
                ids: ids,
                preUpdateEntity: _this58.akitaPreUpdateEntity,
                state: state,
                newStateOrFn: newStateOrFn,
                producerFn: _this58._producerFn,
                onEntityIdChanges: function onEntityIdChanges(oldId, newId) {
                  entityIdChanged = {
                    oldId: oldId,
                    newId: newId
                  };

                  _this58.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), {
                    pending: true
                  }));
                }
              });
            });

            if (entityIdChanged) {
              this.entityIdChanges.next(Object.assign(Object.assign({}, entityIdChanged), {
                pending: false
              }));
            }

            this.entityActions.next({
              type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Update,
              ids: ids
            });
          }
        }, {
          key: "upsert",
          value: function upsert(ids, newState, onCreate) {
            var _this59 = this;

            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);

            var predicate = function predicate(isUpdate) {
              return function (id) {
                return Object(_hasEntity__WEBPACK_IMPORTED_MODULE_10__["hasEntity"])(_this59.entities, id) === isUpdate;
              };
            };

            var baseClass = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(onCreate) ? options.baseClass : onCreate ? onCreate.baseClass : undefined;
            var isClassBased = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(baseClass);
            var updateIds = toArray.filter(predicate(true));
            var newEntities = toArray.filter(predicate(false)).map(function (id) {
              var newStateObj = typeof newState === 'function' ? newState({}) : newState;
              var entity = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(onCreate) ? onCreate(id, newStateObj) : newStateObj;
              var withId = Object.assign(Object.assign({}, entity), _defineProperty({}, _this59.idKey, id));

              if (isClassBased) {
                return new baseClass(withId);
              }

              return withId;
            }); // it can be any of the three types

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

        }, {
          key: "upsertMany",
          value: function upsertMany(entities) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var addedIds = [];
            var updatedIds = [];
            var updatedEntities = {}; // Update the state directly to optimize performance

            var _iterator10 = _createForOfIteratorHelper(entities),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var entity = _step10.value;
                var withPreCheckHook = this.akitaPreCheckEntity(entity);
                var id = withPreCheckHook[this.idKey];

                if (Object(_hasEntity__WEBPACK_IMPORTED_MODULE_10__["hasEntity"])(this.entities, id)) {
                  var prev = this._value().entities[id];

                  var merged = Object.assign(Object.assign({}, this._value().entities[id]), withPreCheckHook);
                  var next = options.baseClass ? new options.baseClass(merged) : merged;
                  var withHook = this.akitaPreUpdateEntity(prev, next);
                  var nextId = withHook[this.idKey];
                  updatedEntities[nextId] = withHook;
                  updatedIds.push(nextId);
                } else {
                  var newEntity = options.baseClass ? new options.baseClass(withPreCheckHook) : withPreCheckHook;

                  var _withHook = this.akitaPreAddEntity(newEntity);

                  var _nextId = _withHook[this.idKey];
                  addedIds.push(_nextId);
                  updatedEntities[_nextId] = _withHook;
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["logAction"])('Upsert Many');

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                ids: addedIds.length ? [].concat(_toConsumableArray(state.ids), addedIds) : state.ids,
                entities: Object.assign(Object.assign({}, state.entities), updatedEntities),
                loading: !!options.loading
              });
            });

            updatedIds.length && this.entityActions.next({
              type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Update,
              ids: updatedIds
            });
            addedIds.length && this.entityActions.next({
              type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Add,
              ids: addedIds
            });

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

        }, {
          key: "replace",
          value: function replace(ids, newState) {
            var toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
            if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(toArray)) return;
            var replaced = {};

            var _iterator11 = _createForOfIteratorHelper(toArray),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var id = _step11.value;
                replaced[id] = Object.assign(Object.assign({}, newState), _defineProperty({}, this.idKey, id));
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Replace Entity', ids);

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                entities: Object.assign(Object.assign({}, state.entities), replaced)
              });
            });
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

        }, {
          key: "move",
          value: function move(from, to) {
            var ids = this.ids.slice();
            ids.splice(to < 0 ? ids.length + to : to, 0, ids.splice(from, 1)[0]);
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Move Entity');

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                // Change the entities reference so that selectAll emit
                entities: Object.assign({}, state.entities),
                ids: ids
              });
            });
          }
        }, {
          key: "remove",
          value: function remove(idsOrFn) {
            var _this60 = this;

            if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(this.ids)) return;
            var idPassed = Object(_isDefined__WEBPACK_IMPORTED_MODULE_11__["isDefined"])(idsOrFn); // null means remove all

            var ids = [];

            if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(idsOrFn)) {
              ids = this.ids.filter(function (entityId) {
                return idsOrFn(_this60.entities[entityId]);
              });
            } else {
              ids = idPassed ? Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(idsOrFn) : this.ids;
            }

            if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(ids)) return;
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Remove Entity', ids);

            this._setState(function (state) {
              return Object(_removeEntities__WEBPACK_IMPORTED_MODULE_16__["removeEntities"])({
                state: state,
                ids: ids
              });
            });

            if (!idPassed) {
              this.setHasCache(false);
            }

            this.handleUIRemove(ids);
            this.entityActions.next({
              type: _entityActions__WEBPACK_IMPORTED_MODULE_6__["EntityActions"].Remove,
              ids: ids
            });
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

        }, {
          key: "updateActive",
          value: function updateActive(newStateOrCallback) {
            var ids = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.active);
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Update Active', ids);
            this.update(ids, newStateOrCallback);
          }
        }, {
          key: "setActive",
          value: function setActive(idOrOptions) {
            var active = Object(_getActiveEntities__WEBPACK_IMPORTED_MODULE_8__["getActiveEntities"])(idOrOptions, this.ids, this.active);

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

        }, {
          key: "addActive",
          value: function addActive(ids) {
            var _this61 = this;

            var toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
            if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(toArray)) return;
            var everyExist = toArray.every(function (id) {
              return _this61.active.indexOf(id) > -1;
            });
            if (everyExist) return;
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Add Active', ids);

            this._setState(function (state) {
              /** Protect against case that one of the items in the array exist */
              var uniques = Array.from(new Set([].concat(_toConsumableArray(state.active), _toConsumableArray(toArray))));
              return Object.assign(Object.assign({}, state), {
                active: uniques
              });
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

        }, {
          key: "removeActive",
          value: function removeActive(ids) {
            var _this62 = this;

            var toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);
            if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(toArray)) return;
            var someExist = toArray.some(function (id) {
              return _this62.active.indexOf(id) > -1;
            });
            if (!someExist) return;
            Object(_env__WEBPACK_IMPORTED_MODULE_7__["isDev"])() && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["setAction"])('Remove Active', ids);

            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                active: Array.isArray(state.active) ? state.active.filter(function (currentId) {
                  return toArray.indexOf(currentId) === -1;
                }) : null
              });
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

        }, {
          key: "toggleActive",
          value: function toggleActive(ids) {
            var _this63 = this;

            var toArray = Object(_coerceArray__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(ids);

            var filterExists = function filterExists(remove) {
              return function (id) {
                return _this63.active.includes(id) === remove;
              };
            };

            var remove = toArray.filter(filterExists(true));
            var add = toArray.filter(filterExists(false));
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

        }, {
          key: "createUIStore",
          value: function createUIStore() {
            var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var storeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var defaults = {
              name: "UI/".concat(this.storeName),
              idKey: this.idKey
            };
            this.ui = new EntityUIStore(initialState, Object.assign(Object.assign({}, defaults), storeConfig));
            return this.ui;
          } // @internal

        }, {
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(EntityStore.prototype), "destroy", this).call(this);

            if (this.ui instanceof EntityStore) {
              this.ui.destroy();
            }

            this.entityActions.complete();
          } // @internal

        }, {
          key: "akitaPreUpdateEntity",
          value: function akitaPreUpdateEntity(_, nextEntity) {
            return nextEntity;
          } // @internal

        }, {
          key: "akitaPreAddEntity",
          value: function akitaPreAddEntity(newEntity) {
            return newEntity;
          } // @internal

        }, {
          key: "akitaPreCheckEntity",
          value: function akitaPreCheckEntity(newEntity) {
            return newEntity;
          }
        }, {
          key: "_setActive",
          value: function _setActive(ids) {
            this._setState(function (state) {
              return Object.assign(Object.assign({}, state), {
                active: ids
              });
            });
          }
        }, {
          key: "handleUICreation",
          value: function handleUICreation() {
            var _this64 = this;

            var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var ids = this.ids;
            var isFunc = Object(_isFunction__WEBPACK_IMPORTED_MODULE_13__["isFunction"])(this.ui._akitaCreateEntityFn);
            var uiEntities;

            var createFn = function createFn(id) {
              var current = _this64.entities[id];
              var ui = isFunc ? _this64.ui._akitaCreateEntityFn(current) : _this64.ui._akitaCreateEntityFn;
              return Object.assign(_defineProperty({}, _this64.idKey, current[_this64.idKey]), ui);
            };

            if (add) {
              uiEntities = this.ids.filter(function (id) {
                return Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(_this64.ui.entities[id]);
              }).map(createFn);
            } else {
              uiEntities = ids.map(createFn);
            }

            add ? this.ui.add(uiEntities) : this.ui.set(uiEntities);
          }
        }, {
          key: "hasInitialUIState",
          value: function hasInitialUIState() {
            return this.hasUIStore() && Object(_isUndefined__WEBPACK_IMPORTED_MODULE_15__["isUndefined"])(this.ui._akitaCreateEntityFn) === false;
          }
        }, {
          key: "handleUIRemove",
          value: function handleUIRemove(ids) {
            if (this.hasUIStore()) {
              this.ui.remove(ids);
            }
          }
        }, {
          key: "hasUIStore",
          value: function hasUIStore() {
            return this.ui instanceof EntityUIStore;
          }
        }, {
          key: "selectEntityAction$",
          get: function get() {
            return this.entityActions.asObservable();
          } // @internal

        }, {
          key: "selectEntityIdChanges$",
          get: function get() {
            return this.entityIdChanges.asObservable();
          } // @internal

        }, {
          key: "idKey",
          get: function get() {
            return this.config.idKey || this.options.idKey || _defaultIDKey__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_ID_KEY"];
          }
        }, {
          key: "ids",
          get: function get() {
            return this._value().ids;
          }
        }, {
          key: "entities",
          get: function get() {
            return this._value().entities;
          }
        }, {
          key: "active",
          get: function get() {
            return this._value().active;
          }
        }]);

        return EntityStore;
      }(_store__WEBPACK_IMPORTED_MODULE_18__["Store"]);

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_transaction__WEBPACK_IMPORTED_MODULE_19__["transaction"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], EntityStore.prototype, "upsert", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_transaction__WEBPACK_IMPORTED_MODULE_19__["transaction"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof T !== "undefined" && T) === "function" ? _b : Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], EntityStore.prototype, "toggleActive", null); // @internal

      var EntityUIStore = /*#__PURE__*/function (_EntityStore) {
        _inherits(EntityUIStore, _EntityStore);

        var _super20 = _createSuper(EntityUIStore);

        function EntityUIStore() {
          var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var storeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EntityUIStore);

          return _super20.call(this, initialState, storeConfig);
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


        _createClass(EntityUIStore, [{
          key: "setInitialEntityState",
          value: function setInitialEntityState(createFn) {
            this._akitaCreateEntityFn = createFn;
          }
        }]);

        return EntityUIStore;
      }(EntityStore);
      /***/

    },

    /***/
    "tPHU":
    /*!******************************************************!*\
      !*** ./apps/angular-store-app/src/app/app.module.ts ***!
      \******************************************************/

    /*! exports provided: AppModule */

    /***/
    function tPHU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "GjRw");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "ziB5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _products_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./products/products.module */
      "0L1a");
      /* harmony import */


      var _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./cart/cart.module */
      "fWdh");
      /* harmony import */


      var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./product-page/product-page.component */
      "/SVk");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./nav/nav.component */
      "PaKE");
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./auth/auth.module */
      "ILSo");
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./auth/auth.guard */
      "F33U");
      /* harmony import */


      var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @datorama/akita-ng-entity-service */
      "OTOy");
      /* harmony import */


      var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @datorama/akita-ng-router-store */
      "79eE");
      /* harmony import */


      var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @datorama/akita-ngdevtools */
      "WjPt");
      /* harmony import */


      var _cart_state_cart_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cart/state/cart.effects */
      "Dr0E");
      /* harmony import */


      var _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @datorama/akita-ng-effects */
      "al6x");
      /* harmony import */


      var _libs_akita_ng_devtools_src_lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../libs/akita-ng-devtools/src/lib/ng-devtools.module */
      "5OdB");
      /* harmony import */


      var _libs_akita_ng_effects_src_lib_effect_root_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../libs/akita-ng-effects/src/lib/effect-root.module */
      "phQS");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
          provide: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["NG_ENTITY_SERVICE_CONFIG"],
          useFactory: function useFactory() {
            return {
              baseUrl: 'https://jsonplaceholder.typicode.com',
              httpMethods: {
                PUT: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["HttpMethod"].PATCH
              }
            };
          },
          deps: []
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__["CartModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"], _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__["AkitaNgRouterStoreModule"], _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__["AkitaNgDevtools"].forRoot(), _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_17__["AkitaNgEffectsModule"].forRoot([_cart_state_cart_effects__WEBPACK_IMPORTED_MODULE_16__["CartEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__["CartModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"], _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__["AkitaNgRouterStoreModule"], _libs_akita_ng_devtools_src_lib_ng_devtools_module__WEBPACK_IMPORTED_MODULE_18__["AkitaNgDevtools"], _libs_akita_ng_effects_src_lib_effect_root_module__WEBPACK_IMPORTED_MODULE_19__["EffectsRootModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductPageComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_8__["CartModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"], _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_14__["AkitaNgRouterStoreModule"], _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_15__["AkitaNgDevtools"].forRoot(), _datorama_akita_ng_effects__WEBPACK_IMPORTED_MODULE_17__["AkitaNgEffectsModule"].forRoot([_cart_state_cart_effects__WEBPACK_IMPORTED_MODULE_16__["CartEffects"]])],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
              provide: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["NG_ENTITY_SERVICE_CONFIG"],
              useFactory: function useFactory() {
                return {
                  baseUrl: 'https://jsonplaceholder.typicode.com',
                  httpMethods: {
                    PUT: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_13__["HttpMethod"].PATCH
                  }
                };
              },
              deps: []
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "u21x":
    /*!******************************************!*\
      !*** ./libs/akita/src/lib/isFunction.ts ***!
      \******************************************/

    /*! exports provided: isFunction */

    /***/
    function u21x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFunction", function () {
        return isFunction;
      }); // @internal


      function isFunction(value) {
        return typeof value === 'function';
      }
      /***/

    },

    /***/
    "uFMm":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/resetStores.ts ***!
      \*******************************************/

    /*! exports provided: resetStores */

    /***/
    function uFMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resetStores", function () {
        return resetStores;
      });
      /* harmony import */


      var _stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stores */
      "40zj");
      /* harmony import */


      var _transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./transaction */
      "UiMj");
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
        var defaults = {
          exclude: []
        };
        options = Object.assign({}, defaults, options);
        var stores = Object.keys(_stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"]);
        Object(_transaction__WEBPACK_IMPORTED_MODULE_1__["applyTransaction"])(function () {
          var _iterator12 = _createForOfIteratorHelper(stores),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var store = _step12.value;
              var s = _stores__WEBPACK_IMPORTED_MODULE_0__["__stores__"][store];

              if (!options.exclude) {
                s.reset();
              } else {
                if (options.exclude.indexOf(s.storeName) === -1) {
                  s.reset();
                }
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        });
      }
      /***/

    },

    /***/
    "v4lr":
    /*!*****************************************!*\
      !*** ./libs/akita/src/lib/getEntity.ts ***!
      \*****************************************/

    /*! exports provided: findEntityByPredicate, getEntity */

    /***/
    function v4lr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findEntityByPredicate", function () {
        return findEntityByPredicate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEntity", function () {
        return getEntity;
      });
      /* harmony import */


      var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isUndefined */
      "9NJV");
      /* harmony import */


      var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isString */
      "oJ0C"); // @internal


      function findEntityByPredicate(predicate, entities) {
        for (var _i4 = 0, _Object$keys2 = Object.keys(entities); _i4 < _Object$keys2.length; _i4++) {
          var entityId = _Object$keys2[_i4];

          if (predicate(entities[entityId]) === true) {
            return entityId;
          }
        }

        return undefined;
      } // @internal


      function getEntity(id, project) {
        return function (entities) {
          var entity = entities[id];

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
      /***/

    },

    /***/
    "x9kZ":
    /*!***************************************!*\
      !*** ./libs/akita/src/lib/isEmpty.ts ***!
      \***************************************/

    /*! exports provided: isEmpty */

    /***/
    function x9kZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return isEmpty;
      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      "aDq+"); // @internal


      function isEmpty(arr) {
        if (Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(arr)) {
          return arr.length === 0;
        }

        return false;
      }
      /***/

    },

    /***/
    "xv5F":
    /*!*****************************************************************!*\
      !*** ./apps/angular-store-app/src/app/cart/state/cart.query.ts ***!
      \*****************************************************************/

    /*! exports provided: CartQuery */

    /***/
    function xv5F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartQuery", function () {
        return CartQuery;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cart_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cart.store */
      "gtU3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _datorama_akita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @datorama/akita */
      "cBsy");
      /* harmony import */


      var _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../products/state/products.query */
      "05AR");

      var CartQuery = /*#__PURE__*/function (_datorama_akita__WEBP9) {
        _inherits(CartQuery, _datorama_akita__WEBP9);

        var _super21 = _createSuper(CartQuery);

        function CartQuery(store, productsQuery) {
          var _this65;

          _classCallCheck(this, CartQuery);

          _this65 = _super21.call(this, store);
          _this65.store = store;
          _this65.productsQuery = productsQuery;
          _this65.selectItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([_this65.selectAll(), _this65.productsQuery.selectAll({
            asObject: true
          })]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(joinItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }));
          _this65.selectTotal$ = _this65.selectItems$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.reduce(function (acc, item) {
              return acc + item.total;
            }, 0);
          }));
          _this65.selectNotification$ = _this65.select(function (state) {
            return state.notify;
          });
          return _this65;
        }

        return CartQuery;
      }(_datorama_akita__WEBPACK_IMPORTED_MODULE_4__["QueryEntity"]);

      CartQuery.ɵfac = function CartQuery_Factory(t) {
        return new (t || CartQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]));
      };

      CartQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartQuery,
        factory: CartQuery.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartQuery, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _cart_store__WEBPACK_IMPORTED_MODULE_1__["CartStore"]
          }, {
            type: _products_state_products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]
          }];
        }, null);
      })();

      function joinItems(_ref25) {
        var _ref26 = _slicedToArray(_ref25, 2),
            cartItems = _ref26[0],
            products = _ref26[1];

        return cartItems.map(function (cartItem) {
          var product = products[cartItem.productId];
          return Object.assign(Object.assign(Object.assign({}, cartItem), product), {
            total: cartItem.quantity * product.price
          });
        });
      }
      /***/

    },

    /***/
    "yKN+":
    /*!************************************!*\
      !*** ./libs/akita/src/lib/sort.ts ***!
      \************************************/

    /*! exports provided: Order, compareValues */

    /***/
    function yKN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compareValues", function () {
        return compareValues;
      });

      var Order;

      (function (Order) {
        Order["ASC"] = "asc";
        Order["DESC"] = "desc";
      })(Order || (Order = {})); // @internal


      function compareValues(key) {
        var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Order.ASC;
        return function (a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          }

          var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
          var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
          var comparison = 0;

          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }

          return order == Order.DESC ? comparison * -1 : comparison;
        };
      }
      /***/

    },

    /***/
    "yMBE":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/arrayToggle.ts ***!
      \*******************************************/

    /*! exports provided: byKey, byId, arrayToggle */

    /***/
    function yMBE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "byKey", function () {
        return byKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "byId", function () {
        return byId;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayToggle", function () {
        return arrayToggle;
      });
      /**
       * Create an array value comparator for a specific key of the value.
       * @param prop The property of the value to be compared.
       */


      function byKey(prop) {
        return function (a, b) {
          return a[prop] === b[prop];
        };
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


      function arrayToggle(array, newValue) {
        var compare = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a, b) {
          return a === b;
        };
        var index = array.findIndex(function (oldValue) {
          return compare(newValue, oldValue);
        });
        return !!~index ? [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1))) : [].concat(_toConsumableArray(array), [newValue]);
      }
      /***/

    },

    /***/
    "yVIH":
    /*!*********************************************!*\
      !*** ./libs/akita/src/lib/sortByOptions.ts ***!
      \*********************************************/

    /*! exports provided: sortByOptions */

    /***/
    function yVIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortByOptions", function () {
        return sortByOptions;
      }); // @internal


      function sortByOptions(options, config) {
        options.sortBy = options.sortBy || config && config.sortBy;
        options.sortByOrder = options.sortByOrder || config && config.sortByOrder;
      }
      /***/

    },

    /***/
    "ziB5":
    /*!*********************************************************!*\
      !*** ./apps/angular-store-app/src/app/app.component.ts ***!
      \*********************************************************/

    /*! exports provided: AppComponent */

    /***/
    function ziB5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @datorama/akita-ng-router-store */
      "79eE");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav/nav.component */
      "PaKE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent(r) {// r.select().subscribe(console.log);

        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_1__["RouterQuery"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 8,
        vars: 0,
        consts: [[1, "flex", "flex-column", "height"], [1, "block"], [1, "flex-1"], [1, "page-footer", "cyan", "lighten-2"], [1, "footer-copyright"], [1, "container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA9 2018 Copyright Datorama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html'
          }]
        }], function () {
          return [{
            type: _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_1__["RouterQuery"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zqjR":
    /*!*******************************************!*\
      !*** ./libs/akita/src/lib/dispatchers.ts ***!
      \*******************************************/

    /*! exports provided: $$deleteStore, $$addStore, $$updateStore, dispatchDeleted, dispatchAdded, dispatchUpdate */

    /***/
    function zqjR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$deleteStore", function () {
        return $$deleteStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$addStore", function () {
        return $$addStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "$$updateStore", function () {
        return $$updateStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatchDeleted", function () {
        return dispatchDeleted;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatchAdded", function () {
        return dispatchAdded;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dispatchUpdate", function () {
        return dispatchUpdate;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); // @internal


      var $$deleteStore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // @internal

      var $$addStore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](50, 5000); // @internal

      var $$updateStore = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // @internal

      function dispatchDeleted(storeName) {
        $$deleteStore.next(storeName);
      } // @internal


      function dispatchAdded(storeName) {
        $$addStore.next(storeName);
      } // @internal


      function dispatchUpdate(storeName, action) {
        $$updateStore.next({
          storeName: storeName,
          action: action
        });
      }
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map