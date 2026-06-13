import {
  NotificationService,
  ThemeService
} from "./chunk-MHJRZF2E.js";
import {
  AiService,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JLC75N3T.js";
import {
  CommonModule,
  Component,
  DataService,
  DomSanitizer,
  EXPERIENCE_TIERS,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  LlmSettingsService,
  NgClass,
  Output,
  RouterLink,
  SectionType,
  ViewChild,
  __async,
  __spreadProps,
  __spreadValues,
  __superGet,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-DBFX2V6R.js";

// src/app/template-selector/template-selector.component.ts
function TemplateSelectorComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 18);
    \u0275\u0275domListener("click", function TemplateSelectorComponent_For_5_Template_button_click_0_listener() {
      const font_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectFont(font_r2.family));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const font_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", font_r2.family);
    \u0275\u0275classProp("border-indigo-500", font_r2.family === ctx_r2.currentFont())("bg-indigo-50", font_r2.family === ctx_r2.currentFont())("text-indigo-700", font_r2.family === ctx_r2.currentFont())("border-gray-200", font_r2.family !== ctx_r2.currentFont())("bg-white", font_r2.family !== ctx_r2.currentFont())("hover:border-gray-300", font_r2.family !== ctx_r2.currentFont())("text-gray-700", font_r2.family !== ctx_r2.currentFont());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", font_r2.name, " ");
  }
}
var TemplateSelectorComponent = class _TemplateSelectorComponent {
  dataService = inject(DataService);
  templates = this.dataService.getAvailableTemplates();
  selectedTemplate = this.dataService.getTemplate();
  currentFont = this.dataService.getFont();
  currentFontSize = this.dataService.getFontSize();
  pageMarginV = this.dataService.getPageMarginV();
  pageMarginH = this.dataService.getPageMarginH();
  availableFonts = [
    {
      id: "Arial",
      name: "Arial (Default)",
      family: "Arial, Helvetica, sans-serif"
    },
    { id: "Inter", name: "Inter (Modern)", family: '"Inter", sans-serif' },
    { id: "Roboto", name: "Roboto", family: '"Roboto", sans-serif' },
    { id: "Geist", name: "Geist", family: '"Geist", sans-serif' },
    {
      id: "Merriweather",
      name: "Merriweather (Classic)",
      family: '"Merriweather", serif'
    }
  ];
  selectTemplate(templateId) {
    this.dataService.updateTemplate(templateId);
  }
  selectFont(fontFamily) {
    this.dataService.updateFont(fontFamily);
  }
  onFontSizeChange(event) {
    const val = parseFloat(event.target.value);
    this.dataService.updateFontSize(val);
  }
  onMarginVChange(event) {
    this.dataService.updatePageMarginV(Number(event.target.value));
  }
  onMarginHChange(event) {
    this.dataService.updatePageMarginH(Number(event.target.value));
  }
  static \u0275fac = function TemplateSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemplateSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateSelectorComponent, selectors: [["app-template-selector"]], decls: 55, vars: 6, consts: [[1, "border-gray-100"], [1, "block", "mb-2", "text-sm", "font-bold", "text-gray-700", "uppercase", "tracking-widest"], [1, "flex", "flex-wrap", "gap-3"], ["type", "button", 1, "min-w-[120px]", "px-4", "py-2", "rounded-lg", "border-2", "text-sm", "font-medium", "transition-all", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-300", "focus:ring-offset-1", "text-center", 3, "font-family", "border-indigo-500", "bg-indigo-50", "text-indigo-700", "border-gray-200", "bg-white", "hover:border-gray-300", "text-gray-700"], [1, "text-xs", "text-gray-400", "mt-2", "font-medium"], [1, "mt-5"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-xs", "font-bold", "text-gray-600", "uppercase", "tracking-widest"], [1, "text-xs", "font-mono", "font-bold", "text-indigo-600", "bg-indigo-50", "px-2", "py-0.5", "rounded"], ["type", "range", "min", "7", "max", "13", "step", "0.5", 1, "w-full", "h-2", "bg-gray-200", "rounded-lg", "appearance-none", "cursor-pointer", "accent-indigo-500", 3, "input", "value"], [1, "flex", "justify-between", "text-[10px]", "text-gray-400", "mt-1"], [1, "mt-5", "border-t", "border-gray-100", "pt-4"], [1, "block", "mb-3", "text-xs", "font-bold", "text-gray-600", "uppercase", "tracking-widest"], [1, "mb-3"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "text-xs", "text-gray-500", "font-medium"], ["type", "range", "min", "0", "max", "30", "step", "1", 1, "w-full", "h-2", "bg-gray-200", "rounded-lg", "appearance-none", "cursor-pointer", "accent-indigo-500", 3, "input", "value"], [1, "text-xs", "text-gray-400", "mt-2"], ["type", "button", 1, "min-w-[120px]", "px-4", "py-2", "rounded-lg", "border-2", "text-sm", "font-medium", "transition-all", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-300", "focus:ring-offset-1", "text-center", 3, "click"]], template: function TemplateSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2, "Typography Settings");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2);
      \u0275\u0275repeaterCreate(4, TemplateSelectorComponent_For_5_Template, 2, 17, "button", 3, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7, " Font changes are applied instantly to the right-side preview. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5)(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11, "Font Size");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "input", 9);
      \u0275\u0275domListener("input", function TemplateSelectorComponent_Template_input_input_14_listener($event) {
        return ctx.onFontSizeChange($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "div", 10)(16, "span");
      \u0275\u0275text(17, "7pt (Compact)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "span");
      \u0275\u0275text(19, "10pt (Default)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "span");
      \u0275\u0275text(21, "13pt (Large)");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(22, "div", 11)(23, "label", 12);
      \u0275\u0275text(24, "Print Page Margins");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 13)(26, "div", 14)(27, "span", 15);
      \u0275\u0275text(28, "Vertical (top & bottom)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "span", 8);
      \u0275\u0275text(30);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "input", 16);
      \u0275\u0275domListener("input", function TemplateSelectorComponent_Template_input_input_31_listener($event) {
        return ctx.onMarginVChange($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "div", 10)(33, "span");
      \u0275\u0275text(34, "0mm");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "span");
      \u0275\u0275text(36, "5mm (default)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "span");
      \u0275\u0275text(38, "30mm");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(39, "div")(40, "div", 14)(41, "span", 15);
      \u0275\u0275text(42, "Horizontal (left & right)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "span", 8);
      \u0275\u0275text(44);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(45, "input", 16);
      \u0275\u0275domListener("input", function TemplateSelectorComponent_Template_input_input_45_listener($event) {
        return ctx.onMarginHChange($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "div", 10)(47, "span");
      \u0275\u0275text(48, "0mm");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "span");
      \u0275\u0275text(50, "8mm (default)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "span");
      \u0275\u0275text(52, "30mm");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(53, "p", 17);
      \u0275\u0275text(54, " Margins replace browser-imposed page margins. Set to 0 to use full printable area. ");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.availableFonts);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.currentFontSize(), "pt");
      \u0275\u0275advance();
      \u0275\u0275domProperty("value", ctx.currentFontSize());
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("", ctx.pageMarginV(), "mm");
      \u0275\u0275advance();
      \u0275\u0275domProperty("value", ctx.pageMarginV());
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1("", ctx.pageMarginH(), "mm");
      \u0275\u0275advance();
      \u0275\u0275domProperty("value", ctx.pageMarginH());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-template-selector", standalone: true, imports: [], template: '<!-- Font Selector -->\n<div class="border-gray-100">\n  <label\n    class="block mb-2 text-sm font-bold text-gray-700 uppercase tracking-widest"\n    >Typography Settings</label\n  >\n  <div class="flex flex-wrap gap-3">\n    @for (font of availableFonts; track font) {\n    <button\n      (click)="selectFont(font.family)"\n      type="button"\n      class="min-w-[120px] px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1 text-center"\n      [style.font-family]="font.family"\n      [class.border-indigo-500]="font.family === currentFont()"\n      [class.bg-indigo-50]="font.family === currentFont()"\n      [class.text-indigo-700]="font.family === currentFont()"\n      [class.border-gray-200]="font.family !== currentFont()"\n      [class.bg-white]="font.family !== currentFont()"\n      [class.hover:border-gray-300]="font.family !== currentFont()"\n      [class.text-gray-700]="font.family !== currentFont()"\n    >\n      {{ font.name }}\n    </button>\n    }\n  </div>\n  <p class="text-xs text-gray-400 mt-2 font-medium">\n    Font changes are applied instantly to the right-side preview.\n  </p>\n\n  <!-- Font Size Slider -->\n  <div class="mt-5">\n    <div class="flex items-center justify-between mb-2">\n      <label class="text-xs font-bold text-gray-600 uppercase tracking-widest"\n        >Font Size</label\n      >\n      <span\n        class="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded"\n        >{{ currentFontSize() }}pt</span\n      >\n    </div>\n    <input\n      type="range"\n      min="7"\n      max="13"\n      step="0.5"\n      [value]="currentFontSize()"\n      (input)="onFontSizeChange($event)"\n      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"\n    />\n    <div class="flex justify-between text-[10px] text-gray-400 mt-1">\n      <span>7pt (Compact)</span>\n      <span>10pt (Default)</span>\n      <span>13pt (Large)</span>\n    </div>\n  </div>\n\n  <!-- Page Margin Controls -->\n  <div class="mt-5 border-t border-gray-100 pt-4">\n    <label\n      class="block mb-3 text-xs font-bold text-gray-600 uppercase tracking-widest"\n      >Print Page Margins</label\n    >\n\n    <!-- Vertical margin -->\n    <div class="mb-3">\n      <div class="flex items-center justify-between mb-1.5">\n        <span class="text-xs text-gray-500 font-medium"\n          >Vertical (top &amp; bottom)</span\n        >\n        <span\n          class="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded"\n          >{{ pageMarginV() }}mm</span\n        >\n      </div>\n      <input\n        type="range"\n        min="0"\n        max="30"\n        step="1"\n        [value]="pageMarginV()"\n        (input)="onMarginVChange($event)"\n        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"\n      />\n      <div class="flex justify-between text-[10px] text-gray-400 mt-1">\n        <span>0mm</span><span>5mm (default)</span><span>30mm</span>\n      </div>\n    </div>\n\n    <!-- Horizontal margin -->\n    <div>\n      <div class="flex items-center justify-between mb-1.5">\n        <span class="text-xs text-gray-500 font-medium"\n          >Horizontal (left &amp; right)</span\n        >\n        <span\n          class="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded"\n          >{{ pageMarginH() }}mm</span\n        >\n      </div>\n      <input\n        type="range"\n        min="0"\n        max="30"\n        step="1"\n        [value]="pageMarginH()"\n        (input)="onMarginHChange($event)"\n        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"\n      />\n      <div class="flex justify-between text-[10px] text-gray-400 mt-1">\n        <span>0mm</span><span>8mm (default)</span><span>30mm</span>\n      </div>\n    </div>\n\n    <p class="text-xs text-gray-400 mt-2">\n      Margins replace browser-imposed page margins. Set to 0 to use full\n      printable area.\n    </p>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateSelectorComponent, { className: "TemplateSelectorComponent", filePath: "src/app/template-selector/template-selector.component.ts", lineNumber: 12 });
})();

// src/app/editor/personal-info-editor/personal-info-editor.ts
function PersonalInfoEditorComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoEditorComponent_For_25_Template_input_ngModelChange_1_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(link_r2.preview_name, $event) || (link_r2.preview_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PersonalInfoEditorComponent_For_25_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoEditorComponent_For_25_Template_input_ngModelChange_2_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(link_r2.url, $event) || (link_r2.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PersonalInfoEditorComponent_For_25_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function PersonalInfoEditorComponent_For_25_Template_button_click_3_listener() {
      const \u0275$index_44_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.personalInfo.links.splice(\u0275$index_44_r4, 1);
      return \u0275\u0275resetView(ctx_r2.triggerChange());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 26);
    \u0275\u0275element(5, "path", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", link_r2.preview_name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", link_r2.url);
  }
}
var PersonalInfoEditorComponent = class _PersonalInfoEditorComponent {
  personalInfo;
  dataChange = new EventEmitter();
  currentLink = { preview_name: "", url: "" };
  onAddLink() {
    this.personalInfo.links.push(__spreadValues({}, this.currentLink));
    this.currentLink = { preview_name: "", url: "" };
    this.triggerChange();
  }
  triggerChange() {
    this.dataChange.emit();
  }
  static \u0275fac = function PersonalInfoEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonalInfoEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonalInfoEditorComponent, selectors: [["app-personal-info-editor"]], inputs: { personalInfo: "personalInfo" }, outputs: { dataChange: "dataChange" }, decls: 33, vars: 5, consts: [[1, "mb-14"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "bg-indigo-100", "dark:bg-indigo-900/40", "text-indigo-600", "dark:text-indigo-400", "p-2", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-6", "w-6"], ["fill-rule", "evenodd", "d", "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", "clip-rule", "evenodd"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "p-6", "space-y-5"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5"], [1, "relative"], [1, "text-xs", "font-bold", "text-gray-500", "dark:text-neutral-400", "uppercase", "tracking-wider", "absolute", "top-2", "left-3", "z-10", "pointer-events-none"], ["type", "text", "placeholder", "e.g. John Doe", 1, "w-full", "pt-7", "pb-2", "px-3", "bg-gray-50", "dark:bg-neutral-900", "border-0", "border-b-2", "border-gray-200", "dark:border-neutral-600", "hover:border-gray-300", "dark:hover:border-neutral-500", "focus:border-indigo-500", "focus:ring-0", "rounded-t-lg", "transition-colors", "font-medium", "text-gray-800", "dark:text-neutral-100", "focus:bg-white", "dark:focus:bg-neutral-800", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "john@example.com", 1, "w-full", "pt-7", "pb-2", "px-3", "bg-gray-50", "dark:bg-neutral-900", "border-0", "border-b-2", "border-gray-200", "dark:border-neutral-600", "hover:border-gray-300", "dark:hover:border-neutral-500", "focus:border-indigo-500", "focus:ring-0", "rounded-t-lg", "transition-colors", "font-medium", "text-gray-800", "dark:text-neutral-100", "focus:bg-white", "dark:focus:bg-neutral-800", 3, "ngModelChange", "ngModel"], [1, "relative", "md:col-span-2"], ["type", "text", "placeholder", "+1 (555) 000-0000", 1, "w-full", "pt-7", "pb-2", "px-3", "bg-gray-50", "dark:bg-neutral-900", "border-0", "border-b-2", "border-gray-200", "dark:border-neutral-600", "hover:border-gray-300", "dark:hover:border-neutral-500", "focus:border-indigo-500", "focus:ring-0", "rounded-t-lg", "transition-colors", "font-medium", "text-gray-800", "dark:text-neutral-100", "focus:bg-white", "dark:focus:bg-neutral-800", 3, "ngModelChange", "ngModel"], [1, "pt-4", "mt-2", "border-t", "border-dashed", "border-gray-200", "dark:border-neutral-700"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-neutral-300", "mb-3"], [1, "flex", "gap-3", "mb-3", "relative", "group"], [1, "flex", "gap-3", "items-center", "mt-3", "p-3", "bg-indigo-50/50", "dark:bg-gray-900/20", "rounded-lg", "border", "border-indigo-100", "dark:border-indigo-800/50", "border-dashed", "transition-all", "hover:bg-indigo-50", "dark:hover:bg-indigo-900/30"], ["type", "text", "placeholder", "New Link Label", 1, "w-1/3", "rounded-md", "border-gray-200", "dark:border-neutral-600", "bg-white", "dark:bg-neutral-900", "dark:text-neutral-100", "text-sm", "shadow-sm", "focus:border-indigo-400", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://...", 1, "flex-1", "rounded-md", "border-gray-200", "dark:border-neutral-600", "bg-white", "dark:bg-neutral-900", "dark:text-neutral-100", "text-sm", "shadow-sm", "focus:border-indigo-400", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "px-4", "py-2", "bg-white", "dark:bg-neutral-800", "hover:bg-indigo-600", "hover:text-white", "hover:border-indigo-600", "border", "border-indigo-200", "dark:border-indigo-700", "text-indigo-700", "dark:text-indigo-400", "text-sm", "font-medium", "rounded-md", "shadow-sm", "flex", "items-center", "gap-1", "transition-all", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], ["type", "text", "placeholder", "Label (e.g. LinkedIn)", 1, "w-1/3", "rounded-lg", "border-gray-200", "dark:border-neutral-600", "bg-white", "dark:bg-neutral-900", "dark:text-neutral-100", "text-sm", "shadow-sm", "focus:border-indigo-500", "focus:ring", "focus:ring-indigo-200", "focus:ring-opacity-50", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "URL", 1, "flex-1", "rounded-lg", "border-gray-200", "dark:border-neutral-600", "bg-gray-50", "dark:bg-neutral-900", "text-indigo-600", "dark:text-indigo-400", "font-mono", "text-sm", "shadow-sm", "focus:border-indigo-500", "focus:ring", "focus:ring-indigo-200", "focus:ring-opacity-50", 3, "ngModelChange", "ngModel"], ["type", "button", "title", "Remove Link", 1, "absolute", "-right-8", "top-2", "text-gray-300", "dark:text-neutral-600", "hover:text-red-500", "transition-colors", "opacity-0", "group-hover:opacity-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"]], template: function PersonalInfoEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h2", 5);
      \u0275\u0275text(6, " Personal Information ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9);
      \u0275\u0275text(11, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personalInfo.name, $event) || (ctx.personalInfo.name = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_12_listener() {
        return ctx.triggerChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
      \u0275\u0275text(15, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personalInfo.email, $event) || (ctx.personalInfo.email = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_16_listener() {
        return ctx.triggerChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 9);
      \u0275\u0275text(19, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personalInfo.phone, $event) || (ctx.personalInfo.phone = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_20_listener() {
        return ctx.triggerChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 14)(22, "label", 15);
      \u0275\u0275text(23, "Social & Web Links");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(24, PersonalInfoEditorComponent_For_25_Template, 6, 2, "div", 16, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(26, "div", 17)(27, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.currentLink.preview_name, $event) || (ctx.currentLink.preview_name = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoEditorComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.currentLink.url, $event) || (ctx.currentLink.url = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 20);
      \u0275\u0275listener("click", function PersonalInfoEditorComponent_Template_button_click_29_listener() {
        return ctx.onAddLink();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 21);
      \u0275\u0275element(31, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " + Add ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.personalInfo.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.personalInfo.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.personalInfo.phone);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.personalInfo.links);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentLink.preview_name);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.currentLink.url);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalInfoEditorComponent, [{
    type: Component,
    args: [{ selector: "app-personal-info-editor", standalone: true, imports: [FormsModule], template: '<section class="mb-14">\n  <div class="flex items-center gap-3 mb-6">\n    <div\n      class="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 p-2 rounded-lg"\n    >\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        class="h-6 w-6"\n        viewBox="0 0 20 20"\n        fill="currentColor"\n      >\n        <path\n          fill-rule="evenodd"\n          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"\n          clip-rule="evenodd"\n        />\n      </svg>\n    </div>\n    <h2 class="text-2xl font-bold text-gray-900 dark:text-neutral-50">\n      Personal Information\n    </h2>\n  </div>\n\n  <div\n    class="bg-white dark:bg-neutral-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-neutral-700 p-6 space-y-5"\n  >\n    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">\n      <div class="relative">\n        <label\n          class="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider absolute top-2 left-3 z-10 pointer-events-none"\n          >Full Name</label\n        >\n        <input\n          type="text"\n          [(ngModel)]="personalInfo.name"\n          (ngModelChange)="triggerChange()"\n          placeholder="e.g. John Doe"\n          class="w-full pt-7 pb-2 px-3 bg-gray-50 dark:bg-neutral-900 border-0 border-b-2 border-gray-200 dark:border-neutral-600 hover:border-gray-300 dark:hover:border-neutral-500 focus:border-indigo-500 focus:ring-0 rounded-t-lg transition-colors font-medium text-gray-800 dark:text-neutral-100 focus:bg-white dark:focus:bg-neutral-800"\n        />\n      </div>\n      <div class="relative">\n        <label\n          class="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider absolute top-2 left-3 z-10 pointer-events-none"\n          >Email Address</label\n        >\n        <input\n          type="text"\n          [(ngModel)]="personalInfo.email"\n          (ngModelChange)="triggerChange()"\n          placeholder="john@example.com"\n          class="w-full pt-7 pb-2 px-3 bg-gray-50 dark:bg-neutral-900 border-0 border-b-2 border-gray-200 dark:border-neutral-600 hover:border-gray-300 dark:hover:border-neutral-500 focus:border-indigo-500 focus:ring-0 rounded-t-lg transition-colors font-medium text-gray-800 dark:text-neutral-100 focus:bg-white dark:focus:bg-neutral-800"\n        />\n      </div>\n      <div class="relative md:col-span-2">\n        <label\n          class="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider absolute top-2 left-3 z-10 pointer-events-none"\n          >Phone Number</label\n        >\n        <input\n          type="text"\n          [(ngModel)]="personalInfo.phone"\n          (ngModelChange)="triggerChange()"\n          placeholder="+1 (555) 000-0000"\n          class="w-full pt-7 pb-2 px-3 bg-gray-50 dark:bg-neutral-900 border-0 border-b-2 border-gray-200 dark:border-neutral-600 hover:border-gray-300 dark:hover:border-neutral-500 focus:border-indigo-500 focus:ring-0 rounded-t-lg transition-colors font-medium text-gray-800 dark:text-neutral-100 focus:bg-white dark:focus:bg-neutral-800"\n        />\n      </div>\n    </div>\n\n    <div\n      class="pt-4 mt-2 border-t border-dashed border-gray-200 dark:border-neutral-700"\n    >\n      <label\n        class="block text-sm font-semibold text-gray-700 dark:text-neutral-300 mb-3"\n        >Social & Web Links</label\n      >\n\n      @for (link of personalInfo.links; track link; let i = $index) {\n      <div class="flex gap-3 mb-3 relative group">\n        <input\n          type="text"\n          placeholder="Label (e.g. LinkedIn)"\n          [(ngModel)]="link.preview_name"\n          (ngModelChange)="triggerChange()"\n          class="w-1/3 rounded-lg border-gray-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 dark:text-neutral-100 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"\n        />\n        <input\n          type="url"\n          placeholder="URL"\n          [(ngModel)]="link.url"\n          (ngModelChange)="triggerChange()"\n          class="flex-1 rounded-lg border-gray-200 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 font-mono text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"\n        />\n        <button\n          type="button"\n          (click)="personalInfo.links.splice(i, 1); triggerChange()"\n          class="absolute -right-8 top-2 text-gray-300 dark:text-neutral-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"\n          title="Remove Link"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="h-5 w-5"\n            viewBox="0 0 20 20"\n            fill="currentColor"\n          >\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"\n              clip-rule="evenodd"\n            />\n          </svg>\n        </button>\n      </div>\n      }\n\n      <div\n        class="flex gap-3 items-center mt-3 p-3 bg-indigo-50/50 dark:bg-gray-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800/50 border-dashed transition-all hover:bg-indigo-50 dark:hover:bg-indigo-900/30"\n      >\n        <input\n          type="text"\n          placeholder="New Link Label"\n          [(ngModel)]="currentLink.preview_name"\n          class="w-1/3 rounded-md border-gray-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 dark:text-neutral-100 text-sm shadow-sm focus:border-indigo-400 transition-colors"\n        />\n        <input\n          type="url"\n          placeholder="https://..."\n          [(ngModel)]="currentLink.url"\n          class="flex-1 rounded-md border-gray-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 dark:text-neutral-100 text-sm shadow-sm focus:border-indigo-400 transition-colors"\n        />\n        <button\n          (click)="onAddLink()"\n          class="px-4 py-2 bg-white dark:bg-neutral-800 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 text-sm font-medium rounded-md shadow-sm flex items-center gap-1 transition-all"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="h-4 w-4"\n            viewBox="0 0 20 20"\n            fill="currentColor"\n          >\n            <path\n              fill-rule="evenodd"\n              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          + Add\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n' }]
  }], null, { personalInfo: [{
    type: Input
  }], dataChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonalInfoEditorComponent, { className: "PersonalInfoEditorComponent", filePath: "src/app/editor/personal-info-editor/personal-info-editor.ts", lineNumber: 12 });
})();

// src/app/editor/skills-editor/skills-editor.ts
function SkillsEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function SkillsEditorComponent_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.labelDraft, $event) || (ctx_r1.labelDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function SkillsEditorComponent_Conditional_6_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.enter", function SkillsEditorComponent_Conditional_6_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.escape", function SkillsEditorComponent_Conditional_6_Template_input_keyup_escape_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editingLabel.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.labelDraft);
  }
}
function SkillsEditorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 15);
    \u0275\u0275listener("click", function SkillsEditorComponent_Conditional_7_Template_h2_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRename());
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSectionLabel(), " ");
  }
}
function SkillsEditorComponent_For_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 29)(2, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function SkillsEditorComponent_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 31)(2, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function SkillsEditorComponent_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function SkillsEditorComponent_For_14_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "path", 29)(2, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function SkillsEditorComponent_For_14_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "path", 31)(2, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function SkillsEditorComponent_For_14_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 34);
    \u0275\u0275listener("click", function SkillsEditorComponent_For_14_For_12_Template_button_click_1_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(s_r8.id));
    });
    \u0275\u0275conditionalCreate(2, SkillsEditorComponent_For_14_For_12_Conditional_2_Template, 3, 0, ":svg:svg", 35);
    \u0275\u0275conditionalCreate(3, SkillsEditorComponent_For_14_For_12_Conditional_3_Template, 3, 0, ":svg:svg", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SkillsEditorComponent_For_14_For_12_Template_input_ngModelChange_4_listener($event) {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(s_r8.text, $event) || (s_r8.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SkillsEditorComponent_For_14_For_12_Template_input_ngModelChange_4_listener() {
      const \u0275$index_68_r9 = \u0275\u0275restoreView(_r7).$index;
      const \u0275$index_33_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("skill_" + \u0275$index_33_r5 + "_" + \u0275$index_68_r9));
    })("paste", function SkillsEditorComponent_For_14_For_12_Template_input_paste_4_listener($event) {
      const \u0275$index_68_r9 = \u0275\u0275restoreView(_r7).$index;
      const skill_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSkillPaste(skill_r6, \u0275$index_68_r9, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function SkillsEditorComponent_For_14_For_12_Template_button_click_5_listener() {
      const \u0275$index_68_r9 = \u0275\u0275restoreView(_r7).$index;
      const skill_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSkillItem(skill_r6, \u0275$index_68_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 35);
    \u0275\u0275element(7, "path", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(s_r8.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-emerald-500", ctx_r1.isActive(s_r8.id))("text-gray-300", !ctx_r1.isActive(s_r8.id));
    \u0275\u0275property("title", ctx_r1.isActive(s_r8.id) ? "Hide from this profile" : "Show in this profile");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(s_r8.id) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(s_r8.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", s_r8.text.length > 5 ? s_r8.text.length : 5, "ch");
    \u0275\u0275twoWayProperty("ngModel", s_r8.text);
  }
}
function SkillsEditorComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function SkillsEditorComponent_For_14_Template_button_click_1_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSection(\u0275$index_33_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 20);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 22)(5, "button", 23);
    \u0275\u0275listener("click", function SkillsEditorComponent_For_14_Template_button_click_5_listener() {
      const skill_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleActive(skill_r6.id));
    });
    \u0275\u0275conditionalCreate(6, SkillsEditorComponent_For_14_Conditional_6_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275conditionalCreate(7, SkillsEditorComponent_For_14_Conditional_7_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SkillsEditorComponent_For_14_Conditional_8_Template, 2, 0, "span", 24);
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SkillsEditorComponent_For_14_Template_input_ngModelChange_9_listener($event) {
      const skill_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(skill_r6.skill_type, $event) || (skill_r6.skill_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SkillsEditorComponent_For_14_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26);
    \u0275\u0275repeaterCreate(11, SkillsEditorComponent_For_14_For_12_Template, 8, 12, "div", 27, \u0275\u0275componentInstance().trackByIndex, true);
    \u0275\u0275elementStart(13, "button", 28);
    \u0275\u0275listener("click", function SkillsEditorComponent_For_14_Template_button_click_13_listener() {
      const skill_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSkillItem(skill_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 9);
    \u0275\u0275element(15, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Add ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(skill_r6.id));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-emerald-500", ctx_r1.isActive(skill_r6.id))("text-gray-300", !ctx_r1.isActive(skill_r6.id));
    \u0275\u0275property("title", ctx_r1.isActive(skill_r6.id) ? "Hide from this profile" : "Show in this profile");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(skill_r6.id) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(skill_r6.id) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(skill_r6.id) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", skill_r6.skill_type);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(skill_r6.skills);
  }
}
function SkillsEditorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 39);
    \u0275\u0275text(2, " No skill categories added. Add one to get started. ");
    \u0275\u0275elementEnd()();
  }
}
var SkillsEditorComponent = class _SkillsEditorComponent {
  dataService = inject(DataService);
  skills;
  dataChange = new EventEmitter();
  // Section renaming
  sectionType = SectionType.SKILLS;
  editingLabel = signal(false, ...ngDevMode ? [{ debugName: "editingLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  labelDraft = "";
  getSectionLabel() {
    return this.dataService.getSectionLabel(this.sectionType);
  }
  startRename() {
    this.labelDraft = this.getSectionLabel();
    this.editingLabel.set(true);
  }
  commitRename() {
    this.dataService.setSectionLabel(this.sectionType, this.labelDraft);
    this.editingLabel.set(false);
  }
  trackByIndex(index, item) {
    return index;
  }
  genId() {
    return crypto.randomUUID();
  }
  isActive(id) {
    return this.dataService.isActive(id);
  }
  toggleActive(id) {
    this.dataService.toggleActive(id);
  }
  onAddSkillSection() {
    this.skills.push({ id: this.genId(), skill_type: "", skills: [] });
    this.triggerChange();
  }
  addSkillItem(skill) {
    if (!skill.skills)
      skill.skills = [];
    skill.skills.push({ id: this.genId(), text: "" });
    this.triggerChange();
  }
  removeSkillItem(skill, index) {
    if (!skill.skills)
      return;
    skill.skills.splice(index, 1);
    this.triggerChange();
  }
  removeSection(index) {
    this.skills.splice(index, 1);
    this.triggerChange();
  }
  onSkillPaste(skill, index, event) {
    const text = event.clipboardData?.getData("text");
    if (!text)
      return;
    if (text.includes("\n") || text.includes(",")) {
      event.preventDefault();
      const items = text.split(/[\n,]+/).map((s) => s.trim()).filter((s) => s);
      if (items.length > 0) {
        if (!skill.skills)
          skill.skills = [];
        skill.skills[index].text = items[0];
        for (let i = 1; i < items.length; i++) {
          skill.skills.splice(index + i, 0, {
            id: this.genId(),
            text: items[i]
          });
        }
        this.triggerChange();
      }
    }
  }
  focusTimeouts = {};
  updateWithoutLosingFocus(fieldId) {
    if (this.focusTimeouts[fieldId]) {
      clearTimeout(this.focusTimeouts[fieldId]);
    }
    this.focusTimeouts[fieldId] = setTimeout(() => {
      this.triggerChange();
      this.focusTimeouts[fieldId] = null;
    }, 1500);
  }
  triggerChange() {
    this.dataChange.emit();
  }
  static \u0275fac = function SkillsEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillsEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsEditorComponent, selectors: [["app-skills-editor"]], inputs: { skills: "skills" }, outputs: { dataChange: "dataChange" }, decls: 16, vars: 3, consts: [[1, "mb-14"], [1, "flex", "justify-between", "items-end", "mb-6"], [1, "flex", "items-center", "gap-3"], [1, "bg-emerald-100", "text-emerald-600", "p-2", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-6", "w-6"], ["fill-rule", "evenodd", "d", "M11.3 1.046A120.1 120.1 0 0010 1c-1.1 0-2.186.046-3.3.138A2 2 0 005.105 3H5a2 2 0 00-2 2v9a2 2 0 002 2h.105a2 2 0 001.595 1.862c1.114.092 2.2.138 3.3.138 1.1 0 2.186-.046 3.3-.138A2 2 0 0014.895 16H15a2 2 0 002-2V5a2 2 0 00-2-2h-.105a2 2 0 00-1.595-1.862A120.1 120.1 0 0011.3 1.046zM10 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1zM7.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8a1 1 0 10-2 0v3.586l-1.293-1.293z", "clip-rule", "evenodd"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5"], [1, "text-sm", "font-semibold", "text-emerald-600", "hover:text-emerald-700", "bg-emerald-50", "hover:bg-emerald-100", "border", "border-emerald-100", "hover:border-emerald-200", "px-4", "py-2", "rounded-full", "transition-colors", "flex", "items-center", "gap-1.5", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "space-y-4"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-emerald-50", "dark:border-neutral-700", "p-5", "relative", "group", "transition-all", "hover:border-emerald-100", 3, "opacity-40"], [1, "text-center", "py-10", "bg-gray-50", "dark:bg-neutral-900", "rounded-xl", "border", "border-dashed", "border-gray-200"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModelChange", "blur", "keyup.enter", "keyup.escape", "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5", "text-gray-300", "group-hover:text-indigo-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-emerald-50", "dark:border-neutral-700", "p-5", "relative", "group", "transition-all", "hover:border-emerald-100"], ["title", "Delete Category", 1, "absolute", "right-4", "top-4", "text-gray-300", "hover:text-red-500", "opacity-0", "group-hover:opacity-100", "transition-opacity", "p-1", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "mb-4", "pr-10", "flex", "items-center", "gap-2"], [1, "shrink-0", "p-1", "rounded-lg", "transition-colors", 3, "click", "title"], [1, "text-[9px]", "font-black", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "bg-gray-100", "px-1.5", "py-0.5", "rounded-full", "shrink-0"], ["type", "text", "placeholder", "Category Name (e.g. Languages)", 1, "flex-1", "text-lg", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-transparent", "hover:border-gray-200", "dark:border-neutral-600", "focus:border-emerald-500", "focus:ring-0", "px-1", "py-1", "transition-colors", "bg-transparent", "placeholder-gray-300", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-wrap", "gap-2", "mt-3"], [1, "flex", "items-center", "gap-1.5", "bg-emerald-50/50", "dark:bg-emerald-900/10", "border", "border-emerald-100", "dark:border-emerald-700", "rounded-lg", "px-2.5", "py-1.5", "focus-within:ring-2", "focus-within:ring-emerald-300", "transition-colors", "group/skill", 3, "opacity-40"], [1, "text-sm", "text-emerald-600", "font-medium", "px-2", "py-1.5", "hover:bg-emerald-50", "rounded-lg", "transition-colors", "flex", "items-center", "gap-1", "border", "border-transparent", "shadow-sm", 3, "click"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z", "clip-rule", "evenodd"], ["d", "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"], [1, "flex", "items-center", "gap-1.5", "bg-emerald-50/50", "dark:bg-emerald-900/10", "border", "border-emerald-100", "dark:border-emerald-700", "rounded-lg", "px-2.5", "py-1.5", "focus-within:ring-2", "focus-within:ring-emerald-300", "transition-colors", "group/skill"], [1, "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], ["type", "text", "placeholder", "Skill", 1, "bg-transparent", "border-0", "p-0", "text-sm", "font-semibold", "text-emerald-900", "focus:ring-0", "min-w-[40px]", "max-w-[200px]", 3, "ngModelChange", "paste", "ngModel"], [1, "text-emerald-300", "hover:text-red-500", "opacity-0", "group-hover/skill:opacity-100", "transition-opacity", 3, "click"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "text-gray-400", "dark:text-neutral-500", "font-medium"]], template: function SkillsEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, SkillsEditorComponent_Conditional_6_Template, 1, 1, "input", 6);
      \u0275\u0275conditionalCreate(7, SkillsEditorComponent_Conditional_7_Template, 4, 1, "h2", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "button", 8);
      \u0275\u0275listener("click", function SkillsEditorComponent_Template_button_click_8_listener() {
        return ctx.onAddSkillSection();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Add Category ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275repeaterCreate(13, SkillsEditorComponent_For_14_Template, 17, 11, "div", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(15, SkillsEditorComponent_Conditional_15_Template, 3, 0, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.editingLabel() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editingLabel() ? 7 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.skills);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.skills.length === 0 ? 15 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillsEditorComponent, [{
    type: Component,
    args: [{ selector: "app-skills-editor", standalone: true, imports: [FormsModule], template: `<section class="mb-14">
  <div class="flex justify-between items-end mb-6">
    <div class="flex items-center gap-3">
      <div class="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A120.1 120.1 0 0010 1c-1.1 0-2.186.046-3.3.138A2 2 0 005.105 3H5a2 2 0 00-2 2v9a2 2 0 002 2h.105a2 2 0 001.595 1.862c1.114.092 2.2.138 3.3.138 1.1 0 2.186-.046 3.3-.138A2 2 0 0014.895 16H15a2 2 0 002-2V5a2 2 0 00-2-2h-.105a2 2 0 00-1.595-1.862A120.1 120.1 0 0011.3 1.046zM10 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1zM7.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8a1 1 0 10-2 0v3.586l-1.293-1.293z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- Inline rename: click title to edit -->
      @if (editingLabel()) {
      <input
        type="text"
        [(ngModel)]="labelDraft"
        (blur)="commitRename()"
        (keyup.enter)="commitRename()"
        (keyup.escape)="editingLabel.set(false)"
        autofocus
        class="text-2xl font-bold text-gray-900 border-0 border-b-2 border-indigo-400 focus:ring-0 bg-transparent outline-none px-0 py-0.5 w-48"
      />
      } @if (!editingLabel()) {
      <h2
        class="text-2xl font-bold text-gray-900 dark:text-neutral-50 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group flex items-center gap-1.5"
        (click)="startRename()"
        title="Click to rename section"
      >
        {{ getSectionLabel() }}
        <svg
          class="h-3.5 w-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </h2>
      }
    </div>
    <button
      (click)="onAddSkillSection()"
      class="text-sm font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 hover:border-emerald-200 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      Add Category
    </button>
  </div>

  <div class="space-y-4">
    @for (skill of skills; track skill; let i = $index) {
    <div
      class="bg-white dark:bg-neutral-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.04)] dark:shadow-none border border-emerald-50 dark:border-neutral-700 p-5 relative group transition-all hover:border-emerald-100"
      [class.opacity-40]="!isActive(skill.id)"
    >
      <!-- Delete -->
      <button
        (click)="removeSection(i)"
        class="absolute right-4 top-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
        title="Delete Category"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="mb-4 pr-10 flex items-center gap-2">
        <button
          (click)="toggleActive(skill.id)"
          class="shrink-0 p-1 rounded-lg transition-colors"
          [class.text-emerald-500]="isActive(skill.id)"
          [class.text-gray-300]="!isActive(skill.id)"
          [title]="isActive(skill.id) ? 'Hide from this profile' : 'Show in this profile'"
        >
          @if (isActive(skill.id)) {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
          } @if (!isActive(skill.id)) {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
              clip-rule="evenodd"
            />
            <path
              d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
            />
          </svg>
          }
        </button>
        @if (!isActive(skill.id)) {
        <span
          class="text-[9px] font-black text-gray-400 dark:text-neutral-500 uppercase tracking-widest bg-gray-100 px-1.5 py-0.5 rounded-full shrink-0"
          >Inactive</span
        >
        }
        <input
          type="text"
          [(ngModel)]="skill.skill_type"
          (ngModelChange)="triggerChange()"
          placeholder="Category Name (e.g. Languages)"
          class="flex-1 text-lg font-bold text-gray-900 border-0 border-b-2 border-transparent hover:border-gray-200 dark:border-neutral-600 focus:border-emerald-500 focus:ring-0 px-1 py-1 transition-colors bg-transparent placeholder-gray-300"
        />
      </div>
      <div class="flex flex-wrap gap-2 mt-3">
        @for (s of skill.skills; track trackByIndex(j, s); let j = $index) {
        <div
          class="flex items-center gap-1.5 bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-700 rounded-lg px-2.5 py-1.5 focus-within:ring-2 focus-within:ring-emerald-300 transition-colors group/skill"
          [class.opacity-40]="!isActive(s.id)"
        >
          <!-- Eye Toggle -->
          <button
            (click)="toggleActive(s.id)"
            class="shrink-0 p-0.5 rounded transition-colors"
            [class.text-emerald-500]="isActive(s.id)"
            [class.text-gray-300]="!isActive(s.id)"
            [title]="isActive(s.id) ? 'Hide from this profile' : 'Show in this profile'"
          >
            @if (isActive(s.id)) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
            } @if (!isActive(s.id)) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                clip-rule="evenodd"
              />
              <path
                d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
              />
            </svg>
            }
          </button>
          <!-- Skill Text Input with paste handler -->
          <input
            type="text"
            [(ngModel)]="s.text"
            (ngModelChange)="updateWithoutLosingFocus('skill_'+i+'_'+j)"
            (paste)="onSkillPaste(skill, j, $event)"
            placeholder="Skill"
            class="bg-transparent border-0 p-0 text-sm font-semibold text-emerald-900 focus:ring-0 min-w-[40px] max-w-[200px]"
            [style.width.ch]="s.text.length > 5 ? s.text.length : 5"
          />
          <!-- Delete bullet -->
          <button
            (click)="removeSkillItem(skill, j)"
            class="text-emerald-300 hover:text-red-500 opacity-0 group-hover/skill:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        }
        <button
          (click)="addSkillItem(skill)"
          class="text-sm text-emerald-600 font-medium px-2 py-1.5 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1 border border-transparent shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          Add
        </button>
      </div>
    </div>
    } @if (skills.length === 0) {
    <div
      class="text-center py-10 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-dashed border-gray-200"
    >
      <p class="text-gray-400 dark:text-neutral-500 font-medium">
        No skill categories added. Add one to get started.
      </p>
    </div>
    }
  </div>
</section>
` }]
  }], null, { skills: [{
    type: Input
  }], dataChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsEditorComponent, { className: "SkillsEditorComponent", filePath: "src/app/editor/skills-editor/skills-editor.ts", lineNumber: 20 });
})();

// src/app/editor/experience-editor/experience-editor.ts
var _c0 = (a0, a1) => ({ "text-gray-400 dark:text-neutral-500": a0, "text-amber-500 font-medium": a1 });
function ExperienceEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ExperienceEditorComponent_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.labelDraft, $event) || (ctx_r1.labelDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function ExperienceEditorComponent_Conditional_6_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.enter", function ExperienceEditorComponent_Conditional_6_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.escape", function ExperienceEditorComponent_Conditional_6_Template_input_keyup_escape_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editingLabel.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.labelDraft);
  }
}
function ExperienceEditorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 15);
    \u0275\u0275listener("click", function ExperienceEditorComponent_Conditional_7_Template_h2_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRename());
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSectionLabel(), " ");
  }
}
function ExperienceEditorComponent_For_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 46)(2, "path", 47);
    \u0275\u0275elementEnd();
  }
}
function ExperienceEditorComponent_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 48)(2, "path", 49);
    \u0275\u0275elementEnd();
  }
}
function ExperienceEditorComponent_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function ExperienceEditorComponent_For_14_For_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 46)(2, "path", 47);
    \u0275\u0275elementEnd();
  }
}
function ExperienceEditorComponent_For_14_For_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 48)(2, "path", 49);
    \u0275\u0275elementEnd();
  }
}
function ExperienceEditorComponent_For_14_For_38_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "\u26A0\uFE0F Too long.");
    \u0275\u0275elementEnd();
  }
}
function ExperienceEditorComponent_For_14_For_38_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "\u26A0\uFE0F Too short.");
    \u0275\u0275elementEnd();
  }
}
function ExperienceEditorComponent_For_14_For_38_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, ExperienceEditorComponent_For_14_For_38_Conditional_6_Conditional_3_Template, 2, 0, "span", 58);
    \u0275\u0275conditionalCreate(4, ExperienceEditorComponent_For_14_For_38_Conditional_6_Conditional_4_Template, 2, 0, "span", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_116_r9 = \u0275\u0275nextContext().$index;
    const experience_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c0, ctx_r1.getWordCount(experience_r6.descriptions[\u0275$index_116_r9].text) >= 5 && ctx_r1.getWordCount(experience_r6.descriptions[\u0275$index_116_r9].text) <= 40, ctx_r1.getWordCount(experience_r6.descriptions[\u0275$index_116_r9].text) > 40 || ctx_r1.getWordCount(experience_r6.descriptions[\u0275$index_116_r9].text) < 5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getWordCount(experience_r6.descriptions[\u0275$index_116_r9].text), " words ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getWordCount(experience_r6.descriptions[\u0275$index_116_r9].text) > 40 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getWordCount(experience_r6.descriptions[\u0275$index_116_r9].text) < 5 ? 4 : -1);
  }
}
function ExperienceEditorComponent_For_14_For_38_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ExperienceEditorComponent_For_14_For_38_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_116_r9 = \u0275\u0275nextContext().$index;
      const experience_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemoveExperienceDescription(experience_r6, \u0275$index_116_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 61);
    \u0275\u0275elementEnd()();
  }
}
function ExperienceEditorComponent_For_14_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "button", 51);
    \u0275\u0275listener("click", function ExperienceEditorComponent_For_14_For_38_Template_button_click_1_listener() {
      const description_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(description_r8.id));
    });
    \u0275\u0275conditionalCreate(2, ExperienceEditorComponent_For_14_For_38_Conditional_2_Template, 3, 0, ":svg:svg", 52);
    \u0275\u0275conditionalCreate(3, ExperienceEditorComponent_For_14_For_38_Conditional_3_Template, 3, 0, ":svg:svg", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "textarea", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ExperienceEditorComponent_For_14_For_38_Template_textarea_ngModelChange_5_listener($event) {
      const \u0275$index_116_r9 = \u0275\u0275restoreView(_r7).$index;
      const experience_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(experience_r6.descriptions[\u0275$index_116_r9].text, $event) || (experience_r6.descriptions[\u0275$index_116_r9].text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExperienceEditorComponent_For_14_For_38_Template_textarea_ngModelChange_5_listener() {
      const \u0275$index_116_r9 = \u0275\u0275restoreView(_r7).$index;
      const \u0275$index_33_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("exp_" + \u0275$index_33_r5 + "_desc_" + \u0275$index_116_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ExperienceEditorComponent_For_14_For_38_Conditional_6_Template, 5, 7, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExperienceEditorComponent_For_14_For_38_Conditional_7_Template, 3, 0, "button", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const description_r8 = ctx.$implicit;
    const \u0275$index_116_r9 = ctx.$index;
    const experience_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(description_r8.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-blue-400", ctx_r1.isActive(description_r8.id))("text-gray-300", !ctx_r1.isActive(description_r8.id));
    \u0275\u0275property("title", ctx_r1.isActive(description_r8.id) ? "Hide bullet" : "Show bullet");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(description_r8.id) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(description_r8.id) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", experience_r6.descriptions[\u0275$index_116_r9].text);
    \u0275\u0275advance();
    \u0275\u0275conditional(experience_r6.descriptions[\u0275$index_116_r9].text ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(experience_r6.descriptions.length > 0 ? 7 : -1);
  }
}
function ExperienceEditorComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "button", 20);
    \u0275\u0275listener("click", function ExperienceEditorComponent_For_14_Template_button_click_2_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.experiences, \u0275$index_33_r5, -1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 21);
    \u0275\u0275element(4, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function ExperienceEditorComponent_For_14_Template_button_click_5_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.experiences, \u0275$index_33_r5, 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 21);
    \u0275\u0275element(7, "path", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 25);
    \u0275\u0275listener("click", function ExperienceEditorComponent_For_14_Template_button_click_8_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSection(\u0275$index_33_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 26);
    \u0275\u0275element(10, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 28)(12, "div", 29)(13, "div", 30)(14, "button", 31);
    \u0275\u0275listener("click", function ExperienceEditorComponent_For_14_Template_button_click_14_listener() {
      const experience_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleActive(experience_r6.id));
    });
    \u0275\u0275conditionalCreate(15, ExperienceEditorComponent_For_14_Conditional_15_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275conditionalCreate(16, ExperienceEditorComponent_For_14_Conditional_16_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, ExperienceEditorComponent_For_14_Conditional_17_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_18_listener($event) {
      const experience_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(experience_r6.position, $event) || (experience_r6.position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_18_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("exp_pos_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_19_listener($event) {
      const experience_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(experience_r6.company, $event) || (experience_r6.company = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_19_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("exp_comp_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 35)(21, "div")(22, "label", 36);
    \u0275\u0275text(23, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_24_listener($event) {
      const experience_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(experience_r6.start_date, $event) || (experience_r6.start_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_24_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("exp_start_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 36);
    \u0275\u0275text(27, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_28_listener($event) {
      const experience_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(experience_r6.end_date, $event) || (experience_r6.end_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_28_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("exp_end_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 39)(30, "label", 36);
    \u0275\u0275text(31, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_32_listener($event) {
      const experience_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(experience_r6.location, $event) || (experience_r6.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExperienceEditorComponent_For_14_Template_input_ngModelChange_32_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("exp_loc_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 41)(34, "label", 42);
    \u0275\u0275text(35, "Key Responsibilities & Achievements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 43);
    \u0275\u0275repeaterCreate(37, ExperienceEditorComponent_For_14_For_38_Template, 8, 12, "div", 44, \u0275\u0275componentInstance().trackByIndex, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 45);
    \u0275\u0275listener("click", function ExperienceEditorComponent_For_14_Template_button_click_39_listener() {
      const experience_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddExperienceDescription(experience_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 9);
    \u0275\u0275element(41, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Add Bullet Point ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const experience_r6 = ctx.$implicit;
    const \u0275$index_33_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(experience_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === ctx_r1.experiences.length - 1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("text-blue-500", ctx_r1.isActive(experience_r6.id))("text-gray-300", !ctx_r1.isActive(experience_r6.id));
    \u0275\u0275property("title", ctx_r1.isActive(experience_r6.id) ? "Hide from this profile" : "Show in this profile");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(experience_r6.id) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(experience_r6.id) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(experience_r6.id) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", experience_r6.position);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", experience_r6.company);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", experience_r6.start_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", experience_r6.end_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", experience_r6.location);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(experience_r6.descriptions);
  }
}
function ExperienceEditorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 62);
    \u0275\u0275text(2, " No experience mapped yet. Adding your history helps the AI optimizer. ");
    \u0275\u0275elementEnd()();
  }
}
var ExperienceEditorComponent = class _ExperienceEditorComponent {
  dataService = inject(DataService);
  experiences;
  dataChange = new EventEmitter();
  // Section renaming
  sectionType = SectionType.EXPERIENCE;
  editingLabel = signal(false, ...ngDevMode ? [{ debugName: "editingLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  labelDraft = "";
  getSectionLabel() {
    return this.dataService.getSectionLabel(this.sectionType);
  }
  startRename() {
    this.labelDraft = this.getSectionLabel();
    this.editingLabel.set(true);
  }
  commitRename() {
    this.dataService.setSectionLabel(this.sectionType, this.labelDraft);
    this.editingLabel.set(false);
  }
  getWordCount(text) {
    if (!text)
      return 0;
    return text.trim().split(/\s+/).filter((w) => w.length > 0).length;
  }
  trackByIndex(index, item) {
    return index;
  }
  genId() {
    return crypto.randomUUID();
  }
  isActive(id) {
    return this.dataService.isActive(id);
  }
  toggleActive(id) {
    this.dataService.toggleActive(id);
  }
  moveSectionItem(arr, index, direction) {
    const target = index + direction;
    if (target < 0 || target >= arr.length)
      return;
    [arr[index], arr[target]] = [arr[target], arr[index]];
    this.triggerChange();
  }
  onAddExperience() {
    this.experiences.push({
      id: this.genId(),
      company: "",
      position: "",
      location: "",
      start_date: "",
      end_date: "",
      descriptions: [{ id: this.genId(), text: "" }]
    });
    this.triggerChange();
  }
  removeSection(index) {
    this.experiences.splice(index, 1);
    this.triggerChange();
  }
  onAddExperienceDescription(exp) {
    exp.descriptions.push({ id: this.genId(), text: "" });
    this.triggerChange();
  }
  onRemoveExperienceDescription(exp, index) {
    exp.descriptions.splice(index, 1);
    this.triggerChange();
  }
  focusTimeouts = {};
  updateWithoutLosingFocus(fieldId) {
    if (this.focusTimeouts[fieldId]) {
      clearTimeout(this.focusTimeouts[fieldId]);
    }
    this.focusTimeouts[fieldId] = setTimeout(() => {
      this.triggerChange();
      this.focusTimeouts[fieldId] = null;
    }, 1500);
  }
  triggerChange() {
    this.dataChange.emit();
  }
  static \u0275fac = function ExperienceEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienceEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceEditorComponent, selectors: [["app-experience-editor"]], inputs: { experiences: "experiences" }, outputs: { dataChange: "dataChange" }, decls: 16, vars: 3, consts: [[1, "mb-14"], [1, "flex", "justify-between", "items-end", "mb-6"], [1, "flex", "items-center", "gap-3"], [1, "bg-blue-100", "text-blue-600", "p-2", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-6", "w-6"], ["fill-rule", "evenodd", "d", "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", "clip-rule", "evenodd"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-blue-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "cursor-pointer", "hover:text-blue-600", "transition-colors", "group", "flex", "items-center", "gap-1.5"], [1, "text-sm", "font-semibold", "text-blue-600", "hover:text-blue-700", "bg-blue-50", "hover:bg-blue-100", "border", "border-blue-100", "hover:border-blue-200", "px-4", "py-2", "rounded-full", "transition-colors", "flex", "items-center", "gap-1.5", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "space-y-6"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-blue-100", 3, "opacity-40"], [1, "text-center", "py-10", "bg-gray-50", "dark:bg-neutral-900", "rounded-xl", "border", "border-dashed", "border-gray-200"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-blue-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModelChange", "blur", "keyup.enter", "keyup.escape", "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "cursor-pointer", "hover:text-blue-600", "transition-colors", "group", "flex", "items-center", "gap-1.5", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5", "text-gray-300", "group-hover:text-blue-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-blue-100"], [1, "absolute", "right-12", "top-4", "opacity-0", "group-hover:opacity-100", "flex", "flex-col", "gap-0", "z-10"], ["type", "button", "title", "Move Up", 1, "text-gray-300", "hover:text-blue-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5"], ["fill-rule", "evenodd", "d", "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", "clip-rule", "evenodd"], ["type", "button", "title", "Move Down", 1, "text-gray-300", "hover:text-blue-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["title", "Delete Role", 1, "absolute", "right-4", "top-4", "text-gray-300", "hover:text-red-500", "opacity-0", "group-hover:opacity-100", "transition-opacity", "p-1", "z-10", "bg-white/80", "rounded-full", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "p-6", "border-b", "border-gray-50", "flex", "flex-col", "md:flex-row", "gap-5"], [1, "flex-1"], [1, "flex", "items-center", "gap-1.5", "mb-2"], [1, "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], [1, "text-[9px]", "font-black", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "bg-gray-100", "px-1.5", "py-0.5", "rounded-full"], ["type", "text", "placeholder", "Job Title (e.g. Lead Engineer)", 1, "w-full", "text-[22px]", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-transparent", "hover:border-gray-200", "dark:border-neutral-600", "focus:border-blue-500", "focus:ring-0", "px-0", "py-1", "transition-colors", "bg-transparent", "placeholder-gray-300", "mb-1", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Company Name", 1, "w-full", "text-base", "font-semibold", "text-blue-600", "border-0", "border-b-2", "border-transparent", "hover:border-blue-200", "focus:border-blue-500", "focus:ring-0", "px-0", "py-1", "transition-colors", "bg-transparent", "placeholder-blue-300", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-3", "md:w-1/2"], [1, "text-[10px]", "font-bold", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "block", "mb-1", "px-1"], ["type", "text", "placeholder", "Jan 2020", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-blue-500", "focus:ring", "focus:ring-blue-100", "bg-gray-50", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Present", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-blue-500", "focus:ring", "focus:ring-blue-100", "bg-gray-50", 3, "ngModelChange", "ngModel"], [1, "col-span-2"], ["type", "text", "placeholder", "San Francisco, CA", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-blue-500", "focus:ring", "focus:ring-blue-100", "bg-white", 3, "ngModelChange", "ngModel"], [1, "p-6", "bg-blue-50/20"], [1, "text-xs", "font-bold", "text-blue-500/80", "uppercase", "tracking-widest", "block", "mb-3", "pl-1"], [1, "space-y-3"], [1, "flex", "gap-3", "group/bullet", "items-start", 3, "opacity-40"], [1, "mt-4", "ml-6", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-neutral-600", "dark:text-neutral-200", "hover:text-white", "border", "border-blue-200", "px-4", "py-2", "rounded-md", "transition-all", "inline-flex", "items-center", "gap-1", "shadow-sm", 3, "click"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z", "clip-rule", "evenodd"], ["d", "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"], [1, "flex", "gap-3", "group/bullet", "items-start"], [1, "mt-2.5", "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], [1, "flex-1", "flex", "flex-col", "gap-1"], ["placeholder", "Describe an impact, quantitative result, or responsibility...", "rows", "2", 1, "w-full", "rounded-lg", "border", "border-gray-200", "dark:border-neutral-600", "text-[15px]", "shadow-sm", "focus:border-blue-500", "focus:ring", "focus:ring-blue-100", "bg-white", "resize-y", "min-h-[60px]", "p-3", "text-gray-700", "dark:text-neutral-300", "leading-relaxed", "transition-shadow", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "px-1"], ["title", "Remove Bullet", 1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100"], [1, "text-xs", "transition-colors", 3, "ngClass"], [1, "ml-1"], ["title", "Remove Bullet", 1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "text-gray-400", "dark:text-neutral-500", "font-medium"]], template: function ExperienceEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ExperienceEditorComponent_Conditional_6_Template, 1, 1, "input", 6);
      \u0275\u0275conditionalCreate(7, ExperienceEditorComponent_Conditional_7_Template, 4, 1, "h2", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "button", 8);
      \u0275\u0275listener("click", function ExperienceEditorComponent_Template_button_click_8_listener() {
        return ctx.onAddExperience();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Add Role ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275repeaterCreate(13, ExperienceEditorComponent_For_14_Template, 43, 17, "div", 12, ctx.trackByIndex, true);
      \u0275\u0275conditionalCreate(15, ExperienceEditorComponent_Conditional_15_Template, 3, 0, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.editingLabel() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editingLabel() ? 7 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.experiences);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.experiences.length === 0 ? 15 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienceEditorComponent, [{
    type: Component,
    args: [{ selector: "app-experience-editor", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="mb-14">
  <div class="flex justify-between items-end mb-6">
    <div class="flex items-center gap-3">
      <div class="bg-blue-100 text-blue-600 p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- Inline rename: click title to edit -->
      @if (editingLabel()) {
      <input
        type="text"
        [(ngModel)]="labelDraft"
        (blur)="commitRename()"
        (keyup.enter)="commitRename()"
        (keyup.escape)="editingLabel.set(false)"
        autofocus
        class="text-2xl font-bold text-gray-900 border-0 border-b-2 border-blue-400 focus:ring-0 bg-transparent outline-none px-0 py-0.5 w-48"
      />
      } @if (!editingLabel()) {
      <h2
        class="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors group flex items-center gap-1.5"
        (click)="startRename()"
        title="Click to rename section"
      >
        {{ getSectionLabel() }}
        <svg
          class="h-3.5 w-3.5 text-gray-300 group-hover:text-blue-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </h2>
      }
    </div>

    <button
      (click)="onAddExperience()"
      class="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 hover:border-blue-200 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      Add Role
    </button>
  </div>

  <div class="space-y-6">
    @for (experience of experiences; track trackByIndex(i, experience); let i =
    $index) {
    <div
      class="bg-white dark:bg-neutral-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-neutral-700 overflow-hidden relative group transition-all hover:border-blue-100"
      [class.opacity-40]="!isActive(experience.id)"
    >
      <!-- Move/Delete -->
      <div
        class="absolute right-12 top-4 opacity-0 group-hover:opacity-100 flex flex-col gap-0 z-10"
      >
        <button
          type="button"
          (click)="moveSectionItem(experiences, i, -1)"
          [disabled]="i === 0"
          class="text-gray-300 hover:text-blue-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Up"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          (click)="moveSectionItem(experiences, i, 1)"
          [disabled]="i === experiences.length - 1"
          class="text-gray-300 hover:text-blue-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Down"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <button
        (click)="removeSection(i)"
        class="absolute right-4 top-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 z-10 bg-white/80 rounded-full"
        title="Delete Role"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-5">
        <div class="flex-1">
          <div class="flex items-center gap-1.5 mb-2">
            <button
              (click)="toggleActive(experience.id)"
              class="shrink-0 p-0.5 rounded transition-colors"
              [class.text-blue-500]="isActive(experience.id)"
              [class.text-gray-300]="!isActive(experience.id)"
              [title]="isActive(experience.id) ? 'Hide from this profile' : 'Show in this profile'"
            >
              @if (isActive(experience.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              } @if (!isActive(experience.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
              }
            </button>
            @if (!isActive(experience.id)) {
            <span
              class="text-[9px] font-black text-gray-400 dark:text-neutral-500 uppercase tracking-widest bg-gray-100 px-1.5 py-0.5 rounded-full"
              >Inactive</span
            >
            }
          </div>
          <input
            type="text"
            [(ngModel)]="experience.position"
            (ngModelChange)="updateWithoutLosingFocus('exp_pos_' + i)"
            placeholder="Job Title (e.g. Lead Engineer)"
            class="w-full text-[22px] font-bold text-gray-900 border-0 border-b-2 border-transparent hover:border-gray-200 dark:border-neutral-600 focus:border-blue-500 focus:ring-0 px-0 py-1 transition-colors bg-transparent placeholder-gray-300 mb-1"
          />
          <input
            type="text"
            [(ngModel)]="experience.company"
            (ngModelChange)="updateWithoutLosingFocus('exp_comp_' + i)"
            placeholder="Company Name"
            class="w-full text-base font-semibold text-blue-600 border-0 border-b-2 border-transparent hover:border-blue-200 focus:border-blue-500 focus:ring-0 px-0 py-1 transition-colors bg-transparent placeholder-blue-300"
          />
        </div>
        <div class="grid grid-cols-2 gap-3 md:w-1/2">
          <div>
            <label
              class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
              >Start Date</label
            >
            <input
              type="text"
              [(ngModel)]="experience.start_date"
              (ngModelChange)="updateWithoutLosingFocus('exp_start_' + i)"
              placeholder="Jan 2020"
              class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 bg-gray-50"
            />
          </div>
          <div>
            <label
              class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
              >End Date</label
            >
            <input
              type="text"
              [(ngModel)]="experience.end_date"
              (ngModelChange)="updateWithoutLosingFocus('exp_end_' + i)"
              placeholder="Present"
              class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 bg-gray-50"
            />
          </div>
          <div class="col-span-2">
            <label
              class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
              >Location</label
            >
            <input
              type="text"
              [(ngModel)]="experience.location"
              (ngModelChange)="updateWithoutLosingFocus('exp_loc_' + i)"
              placeholder="San Francisco, CA"
              class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 bg-white"
            />
          </div>
        </div>
      </div>
      <div class="p-6 bg-blue-50/20">
        <label
          class="text-xs font-bold text-blue-500/80 uppercase tracking-widest block mb-3 pl-1"
          >Key Responsibilities & Achievements</label
        >
        <div class="space-y-3">
          @for (description of experience.descriptions; track trackByIndex(j,
          description); let j = $index) {
          <div
            class="flex gap-3 group/bullet items-start"
            [class.opacity-40]="!isActive(description.id)"
          >
            <button
              (click)="toggleActive(description.id)"
              class="mt-2.5 shrink-0 p-0.5 rounded transition-colors"
              [class.text-blue-400]="isActive(description.id)"
              [class.text-gray-300]="!isActive(description.id)"
              [title]="isActive(description.id) ? 'Hide bullet' : 'Show bullet'"
            >
              @if (isActive(description.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              } @if (!isActive(description.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
              }
            </button>
            <div class="flex-1 flex flex-col gap-1">
              <textarea
                [(ngModel)]="experience.descriptions[j].text"
                (ngModelChange)="updateWithoutLosingFocus('exp_' + i + '_desc_' + j)"
                placeholder="Describe an impact, quantitative result, or responsibility..."
                class="w-full rounded-lg border border-gray-200 dark:border-neutral-600 text-[15px] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 bg-white resize-y min-h-[60px] p-3 text-gray-700 dark:text-neutral-300 leading-relaxed transition-shadow"
                rows="2"
              ></textarea>
              @if (experience.descriptions[j].text) {
              <div class="flex justify-end px-1">
                <span
                  class="text-xs transition-colors"
                  [ngClass]="{
                  'text-gray-400 dark:text-neutral-500': getWordCount(experience.descriptions[j].text) >= 5 && getWordCount(experience.descriptions[j].text) <= 40,
                  'text-amber-500 font-medium': getWordCount(experience.descriptions[j].text) > 40 || getWordCount(experience.descriptions[j].text) < 5
                }"
                >
                  {{ getWordCount(experience.descriptions[j].text) }} words @if
                  (getWordCount(experience.descriptions[j].text) > 40) {
                  <span class="ml-1">\u26A0\uFE0F Too long.</span>
                  } @if (getWordCount(experience.descriptions[j].text) < 5) {
                  <span class="ml-1">\u26A0\uFE0F Too short.</span>
                  }
                </span>
              </div>
              }
            </div>
            @if (experience.descriptions.length > 0) {
            <button
              (click)="onRemoveExperienceDescription(experience, j)"
              class="mt-2 text-gray-400 dark:text-neutral-500 hover:text-red-500 opacity-0 group-hover/bullet:opacity-100 transition-opacity p-1 bg-white hover:bg-red-50 rounded-md border border-transparent hover:border-red-100"
              title="Remove Bullet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            }
          </div>
          }
        </div>
        <button
          (click)="onAddExperienceDescription(experience)"
          class="mt-4 ml-6 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-200 hover:text-white border border-blue-200 px-4 py-2 rounded-md transition-all inline-flex items-center gap-1 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          Add Bullet Point
        </button>
      </div>
    </div>
    } @if (experiences.length === 0) {
    <div
      class="text-center py-10 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-dashed border-gray-200"
    >
      <p class="text-gray-400 dark:text-neutral-500 font-medium">
        No experience mapped yet. Adding your history helps the AI optimizer.
      </p>
    </div>
    }
  </div>
</section>
` }]
  }], null, { experiences: [{
    type: Input
  }], dataChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceEditorComponent, { className: "ExperienceEditorComponent", filePath: "src/app/editor/experience-editor/experience-editor.ts", lineNumber: 20 });
})();

// src/app/editor/projects-editor/projects-editor.ts
var _c02 = (a0, a1) => ({ "text-gray-400 dark:text-neutral-500": a0, "text-amber-500 font-medium": a1 });
function ProjectsEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsEditorComponent_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.labelDraft, $event) || (ctx_r1.labelDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function ProjectsEditorComponent_Conditional_6_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.enter", function ProjectsEditorComponent_Conditional_6_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.escape", function ProjectsEditorComponent_Conditional_6_Template_input_keyup_escape_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editingLabel.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.labelDraft);
  }
}
function ProjectsEditorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 14);
    \u0275\u0275listener("click", function ProjectsEditorComponent_Conditional_7_Template_h2_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRename());
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSectionLabel(), " ");
  }
}
function ProjectsEditorComponent_For_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 49)(2, "path", 50);
    \u0275\u0275elementEnd();
  }
}
function ProjectsEditorComponent_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 51)(2, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function ProjectsEditorComponent_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Inactive \u2014 hidden from this profile");
    \u0275\u0275elementEnd();
  }
}
function ProjectsEditorComponent_For_14_For_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_For_34_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const \u0275$index_109_r8 = \u0275\u0275nextContext().$index;
      const project_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemoveProjectTech(project_r6, \u0275$index_109_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 56);
    \u0275\u0275elementEnd()();
  }
}
function ProjectsEditorComponent_For_14_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsEditorComponent_For_14_For_34_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_109_r8 = \u0275\u0275restoreView(_r7).$index;
      const project_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(project_r6.project_tech[\u0275$index_109_r8], $event) || (project_r6.project_tech[\u0275$index_109_r8] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProjectsEditorComponent_For_14_For_34_Template_input_ngModelChange_1_listener() {
      const \u0275$index_109_r8 = \u0275\u0275restoreView(_r7).$index;
      const \u0275$index_33_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("proj_" + \u0275$index_33_r5 + "_tech_" + \u0275$index_109_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ProjectsEditorComponent_For_14_For_34_Conditional_2_Template, 3, 0, "button", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_109_r8 = ctx.$index;
    const project_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", project_r6.project_tech[\u0275$index_109_r8]);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r6.project_tech.length > 0 ? 2 : -1);
  }
}
function ProjectsEditorComponent_For_14_For_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 49)(2, "path", 50);
    \u0275\u0275elementEnd();
  }
}
function ProjectsEditorComponent_For_14_For_44_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 51)(2, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function ProjectsEditorComponent_For_14_For_44_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u26A0\uFE0F Too long.");
    \u0275\u0275elementEnd();
  }
}
function ProjectsEditorComponent_For_14_For_44_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u26A0\uFE0F Too short.");
    \u0275\u0275elementEnd();
  }
}
function ProjectsEditorComponent_For_14_For_44_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, ProjectsEditorComponent_For_14_For_44_Conditional_6_Conditional_3_Template, 2, 0, "span", 64);
    \u0275\u0275conditionalCreate(4, ProjectsEditorComponent_For_14_For_44_Conditional_6_Conditional_4_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_135_r12 = \u0275\u0275nextContext().$index;
    const project_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, ctx_r1.getWordCount(project_r6.project_description[\u0275$index_135_r12].text) >= 5 && ctx_r1.getWordCount(project_r6.project_description[\u0275$index_135_r12].text) <= 40, ctx_r1.getWordCount(project_r6.project_description[\u0275$index_135_r12].text) > 40 || ctx_r1.getWordCount(project_r6.project_description[\u0275$index_135_r12].text) < 5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getWordCount(project_r6.project_description[\u0275$index_135_r12].text), " words ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getWordCount(project_r6.project_description[\u0275$index_135_r12].text) > 40 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getWordCount(project_r6.project_description[\u0275$index_135_r12].text) < 5 ? 4 : -1);
  }
}
function ProjectsEditorComponent_For_14_For_44_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_For_44_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const \u0275$index_135_r12 = \u0275\u0275nextContext().$index;
      const project_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemoveProjectDescription(project_r6, \u0275$index_135_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd()();
  }
}
function ProjectsEditorComponent_For_14_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "button", 58);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_For_44_Template_button_click_1_listener() {
      const desc_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(desc_r11.id));
    });
    \u0275\u0275conditionalCreate(2, ProjectsEditorComponent_For_14_For_44_Conditional_2_Template, 3, 0, ":svg:svg", 43);
    \u0275\u0275conditionalCreate(3, ProjectsEditorComponent_For_14_For_44_Conditional_3_Template, 3, 0, ":svg:svg", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59)(5, "textarea", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsEditorComponent_For_14_For_44_Template_textarea_ngModelChange_5_listener($event) {
      const \u0275$index_135_r12 = \u0275\u0275restoreView(_r10).$index;
      const project_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(project_r6.project_description[\u0275$index_135_r12].text, $event) || (project_r6.project_description[\u0275$index_135_r12].text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProjectsEditorComponent_For_14_For_44_Template_textarea_ngModelChange_5_listener() {
      const \u0275$index_135_r12 = \u0275\u0275restoreView(_r10).$index;
      const \u0275$index_33_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("proj_" + \u0275$index_33_r5 + "_desc_" + \u0275$index_135_r12));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ProjectsEditorComponent_For_14_For_44_Conditional_6_Template, 5, 7, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ProjectsEditorComponent_For_14_For_44_Conditional_7_Template, 3, 0, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const desc_r11 = ctx.$implicit;
    const \u0275$index_135_r12 = ctx.$index;
    const project_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(desc_r11.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-purple-400", ctx_r1.isActive(desc_r11.id))("text-gray-300", !ctx_r1.isActive(desc_r11.id));
    \u0275\u0275property("title", ctx_r1.isActive(desc_r11.id) ? "Hide bullet" : "Show bullet");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(desc_r11.id) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(desc_r11.id) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", project_r6.project_description[\u0275$index_135_r12].text);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r6.project_description[\u0275$index_135_r12].text ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r6.project_description.length > 0 ? 7 : -1);
  }
}
function ProjectsEditorComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "button", 19);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_Template_button_click_2_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.projects, \u0275$index_33_r5, -1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 20);
    \u0275\u0275element(4, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_Template_button_click_5_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.projects, \u0275$index_33_r5, 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 20);
    \u0275\u0275element(7, "path", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_Template_button_click_8_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSection(\u0275$index_33_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 25);
    \u0275\u0275element(10, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 27)(12, "div", 28)(13, "div", 29)(14, "button", 30);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_Template_button_click_14_listener() {
      const project_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleActive(project_r6.id));
    });
    \u0275\u0275conditionalCreate(15, ProjectsEditorComponent_For_14_Conditional_15_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275conditionalCreate(16, ProjectsEditorComponent_For_14_Conditional_16_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, ProjectsEditorComponent_For_14_Conditional_17_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_18_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(project_r6.project_name, $event) || (project_r6.project_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_18_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("proj_name_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_19_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(project_r6.project_url, $event) || (project_r6.project_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_19_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("proj_url_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 34)(21, "div")(22, "label", 35);
    \u0275\u0275text(23, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_24_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(project_r6.start_date, $event) || (project_r6.start_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_24_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("proj_start_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 35);
    \u0275\u0275text(27, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_28_listener($event) {
      const project_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(project_r6.end_date, $event) || (project_r6.end_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProjectsEditorComponent_For_14_Template_input_ngModelChange_28_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("proj_end_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 38)(30, "label", 39);
    \u0275\u0275text(31, "Tech Stack / Tools");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 40);
    \u0275\u0275repeaterCreate(33, ProjectsEditorComponent_For_14_For_34_Template, 3, 2, "div", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(35, "button", 42);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_Template_button_click_35_listener() {
      const project_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddProjectTech(project_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 43);
    \u0275\u0275element(37, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Tool ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 44)(40, "label", 45);
    \u0275\u0275text(41, "Project Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 46);
    \u0275\u0275repeaterCreate(43, ProjectsEditorComponent_For_14_For_44_Template, 8, 12, "div", 47, \u0275\u0275componentInstance().trackByIndex, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 48);
    \u0275\u0275listener("click", function ProjectsEditorComponent_For_14_Template_button_click_45_listener() {
      const project_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddProjectDescription(project_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 9);
    \u0275\u0275element(47, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Add Detail ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const \u0275$index_33_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(project_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === ctx_r1.projects.length - 1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("text-purple-500", ctx_r1.isActive(project_r6.id))("text-gray-300", !ctx_r1.isActive(project_r6.id));
    \u0275\u0275property("title", ctx_r1.isActive(project_r6.id) ? "Hide from this profile" : "Show in this profile");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(project_r6.id) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(project_r6.id) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(project_r6.id) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", project_r6.project_name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", project_r6.project_url);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", project_r6.start_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", project_r6.end_date);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(project_r6.project_tech);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(project_r6.project_description);
  }
}
var ProjectsEditorComponent = class _ProjectsEditorComponent {
  dataService = inject(DataService);
  projects;
  dataChange = new EventEmitter();
  // Section renaming
  sectionType = SectionType.PROJECTS;
  editingLabel = signal(false, ...ngDevMode ? [{ debugName: "editingLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  labelDraft = "";
  getSectionLabel() {
    return this.dataService.getSectionLabel(this.sectionType);
  }
  startRename() {
    this.labelDraft = this.getSectionLabel();
    this.editingLabel.set(true);
  }
  commitRename() {
    this.dataService.setSectionLabel(this.sectionType, this.labelDraft);
    this.editingLabel.set(false);
  }
  getWordCount(text) {
    if (!text)
      return 0;
    return text.trim().split(/\s+/).filter((w) => w.length > 0).length;
  }
  trackByIndex(index, item) {
    return index;
  }
  genId() {
    return crypto.randomUUID();
  }
  isActive(id) {
    return this.dataService.isActive(id);
  }
  toggleActive(id) {
    this.dataService.toggleActive(id);
  }
  moveSectionItem(arr, index, direction) {
    const target = index + direction;
    if (target < 0 || target >= arr.length)
      return;
    [arr[index], arr[target]] = [arr[target], arr[index]];
    this.triggerChange();
  }
  onAddProject() {
    this.projects.push({
      id: this.genId(),
      project_name: "",
      project_url: "",
      project_tech: [""],
      start_date: "",
      end_date: "",
      project_description: []
    });
    this.triggerChange();
  }
  removeSection(index) {
    this.projects.splice(index, 1);
    this.triggerChange();
  }
  onAddProjectDescription(project) {
    if (!project.project_description)
      project.project_description = [];
    project.project_description.push({ id: this.genId(), text: "" });
    this.triggerChange();
  }
  onRemoveProjectDescription(project, index) {
    if (!project.project_description)
      return;
    project.project_description.splice(index, 1);
    this.triggerChange();
  }
  onAddProjectTech(project) {
    if (!project.project_tech)
      project.project_tech = [];
    project.project_tech.push("");
    this.triggerChange();
  }
  onRemoveProjectTech(project, index) {
    if (!project.project_tech)
      return;
    project.project_tech.splice(index, 1);
    this.triggerChange();
  }
  focusTimeouts = {};
  updateWithoutLosingFocus(fieldId) {
    if (this.focusTimeouts[fieldId]) {
      clearTimeout(this.focusTimeouts[fieldId]);
    }
    this.focusTimeouts[fieldId] = setTimeout(() => {
      this.triggerChange();
      this.focusTimeouts[fieldId] = null;
    }, 1500);
  }
  triggerChange() {
    this.dataChange.emit();
  }
  static \u0275fac = function ProjectsEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsEditorComponent, selectors: [["app-projects-editor"]], inputs: { projects: "projects" }, outputs: { dataChange: "dataChange" }, decls: 15, vars: 2, consts: [[1, "mb-14"], [1, "flex", "justify-between", "items-end", "mb-6"], [1, "flex", "items-center", "gap-3"], [1, "bg-purple-100", "text-purple-600", "p-2", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-6", "w-6"], ["fill-rule", "evenodd", "d", "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5"], [1, "text-sm", "font-semibold", "text-purple-600", "hover:text-purple-700", "bg-purple-50", "hover:bg-purple-100", "border", "border-purple-100", "hover:border-purple-200", "px-4", "py-2", "rounded-full", "transition-colors", "flex", "items-center", "gap-1.5", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "space-y-6"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-purple-100", 3, "opacity-40"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModelChange", "blur", "keyup.enter", "keyup.escape", "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5", "text-gray-300", "group-hover:text-indigo-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-purple-100"], [1, "absolute", "right-12", "top-4", "opacity-0", "group-hover:opacity-100", "flex", "flex-col", "gap-0", "z-10"], ["type", "button", "title", "Move Up", 1, "text-gray-300", "hover:text-purple-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5"], ["fill-rule", "evenodd", "d", "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", "clip-rule", "evenodd"], ["type", "button", "title", "Move Down", 1, "text-gray-300", "hover:text-purple-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["title", "Delete Project", 1, "absolute", "right-4", "top-4", "text-gray-300", "hover:text-red-500", "opacity-0", "group-hover:opacity-100", "transition-opacity", "p-1", "z-10", "bg-white/80", "rounded-full", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "p-6", "border-b", "border-gray-50", "flex", "flex-col", "md:flex-row", "gap-6"], [1, "flex-1"], [1, "flex", "items-center", "gap-1.5", "mb-2"], [1, "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], [1, "text-[9px]", "font-black", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "bg-gray-100", "px-1.5", "py-0.5", "rounded-full"], ["type", "text", "placeholder", "Project Name", 1, "w-full", "text-xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-transparent", "hover:border-gray-200", "dark:border-neutral-600", "focus:border-purple-500", "focus:ring-0", "px-0", "py-1", "transition-colors", "bg-transparent", "placeholder-gray-300", "mb-1", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://github.com/...", 1, "w-full", "text-sm", "font-mono", "text-purple-600", "border-0", "border-b", "border-transparent", "hover:border-purple-200", "focus:border-purple-500", "focus:ring-0", "px-0", "py-1", "transition-colors", "bg-transparent", "placeholder-purple-200", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-3", "mt-4"], [1, "text-[10px]", "font-bold", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "block", "mb-1", "px-1"], ["type", "text", "placeholder", "Jan 2021", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-purple-500", "focus:ring", "focus:ring-purple-100", "bg-gray-50", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Present", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-purple-500", "focus:ring", "focus:ring-purple-100", "bg-gray-50", 3, "ngModelChange", "ngModel"], [1, "md:w-[55%]"], [1, "text-[10px]", "font-bold", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "block", "mb-2", "px-1"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "items-stretch", "shadow-[0_2px_4px_rgba(0,0,0,0.02)]", "rounded", "bg-white", "group/tech", "border", "border-gray-200", "dark:border-neutral-600", "hover:border-purple-300", "transition-colors"], [1, "text-xs", "font-bold", "tracking-wide", "text-purple-600", "hover:bg-purple-600", "hover:text-white", "hover:border-purple-600", "px-3", "py-1.5", "rounded", "transition-colors", "border", "border-dashed", "border-purple-300", "bg-purple-50/50", "flex", "flex-center", "items-center", "gap-1", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], [1, "p-6", "bg-neutral-50", "dark:bg-purple-900/30"], [1, "text-xs", "font-bold", "text-purple-500/80", "uppercase", "tracking-widest", "block", "mb-3", "pl-1"], [1, "space-y-3"], [1, "flex", "gap-3", "group/bullet", "items-start", 3, "opacity-40"], [1, "mt-4", "ml-6", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-purple-600", "hover:bg-purple-600", "hover:text-white", "border", "border-purple-200", "px-4", "py-2", "rounded-md", "transition-all", "inline-flex", "items-center", "gap-1", "shadow-sm", 3, "click"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z", "clip-rule", "evenodd"], ["d", "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"], ["type", "text", "placeholder", "e.g. React", 1, "w-24", "px-3", "py-1.5", "text-xs", "text-gray-700", "dark:text-neutral-300", "bg-white", "font-mono", "focus:bg-purple-50", "focus:border-purple-400", "border-transparent", "focus:ring-0", "rounded-l", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "border-l", "border-gray-200", "dark:border-neutral-600", "bg-gray-50", "dark:bg-neutral-900", "hover:bg-red-500", "hover:text-white", "text-gray-400", "dark:text-neutral-500", "hover:border-red-500", "px-2", "rounded-r", "transition-colors"], [1, "border-l", "border-gray-200", "dark:border-neutral-600", "bg-gray-50", "dark:bg-neutral-900", "hover:bg-red-500", "hover:text-white", "text-gray-400", "dark:text-neutral-500", "hover:border-red-500", "px-2", "rounded-r", "transition-colors", 3, "click"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "flex", "gap-3", "group/bullet", "items-start"], [1, "mt-2.5", "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], [1, "flex-1", "flex", "flex-col", "gap-1"], ["placeholder", "What did you build and why was it significant?", "rows", "2", 1, "w-full", "rounded-lg", "border", "border-gray-200", "dark:border-neutral-600", "text-[15px]", "shadow-sm", "focus:border-purple-500", "focus:ring", "focus:ring-purple-100", "bg-white", "resize-y", "min-h-[60px]", "p-3", "text-gray-700", "dark:text-neutral-300", "leading-relaxed", "transition-shadow", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "px-1"], ["title", "Remove Detail", 1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100"], [1, "text-xs", "transition-colors", 3, "ngClass"], [1, "ml-1"], ["title", "Remove Detail", 1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function ProjectsEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ProjectsEditorComponent_Conditional_6_Template, 1, 1, "input", 6);
      \u0275\u0275conditionalCreate(7, ProjectsEditorComponent_Conditional_7_Template, 4, 1, "h2", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "button", 8);
      \u0275\u0275listener("click", function ProjectsEditorComponent_Template_button_click_8_listener() {
        return ctx.onAddProject();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " New Project ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275repeaterCreate(13, ProjectsEditorComponent_For_14_Template, 49, 16, "div", 12, ctx.trackByIndex, true);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.editingLabel() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editingLabel() ? 7 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.projects);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsEditorComponent, [{
    type: Component,
    args: [{ selector: "app-projects-editor", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="mb-14">
  <div class="flex justify-between items-end mb-6">
    <div class="flex items-center gap-3">
      <div class="bg-purple-100 text-purple-600 p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- Inline rename: click title to edit -->
      @if (editingLabel()) {
      <input
        type="text"
        [(ngModel)]="labelDraft"
        (blur)="commitRename()"
        (keyup.enter)="commitRename()"
        (keyup.escape)="editingLabel.set(false)"
        autofocus
        class="text-2xl font-bold text-gray-900 border-0 border-b-2 border-indigo-400 focus:ring-0 bg-transparent outline-none px-0 py-0.5 w-48"
      />
      } @if (!editingLabel()) {
      <h2
        class="text-2xl font-bold text-gray-900 dark:text-neutral-50 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group flex items-center gap-1.5"
        (click)="startRename()"
        title="Click to rename section"
      >
        {{ getSectionLabel() }}
        <svg
          class="h-3.5 w-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </h2>
      }
    </div>
    <button
      (click)="onAddProject()"
      class="text-sm font-semibold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-100 hover:border-purple-200 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      New Project
    </button>
  </div>

  <div class="space-y-6">
    @for (project of projects; track trackByIndex(i, project); let i = $index) {
    <div
      class="bg-white dark:bg-neutral-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-neutral-700 overflow-hidden relative group transition-all hover:border-purple-100"
      [class.opacity-40]="!isActive(project.id)"
    >
      <div
        class="absolute right-12 top-4 opacity-0 group-hover:opacity-100 flex flex-col gap-0 z-10"
      >
        <button
          type="button"
          (click)="moveSectionItem(projects, i, -1)"
          [disabled]="i === 0"
          class="text-gray-300 hover:text-purple-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Up"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          (click)="moveSectionItem(projects, i, 1)"
          [disabled]="i === projects.length - 1"
          class="text-gray-300 hover:text-purple-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Down"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <button
        (click)="removeSection(i)"
        class="absolute right-4 top-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 z-10 bg-white/80 rounded-full"
        title="Delete Project"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <div class="flex items-center gap-1.5 mb-2">
            <button
              (click)="toggleActive(project.id)"
              class="shrink-0 p-0.5 rounded transition-colors"
              [class.text-purple-500]="isActive(project.id)"
              [class.text-gray-300]="!isActive(project.id)"
              [title]="isActive(project.id) ? 'Hide from this profile' : 'Show in this profile'"
            >
              @if (isActive(project.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              } @if (!isActive(project.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
              }
            </button>
            @if (!isActive(project.id)) {
            <span
              class="text-[9px] font-black text-gray-400 dark:text-neutral-500 uppercase tracking-widest bg-gray-100 px-1.5 py-0.5 rounded-full"
              >Inactive \u2014 hidden from this profile</span
            >
            }
          </div>
          <input
            type="text"
            [(ngModel)]="project.project_name"
            (ngModelChange)="updateWithoutLosingFocus('proj_name_' + i)"
            placeholder="Project Name"
            class="w-full text-xl font-bold text-gray-900 border-0 border-b-2 border-transparent hover:border-gray-200 dark:border-neutral-600 focus:border-purple-500 focus:ring-0 px-0 py-1 transition-colors bg-transparent placeholder-gray-300 mb-1"
          />
          <input
            type="url"
            [(ngModel)]="project.project_url"
            (ngModelChange)="updateWithoutLosingFocus('proj_url_' + i)"
            placeholder="https://github.com/..."
            class="w-full text-sm font-mono text-purple-600 border-0 border-b border-transparent hover:border-purple-200 focus:border-purple-500 focus:ring-0 px-0 py-1 transition-colors bg-transparent placeholder-purple-200"
          />
          <div class="grid grid-cols-2 gap-3 mt-4">
            <div>
              <label
                class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
                >Start Date</label
              >
              <input
                type="text"
                [(ngModel)]="project.start_date"
                (ngModelChange)="updateWithoutLosingFocus('proj_start_' + i)"
                placeholder="Jan 2021"
                class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-100 bg-gray-50"
              />
            </div>
            <div>
              <label
                class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
                >End Date</label
              >
              <input
                type="text"
                [(ngModel)]="project.end_date"
                (ngModelChange)="updateWithoutLosingFocus('proj_end_' + i)"
                placeholder="Present"
                class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-100 bg-gray-50"
              />
            </div>
          </div>
        </div>
        <div class="md:w-[55%]">
          <label
            class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-2 px-1"
            >Tech Stack / Tools</label
          >
          <div class="flex flex-wrap gap-2">
            @for (tech of project.project_tech; track tech; let j = $index) {
            <div
              class="flex items-stretch shadow-[0_2px_4px_rgba(0,0,0,0.02)] rounded bg-white group/tech border border-gray-200 dark:border-neutral-600 hover:border-purple-300 transition-colors"
            >
              <input
                type="text"
                [(ngModel)]="project.project_tech[j]"
                (ngModelChange)="updateWithoutLosingFocus('proj_' + i + '_tech_' + j)"
                placeholder="e.g. React"
                class="w-24 px-3 py-1.5 text-xs text-gray-700 dark:text-neutral-300 bg-white font-mono focus:bg-purple-50 focus:border-purple-400 border-transparent focus:ring-0 rounded-l transition-colors"
              />
              @if (project.project_tech.length > 0) {
              <button
                (click)="onRemoveProjectTech(project, j)"
                class="border-l border-gray-200 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-900 hover:bg-red-500 hover:text-white text-gray-400 dark:text-neutral-500 hover:border-red-500 px-2 rounded-r transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              }
            </div>
            }
            <button
              (click)="onAddProjectTech(project)"
              class="text-xs font-bold tracking-wide text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 px-3 py-1.5 rounded transition-colors border border-dashed border-purple-300 bg-purple-50/50 flex flex-center items-center gap-1 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Tool
            </button>
          </div>
        </div>
      </div>
      <div class="p-6 bg-neutral-50 dark:bg-purple-900/30">
        <label
          class="text-xs font-bold text-purple-500/80 uppercase tracking-widest block mb-3 pl-1"
          >Project Details</label
        >
        <div class="space-y-3">
          @for (desc of project.project_description; track trackByIndex(j,
          desc); let j = $index) {
          <div
            class="flex gap-3 group/bullet items-start"
            [class.opacity-40]="!isActive(desc.id)"
          >
            <button
              (click)="toggleActive(desc.id)"
              class="mt-2.5 shrink-0 p-0.5 rounded transition-colors"
              [class.text-purple-400]="isActive(desc.id)"
              [class.text-gray-300]="!isActive(desc.id)"
              [title]="isActive(desc.id) ? 'Hide bullet' : 'Show bullet'"
            >
              @if (isActive(desc.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              } @if (!isActive(desc.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
              }
            </button>
            <div class="flex-1 flex flex-col gap-1">
              <textarea
                [(ngModel)]="project.project_description[j].text"
                (ngModelChange)="updateWithoutLosingFocus('proj_' + i + '_desc_' + j)"
                placeholder="What did you build and why was it significant?"
                class="w-full rounded-lg border border-gray-200 dark:border-neutral-600 text-[15px] shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-100 bg-white resize-y min-h-[60px] p-3 text-gray-700 dark:text-neutral-300 leading-relaxed transition-shadow"
                rows="2"
              ></textarea>
              @if (project.project_description[j].text) {
              <div class="flex justify-end px-1">
                <span
                  class="text-xs transition-colors"
                  [ngClass]="{
                  'text-gray-400 dark:text-neutral-500': getWordCount(project.project_description[j].text) >= 5 && getWordCount(project.project_description[j].text) <= 40,
                  'text-amber-500 font-medium': getWordCount(project.project_description[j].text) > 40 || getWordCount(project.project_description[j].text) < 5
                }"
                >
                  {{ getWordCount(project.project_description[j].text) }} words
                  @if (getWordCount(project.project_description[j].text) > 40) {
                  <span class="ml-1">\u26A0\uFE0F Too long.</span>
                  } @if (getWordCount(project.project_description[j].text) < 5)
                  { <span class="ml-1">\u26A0\uFE0F Too short.</span>
                  }
                </span>
              </div>
              }
            </div>
            @if (project.project_description.length > 0) {
            <button
              (click)="onRemoveProjectDescription(project, j)"
              class="mt-2 text-gray-400 dark:text-neutral-500 hover:text-red-500 opacity-0 group-hover/bullet:opacity-100 transition-opacity p-1 bg-white hover:bg-red-50 rounded-md border border-transparent hover:border-red-100"
              title="Remove Detail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            }
          </div>
          }
        </div>
        <button
          (click)="onAddProjectDescription(project)"
          class="mt-4 ml-6 text-xs font-bold uppercase tracking-wider text-purple-600 hover:bg-purple-600 hover:text-white border border-purple-200 px-4 py-2 rounded-md transition-all inline-flex items-center gap-1 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          Add Detail
        </button>
      </div>
    </div>
    }
  </div>
</section>
` }]
  }], null, { projects: [{
    type: Input
  }], dataChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsEditorComponent, { className: "ProjectsEditorComponent", filePath: "src/app/editor/projects-editor/projects-editor.ts", lineNumber: 20 });
})();

// src/app/editor/education-editor/education-editor.ts
function EducationEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.labelDraft, $event) || (ctx_r1.labelDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function EducationEditorComponent_Conditional_6_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.enter", function EducationEditorComponent_Conditional_6_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.escape", function EducationEditorComponent_Conditional_6_Template_input_keyup_escape_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editingLabel.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.labelDraft);
  }
}
function EducationEditorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 14);
    \u0275\u0275listener("click", function EducationEditorComponent_Conditional_7_Template_h2_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRename());
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSectionLabel(), " ");
  }
}
function EducationEditorComponent_For_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 49)(2, "path", 50);
    \u0275\u0275elementEnd();
  }
}
function EducationEditorComponent_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 51)(2, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function EducationEditorComponent_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Inactive \u2014 hidden from this profile");
    \u0275\u0275elementEnd();
  }
}
function EducationEditorComponent_For_14_For_42_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 49)(2, "path", 50);
    \u0275\u0275elementEnd();
  }
}
function EducationEditorComponent_For_14_For_42_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 51)(2, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function EducationEditorComponent_For_14_For_42_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function EducationEditorComponent_For_14_For_42_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_123_r9 = \u0275\u0275nextContext().$index;
      const ed_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemoveEducationDescription(ed_r6, \u0275$index_123_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path", 60);
    \u0275\u0275elementEnd()();
  }
}
function EducationEditorComponent_For_14_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "button", 54);
    \u0275\u0275listener("click", function EducationEditorComponent_For_14_For_42_Template_button_click_1_listener() {
      const description_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(description_r8.id));
    });
    \u0275\u0275conditionalCreate(2, EducationEditorComponent_For_14_For_42_Conditional_2_Template, 3, 0, ":svg:svg", 55);
    \u0275\u0275conditionalCreate(3, EducationEditorComponent_For_14_For_42_Conditional_3_Template, 3, 0, ":svg:svg", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 56);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_For_14_For_42_Template_textarea_ngModelChange_4_listener($event) {
      const \u0275$index_123_r9 = \u0275\u0275restoreView(_r7).$index;
      const ed_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(ed_r6.description[\u0275$index_123_r9].text, $event) || (ed_r6.description[\u0275$index_123_r9].text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducationEditorComponent_For_14_For_42_Template_textarea_ngModelChange_4_listener() {
      const \u0275$index_123_r9 = \u0275\u0275restoreView(_r7).$index;
      const \u0275$index_33_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ed_" + \u0275$index_33_r5 + "_desc_" + \u0275$index_123_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, EducationEditorComponent_For_14_For_42_Conditional_5_Template, 3, 0, "button", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const description_r8 = ctx.$implicit;
    const \u0275$index_123_r9 = ctx.$index;
    const ed_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(description_r8.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-amber-400", ctx_r1.isActive(description_r8.id))("text-gray-300", !ctx_r1.isActive(description_r8.id));
    \u0275\u0275property("title", ctx_r1.isActive(description_r8.id) ? "Hide bullet" : "Show bullet");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(description_r8.id) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(description_r8.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ed_r6.description[\u0275$index_123_r9].text);
    \u0275\u0275advance();
    \u0275\u0275conditional(ed_r6.description.length > 0 ? 5 : -1);
  }
}
function EducationEditorComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "button", 19);
    \u0275\u0275listener("click", function EducationEditorComponent_For_14_Template_button_click_2_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.educations, \u0275$index_33_r5, -1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 20);
    \u0275\u0275element(4, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function EducationEditorComponent_For_14_Template_button_click_5_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.educations, \u0275$index_33_r5, 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 20);
    \u0275\u0275element(7, "path", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function EducationEditorComponent_For_14_Template_button_click_8_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSection(\u0275$index_33_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 25);
    \u0275\u0275element(10, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 27)(12, "div", 28)(13, "div", 29)(14, "button", 30);
    \u0275\u0275listener("click", function EducationEditorComponent_For_14_Template_button_click_14_listener() {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleActive(ed_r6.id));
    });
    \u0275\u0275conditionalCreate(15, EducationEditorComponent_For_14_Conditional_15_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275conditionalCreate(16, EducationEditorComponent_For_14_Conditional_16_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, EducationEditorComponent_For_14_Conditional_17_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_18_listener($event) {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(ed_r6.school, $event) || (ed_r6.school = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_18_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ed_school_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_19_listener($event) {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(ed_r6.degree, $event) || (ed_r6.degree = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_19_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ed_deg_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 34)(21, "div", 35)(22, "label", 36);
    \u0275\u0275text(23, "Start Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_24_listener($event) {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(ed_r6.start_date, $event) || (ed_r6.start_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_24_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ed_start_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 35)(26, "label", 36);
    \u0275\u0275text(27, "End Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_28_listener($event) {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(ed_r6.end_date, $event) || (ed_r6.end_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_28_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ed_end_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 39)(30, "label", 36);
    \u0275\u0275text(31, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_32_listener($event) {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(ed_r6.location, $event) || (ed_r6.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_32_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ed_loc_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 41)(34, "label", 42);
    \u0275\u0275text(35, "GPA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_36_listener($event) {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(ed_r6.gpa, $event) || (ed_r6.gpa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducationEditorComponent_For_14_Template_input_ngModelChange_36_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ed_gpa_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 44)(38, "label", 45);
    \u0275\u0275text(39, "Coursework & Honors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 46);
    \u0275\u0275repeaterCreate(41, EducationEditorComponent_For_14_For_42_Template, 6, 11, "div", 47, \u0275\u0275componentInstance().trackByIndex, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 48);
    \u0275\u0275listener("click", function EducationEditorComponent_For_14_Template_button_click_43_listener() {
      const ed_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddEducationDescription(ed_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 9);
    \u0275\u0275element(45, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Add Detail ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ed_r6 = ctx.$implicit;
    const \u0275$index_33_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(ed_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === ctx_r1.educations.length - 1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("text-amber-500", ctx_r1.isActive(ed_r6.id))("text-gray-300", !ctx_r1.isActive(ed_r6.id));
    \u0275\u0275property("title", ctx_r1.isActive(ed_r6.id) ? "Hide from this profile" : "Show in this profile");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(ed_r6.id) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(ed_r6.id) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(ed_r6.id) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ed_r6.school);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ed_r6.degree);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ed_r6.start_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ed_r6.end_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ed_r6.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ed_r6.gpa);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ed_r6.description);
  }
}
var EducationEditorComponent = class _EducationEditorComponent {
  dataService = inject(DataService);
  educations;
  dataChange = new EventEmitter();
  // Section renaming
  sectionType = SectionType.EDUCATION;
  editingLabel = signal(false, ...ngDevMode ? [{ debugName: "editingLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  labelDraft = "";
  getSectionLabel() {
    return this.dataService.getSectionLabel(this.sectionType);
  }
  startRename() {
    this.labelDraft = this.getSectionLabel();
    this.editingLabel.set(true);
  }
  commitRename() {
    this.dataService.setSectionLabel(this.sectionType, this.labelDraft);
    this.editingLabel.set(false);
  }
  trackByIndex(index, item) {
    return index;
  }
  genId() {
    return crypto.randomUUID();
  }
  isActive(id) {
    return this.dataService.isActive(id);
  }
  toggleActive(id) {
    this.dataService.toggleActive(id);
  }
  moveSectionItem(arr, index, direction) {
    const target = index + direction;
    if (target < 0 || target >= arr.length)
      return;
    [arr[index], arr[target]] = [arr[target], arr[index]];
    this.triggerChange();
  }
  onAddEducation() {
    this.educations.push({
      id: this.genId(),
      school: "",
      degree: "",
      location: "",
      start_date: "",
      end_date: "",
      gpa: 0,
      description: []
    });
    this.triggerChange();
  }
  removeSection(index) {
    this.educations.splice(index, 1);
    this.triggerChange();
  }
  onAddEducationDescription(ed) {
    if (!ed.description)
      ed.description = [];
    ed.description.push({ id: this.genId(), text: "" });
    this.triggerChange();
  }
  onRemoveEducationDescription(ed, index) {
    if (!ed.description)
      return;
    ed.description.splice(index, 1);
    this.triggerChange();
  }
  focusTimeouts = {};
  updateWithoutLosingFocus(fieldId) {
    if (this.focusTimeouts[fieldId]) {
      clearTimeout(this.focusTimeouts[fieldId]);
    }
    this.focusTimeouts[fieldId] = setTimeout(() => {
      this.triggerChange();
      this.focusTimeouts[fieldId] = null;
    }, 1500);
  }
  triggerChange() {
    this.dataChange.emit();
  }
  static \u0275fac = function EducationEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducationEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EducationEditorComponent, selectors: [["app-education-editor"]], inputs: { educations: "educations" }, outputs: { dataChange: "dataChange" }, decls: 15, vars: 2, consts: [[1, "mb-14"], [1, "flex", "justify-between", "items-end", "mb-6"], [1, "flex", "items-center", "gap-3"], [1, "bg-amber-100", "text-amber-600", "p-2", "rounded-lg"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.25 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5"], [1, "text-sm", "font-semibold", "text-amber-600", "hover:text-amber-700", "bg-amber-50", "hover:bg-amber-100", "border", "border-amber-100", "hover:border-amber-200", "px-4", "py-2", "rounded-full", "transition-colors", "flex", "items-center", "gap-1.5", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "space-y-6"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-amber-200", 3, "opacity-40"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModelChange", "blur", "keyup.enter", "keyup.escape", "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5", "text-gray-300", "group-hover:text-indigo-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-amber-200"], [1, "absolute", "right-12", "top-4", "opacity-0", "group-hover:opacity-100", "flex", "flex-col", "gap-0", "z-10"], ["type", "button", "title", "Move Up", 1, "text-gray-300", "hover:text-amber-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5"], ["fill-rule", "evenodd", "d", "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", "clip-rule", "evenodd"], ["type", "button", "title", "Move Down", 1, "text-gray-300", "hover:text-amber-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["title", "Delete Education", 1, "absolute", "right-4", "top-4", "text-gray-300", "hover:text-red-500", "opacity-0", "group-hover:opacity-100", "transition-opacity", "p-1", "z-10", "bg-white/80", "rounded-full", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "p-6", "border-b", "border-gray-50", "flex", "flex-col", "md:flex-row", "gap-6"], [1, "flex-1"], [1, "flex", "items-center", "gap-1.5", "mb-2"], [1, "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], [1, "text-[9px]", "font-black", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "bg-gray-100", "px-1.5", "py-0.5", "rounded-full"], ["type", "text", "placeholder", "Institution Name", 1, "w-full", "text-xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-transparent", "hover:border-gray-200", "dark:border-neutral-600", "focus:border-amber-500", "focus:ring-0", "px-0", "py-1", "transition-colors", "bg-transparent", "placeholder-gray-300", "mb-1", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Master's in Computer Science", 1, "w-full", "text-base", "font-semibold", "text-amber-700", "border-0", "border-b", "border-transparent", "hover:border-amber-200", "focus:border-amber-500", "focus:ring-0", "px-0", "py-1", "transition-colors", "bg-transparent", "placeholder-amber-200", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-3", "md:w-[45%]"], [1, "col-span-1"], [1, "text-[10px]", "font-bold", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "block", "mb-1", "px-1"], ["type", "text", "placeholder", "2016", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-amber-500", "bg-gray-50", "dark:bg-neutral-900", "px-3", "py-1.5", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "2020", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-amber-500", "bg-gray-50", "dark:bg-neutral-900", "px-3", "py-1.5", 3, "ngModelChange", "ngModel"], [1, "col-span-1", "border-r", "border-gray-100", "pr-3"], ["type", "text", "placeholder", "City", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-amber-500", "bg-white", "px-3", "py-1.5", 3, "ngModelChange", "ngModel"], [1, "col-span-1", "pl-1"], [1, "text-[10px]", "font-bold", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "block", "mb-1", "px-1", "text-center"], ["type", "number", "step", "0.1", "placeholder", "3.8", 1, "w-full", "rounded-md", "border-gray-200", "dark:border-neutral-600", "text-sm", "shadow-sm", "focus:border-amber-500", "focus:bg-white", "bg-amber-50", "px-2", "py-1.5", "text-center", "font-bold", "text-amber-700", 3, "ngModelChange", "ngModel"], [1, "p-6", "bg-amber-50/20"], [1, "text-xs", "font-bold", "text-amber-500/80", "uppercase", "tracking-widest", "block", "mb-3", "pl-1"], [1, "space-y-3"], [1, "flex", "gap-3", "group/bullet", "items-start", 3, "opacity-40"], [1, "mt-4", "ml-6", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-amber-600", "hover:bg-amber-600", "hover:text-white", "border", "border-amber-200", "px-4", "py-2", "rounded-md", "transition-all", "inline-flex", "items-center", "gap-1", "shadow-sm", 3, "click"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z", "clip-rule", "evenodd"], ["d", "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"], [1, "flex", "gap-3", "group/bullet", "items-start"], [1, "mt-2.5", "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], ["placeholder", "Cum Laude, Dean's List, Thesis title...", "rows", "2", 1, "flex-1", "rounded-lg", "border", "border-gray-200", "dark:border-neutral-600", "text-[15px]", "shadow-sm", "focus:border-amber-500", "focus:ring", "focus:ring-amber-100", "bg-white", "resize-y", "min-h-[60px]", "p-3", "text-gray-700", "dark:text-neutral-300", "leading-relaxed", "transition-shadow", 3, "ngModelChange", "ngModel"], [1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100"], [1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function EducationEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, EducationEditorComponent_Conditional_6_Template, 1, 1, "input", 6);
      \u0275\u0275conditionalCreate(7, EducationEditorComponent_Conditional_7_Template, 4, 1, "h2", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "button", 8);
      \u0275\u0275listener("click", function EducationEditorComponent_Template_button_click_8_listener() {
        return ctx.onAddEducation();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Add Degree ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275repeaterCreate(13, EducationEditorComponent_For_14_Template, 47, 18, "div", 12, ctx.trackByIndex, true);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.editingLabel() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editingLabel() ? 7 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.educations);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducationEditorComponent, [{
    type: Component,
    args: [{ selector: "app-education-editor", standalone: true, imports: [FormsModule], template: `<section class="mb-14">
  <div class="flex justify-between items-end mb-6">
    <div class="flex items-center gap-3">
      <div class="bg-amber-100 text-amber-600 p-2 rounded-lg">
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.25 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
      <!-- Inline rename: click title to edit -->
      @if (editingLabel()) {
      <input
        type="text"
        [(ngModel)]="labelDraft"
        (blur)="commitRename()"
        (keyup.enter)="commitRename()"
        (keyup.escape)="editingLabel.set(false)"
        autofocus
        class="text-2xl font-bold text-gray-900 border-0 border-b-2 border-indigo-400 focus:ring-0 bg-transparent outline-none px-0 py-0.5 w-48"
      />
      } @if (!editingLabel()) {
      <h2
        class="text-2xl font-bold text-gray-900 dark:text-neutral-50 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group flex items-center gap-1.5"
        (click)="startRename()"
        title="Click to rename section"
      >
        {{ getSectionLabel() }}
        <svg
          class="h-3.5 w-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </h2>
      }
    </div>
    <button
      (click)="onAddEducation()"
      class="text-sm font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-100 hover:border-amber-200 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      Add Degree
    </button>
  </div>

  <div class="space-y-6">
    @for (ed of educations; track trackByIndex(i, ed); let i = $index) {
    <div
      class="bg-white dark:bg-neutral-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-neutral-700 overflow-hidden relative group transition-all hover:border-amber-200"
      [class.opacity-40]="!isActive(ed.id)"
    >
      <div
        class="absolute right-12 top-4 opacity-0 group-hover:opacity-100 flex flex-col gap-0 z-10"
      >
        <button
          type="button"
          (click)="moveSectionItem(educations, i, -1)"
          [disabled]="i === 0"
          class="text-gray-300 hover:text-amber-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Up"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          (click)="moveSectionItem(educations, i, 1)"
          [disabled]="i === educations.length - 1"
          class="text-gray-300 hover:text-amber-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Down"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <button
        (click)="removeSection(i)"
        class="absolute right-4 top-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 z-10 bg-white/80 rounded-full"
        title="Delete Education"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <div class="flex items-center gap-1.5 mb-2">
            <button
              (click)="toggleActive(ed.id)"
              class="shrink-0 p-0.5 rounded transition-colors"
              [class.text-amber-500]="isActive(ed.id)"
              [class.text-gray-300]="!isActive(ed.id)"
              [title]="isActive(ed.id) ? 'Hide from this profile' : 'Show in this profile'"
            >
              @if (isActive(ed.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              } @if (!isActive(ed.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
              }
            </button>
            @if (!isActive(ed.id)) {
            <span
              class="text-[9px] font-black text-gray-400 dark:text-neutral-500 uppercase tracking-widest bg-gray-100 px-1.5 py-0.5 rounded-full"
              >Inactive \u2014 hidden from this profile</span
            >
            }
          </div>
          <input
            type="text"
            [(ngModel)]="ed.school"
            (ngModelChange)="updateWithoutLosingFocus('ed_school_' + i)"
            placeholder="Institution Name"
            class="w-full text-xl font-bold text-gray-900 border-0 border-b-2 border-transparent hover:border-gray-200 dark:border-neutral-600 focus:border-amber-500 focus:ring-0 px-0 py-1 transition-colors bg-transparent placeholder-gray-300 mb-1"
          />
          <input
            type="text"
            [(ngModel)]="ed.degree"
            (ngModelChange)="updateWithoutLosingFocus('ed_deg_' + i)"
            placeholder="e.g. Master's in Computer Science"
            class="w-full text-base font-semibold text-amber-700 border-0 border-b border-transparent hover:border-amber-200 focus:border-amber-500 focus:ring-0 px-0 py-1 transition-colors bg-transparent placeholder-amber-200"
          />
        </div>
        <div class="grid grid-cols-2 gap-3 md:w-[45%]">
          <div class="col-span-1">
            <label
              class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
              >Start Year</label
            >
            <input
              type="text"
              [(ngModel)]="ed.start_date"
              (ngModelChange)="updateWithoutLosingFocus('ed_start_' + i)"
              placeholder="2016"
              class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-amber-500 bg-gray-50 dark:bg-neutral-900 px-3 py-1.5"
            />
          </div>
          <div class="col-span-1">
            <label
              class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
              >End Year</label
            >
            <input
              type="text"
              [(ngModel)]="ed.end_date"
              (ngModelChange)="updateWithoutLosingFocus('ed_end_' + i)"
              placeholder="2020"
              class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-amber-500 bg-gray-50 dark:bg-neutral-900 px-3 py-1.5"
            />
          </div>
          <div class="col-span-1 border-r border-gray-100 pr-3">
            <label
              class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1"
              >Location</label
            >
            <input
              type="text"
              [(ngModel)]="ed.location"
              (ngModelChange)="updateWithoutLosingFocus('ed_loc_' + i)"
              placeholder="City"
              class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-amber-500 bg-white px-3 py-1.5"
            />
          </div>
          <div class="col-span-1 pl-1">
            <label
              class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-1 text-center"
              >GPA</label
            >
            <input
              type="number"
              step="0.1"
              [(ngModel)]="ed.gpa"
              (ngModelChange)="updateWithoutLosingFocus('ed_gpa_' + i)"
              placeholder="3.8"
              class="w-full rounded-md border-gray-200 dark:border-neutral-600 text-sm shadow-sm focus:border-amber-500 focus:bg-white bg-amber-50 px-2 py-1.5 text-center font-bold text-amber-700"
            />
          </div>
        </div>
      </div>
      <!-- Edu Desc -->
      <div class="p-6 bg-amber-50/20">
        <label
          class="text-xs font-bold text-amber-500/80 uppercase tracking-widest block mb-3 pl-1"
          >Coursework & Honors</label
        >
        <div class="space-y-3">
          @for (description of ed.description; track trackByIndex(j,
          description); let j = $index) {
          <div
            class="flex gap-3 group/bullet items-start"
            [class.opacity-40]="!isActive(description.id)"
          >
            <button
              (click)="toggleActive(description.id)"
              class="mt-2.5 shrink-0 p-0.5 rounded transition-colors"
              [class.text-amber-400]="isActive(description.id)"
              [class.text-gray-300]="!isActive(description.id)"
              [title]="isActive(description.id) ? 'Hide bullet' : 'Show bullet'"
            >
              @if (isActive(description.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              } @if (!isActive(description.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
              }
            </button>
            <textarea
              [(ngModel)]="ed.description[j].text"
              (ngModelChange)="updateWithoutLosingFocus('ed_' + i + '_desc_' + j)"
              placeholder="Cum Laude, Dean's List, Thesis title..."
              class="flex-1 rounded-lg border border-gray-200 dark:border-neutral-600 text-[15px] shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-100 bg-white resize-y min-h-[60px] p-3 text-gray-700 dark:text-neutral-300 leading-relaxed transition-shadow"
              rows="2"
            ></textarea>
            @if (ed.description.length > 0) {
            <button
              (click)="onRemoveEducationDescription(ed, j)"
              class="mt-2 text-gray-400 dark:text-neutral-500 hover:text-red-500 opacity-0 group-hover/bullet:opacity-100 transition-opacity p-1 bg-white hover:bg-red-50 rounded-md border border-transparent hover:border-red-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            }
          </div>
          }
        </div>
        <button
          (click)="onAddEducationDescription(ed)"
          class="mt-4 ml-6 text-xs font-bold uppercase tracking-wider text-amber-600 hover:bg-amber-600 hover:text-white border border-amber-200 px-4 py-2 rounded-md transition-all inline-flex items-center gap-1 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          Add Detail
        </button>
      </div>
    </div>
    }
  </div>
</section>
` }]
  }], null, { educations: [{
    type: Input
  }], dataChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EducationEditorComponent, { className: "EducationEditorComponent", filePath: "src/app/editor/education-editor/education-editor.ts", lineNumber: 20 });
})();

// src/app/editor/achievements-editor/achievements-editor.ts
function AchievementsEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AchievementsEditorComponent_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.labelDraft, $event) || (ctx_r1.labelDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function AchievementsEditorComponent_Conditional_6_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.enter", function AchievementsEditorComponent_Conditional_6_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.escape", function AchievementsEditorComponent_Conditional_6_Template_input_keyup_escape_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editingLabel.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.labelDraft);
  }
}
function AchievementsEditorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 14);
    \u0275\u0275listener("click", function AchievementsEditorComponent_Conditional_7_Template_h2_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRename());
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSectionLabel(), " ");
  }
}
function AchievementsEditorComponent_For_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 38)(2, "path", 39);
    \u0275\u0275elementEnd();
  }
}
function AchievementsEditorComponent_For_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 40)(2, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function AchievementsEditorComponent_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Inactive \u2014 hidden from this profile");
    \u0275\u0275elementEnd();
  }
}
function AchievementsEditorComponent_For_14_For_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "path", 38)(2, "path", 39);
    \u0275\u0275elementEnd();
  }
}
function AchievementsEditorComponent_For_14_For_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "path", 40)(2, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function AchievementsEditorComponent_For_14_For_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function AchievementsEditorComponent_For_14_For_25_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_92_r9 = \u0275\u0275nextContext().$index;
      const achievement_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemoveAchievementDescription(achievement_r6, \u0275$index_92_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd()();
  }
}
function AchievementsEditorComponent_For_14_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43);
    \u0275\u0275listener("click", function AchievementsEditorComponent_For_14_For_25_Template_button_click_1_listener() {
      const description_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(description_r8.id));
    });
    \u0275\u0275conditionalCreate(2, AchievementsEditorComponent_For_14_For_25_Conditional_2_Template, 3, 0, ":svg:svg", 44);
    \u0275\u0275conditionalCreate(3, AchievementsEditorComponent_For_14_For_25_Conditional_3_Template, 3, 0, ":svg:svg", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AchievementsEditorComponent_For_14_For_25_Template_textarea_ngModelChange_4_listener($event) {
      const \u0275$index_92_r9 = \u0275\u0275restoreView(_r7).$index;
      const achievement_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(achievement_r6.description[\u0275$index_92_r9].text, $event) || (achievement_r6.description[\u0275$index_92_r9].text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AchievementsEditorComponent_For_14_For_25_Template_textarea_ngModelChange_4_listener() {
      const \u0275$index_92_r9 = \u0275\u0275restoreView(_r7).$index;
      const \u0275$index_33_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ach_" + \u0275$index_33_r5 + "_desc_" + \u0275$index_92_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AchievementsEditorComponent_For_14_For_25_Conditional_5_Template, 3, 0, "button", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const description_r8 = ctx.$implicit;
    const \u0275$index_92_r9 = ctx.$index;
    const achievement_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(description_r8.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-yellow-400", ctx_r1.isActive(description_r8.id))("text-gray-300", !ctx_r1.isActive(description_r8.id));
    \u0275\u0275property("title", ctx_r1.isActive(description_r8.id) ? "Hide bullet" : "Show bullet");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(description_r8.id) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(description_r8.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", achievement_r6.description[\u0275$index_92_r9].text);
    \u0275\u0275advance();
    \u0275\u0275conditional(achievement_r6.description.length > 0 ? 5 : -1);
  }
}
function AchievementsEditorComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "button", 19);
    \u0275\u0275listener("click", function AchievementsEditorComponent_For_14_Template_button_click_2_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.achievements, \u0275$index_33_r5, -1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 20);
    \u0275\u0275element(4, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function AchievementsEditorComponent_For_14_Template_button_click_5_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSectionItem(ctx_r1.achievements, \u0275$index_33_r5, 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 20);
    \u0275\u0275element(7, "path", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function AchievementsEditorComponent_For_14_Template_button_click_8_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSection(\u0275$index_33_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 25);
    \u0275\u0275element(10, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 27)(12, "div", 28)(13, "button", 29);
    \u0275\u0275listener("click", function AchievementsEditorComponent_For_14_Template_button_click_13_listener() {
      const achievement_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleActive(achievement_r6.id));
    });
    \u0275\u0275conditionalCreate(14, AchievementsEditorComponent_For_14_Conditional_14_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275conditionalCreate(15, AchievementsEditorComponent_For_14_Conditional_15_Template, 3, 0, ":svg:svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, AchievementsEditorComponent_For_14_Conditional_16_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 31);
    \u0275\u0275text(18, "Award / Honor Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AchievementsEditorComponent_For_14_Template_input_ngModelChange_19_listener($event) {
      const achievement_r6 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(achievement_r6.title, $event) || (achievement_r6.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AchievementsEditorComponent_For_14_Template_input_ngModelChange_19_listener() {
      const \u0275$index_33_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateWithoutLosingFocus("ach_title_" + \u0275$index_33_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 33)(21, "label", 34);
    \u0275\u0275text(22, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 35);
    \u0275\u0275repeaterCreate(24, AchievementsEditorComponent_For_14_For_25_Template, 6, 11, "div", 36, \u0275\u0275componentInstance().trackByIndex, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 37);
    \u0275\u0275listener("click", function AchievementsEditorComponent_For_14_Template_button_click_26_listener() {
      const achievement_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddAchievementDescription(achievement_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 9);
    \u0275\u0275element(28, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Add Detail ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const achievement_r6 = ctx.$implicit;
    const \u0275$index_33_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", !ctx_r1.isActive(achievement_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275$index_33_r5 === ctx_r1.achievements.length - 1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("text-yellow-500", ctx_r1.isActive(achievement_r6.id))("text-gray-300", !ctx_r1.isActive(achievement_r6.id));
    \u0275\u0275property("title", ctx_r1.isActive(achievement_r6.id) ? "Hide from this profile" : "Show in this profile");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActive(achievement_r6.id) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(achievement_r6.id) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isActive(achievement_r6.id) ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", achievement_r6.title);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(achievement_r6.description);
  }
}
var AchievementsEditorComponent = class _AchievementsEditorComponent {
  dataService = inject(DataService);
  achievements;
  dataChange = new EventEmitter();
  // Section renaming
  sectionType = SectionType.ACHIEVEMENT;
  editingLabel = signal(false, ...ngDevMode ? [{ debugName: "editingLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  labelDraft = "";
  getSectionLabel() {
    return this.dataService.getSectionLabel(this.sectionType);
  }
  startRename() {
    this.labelDraft = this.getSectionLabel();
    this.editingLabel.set(true);
  }
  commitRename() {
    this.dataService.setSectionLabel(this.sectionType, this.labelDraft);
    this.editingLabel.set(false);
  }
  trackByIndex(index, item) {
    return index;
  }
  genId() {
    return crypto.randomUUID();
  }
  isActive(id) {
    return this.dataService.isActive(id);
  }
  toggleActive(id) {
    this.dataService.toggleActive(id);
  }
  moveSectionItem(arr, index, direction) {
    const target = index + direction;
    if (target < 0 || target >= arr.length)
      return;
    [arr[index], arr[target]] = [arr[target], arr[index]];
    this.triggerChange();
  }
  onAddAchievement() {
    this.achievements.push({ id: this.genId(), title: "", description: [] });
    this.triggerChange();
  }
  removeSection(index) {
    this.achievements.splice(index, 1);
    this.triggerChange();
  }
  onAddAchievementDescription(achievement) {
    if (!achievement.description)
      achievement.description = [];
    achievement.description.push({ id: this.genId(), text: "" });
    this.triggerChange();
  }
  onRemoveAchievementDescription(achievement, index) {
    if (!achievement.description)
      return;
    achievement.description.splice(index, 1);
    this.triggerChange();
  }
  focusTimeouts = {};
  updateWithoutLosingFocus(fieldId) {
    if (this.focusTimeouts[fieldId]) {
      clearTimeout(this.focusTimeouts[fieldId]);
    }
    this.focusTimeouts[fieldId] = setTimeout(() => {
      this.triggerChange();
      this.focusTimeouts[fieldId] = null;
    }, 1500);
  }
  triggerChange() {
    this.dataChange.emit();
  }
  static \u0275fac = function AchievementsEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AchievementsEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AchievementsEditorComponent, selectors: [["app-achievements-editor"]], inputs: { achievements: "achievements" }, outputs: { dataChange: "dataChange" }, decls: 15, vars: 2, consts: [[1, "mb-14", "pb-20"], [1, "flex", "justify-between", "items-end", "mb-6"], [1, "flex", "items-center", "gap-3"], [1, "bg-yellow-100", "text-yellow-600", "p-2", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-6", "w-6"], ["fill-rule", "evenodd", "d", "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 6H12a1 1 0 110-2h1.586l-1.293-1.293A1 1 0 0112 2z", "clip-rule", "evenodd"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5"], [1, "text-sm", "font-semibold", "text-yellow-600", "hover:text-yellow-700", "bg-yellow-50", "hover:bg-yellow-100", "border", "border-yellow-100", "hover:border-yellow-200", "px-4", "py-2", "rounded-full", "transition-colors", "flex", "items-center", "gap-1.5", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "space-y-6"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-yellow-200", 3, "opacity-40"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-48", 3, "ngModelChange", "blur", "keyup.enter", "keyup.escape", "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "dark:text-neutral-50", "cursor-pointer", "hover:text-indigo-600", "dark:hover:text-indigo-400", "transition-colors", "group", "flex", "items-center", "gap-1.5", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5", "text-gray-300", "group-hover:text-indigo-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.04)]", "dark:shadow-none", "border", "border-gray-100", "dark:border-neutral-700", "overflow-hidden", "relative", "group", "transition-all", "hover:border-yellow-200"], [1, "absolute", "right-12", "top-4", "opacity-0", "group-hover:opacity-100", "flex", "flex-col", "gap-0", "z-10"], ["type", "button", "title", "Move Up", 1, "text-gray-300", "hover:text-yellow-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5"], ["fill-rule", "evenodd", "d", "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", "clip-rule", "evenodd"], ["type", "button", "title", "Move Down", 1, "text-gray-300", "hover:text-yellow-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "bg-white/80", "rounded", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["title", "Delete Award", 1, "absolute", "right-4", "top-4", "text-gray-300", "hover:text-red-500", "opacity-0", "group-hover:opacity-100", "transition-opacity", "p-1", "z-10", "bg-white/80", "rounded-full", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "p-6", "border-b", "border-gray-50"], [1, "flex", "items-center", "gap-1.5", "mb-2"], [1, "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], [1, "text-[9px]", "font-black", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "bg-gray-100", "px-1.5", "py-0.5", "rounded-full"], [1, "text-[10px]", "font-bold", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-widest", "block", "mb-1", "px-0.5"], ["type", "text", "placeholder", "e.g. Employee of the Year", 1, "w-full", "text-[18px]", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-transparent", "hover:border-gray-200", "dark:border-neutral-600", "focus:border-yellow-400", "focus:ring-0", "px-0", "py-1", "transition-colors", "bg-transparent", "placeholder-gray-300", "md:w-3/4", 3, "ngModelChange", "ngModel"], [1, "p-6", "bg-yellow-50/20"], [1, "text-xs", "font-bold", "text-yellow-600/80", "uppercase", "tracking-widest", "block", "mb-3", "pl-1"], [1, "space-y-3"], [1, "flex", "gap-3", "group/bullet", "items-start", 3, "opacity-40"], [1, "mt-4", "ml-6", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-yellow-600", "hover:bg-yellow-500", "hover:text-white", "border", "border-yellow-200", "px-4", "py-2", "rounded-md", "transition-all", "inline-flex", "items-center", "gap-1", "shadow-sm", 3, "click"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z", "clip-rule", "evenodd"], ["d", "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"], [1, "flex", "gap-3", "group/bullet", "items-start"], [1, "mt-2.5", "shrink-0", "p-0.5", "rounded", "transition-colors", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], ["placeholder", "Explain the significance of this achievement...", "rows", "2", 1, "flex-1", "rounded-lg", "border", "border-gray-200", "dark:border-neutral-600", "text-[15px]", "shadow-sm", "focus:border-yellow-400", "focus:ring", "focus:ring-yellow-100", "bg-white", "resize-y", "min-h-[60px]", "p-3", "text-gray-700", "dark:text-neutral-300", "leading-relaxed", "transition-shadow", 3, "ngModelChange", "ngModel"], [1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100"], [1, "mt-2", "text-gray-400", "dark:text-neutral-500", "hover:text-red-500", "opacity-0", "group-hover/bullet:opacity-100", "transition-opacity", "p-1", "bg-white", "hover:bg-red-50", "rounded-md", "border", "border-transparent", "hover:border-red-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function AchievementsEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, AchievementsEditorComponent_Conditional_6_Template, 1, 1, "input", 6);
      \u0275\u0275conditionalCreate(7, AchievementsEditorComponent_Conditional_7_Template, 4, 1, "h2", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "button", 8);
      \u0275\u0275listener("click", function AchievementsEditorComponent_Template_button_click_8_listener() {
        return ctx.onAddAchievement();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Add Award ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275repeaterCreate(13, AchievementsEditorComponent_For_14_Template, 30, 13, "div", 12, ctx.trackByIndex, true);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.editingLabel() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editingLabel() ? 7 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.achievements);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AchievementsEditorComponent, [{
    type: Component,
    args: [{ selector: "app-achievements-editor", standalone: true, imports: [FormsModule], template: `<section class="mb-14 pb-20">
  <div class="flex justify-between items-end mb-6">
    <div class="flex items-center gap-3">
      <div class="bg-yellow-100 text-yellow-600 p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 6H12a1 1 0 110-2h1.586l-1.293-1.293A1 1 0 0112 2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- Inline rename: click title to edit -->
      @if (editingLabel()) {
      <input
        type="text"
        [(ngModel)]="labelDraft"
        (blur)="commitRename()"
        (keyup.enter)="commitRename()"
        (keyup.escape)="editingLabel.set(false)"
        autofocus
        class="text-2xl font-bold text-gray-900 border-0 border-b-2 border-indigo-400 focus:ring-0 bg-transparent outline-none px-0 py-0.5 w-48"
      />
      } @if (!editingLabel()) {
      <h2
        class="text-2xl font-bold text-gray-900 dark:text-neutral-50 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group flex items-center gap-1.5"
        (click)="startRename()"
        title="Click to rename section"
      >
        {{ getSectionLabel() }}
        <svg
          class="h-3.5 w-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </h2>
      }
    </div>
    <button
      (click)="onAddAchievement()"
      class="text-sm font-semibold text-yellow-600 hover:text-yellow-700 bg-yellow-50 hover:bg-yellow-100 border border-yellow-100 hover:border-yellow-200 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      Add Award
    </button>
  </div>

  <div class="space-y-6">
    @for (achievement of achievements; track trackByIndex(i, achievement); let i
    = $index) {
    <div
      class="bg-white dark:bg-neutral-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-neutral-700 overflow-hidden relative group transition-all hover:border-yellow-200"
      [class.opacity-40]="!isActive(achievement.id)"
    >
      <div
        class="absolute right-12 top-4 opacity-0 group-hover:opacity-100 flex flex-col gap-0 z-10"
      >
        <button
          type="button"
          (click)="moveSectionItem(achievements, i, -1)"
          [disabled]="i === 0"
          class="text-gray-300 hover:text-yellow-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Up"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          (click)="moveSectionItem(achievements, i, 1)"
          [disabled]="i === achievements.length - 1"
          class="text-gray-300 hover:text-yellow-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 bg-white/80 rounded"
          title="Move Down"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <button
        (click)="removeSection(i)"
        class="absolute right-4 top-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 z-10 bg-white/80 rounded-full"
        title="Delete Award"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="p-6 border-b border-gray-50">
        <div class="flex items-center gap-1.5 mb-2">
          <button
            (click)="toggleActive(achievement.id)"
            class="shrink-0 p-0.5 rounded transition-colors"
            [class.text-yellow-500]="isActive(achievement.id)"
            [class.text-gray-300]="!isActive(achievement.id)"
            [title]="isActive(achievement.id) ? 'Hide from this profile' : 'Show in this profile'"
          >
            @if (isActive(achievement.id)) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
            } @if (!isActive(achievement.id)) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                clip-rule="evenodd"
              />
              <path
                d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
              />
            </svg>
            }
          </button>
          @if (!isActive(achievement.id)) {
          <span
            class="text-[9px] font-black text-gray-400 dark:text-neutral-500 uppercase tracking-widest bg-gray-100 px-1.5 py-0.5 rounded-full"
            >Inactive \u2014 hidden from this profile</span
          >
          }
        </div>
        <label
          class="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest block mb-1 px-0.5"
          >Award / Honor Title</label
        >
        <input
          type="text"
          [(ngModel)]="achievement.title"
          (ngModelChange)="updateWithoutLosingFocus('ach_title_' + i)"
          placeholder="e.g. Employee of the Year"
          class="w-full text-[18px] font-bold text-gray-900 border-0 border-b-2 border-transparent hover:border-gray-200 dark:border-neutral-600 focus:border-yellow-400 focus:ring-0 px-0 py-1 transition-colors bg-transparent placeholder-gray-300 md:w-3/4"
        />
      </div>
      <div class="p-6 bg-yellow-50/20">
        <label
          class="text-xs font-bold text-yellow-600/80 uppercase tracking-widest block mb-3 pl-1"
          >Description</label
        >
        <div class="space-y-3">
          @for (description of achievement.description; track trackByIndex(j,
          description); let j = $index) {
          <div
            class="flex gap-3 group/bullet items-start"
            [class.opacity-40]="!isActive(description.id)"
          >
            <button
              (click)="toggleActive(description.id)"
              class="mt-2.5 shrink-0 p-0.5 rounded transition-colors"
              [class.text-yellow-400]="isActive(description.id)"
              [class.text-gray-300]="!isActive(description.id)"
              [title]="isActive(description.id) ? 'Hide bullet' : 'Show bullet'"
            >
              @if (isActive(description.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              } @if (!isActive(description.id)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
              }
            </button>
            <textarea
              [(ngModel)]="achievement.description[j].text"
              (ngModelChange)="updateWithoutLosingFocus('ach_' + i + '_desc_' + j)"
              placeholder="Explain the significance of this achievement..."
              class="flex-1 rounded-lg border border-gray-200 dark:border-neutral-600 text-[15px] shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-100 bg-white resize-y min-h-[60px] p-3 text-gray-700 dark:text-neutral-300 leading-relaxed transition-shadow"
              rows="2"
            ></textarea>
            @if (achievement.description.length > 0) {
            <button
              (click)="onRemoveAchievementDescription(achievement, j)"
              class="mt-2 text-gray-400 dark:text-neutral-500 hover:text-red-500 opacity-0 group-hover/bullet:opacity-100 transition-opacity p-1 bg-white hover:bg-red-50 rounded-md border border-transparent hover:border-red-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            }
          </div>
          }
        </div>
        <button
          (click)="onAddAchievementDescription(achievement)"
          class="mt-4 ml-6 text-xs font-bold uppercase tracking-wider text-yellow-600 hover:bg-yellow-500 hover:text-white border border-yellow-200 px-4 py-2 rounded-md transition-all inline-flex items-center gap-1 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          Add Detail
        </button>
      </div>
    </div>
    }
  </div>
</section>
` }]
  }], null, { achievements: [{
    type: Input
  }], dataChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AchievementsEditorComponent, { className: "AchievementsEditorComponent", filePath: "src/app/editor/achievements-editor/achievements-editor.ts", lineNumber: 20 });
})();

// src/app/editor/summary-editor/summary-editor.component.ts
var _c03 = () => ["/ai"];
function SummaryEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function SummaryEditorComponent_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.labelDraft, $event) || (ctx_r1.labelDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function SummaryEditorComponent_Conditional_6_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.enter", function SummaryEditorComponent_Conditional_6_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.commitRename());
    })("keyup.escape", function SummaryEditorComponent_Conditional_6_Template_input_keyup_escape_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editingLabel.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.labelDraft);
  }
}
function SummaryEditorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h2", 19);
    \u0275\u0275listener("click", function SummaryEditorComponent_Conditional_7_Template_h2_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRename());
    });
    \u0275\u0275text(2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 20);
    \u0275\u0275element(4, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, " Appears at the top of your resume \xB7 Leave blank to hide ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSectionLabel(), " ");
  }
}
function SummaryEditorComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function SummaryEditorComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "circle", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function SummaryEditorComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, " Configure API key \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c03));
  }
}
function SummaryEditorComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, SummaryEditorComponent_Conditional_17_Conditional_5_Template, 2, 2, "a", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isApiKeyError() ? 5 : -1);
  }
}
var SummaryEditorComponent = class _SummaryEditorComponent {
  dataService = inject(DataService);
  aiService = inject(AiService);
  llmSettings = inject(LlmSettingsService);
  // Section renaming (matches the pattern used by skills-editor, experience-editor, etc.)
  sectionType = SectionType.SUMMARY;
  editingLabel = signal(false, ...ngDevMode ? [{ debugName: "editingLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  labelDraft = "";
  getSectionLabel() {
    return this.dataService.getSectionLabel(this.sectionType);
  }
  startRename() {
    this.labelDraft = this.getSectionLabel();
    this.editingLabel.set(true);
  }
  commitRename() {
    this.dataService.setSectionLabel(this.sectionType, this.labelDraft);
    this.editingLabel.set(false);
  }
  summaryText = signal("", ...ngDevMode ? [{ debugName: "summaryText" }] : (
    /* istanbul ignore next */
    []
  ));
  isGenerating = signal(false, ...ngDevMode ? [{ debugName: "isGenerating" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  wordCount = () => {
    const text = this.summaryText().trim();
    return text ? text.split(/\s+/).length : 0;
  };
  isApiKeyError = () => this.error().toLowerCase().includes("api key");
  ngOnInit() {
    this.dataService.ensureSummarySection();
    this.summaryText.set(this.dataService.getSummaryText());
  }
  onInput(event) {
    const text = event.target.value;
    this.summaryText.set(text);
    this.dataService.setSummaryText(text);
  }
  generateWithAI() {
    return __async(this, null, function* () {
      const config = this.llmSettings.getActiveConfig();
      if (!config.apiKey && config.provider !== "custom" && config.provider !== "lmstudio") {
        this.error.set("API key not configured. Go to Build with AI \u2192 Settings to configure.");
        return;
      }
      this.isGenerating.set(true);
      this.error.set("");
      try {
        const tier = this.dataService.getCurrentTier();
        const tierMeta = EXPERIENCE_TIERS.find((t) => t.id === tier);
        const resumeContext = this.dataService.buildAIContext();
        const jd = this.aiService.activeJobDescription();
        const summary = yield this.aiService.generateSummary(jd, resumeContext, tier, tierMeta?.label ?? tier);
        this.summaryText.set(summary);
        this.dataService.setSummaryText(summary);
      } catch (err) {
        this.error.set(err?.message ?? "Failed to generate summary. Please try again.");
      } finally {
        this.isGenerating.set(false);
      }
    });
  }
  static \u0275fac = function SummaryEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SummaryEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SummaryEditorComponent, selectors: [["app-summary-editor"]], decls: 27, vars: 11, consts: [[1, "mb-14"], [1, "flex", "justify-between", "items-end", "mb-6"], [1, "flex", "items-center", "gap-3"], [1, "bg-violet-100", "text-violet-600", "p-2", "rounded-lg"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.8", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-56", 3, "ngModel"], ["title", "Generate a professional summary using AI", 1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-lg", "border", "transition-all", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "animate-spin"], [1, "bg-white", "border", "border-gray-100", "rounded-2xl", "shadow-sm", "p-6", "hover:shadow-md", "transition-shadow"], [1, "relative"], ["rows", "4", "placeholder", "Write a compelling 2\u20133 sentence summary highlighting your key qualifications, years of experience, and what makes you a great fit. Or click '\u2728 Generate with AI' to auto-fill.", 1, "w-full", "px-4", "py-3", "text-sm", "text-gray-700", "bg-white", "border", "border-gray-200", "rounded-xl", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-violet-400", "focus:border-transparent", "transition-all", "placeholder:text-gray-300", "leading-relaxed", 3, "input", "value"], [1, "absolute", "bottom-2", "right-3", "text-[10px]", "text-gray-300", "select-none", "pointer-events-none"], [1, "mt-2", "text-xs", "text-red-500", "flex", "items-center", "gap-1"], [1, "flex", "gap-2", "mt-4", "flex-wrap"], [1, "text-[10px]", "text-gray-400", "font-medium", "uppercase", "tracking-wide"], [1, "text-[10px]", "text-gray-400"], ["type", "text", "autofocus", "", 1, "text-2xl", "font-bold", "text-gray-900", "border-0", "border-b-2", "border-indigo-400", "focus:ring-0", "bg-transparent", "outline-none", "px-0", "py-0.5", "w-56", 3, "ngModelChange", "blur", "keyup.enter", "keyup.escape", "ngModel"], ["title", "Click to rename section", 1, "text-2xl", "font-bold", "text-gray-900", "cursor-pointer", "hover:text-indigo-600", "transition-colors", "group", "flex", "items-center", "gap-1.5", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5", "text-gray-300", "group-hover:text-indigo-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "text-xs", "text-gray-400", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 3l14 9-14 9V3z"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3", "shrink-0"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "underline", "hover:text-red-700", "ml-1", "font-semibold", 3, "routerLink"]], template: function SummaryEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, SummaryEditorComponent_Conditional_6_Template, 1, 1, "input", 6);
      \u0275\u0275conditionalCreate(7, SummaryEditorComponent_Conditional_7_Template, 7, 1, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function SummaryEditorComponent_Template_button_click_8_listener() {
        return ctx.generateWithAI();
      });
      \u0275\u0275conditionalCreate(9, SummaryEditorComponent_Conditional_9_Template, 2, 0, ":svg:svg", 8);
      \u0275\u0275conditionalCreate(10, SummaryEditorComponent_Conditional_10_Template, 3, 0, ":svg:svg", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "textarea", 12);
      \u0275\u0275listener("input", function SummaryEditorComponent_Template_textarea_input_14_listener($event) {
        return ctx.onInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, SummaryEditorComponent_Conditional_17_Template, 6, 2, "p", 14);
      \u0275\u0275elementStart(18, "div", 15)(19, "span", 16);
      \u0275\u0275text(20, "Tips:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 17);
      \u0275\u0275text(22, "\u2713 Open with your strongest credential");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 17);
      \u0275\u0275text(24, "\u2713 Include a key metric or achievement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 17);
      \u0275\u0275text(26, "\u2713 End with your value proposition");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.editingLabel() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editingLabel() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isGenerating() ? "text-violet-600 bg-violet-50 border-violet-200 cursor-not-allowed" : "text-violet-600 bg-violet-50 border-violet-200 hover:bg-violet-100");
      \u0275\u0275property("disabled", ctx.isGenerating());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isGenerating() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isGenerating() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isGenerating() ? "Generating\u2026" : "\u2728 Generate with AI", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.summaryText());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.wordCount(), " words ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 17 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SummaryEditorComponent, [{
    type: Component,
    args: [{
      selector: "app-summary-editor",
      standalone: true,
      imports: [FormsModule, RouterLink],
      template: `
    <section class="mb-14">
      <!-- Section header \u2014 matches the pattern of skills/experience editors -->
      <div class="flex justify-between items-end mb-6">
        <div class="flex items-center gap-3">
          <!-- Icon -->
          <div class="bg-violet-100 text-violet-600 p-2 rounded-lg">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          <!-- Inline rename \u2014 click the title to edit (same pattern as skills-editor) -->
          @if (editingLabel()) {
            <input
              type="text"
              [(ngModel)]="labelDraft"
              (blur)="commitRename()"
              (keyup.enter)="commitRename()"
              (keyup.escape)="editingLabel.set(false)"
              autofocus
              class="text-2xl font-bold text-gray-900 border-0 border-b-2 border-indigo-400 focus:ring-0 bg-transparent outline-none px-0 py-0.5 w-56"
            />
          }

          @if (!editingLabel()) {
            <div>
              <h2
                class="text-2xl font-bold text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors group flex items-center gap-1.5"
                (click)="startRename()"
                title="Click to rename section"
              >
                {{ getSectionLabel() }}
                <svg
                  class="h-3.5 w-3.5 text-gray-300 group-hover:text-indigo-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </h2>
              <p class="text-xs text-gray-400 mt-0.5">
                Appears at the top of your resume \xB7 Leave blank to hide
              </p>
            </div>
          }
        </div>

        <!-- AI Generate button -->
        <button
          class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all"
          [class]="
            isGenerating()
              ? 'text-violet-600 bg-violet-50 border-violet-200 cursor-not-allowed'
              : 'text-violet-600 bg-violet-50 border-violet-200 hover:bg-violet-100'
          "
          [disabled]="isGenerating()"
          (click)="generateWithAI()"
          title="Generate a professional summary using AI"
        >
          @if (!isGenerating()) {
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          }
          @if (isGenerating()) {
            <svg
              class="w-3.5 h-3.5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          }
          {{ isGenerating() ? 'Generating\u2026' : '\u2728 Generate with AI' }}
        </button>
      </div>

      <!-- Content card -->
      <div
        class="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
      >
        <!-- Textarea -->
        <div class="relative">
          <textarea
            [value]="summaryText()"
            (input)="onInput($event)"
            rows="4"
            placeholder="Write a compelling 2\u20133 sentence summary highlighting your key qualifications, years of experience, and what makes you a great fit. Or click '\u2728 Generate with AI' to auto-fill."
            class="w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all placeholder:text-gray-300 leading-relaxed"
          ></textarea>
          <!-- Word count -->
          <span
            class="absolute bottom-2 right-3 text-[10px] text-gray-300 select-none pointer-events-none"
          >
            {{ wordCount() }} words
          </span>
        </div>

        <!-- Error message with link to AI settings -->
        @if (error()) {
          <p class="mt-2 text-xs text-red-500 flex items-center gap-1">
            <svg
              class="w-3 h-3 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              {{ error() }}
              @if (isApiKeyError()) {
                <a
                  [routerLink]="['/ai']"
                  class="underline hover:text-red-700 ml-1 font-semibold"
                >
                  Configure API key \u2192
                </a>
              }
            </span>
          </p>
        }

        <!-- Tips row -->
        <div class="flex gap-2 mt-4 flex-wrap">
          <span
            class="text-[10px] text-gray-400 font-medium uppercase tracking-wide"
            >Tips:</span
          >
          <span class="text-[10px] text-gray-400"
            >\u2713 Open with your strongest credential</span
          >
          <span class="text-[10px] text-gray-400"
            >\u2713 Include a key metric or achievement</span
          >
          <span class="text-[10px] text-gray-400"
            >\u2713 End with your value proposition</span
          >
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SummaryEditorComponent, { className: "SummaryEditorComponent", filePath: "src/app/editor/summary-editor/summary-editor.component.ts", lineNumber: 200 });
})();

// src/app/editor/editor.component.ts
function EditorComponent_For_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-summary-editor");
  }
}
function EditorComponent_For_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-skills-editor", 31);
    \u0275\u0275listener("dataChange", function EditorComponent_For_10_Conditional_11_Template_app_skills_editor_dataChange_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.debouncedSubmit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("skills", ctx_r2.skills);
  }
}
function EditorComponent_For_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-experience-editor", 32);
    \u0275\u0275listener("dataChange", function EditorComponent_For_10_Conditional_12_Template_app_experience_editor_dataChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.debouncedSubmit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("experiences", ctx_r2.experiences);
  }
}
function EditorComponent_For_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-projects-editor", 33);
    \u0275\u0275listener("dataChange", function EditorComponent_For_10_Conditional_13_Template_app_projects_editor_dataChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.debouncedSubmit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("projects", ctx_r2.projects);
  }
}
function EditorComponent_For_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-education-editor", 34);
    \u0275\u0275listener("dataChange", function EditorComponent_For_10_Conditional_14_Template_app_education_editor_dataChange_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.debouncedSubmit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("educations", ctx_r2.educations);
  }
}
function EditorComponent_For_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-achievements-editor", 35);
    \u0275\u0275listener("dataChange", function EditorComponent_For_10_Conditional_15_Template_app_achievements_editor_dataChange_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.debouncedSubmit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("achievements", ctx_r2.achievements);
  }
}
function EditorComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 19)(2, "button", 20);
    \u0275\u0275listener("click", function EditorComponent_For_10_Template_button_click_2_listener() {
      const \u0275$index_17_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveSectionType(\u0275$index_17_r2, -1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 21);
    \u0275\u0275element(4, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function EditorComponent_For_10_Template_button_click_7_listener() {
      const \u0275$index_17_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveSectionType(\u0275$index_17_r2, 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 21);
    \u0275\u0275element(9, "path", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, EditorComponent_For_10_Conditional_10_Template, 1, 0, "app-summary-editor");
    \u0275\u0275conditionalCreate(11, EditorComponent_For_10_Conditional_11_Template, 1, 1, "app-skills-editor", 26);
    \u0275\u0275conditionalCreate(12, EditorComponent_For_10_Conditional_12_Template, 1, 1, "app-experience-editor", 27);
    \u0275\u0275conditionalCreate(13, EditorComponent_For_10_Conditional_13_Template, 1, 1, "app-projects-editor", 28);
    \u0275\u0275conditionalCreate(14, EditorComponent_For_10_Conditional_14_Template, 1, 1, "app-education-editor", 29);
    \u0275\u0275conditionalCreate(15, EditorComponent_For_10_Conditional_15_Template, 1, 1, "app-achievements-editor", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r9 = ctx.$implicit;
    const \u0275$index_17_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_17_r2 === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275$index_17_r2 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", \u0275$index_17_r2 === ctx_r2.sectionOrder.length - 1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(section_r9 === "summary" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r9 === "skills" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r9 === "experience" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r9 === "projects" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r9 === "education" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r9 === "achievements" ? 15 : -1);
  }
}
function EditorComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-template-selector");
    \u0275\u0275elementEnd();
  }
}
var EditorComponent = class _EditorComponent {
  dataSerice = inject(DataService);
  updateTimeout = null;
  ignoreNextResumeSync = false;
  // Section display order (controls preview/PDF output order, not form order)
  sectionOrder = [
    "summary",
    "skills",
    "experience",
    "projects",
    "education",
    "achievements"
  ];
  // Display & Print Settings panel visibility
  showSettings = false;
  trackByIndex(index, item) {
    return index;
  }
  // Move a section TYPE up or down in the output order
  moveSectionType(index, direction) {
    const target = index + direction;
    if (target < 0 || target >= this.sectionOrder.length)
      return;
    [this.sectionOrder[index], this.sectionOrder[target]] = [
      this.sectionOrder[target],
      this.sectionOrder[index]
    ];
    this.debouncedSubmit();
  }
  // Use effect to automatically update the resume whenever any data changes
  constructor() {
    effect(() => {
      const activeResume = this.dataSerice.getResume()();
      if (!activeResume)
        return;
      if (this.ignoreNextResumeSync) {
        this.ignoreNextResumeSync = false;
        return;
      }
      this.loadResumeData(activeResume);
    });
    effect(() => {
      const trigger = this.dataSerice.getOpenSettingsTrigger()();
      if (trigger > 0) {
        this.showSettings = true;
        setTimeout(() => {
          document.getElementById("print-settings")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
  }
  ngOnInit() {
  }
  loadResumeData(resume) {
    this.personalInfo = { name: "", email: "", phone: "", links: [] };
    this.skills = [];
    this.experiences = [];
    this.projects = [];
    this.educations = [];
    this.achievements = [];
    resume.sections.forEach((section) => {
      switch (section.type) {
        case SectionType.PERSONAL_INFO:
          this.personalInfo = __spreadValues({}, section.content);
          break;
        case SectionType.SKILLS:
          this.skills.push(__spreadValues({}, section.content));
          break;
        case SectionType.EXPERIENCE:
          this.experiences.push(__spreadValues({}, section.content));
          break;
        case SectionType.PROJECTS:
          this.projects.push(__spreadValues({}, section.content));
          break;
        case SectionType.EDUCATION:
          this.educations.push(__spreadValues({}, section.content));
          break;
        case SectionType.ACHIEVEMENT:
          this.achievements.push(__spreadValues({}, section.content));
          break;
      }
    });
    const typeKeyMap = {
      [SectionType.SUMMARY]: "summary",
      [SectionType.SKILLS]: "skills",
      [SectionType.EXPERIENCE]: "experience",
      [SectionType.PROJECTS]: "projects",
      [SectionType.EDUCATION]: "education",
      [SectionType.ACHIEVEMENT]: "achievements"
    };
    const seen = /* @__PURE__ */ new Set();
    const order = [];
    resume.sections.forEach((s) => {
      const key = typeKeyMap[s.type];
      if (key && !seen.has(key)) {
        seen.add(key);
        order.push(key);
      }
    });
    ["skills", "experience", "projects", "education", "achievements"].forEach((k) => {
      if (!seen.has(k))
        order.push(k);
    });
    if (!seen.has("summary")) {
      order.unshift("summary");
    }
    this.sectionOrder = order;
  }
  debouncedSubmit() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    this.updateTimeout = setTimeout(() => {
      this.onSubmit();
      this.updateTimeout = null;
    }, 300);
  }
  personalInfo = {
    name: "",
    email: "",
    phone: "",
    links: []
  };
  skills = [];
  educations = [];
  experiences = [];
  projects = [];
  achievements = [];
  onSubmit() {
    const sectionMap = {
      skills: this.skills.filter((skill) => skill.skill_type || skill.skills?.length && skill.skills.some((s) => s.text)).map((skill) => ({ type: SectionType.SKILLS, content: skill })),
      experience: this.experiences.filter((exp) => exp.company || exp.position).map((experience) => ({
        type: SectionType.EXPERIENCE,
        content: experience
      })),
      projects: this.projects.filter((proj) => proj.project_name).map((project) => ({ type: SectionType.PROJECTS, content: project })),
      education: this.educations.filter((edu) => edu.school || edu.degree).map((education) => ({
        type: SectionType.EDUCATION,
        content: education
      })),
      achievements: this.achievements.filter((ach) => ach.title).map((achievement) => ({
        type: SectionType.ACHIEVEMENT,
        content: achievement
      }))
    };
    const currentResume = this.dataSerice.getResume()();
    const existingSummarySection = currentResume.sections.find((s) => s.type === SectionType.SUMMARY);
    const new_resume = {
      sections: [
        { type: SectionType.PERSONAL_INFO, content: this.personalInfo },
        ...this.sectionOrder.flatMap((key) => {
          if (key === "summary") {
            return existingSummarySection ? [existingSummarySection] : [];
          }
          return sectionMap[key] || [];
        })
      ]
    };
    this.ignoreNextResumeSync = true;
    this.dataSerice.updateResume(new_resume);
  }
  static \u0275fac = function EditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditorComponent, selectors: [["app-editor"]], decls: 24, vars: 4, consts: [[1, "pl-10", "pr-8", "py-8", "mx-auto", "font-sans", "text-gray-800", "dark:text-neutral-100", "bg-white", "dark:bg-neutral-800", "min-h-full", "transition-colors", "duration-200"], [1, "mb-10"], [1, "flex", "items-center", "gap-3", "mb-2"], [1, "w-1", "h-8", "rounded-full", "bg-gradient-to-b", "from-indigo-500", "to-violet-600"], [1, "text-3xl", "font-extrabold", "text-gray-900", "dark:text-neutral-50", "tracking-tight"], [1, "text-sm", "text-gray-400", "dark:text-neutral-500", "ml-4", "pl-0.5"], [3, "dataChange", "personalInfo"], [1, "relative"], ["id", "print-settings", 1, "mt-12", "border-t-2", "border-dashed", "border-gray-100", "pt-6"], ["type", "button", 1, "w-full", "flex", "items-center", "justify-between", "px-4", "py-3", "rounded-xl", "bg-gray-50", "hover:bg-gray-100", "border", "border-gray-200", "hover:border-gray-300", "transition-all", "group", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "text-gray-400", "group-hover:text-indigo-500", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", "clip-rule", "evenodd"], [1, "text-sm", "font-bold", "text-gray-600", "group-hover:text-gray-800"], [1, "text-xs", "text-gray-400", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-gray-400", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], [1, "mt-3", "px-4", "py-5", "bg-white", "rounded-xl", "border", "border-gray-100", "shadow-[0_0_15px_rgba(0,0,0,0.04)]"], [1, "section-order-controls", "absolute", "-left-8", "top-5", "flex", "flex-col", "items-center", "gap-0.5", "opacity-0", "hover-group-show", "z-10"], ["type", "button", "title", "Move section up", 1, "text-gray-300", "hover:text-indigo-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "transition-colors", 3, "click", "disabled"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", "clip-rule", "evenodd"], [1, "text-[9px]", "font-black", "text-gray-300", "leading-none"], ["type", "button", "title", "Move section down", 1, "text-gray-300", "hover:text-indigo-500", "disabled:opacity-20", "disabled:cursor-not-allowed", "p-0.5", "transition-colors", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], [3, "skills"], [3, "experiences"], [3, "projects"], [3, "educations"], [3, "achievements"], [3, "dataChange", "skills"], [3, "dataChange", "experiences"], [3, "dataChange", "projects"], [3, "dataChange", "educations"], [3, "dataChange", "achievements"]], template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "h1", 4);
      \u0275\u0275text(5, " Resume Editor ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Auto-saves as you type \xB7 Changes reflect in preview instantly ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "app-personal-info-editor", 6);
      \u0275\u0275listener("dataChange", function EditorComponent_Template_app_personal_info_editor_dataChange_8_listener() {
        return ctx.debouncedSubmit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(9, EditorComponent_For_10_Template, 16, 9, "div", 7, ctx.trackByIndex, true);
      \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
      \u0275\u0275listener("click", function EditorComponent_Template_button_click_12_listener() {
        return ctx.showSettings = !ctx.showSettings;
      });
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 12);
      \u0275\u0275element(16, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span", 14);
      \u0275\u0275text(18, "Display & Print Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 15);
      \u0275\u0275text(20, "Font \xB7 Size \xB7 Page Margins");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 16);
      \u0275\u0275element(22, "path", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, EditorComponent_Conditional_23_Template, 2, 0, "div", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("personalInfo", ctx.personalInfo);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.sectionOrder);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("rotate-180", ctx.showSettings);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showSettings ? 23 : -1);
    }
  }, dependencies: [
    FormsModule,
    TemplateSelectorComponent,
    PersonalInfoEditorComponent,
    SkillsEditorComponent,
    ExperienceEditorComponent,
    ProjectsEditorComponent,
    EducationEditorComponent,
    AchievementsEditorComponent,
    SummaryEditorComponent
  ], styles: ['@charset "UTF-8";\n\n\n.p-4[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  padding: 1rem;\n  background-color: var(--surface-panel);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  border-bottom: 2px solid #4a69bd;\n  padding-bottom: 0.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--text-secondary);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 500;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  color: var(--text-secondary);\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n.grid-cols-1[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background-color: #4a69bd;\n  color: white;\n}\nbutton.primary[_ngcontent-%COMP%]:hover {\n  background-color: #3c5aa6;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  background-color: var(--border-subtle);\n  color: var(--text-primary);\n}\nbutton.secondary[_ngcontent-%COMP%]:hover {\n  background-color: var(--border-default);\n}\nbutton.danger[_ngcontent-%COMP%] {\n  background-color: #e53e3e;\n  color: white;\n}\nbutton.danger[_ngcontent-%COMP%]:hover {\n  background-color: #c53030;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n@media print {\n  .p-4[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.relative[_ngcontent-%COMP%]:hover    > .section-order-controls[_ngcontent-%COMP%], \n.relative[_ngcontent-%COMP%]:focus-within    > .section-order-controls[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.section-order-controls[_ngcontent-%COMP%] {\n  transition: opacity 0.15s ease;\n}\n/*# sourceMappingURL=editor.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorComponent, [{
    type: Component,
    args: [{ selector: "app-editor", imports: [
      FormsModule,
      TemplateSelectorComponent,
      PersonalInfoEditorComponent,
      SkillsEditorComponent,
      ExperienceEditorComponent,
      ProjectsEditorComponent,
      EducationEditorComponent,
      AchievementsEditorComponent,
      SummaryEditorComponent
    ], standalone: true, template: '<div\n  class="pl-10 pr-8 py-8 mx-auto font-sans text-gray-800 dark:text-neutral-100 bg-white dark:bg-neutral-800 min-h-full transition-colors duration-200"\n>\n  <!-- Page header -->\n  <div class="mb-10">\n    <div class="flex items-center gap-3 mb-2">\n      <div\n        class="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-violet-600"\n      ></div>\n      <h1\n        class="text-3xl font-extrabold text-gray-900 dark:text-neutral-50 tracking-tight"\n      >\n        Resume Editor\n      </h1>\n    </div>\n    <p class="text-sm text-gray-400 dark:text-neutral-500 ml-4 pl-0.5">\n      Auto-saves as you type \xB7 Changes reflect in preview instantly\n    </p>\n  </div>\n\n  <app-personal-info-editor\n    [personalInfo]="personalInfo"\n    (dataChange)="debouncedSubmit()"\n  ></app-personal-info-editor>\n\n  @for (\n    section of sectionOrder;\n    track trackByIndex(si, section);\n    let si = $index\n  ) {\n    <!-- Section wrapper with inline order controls -->\n    <div class="relative">\n      <!-- Order badge + move arrows \u2014 shown on section header hover -->\n      <div\n        class="section-order-controls absolute -left-8 top-5 flex flex-col items-center gap-0.5 opacity-0 hover-group-show z-10"\n      >\n        <button\n          type="button"\n          (click)="moveSectionType(si, -1)"\n          [disabled]="si === 0"\n          class="text-gray-300 hover:text-indigo-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 transition-colors"\n          title="Move section up"\n        >\n          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">\n            <path\n              fill-rule="evenodd"\n              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"\n              clip-rule="evenodd"\n            />\n          </svg>\n        </button>\n        <span class="text-[9px] font-black text-gray-300 leading-none">{{\n          si + 1\n        }}</span>\n        <button\n          type="button"\n          (click)="moveSectionType(si, 1)"\n          [disabled]="si === sectionOrder.length - 1"\n          class="text-gray-300 hover:text-indigo-500 disabled:opacity-20 disabled:cursor-not-allowed p-0.5 transition-colors"\n          title="Move section down"\n        >\n          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">\n            <path\n              fill-rule="evenodd"\n              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"\n              clip-rule="evenodd"\n            />\n          </svg>\n        </button>\n      </div>\n      @if (section === "summary") {\n        <app-summary-editor></app-summary-editor>\n      }\n      @if (section === "skills") {\n        <app-skills-editor\n          [skills]="skills"\n          (dataChange)="debouncedSubmit()"\n        ></app-skills-editor>\n      }\n      @if (section === "experience") {\n        <app-experience-editor\n          [experiences]="experiences"\n          (dataChange)="debouncedSubmit()"\n        ></app-experience-editor>\n      }\n      @if (section === "projects") {\n        <app-projects-editor\n          [projects]="projects"\n          (dataChange)="debouncedSubmit()"\n        ></app-projects-editor>\n      }\n      @if (section === "education") {\n        <app-education-editor\n          [educations]="educations"\n          (dataChange)="debouncedSubmit()"\n        ></app-education-editor>\n      }\n      @if (section === "achievements") {\n        <app-achievements-editor\n          [achievements]="achievements"\n          (dataChange)="debouncedSubmit()"\n        ></app-achievements-editor>\n      }\n    </div>\n  }\n\n  <!-- \u2500\u2500 Display & Print Settings (collapsed by default) \u2500\u2500 -->\n  <div\n    id="print-settings"\n    class="mt-12 border-t-2 border-dashed border-gray-100 pt-6"\n  >\n    <button\n      type="button"\n      (click)="showSettings = !showSettings"\n      class="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all group"\n    >\n      <div class="flex items-center gap-3">\n        <div\n          class="text-gray-400 group-hover:text-indigo-500 transition-colors"\n        >\n          <!-- Gear icon -->\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            class="h-5 w-5"\n            viewBox="0 0 20 20"\n            fill="currentColor"\n          >\n            <path\n              fill-rule="evenodd"\n              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"\n              clip-rule="evenodd"\n            />\n          </svg>\n        </div>\n        <span class="text-sm font-bold text-gray-600 group-hover:text-gray-800"\n          >Display &amp; Print Settings</span\n        >\n        <span class="text-xs text-gray-400 font-medium"\n          >Font \xB7 Size \xB7 Page Margins</span\n        >\n      </div>\n      <!-- Chevron -->\n      <svg\n        class="w-4 h-4 text-gray-400 transition-transform duration-200"\n        [class.rotate-180]="showSettings"\n        fill="none"\n        viewBox="0 0 24 24"\n        stroke="currentColor"\n        stroke-width="2"\n      >\n        <path\n          stroke-linecap="round"\n          stroke-linejoin="round"\n          d="M19 9l-7 7-7-7"\n        />\n      </svg>\n    </button>\n\n    @if (showSettings) {\n      <div\n        class="mt-3 px-4 py-5 bg-white rounded-xl border border-gray-100 shadow-[0_0_15px_rgba(0,0,0,0.04)]"\n      >\n        <app-template-selector></app-template-selector>\n      </div>\n    }\n  </div>\n</div>\n', styles: ['@charset "UTF-8";\n\n/* src/app/editor/editor.component.scss */\n.p-4 {\n  height: 100%;\n  overflow-y: auto;\n  padding: 1rem;\n  background-color: var(--surface-panel);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nh1 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  border-bottom: 2px solid #4a69bd;\n  padding-bottom: 0.5rem;\n}\nh2 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--text-secondary);\n}\nh3 {\n  font-size: 1.125rem;\n  font-weight: 500;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  color: var(--text-secondary);\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.grid {\n  display: grid;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.gap-4 {\n  gap: 1rem;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.block {\n  display: block;\n}\n.text-gray-700 {\n  color: var(--text-secondary);\n}\n.flex {\n  display: flex;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.w-full {\n  width: 100%;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\nbutton {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\nbutton.primary {\n  background-color: #4a69bd;\n  color: white;\n}\nbutton.primary:hover {\n  background-color: #3c5aa6;\n}\nbutton.secondary {\n  background-color: var(--border-subtle);\n  color: var(--text-primary);\n}\nbutton.secondary:hover {\n  background-color: var(--border-default);\n}\nbutton.danger {\n  background-color: #e53e3e;\n  color: white;\n}\nbutton.danger:hover {\n  background-color: #c53030;\n}\n.text-sm {\n  font-size: 0.875rem;\n}\n@media print {\n  .p-4 {\n    display: none;\n  }\n}\n.relative:hover > .section-order-controls,\n.relative:focus-within > .section-order-controls {\n  opacity: 1;\n}\n.section-order-controls {\n  transition: opacity 0.15s ease;\n}\n/*# sourceMappingURL=editor.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditorComponent, { className: "EditorComponent", filePath: "src/app/editor/editor.component.ts", lineNumber: 41 });
})();

// node_modules/texlyre-busytex/dist/index.js
var Logger = class {
  constructor(verbose = false) {
    this.verbose = verbose;
  }
  debug(message, ...args) {
    if (this.verbose) {
      console.debug(`[BusyTeX Debug] ${message}`, ...args);
    }
  }
  info(message, ...args) {
    console.info(`[BusyTeX] ${message}`, ...args);
  }
  warn(message, ...args) {
    console.warn(`[BusyTeX Warning] ${message}`, ...args);
  }
  error(message, ...args) {
    console.error(`[BusyTeX Error] ${message}`, ...args);
  }
};
var ErrorHandler = class {
  static handle(error, context) {
    const message = this.getMessage(error);
    const fullMessage = context ? `${context}: ${message}` : message;
    return new Error(fullMessage);
  }
  static getMessage(error) {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  }
};
var EM_CACHE_DB = "EM_PRELOAD_CACHE";
var PACKAGES_STORE = "PACKAGES";
var METADATA_STORE = "METADATA";
function dataFileName(packageJsUrl) {
  const name = packageJsUrl.split("/").pop() || "";
  return name.replace(/\.js$/, ".data");
}
function openEmCache() {
  return new Promise((resolve) => {
    if (typeof indexedDB === "undefined")
      return resolve(null);
    const request = indexedDB.open(EM_CACHE_DB);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
    request.onupgradeneeded = () => {
      try {
        request.transaction?.abort();
      } catch (e) {
      }
      resolve(null);
    };
  });
}
function findMetadataKey(db, dataFile) {
  return __async(this, null, function* () {
    if (!db.objectStoreNames.contains(METADATA_STORE))
      return null;
    return yield new Promise((resolve) => {
      const tx = db.transaction(METADATA_STORE, "readonly");
      const req = tx.objectStore(METADATA_STORE).getAllKeys();
      req.onsuccess = () => {
        const keys = req.result;
        const match = keys.find((k) => String(k).endsWith(`/${dataFile}`));
        resolve(match ?? null);
      };
      req.onerror = () => resolve(null);
    });
  });
}
function isPackageCached(packageJsUrl) {
  return __async(this, null, function* () {
    const db = yield openEmCache();
    if (!db)
      return false;
    try {
      const key = yield findMetadataKey(db, dataFileName(packageJsUrl));
      return key !== null;
    } finally {
      db.close();
    }
  });
}
function deletePackageCache(packageJsUrl) {
  return __async(this, null, function* () {
    const db = yield openEmCache();
    if (!db)
      return;
    const dataFile = dataFileName(packageJsUrl);
    try {
      const metadataKey = yield findMetadataKey(db, dataFile);
      if (!metadataKey)
        return;
      const stores = [METADATA_STORE];
      if (db.objectStoreNames.contains(PACKAGES_STORE))
        stores.push(PACKAGES_STORE);
      yield new Promise((resolve) => {
        const tx = db.transaction(stores, "readwrite");
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
        tx.onabort = () => resolve();
        tx.objectStore(METADATA_STORE).delete(metadataKey);
        if (stores.includes(PACKAGES_STORE)) {
          const pkgPrefix = String(metadataKey).replace(/^metadata\//, "package/");
          const store = tx.objectStore(PACKAGES_STORE);
          const cursorReq = store.openKeyCursor();
          cursorReq.onsuccess = () => {
            const cursor = cursorReq.result;
            if (!cursor)
              return;
            const k = String(cursor.key);
            if (k.startsWith(pkgPrefix + "/"))
              store.delete(cursor.key);
            cursor.continue();
          };
        }
      });
    } finally {
      db.close();
    }
  });
}
function clearAllPackageCache() {
  return __async(this, null, function* () {
    if (typeof indexedDB === "undefined")
      return;
    yield new Promise((resolve) => {
      const req = indexedDB.deleteDatabase(EM_CACHE_DB);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
      req.onblocked = () => resolve();
    });
  });
}
var BusyTexRunner = class {
  constructor(config = {}) {
    this.initialized = false;
    this.worker = null;
    this.busytexPipeline = null;
    this.config = {
      busytexBasePath: config.busytexBasePath || "/core/busytex",
      verbose: config.verbose ?? false,
      engineMode: config.engineMode ?? "combined",
      preloadDataPackages: config.preloadDataPackages ?? [],
      catalogDataPackages: config.catalogDataPackages ?? []
    };
    this.logger = new Logger(this.config.verbose);
  }
  initialize(useWorker = true) {
    return __async(this, null, function* () {
      if (this.initialized)
        return;
      this.logger.info("Initializing BusyTeX...");
      try {
        if (useWorker) {
          yield this.initializeWorker();
        } else {
          yield this.initializeDirect();
        }
        this.initialized = true;
        this.logger.info("BusyTeX initialized successfully");
      } catch (error) {
        throw ErrorHandler.handle(error, "Failed to initialize BusyTeX");
      }
    });
  }
  initializeWorker() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const workerPath = `${this.config.busytexBasePath}/busytex_worker.js`;
        this.worker = new Worker(workerPath);
        const timeout = setTimeout(() => {
          reject(new Error("Timeout waiting for BusyTeX worker to initialize"));
        }, 12e4);
        this.worker.onmessage = ({ data }) => {
          if (data.initialized) {
            clearTimeout(timeout);
            this.logger.debug("BusyTeX worker initialized:", data.initialized);
            resolve();
          } else if (data.exception) {
            clearTimeout(timeout);
            reject(new Error(data.exception));
          }
        };
        this.worker.onerror = (error) => {
          clearTimeout(timeout);
          reject(new Error(`Worker error: ${error.message}`));
        };
        const { jsFile, wasmFile } = this.getEngineAssetNames();
        const busytexJs = `${this.config.busytexBasePath}/${jsFile}`;
        const busytexWasm = `${this.config.busytexBasePath}/${wasmFile}`;
        this.worker.postMessage({
          busytex_js: busytexJs,
          busytex_wasm: busytexWasm,
          preload_data_packages_js: this.config.preloadDataPackages,
          data_packages_js: this.config.catalogDataPackages,
          texmf_local: [],
          preload: true
        });
      });
    });
  }
  initializeDirect() {
    return __async(this, null, function* () {
      const pipelineScript = `${this.config.busytexBasePath}/busytex_pipeline.js`;
      yield new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = pipelineScript;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
      const BusytexPipeline = window.BusytexPipeline;
      const { jsFile, wasmFile } = this.getEngineAssetNames();
      const busytexJs = `${this.config.busytexBasePath}/${jsFile}`;
      const busytexWasm = `${this.config.busytexBasePath}/${wasmFile}`;
      this.busytexPipeline = new BusytexPipeline(busytexJs, busytexWasm, this.config.preloadDataPackages, this.config.catalogDataPackages, [], (msg) => this.logger.debug(msg), (versions) => this.logger.debug("Applet versions:", versions), true, BusytexPipeline.ScriptLoaderDocument);
      yield this.busytexPipeline.on_initialized_promise;
    });
  }
  getEngineAssetNames() {
    const mode = this.config.engineMode;
    if (mode === "combined") {
      return { jsFile: "busytex.js", wasmFile: "busytex.wasm" };
    }
    return { jsFile: `${mode}.js`, wasmFile: `${mode}.wasm` };
  }
  convertFilesToBusyTexFormat(files) {
    return files.map((f) => ({
      path: f.path,
      contents: f.content
    }));
  }
  compile(files, mainTexPath, bibtex = null, makeindex = null, rerun = null, verbose = "silent", driver = "xetex_bibtex8_dvipdfmx", dataPackagesJs = null, remoteEndpoint) {
    return __async(this, null, function* () {
      if (!this.initialized) {
        throw new Error("BusyTeX not initialized. Call initialize() first.");
      }
      this.logger.info(`Compiling ${mainTexPath}...`);
      const busytexFiles = this.convertFilesToBusyTexFormat(files);
      if (this.worker) {
        return this.compileWithWorker(busytexFiles, mainTexPath, bibtex, makeindex, rerun, verbose, driver, dataPackagesJs, remoteEndpoint);
      } else {
        return this.compileDirect(busytexFiles, mainTexPath, bibtex, makeindex, rerun, verbose, driver, dataPackagesJs, remoteEndpoint);
      }
    });
  }
  compileWithWorker(files, mainTexPath, bibtex, makeindex = null, rerun = null, verbose, driver, dataPackagesJs, remoteEndpoint) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        if (!this.worker) {
          reject(new Error("Worker not initialized"));
          return;
        }
        const timeout = setTimeout(() => {
          reject(new Error("Compilation timeout"));
        }, 18e4);
        this.worker.onmessage = ({ data }) => {
          if (data.print) {
            this.logger.debug(data.print);
          } else if (data.pdf !== void 0) {
            clearTimeout(timeout);
            resolve({
              success: data.exit_code === 0,
              pdf: data.pdf,
              synctex: data.synctex,
              log: data.log,
              exitCode: data.exit_code,
              logs: data.logs
            });
          } else if (data.exception) {
            clearTimeout(timeout);
            reject(new Error(data.exception));
          }
        };
        this.worker.postMessage({
          files,
          main_tex_path: mainTexPath,
          bibtex,
          verbose,
          driver,
          data_packages_js: dataPackagesJs,
          remote_endpoint: remoteEndpoint,
          makeindex,
          rerun
        });
      });
    });
  }
  compileDirect(files, mainTexPath, bibtex, makeindex = null, rerun = null, verbose, driver, dataPackagesJs, remoteEndpoint) {
    return __async(this, null, function* () {
      const result = yield this.busytexPipeline.compile(files, mainTexPath, bibtex, makeindex, rerun, verbose, driver, dataPackagesJs, remoteEndpoint);
      return {
        success: result.exit_code === 0,
        pdf: result.pdf,
        synctex: result.synctex,
        log: result.log,
        exitCode: result.exit_code,
        logs: result.logs
      };
    });
  }
  readProjectFiles(dir) {
    return __async(this, null, function* () {
      if (this.worker) {
        return new Promise((resolve, reject) => {
          this.worker.onmessage = ({ data }) => {
            if (data.project_files !== void 0)
              resolve(data.project_files.map((f) => ({ path: f.path, content: f.contents })));
            else if (data.exception)
              reject(new Error(data.exception));
          };
          this.worker.postMessage({ read_project_files: dir ? { dir } : true });
        });
      }
      const files = yield this.busytexPipeline.read_project_files(dir ?? null);
      return files.map((f) => ({ path: f.path, content: f.contents }));
    });
  }
  writeTexliveRemoteFiles(files) {
    return __async(this, null, function* () {
      const payload = files.map((f) => ({ name: f.name, format: f.format, contents: f.content }));
      if (this.worker) {
        return new Promise((resolve, reject) => {
          this.worker.onmessage = ({ data }) => {
            if (data.texlive_remote_written)
              resolve();
            else if (data.exception)
              reject(new Error(data.exception));
          };
          this.worker.postMessage({ write_texlive_remote_files: payload });
        });
      }
      yield this.busytexPipeline.write_texlive_remote_files(payload);
    });
  }
  writeTexliveRemoteMisses(keys) {
    return __async(this, null, function* () {
      if (this.worker) {
        return new Promise((resolve, reject) => {
          this.worker.onmessage = ({ data }) => {
            if (data.texlive_remote_misses_written)
              resolve();
            else if (data.exception)
              reject(new Error(data.exception));
          };
          this.worker.postMessage({ write_texlive_remote_misses: keys });
        });
      }
      yield this.busytexPipeline.write_texlive_remote_misses(keys);
    });
  }
  isPackageCached(packageJsUrl) {
    return __async(this, null, function* () {
      return isPackageCached(packageJsUrl);
    });
  }
  deletePackageCache(packageJsUrl) {
    return __async(this, null, function* () {
      yield deletePackageCache(packageJsUrl);
      if (this.initialized)
        this.terminate();
    });
  }
  clearAllPackageCache() {
    return __async(this, null, function* () {
      yield clearAllPackageCache();
      if (this.initialized)
        this.terminate();
    });
  }
  terminate() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    if (this.busytexPipeline) {
      this.busytexPipeline.terminate();
      this.busytexPipeline = null;
    }
    this.initialized = false;
    this.logger.info("BusyTeX terminated");
  }
  isInitialized() {
    return this.initialized;
  }
  getConfig() {
    return __spreadValues({}, this.config);
  }
};
var BaseTool = class {
  constructor(runner, verbose = false) {
    this.runner = runner;
    this.logger = new Logger(verbose);
  }
  compile(options) {
    return __async(this, null, function* () {
      if (!this.runner.isInitialized()) {
        yield this.runner.initialize();
      }
      const config = this.runner.getConfig();
      const driver = options.driver ?? this.getDriver();
      if (config.engineMode !== "combined") {
        const driverEngineMap = {
          "pdftex_bibtex8": "pdftex",
          "xetex_bibtex8_dvipdfmx": "xetex",
          "luahbtex_bibtex8": "luahbtex",
          "luatex_bibtex8": "luahbtex"
        };
        const requiredEngine = driverEngineMap[driver];
        if (requiredEngine && requiredEngine !== config.engineMode) {
          return {
            success: false,
            log: `Engine mismatch: driver "${driver}" requires "${requiredEngine}" but runner is configured with "${config.engineMode}". Use engineMode: "combined" or the matching engine.`,
            exitCode: 1,
            logs: []
          };
        }
      }
      const mainTexPath = this.getMainTexPath(options);
      const files = this.prepareFiles(options, mainTexPath);
      return this.runner.compile(files, mainTexPath, options.bibtex ?? null, options.makeindex ?? null, options.rerun ?? null, options.verbose ?? "silent", driver, options.dataPackagesJs ?? null, options.remoteEndpoint);
    });
  }
  getMainTexPath(options) {
    return options.mainTexPath ?? "main.tex";
  }
  prepareFiles(options, mainTexPath) {
    const files = [];
    files.push({ path: mainTexPath, content: options.input });
    if (options.additionalFiles) {
      files.push(...options.additionalFiles);
    }
    return files;
  }
};
var PdfLatex = class _PdfLatex extends BaseTool {
  getDriver() {
    return "pdftex_bibtex8";
  }
  compile(options) {
    return __async(this, null, function* () {
      return __superGet(_PdfLatex.prototype, this, "compile").call(this, __spreadProps(__spreadValues({}, options), { driver: this.getDriver() }));
    });
  }
};

// src/app/services/latex.service.ts
var KEY_CACHE_MODE = "rb_latex_cache_mode";
var KEY_SETUP_DONE = "rb_latex_setup_done";
var LatexService = class _LatexService {
  ds = inject(DataService);
  // ── Reactive state ────────────────────────────────────────────────────────
  engineState = signal("idle", ...ngDevMode ? [{ debugName: "engineState" }] : (
    /* istanbul ignore next */
    []
  ));
  progress = signal(null, ...ngDevMode ? [{ debugName: "progress" }] : (
    /* istanbul ignore next */
    []
  ));
  lastError = signal(null, ...ngDevMode ? [{ debugName: "lastError" }] : (
    /* istanbul ignore next */
    []
  ));
  isBusy = computed(() => this.engineState() === "initializing" || this.engineState() === "compiling", ...ngDevMode ? [{ debugName: "isBusy" }] : (
    /* istanbul ignore next */
    []
  ));
  // ── Preferences ───────────────────────────────────────────────────────────
  cacheMode = signal(localStorage.getItem(KEY_CACHE_MODE) ?? "local", ...ngDevMode ? [{ debugName: "cacheMode" }] : (
    /* istanbul ignore next */
    []
  ));
  isSetupDone = signal(localStorage.getItem(KEY_SETUP_DONE) === "true", ...ngDevMode ? [{ debugName: "isSetupDone" }] : (
    /* istanbul ignore next */
    []
  ));
  // ── Internal ──────────────────────────────────────────────────────────────
  runner = null;
  prewarmTimer = null;
  // ─────────────────────────────────────────────────────────────────────────
  // Public API
  // ─────────────────────────────────────────────────────────────────────────
  /** Schedule a silent 30s pre-warm if the user has already set up */
  schedulePrewarm() {
    if (!this.isSetupDone() || this.runner)
      return;
    this.prewarmTimer = setTimeout(() => this.initEngine(), 3e4);
  }
  /** Persist user's cache preference and start engine */
  savePreferences(cacheModeVal) {
    this.cacheMode.set(cacheModeVal);
    localStorage.setItem(KEY_CACHE_MODE, cacheModeVal);
    localStorage.setItem(KEY_SETUP_DONE, "true");
    this.isSetupDone.set(true);
    this.initEngine();
  }
  /** Reset all preferences – next Download PDF click shows setup again */
  resetPreferences() {
    [KEY_CACHE_MODE, KEY_SETUP_DONE].forEach((k) => localStorage.removeItem(k));
    this.isSetupDone.set(false);
    this.destroyRunner();
  }
  /** Main entry point called by the Download PDF button */
  downloadPdf(resume, activeIds) {
    return __async(this, null, function* () {
      this.lastError.set(null);
      if (this.engineState() === "idle" || this.engineState() === "error") {
        yield this.initEngine();
      }
      if (this.engineState() === "initializing") {
        yield this.waitForReady();
      }
      if (this.engineState() === "error") {
        throw new Error(this.lastError() ?? "Engine failed to start.");
      }
      const tex = this.buildTexDocument(resume, activeIds);
      this.engineState.set("compiling");
      this.progress.set({ phase: "compiling", label: "Compiling your resume\u2026", percent: 90 });
      try {
        const engine = new PdfLatex(this.runner);
        const result = yield engine.compile({ input: tex });
        if (result.success && result.pdf) {
          this.triggerDownload(result.pdf, this.fileName(resume));
        } else {
          const log = result.log ?? result.logs?.join("\n") ?? "No log output.";
          throw new Error(`LaTeX compilation failed.

Log:
${log}`);
        }
      } finally {
        this.engineState.set("ready");
        this.progress.set(null);
      }
    });
  }
  ngOnDestroy() {
    if (this.prewarmTimer)
      clearTimeout(this.prewarmTimer);
    this.destroyRunner();
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Engine lifecycle (private)
  // ─────────────────────────────────────────────────────────────────────────
  initEngine() {
    return __async(this, null, function* () {
      if (this.runner && this.engineState() === "ready")
        return;
      this.engineState.set("initializing");
      this.progress.set({ phase: "initializing", label: "Starting PDF engine\u2026", percent: 15 });
      try {
        const base = document.baseURI.endsWith("/") ? document.baseURI : document.baseURI + "/";
        const busytexBasePath = `${base}core/busytex`;
        const texliveBasicJs = `${busytexBasePath}/texlive-basic.js`;
        this.progress.set({ phase: "initializing", label: "Loading TeX engine\u2026", percent: 40 });
        this.runner = new BusyTexRunner({
          busytexBasePath,
          preloadDataPackages: [texliveBasicJs],
          catalogDataPackages: [texliveBasicJs]
        });
        yield this.runner.initialize();
        this.engineState.set("ready");
        this.progress.set(null);
      } catch (err) {
        const msg = err?.message ?? String(err);
        this.engineState.set("error");
        this.lastError.set(msg);
        this.progress.set(null);
        throw err;
      }
    });
  }
  waitForReady() {
    return new Promise((resolve) => {
      const check = () => {
        const s = this.engineState();
        if (s === "ready" || s === "error") {
          resolve();
          return;
        }
        setTimeout(check, 200);
      };
      check();
    });
  }
  destroyRunner() {
    this.runner = null;
    this.engineState.set("idle");
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Download trigger
  // ─────────────────────────────────────────────────────────────────────────
  triggerDownload(pdf, filename) {
    const buffer = pdf instanceof Uint8Array ? pdf.buffer : pdf;
    const blob = new Blob([buffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  fileName(resume) {
    const pi = resume.sections.find((s) => s.type === SectionType.PERSONAL_INFO)?.content;
    const name = pi?.name?.trim().replace(/\s+/g, "_") ?? "resume";
    return `${name}_resume.pdf`;
  }
  // ─────────────────────────────────────────────────────────────────────────
  // .tex document builder
  // ─────────────────────────────────────────────────────────────────────────
  buildTexDocument(resume, activeIds) {
    const active = new Set(activeIds);
    const isActive = (id) => active.size === 0 || active.has(id);
    const e = (t) => this.escape(String(t ?? ""));
    const marginV = this.ds.getPageMarginV()() ?? 15;
    const marginH = this.ds.getPageMarginH()() ?? 20;
    const toIn = (mm) => (Math.max(8, mm) / 25.4).toFixed(2) + "in";
    const top = toIn(marginV), bottom = toIn(marginV);
    const left = toIn(marginH), right = toIn(marginH);
    const pi = resume.sections.find((s) => s.type === SectionType.PERSONAL_INFO)?.content;
    const summaryRaw = resume.sections.find((s) => s.type === SectionType.SUMMARY)?.content;
    const experiences = resume.sections.filter((s) => s.type === SectionType.EXPERIENCE).map((s) => s.content).filter((ex) => isActive(ex.id));
    const projects = resume.sections.filter((s) => s.type === SectionType.PROJECTS).map((s) => s.content).filter((p) => isActive(p.id));
    const educations = resume.sections.filter((s) => s.type === SectionType.EDUCATION).map((s) => s.content).filter((ed) => isActive(ed.id));
    const skills = resume.sections.filter((s) => s.type === SectionType.SKILLS).map((s) => s.content).filter((sk) => isActive(sk.id));
    const achievements = resume.sections.filter((s) => s.type === SectionType.ACHIEVEMENT).map((s) => s.content).filter((a) => isActive(a.id));
    const eu = (url) => this.escapeUrl(url);
    const links = (pi?.links ?? []).filter((l) => l.url?.trim()).map((l) => `\\href{${eu(l.url)}}{${e(l.preview_name)}}`).join(" {\\textbar} ");
    const contactParts = [
      pi?.email ? `\\href{mailto:${eu(pi.email)}}{${e(pi.email)}}` : "",
      pi?.phone ? `\\href{tel:${eu(pi.phone)}}{${e(pi.phone)}}` : "",
      links
    ].filter(Boolean).join(" \\,|\\, ");
    const sectionOrder = resume.sections.map((s) => s.type).filter((t, i, arr) => arr.indexOf(t) === i && t !== SectionType.PERSONAL_INFO);
    let body = "";
    for (const sType of sectionOrder) {
      switch (sType) {
        case SectionType.SUMMARY: {
          if (summaryRaw?.text?.trim()) {
            body += `\\resumesection{${e(this.ds.getSectionLabel(SectionType.SUMMARY))}}
${e(summaryRaw.text)}
\\par\\entryspace
`;
          }
          break;
        }
        case SectionType.EXPERIENCE: {
          if (!experiences.length)
            break;
          body += `\\resumesection{${e(this.ds.getSectionLabel(SectionType.EXPERIENCE))}}
`;
          for (const exp of experiences) {
            const bullets = exp.descriptions.filter((b) => isActive(b.id) && b.text?.trim());
            const company = [e(exp.company), exp.location ? e(exp.location) : ""].filter(Boolean).join(", ");
            const dates = [e(exp.start_date), e(exp.end_date)].filter(Boolean).join(" \\textendash{} ");
            body += `\\resumeEntry{${e(exp.position)}}{${company}}{${dates}}
`;
            if (bullets.length)
              body += this.bulletList(bullets, e);
            body += `\\par\\entryspace
`;
          }
          break;
        }
        case SectionType.PROJECTS: {
          if (!projects.length)
            break;
          body += `\\resumesection{${e(this.ds.getSectionLabel(SectionType.PROJECTS))}}
`;
          for (const p of projects) {
            const tech = p.project_tech.filter(Boolean).map((t) => e(t)).join(", ");
            const bullets = p.project_description.filter((b) => isActive(b.id) && b.text?.trim());
            const dates = [e(p.start_date), e(p.end_date)].filter(Boolean).join(" \\textendash{} ");
            const nameStr = p.project_url?.trim() ? `\\href{${eu(p.project_url)}}{${e(p.project_name)}}` : e(p.project_name);
            body += `\\resumeEntry{${nameStr}}{${tech}}{${dates}}
`;
            if (bullets.length)
              body += this.bulletList(bullets, e);
            body += `\\par\\entryspace
`;
          }
          break;
        }
        case SectionType.EDUCATION: {
          if (!educations.length)
            break;
          body += `\\resumesection{${e(this.ds.getSectionLabel(SectionType.EDUCATION))}}
`;
          for (const ed of educations) {
            const school = [e(ed.school), ed.location ? e(ed.location) : ""].filter(Boolean).join(", ");
            const gpa = ed.gpa ? ` \\textendash{} ${e(ed.gpa)} CGPA` : "";
            const dates = [e(ed.start_date), e(ed.end_date)].filter(Boolean).join(" \\textendash{} ");
            body += `\\resumeEntry{${school}}{${e(ed.degree)}${gpa}}{${dates}}
\\par\\entryspace
`;
          }
          break;
        }
        case SectionType.SKILLS: {
          if (!skills.length)
            break;
          body += `\\resumesection{${e(this.ds.getSectionLabel(SectionType.SKILLS))}}
\\begin{skillslist}
`;
          for (const sk of skills) {
            const items = sk.skills.filter((s) => isActive(s.id) && s.text?.trim()).map((s) => e(s.text)).join(", ");
            if (items)
              body += `  \\item[\\textbf{${e(sk.skill_type)}:}] ${items}
`;
          }
          body += `\\end{skillslist}
`;
          break;
        }
        case SectionType.ACHIEVEMENT: {
          if (!achievements.length)
            break;
          body += `\\resumesection{${e(this.ds.getSectionLabel(SectionType.ACHIEVEMENT))}}
`;
          for (const ach of achievements) {
            const bullets = ach.description.filter((b) => isActive(b.id) && b.text?.trim());
            body += `\\noindent\\textbf{${e(ach.title)}}\\par\\vspace{2pt}
`;
            if (bullets.length)
              body += this.bulletList(bullets, e);
            else
              body += `\\par
`;
            body += `\\par\\entryspace
`;
          }
          break;
        }
      }
    }
    const nameBlock = pi?.name?.trim() ? `  {\\Huge\\bfseries ${e(pi.name)}}\\\\[4pt]
  {\\small ${contactParts}}` : `  {\\small ${contactParts}}`;
    return [
      `\\documentclass[10pt,letterpaper]{article}`,
      ``,
      `\\usepackage[top=${top},bottom=${bottom},left=${left},right=${right}]{geometry}`,
      `\\usepackage[T1]{fontenc}`,
      `\\usepackage[utf8]{inputenc}`,
      `\\usepackage{lmodern}`,
      `\\usepackage[hidelinks,pdfusetitle]{hyperref}`,
      `\\usepackage{tabularx}`,
      ``,
      `\\hypersetup{%`,
      `  pdfauthor={${e(pi?.name ?? "")}},%`,
      `  pdftitle={${e(pi?.name ?? "")} Resume},%`,
      `  pdfsubject={Resume},%`,
      `  pdfcreator={Resume Builder}%`,
      `}`,
      ``,
      `\\pagestyle{empty}`,
      `\\setlength{\\parindent}{0pt}`,
      `\\setlength{\\parskip}{0pt}`,
      `\\setlength{\\tabcolsep}{0pt}`,
      ``,
      `% --- Section heading ---`,
      `% Bold large title, 0.5pt rule below, consistent spacing above/below`,
      `\\newcommand{\\resumesection}[1]{%`,
      `  \\vspace{8pt}%`,
      `  {\\large\\bfseries #1}\\\\[-6pt]%`,
      `  \\rule{\\textwidth}{0.4pt}%`,
      `  \\vspace{2pt}%`,
      `  \\par\\noindent`,
      `}`,
      ``,
      `% --- Entry spacing between entries within a section ---`,
      `\\newcommand{\\entryspace}{\\vspace{4pt}}`,
      ``,
      `% --- Job/project/education entry ---`,
      `% Row 1: bold title (left) + small date (right)`,
      `% Row 2: italic subtitle (left)`,
      `\\newcommand{\\resumeEntry}[3]{%`,
      `  \\begin{tabularx}{\\textwidth}{@{}X r@{}}`,
      `    \\textbf{#1} & {\\small\\normalfont #3} \\\\`,
      `    {\\small\\itshape #2} & \\\\`,
      `  \\end{tabularx}%`,
      `  \\vspace{3pt}%`,
      `}`,
      ``,
      `% --- Compact bullet list (for experience / project / achievement bullets) ---`,
      `\\newenvironment{resumelist}{%`,
      `  \\begin{list}{\\textbullet}{%`,
      `    \\setlength{\\topsep}{1pt}%`,
      `    \\setlength{\\partopsep}{0pt}%`,
      `    \\setlength{\\itemsep}{1pt}%`,
      `    \\setlength{\\parsep}{0pt}%`,
      `    \\setlength{\\parskip}{0pt}%`,
      `    \\setlength{\\leftmargin}{1.3em}%`,
      `    \\setlength{\\labelsep}{0.4em}%`,
      `  }%`,
      `}{\\end{list}}`,
      ``,
      `% --- Label-style list for Skills (no bullet, category name as label) ---`,
      `\\newenvironment{skillslist}{%`,
      `  \\begin{list}{}{%`,
      `    \\setlength{\\topsep}{1pt}%`,
      `    \\setlength{\\partopsep}{0pt}%`,
      `    \\setlength{\\itemsep}{2pt}%`,
      `    \\setlength{\\parsep}{0pt}%`,
      `    \\setlength{\\parskip}{0pt}%`,
      `    \\setlength{\\leftmargin}{0pt}%`,
      `    \\setlength{\\labelwidth}{0pt}%`,
      `    \\setlength{\\labelsep}{0pt}%`,
      `  }%`,
      `}{\\end{list}}`,
      ``,
      `\\begin{document}`,
      ``,
      `\\begin{center}`,
      nameBlock,
      `\\end{center}`,
      `\\vspace{4pt}`,
      ``,
      body,
      `\\end{document}`
    ].join("\n");
  }
  bulletList(bullets, e) {
    let out = `\\begin{resumelist}
`;
    for (const b of bullets)
      out += `  \\item ${e(b.text)}
`;
    out += `\\end{resumelist}
`;
    return out;
  }
  escape(text) {
    return text.replace(/\r?\n/g, " ").replace(/\\/g, "\\textbackslash{}").replace(/&/g, "\\&").replace(/%/g, "\\%").replace(/\$/g, "\\$").replace(/#/g, "\\#").replace(/_/g, "\\_").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/~/g, "\\textasciitilde{}").replace(/\^/g, "\\textasciicircum{}");
  }
  /**
   * Escape a URL for use inside \href{URL}{...}.
   * hyperref handles most URL characters natively — only % and # conflict
   * with LaTeX's own syntax and need escaping. Characters like _ ~ & are
   * valid URL characters and must NOT be escaped here.
   */
  escapeUrl(url) {
    return url.replace(/%/g, "\\%").replace(/#/g, "\\#");
  }
  static \u0275fac = function LatexService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LatexService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LatexService, factory: _LatexService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LatexService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/edit-preview/edit-preview.component.ts
var _c04 = ["resumeContent"];
var arrowFn0 = (ctx, view) => (s) => s.trim();
function EditPreviewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 8);
    \u0275\u0275domElement(1, "path", 19);
    \u0275\u0275domElementEnd();
  }
}
function EditPreviewComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 9);
    \u0275\u0275domElement(1, "path", 20);
    \u0275\u0275domElementEnd();
  }
}
function EditPreviewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 21);
    \u0275\u0275domElement(1, "circle", 22)(2, "path", 23);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.latex.engineState() === "initializing" ? "Loading Engine\u2026" : "Compiling\u2026", " ");
  }
}
function EditPreviewComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 8);
    \u0275\u0275domElement(1, "path", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(2, " PDF Failed ");
  }
}
function EditPreviewComponent_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 26);
  }
}
function EditPreviewComponent_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 27);
  }
}
function EditPreviewComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 8);
    \u0275\u0275domElement(1, "path", 25);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(2, " Download PDF ");
    \u0275\u0275conditionalCreate(3, EditPreviewComponent_Conditional_21_Conditional_3_Template, 1, 0, "span", 26);
    \u0275\u0275conditionalCreate(4, EditPreviewComponent_Conditional_21_Conditional_4_Template, 1, 0, "span", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.latex.engineState() === "ready" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.latex.engineState() === "idle" && ctx_r0.latex.isSetupDone() ? 4 : -1);
  }
}
function EditPreviewComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 28);
    \u0275\u0275domListener("click", function EditPreviewComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openSetupModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 29);
    \u0275\u0275domElement(2, "path", 30)(3, "path", 31);
    \u0275\u0275domElementEnd()();
  }
}
function EditPreviewComponent_Conditional_23_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 73);
    \u0275\u0275domElement(2, "path", 20);
    \u0275\u0275domElementEnd()();
  }
}
function EditPreviewComponent_Conditional_23_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 60);
  }
}
function EditPreviewComponent_Conditional_23_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 73);
    \u0275\u0275domElement(2, "path", 20);
    \u0275\u0275domElementEnd()();
  }
}
function EditPreviewComponent_Conditional_23_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 60);
  }
}
function EditPreviewComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 32);
    \u0275\u0275domListener("click", function EditPreviewComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showSetupModal.set(false));
    });
    \u0275\u0275domElementStart(1, "div", 33);
    \u0275\u0275domListener("click", function EditPreviewComponent_Conditional_23_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 34)(3, "div", 35)(4, "div", 36)(5, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(6, "svg", 38);
    \u0275\u0275domElement(7, "path", 39);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(8, "div")(9, "h2", 40);
    \u0275\u0275text(10, "ATS-Optimized PDF");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p", 41);
    \u0275\u0275text(12, "Powered by LaTeX \xB7 Runs in your browser");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "button", 42);
    \u0275\u0275domListener("click", function EditPreviewComponent_Conditional_23_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showSetupModal.set(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(14, "svg", 43);
    \u0275\u0275domElement(15, "path", 44);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(16, "div", 45)(17, "span", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(18, "svg", 47);
    \u0275\u0275domElement(19, "path", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(20, " Workday & Taleo compatible ");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(21, "span", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(22, "svg", 47);
    \u0275\u0275domElement(23, "path", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(24, " No server \xB7 100% private ");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(25, "span", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(26, "svg", 47);
    \u0275\u0275domElement(27, "path", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(28, " One-time setup ");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(29, "div", 48)(30, "p", 49);
    \u0275\u0275text(31, " A real TeX engine runs inside your browser using WebAssembly \u2014 nothing is sent to any server. A one-time ");
    \u0275\u0275domElementStart(32, "strong", 50);
    \u0275\u0275text(33, "~120 MB download");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(34, " sets up the engine locally; after that, PDF generation takes ~3 seconds and works offline. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "div", 51)(36, "p", 52);
    \u0275\u0275text(37, "Package Caching");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "div", 53)(39, "label", 54)(40, "input", 55);
    \u0275\u0275domListener("change", function EditPreviewComponent_Conditional_23_Template_input_change_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalCacheMode.set("local"));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(42, "svg", 57);
    \u0275\u0275domElement(43, "path", 58);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(44, EditPreviewComponent_Conditional_23_Conditional_44_Template, 3, 0, "div", 59)(45, EditPreviewComponent_Conditional_23_Conditional_45_Template, 1, 0, "div", 60);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(46, "span", 61);
    \u0275\u0275text(47, "Cache locally");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "p", 62);
    \u0275\u0275text(49, "Downloads all packages upfront. Works offline.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(50, "span", 63);
    \u0275\u0275text(51, "Recommended");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(52, "label", 54)(53, "input", 64);
    \u0275\u0275domListener("change", function EditPreviewComponent_Conditional_23_Template_input_change_53_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalCacheMode.set("cdn"));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(55, "svg", 57);
    \u0275\u0275domElement(56, "path", 65);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(57, EditPreviewComponent_Conditional_23_Conditional_57_Template, 3, 0, "div", 59)(58, EditPreviewComponent_Conditional_23_Conditional_58_Template, 1, 0, "div", 60);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(59, "span", 61);
    \u0275\u0275text(60, "Fetch as needed");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(61, "p", 62);
    \u0275\u0275text(62, "Faster first start. Needs internet per compile.");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(63, "div", 66)(64, "p", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(65, "svg", 68);
    \u0275\u0275domElement(66, "path", 69);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(67, " Change anytime via the \u2699 icon next to the button ");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(68, "div", 70)(69, "button", 71);
    \u0275\u0275domListener("click", function EditPreviewComponent_Conditional_23_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showSetupModal.set(false));
    });
    \u0275\u0275text(70, " Cancel ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(71, "button", 72);
    \u0275\u0275domListener("click", function EditPreviewComponent_Conditional_23_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmSetup());
    });
    \u0275\u0275text(72, " Set Up & Download ");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(39);
    \u0275\u0275classMap(ctx_r0.modalCacheMode() === "local" ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-indigo-700");
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r0.modalCacheMode() === "local");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.modalCacheMode() === "local" ? 44 : 45);
    \u0275\u0275advance(8);
    \u0275\u0275classMap(ctx_r0.modalCacheMode() === "cdn" ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-indigo-700");
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r0.modalCacheMode() === "cdn");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.modalCacheMode() === "cdn" ? 57 : 58);
  }
}
function EditPreviewComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "div", 74)(2, "div", 75)(3, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(4, "svg", 77);
    \u0275\u0275domElement(5, "circle", 22)(6, "path", 23);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(7, "span", 78);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "span", 79);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 80);
    \u0275\u0275domElement(12, "div", 81);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.latex.progress().label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.latex.progress().percent, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.latex.progress().percent + "%");
  }
}
function EditPreviewComponent_Conditional_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 88);
    \u0275\u0275text(1, "|");
    \u0275\u0275domElementEnd();
  }
}
function EditPreviewComponent_Conditional_26_Conditional_12_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 88);
    \u0275\u0275text(1, "|");
    \u0275\u0275domElementEnd();
  }
}
function EditPreviewComponent_Conditional_26_Conditional_12_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_Conditional_26_Conditional_12_For_2_Conditional_0_Conditional_0_Template, 2, 0, "span", 88);
    \u0275\u0275domElementStart(1, "a", 87);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const link_r5 = ctx_r3.$implicit;
    const \u0275$index_273_r6 = ctx_r3.$index;
    \u0275\u0275conditional(\u0275$index_273_r6 > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", \u0275\u0275interpolate(link_r5.url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r5.preview_name);
  }
}
function EditPreviewComponent_Conditional_26_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_Conditional_26_Conditional_12_For_2_Conditional_0_Template, 3, 4);
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r0.isValue(link_r5.url) ? 0 : -1);
  }
}
function EditPreviewComponent_Conditional_26_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 89);
    \u0275\u0275repeaterCreate(1, EditPreviewComponent_Conditional_26_Conditional_12_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_2_0.links);
  }
}
function EditPreviewComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "div", 82)(2, "div", 83)(3, "h1", 84);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "address", 85)(6, "div", 86)(7, "a", 87);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, EditPreviewComponent_Conditional_26_Conditional_9_Template, 2, 0, "span", 88);
    \u0275\u0275domElementStart(10, "a", 87);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(12, EditPreviewComponent_Conditional_26_Conditional_12_Template, 3, 0, "div", 89);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.t((tmp_1_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_1_0.name));
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("href", \u0275\u0275interpolate1("mailto:", (tmp_2_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_2_0.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_3_0.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_4_0.phone) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", \u0275\u0275interpolate1("tel:", (tmp_5_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_5_0.phone), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_6_0.phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r0.getPersonalInfo()) == null ? null : tmp_7_0.links == null ? null : tmp_7_0.links.length) ? 12 : -1);
  }
}
function EditPreviewComponent_For_28_Case_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "h2", 90);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "hr");
    \u0275\u0275domElementStart(4, "div", 91)(5, "p", 92);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSectionLabel(ctx_r0.SectionType.SUMMARY), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getSummaryText());
  }
}
function EditPreviewComponent_For_28_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_For_28_Case_0_Conditional_0_Template, 7, 2, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.getSummaryText() ? 0 : -1);
  }
}
function EditPreviewComponent_For_28_Case_1_Conditional_0_For_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r7.text, " ");
  }
}
function EditPreviewComponent_For_28_Case_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 94)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, EditPreviewComponent_For_28_Case_1_Conditional_0_For_6_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.t(skill_r8.skill_type), ":");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.getActiveSkillItems(skill_r8));
  }
}
function EditPreviewComponent_For_28_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "h2", 90);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "hr");
    \u0275\u0275domElementStart(4, "div", 93);
    \u0275\u0275repeaterCreate(5, EditPreviewComponent_For_28_Case_1_Conditional_0_For_6_Template, 6, 1, "div", 94, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getSectionLabel(ctx_r0.SectionType.SKILLS));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getActiveSkills());
  }
}
function EditPreviewComponent_For_28_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_For_28_Case_1_Conditional_0_Template, 7, 1, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.getActiveSkills().length ? 0 : -1);
  }
}
function EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275domElementEnd();
  }
}
function EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const experience_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.t(experience_r9.location));
  }
}
function EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("display", ctx_r0.isValue(d_r10.text) ? "" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r10.text, " ");
  }
}
function EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 95)(1, "div", 96)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 97)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275conditionalCreate(11, EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 98)(13, "ul");
    \u0275\u0275repeaterCreate(14, EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_For_15_Template, 2, 3, "li", 99, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const experience_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.t(experience_r9.position));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.t(experience_r9.start_date), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isValue(experience_r9.start_date) && ctx_r0.isValue(experience_r9.end_date) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.t(experience_r9.end_date), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.t(experience_r9.company), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isValue(experience_r9.location) ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getActiveBullets(experience_r9.descriptions, experience_r9.id));
  }
}
function EditPreviewComponent_For_28_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "h2", 90);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "hr");
    \u0275\u0275domElementStart(4, "div", 91);
    \u0275\u0275repeaterCreate(5, EditPreviewComponent_For_28_Case_2_Conditional_0_For_6_Template, 16, 6, "div", 95, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSectionLabel(ctx_r0.SectionType.EXPERIENCE), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getActiveExperiences());
  }
}
function EditPreviewComponent_For_28_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_For_28_Case_2_Conditional_0_Template, 7, 1, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.getActiveExperiences().length ? 0 : -1);
  }
}
function EditPreviewComponent_For_28_Case_3_Conditional_0_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 88);
    \u0275\u0275text(1, "|");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "a", 87);
    \u0275\u0275text(3, "Link");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const project_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("href", \u0275\u0275interpolate(project_r11.project_url), \u0275\u0275sanitizeUrl);
  }
}
function EditPreviewComponent_For_28_Case_3_Conditional_0_For_6_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("display", ctx_r0.isValue(d_r12.text) ? "" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r12.text, " ");
  }
}
function EditPreviewComponent_For_28_Case_3_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 95)(1, "div", 96)(2, "div", 100)(3, "h3", 101);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, EditPreviewComponent_For_28_Case_3_Conditional_0_For_6_Conditional_5_Template, 4, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 98)(9, "ul");
    \u0275\u0275repeaterCreate(10, EditPreviewComponent_For_28_Case_3_Conditional_0_For_6_For_11_Template, 2, 3, "li", 99, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const project_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.t(project_r11.project_name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isValue(project_r11.project_url) ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r11.project_tech.map(\u0275\u0275arrowFunction(3, arrowFn0, ctx)).join(", "), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getActiveBullets(project_r11.project_description, project_r11.id));
  }
}
function EditPreviewComponent_For_28_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "h2", 90);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "hr");
    \u0275\u0275domElementStart(4, "div", 91);
    \u0275\u0275repeaterCreate(5, EditPreviewComponent_For_28_Case_3_Conditional_0_For_6_Template, 12, 4, "div", 95, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSectionLabel(ctx_r0.SectionType.PROJECTS), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getActiveProjects());
  }
}
function EditPreviewComponent_For_28_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_For_28_Case_3_Conditional_0_Template, 7, 1, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.getActiveProjects().length ? 0 : -1);
  }
}
function EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const education_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.t(education_r13.location));
  }
}
function EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275domElementEnd();
  }
}
function EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const education_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.t(education_r13.gpa.toString()), " CGPA");
  }
}
function EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 95)(1, "div", 96)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Conditional_7_Template, 2, 0, "span");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 97)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(12, EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Conditional_12_Template, 2, 1, "p");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const education_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.t(education_r13.school), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(education_r13.location ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.t(education_r13.start_date), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isValue(education_r13.start_date) && ctx_r0.isValue(education_r13.end_date) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.t(education_r13.end_date), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.t(education_r13.degree));
    \u0275\u0275advance();
    \u0275\u0275conditional(education_r13.gpa ? 12 : -1);
  }
}
function EditPreviewComponent_For_28_Case_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "h2", 90);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "hr");
    \u0275\u0275repeaterCreate(4, EditPreviewComponent_For_28_Case_4_Conditional_0_For_5_Template, 13, 7, "div", 95, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSectionLabel(ctx_r0.SectionType.EDUCATION), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.getActiveEducations());
  }
}
function EditPreviewComponent_For_28_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_For_28_Case_4_Conditional_0_Template, 6, 1, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.getActiveEducations().length ? 0 : -1);
  }
}
function EditPreviewComponent_For_28_Case_5_Conditional_0_For_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("display", ctx_r0.isValue(d_r14.text) ? "" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r14.text, " ");
  }
}
function EditPreviewComponent_For_28_Case_5_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 95)(1, "div", 96)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 98)(5, "ul");
    \u0275\u0275repeaterCreate(6, EditPreviewComponent_For_28_Case_5_Conditional_0_For_6_For_7_Template, 2, 3, "li", 99, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const achievement_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.t(achievement_r15.title));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getActiveBullets(achievement_r15.description, achievement_r15.id));
  }
}
function EditPreviewComponent_For_28_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "h2", 90);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "hr");
    \u0275\u0275domElementStart(4, "div", 91);
    \u0275\u0275repeaterCreate(5, EditPreviewComponent_For_28_Case_5_Conditional_0_For_6_Template, 8, 1, "div", 95, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSectionLabel(ctx_r0.SectionType.ACHIEVEMENT), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getActiveAchievements());
  }
}
function EditPreviewComponent_For_28_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_For_28_Case_5_Conditional_0_Template, 7, 1, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.getActiveAchievements().length ? 0 : -1);
  }
}
function EditPreviewComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditPreviewComponent_For_28_Case_0_Template, 1, 1)(1, EditPreviewComponent_For_28_Case_1_Template, 1, 1)(2, EditPreviewComponent_For_28_Case_2_Template, 1, 1)(3, EditPreviewComponent_For_28_Case_3_Template, 1, 1)(4, EditPreviewComponent_For_28_Case_4_Template, 1, 1)(5, EditPreviewComponent_For_28_Case_5_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_10_0;
    const sType_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_10_0 = sType_r16) === ctx_r0.SectionType.SUMMARY ? 0 : tmp_10_0 === ctx_r0.SectionType.SKILLS ? 1 : tmp_10_0 === ctx_r0.SectionType.EXPERIENCE ? 2 : tmp_10_0 === ctx_r0.SectionType.PROJECTS ? 3 : tmp_10_0 === ctx_r0.SectionType.EDUCATION ? 4 : tmp_10_0 === ctx_r0.SectionType.ACHIEVEMENT ? 5 : -1);
  }
}
var EditPreviewComponent = class _EditPreviewComponent {
  dataSerice = inject(DataService);
  ns = inject(NotificationService);
  latex = inject(LatexService);
  resumeContent;
  isCopied = false;
  current_resume = this.dataSerice.getResume();
  current_template = this.dataSerice.getTemplate();
  current_font = this.dataSerice.getFont();
  current_font_size = this.dataSerice.getFontSize();
  page_margin_v = this.dataSerice.getPageMarginV();
  page_margin_h = this.dataSerice.getPageMarginH();
  // ── LaTeX setup modal state ──────────────────────────────────────────────
  showSetupModal = signal(false, ...ngDevMode ? [{ debugName: "showSetupModal" }] : (
    /* istanbul ignore next */
    []
  ));
  modalCacheMode = signal("local", ...ngDevMode ? [{ debugName: "modalCacheMode" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      document.documentElement.style.setProperty("--resume-margin-v", this.page_margin_v() + "mm");
      document.documentElement.style.setProperty("--resume-margin-h", this.page_margin_h() + "mm");
    });
    this.latex.schedulePrewarm();
  }
  /** Apply user-defined print margins as inline styles — inline styles win over all CSS rules */
  onBeforePrint() {
    const wrapper = document.querySelector(".resume-wrapper");
    if (wrapper) {
      wrapper.style.padding = `${this.page_margin_v()}mm ${this.page_margin_h()}mm`;
    }
  }
  /** Restore screen padding after printing */
  onAfterPrint() {
    const wrapper = document.querySelector(".resume-wrapper");
    if (wrapper) {
      wrapper.style.padding = "";
    }
  }
  /** Fires the shared signal so EditorComponent opens and scrolls to the settings panel */
  openPrintSettings() {
    this.dataSerice.triggerOpenSettings();
  }
  /** Returns true if a value is non-empty and not the 'NO VALUE' placeholder */
  isValue(v) {
    return !!v && v.trim().toUpperCase() !== "NO VALUE" && v.trim() !== "";
  }
  /** Trims leading/trailing whitespace from a display value */
  t(v) {
    return (v ?? "").trim();
  }
  // Expose SectionType enum to template
  SectionType = SectionType;
  /**
   * Returns unique section types in the order they appear in the resume.
   * @param includeSkills - false for modern template (skills live in sidebar)
   */
  getSectionOrder(includeSkills) {
    const seen = /* @__PURE__ */ new Set();
    const order = [];
    for (const s of this.current_resume().sections) {
      if (s.type === SectionType.PERSONAL_INFO)
        continue;
      if (!includeSkills && s.type === SectionType.SKILLS)
        continue;
      if (!seen.has(s.type)) {
        seen.add(s.type);
        order.push(s.type);
      }
    }
    return order;
  }
  /** Browser print dialog — quick share with humans */
  printResume() {
    window.print();
  }
  /** Entry point for Download PDF button */
  onDownloadPdfClick() {
    if (!this.latex.isSetupDone()) {
      this.modalCacheMode.set("local");
      this.showSetupModal.set(true);
      return;
    }
    this.runLatexDownload();
  }
  /** Confirm button inside setup modal */
  confirmSetup() {
    this.showSetupModal.set(false);
    this.latex.savePreferences(this.modalCacheMode());
    this.runLatexDownload();
  }
  /** Re-open setup modal (cache preference change) */
  openSetupModal() {
    this.modalCacheMode.set(this.latex.cacheMode());
    this.showSetupModal.set(true);
  }
  runLatexDownload() {
    return __async(this, null, function* () {
      const resume = this.dataSerice.getResume()();
      const profile = this.dataSerice.getActiveProfile();
      const activeIds = profile?.activeIds ?? [];
      try {
        yield this.latex.downloadPdf(resume, activeIds);
      } catch (err) {
        const msg = err?.message ?? String(err);
        if (msg !== "Cancelled") {
          this.ns.toast("PDF generation failed: " + msg, "error");
        }
      }
    });
  }
  copyAsPlainText() {
    return __async(this, null, function* () {
      const rawContext = this.dataSerice.buildAIContext();
      const cleanText = rawContext.replace(/<[^>]+>/g, "").replace(/\n{3,}/g, "\n\n").trim();
      try {
        yield navigator.clipboard.writeText(cleanText);
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 2e3);
      } catch (err) {
        console.error("Failed to copy resume to clipboard:", err);
      }
    });
  }
  getPersonalInfo() {
    return this.current_resume().sections.find((section) => section.type === SectionType.PERSONAL_INFO)?.content;
  }
  getSummaryText() {
    return this.dataSerice.getSummaryText();
  }
  getSkills() {
    return this.current_resume().sections.filter((section) => section.type === SectionType.SKILLS).map((section) => section.content);
  }
  getExperiences() {
    return this.current_resume().sections.filter((section) => section.type === SectionType.EXPERIENCE).map((section) => section.content);
  }
  getProjects() {
    return this.current_resume().sections.filter((section) => section.type === SectionType.PROJECTS).map((section) => section.content);
  }
  getEducations() {
    return this.current_resume().sections.filter((section) => section.type === SectionType.EDUCATION).map((section) => section.content);
  }
  getAchievements() {
    return this.current_resume().sections.filter((section) => section.type === SectionType.ACHIEVEMENT).map((section) => section.content);
  }
  // ── Profile-aware active filtering ──────────────────────────────────────
  /** Delegate to DataService — used in template to check active state */
  isActive(id) {
    return this.dataSerice.isActive(id);
  }
  /** Returns display label for a section type (respects user renames) */
  getSectionLabel(type) {
    return this.dataSerice.getSectionLabel(type);
  }
  /** Entries (experience / project / education / achievement) whose entry-level ID is active */
  getActiveExperiences() {
    return this.getExperiences().filter((e) => this.isActive(e.id));
  }
  getActiveProjects() {
    return this.getProjects().filter((p) => this.isActive(p.id));
  }
  getActiveEducations() {
    return this.getEducations().filter((e) => this.isActive(e.id));
  }
  getActiveAchievements() {
    return this.getAchievements().filter((a) => this.isActive(a.id));
  }
  getActiveSkills() {
    return this.getSkills().filter((s) => this.isActive(s.id));
  }
  /** Active bullets within an entry (entry must itself be active) */
  getActiveBullets(bullets, entryId) {
    if (!this.isActive(entryId))
      return [];
    return bullets.filter((b) => this.isActive(b.id));
  }
  /** Active individual skill items within a skill category */
  getActiveSkillItems(skill) {
    if (!this.isActive(skill.id))
      return [];
    return skill.skills.filter((s) => this.isActive(s.id));
  }
  static \u0275fac = function EditPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPreviewComponent, selectors: [["app-edit-preview"]], viewQuery: function EditPreviewComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resumeContent = _t.first);
    }
  }, hostBindings: function EditPreviewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("beforeprint", function EditPreviewComponent_beforeprint_HostBindingHandler() {
        return ctx.onBeforePrint();
      }, \u0275\u0275resolveWindow)("afterprint", function EditPreviewComponent_afterprint_HostBindingHandler() {
        return ctx.onAfterPrint();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 29, vars: 19, consts: [[1, "resume-preview", "relative"], [1, "sticky", "top-4", "z-[100]", "print:hidden", "flex", "justify-end", "mb-4", "pr-1"], [1, "flex", "items-center", "gap-2", "bg-white/90", "backdrop-blur-sm", "border", "border-gray-200", "shadow-md", "rounded-full", "px-4", "py-2"], ["title", "Display & Print Settings", 1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "text-gray-500", "hover:text-indigo-600", "uppercase", "tracking-widest", "px-2", "rounded-full", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], ["fill-rule", "evenodd", "d", "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", "clip-rule", "evenodd"], [1, "w-px", "h-4", "bg-gray-200"], [1, "flex", "items-center", "gap-1.5", "text-xs", "font-bold", "dark:text-gray-800", "text-gray-500", "hover:text-indigo-600", "px-4", "py-1.5", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5", "text-emerald-600"], ["title", "Print resume \u2014 open browser print dialog", 1, "flex", "items-center", "gap-1.5", "text-xs", "font-bold", "text-gray-600", "hover:text-gray-900", "hover:bg-gray-100", "px-4", "py-1.5", "rounded-full", "transition-colors", "border", "border-gray-200", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"], [1, "relative", "flex", "items-center"], ["title", "Download ATS-optimized PDF via LaTeX", 1, "flex", "items-center", "gap-1.5", "text-xs", "font-bold", "text-white", "px-4", "py-1.5", "rounded-full", "transition-all", "shadow-sm", 3, "click", "disabled"], ["title", "Change PDF method", 1, "ml-1", "p-1", "text-gray-400", "hover:text-indigo-600", "hover:bg-white", "rounded-full", "transition-colors"], [1, "fixed", "inset-0", "bg-black/50", "backdrop-blur-sm", "flex", "items-center", "justify-center", "z-[9999]", "print:hidden"], [1, "fixed", "bottom-0", "left-0", "right-0", "z-[9998]", "print:hidden"], [1, "resume-wrapper"], [1, "rb-container"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-3.5", "w-3.5", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"], ["title", "Engine ready", 1, "ml-0.5", "w-1.5", "h-1.5", "rounded-full", "bg-emerald-300", "inline-block"], ["title", "Engine loading\u2026", 1, "ml-0.5", "w-1.5", "h-1.5", "rounded-full", "bg-amber-300", "animate-pulse", "inline-block"], ["title", "Change PDF method", 1, "ml-1", "p-1", "text-gray-400", "hover:text-indigo-600", "hover:bg-white", "rounded-full", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3", "w-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "fixed", "inset-0", "bg-black/50", "backdrop-blur-sm", "flex", "items-center", "justify-center", "z-[9999]", "print:hidden", 3, "click"], [1, "bg-white", "dark:bg-neutral-900", "rounded-2xl", "shadow-2xl", "w-[540px]", "max-w-[95vw]", "overflow-hidden", 3, "click"], [1, "bg-gradient-to-br", "from-indigo-600", "via-indigo-700", "to-violet-700", "px-8", "pt-8", "pb-7"], [1, "flex", "items-start", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-white/15", "backdrop-blur-sm", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-base", "font-bold", "text-white", "leading-tight"], [1, "text-indigo-200", "text-xs", "mt-0.5"], [1, "text-white/60", "hover:text-white", "hover:bg-white/10", "p-1.5", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex", "flex-wrap", "gap-2", "mt-4"], [1, "inline-flex", "items-center", "gap-1", "text-[11px]", "font-semibold", "bg-white/15", "text-white", "rounded-full", "px-2.5", "py-1"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3"], [1, "px-8", "py-6"], [1, "text-sm", "text-gray-500", "dark:text-neutral-400", "leading-[1.7]", "mb-6"], [1, "text-gray-700", "dark:text-neutral-300", "font-semibold"], [1, "mb-2"], [1, "text-[11px]", "font-extrabold", "text-gray-400", "dark:text-neutral-500", "uppercase", "tracking-[0.15em]", "mb-3"], [1, "grid", "grid-cols-2", "gap-3"], [1, "relative", "flex", "flex-col", "p-4", "rounded-xl", "border-2", "cursor-pointer", "transition-all"], ["type", "radio", "name", "cacheMode", "value", "local", 1, "sr-only", 3, "change", "checked"], [1, "flex", "items-center", "justify-between", "mb-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"], [1, "w-4", "h-4", "rounded-full", "bg-indigo-500", "flex", "items-center", "justify-center"], [1, "w-4", "h-4", "rounded-full", "border-2", "border-gray-300", "dark:border-neutral-600"], [1, "text-xs", "font-bold", "text-gray-800", "dark:text-neutral-200"], [1, "text-[11px]", "text-gray-400", "dark:text-neutral-500", "mt-0.5", "leading-snug"], [1, "mt-2", "self-start", "text-[10px]", "font-bold", "px-1.5", "py-0.5", "rounded-full", "bg-emerald-100", "dark:bg-emerald-900/40", "text-emerald-700", "dark:text-emerald-400"], ["type", "radio", "name", "cacheMode", "value", "cdn", 1, "sr-only", 3, "change", "checked"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"], [1, "px-8", "pb-7", "flex", "items-center", "justify-between", "border-t", "border-gray-100", "dark:border-neutral-800", "pt-5"], [1, "text-[11px]", "text-gray-400", "dark:text-neutral-600", "flex", "items-center", "gap-1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "flex", "gap-2.5"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-500", "dark:text-neutral-400", "hover:text-gray-800", "dark:hover:text-neutral-200", "rounded-lg", "hover:bg-gray-100", "dark:hover:bg-neutral-800", "transition-colors", 3, "click"], [1, "px-5", "py-2", "text-sm", "font-bold", "text-white", "bg-gradient-to-r", "from-indigo-600", "to-violet-600", "hover:from-indigo-700", "hover:to-violet-700", "rounded-lg", "shadow-sm", "transition-all", "hover:shadow-indigo-200", "dark:hover:shadow-indigo-900/50", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-2.5", "h-2.5", "text-white"], [1, "bg-white", "dark:bg-neutral-900", "border-t", "border-gray-200", "dark:border-neutral-700", "shadow-2xl", "px-6", "py-3"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "gap-2", "min-w-0", "flex-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-4", "w-4", "text-indigo-500", "animate-spin", "flex-shrink-0"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-neutral-200", "truncate"], [1, "text-sm", "font-bold", "text-indigo-600", "dark:text-indigo-400", "flex-shrink-0"], [1, "mt-2", "h-1.5", "bg-gray-100", "dark:bg-neutral-800", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-gradient-to-r", "from-indigo-500", "to-violet-500", "rounded-full", "transition-all", "duration-500"], [1, "rb-container-list", "center"], [1, "list-item-v", "p-info"], [1, "heading", "p-name"], [1, "heading-info"], [1, "list-item-h", "center", "p-info"], [3, "href"], ["aria-hidden", "true", 1, "sep"], [1, "list-item-h", "center", "p-info", "p-link"], [1, "heading"], [1, "rb-container-list"], [1, "summary-text"], [1, "rb-container-list", "horizontal"], [1, "list-item-h", "skills-row"], [1, "list-item-v"], [1, "list-item-header"], [1, "list-item-header", "light"], [1, "list-item-description"], [3, "display"], [2, "display", "flex", "align-items", "center", "gap", "4px"], [2, "font-size", "inherit", "margin", "0"]], template: function EditPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275domListener("click", function EditPreviewComponent_Template_button_click_3_listener() {
        return ctx.openPrintSettings();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(4, "svg", 4);
      \u0275\u0275domElement(5, "path", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(6, " Settings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElement(7, "div", 6);
      \u0275\u0275domElementStart(8, "button", 7);
      \u0275\u0275domListener("click", function EditPreviewComponent_Template_button_click_8_listener() {
        return ctx.copyAsPlainText();
      });
      \u0275\u0275conditionalCreate(9, EditPreviewComponent_Conditional_9_Template, 2, 0, ":svg:svg", 8);
      \u0275\u0275conditionalCreate(10, EditPreviewComponent_Conditional_10_Template, 2, 0, ":svg:svg", 9);
      \u0275\u0275domElementStart(11, "span");
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "button", 10);
      \u0275\u0275domListener("click", function EditPreviewComponent_Template_button_click_13_listener() {
        return ctx.printResume();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(14, "svg", 8);
      \u0275\u0275domElement(15, "path", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(16, " Print ");
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(17, "div", 12)(18, "button", 13);
      \u0275\u0275domListener("click", function EditPreviewComponent_Template_button_click_18_listener() {
        return ctx.onDownloadPdfClick();
      });
      \u0275\u0275conditionalCreate(19, EditPreviewComponent_Conditional_19_Template, 4, 1);
      \u0275\u0275conditionalCreate(20, EditPreviewComponent_Conditional_20_Template, 3, 0);
      \u0275\u0275conditionalCreate(21, EditPreviewComponent_Conditional_21_Template, 5, 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(22, EditPreviewComponent_Conditional_22_Template, 4, 0, "button", 14);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(23, EditPreviewComponent_Conditional_23_Template, 73, 8, "div", 15);
      \u0275\u0275conditionalCreate(24, EditPreviewComponent_Conditional_24_Template, 13, 4, "div", 16);
      \u0275\u0275domElementStart(25, "div", 17);
      \u0275\u0275conditionalCreate(26, EditPreviewComponent_Conditional_26_Template, 13, 9, "div", 18);
      \u0275\u0275repeaterCreate(27, EditPreviewComponent_For_28_Template, 6, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(!ctx.isCopied ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCopied ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("text-emerald-700", ctx.isCopied);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.isCopied ? "Copied!" : "Copy Text");
      \u0275\u0275advance(6);
      \u0275\u0275classMap(ctx.latex.engineState() === "error" ? "bg-red-500 hover:bg-red-600" : ctx.latex.isBusy() ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700");
      \u0275\u0275domProperty("disabled", ctx.latex.isBusy());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.latex.isBusy() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.latex.isBusy() && ctx.latex.engineState() === "error" ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.latex.isBusy() && ctx.latex.engineState() !== "error" ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.latex.isSetupDone() ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSetupModal() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.latex.progress() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("font-family", ctx.current_font())("font-size", ctx.current_font_size() + "pt");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getPersonalInfo() ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.getSectionOrder(true));
    }
  }, styles: ['@charset "UTF-8";\n\n\nbody[_ngcontent-%COMP%] {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 12px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgb(0, 140, 255);\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n}\naddress[_ngcontent-%COMP%] {\n  font-style: normal;\n}\ndiv[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nli[_ngcontent-%COMP%] {\n  padding: 0 3px;\n}\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid rgb(185, 185, 185);\n  margin: 0 0 5px 0;\n  padding: 0;\n  height: 0;\n}\n.resume-preview[_ngcontent-%COMP%] {\n  padding: 24px 20px;\n  background: #e2e8f0;\n  min-height: 100%;\n}\n.resume-wrapper[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  background: #fff;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.03);\n  border-radius: 4px;\n  padding: 36px 44px;\n  color: #000;\n}\n.rb-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin: 0 0 5px 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.rb-container-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.rb-container-list.horizontal[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 1px;\n  font-weight: 500;\n  font-size: 1rem;\n}\n.list-item-h[_ngcontent-%COMP%], \n.list-item-v[_ngcontent-%COMP%] {\n  padding: 0 0 0 10px;\n}\n.list-item-h[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  text-align: center;\n  margin: 0;\n}\n.list-item-h[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin: auto 0;\n}\n.list-item-h[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.list-item-v[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.list-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: bold;\n}\n.list-item-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: grey;\n  font-weight: 500;\n}\n.list-item-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n  margin: 0;\n}\n.light[_ngcontent-%COMP%] {\n  font-weight: unset;\n  font-style: italic;\n}\n.list-item-v[_ngcontent-%COMP%]   .list-item-description[_ngcontent-%COMP%] {\n  padding: 0 0 0 20px;\n}\n.list-item-description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: disc;\n}\n.p-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 550;\n}\n.heading-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 1px 0;\n}\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  margin: auto;\n}\n.p-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.p-info[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-weight: 600;\n  padding: 0;\n}\n.p-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.p-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  margin: 0 1px;\n}\n.skills-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  text-align: start;\n  font-weight: bold;\n}\n.skills-row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.sep[_ngcontent-%COMP%] {\n  margin: 0 1px;\n}\n@media print {\n  .resume-preview[_ngcontent-%COMP%] {\n    background: white;\n  }\n  .resume-wrapper[_ngcontent-%COMP%] {\n    box-shadow: none;\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.summary-text[_ngcontent-%COMP%] {\n  font-size: 0.95em;\n  line-height: 1.55;\n  color: #374151;\n}\n/*# sourceMappingURL=edit-preview.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-edit-preview", imports: [], standalone: true, template: `<div class="resume-preview relative">
  <!-- Floating Actions \u2014 top-right of preview, not bottom -->
  <div class="sticky top-4 z-[100] print:hidden flex justify-end mb-4 pr-1">
    <div
      class="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md rounded-full px-4 py-2"
    >
      <!-- \u2699 Settings shortcut -->
      <button
        (click)="openPrintSettings()"
        class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-indigo-600 uppercase tracking-widest px-2 rounded-full transition-colors"
        title="Display & Print Settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
        Settings
      </button>
      <div class="w-px h-4 bg-gray-200"></div>
      <button
        class="flex items-center gap-1.5 text-xs font-bold dark:text-gray-800 text-gray-500 hover:text-indigo-600 px-4 py-1.5 transition-colors"
        (click)="copyAsPlainText()"
      >
        @if (!isCopied) {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        }
        @if (isCopied) {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5 text-emerald-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        }
        <span [class.text-emerald-700]="isCopied">{{
          isCopied ? "Copied!" : "Copy Text"
        }}</span>
      </button>
      <!-- \u2500\u2500 Print button \u2500\u2500 -->
      <button
        class="flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-1.5 rounded-full transition-colors border border-gray-200"
        (click)="printResume()"
        title="Print resume \u2014 open browser print dialog"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Print
      </button>

      <!-- \u2500\u2500 Download PDF button (LaTeX) \u2500\u2500 -->
      <div class="relative flex items-center">
        <button
          class="flex items-center gap-1.5 text-xs font-bold text-white px-4 py-1.5 rounded-full transition-all shadow-sm"
          [class]="latex.engineState() === 'error'
            ? 'bg-red-500 hover:bg-red-600'
            : latex.isBusy()
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'"
          (click)="onDownloadPdfClick()"
          [disabled]="latex.isBusy()"
          title="Download ATS-optimized PDF via LaTeX"
        >
          <!-- Spinner while busy -->
          @if (latex.isBusy()) {
            <svg class="h-3.5 w-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            {{ latex.engineState() === 'initializing' ? 'Loading Engine\u2026' : 'Compiling\u2026' }}
          }
          <!-- Error state -->
          @if (!latex.isBusy() && latex.engineState() === 'error') {
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
            </svg>
            PDF Failed
          }
          <!-- Idle / ready state -->
          @if (!latex.isBusy() && latex.engineState() !== 'error') {
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download PDF
            <!-- Engine ready indicator dot -->
            @if (latex.engineState() === 'ready') {
              <span class="ml-0.5 w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" title="Engine ready"></span>
            }
            @if (latex.engineState() === 'idle' && latex.isSetupDone()) {
              <span class="ml-0.5 w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse inline-block" title="Engine loading\u2026"></span>
            }
          }
        </button>

        <!-- \u2699 Re-open setup modal -->
        @if (latex.isSetupDone()) {
          <button
            (click)="openSetupModal()"
            class="ml-1 p-1 text-gray-400 hover:text-indigo-600 hover:bg-white rounded-full transition-colors"
            title="Change PDF method"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        }
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       LaTeX Engine Setup Modal
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (showSetupModal()) {
    <div
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] print:hidden"
      (click)="showSetupModal.set(false)"
    >
      <div
        class="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-[540px] max-w-[95vw] overflow-hidden"
        (click)="$event.stopPropagation()"
      >
        <!-- Gradient header -->
        <div class="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 px-8 pt-8 pb-7">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <!-- TeX icon -->
              <div class="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-base font-bold text-white leading-tight">ATS-Optimized PDF</h2>
                <p class="text-indigo-200 text-xs mt-0.5">Powered by LaTeX \xB7 Runs in your browser</p>
              </div>
            </div>
            <button (click)="showSetupModal.set(false)"
              class="text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Feature pills -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/15 text-white rounded-full px-2.5 py-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Workday &amp; Taleo compatible
            </span>
            <span class="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/15 text-white rounded-full px-2.5 py-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              No server \xB7 100% private
            </span>
            <span class="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/15 text-white rounded-full px-2.5 py-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              One-time setup
            </span>
          </div>
        </div>

        <!-- Body -->
        <div class="px-8 py-6">
          <p class="text-sm text-gray-500 dark:text-neutral-400 leading-[1.7] mb-6">
            A real TeX engine runs inside your browser using WebAssembly \u2014 nothing is sent to any server. A one-time <strong class="text-gray-700 dark:text-neutral-300 font-semibold">~120 MB download</strong> sets up the engine locally; after that, PDF generation takes ~3 seconds and works offline.
          </p>

          <!-- Cache mode toggle -->
          <div class="mb-2">
            <p class="text-[11px] font-extrabold text-gray-400 dark:text-neutral-500 uppercase tracking-[0.15em] mb-3">Package Caching</p>
            <div class="grid grid-cols-2 gap-3">
              <!-- Cache locally -->
              <label
                class="relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all"
                [class]="modalCacheMode() === 'local'
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40'
                  : 'border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-indigo-700'"
              >
                <input type="radio" name="cacheMode" value="local" class="sr-only"
                  [checked]="modalCacheMode() === 'local'"
                  (change)="modalCacheMode.set('local')" />
                <!-- Selection indicator -->
                <div class="flex items-center justify-between mb-2">
                  <svg class="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                  </svg>
                  @if (modalCacheMode() === 'local') {
                    <div class="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
                      <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  } @else {
                    <div class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-neutral-600"></div>
                  }
                </div>
                <span class="text-xs font-bold text-gray-800 dark:text-neutral-200">Cache locally</span>
                <p class="text-[11px] text-gray-400 dark:text-neutral-500 mt-0.5 leading-snug">Downloads all packages upfront. Works offline.</p>
                <span class="mt-2 self-start text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">Recommended</span>
              </label>

              <!-- Fetch as needed -->
              <label
                class="relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all"
                [class]="modalCacheMode() === 'cdn'
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40'
                  : 'border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-indigo-700'"
              >
                <input type="radio" name="cacheMode" value="cdn" class="sr-only"
                  [checked]="modalCacheMode() === 'cdn'"
                  (change)="modalCacheMode.set('cdn')" />
                <div class="flex items-center justify-between mb-2">
                  <svg class="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                  @if (modalCacheMode() === 'cdn') {
                    <div class="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
                      <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  } @else {
                    <div class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-neutral-600"></div>
                  }
                </div>
                <span class="text-xs font-bold text-gray-800 dark:text-neutral-200">Fetch as needed</span>
                <p class="text-[11px] text-gray-400 dark:text-neutral-500 mt-0.5 leading-snug">Faster first start. Needs internet per compile.</p>
              </label>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-8 pb-7 flex items-center justify-between border-t border-gray-100 dark:border-neutral-800 pt-5">
          <p class="text-[11px] text-gray-400 dark:text-neutral-600 flex items-center gap-1">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Change anytime via the \u2699 icon next to the button
          </p>
          <div class="flex gap-2.5">
            <button
              (click)="showSetupModal.set(false)"
              class="px-4 py-2 text-sm font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Cancel
            </button>
            <button
              (click)="confirmSetup()"
              class="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-lg shadow-sm transition-all hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50"
            >
              Set Up &amp; Download
            </button>
          </div>
        </div>
      </div>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       Progress Bar (non-blocking, bottom of screen)
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (latex.progress()) {
    <div class="fixed bottom-0 left-0 right-0 z-[9998] print:hidden">
      <div class="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 shadow-2xl px-6 py-3">
        <div class="flex items-center gap-4">
          <!-- Phase label -->
          <div class="flex items-center gap-2 min-w-0 flex-1">
            <svg class="h-4 w-4 text-indigo-500 animate-spin flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            <span class="text-sm font-semibold text-gray-700 dark:text-neutral-200 truncate">
              {{ latex.progress()!.label }}
            </span>
          </div>
          <!-- Percentage -->
          <span class="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex-shrink-0">
            {{ latex.progress()!.percent }}%
          </span>

        </div>
        <!-- Progress track -->
        <div class="mt-2 h-1.5 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
            [style.width]="latex.progress()!.percent + '%'"
          ></div>
        </div>
      </div>
    </div>
  }



  <!-- Resume Content -->
  <div
    class="resume-wrapper"
    [style.font-family]="current_font()"
    [style.font-size]="current_font_size() + 'pt'"
  >
    <!-- \u2500\u2500 Header: Name + Contact \u2500\u2500 -->
    <!-- h1 = candidate name (only one h1 on the document) -->
    @if (getPersonalInfo()) {
      <div class="rb-container">
        <div class="rb-container-list center">
          <div class="list-item-v p-info">
            <h1 class="heading p-name">{{ t(getPersonalInfo()?.name) }}</h1>
          </div>
          <!-- <address> marks contact info for ATS parsers -->
          <address class="heading-info">
            <div class="list-item-h center p-info">
              <a href="mailto:{{ getPersonalInfo()?.email }}">{{
                getPersonalInfo()?.email
              }}</a>
              @if (getPersonalInfo()?.phone) {
                <span aria-hidden="true" class="sep">|</span>
              }
              <a href="tel:{{ getPersonalInfo()?.phone }}">{{
                getPersonalInfo()?.phone
              }}</a>
            </div>
            @if (getPersonalInfo()?.links?.length) {
              <div class="list-item-h center p-info p-link">
                @for (
                  link of getPersonalInfo()?.links;
                  track link;
                  let i = $index;
                  let last = $last
                ) {
                  @if (isValue(link.url)) {
                    <!-- Only add separator if there was a previous valid link -->
                    @if (i > 0) {
                      <span aria-hidden="true" class="sep">|</span>
                    }
                    <a href="{{ link.url }}">{{ link.preview_name }}</a>
                  }
                }
              </div>
            }
          </address>
        </div>
      </div>
    }

    <!-- \u2500\u2500 Dynamic sections in user-defined order \u2500\u2500 -->
    @for (sType of getSectionOrder(true); track sType) {
      @switch (sType) {
        <!-- Summary -->
        @case (SectionType.SUMMARY) {
          @if (getSummaryText()) {
            <div class="rb-container">
              <h2 class="heading">
                {{ getSectionLabel(SectionType.SUMMARY) }}
              </h2>
              <hr />
              <div class="rb-container-list">
                <p class="summary-text">{{ getSummaryText() }}</p>
              </div>
            </div>
          }
        }
        <!-- Skills -->
        <!-- h2 = section heading (ATS: h1=name, h2=section, h3=entry) -->
        @case (SectionType.SKILLS) {
          @if (getActiveSkills().length) {
            <div class="rb-container">
              <h2 class="heading">{{ getSectionLabel(SectionType.SKILLS) }}</h2>
              <hr />
              <div class="rb-container-list horizontal">
                @for (skill of getActiveSkills(); track skill) {
                  <div class="list-item-h skills-row">
                    <!-- <strong> marks the category label as important for parsers -->
                    <strong>{{ t(skill.skill_type) }}:</strong>
                    <ul>
                      @for (s of getActiveSkillItems(skill); track s) {
                        <li>
                          {{ s.text }}
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          }
        }
        <!-- Experience -->
        @case (SectionType.EXPERIENCE) {
          @if (getActiveExperiences().length) {
            <div class="rb-container">
              <h2 class="heading">
                {{ getSectionLabel(SectionType.EXPERIENCE) }}
              </h2>
              <hr />
              <div class="rb-container-list">
                @for (experience of getActiveExperiences(); track experience) {
                  <div class="list-item-v">
                    <!-- Row 1: Position (bold left) | Dates (right) -->
                    <div class="list-item-header">
                      <h3>{{ t(experience.position) }}</h3>
                      <p>
                        {{ t(experience.start_date) }}
                        @if (
                          isValue(experience.start_date) &&
                          isValue(experience.end_date)
                        ) {
                          <span> - </span>
                        }
                        {{ t(experience.end_date) }}
                      </p>
                    </div>
                    <!-- Row 2: Company + Location -->
                    <div class="list-item-header light">
                      <p>
                        {{ t(experience.company) }}
                        @if (isValue(experience.location)) {
                          <span>, {{ t(experience.location) }}</span>
                        }
                      </p>
                    </div>
                    <div class="list-item-description">
                      <ul>
                        @for (
                          d of getActiveBullets(
                            experience.descriptions,
                            experience.id
                          );
                          track d
                        ) {
                          <li [style.display]="isValue(d.text) ? '' : 'none'">
                            {{ d.text }}
                          </li>
                        }
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        }
        <!-- Projects -->
        @case (SectionType.PROJECTS) {
          @if (getActiveProjects().length) {
            <div class="rb-container">
              <h2 class="heading">
                {{ getSectionLabel(SectionType.PROJECTS) }}
              </h2>
              <hr />
              <div class="rb-container-list">
                @for (project of getActiveProjects(); track project) {
                  <div class="list-item-v">
                    <div class="list-item-header">
                      <div style="display: flex; align-items: center; gap: 4px">
                        <h3 style="font-size: inherit; margin: 0">
                          {{ t(project.project_name) }}
                        </h3>
                        @if (isValue(project.project_url)) {
                          <span aria-hidden="true" class="sep">|</span>
                          <a href="{{ project.project_url }}">Link</a>
                        }
                      </div>
                      <p>
                        {{
                          project.project_tech.map((s) => s.trim()).join(", ")
                        }}
                      </p>
                    </div>
                    <div class="list-item-description">
                      <ul>
                        @for (
                          d of getActiveBullets(
                            project.project_description,
                            project.id
                          );
                          track d
                        ) {
                          <li [style.display]="isValue(d.text) ? '' : 'none'">
                            {{ d.text }}
                          </li>
                        }
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        }
        <!-- Education -->
        @case (SectionType.EDUCATION) {
          @if (getActiveEducations().length) {
            <div class="rb-container">
              <h2 class="heading">
                {{ getSectionLabel(SectionType.EDUCATION) }}
              </h2>
              <hr />
              @for (education of getActiveEducations(); track education) {
                <div class="list-item-v">
                  <div class="list-item-header">
                    <h3>
                      {{ t(education.school) }}
                      @if (education.location) {
                        <span>, {{ t(education.location) }}</span>
                      }
                    </h3>
                    <p>
                      {{ t(education.start_date) }}
                      @if (
                        isValue(education.start_date) &&
                        isValue(education.end_date)
                      ) {
                        <span> - </span>
                      }
                      {{ t(education.end_date) }}
                    </p>
                  </div>
                  <div class="list-item-header light">
                    <p>{{ t(education.degree) }}</p>
                    @if (education.gpa) {
                      <p>{{ t(education.gpa.toString()) }} CGPA</p>
                    }
                  </div>
                </div>
              }
            </div>
          }
        }
        <!-- Achievements -->
        @case (SectionType.ACHIEVEMENT) {
          @if (getActiveAchievements().length) {
            <div class="rb-container">
              <h2 class="heading">
                {{ getSectionLabel(SectionType.ACHIEVEMENT) }}
              </h2>
              <hr />
              <div class="rb-container-list">
                @for (
                  achievement of getActiveAchievements();
                  track achievement
                ) {
                  <div class="list-item-v">
                    <div class="list-item-header">
                      <h3>{{ t(achievement.title) }}</h3>
                    </div>
                    <div class="list-item-description">
                      <ul>
                        @for (
                          d of getActiveBullets(
                            achievement.description,
                            achievement.id
                          );
                          track d
                        ) {
                          <li [style.display]="isValue(d.text) ? '' : 'none'">
                            {{ d.text }}
                          </li>
                        }
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        }
      }
    }
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/edit-preview/edit-preview.component.scss */\nbody {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  font-size: 12px;\n}\na {\n  text-decoration: none;\n  color: rgb(0, 140, 255);\n}\nh1,\nh2,\nh3 {\n  margin: 0;\n}\naddress {\n  font-style: normal;\n}\ndiv,\np {\n  margin: 0;\n  padding: 0;\n}\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nli {\n  padding: 0 3px;\n}\nhr {\n  border: none;\n  border-top: 1px solid rgb(185, 185, 185);\n  margin: 0 0 5px 0;\n  padding: 0;\n  height: 0;\n}\n.resume-preview {\n  padding: 24px 20px;\n  background: #e2e8f0;\n  min-height: 100%;\n}\n.resume-wrapper {\n  max-width: 860px;\n  margin: 0 auto;\n  background: #fff;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.03);\n  border-radius: 4px;\n  padding: 36px 44px;\n  color: #000;\n}\n.rb-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin: 0 0 5px 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.rb-container-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.rb-container-list.horizontal {\n  flex-direction: column;\n  justify-content: center;\n}\n.heading {\n  margin: 1px;\n  font-weight: 500;\n  font-size: 1rem;\n}\n.list-item-h,\n.list-item-v {\n  padding: 0 0 0 10px;\n}\n.list-item-h {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  text-align: center;\n  margin: 0;\n}\n.list-item-h ul {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin: auto 0;\n}\n.list-item-h p {\n  font-weight: bold;\n}\n.list-item-v {\n  display: flex;\n  flex-direction: column;\n}\n.list-item-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: bold;\n}\n.list-item-header span {\n  color: grey;\n  font-weight: 500;\n}\n.list-item-header h3 {\n  font-size: 1em;\n  font-weight: bold;\n  margin: 0;\n}\n.light {\n  font-weight: unset;\n  font-style: italic;\n}\n.list-item-v .list-item-description {\n  padding: 0 0 0 20px;\n}\n.list-item-description ul {\n  list-style-type: disc;\n}\n.p-name {\n  font-size: 1.1rem;\n  font-weight: 550;\n}\n.heading-info div {\n  margin: 1px 0;\n}\n.center {\n  text-align: center;\n  justify-content: center;\n  margin: auto;\n}\n.p-link {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.p-info {\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-weight: 600;\n  padding: 0;\n}\n.p-info a,\n.p-info p {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  margin: 0 1px;\n}\n.skills-row strong {\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  text-align: start;\n  font-weight: bold;\n}\n.skills-row ul {\n  flex: 3;\n}\n.sep {\n  margin: 0 1px;\n}\n@media print {\n  .resume-preview {\n    background: white;\n  }\n  .resume-wrapper {\n    box-shadow: none;\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.summary-text {\n  font-size: 0.95em;\n  line-height: 1.55;\n  color: #374151;\n}\n/*# sourceMappingURL=edit-preview.component.css.map */\n'] }]
  }], () => [], { resumeContent: [{
    type: ViewChild,
    args: ["resumeContent"]
  }], onBeforePrint: [{
    type: HostListener,
    args: ["window:beforeprint"]
  }], onAfterPrint: [{
    type: HostListener,
    args: ["window:afterprint"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPreviewComponent, { className: "EditPreviewComponent", filePath: "src/app/edit-preview/edit-preview.component.ts", lineNumber: 31 });
})();

// src/app/resume-manager/resume-manager.component.ts
function ResumeManagerComponent_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275domListener("click", function ResumeManagerComponent_Conditional_8_For_5_Template_div_click_0_listener() {
      const resume_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadResume(resume_r2.id));
    });
    \u0275\u0275domElementStart(1, "div", 12)(2, "h3", 13);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div")(7, "button", 15);
    \u0275\u0275domListener("click", function ResumeManagerComponent_Conditional_8_For_5_Template_button_click_7_listener($event) {
      const resume_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.deleteResume(resume_r2.id, resume_r2.name));
    });
    \u0275\u0275text(8, " Delete ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const resume_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(resume_r2.id === ctx_r2.resumeHistory().currentResumeId ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-500/50" : "border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-neutral-600 dark:bg-neutral-800/50");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", resume_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(resume_r2.timestamp), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-100", resume_r2.id === ctx_r2.resumeHistory().currentResumeId);
  }
}
function ResumeManagerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 9);
    \u0275\u0275repeaterCreate(4, ResumeManagerComponent_Conditional_8_For_5_Template, 9, 6, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" You have ", ctx_r2.resumeHistory().savedResumes.length, " saved resume(s). Click on any resume to load it. ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.resumeHistory().savedResumes);
  }
}
function ResumeManagerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 7);
    \u0275\u0275text(1, " You don't have any saved resumes yet. Save your current resume to add it here. ");
    \u0275\u0275domElementEnd();
  }
}
var ResumeManagerComponent = class _ResumeManagerComponent {
  dataService = inject(DataService);
  ns = inject(NotificationService);
  close = new EventEmitter();
  resumeHistory = this.dataService.getResumeHistory();
  formatDate(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  loadResume(id) {
    return __async(this, null, function* () {
      const ok = yield this.ns.confirm("Loading this resume will replace your current view. Your current work will be auto-saved first.", "Load Resume");
      if (ok) {
        this.dataService.loadSavedResume(id);
        this.close.emit();
      }
    });
  }
  deleteResume(id, name) {
    return __async(this, null, function* () {
      const ok = yield this.ns.confirm(`Delete "${name}"? This cannot be undone.`, "Delete");
      if (ok)
        this.dataService.deleteSavedResume(id);
    });
  }
  closeManager() {
    this.close.emit();
  }
  static \u0275fac = function ResumeManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumeManagerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumeManagerComponent, selectors: [["app-resume-manager"]], outputs: { close: "close" }, decls: 10, vars: 1, consts: [[1, "bg-white", "dark:bg-neutral-900", "w-full", "max-w-xl", "rounded-2xl", "shadow-2xl", "overflow-hidden", "flex", "flex-col", "max-h-[80vh]", "transform", "transition-all", 3, "click"], [1, "flex", "justify-between", "items-center", "px-3", "py-2", "bg-gray-50", "dark:bg-neutral-800/50", "border-b", "border-gray-100", "dark:border-neutral-800"], [1, "m-0", "text-xl", "font-bold", "text-gray-800", "dark:text-neutral-100"], [1, "text-gray-400", "dark:text-neutral-500", "hover:text-gray-700", "dark:hover:text-neutral-300", "p-1", "rounded-md", "hover:bg-gray-200", "dark:hover:bg-neutral-700", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "overflow-y-auto"], [1, "text-center", "text-gray-500", "dark:text-neutral-400", "py-8"], [1, "text-sm", "text-gray-500", "dark:text-neutral-400", "mb-4"], [1, "flex", "flex-col", "gap-2"], [1, "group", "flex", "justify-between", "items-center", "p-4", "border", "rounded-xl", "cursor-pointer", "transition-all", "hover:shadow-sm", 3, "class"], [1, "group", "flex", "justify-between", "items-center", "p-4", "border", "rounded-xl", "cursor-pointer", "transition-all", "hover:shadow-sm", 3, "click"], [1, "flex", "flex-col", "gap-1"], [1, "m-0", "text-base", "font-bold", "text-gray-800", "dark:text-neutral-200"], [1, "m-0", "text-xs", "text-gray-500", "dark:text-neutral-500"], [1, "px-3", "py-1.5", "text-xs", "font-semibold", "text-red-600", "dark:text-red-400", "bg-red-50", "dark:bg-red-900/20", "hover:bg-red-100", "dark:hover:bg-red-900/40", "rounded-lg", "transition-colors", "opacity-0", "group-hover:opacity-100", 3, "click"]], template: function ResumeManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function ResumeManagerComponent_Template_div_click_0_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275domElementStart(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, " Resume Manager ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "button", 3);
      \u0275\u0275domListener("click", function ResumeManagerComponent_Template_button_click_4_listener() {
        return ctx.closeManager();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(5, "svg", 4);
      \u0275\u0275domElement(6, "path", 5);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(7, "div", 6);
      \u0275\u0275conditionalCreate(8, ResumeManagerComponent_Conditional_8_Template, 6, 1, "div")(9, ResumeManagerComponent_Conditional_9_Template, 2, 0, "p", 7);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.resumeHistory().savedResumes.length > 0 ? 8 : 9);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeManagerComponent, [{
    type: Component,
    args: [{ selector: "app-resume-manager", standalone: true, imports: [], template: `<div
  class="bg-white dark:bg-neutral-900 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transform transition-all"
  (click)="$event.stopPropagation()"
>
  <div
    class="flex justify-between items-center px-3 py-2 bg-gray-50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800"
  >
    <h2 class="m-0 text-xl font-bold text-gray-800 dark:text-neutral-100">
      Resume Manager
    </h2>
    <button
      (click)="closeManager()"
      class="text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-300 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <div class="p-6 overflow-y-auto">
    @if (resumeHistory().savedResumes.length > 0) {
      <div>
        <p class="text-sm text-gray-500 dark:text-neutral-400 mb-4">
          You have {{ resumeHistory().savedResumes.length }} saved resume(s).
          Click on any resume to load it.
        </p>
        <div class="flex flex-col gap-2">
          @for (resume of resumeHistory().savedResumes; track resume) {
            <div
              class="group flex justify-between items-center p-4 border rounded-xl cursor-pointer transition-all hover:shadow-sm"
              [class]="
                resume.id === resumeHistory().currentResumeId
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-500/50'
                  : 'border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-neutral-600 dark:bg-neutral-800/50'
              "
              (click)="loadResume(resume.id)"
            >
              <div class="flex flex-col gap-1">
                <h3
                  class="m-0 text-base font-bold text-gray-800 dark:text-neutral-200"
                >
                  {{ resume.name }}
                </h3>
                <p class="m-0 text-xs text-gray-500 dark:text-neutral-500">
                  {{ formatDate(resume.timestamp) }}
                </p>
              </div>
              <div>
                <button
                  (click)="
                    $event.stopPropagation();
                    deleteResume(resume.id, resume.name)
                  "
                  class="px-3 py-1.5 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                  [class.opacity-100]="
                    resume.id === resumeHistory().currentResumeId
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    } @else {
      <p class="text-center text-gray-500 dark:text-neutral-400 py-8">
        You don't have any saved resumes yet. Save your current resume to add it
        here.
      </p>
    }
  </div>
</div>
` }]
  }], null, { close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumeManagerComponent, { className: "ResumeManagerComponent", filePath: "src/app/resume-manager/resume-manager.component.ts", lineNumber: 13 });
})();

// src/app/profile-manager/profile-manager.component.ts
var _c05 = ["toggleBtn"];
function ProfileManagerComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 21);
    \u0275\u0275text(2, " Clones current active selections as a starting point. Choose a name: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileManagerComponent_Conditional_9_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newProfileName, $event) || (ctx_r1.newProfileName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ProfileManagerComponent_Conditional_9_Conditional_8_Template_input_keyup_enter_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmCreate());
    })("keyup.escape", function ProfileManagerComponent_Conditional_9_Conditional_8_Template_input_keyup_escape_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.creating.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function ProfileManagerComponent_Conditional_9_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmCreate());
    });
    \u0275\u0275text(6, " Create ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function ProfileManagerComponent_Conditional_9_Conditional_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.creating.set(false));
    });
    \u0275\u0275text(8, " \u2715 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProfileName);
  }
}
function ProfileManagerComponent_Conditional_9_For_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileManagerComponent_Conditional_9_For_11_Conditional_1_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.renameValue, $event) || (ctx_r1.renameValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ProfileManagerComponent_Conditional_9_For_11_Conditional_1_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const profile_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRename(profile_r6.id));
    })("keyup.escape", function ProfileManagerComponent_Conditional_9_For_11_Conditional_1_Template_input_keyup_escape_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.renamingId.set(""));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.renameValue);
  }
}
function ProfileManagerComponent_Conditional_9_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ProfileManagerComponent_Conditional_9_For_11_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const profile_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchProfile(profile_r6.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-indigo-700", profile_r6.id === ctx_r1.activeProfileId())("font-bold", profile_r6.id === ctx_r1.activeProfileId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", profile_r6.name, " ");
  }
}
function ProfileManagerComponent_Conditional_9_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " Active ");
    \u0275\u0275elementEnd();
  }
}
function ProfileManagerComponent_Conditional_9_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, ProfileManagerComponent_Conditional_9_For_11_Conditional_1_Template, 1, 1, "input", 27)(2, ProfileManagerComponent_Conditional_9_For_11_Conditional_2_Template, 2, 5, "button", 28);
    \u0275\u0275conditionalCreate(3, ProfileManagerComponent_Conditional_9_For_11_Conditional_3_Template, 2, 0, "span", 29);
    \u0275\u0275elementStart(4, "div", 30)(5, "button", 31);
    \u0275\u0275listener("click", function ProfileManagerComponent_Conditional_9_For_11_Template_button_click_5_listener() {
      const profile_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startRename(profile_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 13);
    \u0275\u0275element(7, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 33);
    \u0275\u0275listener("click", function ProfileManagerComponent_Conditional_9_For_11_Template_button_click_8_listener() {
      const profile_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProfile(profile_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 13);
    \u0275\u0275element(10, "path", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const profile_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-50", profile_r6.id === ctx_r1.activeProfileId());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.renamingId() === profile_r6.id ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(profile_r6.id === ctx_r1.activeProfileId() ? 3 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.profiles().length <= 1);
  }
}
function ProfileManagerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3, "Job Profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function ProfileManagerComponent_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startCreate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 13);
    \u0275\u0275element(6, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " New Profile ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ProfileManagerComponent_Conditional_9_Conditional_8_Template, 9, 1, "div", 15);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275repeaterCreate(10, ProfileManagerComponent_Conditional_9_For_11_Template, 11, 5, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "p", 19);
    \u0275\u0275text(14, " \u{1F4A1} Each profile shows a different slice of your master resume. ");
    \u0275\u0275elementStart(15, "strong", 20);
    \u0275\u0275text(16, "The AI always sees all content");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \u2014 active or not \u2014 so it has your full career context when making suggestions. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r1.dropdownTop, "px")("left", ctx_r1.dropdownLeft, "px");
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.creating() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.profiles());
  }
}
var ProfileManagerComponent = class _ProfileManagerComponent {
  ds = inject(DataService);
  ns = inject(NotificationService);
  toggleBtn;
  profiles = this.ds.getProfiles();
  activeProfileId = this.ds.getActiveProfileId();
  activeProfile = this.ds.getActiveProfile;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  creating = signal(false, ...ngDevMode ? [{ debugName: "creating" }] : (
    /* istanbul ignore next */
    []
  ));
  newProfileName = "";
  renamingId = signal("", ...ngDevMode ? [{ debugName: "renamingId" }] : (
    /* istanbul ignore next */
    []
  ));
  renameValue = "";
  // Computed position for the fixed dropdown
  dropdownTop = 0;
  dropdownLeft = 0;
  onDocumentClick() {
    this.isOpen.set(false);
  }
  toggleOpen() {
    const open = !this.isOpen();
    if (open && this.toggleBtn) {
      const rect = this.toggleBtn.nativeElement.getBoundingClientRect();
      this.dropdownTop = rect.bottom + 6;
      this.dropdownLeft = rect.left;
    }
    this.isOpen.set(open);
  }
  startCreate() {
    this.creating.set(true);
    this.newProfileName = "";
  }
  confirmCreate() {
    if (this.newProfileName.trim()) {
      const id = this.ds.createProfile(this.newProfileName);
      this.ds.switchProfile(id);
    }
    this.creating.set(false);
    this.isOpen.set(false);
  }
  switchProfile(id) {
    this.ds.switchProfile(id);
    this.isOpen.set(false);
  }
  startRename(profile) {
    this.renamingId.set(profile.id);
    this.renameValue = profile.name;
  }
  confirmRename(id) {
    if (this.renameValue.trim())
      this.ds.renameProfile(id, this.renameValue);
    this.renamingId.set("");
  }
  deleteProfile(id) {
    return __async(this, null, function* () {
      const name = this.profiles().find((p) => p.id === id)?.name ?? "this profile";
      const ok = yield this.ns.confirm(`Delete "${name}"? This cannot be undone.`, "Delete");
      if (ok)
        this.ds.deleteProfile(id);
    });
  }
  static \u0275fac = function ProfileManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileManagerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileManagerComponent, selectors: [["app-profile-manager"]], viewQuery: function ProfileManagerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toggleBtn = _t.first);
    }
  }, hostBindings: function ProfileManagerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ProfileManagerComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 10, vars: 4, consts: [["toggleBtn", ""], [1, "relative", 3, "click"], ["title", "Switch Job Profile", 1, "flex", "items-center", "gap-2", "px-4", "py-2", "rounded-full", "bg-indigo-600", "hover:bg-indigo-500", "text-white", "text-sm", "font-semibold", "transition-all", "shadow-md", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4", "shrink-0"], ["d", "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"], [1, "max-w-[140px]", "truncate"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3", "h-3", "shrink-0", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], [1, "dropdown-fixed", "bg-white", "rounded-2xl", "shadow-2xl", "border", "border-gray-200", "overflow-hidden", 3, "top", "left"], [1, "dropdown-fixed", "bg-white", "rounded-2xl", "shadow-2xl", "border", "border-gray-200", "overflow-hidden"], [1, "px-4", "py-3", "bg-gray-50", "border-b", "border-gray-100", "flex", "items-center", "justify-between"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-widest"], [1, "flex", "items-center", "gap-1", "text-xs", "font-bold", "text-indigo-600", "hover:text-indigo-700", "hover:bg-indigo-50", "px-2", "py-1", "rounded-lg", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "px-4", "py-3", "border-b", "border-indigo-100", "bg-indigo-50/60"], [1, "max-h-64", "overflow-y-auto"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "dark:bg-neutral-900", "dark:text-white", "dark:hover:bg-gray-800", "bg-neutral-100", "hover:bg-gray-200", "transition-colors", "group", "border-b", "border-gray-50", "last:border-0", 3, "bg-indigo-50"], [1, "px-4", "py-2.5", "border-t", "border-gray-100", "bg-gray-50"], [1, "text-[10px]", "text-gray-400", "leading-relaxed"], [1, "text-gray-500"], [1, "text-xs", "text-gray-500", "mb-2"], [1, "flex", "gap-2"], ["type", "text", "placeholder", 'e.g. "Python + React"', "autofocus", "", 1, "flex-1", "text-sm", "rounded-lg", "border", "border-gray-200", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-100", "px-3", "py-1.5", "outline-none", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "px-3", "py-1.5", "bg-indigo-600", "hover:bg-indigo-500", "text-white", "text-xs", "font-bold", "rounded-lg", "transition-colors", 3, "click"], [1, "px-2", "py-1.5", "bg-gray-100", "hover:bg-gray-200", "text-gray-500", "text-xs", "font-bold", "rounded-lg", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "dark:bg-neutral-900", "dark:text-white", "dark:hover:bg-gray-800", "bg-neutral-100", "hover:bg-gray-200", "transition-colors", "group", "border-b", "border-gray-50", "last:border-0"], ["type", "text", "autofocus", "", 1, "flex-1", "text-sm", "rounded", "border", "border-indigo-300", "focus:border-indigo-500", "focus:ring-2", "focus:ring-indigo-100", "px-2", "py-0.5", "outline-none", 3, "ngModel"], [1, "flex-1", "text-sm", "text-left", "truncate", "py-0.5", 3, "text-indigo-700", "font-bold"], [1, "text-[9px]", "text-indigo-500", "uppercase", "tracking-widest", "shrink-0", "bg-indigo-100", "px-2", "py-0.5", "rounded-full"], [1, "flex", "gap-1", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-150", "shrink-0"], ["title", "Rename", 1, "p-1.5", "rounded-lg", "hover:bg-gray-200", "text-gray-400", "hover:text-gray-700", "transition-colors", 3, "click"], ["d", "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"], ["title", "Delete profile", 1, "p-1.5", "rounded-lg", "hover:bg-red-50", "text-gray-300", "hover:text-red-500", "transition-colors", "disabled:opacity-25", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["type", "text", "autofocus", "", 1, "flex-1", "text-sm", "rounded", "border", "border-indigo-300", "focus:border-indigo-500", "focus:ring-2", "focus:ring-indigo-100", "px-2", "py-0.5", "outline-none", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "flex-1", "text-sm", "text-left", "truncate", "py-0.5", 3, "click"]], template: function ProfileManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function ProfileManagerComponent_Template_div_click_0_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(1, "button", 2, 0);
      \u0275\u0275listener("click", function ProfileManagerComponent_Template_button_click_1_listener() {
        return ctx.toggleOpen();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 6);
      \u0275\u0275element(8, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, ProfileManagerComponent_Conditional_9_Template, 18, 5, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(((tmp_1_0 = ctx.activeProfile()) == null ? null : tmp_1_0.name) ?? "Default");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.isOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isOpen() ? 9 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.dropdown-fixed[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: fixed;\n  max-width: 400px;\n}\n/*# sourceMappingURL=profile-manager.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileManagerComponent, [{
    type: Component,
    args: [{ selector: "app-profile-manager", standalone: true, imports: [FormsModule], template: `<div class="relative" (click)="$event.stopPropagation()">
  <!-- \u2500\u2500 Toggle button \u2500\u2500 -->
  <button
    #toggleBtn
    (click)="toggleOpen()"
    class="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-md"
    title="Switch Job Profile"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </svg>
    <span class="max-w-[140px] truncate">{{
      activeProfile()?.name ?? "Default"
    }}</span>
    <svg
      class="w-3 h-3 shrink-0 transition-transform duration-200"
      [class.rotate-180]="isOpen()"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2.5"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- \u2500\u2500 Dropdown panel \u2014 rendered fixed so left-panel z-index can't block it \u2500\u2500 -->
  @if (isOpen()) {
    <div
      class="dropdown-fixed bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      [style.top.px]="dropdownTop"
      [style.left.px]="dropdownLeft"
    >
      <!-- Header -->
      <div
        class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between"
      >
        <span class="text-xs font-bold text-gray-500 uppercase tracking-widest"
          >Job Profiles</span
        >
        <button
          (click)="startCreate()"
          class="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-2 py-1 rounded-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          New Profile
        </button>
      </div>
      <!-- New profile input -->
      @if (creating()) {
        <div class="px-4 py-3 border-b border-indigo-100 bg-indigo-50/60">
          <p class="text-xs text-gray-500 mb-2">
            Clones current active selections as a starting point. Choose a name:
          </p>
          <div class="flex gap-2">
            <input
              type="text"
              [(ngModel)]="newProfileName"
              (keyup.enter)="confirmCreate()"
              (keyup.escape)="creating.set(false)"
              placeholder='e.g. "Python + React"'
              autofocus
              class="flex-1 text-sm rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 px-3 py-1.5 outline-none"
            />
            <button
              (click)="confirmCreate()"
              class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors"
            >
              Create
            </button>
            <button
              (click)="creating.set(false)"
              class="px-2 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-500 text-xs font-bold rounded-lg transition-colors"
            >
              \u2715
            </button>
          </div>
        </div>
      }
      <!-- Profile list -->
      <div class="max-h-64 overflow-y-auto">
        @for (profile of profiles(); track profile) {
          <div
            class="flex items-center gap-2 px-4 py-2.5 dark:bg-neutral-900 dark:text-white dark:hover:bg-gray-800 bg-neutral-100 hover:bg-gray-200 transition-colors group border-b border-gray-50 last:border-0"
            [class.bg-indigo-50]="profile.id === activeProfileId()"
          >
            @if (renamingId() === profile.id) {
              <input
                type="text"
                [(ngModel)]="renameValue"
                (keyup.enter)="confirmRename(profile.id)"
                (keyup.escape)="renamingId.set('')"
                autofocus
                class="flex-1 text-sm rounded border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 px-2 py-0.5 outline-none"
              />
            } @else {
              <button
                (click)="switchProfile(profile.id)"
                class="flex-1 text-sm text-left truncate py-0.5"
                [class.text-indigo-700]="profile.id === activeProfileId()"
                [class.font-bold]="profile.id === activeProfileId()"
              >
                {{ profile.name }}
              </button>
            }
            @if (profile.id === activeProfileId()) {
              <span
                class="text-[9px] text-indigo-500 uppercase tracking-widest shrink-0 bg-indigo-100 px-2 py-0.5 rounded-full"
              >
                Active
              </span>
            }
            <div
              class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0"
            >
              <button
                (click)="startRename(profile)"
                title="Rename"
                class="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
              </button>
              <button
                (click)="deleteProfile(profile.id)"
                [disabled]="profiles().length <= 1"
                title="Delete profile"
                class="p-1.5 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        }
      </div>
      <!-- Footer -->
      <div class="px-4 py-2.5 border-t border-gray-100 bg-gray-50">
        <p class="text-[10px] text-gray-400 leading-relaxed">
          \u{1F4A1} Each profile shows a different slice of your master resume.
          <strong class="text-gray-500">The AI always sees all content</strong>
          \u2014 active or not \u2014 so it has your full career context when making
          suggestions.
        </p>
      </div>
    </div>
  }
</div>
`, styles: ["/* angular:styles/component:scss;cb9339f6c519c26a9a7b6e8f71385f6c5da0b55436a601244a53783f9e1ea93d;/home/abugh/Projects/Resume_Builder/src/app/profile-manager/profile-manager.component.ts */\n.dropdown-fixed {\n  z-index: 1;\n  position: fixed;\n  max-width: 400px;\n}\n/*# sourceMappingURL=profile-manager.component.css.map */\n"] }]
  }], null, { toggleBtn: [{
    type: ViewChild,
    args: ["toggleBtn"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileManagerComponent, { className: "ProfileManagerComponent", filePath: "src/app/profile-manager/profile-manager.component.ts", lineNumber: 30 });
})();

// src/app/services/completeness.service.ts
var CompletenessService = class _CompletenessService {
  dataService = inject(DataService);
  /** Reactive completeness result — auto-recalculates on any resume change */
  result = computed(() => {
    const resume = this.dataService.getResume()();
    const items = [];
    const personalSection = resume.sections.find((s) => s.type === SectionType.PERSONAL_INFO);
    const info = personalSection?.content;
    items.push({
      label: "Full name, email & phone",
      passed: !!(info?.name?.trim() && info?.email?.trim() && info?.phone?.trim()),
      points: 10,
      tip: "Complete your contact info in Personal Info.",
      section: "personal-info"
    });
    items.push({
      label: "At least 1 social or portfolio link",
      passed: Array.isArray(info?.links) && info.links.some((l) => l.url?.trim()),
      points: 5,
      tip: "Add a LinkedIn, GitHub, or portfolio link in Personal Info.",
      section: "personal-info"
    });
    const summaryText = this.dataService.getSummaryText();
    items.push({
      label: "Professional summary written",
      passed: summaryText.trim().length > 20,
      points: 15,
      tip: "Add a professional summary \u2014 it's the first thing recruiters read.",
      section: "summary"
    });
    const skillSections = resume.sections.filter((s) => s.type === SectionType.SKILLS);
    const hasEnoughSkills = skillSections.length >= 2 && skillSections.every((s) => (s.content.skills?.length ?? 0) >= 3);
    items.push({
      label: "\u2265 2 skill categories with \u2265 3 skills each",
      passed: hasEnoughSkills,
      points: 10,
      tip: "Add more skill categories. ATS systems weight breadth as well as depth.",
      section: "skills"
    });
    const experienceSections = resume.sections.filter((s) => s.type === SectionType.EXPERIENCE);
    const activeExps = experienceSections.filter((s) => this.dataService.isActive(s.content.id));
    items.push({
      label: "At least 1 active work experience",
      passed: activeExps.length > 0,
      points: 10,
      tip: "Enable at least one work experience for the current job profile.",
      section: "experience"
    });
    const allHaveBullets = activeExps.every((s) => (s.content.descriptions?.filter((d) => this.dataService.isActive(d.id) && d.text?.trim()).length ?? 0) >= 2);
    items.push({
      label: "Each experience has \u2265 2 active bullets",
      passed: allHaveBullets && activeExps.length > 0,
      points: 10,
      tip: "Add at least 2 bullet points per work experience.",
      section: "experience"
    });
    const metricRegex = /\d+[%×x]?|\$[\d,]+|[0-9]+[kKmM]\b/;
    const anyBulletHasMetric = activeExps.some((s) => s.content.descriptions?.some((d) => metricRegex.test(d.text ?? "")));
    items.push({
      label: "At least one bullet contains a metric or number",
      passed: anyBulletHasMetric,
      points: 10,
      tip: 'Quantify your impact. e.g. "Reduced load time by 40%" or "Served 10k+ users".',
      section: "experience"
    });
    const projectSections = resume.sections.filter((s) => s.type === SectionType.PROJECTS);
    const activeProjects = projectSections.filter((s) => this.dataService.isActive(s.content.id));
    items.push({
      label: "At least 1 active project",
      passed: activeProjects.length > 0,
      points: 10,
      tip: "Projects are highly valued for engineers, designers, and product managers.",
      section: "projects"
    });
    const hasEducation = resume.sections.some((s) => s.type === SectionType.EDUCATION);
    items.push({
      label: "Education section present",
      passed: hasEducation,
      points: 5,
      tip: "Add your education history.",
      section: "education"
    });
    const noStubBullets = activeExps.every((s) => s.content.descriptions?.filter((d) => this.dataService.isActive(d.id)).every((d) => d.text?.trim().split(/\s+/).length >= 8) ?? true);
    items.push({
      label: "All active bullets are \u2265 8 words",
      passed: noStubBullets && activeExps.length > 0,
      points: 5,
      tip: "Expand stub bullets \u2014 short bullets look incomplete and confuse ATS parsers.",
      section: "experience"
    });
    const totalPoints = items.reduce((sum, i) => sum + i.points, 0);
    const earned = items.filter((i) => i.passed).reduce((sum, i) => sum + i.points, 0);
    return {
      score: earned,
      maxScore: totalPoints,
      percent: Math.round(earned / totalPoints * 100),
      items
    };
  }, ...ngDevMode ? [{ debugName: "result" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function CompletenessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompletenessService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompletenessService, factory: _CompletenessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompletenessService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/resume-controls/resume-controls.component.ts
var _c06 = ["jsonHighlightLayer"];
var _c1 = () => ["/ai"];
function ResumeControlsComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function ResumeControlsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "path", 42);
    \u0275\u0275elementEnd();
  }
}
function ResumeControlsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 43);
    \u0275\u0275elementEnd();
  }
}
function ResumeControlsComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 44);
    \u0275\u0275elementEnd();
  }
}
function ResumeControlsComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 45);
    \u0275\u0275elementEnd();
  }
}
function ResumeControlsComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_55_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSaveDialog = false);
    });
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_55_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "h3", 48);
    \u0275\u0275text(3, " Save As New Draft ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 49);
    \u0275\u0275text(5, " Give this version a name to save it separately. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 50)(7, "label", 51);
    \u0275\u0275text(8, "Draft Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ResumeControlsComponent_Conditional_55_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.resumeName, $event) || (ctx_r2.resumeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ResumeControlsComponent_Conditional_55_Template_input_keyup_enter_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveResume());
    })("keyup.escape", function ResumeControlsComponent_Conditional_55_Template_input_keyup_escape_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSaveDialog = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53)(11, "button", 54);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_55_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSaveDialog = false);
    });
    \u0275\u0275text(12, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 55);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_55_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveResume());
    });
    \u0275\u0275text(14, " Save Draft ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.resumeName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.resumeName.trim());
  }
}
function ResumeControlsComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_56_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showImportDialog = false);
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_56_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "h3", 48);
    \u0275\u0275text(3, " Import JSON ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 58);
    \u0275\u0275text(5, " This will create a new saved draft from the pasted data. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 50)(7, "label", 51);
    \u0275\u0275text(8, "Paste valid JSON payload");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 59);
    \u0275\u0275elementStart(10, "div", 60)(11, "textarea", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ResumeControlsComponent_Conditional_56_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.importJSON, $event) || (ctx_r2.importJSON = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("scroll", function ResumeControlsComponent_Conditional_56_Template_textarea_scroll_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.syncJsonScroll($event));
    })("keydown.escape", function ResumeControlsComponent_Conditional_56_Template_textarea_keydown_escape_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showImportDialog = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "pre", 62, 0);
    \u0275\u0275element(14, "code", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 53)(16, "button", 54);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_56_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showImportDialog = false);
    });
    \u0275\u0275text(17, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 55);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_56_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.importResumeFromJSON());
    });
    \u0275\u0275text(19, " Import ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.importJSON);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r2.highlightedJson(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.importJSON);
  }
}
function ResumeControlsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showResumeManager = false);
    });
    \u0275\u0275elementStart(1, "app-resume-manager", 64);
    \u0275\u0275listener("close", function ResumeControlsComponent_Conditional_57_Template_app_resume_manager_close_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showResumeManager = false);
    });
    \u0275\u0275elementEnd()();
  }
}
function ResumeControlsComponent_Conditional_58_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 82);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function ResumeControlsComponent_Conditional_58_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 83);
    \u0275\u0275element(1, "path", 88);
    \u0275\u0275elementEnd();
  }
}
function ResumeControlsComponent_Conditional_58_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.tip, " ");
  }
}
function ResumeControlsComponent_Conditional_58_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "span", 81);
    \u0275\u0275conditionalCreate(2, ResumeControlsComponent_Conditional_58_For_18_Conditional_2_Template, 2, 0, ":svg:svg", 82);
    \u0275\u0275conditionalCreate(3, ResumeControlsComponent_Conditional_58_For_18_Conditional_3_Template, 2, 0, ":svg:svg", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 84)(5, "p", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ResumeControlsComponent_Conditional_58_For_18_Conditional_7_Template, 2, 1, "p", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275classMap(item_r7.passed ? "bg-emerald-50/50 dark:bg-emerald-900/10" : "bg-red-50/50 dark:bg-red-900/10 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-default");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7.passed ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r7.passed ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r7.passed ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r7.passed ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", item_r7.points);
  }
}
function ResumeControlsComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCompleteness = false);
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_58_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "div", 68)(4, "span", 69);
    \u0275\u0275text(5, "Resume Completeness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 70);
    \u0275\u0275listener("click", function ResumeControlsComponent_Conditional_58_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCompleteness = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 71);
    \u0275\u0275element(8, "path", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 73)(10, "div", 74);
    \u0275\u0275element(11, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 76);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 77);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 78);
    \u0275\u0275repeaterCreate(17, ResumeControlsComponent_Conditional_58_For_18_Template, 10, 9, "div", 79, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275classMap(ctx_r2.completeness.result().percent >= 75 ? "bg-emerald-500" : ctx_r2.completeness.result().percent >= 50 ? "bg-amber-500" : "bg-red-500");
    \u0275\u0275styleProp("width", ctx_r2.completeness.result().percent + "%");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.completeness.result().percent >= 75 ? "text-emerald-600" : ctx_r2.completeness.result().percent >= 50 ? "text-amber-600" : "text-red-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.completeness.result().percent, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.completeness.result().score, " / ", ctx_r2.completeness.result().maxScore, " points ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.completeness.result().items);
  }
}
var ResumeControlsComponent = class _ResumeControlsComponent {
  dataService = inject(DataService);
  ns = inject(NotificationService);
  completeness = inject(CompletenessService);
  themeService = inject(ThemeService);
  sanitizer = inject(DomSanitizer);
  jsonHighlightLayer;
  // Tier
  tiers = EXPERIENCE_TIERS;
  currentTier = this.dataService.getCurrentTierSignal();
  changeTier(value) {
    this.dataService.setCurrentTier(value);
  }
  syncJsonScroll(event) {
    if (this.jsonHighlightLayer) {
      const textarea = event.target;
      this.jsonHighlightLayer.nativeElement.scrollTop = textarea.scrollTop;
      this.jsonHighlightLayer.nativeElement.scrollLeft = textarea.scrollLeft;
    }
  }
  highlightedJson() {
    let text = this.importJSON;
    if (!text)
      return this.sanitizer.bypassSecurityTrustHtml("");
    text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const jsonRegex = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g;
    text = text.replace(jsonRegex, (match) => {
      let cls = "text-amber-600 dark:text-amber-400";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "text-sky-600 dark:text-sky-400 font-semibold";
          const keyStr = match.substring(0, match.lastIndexOf('"') + 1);
          const colonStr = match.substring(match.lastIndexOf('"') + 1);
          return `<span class="${cls}">${keyStr}</span>${colonStr}`;
        } else {
          cls = "text-green-600 dark:text-green-400";
        }
      } else if (/true|false/.test(match)) {
        cls = "text-fuchsia-600 dark:text-fuchsia-400 font-bold";
      } else if (/null/.test(match)) {
        cls = "text-fuchsia-600 dark:text-fuchsia-400 font-bold";
      }
      return `<span class="${cls}">${match}</span>`;
    });
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  // Template data
  availableTemplates = this.dataService.getAvailableTemplates();
  history = this.dataService.getResumeHistory();
  // Undo/Redo State
  canUndo = this.dataService.canUndo;
  canRedo = this.dataService.canRedo;
  undo() {
    this.dataService.undo();
  }
  redo() {
    this.dataService.redo();
  }
  // Auto-save status — tick every 10s to keep label fresh
  lastSavedAt = signal(Date.now(), ...ngDevMode ? [{ debugName: "lastSavedAt" }] : (
    /* istanbul ignore next */
    []
  ));
  _tick = signal(0, ...ngDevMode ? [{ debugName: "_tick" }] : (
    /* istanbul ignore next */
    []
  ));
  tickInterval = setInterval(() => this._tick.update((n) => n + 1), 1e4);
  lastSavedLabel() {
    this._tick();
    const sec = Math.floor((Date.now() - this.lastSavedAt()) / 1e3);
    if (sec < 5)
      return "Just saved";
    if (sec < 60)
      return `Saved ${sec}s ago`;
    return `Saved ${Math.floor(sec / 60)}m ago`;
  }
  markSaved() {
    this.lastSavedAt.set(Date.now());
    this._tick.update((n) => n + 1);
  }
  ngOnDestroy() {
    clearInterval(this.tickInterval);
  }
  // UI state
  showSaveDialog = false;
  showCompleteness = false;
  showImportDialog = false;
  showResumeManager = false;
  resumeName = "";
  importJSON = "";
  savedToast = false;
  toastTimer = null;
  handleKeydown(e) {
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key === "s") {
      e.preventDefault();
      this.quickSave();
    } else if (mod && e.key === "z" && !e.shiftKey) {
      e.preventDefault();
      this.undo();
    } else if (mod && (e.key === "y" || e.key === "z" && e.shiftKey)) {
      e.preventDefault();
      this.redo();
    }
  }
  quickSave() {
    this.dataService.overwriteCurrentSlot();
    this.markSaved();
    this.savedToast = true;
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.savedToast = false;
    }, 2e3);
  }
  // Format date for display
  formatDate(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  // Sample resume loading
  loadSampleResume(templateId) {
    return __async(this, null, function* () {
      const ok = yield this.ns.confirm("Loading a sample resume will replace your current content. This will auto-save your work first.", "Load Sample");
      if (ok)
        this.dataService.loadSampleResume(templateId);
    });
  }
  // Open Save As dialog — pre-fill name from current slot
  openSaveDialog() {
    const h = this.history();
    const currentSlot = h.savedResumes.find((r) => r.id === h.currentResumeId);
    this.resumeName = currentSlot?.name ?? "";
    this.showSaveDialog = true;
  }
  // Save current resume
  saveResume() {
    if (this.resumeName) {
      const resumeId = this.dataService.saveCurrentResume(this.resumeName);
      if (resumeId) {
        this.showSaveDialog = false;
        this.resumeName = "";
        setTimeout(() => {
          this.showResumeManager = true;
        }, 300);
      }
    }
  }
  // Load a saved resume
  loadResume(id) {
    return __async(this, null, function* () {
      const ok = yield this.ns.confirm("Loading this resume will replace your current view. Your current work will be auto-saved first.", "Load Resume");
      if (ok)
        this.dataService.loadSavedResume(id);
    });
  }
  // Delete a saved resume
  deleteResume(id, name) {
    return __async(this, null, function* () {
      const ok = yield this.ns.confirm(`Delete "${name}"? This cannot be undone.`, "Delete");
      if (ok)
        this.dataService.deleteSavedResume(id);
    });
  }
  // Export resume as JSON
  exportResume() {
    const jsonData = this.dataService.exportCurrentResumeToJSON();
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  // Import resume from JSON
  importResumeFromJSON() {
    if (this.importJSON) {
      try {
        const success = this.dataService.importResumeFromJSON(this.importJSON);
        if (success) {
          this.showImportDialog = false;
          this.importJSON = "";
          this.ns.toast("Resume imported successfully! Your previous work was auto-saved.", "success");
        } else {
          this.ns.toast("Invalid resume data. Please check your JSON format.", "error");
        }
      } catch (error) {
        this.ns.toast("Error importing resume: " + error, "error");
      }
    }
  }
  static \u0275fac = function ResumeControlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumeControlsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumeControlsComponent, selectors: [["app-resume-controls"]], viewQuery: function ResumeControlsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.jsonHighlightLayer = _t.first);
    }
  }, hostBindings: function ResumeControlsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ResumeControlsComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 59, vars: 22, consts: [["jsonHighlightLayer", ""], [1, "resume-controls", "w-full", "flex", "items-center", "justify-between", "px-3", "bg-transparent", "py-1.5"], [1, "flex", "items-center", "gap-1", "right-controls", "shrink-0"], [1, "flex", "items-center", "gap-2", "bg-gray-50", "dark:bg-neutral-800", "border", "border-gray-200", "dark:border-neutral-700", "rounded-xl", "px-2.5", "py-1.5"], ["title", "Experience Level \u2014 affects AI suggestion tone", 1, "relative"], [1, "appearance-none", "h-7", "pl-2.5", "pr-6", "text-xs", "font-bold", "text-indigo-700", "dark:text-indigo-300", "bg-indigo-50", "dark:bg-indigo-900/30", "border", "border-indigo-200", "dark:border-indigo-700", "rounded-lg", "cursor-pointer", "hover:bg-indigo-100", "dark:hover:bg-indigo-900/50", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-300", "transition-colors", 3, "ngModelChange", "ngModel"], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "pointer-events-none", "absolute", "right-1.5", "top-1/2", "-translate-y-1/2", "h-2.5", "w-2.5", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M19 9l-7 7-7-7"], [1, "w-px", "h-4", "bg-gray-200", "dark:bg-neutral-700"], ["title", "Undo (Ctrl+Z)", 1, "p-1.5", "text-gray-400", "dark:text-neutral-500", "hover:text-indigo-600", "dark:hover:text-indigo-400", "hover:bg-white", "dark:hover:bg-neutral-700", "rounded-lg", "disabled:opacity-25", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"], ["title", "Redo (Ctrl+Y)", 1, "p-1.5", "text-gray-400", "dark:text-neutral-500", "hover:text-indigo-600", "dark:hover:text-indigo-400", "hover:bg-white", "dark:hover:bg-neutral-700", "rounded-lg", "disabled:opacity-25", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"], ["title", "Last auto-saved", 1, "flex", "items-center", "gap-1", "text-[10px]", "font-medium", "text-gray-400", "dark:text-neutral-500", "select-none", "whitespace-nowrap", "px-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3", "w-3", "shrink-0", "text-emerald-400"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], [1, "mx-1", "w-px", "h-6", "bg-gray-200", "dark:bg-neutral-700"], ["title", "Resume Completeness", 1, "flex", "items-center", "gap-1.5", "text-xs", "font-bold", "px-2.5", "py-1.5", "rounded-lg", "border", "transition-all", "hover:shadow-sm", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3"], [1, "p-2", "text-gray-400", "dark:text-neutral-500", "hover:text-indigo-600", "dark:hover:text-indigo-400", "hover:bg-indigo-50", "dark:hover:bg-neutral-700", "rounded-lg", "transition-colors", 3, "click", "title"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-4", "w-4", "text-amber-400"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-4", "w-4"], [1, "flex", "items-center", "gap-1.5", "text-sm", "font-bold", "text-white", "bg-gradient-to-r", "from-violet-600", "to-indigo-600", "hover:from-violet-700", "hover:to-indigo-700", "py-2", "px-4", "rounded-xl", "transition-all", "shadow-sm", "hover:shadow-md", "focus:outline-none", "focus:ring-2", "focus:ring-violet-300", "cursor-pointer", 3, "routerLink"], [1, "flex", "items-center", "gap-1"], ["title", "Import JSON", 1, "p-2", "text-gray-400", "dark:text-neutral-500", "hover:text-gray-700", "dark:hover:text-neutral-200", "hover:bg-gray-100", "dark:hover:bg-neutral-700", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], ["title", "Export JSON", 1, "p-2", "text-gray-400", "dark:text-neutral-500", "hover:text-gray-700", "dark:hover:text-neutral-200", "hover:bg-gray-100", "dark:hover:bg-neutral-700", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "flex", "items-center", "gap-2"], [1, "flex", "items-center", "gap-1.5", "text-sm", "font-semibold", "text-gray-600", "dark:text-neutral-400", "hover:text-gray-900", "dark:hover:text-neutral-100", "hover:bg-gray-100", "dark:hover:bg-neutral-700", "py-1.5", "px-3", "rounded-lg", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-gray-400", "dark:text-neutral-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "bg-indigo-100", "dark:bg-indigo-900/40", "text-indigo-700", "dark:text-indigo-300", "rounded-full", "px-1.5", "py-px", "text-[10px]", "font-bold"], ["title", "Save (Ctrl+S)", 1, "flex", "items-center", "gap-1.5", "text-sm", "font-semibold", "py-1.5", "px-3", "rounded-lg", "border", "transition-all", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "h-4", "w-4", "text-gray-400", "dark:text-neutral-500"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4", "text-emerald-500"], [1, "flex", "items-center", "gap-1.5", "text-sm", "font-bold", "text-white", "bg-slate-800", "dark:bg-indigo-700", "hover:bg-slate-900", "dark:hover:bg-indigo-800", "shadow-sm", "py-1.5", "px-3.5", "rounded-lg", "transition-all", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/60", "dark:bg-black/70", "backdrop-blur-sm", "flex", "items-center", "justify-center", "z-[9999]"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "flex", "items-center", "justify-center", "z-[9999]"], [1, "fixed", "inset-0", "z-[9998]"], ["fill-rule", "evenodd", "d", "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z", "clip-rule", "evenodd"], ["d", "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "fixed", "inset-0", "bg-gray-900/60", "dark:bg-black/70", "backdrop-blur-sm", "flex", "items-center", "justify-center", "z-[9999]", 3, "click"], [1, "bg-white", "dark:bg-neutral-900", "border", "border-gray-100", "dark:border-neutral-700", "p-6", "rounded-2xl", "shadow-xl", "w-[400px]", 3, "click"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-neutral-50", "mb-1"], [1, "text-sm", "text-gray-400", "dark:text-neutral-500", "mb-5"], [1, "mb-5"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-neutral-300", "mb-2"], ["type", "text", "placeholder", "e.g. Senior Eng - TechCorp", "autofocus", "", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "dark:border-neutral-700", "rounded-lg", "shadow-sm", "bg-white", "dark:bg-neutral-800", "text-gray-900", "dark:text-neutral-50", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "flex", "justify-end", "gap-3", "mt-6"], [1, "px-5", "py-2", "text-sm", "font-medium", "text-gray-600", "dark:text-neutral-400", "hover:text-gray-900", "dark:hover:text-neutral-100", "bg-white", "dark:bg-neutral-800", "border", "border-gray-300", "dark:border-neutral-700", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-neutral-700", "focus:outline-none", 3, "click"], [1, "px-5", "py-2", "text-sm", "font-medium", "text-white", "bg-indigo-600", "hover:bg-indigo-700", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "flex", "items-center", "justify-center", "z-[9999]", 3, "click"], [1, "bg-white", "dark:bg-neutral-900", "border", "border-gray-100", "dark:border-neutral-800", "p-6", "rounded-2xl", "shadow-xl", "w-[500px]", 3, "click"], [1, "text-sm", "text-gray-400", "dark:text-neutral-500", "mb-4"], [1, "hidden", "text-sky-500", "text-sky-400", "text-green-600", "text-green-400", "text-amber-500", "text-amber-400", "text-fuchsia-500", "text-fuchsia-400", "font-semibold", "font-bold"], [1, "relative", "w-full", "h-[320px]", "bg-white", "dark:bg-neutral-800", "border", "border-gray-300", "dark:border-neutral-700", "rounded-lg", "shadow-sm", "overflow-hidden", "focus-within:ring-2", "focus-within:ring-indigo-500", "focus-within:border-indigo-500"], ["spellcheck", "false", "placeholder", '{"name": "...", "skills": [...]}', 1, "absolute", "inset-0", "w-full", "h-full", "px-4", "py-3", "font-mono", "text-sm", "text-transparent", "bg-transparent", "caret-gray-900", "dark:caret-white", "resize-none", "focus:outline-none", "z-10", "leading-relaxed", "scrollbar-thin", 2, "white-space", "pre-wrap", "word-wrap", "break-word", "overflow-wrap", "break-word", "margin", "0", "border", "none", "color", "transparent !important", "background-color", "transparent !important", 3, "ngModelChange", "scroll", "keydown.escape", "ngModel"], [1, "absolute", "inset-0", "w-full", "h-full", "px-4", "py-3", "font-mono", "text-sm", "text-gray-900", "dark:text-gray-200", "m-0", "z-0", "pointer-events-none", "leading-relaxed", "overflow-hidden", "bg-transparent", 2, "white-space", "pre-wrap", "word-wrap", "break-word", "overflow-wrap", "break-word", "margin", "0", "border", "none", "padding-right", "20px"], [3, "innerHTML"], [3, "close"], [1, "fixed", "inset-0", "z-[9998]", 3, "click"], [1, "absolute", "top-14", "right-4", "w-80", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-2xl", "shadow-2xl", "overflow-hidden", 3, "click"], [1, "px-5", "pt-5", "pb-4", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-gray-100"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", "p-0.5", "rounded", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex", "items-center", "gap-3"], [1, "flex-1", "h-2.5", "bg-gray-100", "dark:bg-gray-700", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-700"], [1, "text-lg", "font-black", "shrink-0"], [1, "text-xs", "text-gray-400", "dark:text-gray-500", "mt-1.5"], [1, "max-h-80", "overflow-y-auto", "p-3", "space-y-1.5"], [1, "flex", "items-start", "gap-2.5", "p-2.5", "rounded-xl", "transition-colors", 3, "class"], [1, "flex", "items-start", "gap-2.5", "p-2.5", "rounded-xl", "transition-colors"], [1, "shrink-0", "mt-0.5"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "text-emerald-500"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "text-red-400"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-semibold", "leading-snug"], [1, "text-[10px]", "text-gray-400", "dark:text-gray-500", "mt-0.5", "leading-snug"], [1, "shrink-0", "text-[10px]", "font-bold", "text-gray-300", "dark:text-gray-600"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"]], template: function ResumeControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-profile-manager");
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "select", 5);
      \u0275\u0275listener("ngModelChange", function ResumeControlsComponent_Template_select_ngModelChange_5_listener($event) {
        return ctx.changeTier($event);
      });
      \u0275\u0275repeaterCreate(6, ResumeControlsComponent_For_7_Template, 2, 2, "option", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 7);
      \u0275\u0275element(9, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(10, "div", 9);
      \u0275\u0275elementStart(11, "button", 10);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_11_listener() {
        return ctx.undo();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 13);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_14_listener() {
        return ctx.redo();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 11);
      \u0275\u0275element(16, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(17, "div", 9);
      \u0275\u0275elementStart(18, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 16);
      \u0275\u0275element(20, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(22, "div", 18);
      \u0275\u0275elementStart(23, "button", 19);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_23_listener() {
        return ctx.showCompleteness = !ctx.showCompleteness;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 20);
      \u0275\u0275element(25, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "button", 21);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_27_listener() {
        return ctx.themeService.toggleTheme();
      });
      \u0275\u0275conditionalCreate(28, ResumeControlsComponent_Conditional_28_Template, 2, 0, ":svg:svg", 22);
      \u0275\u0275conditionalCreate(29, ResumeControlsComponent_Conditional_29_Template, 2, 0, ":svg:svg", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "div", 18);
      \u0275\u0275elementStart(31, "a", 24);
      \u0275\u0275text(32, " \u2728 Build with AI ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "div", 18);
      \u0275\u0275elementStart(34, "div", 25)(35, "button", 26);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_35_listener() {
        return ctx.showImportDialog = true;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(36, "svg", 11);
      \u0275\u0275element(37, "path", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "button", 28);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_38_listener() {
        return ctx.exportResume();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 11);
      \u0275\u0275element(40, "path", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(41, "div", 18);
      \u0275\u0275elementStart(42, "div", 30)(43, "button", 31);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_43_listener() {
        return ctx.showResumeManager = true;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 32);
      \u0275\u0275element(45, "path", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Drafts ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "span", 34);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "button", 35);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_49_listener() {
        return ctx.quickSave();
      });
      \u0275\u0275conditionalCreate(50, ResumeControlsComponent_Conditional_50_Template, 2, 0, ":svg:svg", 36);
      \u0275\u0275conditionalCreate(51, ResumeControlsComponent_Conditional_51_Template, 2, 0, ":svg:svg", 37);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 38);
      \u0275\u0275listener("click", function ResumeControlsComponent_Template_button_click_53_listener() {
        return ctx.openSaveDialog();
      });
      \u0275\u0275text(54, " Save As\u2026 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(55, ResumeControlsComponent_Conditional_55_Template, 15, 2, "div", 39);
      \u0275\u0275conditionalCreate(56, ResumeControlsComponent_Conditional_56_Template, 20, 3, "div", 40);
      \u0275\u0275conditionalCreate(57, ResumeControlsComponent_Conditional_57_Template, 2, 0, "div", 40);
      \u0275\u0275conditionalCreate(58, ResumeControlsComponent_Conditional_58_Template, 19, 9, "div", 41);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.currentTier());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tiers);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", !ctx.canUndo());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.canRedo());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.lastSavedLabel(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.completeness.result().percent >= 75 ? "text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100" : ctx.completeness.result().percent >= 50 ? "text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100" : "text-red-700 bg-red-50 border-red-200 hover:bg-red-100");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.completeness.result().percent, "% ");
      \u0275\u0275advance();
      \u0275\u0275property("title", "Theme: " + ctx.themeService.getTheme());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.themeService.resolvedTheme() === "dark" ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.themeService.resolvedTheme() === "light" ? 29 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.history().savedResumes.length);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.savedToast ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-gray-600 dark:text-neutral-400 bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-700");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.savedToast ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.savedToast ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.savedToast ? "Saved" : "Save", " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showSaveDialog ? 55 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showImportDialog ? 56 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showResumeManager ? 57 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCompleteness ? 58 : -1);
    }
  }, dependencies: [
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    ResumeManagerComponent,
    RouterLink,
    ProfileManagerComponent
  ], styles: ['\n.resume-controls[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n/*# sourceMappingURL=resume-controls.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeControlsComponent, [{
    type: Component,
    args: [{ selector: "app-resume-controls", standalone: true, imports: [
      FormsModule,
      ResumeManagerComponent,
      RouterLink,
      ProfileManagerComponent
    ], template: `<div
  class="resume-controls w-full flex items-center justify-between px-3 bg-transparent py-1.5"
>
  <!-- Left: Profile switcher -->
  <app-profile-manager></app-profile-manager>

  <!-- Right: Action groups -->
  <div class="flex items-center gap-1 right-controls shrink-0">
    <!-- Group 1: Experience Tier + Undo/Redo -->
    <div
      class="flex items-center gap-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl px-2.5 py-1.5"
    >
      <!-- Tier selector -->
      <div
        class="relative"
        title="Experience Level \u2014 affects AI suggestion tone"
      >
        <select
          [ngModel]="currentTier()"
          (ngModelChange)="changeTier($event)"
          class="appearance-none h-7 pl-2.5 pr-6 text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors"
        >
          @for (t of tiers; track t) {
          <option [value]="t.id">{{ t.label }}</option>
          }
        </select>
        <svg
          class="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div class="w-px h-4 bg-gray-200 dark:bg-neutral-700"></div>
      <!-- Undo -->
      <button
        class="p-1.5 text-gray-400 dark:text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-neutral-700 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        (click)="undo()"
        [disabled]="!canUndo()"
        title="Undo (Ctrl+Z)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      </button>
      <!-- Redo -->
      <button
        class="p-1.5 text-gray-400 dark:text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-neutral-700 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        (click)="redo()"
        [disabled]="!canRedo()"
        title="Redo (Ctrl+Y)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"
          />
        </svg>
      </button>
      <div class="w-px h-4 bg-gray-200 dark:bg-neutral-700"></div>
      <!-- Auto-save status -->
      <div
        class="flex items-center gap-1 text-[10px] font-medium text-gray-400 dark:text-neutral-500 select-none whitespace-nowrap px-1"
        title="Last auto-saved"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 shrink-0 text-emerald-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        {{ lastSavedLabel() }}
      </div>
    </div>

    <!-- Separator -->
    <div class="mx-1 w-px h-6 bg-gray-200 dark:bg-neutral-700"></div>

    <!-- Completeness Meter Pill -->
    <button
      class="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg border transition-all hover:shadow-sm"
      [class]="
            completeness.result().percent >= 75
              ? 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
              : completeness.result().percent >= 50
                ? 'text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100'
                : 'text-red-700 bg-red-50 border-red-200 hover:bg-red-100'
          "
      (click)="showCompleteness = !showCompleteness"
      title="Resume Completeness"
    >
      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      {{ completeness.result().percent }}%
    </button>

    <!-- Dark Mode Toggle -->
    <button
      class="p-2 text-gray-400 dark:text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-neutral-700 rounded-lg transition-colors"
      (click)="themeService.toggleTheme()"
      [title]="'Theme: ' + themeService.getTheme()"
    >
      <!-- Sun icon for dark mode (switch to light) -->
      @if (themeService.resolvedTheme() === 'dark') {
      <svg
        class="h-4 w-4 text-amber-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
      }
      <!-- Moon icon for light mode (switch to dark) -->
      @if (themeService.resolvedTheme() === 'light') {
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
      }
    </button>

    <div class="mx-1 w-px h-6 bg-gray-200 dark:bg-neutral-700"></div>

    <!-- Group 2: AI Button -->
    <a
      [routerLink]="['/ai']"
      class="flex items-center gap-1.5 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 py-2 px-4 rounded-xl transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-300 cursor-pointer"
    >
      \u2728 Build with AI
    </a>

    <!-- Separator -->
    <div class="mx-1 w-px h-6 bg-gray-200 dark:bg-neutral-700"></div>

    <!-- Group 3: Import / Export (icon only with tooltip) -->
    <div class="flex items-center gap-1">
      <button
        class="p-2 text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
        (click)="showImportDialog = true"
        title="Import JSON"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      </button>
      <button
        class="p-2 text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
        (click)="exportResume()"
        title="Export JSON"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </button>
    </div>

    <!-- Separator -->
    <div class="mx-1 w-px h-6 bg-gray-200 dark:bg-neutral-700"></div>

    <!-- Group 4: Saved Drafts + Save -->
    <div class="flex items-center gap-2">
      <button
        class="flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-neutral-100 hover:bg-gray-100 dark:hover:bg-neutral-700 py-1.5 px-3 rounded-lg transition-colors"
        (click)="showResumeManager = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-400 dark:text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        Drafts
        <span
          class="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full px-1.5 py-px text-[10px] font-bold"
          >{{ history().savedResumes.length }}</span
        >
      </button>
      <!-- Quick Save (Ctrl+S) -->
      <button
        (click)="quickSave()"
        title="Save (Ctrl+S)"
        class="flex items-center gap-1.5 text-sm font-semibold py-1.5 px-3 rounded-lg border transition-all"
        [class]="
              savedToast
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : 'text-gray-600 dark:text-neutral-400 bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-700'
            "
      >
        @if (!savedToast) {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-400 dark:text-neutral-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
          />
        </svg>
        } @if (savedToast) {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-emerald-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        } {{ savedToast ? 'Saved' : 'Save' }}
      </button>
      <button
        class="flex items-center gap-1.5 text-sm font-bold text-white bg-slate-800 dark:bg-indigo-700 hover:bg-slate-900 dark:hover:bg-indigo-800 shadow-sm py-1.5 px-3.5 rounded-lg transition-all"
        (click)="openSaveDialog()"
      >
        Save As\u2026
      </button>
    </div>
  </div>

  <!-- Save Dialog -->
  @if (showSaveDialog) {
  <div
    class="fixed inset-0 bg-gray-900/60 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
    (click)="showSaveDialog = false"
  >
    <div
      class="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-700 p-6 rounded-2xl shadow-xl w-[400px]"
      (click)="$event.stopPropagation()"
    >
      <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-50 mb-1">
        Save As New Draft
      </h3>
      <p class="text-sm text-gray-400 dark:text-neutral-500 mb-5">
        Give this version a name to save it separately.
      </p>
      <div class="mb-5">
        <label
          class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
          >Draft Name</label
        >
        <input
          type="text"
          [(ngModel)]="resumeName"
          placeholder="e.g. Senior Eng - TechCorp"
          (keyup.enter)="saveResume()"
          (keyup.escape)="showSaveDialog = false"
          autofocus
          class="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div class="flex justify-end gap-3 mt-6">
        <button
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-neutral-100 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 focus:outline-none"
          (click)="showSaveDialog = false"
        >
          Cancel
        </button>
        <button
          class="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!resumeName.trim()"
          (click)="saveResume()"
        >
          Save Draft
        </button>
      </div>
    </div>
  </div>
  }

  <!-- Import Dialog -->
  @if (showImportDialog) {
  <div
    class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
    (click)="showImportDialog = false"
  >
    <div
      class="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-6 rounded-2xl shadow-xl w-[500px]"
      (click)="$event.stopPropagation()"
    >
      <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-50 mb-1">
        Import JSON
      </h3>
      <p class="text-sm text-gray-400 dark:text-neutral-500 mb-4">
        This will create a new saved draft from the pasted data.
      </p>
      <div class="mb-5">
        <label
          class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
          >Paste valid JSON payload</label
        >
        <!-- Safelist for dynamic highlight classes -->
        <div
          class="hidden text-sky-500 text-sky-400 text-green-600 text-green-400 text-amber-500 text-amber-400 text-fuchsia-500 text-fuchsia-400 font-semibold font-bold"
        ></div>

        <div
          class="relative w-full h-[320px] bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500"
        >
          <textarea
            [(ngModel)]="importJSON"
            spellcheck="false"
            (scroll)="syncJsonScroll($event)"
            (keydown.escape)="showImportDialog = false"
            class="absolute inset-0 w-full h-full px-4 py-3 font-mono text-sm text-transparent bg-transparent caret-gray-900 dark:caret-white resize-none focus:outline-none z-10 leading-relaxed scrollbar-thin"
            style="
              white-space: pre-wrap;
              word-wrap: break-word;
              overflow-wrap: break-word;
              margin: 0;
              border: none;
              color: transparent !important;
              background-color: transparent !important;
            "
            placeholder='{"name": "...", "skills": [...]}'
          ></textarea>
          <pre
            #jsonHighlightLayer
            class="absolute inset-0 w-full h-full px-4 py-3 font-mono text-sm text-gray-900 dark:text-gray-200 m-0 z-0 pointer-events-none leading-relaxed overflow-hidden bg-transparent"
            style="
              white-space: pre-wrap;
              word-wrap: break-word;
              overflow-wrap: break-word;
              margin: 0;
              border: none;
              padding-right: 20px;
            "
          ><code [innerHTML]="highlightedJson()"></code></pre>
        </div>
      </div>
      <div class="flex justify-end gap-3 mt-6">
        <button
          class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-neutral-100 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 focus:outline-none"
          (click)="showImportDialog = false"
        >
          Cancel
        </button>
        <button
          class="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!importJSON"
          (click)="importResumeFromJSON()"
        >
          Import
        </button>
      </div>
    </div>
  </div>
  }

  <!-- Resume Manager -->
  @if (showResumeManager) {
  <div
    class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
    (click)="showResumeManager = false"
  >
    <app-resume-manager
      (close)="showResumeManager = false"
    ></app-resume-manager>
  </div>
  }

  <!-- Completeness Panel -->
  @if (showCompleteness) {
  <div class="fixed inset-0 z-[9998]" (click)="showCompleteness = false">
    <div
      class="absolute top-14 right-4 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
      (click)="$event.stopPropagation()"
    >
      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-bold text-gray-800 dark:text-gray-100"
            >Resume Completeness</span
          >
          <button
            (click)="showCompleteness = false"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-0.5 rounded"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Score bar -->
        <div class="flex items-center gap-3">
          <div
            class="flex-1 h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"
          >
            <div
              class="h-full rounded-full transition-all duration-700"
              [style.width]="completeness.result().percent + '%'"
              [class]="
                      completeness.result().percent >= 75
                        ? 'bg-emerald-500'
                        : completeness.result().percent >= 50
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                    "
            ></div>
          </div>
          <span
            class="text-lg font-black shrink-0"
            [class]="
                    completeness.result().percent >= 75
                      ? 'text-emerald-600'
                      : completeness.result().percent >= 50
                        ? 'text-amber-600'
                        : 'text-red-600'
                  "
          >
            {{ completeness.result().percent }}%
          </span>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1.5">
          {{ completeness.result().score }} / {{ completeness.result().maxScore
          }} points
        </p>
      </div>
      <!-- Items -->
      <div class="max-h-80 overflow-y-auto p-3 space-y-1.5">
        @for (item of completeness.result().items; track item) {
        <div
          class="flex items-start gap-2.5 p-2.5 rounded-xl transition-colors"
          [class]="
                    item.passed
                      ? 'bg-emerald-50/50 dark:bg-emerald-900/10'
                      : 'bg-red-50/50 dark:bg-red-900/10 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-default'
                  "
        >
          <span class="shrink-0 mt-0.5">
            @if (item.passed) {
            <svg
              class="w-4 h-4 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            } @if (!item.passed) {
            <svg
              class="w-4 h-4 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
            }
          </span>
          <div class="min-w-0 flex-1">
            <p
              class="text-xs font-semibold leading-snug"
              [class]="
                        item.passed
                          ? 'text-gray-600 dark:text-gray-300'
                          : 'text-gray-700 dark:text-gray-200'
                      "
            >
              {{ item.label }}
            </p>
            @if (!item.passed) {
            <p
              class="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 leading-snug"
            >
              {{ item.tip }}
            </p>
            }
          </div>
          <span
            class="shrink-0 text-[10px] font-bold text-gray-300 dark:text-gray-600"
            >+{{ item.points }}</span
          >
        </div>
        }
      </div>
    </div>
  </div>
  }
</div>
`, styles: ['/* angular:styles/component:scss;2413d1010389f8cac31f5da4992549cadcb9e36255d0b63969e92016737b8618;/home/abugh/Projects/Resume_Builder/src/app/resume-controls/resume-controls.component.ts */\n.resume-controls {\n  font-family: "Inter", sans-serif;\n}\n/*# sourceMappingURL=resume-controls.component.css.map */\n'] }]
  }], null, { jsonHighlightLayer: [{
    type: ViewChild,
    args: ["jsonHighlightLayer"]
  }], handleKeydown: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumeControlsComponent, { className: "ResumeControlsComponent", filePath: "src/app/resume-controls/resume-controls.component.ts", lineNumber: 41 });
})();

// src/app/manual-builder/manual-builder.component.ts
var ManualBuilderComponent = class _ManualBuilderComponent {
  window_width;
  isDragging = false;
  minWidth = 320;
  maxWidth = 0;
  // set on first drag
  startX = 0;
  startWidth = 0;
  constructor() {
    const savedWidth = localStorage.getItem("resume-builder-panel-width");
    this.window_width = savedWidth ? parseInt(savedWidth) : window.innerWidth * 0.48;
  }
  onDragStart(e) {
    e.preventDefault();
    this.isDragging = true;
    this.startX = e.clientX;
    this.startWidth = this.window_width;
    this.maxWidth = window.innerWidth * 0.72;
    e.target.setPointerCapture(e.pointerId);
  }
  onDragMove(e) {
    if (!this.isDragging)
      return;
    const delta = e.clientX - this.startX;
    const next = Math.min(this.maxWidth, Math.max(this.minWidth, this.startWidth + delta));
    this.window_width = next;
  }
  onDragEnd(_e) {
    if (!this.isDragging)
      return;
    this.isDragging = false;
    localStorage.setItem("resume-builder-panel-width", this.window_width.toString());
  }
  static \u0275fac = function ManualBuilderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManualBuilderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManualBuilderComponent, selectors: [["app-manual-builder"]], hostBindings: function ManualBuilderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("pointermove", function ManualBuilderComponent_pointermove_HostBindingHandler($event) {
        return ctx.onDragMove($event);
      }, \u0275\u0275resolveDocument)("pointerup", function ManualBuilderComponent_pointerup_HostBindingHandler($event) {
        return ctx.onDragEnd($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 12, vars: 7, consts: [[1, "h-screen", "flex", "flex-col", "overflow-hidden", "font-sans", "transition-colors", "duration-200", 2, "background-color", "var(--surface-page)"], [1, "flex", "justify-between", "items-center", "border-b", "shadow-sm", "shrink-0", "transition-colors", "duration-200", 2, "background-color", "var(--surface-toolbar)", "border-color", "var(--border-subtle)"], [1, "flex-grow"], [1, "flex-1", "flex", "overflow-hidden"], [1, "h-full", "relative", "shrink-0", "border-r", "transition-colors", "duration-200", 2, "background-color", "var(--surface-panel)", "border-color", "var(--border-subtle)"], [1, "h-full", "overflow-y-auto", "w-full", "custom-scrollbar"], [1, "w-full", "block"], [1, "resize-handle", "absolute", "right-0", "top-0", "bottom-0", "w-3", "z-20", "flex", "items-center", "justify-center", "cursor-col-resize", "group", 3, "pointerdown"], [1, "w-1", "h-10", "rounded-full", "transition-all", "duration-150", 3, "ngClass"], [1, "flex-1", "overflow-hidden", "relative", "transition-colors", "duration-200", 2, "background-color", "var(--surface-preview)"], [1, "h-full", "w-full", "overflow-y-auto", "custom-scrollbar"]], template: function ManualBuilderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-resume-controls", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "app-editor", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275listener("pointerdown", function ManualBuilderComponent_Template_div_pointerdown_7_listener($event) {
        return ctx.onDragStart($event);
      });
      \u0275\u0275element(8, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10);
      \u0275\u0275element(11, "app-edit-preview");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("select-none", ctx.isDragging)("cursor-col-resize", ctx.isDragging);
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("width", ctx.window_width, "px");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.isDragging ? "bg-indigo-500 w-1.5 h-14 shadow-lg" : "bg-gray-300 dark:bg-neutral-600 group-hover:bg-indigo-400 group-hover:h-14");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    EditorComponent,
    EditPreviewComponent,
    ResumeControlsComponent
  ], styles: ["\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.rectangle[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 300px;\n  height: calc(100vh - 64px);\n  color: #121621;\n}\nmwlResizable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.resize-handle-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #121621;\n  height: 100%;\n  right: 1px;\n  cursor: col-resize;\n  width: 2px;\n}\n.preview[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n@media print {\n  .print-fullscreen[_ngcontent-%COMP%] {\n    position: static !important;\n    width: 100% !important;\n    height: auto !important;\n    z-index: 9999;\n    background-color: white;\n    padding: 0;\n    margin: 0;\n    overflow: visible !important;\n  }\n  .rectangle[_ngcontent-%COMP%], \n   .resize-handle-right[_ngcontent-%COMP%], \n   .print\\:hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .preview[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    height: auto !important;\n    overflow: visible !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  app-edit-preview[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n}\n/*# sourceMappingURL=manual-builder.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManualBuilderComponent, [{
    type: Component,
    args: [{ selector: "app-manual-builder", standalone: true, imports: [
      CommonModule,
      EditorComponent,
      EditPreviewComponent,
      ResumeControlsComponent
    ], template: `<div
  class="h-screen flex flex-col overflow-hidden font-sans transition-colors duration-200"
  style="background-color: var(--surface-page)"
  [class.select-none]="isDragging"
  [class.cursor-col-resize]="isDragging"
>
  <!-- Toolbar row -->
  <div
    class="flex justify-between items-center border-b shadow-sm shrink-0 transition-colors duration-200"
    style="
      background-color: var(--surface-toolbar);
      border-color: var(--border-subtle);
    "
  >
    <app-resume-controls class="flex-grow"></app-resume-controls>
  </div>

  <div class="flex-1 flex overflow-hidden">
    <!-- Left Editor Panel -->
    <div
      class="h-full relative shrink-0 border-r transition-colors duration-200"
      style="
        background-color: var(--surface-panel);
        border-color: var(--border-subtle);
      "
      [style.width.px]="window_width"
    >
      <div class="h-full overflow-y-auto w-full custom-scrollbar">
        <app-editor class="w-full block"></app-editor>
      </div>

      <!-- Live Drag Handle -->
      <div
        class="resize-handle absolute right-0 top-0 bottom-0 w-3 z-20 flex items-center justify-center cursor-col-resize group"
        (pointerdown)="onDragStart($event)"
      >
        <!-- Visual grip pill -->
        <div
          class="w-1 h-10 rounded-full transition-all duration-150"
          [ngClass]="
            isDragging
              ? 'bg-indigo-500 w-1.5 h-14 shadow-lg'
              : 'bg-gray-300 dark:bg-neutral-600 group-hover:bg-indigo-400 group-hover:h-14'
          "
        ></div>
      </div>
    </div>

    <!-- Right Preview Panel -->
    <div
      class="flex-1 overflow-hidden relative transition-colors duration-200"
      style="background-color: var(--surface-preview)"
    >
      <div class="h-full w-full overflow-y-auto custom-scrollbar">
        <app-edit-preview></app-edit-preview>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/manual-builder/manual-builder.component.scss */\n.main-container {\n  display: flex;\n  flex-direction: row;\n}\n.rectangle {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 300px;\n  height: calc(100vh - 64px);\n  color: #121621;\n}\nmwlResizable {\n  box-sizing: border-box;\n}\n.resize-handle-right {\n  position: absolute;\n  background-color: #121621;\n  height: 100%;\n  right: 1px;\n  cursor: col-resize;\n  width: 2px;\n}\n.preview {\n  flex-grow: 1;\n}\n@media print {\n  .print-fullscreen {\n    position: static !important;\n    width: 100% !important;\n    height: auto !important;\n    z-index: 9999;\n    background-color: white;\n    padding: 0;\n    margin: 0;\n    overflow: visible !important;\n  }\n  .rectangle,\n  .resize-handle-right,\n  .print\\:hidden {\n    display: none !important;\n  }\n  .main-container {\n    display: block !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .preview {\n    display: block !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    height: auto !important;\n    overflow: visible !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  app-edit-preview {\n    display: block !important;\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n}\n/*# sourceMappingURL=manual-builder.component.css.map */\n"] }]
  }], () => [], { onDragMove: [{
    type: HostListener,
    args: ["document:pointermove", ["$event"]]
  }], onDragEnd: [{
    type: HostListener,
    args: ["document:pointerup", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManualBuilderComponent, { className: "ManualBuilderComponent", filePath: "src/app/manual-builder/manual-builder.component.ts", lineNumber: 19 });
})();
export {
  ManualBuilderComponent
};
//# sourceMappingURL=chunk-MYA6XT6X.js.map
