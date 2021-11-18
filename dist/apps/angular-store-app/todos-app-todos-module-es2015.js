(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todos-app-todos-module"],{

/***/ "5LkH":
/*!**********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/state/todo.model.ts ***!
  \**********************************************************************/
/*! exports provided: createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "cBsy");

function createTodo(title) {
    return {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["guid"])(),
        title,
        completed: false
    };
}


/***/ }),

/***/ "IWSM":
/*!*************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/todo/todo.component.ts ***!
  \*************************************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");






let TodoComponent = class TodoComponent {
    constructor() {
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.completed);
        this.control.valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe((completed) => {
            this.complete.emit(Object.assign(Object.assign({}, this.todo), { completed }));
        });
    }
    ngOnDestroy() { }
};
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], inputs: { todo: "todo" }, outputs: { complete: "complete", delete: "delete" }, decls: 9, vars: 2, consts: [[1, "flex", "align-center", "sb"], [1, "flex"], ["type", "checkbox", 3, "formControl"], [1, "btn", "waves-effect", "waves-light", "red", "btn-small", "btn-floating"], [1, "material-icons", 3, "click"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoComponent_Template_i_click_7_listener() { return ctx.delete.emit(ctx.todo.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.todo.title, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
TodoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], TodoComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-todo',
                templateUrl: './todo.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "KqBK":
/*!************************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/filter/todos-filters.component.ts ***!
  \************************************************************************************/
