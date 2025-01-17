(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-widgets-module"],{

/***/ "1UMR":
/*!*********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/widgets/widgets.component.ts ***!
  \*********************************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _state_widget_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/widget.model */ "OE8E");
/* harmony import */ var _state_widgets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/widgets.service */ "S+/C");
/* harmony import */ var _state_widgets_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/widgets.query */ "7vFM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function WidgetsComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function WidgetsComponent_tr_36_Template_input_keydown_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const widget_r2 = ctx.$implicit; const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateWidget(widget_r2.id, _r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_tr_36_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const widget_r2 = ctx.$implicit; const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateWidget(widget_r2.id, _r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_tr_36_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const widget_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.revert(widget_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_tr_36_Template_i_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const widget_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.remove(widget_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_tr_36_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const widget_r2 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addActive(widget_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_tr_36_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const widget_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeActive(widget_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Remove Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_tr_36_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const widget_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleActive(widget_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Toggle Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](widget_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", widget_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx_r1.widgetsSpecific.isDirty(widget_r2.id)));
} }
class WidgetsComponent {
    constructor(widgetsQuery, widgetService) {
        this.widgetsQuery = widgetsQuery;
        this.widgetService = widgetService;
    }
    ngOnInit() {
        if (this.widgetsQuery.hasEntity() === false) {
            this.widgetService.initWidgets();
        }
        this.dashoboardName$ = this.widgetsQuery.select(state => state.name);
        this.widgets$ = this.widgetsQuery.selectAll();
        this.activeWidgets$ = this.widgetsQuery.selectActive();
        this.collection = new _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["DirtyCheckPlugin"](this.widgetsQuery, {
            watchProperty: 'entities'
        }).setHead();
        this.widgetsSpecific = new _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityDirtyCheckPlugin"](this.widgetsQuery).setHead();
    }
    updateName(nameInput) {
        this.widgetService.updateName(nameInput.value);
    }
    updateWidget(id, name) {
        this.widgetService.updateWidget(id, name);
    }
    add() {
        this.widgetService.add();
    }
    remove(id) {
        this.widgetService.remove(id);
    }
    revert(id) {
        this.widgetsSpecific.reset(id);
    }
    revertStore() {
        Object(_state_widget_model__WEBPACK_IMPORTED_MODULE_2__["resetId"])(5);
        this.collection.reset();
    }
    ngOnDestroy() {
        Object(_state_widget_model__WEBPACK_IMPORTED_MODULE_2__["resetId"])();
        this.collection.destroy();
        this.widgetsSpecific.destroy();
    }
    addActive(id) {
        this.widgetService.addActive(id);
    }
    removeActive(id) {
        this.widgetService.removeActive(id);
    }
    toggleActive(id) {
        this.widgetService.toggleActive(id);
    }
}
WidgetsComponent.ɵfac = function WidgetsComponent_Factory(t) { return new (t || WidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_widgets_query__WEBPACK_IMPORTED_MODULE_4__["WidgetsQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_widgets_service__WEBPACK_IMPORTED_MODULE_3__["WidgetsService"])); };
WidgetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetsComponent, selectors: [["app-widgets"]], decls: 52, vars: 18, consts: [[1, "padding", "flex", "flex-column"], [1, "flex", "align-center"], [2, "margin-right", "20px"], [2, "width", "250px", "margin-right", "20px", 3, "value", "keydown.enter"], ["pageName", ""], [1, "btn", "waves-effect", "waves-light", 2, "margin", "20px 10px 0 0", 3, "click"], [1, "material-icons", "right"], [1, "all-widgets-dirty-check", "flex", "flex-column", "flex-1", "align-center"], [1, "striped", "centered", "padding"], [4, "ngFor", "ngForOf"], [1, "flex", "sb"], [1, "btn", "waves-effect", "waves-light", "tooltipped", 2, "margin", "20px 10px 0 0", 3, "click"], [2, "width", "200px"], [2, "margin-right", "20px", 3, "value", "keydown.enter"], ["name", ""], [1, "btn-floating"], [1, "material-icons", 3, "click"], [3, "click"]], template: function WidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function WidgetsComponent_Template_input_keydown_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.updateName(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.updateName(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The dirty check plugin is only listening to widgets changes and therefore isn't effecting the page name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Revert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Set Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WidgetsComponent_tr_36_Template, 28, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_Template_button_click_39_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Clear list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_Template_button_click_43_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Add widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetsComponent_Template_button_click_47_listener() { return ctx.revertStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Reset Store Entities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page name: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.dashoboardName$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx.dashoboardName$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Active: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, ctx.activeWidgets$)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 14, ctx.widgets$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 16, ctx.collection.isDirty$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widgets',
                templateUrl: './widgets.component.html'
            }]
    }], function () { return [{ type: _state_widgets_query__WEBPACK_IMPORTED_MODULE_4__["WidgetsQuery"] }, { type: _state_widgets_service__WEBPACK_IMPORTED_MODULE_3__["WidgetsService"] }]; }, null); })();