/*! exports provided: TodosFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosFiltersComponent", function() { return TodosFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.model */ "V4gj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TodosFiltersComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", filter_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](filter_r1.label);
} }
let TodosFiltersComponent = class TodosFiltersComponent {
    constructor() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set active(filter) {
        this._active = filter;
        if (this.control) {
            this.control.patchValue(filter, { emitEvent: false });
        }
    }
    ngOnInit() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._active);
        this.control.valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe((c) => {
            this.update.emit(c);
        });
    }
    ngOnDestroy() { }
};
TodosFiltersComponent.ɵfac = function TodosFiltersComponent_Factory(t) { return new (t || TodosFiltersComponent)(); };
TodosFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodosFiltersComponent, selectors: [["app-todos-filters"]], inputs: { active: "active", filters: "filters" }, outputs: { update: "update" }, decls: 3, vars: 2, consts: [[1, "input-field", "col", "s12"], [1, "browser-default", 3, "formControl"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]], template: function TodosFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TodosFiltersComponent_option_2_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], encapsulation: 2, changeDetection: 0 });
TodosFiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], TodosFiltersComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodosFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-todos-filters',
                template: `
    <div class="input-field col s12">
      <select [formControl]="control" class="browser-default">
        <option *ngFor="let filter of filters" [ngValue]="filter.value">{{ filter.label }}</option>
      </select>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], filters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "N+3c":
/*!*************************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/todos-page/todos-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TodosPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosPageComponent", function() { return TodosPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter/filter.model */ "V4gj");
/* harmony import */ var _state_todos_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/todos.query */ "OrtY");
/* harmony import */ var _state_todos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/todos.service */ "aPf/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _filter_todos_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter/todos-filters.component */ "KqBK");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todos/todos.component */ "bTfD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












function TodosPageComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosPageComponent_tr_41_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const index_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.moveUp(index_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodosPageComponent_tr_41_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const todo_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.complete2($event, todo_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosPageComponent_tr_41_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const todo_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.undo(todo_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosPageComponent_tr_41_Template_i_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const todo_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.redo(todo_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "redo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", todo_r2.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.stateHistoryEntity.hasPast(todo_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.stateHistoryEntity.hasFuture(todo_r2.id));
} }
class TodosPageComponent {
    constructor(todosQuery, todosService) {
        this.todosQuery = todosQuery;
        this.todosService = todosService;
        this.filters = _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__["initialFilters"];
    }
    ngOnInit() {
        this.todos$ = this.todosQuery.selectVisibleTodos$;
        this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
        this.checkAll$ = this.todosQuery.checkAll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(numCompleted => numCompleted && numCompleted === this.todosQuery.getCount()));
        this.stateHistory = new _datorama_akita__WEBPACK_IMPORTED_MODULE_5__["StateHistoryPlugin"](this.todosQuery);
        this.stateHistoryEntity = new _datorama_akita__WEBPACK_IMPORTED_MODULE_5__["EntityStateHistoryPlugin"](this.todosQuery);
    }
    moveUp(index) {
        this.todosService.move(index);
    }
    undo(id) {
        if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(id)) {
            this.stateHistory.undo();
        }
        else {
            this.stateHistoryEntity.undo(id);
        }
    }
    redo(id) {
        if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(id)) {
            this.stateHistory.redo();
        }
        else {
            this.stateHistoryEntity.redo(id);
        }
    }
    add(input) {
        this.todosService.add(input.value);
        input.value = '';
    }
    complete(todo) {
        this.stateHistory.ignoreNext();
        this.todosService.complete(todo);
    }
    complete2(event, todo) {
        const _todo = Object.assign(Object.assign({}, todo), { completed: event.target.checked });
        this.todosService.complete(_todo);
    }
    delete(id) {
        this.todosService.delete(id);
    }
    changeFilter(filter) {
        this.todosService.updateFilter(filter);
    }
    checkAll({ target }) {
        this.todosService.checkAll(target.checked);
    }
    trackBy(_, todo) {
        return todo.id;
    }
}
TodosPageComponent.ɵfac = function TodosPageComponent_Factory(t) { return new (t || TodosPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_todos_query__WEBPACK_IMPORTED_MODULE_2__["TodosQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"])); };
TodosPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosPageComponent, selectors: [["app-todos-page"]], decls: 43, vars: 18, consts: [[1, "padding"], [1, "input-field"], [1, "material-icons", "prefix"], ["type", "text", "placeholder", "Add Todo...", 1, "form-control", 3, "keydown.enter"], ["input", ""], [3, "filters", "active", "update"], ["type", "checkbox", 3, "checked", "change"], [3, "todos", "delete", "complete"], [1, "flex", "align-center"], [1, "btn", "waves-effect", "waves-light", 3, "click"], [1, "material-icons", "right"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], [1, "btn-floating"], [1, "material-icons", 3, "click"]], template: function TodosPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TodosPageComponent_Template_input_keydown_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.add(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-todos-filters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function TodosPageComponent_Template_app_todos_filters_update_6_listener($event) { return ctx.changeFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodosPageComponent_Template_input_change_9_listener($event) { return ctx.checkAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-todos", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function TodosPageComponent_Template_app_todos_delete_13_listener($event) { return ctx.delete($event); })("complete", function TodosPageComponent_Template_app_todos_complete_13_listener($event) { return ctx.complete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosPageComponent_Template_button_click_16_listener() { return ctx.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Undo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosPageComponent_Template_button_click_20_listener() { return ctx.redo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Redo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Todos - Entity History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TodosPageComponent_tr_41_Template, 17, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filters", ctx.filters)("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.activeFilter$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx.checkAll$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todos", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, ctx.todos$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.stateHistory.hasPast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.stateHistory.hasFuture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 16, ctx.todos$))("ngForTrackBy", ctx.trackBy);
    } }, directives: [_filter_todos_filters_component__WEBPACK_IMPORTED_MODULE_6__["TodosFiltersComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_7__["TodosComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2Rvcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todos-page',
                templateUrl: './todos-page.component.html',
                styleUrls: ['./todos-page.component.css']
            }]
    }], function () { return [{ type: _state_todos_query__WEBPACK_IMPORTED_MODULE_2__["TodosQuery"] }, { type: _state_todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "OrtY":
/*!***********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/state/todos.query.ts ***!
  \***********************************************************************/
/*! exports provided: TodosQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosQuery", function() { return TodosQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _todos_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.store */ "hDnh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/filter.model */ "V4gj");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








class TodosQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_4__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectVisibilityFilter$ = this.select(state => state.ui.filter);
        this.selectVisibleTodos$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.selectVisibilityFilter$, this.selectAll()]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([filter, todos]) => {
            return this.getVisibleTodos(filter, todos);
        }));
        this.checkAll$ = this.selectCount(entity => entity.completed);
    }
    getVisibleTodos(filter, todos) {
        switch (filter) {
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_3__["VISIBILITY_FILTER"].SHOW_COMPLETED:
                return todos.filter(t => t.completed);
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_3__["VISIBILITY_FILTER"].SHOW_ACTIVE:
                return todos.filter(t => !t.completed);
            default:
                return todos;
        }
    }
}
TodosQuery.ɵfac = function TodosQuery_Factory(t) { return new (t || TodosQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_todos_store__WEBPACK_IMPORTED_MODULE_1__["TodosStore"])); };
TodosQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodosQuery, factory: TodosQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _todos_store__WEBPACK_IMPORTED_MODULE_1__["TodosStore"] }]; }, null); })();


/***/ }),

/***/ "V4gj":
/*!*************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/filter/filter.model.ts ***!
  \*************************************************************************/
/*! exports provided: VISIBILITY_FILTER, initialFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIBILITY_FILTER", function() { return VISIBILITY_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFilters", function() { return initialFilters; });
var VISIBILITY_FILTER;
(function (VISIBILITY_FILTER) {
    VISIBILITY_FILTER["SHOW_COMPLETED"] = "SHOW_COMPLETED";
    VISIBILITY_FILTER["SHOW_ACTIVE"] = "SHOW_ACTIVE";
    VISIBILITY_FILTER["SHOW_ALL"] = "SHOW_ALL";
})(VISIBILITY_FILTER || (VISIBILITY_FILTER = {}));
const initialFilters = [
    { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
    { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
    { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
];


/***/ }),

/***/ "aPf/":
/*!*************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/state/todos.service.ts ***!
  \*************************************************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _todos_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.store */ "hDnh");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.model */ "5LkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter/filter.model */ "V4gj");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @datorama/akita */ "cBsy");








class TodosService {
    constructor(todosStore) {
        this.todosStore = todosStore;
    }
    updateFilter(filter) {
        this.todosStore.update({
            ui: {
                filter
            }
        });
    }
    complete({ id, completed }) {
        this.todosStore.update(id, { completed });
    }
    add(title) {
        const todo = Object(_todo_model__WEBPACK_IMPORTED_MODULE_2__["createTodo"])(title);
        this.todosStore.add(todo);
    }
    delete(id) {
        this.todosStore.remove(id);
    }
    checkAll(completed) {
        this.todosStore.update(null, {
            completed
        });
    }
    move(index) {
        console.log('TCL: move -> index', index);
        this.todosStore.move(index, index - 1);
    }
}
TodosService.ɵfac = function TodosService_Factory(t) { return new (t || TodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_todos_store__WEBPACK_IMPORTED_MODULE_1__["TodosStore"])); };
TodosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TodosService, factory: TodosService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["action"])('Update filter'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TodosService.prototype, "updateFilter", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TodosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _todos_store__WEBPACK_IMPORTED_MODULE_1__["TodosStore"] }]; }, { updateFilter: [] }); })();


/***/ }),

/***/ "bTfD":
/*!***************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/todos/todos.component.ts ***!
  \***************************************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todo.component */ "IWSM");




function TodosComponent_app_todo_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function TodosComponent_app_todo_3_Template_app_todo_delete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.delete.emit($event); })("complete", function TodosComponent_app_todo_3_Template_app_todo_complete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.complete.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r1);
} }
class TodosComponent {
    constructor() {
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(); };
TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosComponent, selectors: [["app-todos"]], inputs: { todos: "todos" }, outputs: { complete: "complete", delete: "delete" }, decls: 4, vars: 1, consts: [[1, "collection", "with-header"], [1, "collection-header"], ["class", "collection-item", 3, "todo", "delete", "complete", 4, "ngFor", "ngForOf"], [1, "collection-item", 3, "todo", "delete", "complete"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodosComponent_app_todo_3_Template, 1, 1, "app-todo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todos',
                template: `
    <div class="collection with-header">
      <h4 class="collection-header">Todos:</h4>
      <app-todo *ngFor="let todo of todos;"
                class="collection-item"
                (delete)="delete.emit($event)"
                (complete)="complete.emit($event)"
                [todo]="todo"></app-todo>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { todos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "hDnh":
/*!***********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/state/todos.store.ts ***!
  \***********************************************************************/
/*! exports provided: TodosStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosStore", function() { return TodosStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter/filter.model */ "V4gj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @datorama/akita */ "cBsy");





let TodosStore = class TodosStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_3__["EntityStore"] {
    constructor() {
        super({
            ui: { filter: _filter_filter_model__WEBPACK_IMPORTED_MODULE_1__["VISIBILITY_FILTER"].SHOW_ALL }
        });
    }
};
TodosStore.ɵfac = function TodosStore_Factory(t) { return new (t || TodosStore)(); };
TodosStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TodosStore, factory: TodosStore.ɵfac, providedIn: 'root' });
TodosStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["StoreConfig"])({ name: 'todos' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TodosStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TodosStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wsaO":
/*!******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/todos-app/todos.module.ts ***!
  \******************************************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/todo.component */ "IWSM");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos/todos.component */ "bTfD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _filter_todos_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/todos-filters.component */ "KqBK");
/* harmony import */ var _todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos-page/todos-page.component */ "N+3c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










const routes = [
    {
        path: '',
        component: _todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_6__["TodosPageComponent"]
    }
];
class TodosModule {
}
TodosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TodosModule });
TodosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TodosModule_Factory(t) { return new (t || TodosModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodosModule, { declarations: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"], _filter_todos_filters_component__WEBPACK_IMPORTED_MODULE_5__["TodosFiltersComponent"], _todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_6__["TodosPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"], _filter_todos_filters_component__WEBPACK_IMPORTED_MODULE_5__["TodosFiltersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
                exports: [_todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"], _filter_todos_filters_component__WEBPACK_IMPORTED_MODULE_5__["TodosFiltersComponent"]],
                declarations: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"], _filter_todos_filters_component__WEBPACK_IMPORTED_MODULE_5__["TodosFiltersComponent"], _todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_6__["TodosPageComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=todos-app-todos-module-es2015.js.map