/***/ }),

/***/ "7vFM":
/*!***********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/widgets/state/widgets.query.ts ***!
  \***********************************************************************/
/*! exports provided: WidgetsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsQuery", function() { return WidgetsQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "cBsy");
/* harmony import */ var _widgets_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets.store */ "xvxn");





class WidgetsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
WidgetsQuery.ɵfac = function WidgetsQuery_Factory(t) { return new (t || WidgetsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_widgets_store__WEBPACK_IMPORTED_MODULE_2__["WidgetsStore"])); };
WidgetsQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetsQuery, factory: WidgetsQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _widgets_store__WEBPACK_IMPORTED_MODULE_2__["WidgetsStore"] }]; }, null); })();


/***/ }),

/***/ "OE8E":
/*!**********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/widgets/state/widget.model.ts ***!
  \**********************************************************************/
/*! exports provided: createWidget, resetId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWidget", function() { return createWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetId", function() { return resetId; });
let _id = 0;
function createWidget() {
    return {
        id: ++_id,
        name: `Widget ${_id}`
    };
}
function resetId(count) {
    _id = count || 0;
}


/***/ }),

/***/ "S+/C":
/*!*************************************************************************!*\
  !*** ./apps/angular-store-app/src/app/widgets/state/widgets.service.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsService", function() { return WidgetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _widgets_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets.store */ "xvxn");
/* harmony import */ var _widget_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget.model */ "OE8E");





class WidgetsService {
    constructor(widgetsStore) {
        this.widgetsStore = widgetsStore;
    }
    initWidgets() {
        const widgets = [Object(_widget_model__WEBPACK_IMPORTED_MODULE_2__["createWidget"])(), Object(_widget_model__WEBPACK_IMPORTED_MODULE_2__["createWidget"])(), Object(_widget_model__WEBPACK_IMPORTED_MODULE_2__["createWidget"])(), Object(_widget_model__WEBPACK_IMPORTED_MODULE_2__["createWidget"])(), Object(_widget_model__WEBPACK_IMPORTED_MODULE_2__["createWidget"])()];
        this.widgetsStore.set(widgets);
    }
    updateWidget(id, name) {
        this.widgetsStore.update(id, { name });
    }
    add() {
        this.widgetsStore.add(Object(_widget_model__WEBPACK_IMPORTED_MODULE_2__["createWidget"])());
    }
    remove(id) {
        this.widgetsStore.remove(id);
    }
    updateName(name) {
        this.widgetsStore.update({ name });
    }
    addActive(id) {
        this.widgetsStore.addActive(id);
    }
    removeActive(id) {
        this.widgetsStore.removeActive(id);
    }
    toggleActive(id) {
        this.widgetsStore.toggleActive(id);
    }
}
WidgetsService.ɵfac = function WidgetsService_Factory(t) { return new (t || WidgetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_widgets_store__WEBPACK_IMPORTED_MODULE_1__["WidgetsStore"])); };
WidgetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetsService, factory: WidgetsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _widgets_store__WEBPACK_IMPORTED_MODULE_1__["WidgetsStore"] }]; }, null); })();


/***/ }),

/***/ "xLnP":
/*!******************************************************************!*\
  !*** ./apps/angular-store-app/src/app/widgets/widgets.module.ts ***!
  \******************************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets.component */ "1UMR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    {
        path: '',
        component: _widgets_component__WEBPACK_IMPORTED_MODULE_2__["WidgetsComponent"]
    }
];
class WidgetsModule {
}
WidgetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_widgets_component__WEBPACK_IMPORTED_MODULE_2__["WidgetsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                declarations: [_widgets_component__WEBPACK_IMPORTED_MODULE_2__["WidgetsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xvxn":
/*!***********************************************************************!*\
  !*** ./apps/angular-store-app/src/app/widgets/state/widgets.store.ts ***!
  \***********************************************************************/
/*! exports provided: WidgetsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsStore", function() { return WidgetsStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "cBsy");




const initState = {
    name: 'Akita widgets',
    active: []
};
let WidgetsStore = class WidgetsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super(initState);
    }
};
WidgetsStore.ɵfac = function WidgetsStore_Factory(t) { return new (t || WidgetsStore)(); };
WidgetsStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WidgetsStore, factory: WidgetsStore.ɵfac, providedIn: 'root' });
WidgetsStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'widgets' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WidgetsStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WidgetsStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=widgets-widgets-module-es2015.js.map