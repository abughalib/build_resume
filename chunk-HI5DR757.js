import {
  AiService,
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  Input,
  LlmSettingsService,
  NgClass,
  Output,
  Router,
  ViewChild,
  __async,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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

// src/app/ai-builder/ats-panel/ats-panel.component.ts
function AtsPanelComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AtsPanelComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 7);
    \u0275\u0275elementEnd();
  }
}
function AtsPanelComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 6);
    \u0275\u0275element(1, "circle", 8)(2, "path", 9);
    \u0275\u0275elementEnd();
  }
}
function AtsPanelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 1);
    \u0275\u0275text(1, "Job Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "textarea", 2);
    \u0275\u0275twoWayListener("ngModelChange", function AtsPanelComponent_Conditional_1_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobDescription, $event) || (ctx_r1.jobDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AtsPanelComponent_Conditional_1_Conditional_3_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function AtsPanelComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.analyze());
    });
    \u0275\u0275conditionalCreate(5, AtsPanelComponent_Conditional_1_Conditional_5_Template, 2, 0, ":svg:svg", 5);
    \u0275\u0275conditionalCreate(6, AtsPanelComponent_Conditional_1_Conditional_6_Template, 3, 0, ":svg:svg", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobDescription);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isScoring || !ctx_r1.jobDescription.trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isScoring ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isScoring ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isScoring ? "Analyzing\u2026" : "Run ATS Analysis", " ");
  }
}
function AtsPanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function AtsPanelComponent_Conditional_3_For_25_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", k_r4, " ");
  }
}
function AtsPanelComponent_Conditional_3_For_25_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ~ ", k_r5, " ");
  }
}
function AtsPanelComponent_Conditional_3_For_25_Conditional_8_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2717 ", k_r6, " ");
  }
}
function AtsPanelComponent_Conditional_3_For_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, AtsPanelComponent_Conditional_3_For_25_Conditional_8_For_2_Template, 2, 1, "span", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(3, AtsPanelComponent_Conditional_3_For_25_Conditional_8_For_4_Template, 2, 1, "span", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(5, AtsPanelComponent_Conditional_3_For_25_Conditional_8_For_6_Template, 2, 1, "span", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(entry_r7.value.matched);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(entry_r7.value.partial);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(entry_r7.value.missing);
  }
}
function AtsPanelComponent_Conditional_3_For_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r7.value.notes, " ");
  }
}
function AtsPanelComponent_Conditional_3_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275element(7, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AtsPanelComponent_Conditional_3_For_25_Conditional_8_Template, 7, 0, "div", 33);
    \u0275\u0275conditionalCreate(9, AtsPanelComponent_Conditional_3_For_25_Conditional_9_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.categoryLabel(entry_r7.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r7.value.score, " / ", ctx_r1.categoryMax(entry_r7.key));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", entry_r7.value.score / ctx_r1.categoryMax(entry_r7.key) * 100 + "%")("background-color", entry_r7.value.score / ctx_r1.categoryMax(entry_r7.key) >= 0.75 ? "#10b981" : entry_r7.value.score / ctx_r1.categoryMax(entry_r7.key) >= 0.5 ? "#f59e0b" : "#ef4444");
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r7.key === "hardSkills" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r7.key !== "hardSkills" && entry_r7.value.notes ? 9 : -1);
  }
}
function AtsPanelComponent_Conditional_3_Conditional_26_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 39)(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rec_r8 = ctx.$implicit;
    const \u0275$index_115_r9 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_115_r9 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r8);
  }
}
function AtsPanelComponent_Conditional_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3", 25);
    \u0275\u0275text(2, " Top Actions to Improve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ol", 38);
    \u0275\u0275repeaterCreate(4, AtsPanelComponent_Conditional_3_Conditional_26_For_5_Template, 5, 2, "li", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.report.topRecommendations);
  }
}
function AtsPanelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 10)(2, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 12);
    \u0275\u0275element(4, "circle", 13)(5, "circle", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 15)(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10, "/ 100");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 18)(12, "div", 19)(13, "span", 20);
    \u0275\u0275text(14, "ATS Match Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 22);
    \u0275\u0275text(18, " Score reflects keyword coverage, seniority alignment, tone strength, and structural completeness. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function AtsPanelComponent_Conditional_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aiService.clearAtsReport());
    });
    \u0275\u0275text(20, " \u2190 Re-analyze with new JD ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 24)(22, "h3", 25);
    \u0275\u0275text(23, " Score Breakdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, AtsPanelComponent_Conditional_3_For_25_Template, 10, 9, "div", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, AtsPanelComponent_Conditional_3_Conditional_26_Template, 6, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke", ctx_r1.scoreColor)("stroke-dasharray", ctx_r1.scoreRingDash);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.report.overallScore);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r1.likelihoodClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.report.passLikelihood, " Pass Likelihood ");
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.breakdownEntries());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.report.topRecommendations ? 26 : -1);
  }
}
var AtsPanelComponent = class _AtsPanelComponent {
  aiService = inject(AiService);
  dataService = inject(DataService);
  llmSettings = inject(LlmSettingsService);
  jobDescription = "";
  error = "";
  get report() {
    return this.aiService.atsReport();
  }
  get isScoring() {
    return this.aiService.isScoring();
  }
  get scoreColor() {
    const s = this.report?.overallScore ?? 0;
    if (s >= 75)
      return "#10b981";
    if (s >= 50)
      return "#f59e0b";
    return "#ef4444";
  }
  get scoreRingDash() {
    const s = this.report?.overallScore ?? 0;
    const circumference = 2 * Math.PI * 40;
    return `${s / 100 * circumference} ${circumference}`;
  }
  get likelihoodClass() {
    const l = this.report?.passLikelihood;
    if (l === "High")
      return "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400";
    if (l === "Low")
      return "text-red-600 bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400";
    return "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400";
  }
  categoryMax(key) {
    return key === "hardSkills" ? 40 : key === "experience" ? 30 : 15;
  }
  categoryLabel(key) {
    const labels = {
      hardSkills: "Hard Skills",
      experience: "Experience Alignment",
      tone: "Tone & Seniority",
      structure: "Structure"
    };
    return labels[key] ?? key;
  }
  breakdownEntries() {
    if (!this.report)
      return [];
    return Object.entries(this.report.breakdown).map(([key, value]) => ({
      key,
      value
    }));
  }
  analyze() {
    return __async(this, null, function* () {
      const config = this.llmSettings.getActiveConfig();
      if (!config.apiKey && config.provider !== "custom" && config.provider !== "lmstudio") {
        this.error = "API key not configured. Go to AI Settings to configure your provider.";
        return;
      }
      if (!this.jobDescription.trim()) {
        this.error = "Please paste a job description to analyze against.";
        return;
      }
      this.error = "";
      try {
        const tier = this.dataService.getCurrentTier();
        const tierMeta = EXPERIENCE_TIERS.find((t) => t.id === tier);
        const resumeContext = this.dataService.buildAIContext();
        yield this.aiService.analyzeAtsMatch(this.jobDescription, resumeContext, tier, tierMeta?.label ?? tier, tierMeta?.sublabel ?? "");
      } catch (err) {
        this.error = err?.message ?? "Analysis failed. Please try again.";
      }
    });
  }
  static \u0275fac = function AtsPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AtsPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AtsPanelComponent, selectors: [["app-ats-panel"]], decls: 4, vars: 3, consts: [[1, "space-y-6"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-200", "mb-2"], ["rows", "8", "placeholder", "Paste the full job description here to get a detailed ATS match score\u2026", 1, "w-full", "px-4", "py-3", "text-sm", "text-gray-700", "dark:text-gray-200", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-600", "rounded-xl", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", "placeholder:text-gray-300", "dark:placeholder:text-gray-600", "leading-relaxed", "transition-all", 3, "ngModelChange", "ngModel"], [1, "mt-2", "text-sm", "text-red-500", "dark:text-red-400"], [1, "mt-4", "w-full", "flex", "items-center", "justify-center", "gap-2", "py-3", "px-6", "text-sm", "font-bold", "text-white", "bg-gradient-to-r", "from-indigo-600", "to-violet-600", "hover:from-indigo-700", "hover:to-violet-700", "rounded-xl", "shadow-sm", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "animate-spin"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], [1, "flex", "items-center", "gap-6", "p-6", "bg-gray-50", "dark:bg-gray-800/50", "rounded-2xl", "border", "border-gray-100", "dark:border-gray-700"], [1, "shrink-0", "relative"], ["width", "96", "height", "96", "viewBox", "0 0 96 96"], ["cx", "48", "cy", "48", "r", "40", "fill", "none", "stroke", "#e5e7eb", "stroke-width", "8"], ["cx", "48", "cy", "48", "r", "40", "fill", "none", "stroke-width", "8", "stroke-linecap", "round", "stroke-dashoffset", "0", "transform", "rotate(-90 48 48)", 2, "transition", "stroke-dasharray 1s ease"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "text-2xl", "font-black", "text-gray-800", "dark:text-gray-100"], [1, "text-[10px]", "font-bold", "text-gray-400", "dark:text-gray-500", "uppercase", "tracking-wide"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-gray-100"], [1, "text-xs", "font-bold", "px-2.5", "py-1", "rounded-full", "border"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "leading-relaxed"], [1, "mt-3", "text-xs", "text-indigo-600", "dark:text-indigo-400", "hover:underline", "font-medium", 3, "click"], [1, "space-y-4"], [1, "text-sm", "font-bold", "text-gray-700", "dark:text-gray-200", "uppercase", "tracking-wide"], [1, "space-y-1.5"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-gray-600", "dark:text-gray-300"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-gray-100"], [1, "h-2", "bg-gray-100", "dark:bg-gray-700", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-700"], [1, "flex", "flex-wrap", "gap-1.5", "mt-2"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "leading-relaxed", "mt-1"], [1, "text-[10px]", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-emerald-100", "text-emerald-700", "dark:bg-emerald-900/30", "dark:text-emerald-400", "border", "border-emerald-200", "dark:border-emerald-800"], [1, "text-[10px]", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-amber-100", "text-amber-700", "dark:bg-amber-900/30", "dark:text-amber-400", "border", "border-amber-200", "dark:border-amber-800"], [1, "text-[10px]", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-red-100", "text-red-700", "dark:bg-red-900/30", "dark:text-red-400", "border", "border-red-200", "dark:border-red-800"], [1, "space-y-2"], [1, "flex", "gap-3", "p-3", "bg-indigo-50", "dark:bg-indigo-900/20", "rounded-xl", "border", "border-indigo-100", "dark:border-indigo-800"], [1, "shrink-0", "w-5", "h-5", "rounded-full", "bg-indigo-600", "text-white", "text-[10px]", "font-black", "flex", "items-center", "justify-center"], [1, "text-sm", "text-indigo-800", "dark:text-indigo-300", "leading-relaxed"]], template: function AtsPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, AtsPanelComponent_Conditional_1_Template, 8, 6);
      \u0275\u0275conditionalCreate(2, AtsPanelComponent_Conditional_2_Template, 1, 0, "div");
      \u0275\u0275conditionalCreate(3, AtsPanelComponent_Conditional_3_Template, 27, 7, "div", 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.report || ctx.isScoring ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.report || ctx.isScoring ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.report && !ctx.isScoring ? 3 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AtsPanelComponent, [{
    type: Component,
    args: [{ selector: "app-ats-panel", standalone: true, imports: [FormsModule], template: `<div class="space-y-6">
  <!-- JD Input (shared with suggestion tab via aiService.activeJobDescription) -->
  @if (!report || isScoring) {
    <label
      class="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
      >Job Description</label
    >
    <textarea
      [(ngModel)]="jobDescription"
      rows="8"
      placeholder="Paste the full job description here to get a detailed ATS match score\u2026"
      class="w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-300 dark:placeholder:text-gray-600 leading-relaxed transition-all"
    ></textarea>
    @if (error) {
      <p class="mt-2 text-sm text-red-500 dark:text-red-400">
        {{ error }}
      </p>
    }
    <button
      (click)="analyze()"
      [disabled]="isScoring || !jobDescription.trim()"
      class="mt-4 w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-xl shadow-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
    >
      @if (!isScoring) {
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      }
      @if (isScoring) {
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
      {{ isScoring ? "Analyzing\u2026" : "Run ATS Analysis" }}
    </button>
  }
  @if (!report || isScoring) {
    <div></div>
  }

  <!-- Results -->
  @if (report && !isScoring) {
    <div class="space-y-6">
      <!-- Header: Score ring + Pass likelihood -->
      <div
        class="flex items-center gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700"
      >
        <!-- SVG Ring -->
        <div class="shrink-0 relative">
          <svg width="96" height="96" viewBox="0 0 96 96">
            <circle
              cx="48"
              cy="48"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              stroke-width="8"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              fill="none"
              [attr.stroke]="scoreColor"
              stroke-width="8"
              stroke-linecap="round"
              [attr.stroke-dasharray]="scoreRingDash"
              stroke-dashoffset="0"
              transform="rotate(-90 48 48)"
              style="transition: stroke-dasharray 1s ease"
            />
          </svg>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span
              class="text-2xl font-black text-gray-800 dark:text-gray-100"
              >{{ report.overallScore }}</span
            >
            <span
              class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide"
              >/ 100</span
            >
          </div>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-lg font-bold text-gray-800 dark:text-gray-100"
              >ATS Match Score</span
            >
            <span
              class="text-xs font-bold px-2.5 py-1 rounded-full border"
              [class]="likelihoodClass"
            >
              {{ report.passLikelihood }} Pass Likelihood
            </span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Score reflects keyword coverage, seniority alignment, tone strength,
            and structural completeness.
          </p>
          <button
            (click)="aiService.clearAtsReport()"
            class="mt-3 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            \u2190 Re-analyze with new JD
          </button>
        </div>
      </div>
      <!-- Breakdown bars -->
      <div class="space-y-4">
        <h3
          class="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide"
        >
          Score Breakdown
        </h3>
        @for (entry of breakdownEntries(); track entry) {
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <span
                class="text-sm font-semibold text-gray-600 dark:text-gray-300"
                >{{ categoryLabel(entry.key) }}</span
              >
              <span class="text-sm font-bold text-gray-800 dark:text-gray-100"
                >{{ entry.value.score }} / {{ categoryMax(entry.key) }}</span
              >
            </div>
            <div
              class="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                class="h-full rounded-full transition-all duration-700"
                [style.width]="
                  (entry.value.score / categoryMax(entry.key)) * 100 + '%'
                "
                [style.background-color]="
                  entry.value.score / categoryMax(entry.key) >= 0.75
                    ? '#10b981'
                    : entry.value.score / categoryMax(entry.key) >= 0.5
                      ? '#f59e0b'
                      : '#ef4444'
                "
              ></div>
            </div>
            <!-- Keywords for hardSkills -->
            @if (entry.key === "hardSkills") {
              <div class="flex flex-wrap gap-1.5 mt-2">
                @for (k of entry.value.matched; track k) {
                  <span
                    class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                  >
                    \u2713 {{ k }}
                  </span>
                }
                @for (k of entry.value.partial; track k) {
                  <span
                    class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                  >
                    ~ {{ k }}
                  </span>
                }
                @for (k of entry.value.missing; track k) {
                  <span
                    class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800"
                  >
                    \u2717 {{ k }}
                  </span>
                }
              </div>
            }
            <!-- Notes for other categories -->
            @if (entry.key !== "hardSkills" && entry.value.notes) {
              <p
                class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1"
              >
                {{ entry.value.notes }}
              </p>
            }
          </div>
        }
      </div>
      <!-- Top Recommendations -->
      @if (report.topRecommendations) {
        <div class="space-y-3">
          <h3
            class="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide"
          >
            Top Actions to Improve
          </h3>
          <ol class="space-y-2">
            @for (rec of report.topRecommendations; track rec; let i = $index) {
              <li
                class="flex gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800"
              >
                <span
                  class="shrink-0 w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-black flex items-center justify-center"
                  >{{ i + 1 }}</span
                >
                <span
                  class="text-sm text-indigo-800 dark:text-indigo-300 leading-relaxed"
                  >{{ rec }}</span
                >
              </li>
            }
          </ol>
        </div>
      }
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AtsPanelComponent, { className: "AtsPanelComponent", filePath: "src/app/ai-builder/ats-panel/ats-panel.component.ts", lineNumber: 16 });
})();

// src/app/ai-builder/cover-letter-panel/cover-letter-panel.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CoverLetterPanelComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function CoverLetterPanelComponent_For_6_Template_button_click_0_listener() {
      const tone_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedTone = tone_r2.id);
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tone_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.selectedTone === tone_r2.id ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-500" : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tone_r2.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tone_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tone_r2.desc);
  }
}
function CoverLetterPanelComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Paste a job description in the Optimizer tab first for a personalized letter. ");
    \u0275\u0275elementEnd();
  }
}
function CoverLetterPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error, " ");
  }
}
function CoverLetterPanelComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function CoverLetterPanelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "circle", 17)(2, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function CoverLetterPanelComponent_Conditional_13_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function CoverLetterPanelComponent_Conditional_13_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "circle", 17)(2, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function CoverLetterPanelComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 19)(2, "div", 20)(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 22);
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7, "Click the text to edit directly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "button", 24);
    \u0275\u0275listener("click", function CoverLetterPanelComponent_Conditional_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 25);
    \u0275\u0275element(11, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 27);
    \u0275\u0275listener("click", function CoverLetterPanelComponent_Conditional_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadAsTxt());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 25);
    \u0275\u0275element(15, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Download .txt ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 29);
    \u0275\u0275listener("click", function CoverLetterPanelComponent_Conditional_13_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aiService.clearCoverLetter());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 25);
    \u0275\u0275element(19, "path", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "textarea", 31);
    \u0275\u0275listener("input", function CoverLetterPanelComponent_Conditional_13_Template_textarea_input_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aiService.setCoverLetter($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 32)(22, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CoverLetterPanelComponent_Conditional_13_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.refineInput, $event) || (ctx_r2.refineInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function CoverLetterPanelComponent_Conditional_13_Template_input_keydown_enter_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.refine());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 34);
    \u0275\u0275listener("click", function CoverLetterPanelComponent_Conditional_13_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.refine());
    });
    \u0275\u0275conditionalCreate(24, CoverLetterPanelComponent_Conditional_13_Conditional_24_Template, 2, 0, ":svg:svg", 7);
    \u0275\u0275conditionalCreate(25, CoverLetterPanelComponent_Conditional_13_Conditional_25_Template, 3, 0, ":svg:svg", 8);
    \u0275\u0275text(26, " Refine ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.wordCount, " words");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.copied ? "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800" : "text-gray-600 bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r2.letter);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.refineInput);
    \u0275\u0275property("disabled", ctx_r2.isWriting);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isWriting || !ctx_r2.refineInput.trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isWriting ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isWriting ? 25 : -1);
  }
}
var CoverLetterPanelComponent = class _CoverLetterPanelComponent {
  /** Job description shared from the parent (same field used in suggestion tab) */
  jobDescription = "";
  aiService = inject(AiService);
  dataService = inject(DataService);
  llmSettings = inject(LlmSettingsService);
  selectedTone = "conversational";
  refineInput = "";
  error = "";
  copied = false;
  tones = [
    {
      id: "formal",
      label: "Formal",
      emoji: "\u{1F3DB}\uFE0F",
      desc: "Finance, Law, Gov."
    },
    {
      id: "conversational",
      label: "Conversational",
      emoji: "\u{1F4AC}",
      desc: "Tech, Product, Design"
    },
    {
      id: "startup",
      label: "Startup",
      emoji: "\u{1F680}",
      desc: "Early-stage, Growth"
    }
  ];
  get letter() {
    return this.aiService.coverLetter();
  }
  get isWriting() {
    return this.aiService.isWritingLetter();
  }
  get wordCount() {
    const t = this.letter.trim();
    return t ? t.split(/\s+/).length : 0;
  }
  generate() {
    return __async(this, null, function* () {
      const config = this.llmSettings.getActiveConfig();
      if (!config.apiKey && config.provider !== "custom" && config.provider !== "lmstudio") {
        this.error = "API key not configured. Go to AI Settings to configure your provider.";
        return;
      }
      if (!this.jobDescription.trim()) {
        this.error = 'Please paste a job description in the "Optimize" tab first.';
        return;
      }
      this.error = "";
      try {
        const tier = this.dataService.getCurrentTier();
        const tierMeta = EXPERIENCE_TIERS.find((t) => t.id === tier);
        const resumeContext = this.dataService.buildAIContext();
        yield this.aiService.generateCoverLetter(this.jobDescription, resumeContext, tier, tierMeta?.label ?? tier, this.selectedTone);
      } catch (err) {
        this.error = err?.message ?? "Failed to generate cover letter. Please try again.";
      }
    });
  }
  refine() {
    return __async(this, null, function* () {
      if (!this.refineInput.trim())
        return;
      this.error = "";
      const instruction = this.refineInput;
      this.refineInput = "";
      try {
        yield this.aiService.refineCoverLetter(instruction);
      } catch (err) {
        this.error = err?.message ?? "Failed to refine letter.";
        this.refineInput = instruction;
      }
    });
  }
  copyToClipboard() {
    return __async(this, null, function* () {
      yield navigator.clipboard.writeText(this.letter);
      this.copied = true;
      setTimeout(() => this.copied = false, 2e3);
    });
  }
  downloadAsTxt() {
    const blob = new Blob([this.letter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cover-letter.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function CoverLetterPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoverLetterPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoverLetterPanelComponent, selectors: [["app-cover-letter-panel"]], inputs: { jobDescription: "jobDescription" }, decls: 14, vars: 7, consts: [[1, "space-y-6"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-200", "mb-3"], [1, "grid", "grid-cols-3", "gap-3", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-1", "py-3", "px-2", "rounded-xl", "border-2", "transition-all", 3, "class"], [1, "text-xs", "text-amber-600", "dark:text-amber-400", "mb-3", "flex", "items-center", "gap-1.5"], [1, "text-sm", "text-red-500", "dark:text-red-400", "mb-3"], [1, "w-full", "flex", "items-center", "justify-center", "gap-2", "py-3", "px-6", "text-sm", "font-bold", "text-white", "bg-gradient-to-r", "from-violet-600", "to-indigo-600", "hover:from-violet-700", "hover:to-indigo-700", "rounded-xl", "shadow-sm", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "animate-spin"], [1, "space-y-4"], [1, "flex", "flex-col", "items-center", "gap-1", "py-3", "px-2", "rounded-xl", "border-2", "transition-all", 3, "click"], [1, "text-xl"], [1, "text-xs", "font-bold", "text-gray-700", "dark:text-gray-200"], [1, "text-[10px]", "text-gray-400", "dark:text-gray-500"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5", "shrink-0"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-semibold", "text-gray-500", "dark:text-gray-400"], [1, "w-1", "h-1", "rounded-full", "bg-gray-300", "dark:bg-gray-600"], [1, "text-xs", "text-gray-400", "dark:text-gray-500"], [1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-lg", "border", "transition-all", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"], [1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-lg", "border", "text-gray-600", "bg-white", "border-gray-200", "hover:bg-gray-50", "dark:bg-gray-800", "dark:border-gray-600", "dark:text-gray-300", "dark:hover:bg-gray-700", "transition-all", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"], ["title", "Clear letter", 1, "text-xs", "text-gray-400", "hover:text-red-500", "dark:text-gray-500", "dark:hover:text-red-400", "transition-colors", "p-1.5", "rounded-lg", "hover:bg-red-50", "dark:hover:bg-red-900/20", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["rows", "18", 1, "w-full", "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-200", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-600", "rounded-xl", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-violet-400", "leading-relaxed", "font-serif", "transition-all", 3, "input", "value"], [1, "flex", "gap-3"], ["type", "text", "placeholder", 'e.g. "Make the opening punchier" or "Shorten to 200 words"', 1, "flex-1", "px-4", "py-2.5", "text-sm", "text-gray-700", "dark:text-gray-200", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-600", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-violet-400", "placeholder:text-gray-300", "dark:placeholder:text-gray-600", "transition-all", 3, "ngModelChange", "keydown.enter", "ngModel", "disabled"], [1, "flex", "items-center", "gap-1.5", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-violet-600", "hover:bg-violet-700", "rounded-xl", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-all", "shadow-sm", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"]], template: function CoverLetterPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "label", 1);
      \u0275\u0275text(3, "Writing Tone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275repeaterCreate(5, CoverLetterPanelComponent_For_6_Template, 7, 5, "button", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, CoverLetterPanelComponent_Conditional_7_Template, 4, 0, "p", 4);
      \u0275\u0275conditionalCreate(8, CoverLetterPanelComponent_Conditional_8_Template, 2, 1, "p", 5);
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function CoverLetterPanelComponent_Template_button_click_9_listener() {
        return ctx.generate();
      });
      \u0275\u0275conditionalCreate(10, CoverLetterPanelComponent_Conditional_10_Template, 2, 0, ":svg:svg", 7);
      \u0275\u0275conditionalCreate(11, CoverLetterPanelComponent_Conditional_11_Template, 3, 0, ":svg:svg", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, CoverLetterPanelComponent_Conditional_13_Template, 27, 10, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.tones);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.jobDescription ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isWriting);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isWriting ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isWriting ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.letter ? ctx.isWriting ? "Rewriting\u2026" : "Regenerate" : ctx.isWriting ? "Writing\u2026" : "\u2728 Generate Cover Letter", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.letter ? 13 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoverLetterPanelComponent, [{
    type: Component,
    args: [{ selector: "app-cover-letter-panel", standalone: true, imports: [FormsModule], template: `<div class="space-y-6">
  <!-- Tone selector + Generate -->
  <div>
    <label
      class="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3"
      >Writing Tone</label
    >
    <div class="grid grid-cols-3 gap-3 mb-4">
      @for (tone of tones; track tone.id) {
        <button
          (click)="selectedTone = tone.id"
          class="flex flex-col items-center gap-1 py-3 px-2 rounded-xl border-2 transition-all"
          [class]="
            selectedTone === tone.id
              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-500'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
          "
        >
          <span class="text-xl">{{ tone.emoji }}</span>
          <span class="text-xs font-bold text-gray-700 dark:text-gray-200">{{
            tone.label
          }}</span>
          <span class="text-[10px] text-gray-400 dark:text-gray-500">{{
            tone.desc
          }}</span>
        </button>
      }
    </div>

    @if (!jobDescription) {
      <p
        class="text-xs text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5"
      >
        <svg
          class="w-3.5 h-3.5 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        Paste a job description in the Optimizer tab first for a personalized
        letter.
      </p>
    }

    @if (error) {
      <p class="text-sm text-red-500 dark:text-red-400 mb-3">
        {{ error }}
      </p>
    }

    <button
      (click)="generate()"
      [disabled]="isWriting"
      class="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-xl shadow-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
    >
      @if (!isWriting) {
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
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      }
      @if (isWriting) {
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
      {{
        letter
          ? isWriting
            ? "Rewriting\u2026"
            : "Regenerate"
          : isWriting
            ? "Writing\u2026"
            : "\u2728 Generate Cover Letter"
      }}
    </button>
  </div>

  <!-- Generated Letter -->
  @if (letter) {
    <div class="space-y-4">
      <!-- Toolbar -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400"
            >{{ wordCount }} words</span
          >
          <span
            class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"
          ></span>
          <span class="text-xs text-gray-400 dark:text-gray-500"
            >Click the text to edit directly</span
          >
        </div>
        <div class="flex items-center gap-2">
          <button
            (click)="copyToClipboard()"
            class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all"
            [class]="
              copied
                ? 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800'
                : 'text-gray-600 bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
            "
          >
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
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            {{ copied ? "Copied!" : "Copy" }}
          </button>
          <button
            (click)="downloadAsTxt()"
            class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border text-gray-600 bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-all"
          >
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
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            Download .txt
          </button>
          <button
            (click)="aiService.clearCoverLetter()"
            class="text-xs text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
            title="Clear letter"
          >
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Editable letter textarea -->
      <textarea
        [value]="letter"
        (input)="aiService.setCoverLetter($any($event.target).value)"
        rows="18"
        class="w-full px-5 py-4 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-violet-400 leading-relaxed font-serif transition-all"
      ></textarea>
      <!-- Refine chat -->
      <div class="flex gap-3">
        <input
          [(ngModel)]="refineInput"
          (keydown.enter)="refine()"
          [disabled]="isWriting"
          type="text"
          placeholder='e.g. "Make the opening punchier" or "Shorten to 200 words"'
          class="flex-1 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder:text-gray-300 dark:placeholder:text-gray-600 transition-all"
        />
        <button
          (click)="refine()"
          [disabled]="isWriting || !refineInput.trim()"
          class="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          @if (!isWriting) {
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          }
          @if (isWriting) {
            <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
          Refine
        </button>
      </div>
    </div>
  }
</div>
` }]
  }], null, { jobDescription: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoverLetterPanelComponent, { className: "CoverLetterPanelComponent", filePath: "src/app/ai-builder/cover-letter-panel/cover-letter-panel.component.ts", lineNumber: 16 });
})();

// src/app/ai-builder/interview-panel/interview-panel.component.ts
function InterviewPanelComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.aiService.interviewError(), " ");
  }
}
function InterviewPanelComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 10);
    \u0275\u0275domElement(1, "circle", 11)(2, "path", 12);
    \u0275\u0275domElementEnd();
  }
}
function InterviewPanelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 4);
    \u0275\u0275domElement(3, "path", 5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(4, "h3", 6);
    \u0275\u0275text(5, " Prepare for your Interview ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 7);
    \u0275\u0275text(7, " Generate targeted interview questions based on the gap between your experience and the job description. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, InterviewPanelComponent_Conditional_1_Conditional_8_Template, 2, 1, "div", 8);
    \u0275\u0275domElementStart(9, "button", 9);
    \u0275\u0275domListener("click", function InterviewPanelComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateQuestions());
    });
    \u0275\u0275conditionalCreate(10, InterviewPanelComponent_Conditional_1_Conditional_10_Template, 3, 0, ":svg:svg", 10);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.aiService.interviewError() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.aiService.isGeneratingInterview() || !ctx_r1.jobDescription.trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiService.isGeneratingInterview() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.aiService.isGeneratingInterview() ? "Analyzing..." : "Generate Questions", " ");
  }
}
function InterviewPanelComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 16);
    \u0275\u0275domElement(1, "circle", 11)(2, "path", 12);
    \u0275\u0275domElementEnd();
  }
}
function InterviewPanelComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 17);
    \u0275\u0275domElement(1, "path", 20);
    \u0275\u0275domElementEnd();
  }
}
function InterviewPanelComponent_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 19)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    const \u0275$index_57_r5 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275$index_57_r5 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", q_r4, " ");
  }
}
function InterviewPanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 13)(2, "h3", 14);
    \u0275\u0275text(3, " Suggested Questions ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 15);
    \u0275\u0275domListener("click", function InterviewPanelComponent_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateQuestions());
    });
    \u0275\u0275conditionalCreate(5, InterviewPanelComponent_Conditional_2_Conditional_5_Template, 3, 0, ":svg:svg", 16);
    \u0275\u0275conditionalCreate(6, InterviewPanelComponent_Conditional_2_Conditional_6_Template, 2, 0, ":svg:svg", 17);
    \u0275\u0275text(7, " Regenerate ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "ul", 18);
    \u0275\u0275repeaterCreate(9, InterviewPanelComponent_Conditional_2_For_10_Template, 5, 2, "li", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("disabled", ctx_r1.aiService.isGeneratingInterview());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiService.isGeneratingInterview() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.aiService.isGeneratingInterview() ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.aiService.interviewQuestions());
  }
}
var InterviewPanelComponent = class _InterviewPanelComponent {
  jobDescription;
  aiService = inject(AiService);
  dataService = inject(DataService);
  generateQuestions() {
    return __async(this, null, function* () {
      if (!this.jobDescription.trim()) {
        this.aiService.setInterviewError("Please provide a job description in the Optimizer tab first.");
        return;
      }
      const resumeContext = this.dataService.buildAIContext();
      const tier = this.dataService.getCurrentTier();
      const tierLabel = tier.charAt(0).toUpperCase() + tier.slice(1);
      try {
        yield this.aiService.generateInterviewQuestions(this.jobDescription, resumeContext, tierLabel);
      } catch (e) {
        console.error(e);
      }
    });
  }
  static \u0275fac = function InterviewPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InterviewPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InterviewPanelComponent, selectors: [["app-interview-panel"]], inputs: { jobDescription: "jobDescription" }, decls: 3, vars: 2, consts: [[1, "bg-white", "dark:bg-neutral-800", "rounded-xl", "shadow-sm", "border", "border-gray-200", "dark:border-neutral-700", "overflow-hidden"], [1, "p-8", "text-center"], [1, "p-6"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "rounded-full", "bg-blue-50", "dark:bg-blue-900/30", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-8", "h-8", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-neutral-100", "mb-2"], [1, "text-sm", "text-gray-500", "dark:text-neutral-400", "max-w-sm", "mx-auto", "mb-6"], [1, "mb-6", "p-4", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-400", "text-sm", "rounded-lg", "border", "border-red-100", "dark:border-red-900/30"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-medium", "py-2.5", "px-6", "rounded-lg", "shadow-sm", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "inline-flex", "items-center", "gap-2", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "font-bold", "text-gray-900", "dark:text-neutral-100"], [1, "text-sm", "font-medium", "text-blue-600", "dark:text-blue-400", "hover:text-blue-800", "dark:hover:text-blue-300", "transition-colors", "disabled:opacity-50", "flex", "items-center", "gap-1.5", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-3.5", "w-3.5"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-3.5", "w-3.5"], [1, "space-y-4"], [1, "flex", "items-start", "gap-4", "p-4", "rounded-lg", "bg-gray-50", "dark:bg-neutral-900/50", "border", "border-gray-100", "dark:border-neutral-800"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "shrink-0", "flex", "items-center", "justify-center", "w-6", "h-6", "rounded-full", "bg-blue-100", "dark:bg-blue-900/40", "text-blue-700", "dark:text-blue-400", "text-xs", "font-bold", "mt-0.5"], [1, "text-sm", "text-gray-700", "dark:text-neutral-300", "leading-relaxed", "font-medium"]], template: function InterviewPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, InterviewPanelComponent_Conditional_1_Template, 12, 4, "div", 1);
      \u0275\u0275conditionalCreate(2, InterviewPanelComponent_Conditional_2_Template, 11, 3, "div", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.aiService.interviewQuestions() || ctx.aiService.interviewQuestions().length === 0 ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiService.interviewQuestions() && ctx.aiService.interviewQuestions().length > 0 ? 2 : -1);
    }
  }, dependencies: [FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InterviewPanelComponent, [{
    type: Component,
    args: [{ selector: "app-interview-panel", standalone: true, imports: [FormsModule], template: '<div\n  class="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700 overflow-hidden"\n>\n  <!-- Empty State -->\n  @if (\n    !aiService.interviewQuestions() ||\n    aiService.interviewQuestions().length === 0\n  ) {\n    <div class="p-8 text-center">\n      <div\n        class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4"\n      >\n        <svg\n          class="w-8 h-8 text-blue-500"\n          fill="none"\n          viewBox="0 0 24 24"\n          stroke="currentColor"\n        >\n          <path\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            stroke-width="1.5"\n            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"\n          />\n        </svg>\n      </div>\n      <h3 class="text-lg font-bold text-gray-900 dark:text-neutral-100 mb-2">\n        Prepare for your Interview\n      </h3>\n      <p\n        class="text-sm text-gray-500 dark:text-neutral-400 max-w-sm mx-auto mb-6"\n      >\n        Generate targeted interview questions based on the gap between your\n        experience and the job description.\n      </p>\n      @if (aiService.interviewError()) {\n        <div\n          class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-lg border border-red-100 dark:border-red-900/30"\n        >\n          {{ aiService.interviewError() }}\n        </div>\n      }\n      <button\n        (click)="generateQuestions()"\n        [disabled]="aiService.isGeneratingInterview() || !jobDescription.trim()"\n        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"\n      >\n        @if (aiService.isGeneratingInterview()) {\n          <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\n            <circle\n              class="opacity-25"\n              cx="12"\n              cy="12"\n              r="10"\n              stroke="currentColor"\n              stroke-width="4"\n            ></circle>\n            <path\n              class="opacity-75"\n              fill="currentColor"\n              d="M4 12a8 8 0 018-8v8H4z"\n            ></path>\n          </svg>\n        }\n        {{\n          aiService.isGeneratingInterview()\n            ? "Analyzing..."\n            : "Generate Questions"\n        }}\n      </button>\n    </div>\n  }\n\n  <!-- Results View -->\n  @if (\n    aiService.interviewQuestions() && aiService.interviewQuestions().length > 0\n  ) {\n    <div class="p-6">\n      <div class="flex justify-between items-center mb-6">\n        <h3 class="font-bold text-gray-900 dark:text-neutral-100">\n          Suggested Questions\n        </h3>\n        <button\n          (click)="generateQuestions()"\n          [disabled]="aiService.isGeneratingInterview()"\n          class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors disabled:opacity-50 flex items-center gap-1.5"\n        >\n          @if (aiService.isGeneratingInterview()) {\n            <svg\n              class="animate-spin h-3.5 w-3.5"\n              fill="none"\n              viewBox="0 0 24 24"\n            >\n              <circle\n                class="opacity-25"\n                cx="12"\n                cy="12"\n                r="10"\n                stroke="currentColor"\n                stroke-width="4"\n              ></circle>\n              <path\n                class="opacity-75"\n                fill="currentColor"\n                d="M4 12a8 8 0 018-8v8H4z"\n              ></path>\n            </svg>\n          }\n          @if (!aiService.isGeneratingInterview()) {\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              class="h-3.5 w-3.5"\n              fill="none"\n              viewBox="0 0 24 24"\n              stroke="currentColor"\n            >\n              <path\n                stroke-linecap="round"\n                stroke-linejoin="round"\n                stroke-width="2"\n                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"\n              />\n            </svg>\n          }\n          Regenerate\n        </button>\n      </div>\n      <ul class="space-y-4">\n        @for (q of aiService.interviewQuestions(); track q; let i = $index) {\n          <li\n            class="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-neutral-800"\n          >\n            <span\n              class="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-xs font-bold mt-0.5"\n            >\n              {{ i + 1 }}\n            </span>\n            <p\n              class="text-sm text-gray-700 dark:text-neutral-300 leading-relaxed font-medium"\n            >\n              {{ q }}\n            </p>\n          </li>\n        }\n      </ul>\n    </div>\n  }\n</div>\n' }]
  }], null, { jobDescription: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InterviewPanelComponent, { className: "InterviewPanelComponent", filePath: "src/app/ai-builder/interview-panel/interview-panel.component.ts", lineNumber: 13 });
})();

// src/app/ai-builder/prompt-editor/prompt-editor.component.ts
var _c0 = ["highlightLayer"];
function PromptEditorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.promptError);
  }
}
function PromptEditorComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Custom prompt active for this tier \u2014 using your version instead of the default. ");
    \u0275\u0275elementEnd();
  }
}
var PromptEditorComponent = class _PromptEditorComponent {
  activeTier = "mid";
  highlightLayer;
  sanitizer = inject(DomSanitizer);
  llmSettings = inject(LlmSettingsService);
  dataService = inject(DataService);
  promptDraft = "";
  promptError = "";
  ngOnChanges() {
    this.promptDraft = this.llmSettings.getTierPrompt(this.activeTier);
    this.promptError = "";
  }
  get currentTierLabel() {
    return EXPERIENCE_TIERS.find((t) => t.id === this.activeTier)?.label ?? this.activeTier;
  }
  validatePromptDraft() {
    const hasJd = this.promptDraft.includes("{{JOB_DESCRIPTION}}");
    const hasResume = this.promptDraft.includes("{{MASTER_RESUME}}");
    if (!hasJd && !hasResume) {
      this.promptError = "Missing {{JOB_DESCRIPTION}} and {{MASTER_RESUME}} template variables.";
    } else if (!hasJd) {
      this.promptError = "Missing {{JOB_DESCRIPTION}} template variable.";
    } else if (!hasResume) {
      this.promptError = "Missing {{MASTER_RESUME}} template variable.";
    } else {
      this.promptError = "";
    }
  }
  syncScroll(event) {
    if (this.highlightLayer) {
      const textarea = event.target;
      this.highlightLayer.nativeElement.scrollTop = textarea.scrollTop;
      this.highlightLayer.nativeElement.scrollLeft = textarea.scrollLeft;
    }
  }
  highlightedPrompt() {
    let text = this.promptDraft;
    if (!text)
      return this.sanitizer.bypassSecurityTrustHtml("");
    text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    text = text.replace(/(\{\{.*?\}\})/g, '<span class="text-cyan-400 font-bold">$1</span>');
    text = text.replace(/(&lt;\/?[A-Z_]+&gt;)/g, '<span class="text-blue-400 font-bold">$1</span>');
    text = text.replace(/(^\s*\d+\.)/gm, '<span class="text-emerald-400">$1</span>');
    text = text.replace(/(&quot;[A-Za-z0-9_]+&quot;)(:)/g, '<span class="text-sky-300">$1</span>$2');
    text = text.replace(/(: \s*)(&quot;.*?&quot;)/g, '$1<span class="text-green-300">$2</span>');
    text = text.replace(/(^\s*#+\s+.*)/gm, '<span class="text-fuchsia-400 font-bold">$1</span>');
    text = text.replace(/(\[.*?\])/g, '<span class="text-orange-300">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  saveTierPrompt() {
    if (this.promptError)
      return;
    this.llmSettings.setTierPromptOverride(this.activeTier, this.promptDraft);
  }
  resetTierPrompt() {
    this.llmSettings.resetTierPrompt(this.activeTier);
    this.promptDraft = this.llmSettings.getDefaultTierPrompt(this.activeTier);
    this.promptError = "";
  }
  static \u0275fac = function PromptEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromptEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromptEditorComponent, selectors: [["app-prompt-editor"]], viewQuery: function PromptEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.highlightLayer = _t.first);
    }
  }, inputs: { activeTier: "activeTier" }, features: [\u0275\u0275NgOnChangesFeature], decls: 35, vars: 14, consts: [["highlightLayer", ""], [1, "mt-3", "space-y-3"], [1, "text-xs", "text-gray-500", "dark:text-neutral-400", "leading-relaxed"], [1, "font-semibold", "text-indigo-600", "dark:text-indigo-400"], [1, "bg-gray-100", "dark:bg-neutral-800", "px-1", "rounded", "text-[10px]"], [1, "flex", "items-start", "gap-2", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-900/50", "rounded-lg", "px-3", "py-2"], [1, "relative", "rounded-xl", "overflow-hidden", "shadow-inner", "border", "mt-2"], [1, "flex", "items-center", "justify-between", "px-4", "py-2", "bg-gray-800", "dark:bg-neutral-900", "text-gray-400", "border-b", "border-gray-700", "dark:border-neutral-800"], [1, "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-indigo-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-xs", "font-medium", "font-mono"], [1, "text-[10px]", "uppercase", "tracking-wider", "font-bold", "text-gray-500"], [1, "hidden", "text-cyan-400", "text-blue-400", "text-emerald-400", "text-sky-300", "text-green-300", "text-fuchsia-400", "text-orange-300", "font-bold"], [1, "relative", "w-full", "h-[320px]", "bg-gray-900", "dark:bg-[#1e1e1e]"], ["spellcheck", "false", "placeholder", "Enter system prompt here...", 1, "absolute", "inset-0", "w-full", "h-full", "text-[13px]", "font-mono", "text-transparent", "bg-transparent", "caret-white", "p-4", "resize-none", "focus:outline-none", "focus:ring-inset", "focus:ring-2", "focus:ring-indigo-500", "z-10", "leading-relaxed", "scrollbar-thin", 2, "white-space", "pre-wrap", "word-wrap", "break-word", "overflow-wrap", "break-word", "margin", "0", "border", "none", "color", "transparent !important", "background-color", "transparent !important", 3, "ngModelChange", "scroll", "ngModel"], [1, "absolute", "inset-0", "w-full", "h-full", "text-[13px]", "font-mono", "text-gray-300", "p-4", "m-0", "z-0", "pointer-events-none", "leading-relaxed", "overflow-hidden", 2, "white-space", "pre-wrap", "word-wrap", "break-word", "overflow-wrap", "break-word", "margin", "0", "border", "none", "padding-right", "20px"], [3, "innerHTML"], [1, "flex", "gap-2", "justify-between", "items-center"], [1, "text-xs", "text-gray-500", "dark:text-neutral-400", "hover:text-gray-700", "dark:hover:text-neutral-200", "underline", "underline-offset-2", "transition-colors", 3, "click"], [1, "text-xs", "font-semibold", "px-4", "py-1.5", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "rounded-lg", "shadow-sm", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "text-[10px]", "text-amber-600", "dark:text-amber-500", "flex", "items-center", "gap-1"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4", "text-red-500", "shrink-0", "mt-0.5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "text-xs", "text-red-700", "dark:text-red-400"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3", "w-3"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"]], template: function PromptEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
      \u0275\u0275text(2, " Editing the ");
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " tier prompt. You must keep ");
      \u0275\u0275elementStart(6, "code", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " and ");
      \u0275\u0275elementStart(9, "code", 4);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " in the text. ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, PromptEditorComponent_Conditional_12_Template, 5, 1, "div", 5);
      \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 9);
      \u0275\u0275element(17, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span", 11);
      \u0275\u0275text(19, "system_prompt.md");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 12);
      \u0275\u0275text(21, " Markdown ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "div", 13);
      \u0275\u0275elementStart(23, "div", 14)(24, "textarea", 15);
      \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_Template_textarea_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.promptDraft, $event) || (ctx.promptDraft = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function PromptEditorComponent_Template_textarea_ngModelChange_24_listener() {
        return ctx.validatePromptDraft();
      })("scroll", function PromptEditorComponent_Template_textarea_scroll_24_listener($event) {
        return ctx.syncScroll($event);
      });
      \u0275\u0275text(25, "      ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "pre", 16, 0);
      \u0275\u0275element(28, "code", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 18)(30, "button", 19);
      \u0275\u0275listener("click", function PromptEditorComponent_Template_button_click_30_listener() {
        return ctx.resetTierPrompt();
      });
      \u0275\u0275text(31, " Reset to Default ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 20);
      \u0275\u0275listener("click", function PromptEditorComponent_Template_button_click_32_listener() {
        return ctx.saveTierPrompt();
      });
      \u0275\u0275text(33, " Save Prompt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(34, PromptEditorComponent_Conditional_34_Template, 4, 0, "p", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentTierLabel);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate("{{JOB_DESCRIPTION}}");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate("{{MASTER_RESUME}}");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.promptError ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("border-red-400", !!ctx.promptError)("border-gray-800", !ctx.promptError)("dark:border-neutral-700", !ctx.promptError);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.promptDraft);
      \u0275\u0275advance(4);
      \u0275\u0275property("innerHTML", ctx.highlightedPrompt(), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !!ctx.promptError);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.llmSettings.hasTierOverride(ctx.activeTier) ? 34 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromptEditorComponent, [{
    type: Component,
    args: [{ selector: "app-prompt-editor", standalone: true, imports: [FormsModule], template: '<div class="mt-3 space-y-3">\n  <p class="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">\n    Editing the\n    <span class="font-semibold text-indigo-600 dark:text-indigo-400">{{\n      currentTierLabel\n    }}</span>\n    tier prompt. You must keep\n    <code class="bg-gray-100 dark:bg-neutral-800 px-1 rounded text-[10px]">{{\n      "{" + "{JOB_DESCRIPTION}" + "}"\n    }}</code>\n    and\n    <code class="bg-gray-100 dark:bg-neutral-800 px-1 rounded text-[10px]">{{\n      "{" + "{MASTER_RESUME}" + "}"\n    }}</code>\n    in the text.\n  </p>\n  <!-- Validation error -->\n  @if (promptError) {\n    <div\n      class="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-lg px-3 py-2"\n    >\n      <svg\n        class="h-4 w-4 text-red-500 shrink-0 mt-0.5"\n        viewBox="0 0 20 20"\n        fill="currentColor"\n      >\n        <path\n          fill-rule="evenodd"\n          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"\n          clip-rule="evenodd"\n        />\n      </svg>\n      <span class="text-xs text-red-700 dark:text-red-400">{{\n        promptError\n      }}</span>\n    </div>\n  }\n  <!-- Editor container -->\n  <div\n    class="relative rounded-xl overflow-hidden shadow-inner border mt-2"\n    [class.border-red-400]="!!promptError"\n    [class.border-gray-800]="!promptError"\n    [class.dark:border-neutral-700]="!promptError"\n  >\n    <!-- Editor Header -->\n    <div\n      class="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-neutral-900 text-gray-400 border-b border-gray-700 dark:border-neutral-800"\n    >\n      <div class="flex items-center gap-2">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          class="h-4 w-4 text-indigo-400"\n          fill="none"\n          viewBox="0 0 24 24"\n          stroke="currentColor"\n        >\n          <path\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            stroke-width="2"\n            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"\n          />\n        </svg>\n        <span class="text-xs font-medium font-mono">system_prompt.md</span>\n      </div>\n      <div class="text-[10px] uppercase tracking-wider font-bold text-gray-500">\n        Markdown\n      </div>\n    </div>\n    <!-- Safelist for dynamic highlight classes (Tailwind JIT guard) -->\n    <div\n      class="hidden text-cyan-400 text-blue-400 text-emerald-400 text-sky-300 text-green-300 text-fuchsia-400 text-orange-300 font-bold"\n    ></div>\n    <!-- Editor Body -->\n    <div class="relative w-full h-[320px] bg-gray-900 dark:bg-[#1e1e1e]">\n      <textarea\n        [(ngModel)]="promptDraft"\n        (ngModelChange)="validatePromptDraft()"\n        spellcheck="false"\n        (scroll)="syncScroll($event)"\n        class="absolute inset-0 w-full h-full text-[13px] font-mono text-transparent bg-transparent caret-white p-4 resize-none focus:outline-none focus:ring-inset focus:ring-2 focus:ring-indigo-500 z-10 leading-relaxed scrollbar-thin"\n        style="\n          white-space: pre-wrap;\n          word-wrap: break-word;\n          overflow-wrap: break-word;\n          margin: 0;\n          border: none;\n          color: transparent !important;\n          background-color: transparent !important;\n        "\n        placeholder="Enter system prompt here..."\n      >\n      </textarea>\n      <pre\n        #highlightLayer\n        class="absolute inset-0 w-full h-full text-[13px] font-mono text-gray-300 p-4 m-0 z-0 pointer-events-none leading-relaxed overflow-hidden"\n        style="\n          white-space: pre-wrap;\n          word-wrap: break-word;\n          overflow-wrap: break-word;\n          margin: 0;\n          border: none;\n          padding-right: 20px;\n        "\n      ><code [innerHTML]="highlightedPrompt()"></code></pre>\n    </div>\n  </div>\n  <div class="flex gap-2 justify-between items-center">\n    <button\n      (click)="resetTierPrompt()"\n      class="text-xs text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-200 underline underline-offset-2 transition-colors"\n    >\n      Reset to Default\n    </button>\n    <button\n      (click)="saveTierPrompt()"\n      [disabled]="!!promptError"\n      class="text-xs font-semibold px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"\n    >\n      Save Prompt\n    </button>\n  </div>\n  <!-- Override indicator -->\n  @if (llmSettings.hasTierOverride(activeTier)) {\n    <p\n      class="text-[10px] text-amber-600 dark:text-amber-500 flex items-center gap-1"\n    >\n      <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">\n        <path\n          fill-rule="evenodd"\n          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"\n          clip-rule="evenodd"\n        />\n      </svg>\n      Custom prompt active for this tier \u2014 using your version instead of the\n      default.\n    </p>\n  }\n</div>\n' }]
  }], null, { activeTier: [{
    type: Input
  }], highlightLayer: [{
    type: ViewChild,
    args: ["highlightLayer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromptEditorComponent, { className: "PromptEditorComponent", filePath: "src/app/ai-builder/prompt-editor/prompt-editor.component.ts", lineNumber: 21 });
})();

// src/app/ai-builder/model-config/model-config.component.ts
function ModelConfigComponent_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function ModelConfigComponent_Conditional_0_Conditional_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 42);
    \u0275\u0275element(2, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " CORS must be enabled in LM Studio: open the ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "strong", 44);
    \u0275\u0275text(5, "Local Server");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " tab and toggle ");
    \u0275\u0275elementStart(7, "strong", 44);
    \u0275\u0275text(8, "Enable CORS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
  }
}
function ModelConfigComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 11);
    \u0275\u0275text(2, "Base URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 40);
    \u0275\u0275listener("ngModelChange", function ModelConfigComponent_Conditional_0_Conditional_28_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateConfigField("baseUrl", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ModelConfigComponent_Conditional_0_Conditional_28_Conditional_4_Template, 10, 0, "p", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.currentProviderConfig.baseUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.llmSettings.settings().selectedProvider === "lmstudio" ? 4 : -1);
  }
}
function ModelConfigComponent_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-prompt-editor", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("activeTier", ctx_r1.activeTier);
  }
}
function ModelConfigComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ModelConfigComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdropClick());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ModelConfigComponent_Conditional_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4, " \u2699\uFE0F Model Configuration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function ModelConfigComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "path", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "label", 11);
    \u0275\u0275text(12, "AI Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 12);
    \u0275\u0275listener("change", function ModelConfigComponent_Conditional_0_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateProvider($event));
    });
    \u0275\u0275repeaterCreate(14, ModelConfigComponent_Conditional_0_For_15_Template, 2, 2, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "label", 11);
    \u0275\u0275text(18, "Model Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 14);
    \u0275\u0275listener("ngModelChange", function ModelConfigComponent_Conditional_0_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateConfigField("model", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "label", 11);
    \u0275\u0275text(22, "API Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 15);
    \u0275\u0275listener("ngModelChange", function ModelConfigComponent_Conditional_0_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateConfigField("apiKey", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 17);
    \u0275\u0275element(26, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Saved securely in your browser's local storage, we don't have access to it. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, ModelConfigComponent_Conditional_0_Conditional_28_Template, 5, 2, "div", 19);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 20)(30, "button", 21);
    \u0275\u0275listener("click", function ModelConfigComponent_Conditional_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAdvanced());
    });
    \u0275\u0275elementStart(31, "span", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 23);
    \u0275\u0275element(33, "path", 24)(34, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Advanced \u2014 System Prompt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "svg", 26);
    \u0275\u0275element(37, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, ModelConfigComponent_Conditional_0_Conditional_38_Template, 1, 1, "app-prompt-editor", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 29)(40, "h3", 30);
    \u0275\u0275text(41, " App Preferences ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 31)(43, "div", 32)(44, "div", 33)(45, "p", 34);
    \u0275\u0275text(46, " Auto-Rescore ATS on Accept ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 35);
    \u0275\u0275text(48, " Automatically re-runs the ATS analysis in the background every time you accept a suggestion. Requires a job description to be set and an active API key. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 36);
    \u0275\u0275listener("click", function ModelConfigComponent_Conditional_0_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.llmSettings.updatePreference("autoRescore", !ctx_r1.llmSettings.getPreferences().autoRescore));
    });
    \u0275\u0275element(50, "span", 37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "div", 38)(52, "button", 39);
    \u0275\u0275listener("click", function ModelConfigComponent_Conditional_0_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(53, " Save Configuration ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngModel", ctx_r1.llmSettings.settings().selectedProvider);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableProviders);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.currentProviderConfig.model);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.currentProviderConfig.apiKey);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.llmSettings.settings().selectedProvider === "custom" || ctx_r1.llmSettings.settings().selectedProvider === "lmstudio" ? 28 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("rotate-180", ctx_r1.showAdvanced);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showAdvanced ? 38 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275classMap(ctx_r1.llmSettings.getPreferences().autoRescore ? "bg-indigo-600" : "bg-gray-200 dark:bg-neutral-700");
    \u0275\u0275attribute("aria-checked", ctx_r1.llmSettings.getPreferences().autoRescore);
    \u0275\u0275advance();
    \u0275\u0275classProp("translate-x-5", ctx_r1.llmSettings.getPreferences().autoRescore);
  }
}
var ModelConfigComponent = class _ModelConfigComponent {
  visible = false;
  close = new EventEmitter();
  llmSettings = inject(LlmSettingsService);
  dataService = inject(DataService);
  showAdvanced = false;
  get activeTier() {
    return this.dataService.getCurrentTier();
  }
  get currentProviderConfig() {
    return this.llmSettings.settings().configs[this.llmSettings.settings().selectedProvider];
  }
  availableProviders = [
    { id: "openai", label: "OpenAI (ChatGPT)" },
    { id: "anthropic", label: "Anthropic (Claude)" },
    { id: "gemini", label: "Google Gemini" },
    { id: "xai", label: "xAI (Grok)" },
    { id: "lmstudio", label: "LM Studio (Local)" },
    { id: "custom", label: "Custom / Local (e.g. Ollama)" }
  ];
  updateProvider(e) {
    const select = e.target;
    this.llmSettings.updateProvider(select.value);
  }
  updateConfigField(field, value) {
    this.llmSettings.updateConfig(this.llmSettings.settings().selectedProvider, { [field]: value });
  }
  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }
  onClose() {
    this.showAdvanced = false;
    this.close.emit();
  }
  onBackdropClick() {
    this.onClose();
  }
  static \u0275fac = function ModelConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModelConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModelConfigComponent, selectors: [["app-model-config"]], inputs: { visible: "visible" }, outputs: { close: "close" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "bg-gray-900/60", "dark:bg-black/70", "backdrop-blur-sm", "z-50", "flex", "justify-center", "items-center", "transition-opacity"], [1, "fixed", "inset-0", "bg-gray-900/60", "dark:bg-black/70", "backdrop-blur-sm", "z-50", "flex", "justify-center", "items-center", "transition-opacity", 3, "click"], [1, "bg-white", "dark:bg-neutral-900", "w-full", "max-w-md", "rounded-2xl", "shadow-2xl", "overflow-hidden", "transform", "transition-all", "scale-100", "flex", "flex-col", "max-h-[90vh]", 3, "click"], [1, "px-3", "py-2", "border-b", "border-gray-100", "dark:border-neutral-800", "flex", "justify-between", "items-center", "bg-gray-50", "dark:bg-neutral-800/50"], [1, "text-base", "font-bold", "text-gray-800", "dark:text-neutral-100", "flex", "items-center", "gap-2"], [1, "text-gray-400", "dark:text-neutral-500", "hover:text-gray-700", "dark:hover:text-neutral-300", "p-1", "rounded-md", "hover:bg-gray-200", "dark:hover:bg-neutral-700", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "overflow-y-auto", "flex-1", "scrollbar-thin"], [1, "p-6"], [1, "mb-5"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-neutral-300", "mb-1.5"], [1, "w-full", "border", "border-gray-300", "dark:border-neutral-700", "rounded-lg", "shadow-sm", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "py-2.5", "px-3", "bg-white", "dark:bg-neutral-800", "text-gray-700", "dark:text-neutral-200", "font-medium", 3, "change", "ngModel"], [3, "value"], ["type", "text", 1, "w-full", "border", "border-gray-300", "dark:border-neutral-700", "rounded-lg", "shadow-sm", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "px-3", "py-2", "text-gray-700", "dark:text-neutral-200", "bg-white", "dark:bg-neutral-800", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "pk-...", 1, "w-full", "border", "border-gray-300", "dark:border-neutral-700", "rounded-lg", "shadow-sm", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "px-3", "py-2", "font-mono", "text-sm", "tracking-widest", "text-gray-700", "dark:text-neutral-200", "bg-white", "dark:bg-neutral-800", 3, "ngModelChange", "ngModel"], [1, "text-xs", "text-gray-500", "dark:text-neutral-500", "mt-2", "flex", "items-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5", "text-gray-400", "dark:text-neutral-600"], ["fill-rule", "evenodd", "d", "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z", "clip-rule", "evenodd"], [1, "mb-2"], [1, "border-t", "border-gray-100", "dark:border-neutral-800", "mt-5", "pt-4"], [1, "w-full", "flex", "items-center", "justify-between", "text-sm", "font-semibold", "text-gray-500", "dark:text-neutral-400", "hover:text-gray-700", "dark:hover:text-neutral-200", "transition-colors", "py-1", 3, "click"], [1, "flex", "items-center", "gap-1.5"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M19 9l-7 7-7-7"], [3, "activeTier"], [1, "px-5", "pb-3", "border-t", "border-gray-100", "dark:border-neutral-800", "mt-4", "pt-4"], [1, "text-xs", "font-bold", "text-gray-700", "dark:text-neutral-300", "uppercase", "tracking-wide", "mb-3"], [1, "space-y-3"], [1, "flex", "items-start", "justify-between", "gap-4", "p-3", "bg-gray-50", "dark:bg-neutral-800/50", "rounded-xl", "border", "border-gray-100", "dark:border-neutral-800"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-neutral-200"], [1, "text-xs", "text-gray-400", "dark:text-neutral-500", "mt-0.5", "leading-relaxed"], [1, "relative", "shrink-0", "w-10", "h-5", "rounded-full", "transition-colors", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-400", "focus:ring-offset-2", "mt-0.5", 3, "click"], [1, "absolute", "top-0.5", "left-0.5", "w-4", "h-4", "bg-white", "rounded-full", "shadow", "transition-transform", "duration-200"], [1, "px-3", "py-2", "bg-gray-50", "dark:bg-neutral-800/50", "border-t", "border-gray-100", "dark:border-neutral-800", "flex", "justify-end", "shrink-0"], [1, "bg-indigo-600", "hover:bg-indigo-700", "text-white", "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "shadow-sm", "transition-colors", "cursor-pointer", 3, "click"], ["type", "text", "placeholder", "http://localhost:1234/v1 (LM Studio) or http://localhost:11434/v1 (Ollama)", 1, "w-full", "border", "border-gray-300", "dark:border-neutral-700", "rounded-lg", "shadow-sm", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "px-3", "py-2", "font-mono", "text-sm", "text-gray-700", "dark:text-neutral-200", "bg-white", "dark:bg-neutral-800", 3, "ngModelChange", "ngModel"], [1, "text-xs", "text-amber-600", "dark:text-amber-500", "mt-2", "flex", "items-start", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5", "mt-0.5", "shrink-0"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "font-semibold"]], template: function ModelConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ModelConfigComponent_Conditional_0_Template, 54, 12, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible ? 0 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, PromptEditorComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModelConfigComponent, [{
    type: Component,
    args: [{ selector: "app-model-config", standalone: true, imports: [FormsModule, PromptEditorComponent], template: `@if (visible) {
  <div
    class="fixed inset-0 bg-gray-900/60 dark:bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity"
    (click)="onBackdropClick()"
  >
    <div
      class="bg-white dark:bg-neutral-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 flex flex-col max-h-[90vh]"
      (click)="$event.stopPropagation()"
    >
      <!-- Header -->
      <div
        class="px-3 py-2 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center bg-gray-50 dark:bg-neutral-800/50"
      >
        <h3
          class="text-base font-bold text-gray-800 dark:text-neutral-100 flex items-center gap-2"
        >
          \u2699\uFE0F Model Configuration
        </h3>
        <button
          (click)="onClose()"
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

      <!-- Scrollable body -->
      <div class="overflow-y-auto flex-1 scrollbar-thin">
        <div class="p-6">
          <!-- Provider -->
          <div class="mb-5">
            <label
              class="block text-sm font-semibold text-gray-700 dark:text-neutral-300 mb-1.5"
              >AI Provider</label
            >
            <select
              [ngModel]="llmSettings.settings().selectedProvider"
              (change)="updateProvider($event)"
              class="w-full border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 py-2.5 px-3 bg-white dark:bg-neutral-800 text-gray-700 dark:text-neutral-200 font-medium"
            >
              @for (opt of availableProviders; track opt) {
                <option [value]="opt.id">{{ opt.label }}</option>
              }
            </select>
          </div>
          <!-- Model -->
          <div class="mb-5">
            <label
              class="block text-sm font-semibold text-gray-700 dark:text-neutral-300 mb-1.5"
              >Model Version</label
            >
            <input
              type="text"
              [ngModel]="currentProviderConfig.model"
              (ngModelChange)="updateConfigField('model', $event)"
              class="w-full border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 text-gray-700 dark:text-neutral-200 bg-white dark:bg-neutral-800"
            />
          </div>
          <!-- API Key -->
          <div class="mb-5">
            <label
              class="block text-sm font-semibold text-gray-700 dark:text-neutral-300 mb-1.5"
              >API Key</label
            >
            <input
              type="password"
              [ngModel]="currentProviderConfig.apiKey"
              (ngModelChange)="updateConfigField('apiKey', $event)"
              placeholder="pk-..."
              class="w-full border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 font-mono text-sm tracking-widest text-gray-700 dark:text-neutral-200 bg-white dark:bg-neutral-800"
            />
            <p
              class="text-xs text-gray-500 dark:text-neutral-500 mt-2 flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 text-gray-400 dark:text-neutral-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Saved securely in your browser's local storage, we don't have
              access to it.
            </p>
          </div>
          <!-- Base URL (custom/lmstudio only) -->
          @if (
            llmSettings.settings().selectedProvider === "custom" ||
            llmSettings.settings().selectedProvider === "lmstudio"
          ) {
            <div class="mb-2">
              <label
                class="block text-sm font-semibold text-gray-700 dark:text-neutral-300 mb-1.5"
                >Base URL</label
              >
              <input
                type="text"
                [ngModel]="currentProviderConfig.baseUrl"
                (ngModelChange)="updateConfigField('baseUrl', $event)"
                placeholder="http://localhost:1234/v1 (LM Studio) or http://localhost:11434/v1 (Ollama)"
                class="w-full border border-gray-300 dark:border-neutral-700 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 font-mono text-sm text-gray-700 dark:text-neutral-200 bg-white dark:bg-neutral-800"
              />
              @if (llmSettings.settings().selectedProvider === "lmstudio") {
                <p
                  class="text-xs text-amber-600 dark:text-amber-500 mt-2 flex items-start gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5 mt-0.5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  CORS must be enabled in LM Studio: open the
                  <strong class="font-semibold">Local Server</strong> tab and
                  toggle <strong class="font-semibold">Enable CORS</strong>.
                </p>
              }
            </div>
          }

          <!-- Advanced: System Prompt Editor -->
          <div
            class="border-t border-gray-100 dark:border-neutral-800 mt-5 pt-4"
          >
            <button
              (click)="toggleAdvanced()"
              class="w-full flex items-center justify-between text-sm font-semibold text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-200 transition-colors py-1"
            >
              <span class="flex items-center gap-1.5">
                <svg
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Advanced \u2014 System Prompt
              </span>
              <svg
                class="h-4 w-4 transition-transform duration-200"
                [class.rotate-180]="showAdvanced"
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
            </button>
            @if (showAdvanced) {
              <app-prompt-editor [activeTier]="activeTier" />
            }
          </div>
        </div>

        <!-- App Preferences -->
        <div
          class="px-5 pb-3 border-t border-gray-100 dark:border-neutral-800 mt-4 pt-4"
        >
          <h3
            class="text-xs font-bold text-gray-700 dark:text-neutral-300 uppercase tracking-wide mb-3"
          >
            App Preferences
          </h3>
          <div class="space-y-3">
            <div
              class="flex items-start justify-between gap-4 p-3 bg-gray-50 dark:bg-neutral-800/50 rounded-xl border border-gray-100 dark:border-neutral-800"
            >
              <div class="flex-1 min-w-0">
                <p
                  class="text-sm font-semibold text-gray-800 dark:text-neutral-200"
                >
                  Auto-Rescore ATS on Accept
                </p>
                <p
                  class="text-xs text-gray-400 dark:text-neutral-500 mt-0.5 leading-relaxed"
                >
                  Automatically re-runs the ATS analysis in the background every
                  time you accept a suggestion. Requires a job description to be
                  set and an active API key.
                </p>
              </div>
              <button
                (click)="
                  llmSettings.updatePreference(
                    'autoRescore',
                    !llmSettings.getPreferences().autoRescore
                  )
                "
                class="relative shrink-0 w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 mt-0.5"
                [class]="
                  llmSettings.getPreferences().autoRescore
                    ? 'bg-indigo-600'
                    : 'bg-gray-200 dark:bg-neutral-700'
                "
                [attr.aria-checked]="llmSettings.getPreferences().autoRescore"
              >
                <span
                  class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
                  [class.translate-x-5]="
                    llmSettings.getPreferences().autoRescore
                  "
                >
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="px-3 py-2 bg-gray-50 dark:bg-neutral-800/50 border-t border-gray-100 dark:border-neutral-800 flex justify-end shrink-0"
      >
        <button
          (click)="onClose()"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors cursor-pointer"
        >
          Save Configuration
        </button>
      </div>
    </div>
  </div>
}
` }]
  }], null, { visible: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModelConfigComponent, { className: "ModelConfigComponent", filePath: "src/app/ai-builder/model-config/model-config.component.ts", lineNumber: 18 });
})();

// src/app/ai-builder/ai-builder.component.ts
function AiBuilderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.aiService.proposals().length);
  }
}
function AiBuilderComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.aiService.proposals().length);
  }
}
function AiBuilderComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.aiService.atsReport().overallScore >= 75 ? "text-emerald-600" : ctx_r0.aiService.atsReport().overallScore >= 50 ? "text-amber-600" : "text-red-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.aiService.atsReport().overallScore, " ");
  }
}
function AiBuilderComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function AiBuilderComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function AiBuilderComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("value", t_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.label, " ");
  }
}
function AiBuilderComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 36)(2, "h2", 37);
    \u0275\u0275text(3, " ATS Keyword Match Score ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5, " Simulates how an ATS + recruiter evaluates your resume against the job description. Scores 4 dimensions: hard skills, experience alignment, tone, and structure. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-ats-panel");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 36)(2, "h2", 37);
    \u0275\u0275text(3, " Cover Letter Generator ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5, " Generates a personalized, seniority-matched cover letter using your resume profile and the job description. Choose your tone, then refine with chat. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-cover-letter-panel", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("jobDescription", ctx_r0.jobDescription);
  }
}
function AiBuilderComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 36)(2, "h2", 37);
    \u0275\u0275text(3, " Interview Prep ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5, " Generates highly specific behavioral and technical interview questions based on the intersection of your resume and the target role. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-interview-panel", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("jobDescription", ctx_r0.jobDescription);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AiBuilderComponent_Conditional_53_Conditional_10_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jobDescription, $event) || (ctx_r0.jobDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jobDescription);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AiBuilderComponent_Conditional_53_Conditional_11_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.improverFocus, $event) || (ctx_r0.improverFocus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.improverFocus);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 68);
    \u0275\u0275element(2, "path", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4, "No discussion history yet.");
    \u0275\u0275elementEnd()();
  }
}
function AiBuilderComponent_Conditional_53_For_15_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "I have generated new active suggestions on the right based on your input.");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_For_15_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r6.displayText || msg_r6.content);
  }
}
function AiBuilderComponent_Conditional_53_For_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275conditionalCreate(1, AiBuilderComponent_Conditional_53_For_15_Conditional_1_Conditional_1_Template, 2, 0, "span", 72);
    \u0275\u0275conditionalCreate(2, AiBuilderComponent_Conditional_53_For_15_Conditional_1_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", msg_r6.role === "user" ? "bg-indigo-600 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none");
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r6.role === "assistant" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r6.role === "user" ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r6.role === "user" ? "You" : "AI Coach");
  }
}
function AiBuilderComponent_Conditional_53_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275conditionalCreate(1, AiBuilderComponent_Conditional_53_For_15_Conditional_1_Template, 5, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    \u0275\u0275property("ngClass", msg_r6.role === "user" ? "items-end" : "items-start");
    \u0275\u0275advance();
    \u0275\u0275conditional(!msg_r6.isSystemRetry ? 1 : -1);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 75);
    \u0275\u0275element(3, "circle", 76)(4, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Thinking... ");
    \u0275\u0275elementEnd()();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 79);
    \u0275\u0275element(3, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 82);
    \u0275\u0275listener("click", function AiBuilderComponent_Conditional_53_Conditional_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.retryErrorAction());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 83);
    \u0275\u0275element(8, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Retry Action ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.errorState.msg);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function AiBuilderComponent_Conditional_53_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearHistory());
    });
    \u0275\u0275text(1, " Clear History ");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 86);
    \u0275\u0275twoWayListener("ngModelChange", function AiBuilderComponent_Conditional_53_Conditional_26_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.chatInput, $event) || (ctx_r0.chatInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function AiBuilderComponent_Conditional_53_Conditional_26_Template_textarea_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.generate());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.chatInput);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function AiBuilderComponent_Conditional_53_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generate());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.aiService.isGenerating() || ctx_r0.activeTab === "optimizer" && !ctx_r0.jobDescription.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeTab === "optimizer" ? "Generate AI Resume" : "Auto-Improve Resume", " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function AiBuilderComponent_Conditional_53_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 89);
    \u0275\u0275element(2, "path", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.aiService.isGenerating() || !ctx_r0.chatInput.trim());
  }
}
function AiBuilderComponent_Conditional_53_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 91);
    \u0275\u0275element(2, "span", 92);
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 94);
    \u0275\u0275element(5, "circle", 76)(6, "path", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p", 95);
    \u0275\u0275text(8, "AI is working...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 96);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 97);
    \u0275\u0275text(12, " This may take a few seconds depending on your model and network. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r0.aiService.statusMessage(), " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 98);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 99);
    \u0275\u0275element(3, "path", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 101);
    \u0275\u0275text(5, "Ready to optimize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 102);
    \u0275\u0275text(7, " Enter a job description to see tailored AI suggestions for your resume. ");
    \u0275\u0275elementEnd()();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1, "Activate Match");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1, "Hide Irrelevant");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "Improve Bullet");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Missing Requirement");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("New ", ctx_r0.getSectionTypeName(p_r12.action.sectionType));
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 125);
    \u0275\u0275element(2, "circle", 76)(3, "path", 77);
    \u0275\u0275elementEnd()();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Submit");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const p_r12 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(p_r12.userReply, $event) || (p_r12.userReply = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 123);
    \u0275\u0275listener("click", function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const p_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resolveQuestion(p_r12));
    });
    \u0275\u0275conditionalCreate(3, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Conditional_3_Template, 4, 0, "span", 124);
    \u0275\u0275conditionalCreate(4, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", p_r12.userReply);
    \u0275\u0275property("disabled", !!p_r12.isResolving);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !p_r12.userReply || !!p_r12.isResolving);
    \u0275\u0275advance();
    \u0275\u0275conditional(!!p_r12.isResolving ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!p_r12.isResolving ? 4 : -1);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 126);
    \u0275\u0275element(2, "path", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Applied! ");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275text(1, " Discarded ");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 128);
    \u0275\u0275listener("click", function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const p_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.rejectProposal(p_r12));
    });
    \u0275\u0275text(1, " Skip ");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const p_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.acceptProposal(p_r12));
    });
    \u0275\u0275text(1, " Apply Action ");
    \u0275\u0275elementEnd();
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 130)(2, "div", 131);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 132);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const p_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-emerald-500", p_r12.action.targetState)("text-orange-500", !p_r12.action.targetState);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.action.targetState ? "Activate:" : "Hibernate:", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(' "', ((tmp_16_0 = ctx_r0.getItemDetails(p_r12.action.itemId)) == null ? null : tmp_16_0.primaryText) || "Unknown target", '" ');
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 130)(2, "span", 133);
    \u0275\u0275text(3, "Before");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 134);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 130)(7, "span", 135);
    \u0275\u0275text(8, "After");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 136);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const p_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_13_0 = ctx_r0.getItemDetails(p_r12.action.itemId)) == null ? null : tmp_13_0.primaryText) || "Original bullet", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", p_r12.action.newText, " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r16);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 138);
    \u0275\u0275repeaterCreate(3, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_1_For_4_Template, 2, 1, "span", 139, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.action.content.skill_type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r12.action.content.skills);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r17, " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "span", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 144);
    \u0275\u0275repeaterCreate(8, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_2_For_9_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.action.content.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r12.action.content.start_date, " - ", p_r12.action.content.end_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r12.action.content.company, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r12.action.content.descriptions);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.action.content.project_url, " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r18);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275repeaterCreate(1, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Conditional_3_For_2_Template, 2, 1, "span", 147, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r12.action.content.project_tech);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r19, " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Conditional_2_Template, 2, 1, "p", 145);
    \u0275\u0275conditionalCreate(3, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Conditional_3_Template, 3, 0, "div", 146);
    \u0275\u0275elementStart(4, "ul", 144);
    \u0275\u0275repeaterCreate(5, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.action.content.project_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.content.project_url ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((p_r12.action.content.project_tech == null ? null : p_r12.action.content.project_tech.length) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r12.action.content.project_description);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" GPA: ", p_r12.action.content.gpa, " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "span", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 142);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 148);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_4_Conditional_7_Template, 2, 1, "p", 142);
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.action.content.school);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r12.action.content.start_date, " - ", p_r12.action.content.end_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r12.action.content.degree, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.content.gpa ? 7 : -1);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r20, " ");
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 149);
    \u0275\u0275repeaterCreate(3, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_5_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.action.content.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r12.action.content.description);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275conditionalCreate(1, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_1_Template, 5, 1);
    \u0275\u0275conditionalCreate(2, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_2_Template, 10, 4);
    \u0275\u0275conditionalCreate(3, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_3_Template, 7, 3);
    \u0275\u0275conditionalCreate(4, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_4_Template, 8, 5);
    \u0275\u0275conditionalCreate(5, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Conditional_5_Template, 5, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.sectionType === 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.sectionType === 2 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.sectionType === 3 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.sectionType === 4 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.sectionType === 5 ? 5 : -1);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106);
    \u0275\u0275conditionalCreate(3, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_3_Template, 2, 0, "span", 107);
    \u0275\u0275conditionalCreate(4, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_4_Template, 2, 0, "span", 108);
    \u0275\u0275conditionalCreate(5, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_5_Template, 2, 0, "span", 109);
    \u0275\u0275conditionalCreate(6, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_6_Template, 2, 0, "span", 110);
    \u0275\u0275conditionalCreate(7, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_7_Template, 2, 1, "span", 111);
    \u0275\u0275elementStart(8, "p", 112);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_10_Template, 5, 5, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 114);
    \u0275\u0275conditionalCreate(12, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_12_Template, 4, 0, "span", 115);
    \u0275\u0275conditionalCreate(13, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_13_Template, 2, 0, "span", 116);
    \u0275\u0275conditionalCreate(14, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_14_Template, 2, 0, "button", 117);
    \u0275\u0275conditionalCreate(15, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_15_Template, 2, 0, "button", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_16_Template, 6, 6, "div", 119);
    \u0275\u0275conditionalCreate(17, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_17_Template, 11, 2, "div", 120);
    \u0275\u0275conditionalCreate(18, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Conditional_18_Template, 6, 5, "div", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r12.action.type === "toggle" && p_r12.action.targetState ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "toggle" && !p_r12.action.targetState ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "modify" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "question" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "add_section" ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r12.explanation, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "question" && p_r12.status === "pending" ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r12.status === "accepted" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.status === "rejected" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.status === "pending" && p_r12.action.type !== "question" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.status === "pending" && p_r12.action.type !== "question" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "toggle" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "modify" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r12.action.type === "add_section" ? 18 : -1);
  }
}
function AiBuilderComponent_Conditional_53_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "h2", 103);
    \u0275\u0275text(2, " Suggested Improvements ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AiBuilderComponent_Conditional_53_Conditional_32_For_4_Template, 19, 14, "div", 104, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.aiService.proposals());
  }
}
function AiBuilderComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 40)(2, "div", 41)(3, "h2", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44)(8, "div", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, AiBuilderComponent_Conditional_53_Conditional_10_Template, 1, 1, "textarea", 46);
    \u0275\u0275conditionalCreate(11, AiBuilderComponent_Conditional_53_Conditional_11_Template, 1, 1, "textarea", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 48);
    \u0275\u0275conditionalCreate(13, AiBuilderComponent_Conditional_53_Conditional_13_Template, 5, 0, "div", 49);
    \u0275\u0275repeaterCreate(14, AiBuilderComponent_Conditional_53_For_15_Template, 2, 2, "div", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(16, AiBuilderComponent_Conditional_53_Conditional_16_Template, 6, 0, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, AiBuilderComponent_Conditional_53_Conditional_17_Template, 10, 1, "div", 52);
    \u0275\u0275elementStart(18, "div", 53)(19, "div", 54)(20, "label", 55)(21, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function AiBuilderComponent_Conditional_53_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.includeCurrentResume, $event) || (ctx_r0.includeCurrentResume = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 57);
    \u0275\u0275text(23, "Sync Master Resume");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, AiBuilderComponent_Conditional_53_Conditional_24_Template, 2, 0, "button", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275conditionalCreate(26, AiBuilderComponent_Conditional_53_Conditional_26_Template, 1, 1, "textarea", 59);
    \u0275\u0275conditionalCreate(27, AiBuilderComponent_Conditional_53_Conditional_27_Template, 2, 2, "button", 60);
    \u0275\u0275conditionalCreate(28, AiBuilderComponent_Conditional_53_Conditional_28_Template, 3, 1, "button", 61);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 62);
    \u0275\u0275conditionalCreate(30, AiBuilderComponent_Conditional_53_Conditional_30_Template, 13, 1, "div", 63);
    \u0275\u0275conditionalCreate(31, AiBuilderComponent_Conditional_53_Conditional_31_Template, 8, 0, "div", 64);
    \u0275\u0275conditionalCreate(32, AiBuilderComponent_Conditional_53_Conditional_32_Template, 5, 0, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeTab === "optimizer" ? "Target Role & Chat" : "General Polish & Chat", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeTab === "optimizer" ? "Paste the job description, then refine with chat." : "Optionally describe what you want to focus on, or just hit Auto-Improve.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.aiService.chatHistory().length > 0 ? "h-24" : "flex-grow");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeTab === "optimizer" ? "Job Description" : "Focus Area", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab === "optimizer" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab === "improver" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.aiService.chatHistory().length === 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.aiService.chatHistory());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.aiService.isGenerating() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorState ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.includeCurrentResume);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.aiService.chatHistory().length > 0 ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.aiService.chatHistory().length > 0 ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.aiService.chatHistory().length === 0 ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.aiService.chatHistory().length > 0 ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.aiService.isGenerating() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hasGenerated && !ctx_r0.aiService.isGenerating() ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasGenerated && ctx_r0.aiService.proposals().length > 0 ? 32 : -1);
  }
}
var AiBuilderComponent = class _AiBuilderComponent {
  router = inject(Router);
  aiService = inject(AiService);
  dataService = inject(DataService);
  llmSettings = inject(LlmSettingsService);
  experienceTiers = EXPERIENCE_TIERS;
  _activeTab = "optimizer";
  get activeTab() {
    return this._activeTab;
  }
  set activeTab(value) {
    if ((this._activeTab === "optimizer" || this._activeTab === "improver") && (value === "optimizer" || value === "improver") && this._activeTab !== value) {
      this.clearHistory();
    }
    this._activeTab = value;
  }
  jobDescription = "";
  improverFocus = "";
  chatInput = "";
  includeCurrentResume = true;
  errorState = null;
  /** True when there are results to show - derived from the signals so it survives page refresh */
  get hasGenerated() {
    return this.aiService.chatHistory().length > 0;
  }
  showSettings = false;
  openSettings() {
    this.showSettings = true;
  }
  closeSettings() {
    this.showSettings = false;
  }
  // Minimal list used only for error message lookup in generate()
  providerLabels = {
    openai: "OpenAI (ChatGPT)",
    anthropic: "Anthropic (Claude)",
    gemini: "Google Gemini",
    xai: "xAI (Grok)",
    lmstudio: "LM Studio (Local)",
    custom: "Custom / Local"
  };
  ngOnInit() {
    if (typeof localStorage !== "undefined") {
      const savedJD = localStorage.getItem("ai_builder_jd");
      if (savedJD)
        this.jobDescription = savedJD;
      const savedImp = localStorage.getItem("ai_builder_improver");
      if (savedImp)
        this.improverFocus = savedImp;
      const savedInc = localStorage.getItem("ai_builder_include_resume");
      if (savedInc !== null)
        this.includeCurrentResume = savedInc === "true";
    }
  }
  saveFormState() {
    if (typeof localStorage === "undefined")
      return;
    localStorage.setItem("ai_builder_jd", this.jobDescription);
    localStorage.setItem("ai_builder_improver", this.improverFocus);
    localStorage.setItem("ai_builder_include_resume", String(this.includeCurrentResume));
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  generate() {
    return __async(this, null, function* () {
      const isFirstCall = this.aiService.chatHistory().length === 0;
      let submittedText = "";
      if (isFirstCall) {
        submittedText = this.activeTab === "improver" ? this.improverFocus : this.jobDescription;
      } else {
        submittedText = this.chatInput;
      }
      if (this.activeTab === "optimizer" && isFirstCall && !submittedText.trim())
        return;
      this.saveFormState();
      this.errorState = null;
      const config = this.llmSettings.getActiveConfig();
      if (!config.apiKey && config.provider !== "custom" && config.provider !== "lmstudio") {
        this.errorState = {
          type: "generate",
          msg: "API Key is missing for " + (this.providerLabels[config.provider] ?? config.provider) + ". Please configure it first."
        };
        this.openSettings();
        return;
      }
      if (!isFirstCall) {
        this.chatInput = "";
      }
      try {
        const contextString = this.includeCurrentResume ? this.dataService.buildAIContext() : null;
        const mode = this.activeTab === "improver" ? "general" : "job";
        yield this.aiService.generateSuggestions(submittedText, contextString, mode);
      } catch (err) {
        if (!isFirstCall)
          this.chatInput = submittedText;
        this.errorState = {
          type: "generate",
          msg: err?.message ?? "An unexpected error occurred. Check your API key and try again."
        };
      }
    });
  }
  getSectionTypeName(typeEnum) {
    const names = [
      "Personal Info",
      "Skills",
      "Experience",
      "Projects",
      "Education",
      "Achievement"
    ];
    return names[typeEnum] || "Section";
  }
  getItemDetails(itemId) {
    return this.dataService.getItemDetails(itemId);
  }
  acceptProposal(proposal) {
    if (proposal.action.type === "toggle") {
      this.dataService.setItemActive(proposal.action.itemId, proposal.action.targetState);
      this.aiService.updateProposalStatus(proposal.id, "accepted");
    } else if (proposal.action.type === "modify") {
      this.dataService.modifyBullet(proposal.action.itemId, proposal.action.newText);
      this.aiService.updateProposalStatus(proposal.id, "accepted");
    } else if (proposal.action.type === "add_section") {
      this.dataService.addOrUpdateSection({
        type: proposal.action.sectionType,
        content: proposal.action.content
      });
      this.aiService.updateProposalStatus(proposal.id, "accepted");
    }
    const prefs = this.llmSettings.getPreferences();
    if (prefs.autoRescore && this.jobDescription.trim()) {
      const tier = this.dataService.getCurrentTier();
      const tierMeta = EXPERIENCE_TIERS.find((t) => t.id === tier);
      this.aiService.analyzeAtsMatch(this.jobDescription, this.dataService.buildAIContext(), tier, tierMeta?.label ?? tier, tierMeta?.sublabel ?? "").catch(() => {
      });
    }
  }
  rejectProposal(proposal) {
    this.aiService.updateProposalStatus(proposal.id, "rejected");
  }
  resolveQuestion(proposal) {
    return __async(this, null, function* () {
      if (!proposal.userReply?.trim())
        return;
      try {
        this.errorState = null;
        yield this.aiService.resolveQuestion(proposal, proposal.userReply);
      } catch (err) {
        this.errorState = {
          type: "resolve",
          proposal,
          msg: err?.message ?? "Failed to resolve the question with AI."
        };
      }
    });
  }
  retryErrorAction() {
    if (!this.errorState)
      return;
    if (this.errorState.type === "generate") {
      this.generate();
    } else if (this.errorState.type === "resolve" && this.errorState.proposal) {
      this.resolveQuestion(this.errorState.proposal);
    }
  }
  clearHistory() {
    this.aiService.clearState();
    this.errorState = null;
    this.chatInput = "";
  }
  static \u0275fac = function AiBuilderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiBuilderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiBuilderComponent, selectors: [["app-ai-builder"]], decls: 55, vars: 21, consts: [[1, "h-screen", "bg-gray-50", "flex", "flex-col", "font-sans", "overflow-hidden"], [1, "bg-white", "border-b", "border-gray-200", "py-3", "px-6", "flex", "justify-between", "items-center", "z-10", "shrink-0", "shadow-sm"], [1, "flex", "items-center", "gap-3"], [1, "text-gray-400", "hover:text-gray-700", "transition-colors", "mr-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "flex", "items-center", "bg-gray-100", "dark:bg-gray-800", "rounded-xl", "p-1", "gap-1"], [1, "flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-xs", "font-bold", "transition-all", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "bg-indigo-600", "text-white", "text-[9px]", "font-black", "px-1.5", "py-0.5", "rounded-full"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "font-black", "text-[9px]", 3, "class"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-violet-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-blue-500"], [1, "flex", "gap-3", "items-center"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-widest", "hidden", "sm:block"], [1, "relative"], ["title", "Experience Level \u2014 affects AI suggestion tone & verb choices", 1, "appearance-none", "h-[34px]", "pl-3", "pr-7", "text-xs", "font-semibold", "text-indigo-700", "bg-indigo-50", "border", "border-indigo-200", "rounded-lg", "cursor-pointer", "hover:bg-indigo-100", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-300", "transition-colors", 3, "ngModelChange", "ngModel"], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "pointer-events-none", "absolute", "right-2", "top-1/2", "-translate-y-1/2", "h-3", "w-3", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M19 9l-7 7-7-7"], [1, "w-px", "h-5", "bg-gray-200", "shrink-0"], [1, "text-gray-600", "hover:text-indigo-600", "hover:bg-indigo-50", "px-3", "py-2", "rounded-md", "transition-colors", "flex", "items-center", "gap-2", "font-medium", "text-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "bg-gray-100", "text-gray-700", "hover:bg-gray-200", "shadow-sm", "border", "border-gray-200", "text-sm", "font-medium", "px-4", "py-2", "rounded-lg", "transition-colors", 3, "click"], [1, "flex-1", "overflow-y-auto", "p-8", "max-w-3xl", "mx-auto", "w-full"], [1, "flex", "flex-1", "overflow-hidden"], [3, "close", "visible"], [1, "font-black", "text-[9px]"], [1, "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-gray-100"], [1, "text-gray-500", "dark:text-gray-400", "text-sm", "mt-1"], [3, "jobDescription"], [1, "w-5/12", "flex", "flex-col", "border-r", "border-gray-200", "bg-white", "dark:bg-gray-900", "dark:border-gray-700", "z-0", "relative"], [1, "p-6", "flex", "flex-col", "h-full", "mx-auto", "w-full", "max-w-xl"], [1, "text-2xl", "font-bold", "text-gray-800", "mb-1"], [1, "text-gray-500", "mb-4", "text-sm"], [1, "mb-4", "shrink-0", "transition-all", "duration-300", "relative", "group", 3, "ngClass"], [1, "absolute", "top-2", "right-2", "px-2", "py-0.5", "bg-indigo-100", "text-indigo-700", "text-[10px]", "font-bold", "rounded", "shadow-sm", "opacity-0", "group-hover:opacity-100", "transition-opacity", "pointer-events-none"], ["placeholder", "Paste Job Description here to start...", 1, "w-full", "h-full", "p-4", "bg-white", "border", "border-gray-300", "rounded-xl", "focus:bg-white", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "resize-none", "text-gray-700", "shadow-sm", "z-0", "text-sm", "scrollbar-thin", 3, "ngModel"], ["placeholder", "E.g., Make it sound more leadership oriented, fix grammar, or leave empty for general polish...", 1, "w-full", "h-full", "p-4", "bg-white", "border", "border-gray-300", "rounded-xl", "focus:bg-white", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "resize-none", "text-gray-700", "shadow-sm", "z-0", "text-sm", "scrollbar-thin", 3, "ngModel"], [1, "flex-grow", "flex", "flex-col", "mb-4", "overflow-y-auto", "space-y-4", "pr-2", "pb-4", "scrollbar-thin"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "text-center", "text-gray-400"], [1, "flex", "flex-col", "text-sm", 3, "ngClass"], [1, "flex", "flex-col", "items-start", "text-sm"], [1, "mb-4", "bg-red-50", "text-red-600", "text-sm", "p-3", "rounded-md", "border", "border-red-200", "flex", "items-start", "flex-col", "gap-2", "shrink-0", "relative"], [1, "shrink-0", "pt-4", "border-t", "border-gray-100", "bg-white"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "group"], ["type", "checkbox", 1, "w-4", "h-4", "text-indigo-600", "rounded", "border-gray-300", "focus:ring-indigo-500", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "text-xs", "font-semibold", "text-gray-600", "group-hover:text-indigo-700", "transition-colors"], [1, "text-xs", "text-gray-400", "hover:text-red-500", "transition-colors", "underline", "decoration-dotted"], ["placeholder", "Any feedback on the suggestions?", 1, "w-full", "p-4", "pr-16", "bg-white", "border", "border-gray-300", "rounded-xl", "focus:bg-white", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "resize-none", "text-gray-700", "shadow-sm", "z-0", "text-sm", "h-16", "scrollbar-thin", 3, "ngModel"], [1, "w-full", "bg-gradient-to-r", "from-indigo-600", "to-sky-600", "hover:from-indigo-700", "hover:to-sky-700", "text-white", "font-medium", "py-3", "rounded-xl", "shadow-md", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "justify-center", "items-center", "gap-3", 3, "disabled"], [1, "absolute", "right-2", "bottom-2", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "rounded-lg", "p-2", "shadow-sm", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "w-7/12", "p-8", "overflow-y-auto", "bg-gray-50/50"], [1, "h-full", "flex", "flex-col", "items-center", "justify-center", "text-center", "px-8"], [1, "h-full", "flex", "flex-col", "items-center", "justify-center", "text-gray-400"], [1, "max-w-3xl", "mx-auto", "flex", "flex-col", "gap-6"], ["placeholder", "Paste Job Description here to start...", 1, "w-full", "h-full", "p-4", "bg-white", "border", "border-gray-300", "rounded-xl", "focus:bg-white", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "resize-none", "text-gray-700", "shadow-sm", "z-0", "text-sm", "scrollbar-thin", 3, "ngModelChange", "ngModel"], ["placeholder", "E.g., Make it sound more leadership oriented, fix grammar, or leave empty for general polish...", 1, "w-full", "h-full", "p-4", "bg-white", "border", "border-gray-300", "rounded-xl", "focus:bg-white", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "resize-none", "text-gray-700", "shadow-sm", "z-0", "text-sm", "scrollbar-thin", 3, "ngModelChange", "ngModel"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-8", "w-8", "text-gray-300", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "text-sm"], [1, "max-w-[85%]", "rounded-2xl", "px-4", "py-2.5", "shadow-sm", "whitespace-pre-wrap", "flex", "flex-col", 3, "ngClass"], [1, "italic", "text-gray-500"], [1, "text-[10px]", "text-gray-400", "mt-1", "uppercase", "tracking-widest", "font-semibold", "px-1"], [1, "max-w-[85%]", "rounded-2xl", "rounded-bl-none", "px-4", "py-3", "shadow-sm", "bg-gray-100", "text-gray-800", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "text-gray-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], [1, "flex", "items-center", "gap-2", "w-full"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "shrink-0"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "flex-1", "max-h-[100px]", "overflow-y-auto", "scrollbar-thin", "whitespace-pre-wrap"], [1, "mt-1", "bg-red-100", "hover:bg-red-200", "text-red-800", "px-3", "py-1.5", "rounded", "text-xs", "font-bold", "uppercase", "tracking-wider", "self-end", "shadow-sm", "flex", "items-center", "gap-1", "transition-colors", "fixed", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], ["fill-rule", "evenodd", "d", "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", "clip-rule", "evenodd"], [1, "text-xs", "text-gray-400", "hover:text-red-500", "transition-colors", "underline", "decoration-dotted", 3, "click"], ["placeholder", "Any feedback on the suggestions?", 1, "w-full", "p-4", "pr-16", "bg-white", "border", "border-gray-300", "rounded-xl", "focus:bg-white", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "resize-none", "text-gray-700", "shadow-sm", "z-0", "text-sm", "h-16", "scrollbar-thin", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "w-full", "bg-gradient-to-r", "from-indigo-600", "to-sky-600", "hover:from-indigo-700", "hover:to-sky-700", "text-white", "font-medium", "py-3", "rounded-xl", "shadow-md", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "justify-center", "items-center", "gap-3", 3, "click", "disabled"], [1, "absolute", "right-2", "bottom-2", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "rounded-lg", "p-2", "shadow-sm", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4", "rotate-90"], ["d", "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"], [1, "relative", "mb-6"], [1, "absolute", "inset-0", "rounded-full", "bg-indigo-200", "animate-ping", "opacity-50"], [1, "relative", "bg-white", "p-6", "rounded-full", "shadow-md", "border", "border-indigo-100"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-indigo-500"], [1, "text-lg", "font-bold", "text-gray-700"], [1, "text-sm", "text-indigo-600", "font-medium", "mt-2", "min-h-[20px]", "transition-all", "duration-300"], [1, "text-xs", "text-gray-400", "mt-4", "max-w-xs"], [1, "bg-white", "p-6", "rounded-full", "shadow-sm", "mb-4", "border", "border-gray-100"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-10", "w-10", "text-indigo-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"], [1, "text-lg", "font-semibold", "text-gray-600"], [1, "text-sm", "mt-1", "text-gray-500", "text-center", "max-w-xs"], [1, "text-xl", "font-bold", "text-gray-800", "mb-2"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden", "transform", "transition", "hover:shadow-md"], [1, "px-6", "py-5", "border-b", "border-gray-100", "flex", "justify-between", "items-start"], [1, "pr-6", "flex-1"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-emerald-700", "bg-emerald-50", "px-2.5", "py-1", "rounded-md", "border", "border-emerald-100"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-orange-700", "bg-orange-50", "px-2.5", "py-1", "rounded-md", "border", "border-orange-100"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-violet-700", "bg-violet-50", "px-2.5", "py-1", "rounded-md", "border", "border-violet-100"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-indigo-700", "bg-indigo-50", "px-2.5", "py-1", "rounded-md", "border", "border-indigo-100"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-blue-700", "bg-blue-50", "px-2.5", "py-1", "rounded-md", "border", "border-blue-100"], [1, "text-gray-600", "mt-3", "text-sm", "leading-relaxed"], [1, "mt-4", "flex", "gap-2", "w-full"], [1, "flex", "gap-2", "shrink-0"], [1, "flex", "items-center", "gap-1.5", "text-emerald-700", "bg-emerald-50", "px-4", "py-2", "rounded-lg", "text-sm", "font-semibold", "border", "border-emerald-100"], [1, "flex", "items-center", "gap-1.5", "text-gray-500", "bg-gray-100", "px-4", "py-2", "rounded-lg", "text-sm", "font-semibold"], [1, "px-5", "py-2", "text-sm", "font-semibold", "text-gray-600", "bg-white", "border", "border-gray-200", "rounded-lg", "hover:bg-gray-50", "hover:text-gray-900", "transition-colors"], [1, "px-5", "py-2", "text-sm", "font-semibold", "text-white", "bg-indigo-600", "rounded-lg", "hover:bg-indigo-700", "shadow-sm", "transition-colors"], [1, "p-4", "bg-slate-50", "border-t", "border-white", "text-sm", "text-gray-700"], [1, "p-4", "bg-slate-50", "border-t", "border-white", "text-sm", "space-y-2"], [1, "p-6", "bg-slate-50", "border-t", "border-white", "text-sm", "text-gray-700", "space-y-2"], ["type", "text", "placeholder", "Yes, I have worked with...", 1, "flex-1", "border-gray-300", "rounded-lg", "shadow-sm", "focus:ring-indigo-500", "focus:border-indigo-500", "sm:text-sm", "p-2", "w-full", "border", 3, "ngModelChange", "ngModel", "disabled"], [1, "px-4", "py-2", "bg-indigo-100", "hover:bg-indigo-200", "text-indigo-800", "rounded-lg", "text-sm", "font-semibold", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex", "gap-1", "items-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "a", "", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "px-5", "py-2", "text-sm", "font-semibold", "text-gray-600", "bg-white", "border", "border-gray-200", "rounded-lg", "hover:bg-gray-50", "hover:text-gray-900", "transition-colors", 3, "click"], [1, "px-5", "py-2", "text-sm", "font-semibold", "text-white", "bg-indigo-600", "rounded-lg", "hover:bg-indigo-700", "shadow-sm", "transition-colors", 3, "click"], [1, "flex", "items-start", "gap-2"], [1, "mt-0.5", "font-bold"], [1, "font-medium", "flex-1"], [1, "shrink-0", "text-xs", "font-bold", "uppercase", "text-red-400", "mt-0.5", "w-14"], [1, "text-gray-500", "line-through", "leading-relaxed"], [1, "shrink-0", "text-xs", "font-bold", "uppercase", "text-emerald-600", "mt-0.5", "w-14"], [1, "dark:text-black", "font-medium", "leading-relaxed"], [1, "font-semibold", "text-gray-800"], [1, "flex", "flex-wrap", "gap-1.5", "mt-1"], [1, "bg-white", "border", "border-gray-200", "text-gray-600", "text-xs", "px-2.5", "py-1", "rounded-full", "shadow-sm"], [1, "flex", "justify-between"], [1, "font-semibold", "text-gray-900"], [1, "text-gray-500", "text-xs"], [1, "text-indigo-600", "font-medium"], [1, "list-disc", "pl-5", "space-y-1", "mt-2", "text-gray-600"], [1, "text-indigo-500", "text-xs", "font-mono", "truncate"], [1, "flex", "flex-wrap", "gap-1", "mt-1"], [1, "bg-indigo-50", "border", "border-indigo-100", "text-indigo-700", "text-xs", "px-2", "py-0.5", "rounded"], [1, "text-gray-600"], [1, "list-disc", "pl-5", "space-y-1", "mt-1", "text-gray-600"]], template: function AiBuilderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "nav", 6)(7, "button", 7);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_7_listener() {
        return ctx.activeTab = "optimizer";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Optimizer ");
      \u0275\u0275conditionalCreate(11, AiBuilderComponent_Conditional_11_Template, 2, 1, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_12_listener() {
        return ctx.activeTab = "improver";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 8);
      \u0275\u0275element(14, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " General Polish ");
      \u0275\u0275conditionalCreate(16, AiBuilderComponent_Conditional_16_Template, 2, 1, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_17_listener() {
        return ctx.activeTab = "ats";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 8);
      \u0275\u0275element(19, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " ATS Score ");
      \u0275\u0275conditionalCreate(21, AiBuilderComponent_Conditional_21_Template, 2, 3, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "button", 7);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_22_listener() {
        return ctx.activeTab = "cover-letter";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 8);
      \u0275\u0275element(24, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Cover Letter ");
      \u0275\u0275conditionalCreate(26, AiBuilderComponent_Conditional_26_Template, 1, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "button", 7);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_27_listener() {
        return ctx.activeTab = "interview";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 8);
      \u0275\u0275element(29, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Interview Prep ");
      \u0275\u0275conditionalCreate(31, AiBuilderComponent_Conditional_31_Template, 1, 0, "span", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "span", 20);
      \u0275\u0275text(35, "Tier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 21)(37, "select", 22);
      \u0275\u0275listener("ngModelChange", function AiBuilderComponent_Template_select_ngModelChange_37_listener($event) {
        return ctx.dataService.setCurrentTier($event);
      });
      \u0275\u0275repeaterCreate(38, AiBuilderComponent_For_39_Template, 2, 2, "option", 23, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 24);
      \u0275\u0275element(41, "path", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(42, "div", 26);
      \u0275\u0275elementStart(43, "button", 27);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_43_listener() {
        return ctx.openSettings();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 28);
      \u0275\u0275element(45, "path", 29)(46, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " Model Config ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "button", 31);
      \u0275\u0275listener("click", function AiBuilderComponent_Template_button_click_48_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(49, " Done Editing ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(50, AiBuilderComponent_Conditional_50_Template, 7, 0, "div", 32);
      \u0275\u0275conditionalCreate(51, AiBuilderComponent_Conditional_51_Template, 7, 1, "div", 32);
      \u0275\u0275conditionalCreate(52, AiBuilderComponent_Conditional_52_Template, 7, 1, "div", 32);
      \u0275\u0275conditionalCreate(53, AiBuilderComponent_Conditional_53_Template, 33, 17, "div", 33);
      \u0275\u0275elementStart(54, "app-model-config", 34);
      \u0275\u0275listener("close", function AiBuilderComponent_Template_app_model_config_close_54_listener() {
        return ctx.closeSettings();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classMap(ctx.activeTab === "optimizer" ? "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.aiService.proposals().length > 0 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.activeTab === "improver" ? "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.aiService.proposals().length > 0 && ctx.activeTab === "improver" ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.activeTab === "ats" ? "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.aiService.atsReport() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.activeTab === "cover-letter" ? "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.aiService.coverLetter() ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.activeTab === "interview" ? "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.aiService.interviewQuestions().length > 0 ? 31 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.dataService.getCurrentTier());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.experienceTiers);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.activeTab === "ats" ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "cover-letter" ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "interview" ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "optimizer" || ctx.activeTab === "improver" ? 53 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.showSettings);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    AtsPanelComponent,
    CoverLetterPanelComponent,
    InterviewPanelComponent,
    ModelConfigComponent
  ], styles: ["\n/*# sourceMappingURL=ai-builder.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiBuilderComponent, [{
    type: Component,
    args: [{ selector: "app-ai-builder", standalone: true, imports: [
      CommonModule,
      FormsModule,
      AtsPanelComponent,
      CoverLetterPanelComponent,
      InterviewPanelComponent,
      ModelConfigComponent
    ], template: `<div class="h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
  <!-- Header -->
  <header
    class="bg-white border-b border-gray-200 py-3 px-6 flex justify-between items-center z-10 shrink-0 shadow-sm"
  >
    <div class="flex items-center gap-3">
      <button
        (click)="goBack()"
        class="text-gray-400 hover:text-gray-700 transition-colors mr-2"
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <!-- Tab switcher -->
      <nav
        class="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1 gap-1"
      >
        <button
          (click)="activeTab = 'optimizer'"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          [class]="
            activeTab === 'optimizer'
              ? 'bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          "
        >
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          Optimizer
          @if (aiService.proposals().length > 0) {
            <span
              class="bg-indigo-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full"
              >{{ aiService.proposals().length }}</span
            >
          }
        </button>
        <button
          (click)="activeTab = 'improver'"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          [class]="
            activeTab === 'improver'
              ? 'bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          "
        >
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          General Polish
          @if (aiService.proposals().length > 0 && activeTab === "improver") {
            <span
              class="bg-indigo-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full"
              >{{ aiService.proposals().length }}</span
            >
          }
        </button>
        <button
          (click)="activeTab = 'ats'"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          [class]="
            activeTab === 'ats'
              ? 'bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          "
        >
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          ATS Score
          @if (aiService.atsReport()) {
            <span
              class="font-black text-[9px]"
              [class]="
                aiService.atsReport()!.overallScore >= 75
                  ? 'text-emerald-600'
                  : aiService.atsReport()!.overallScore >= 50
                    ? 'text-amber-600'
                    : 'text-red-600'
              "
            >
              {{ aiService.atsReport()!.overallScore }}
            </span>
          }
        </button>
        <button
          (click)="activeTab = 'cover-letter'"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          [class]="
            activeTab === 'cover-letter'
              ? 'bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          "
        >
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Cover Letter
          @if (aiService.coverLetter()) {
            <span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
          }
        </button>
        <button
          (click)="activeTab = 'interview'"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          [class]="
            activeTab === 'interview'
              ? 'bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          "
        >
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Interview Prep
          @if (aiService.interviewQuestions().length > 0) {
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          }
        </button>
      </nav>
    </div>

    <div class="flex gap-3 items-center">
      <!-- Experience Tier selector (controls AI suggestion tone) -->
      <div class="flex items-center gap-2">
        <span
          class="text-xs font-semibold text-gray-400 uppercase tracking-widest hidden sm:block"
          >Tier</span
        >
        <div class="relative">
          <select
            [ngModel]="dataService.getCurrentTier()"
            (ngModelChange)="dataService.setCurrentTier($event)"
            title="Experience Level \u2014 affects AI suggestion tone & verb choices"
            class="appearance-none h-[34px] pl-3 pr-7 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors"
          >
            @for (t of experienceTiers; track t) {
              <option [value]="t.id">
                {{ t.label }}
              </option>
            }
          </select>
          <svg
            class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-indigo-500"
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
      </div>
      <div class="w-px h-5 bg-gray-200 shrink-0"></div>
      <button
        (click)="openSettings()"
        class="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors flex items-center gap-2 font-medium text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Model Config
      </button>
      <button
        (click)="goBack()"
        class="bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm border border-gray-200 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
      >
        Done Editing
      </button>
    </div>
  </header>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- ATS Score Tab                                       -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === "ats") {
    <div class="flex-1 overflow-y-auto p-8 max-w-3xl mx-auto w-full">
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
          ATS Keyword Match Score
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Simulates how an ATS + recruiter evaluates your resume against the job
          description. Scores 4 dimensions: hard skills, experience alignment,
          tone, and structure.
        </p>
      </div>
      <app-ats-panel></app-ats-panel>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- Cover Letter Tab                                    -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === "cover-letter") {
    <div class="flex-1 overflow-y-auto p-8 max-w-3xl mx-auto w-full">
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Cover Letter Generator
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Generates a personalized, seniority-matched cover letter using your
          resume profile and the job description. Choose your tone, then refine
          with chat.
        </p>
      </div>
      <app-cover-letter-panel
        [jobDescription]="jobDescription"
      ></app-cover-letter-panel>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- Interview Prep Tab                                  -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === "interview") {
    <div class="flex-1 overflow-y-auto p-8 max-w-3xl mx-auto w-full">
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Interview Prep
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Generates highly specific behavioral and technical interview questions
          based on the intersection of your resume and the target role.
        </p>
      </div>
      <app-interview-panel
        [jobDescription]="jobDescription"
      ></app-interview-panel>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- Optimizer Tab (original split view)                 -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

  <!-- Split View Content -->
  @if (activeTab === "optimizer" || activeTab === "improver") {
    <div class="flex flex-1 overflow-hidden">
      <!-- Left Column (Input & Chat) -->
      <div
        class="w-5/12 flex flex-col border-r border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 z-0 relative"
      >
        <div class="p-6 flex flex-col h-full mx-auto w-full max-w-xl">
          <h2 class="text-2xl font-bold text-gray-800 mb-1">
            {{
              activeTab === "optimizer"
                ? "Target Role & Chat"
                : "General Polish & Chat"
            }}
          </h2>
          <p class="text-gray-500 mb-4 text-sm">
            {{
              activeTab === "optimizer"
                ? "Paste the job description, then refine with chat."
                : "Optionally describe what you want to focus on, or just hit Auto-Improve."
            }}
          </p>
          <!-- Top Input Area (Minimized when chat starts) -->
          <div
            class="mb-4 shrink-0 transition-all duration-300 relative group"
            [ngClass]="
              aiService.chatHistory().length > 0 ? 'h-24' : 'flex-grow'
            "
          >
            <div
              class="absolute top-2 right-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              {{ activeTab === "optimizer" ? "Job Description" : "Focus Area" }}
            </div>
            @if (activeTab === "optimizer") {
              <textarea
                [(ngModel)]="jobDescription"
                placeholder="Paste Job Description here to start..."
                class="w-full h-full p-4 bg-white border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-700 shadow-sm z-0 text-sm scrollbar-thin"
              ></textarea>
            }
            @if (activeTab === "improver") {
              <textarea
                [(ngModel)]="improverFocus"
                placeholder="E.g., Make it sound more leadership oriented, fix grammar, or leave empty for general polish..."
                class="w-full h-full p-4 bg-white border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-700 shadow-sm z-0 text-sm scrollbar-thin"
              ></textarea>
            }
          </div>
          <!-- Chat History -->
          <div
            class="flex-grow flex flex-col mb-4 overflow-y-auto space-y-4 pr-2 pb-4 scrollbar-thin"
          >
            @if (aiService.chatHistory().length === 0) {
              <div
                class="flex flex-col items-center justify-center h-full text-center text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-gray-300 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p class="text-sm">No discussion history yet.</p>
              </div>
            }
            @for (msg of aiService.chatHistory(); track msg) {
              <div
                class="flex flex-col text-sm"
                [ngClass]="msg.role === 'user' ? 'items-end' : 'items-start'"
              >
                @if (!msg.isSystemRetry) {
                  <div
                    class="max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm whitespace-pre-wrap flex flex-col"
                    [ngClass]="
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    "
                  >
                    @if (msg.role === "assistant") {
                      <span class="italic text-gray-500"
                        >I have generated new active suggestions on the right
                        based on your input.</span
                      >
                    }
                    @if (msg.role === "user") {
                      <span>{{ msg.displayText || msg.content }}</span>
                    }
                  </div>
                  <span
                    class="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-semibold px-1"
                    >{{ msg.role === "user" ? "You" : "AI Coach" }}</span
                  >
                }
              </div>
            }
            @if (aiService.isGenerating()) {
              <div class="flex flex-col items-start text-sm">
                <div
                  class="max-w-[85%] rounded-2xl rounded-bl-none px-4 py-3 shadow-sm bg-gray-100 text-gray-800 flex items-center gap-2"
                >
                  <svg
                    class="animate-spin h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
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
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Thinking...
                </div>
              </div>
            }
          </div>
          @if (errorState) {
            <div
              class="mb-4 bg-red-50 text-red-600 text-sm p-3 rounded-md border border-red-200 flex items-start flex-col gap-2 shrink-0 relative"
            >
              <div class="flex items-center gap-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  class="flex-1 max-h-[100px] overflow-y-auto scrollbar-thin whitespace-pre-wrap"
                  >{{ errorState.msg }}</span
                >
              </div>
              <button
                (click)="retryErrorAction()"
                class="mt-1 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider self-end shadow-sm flex items-center gap-1 transition-colors fixed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"
                  />
                </svg>
                Retry Action
              </button>
            </div>
          }
          <!-- Sticky Bottom Input for Chat -->
          <div class="shrink-0 pt-4 border-t border-gray-100 bg-white">
            <div class="flex items-center justify-between mb-3">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  [(ngModel)]="includeCurrentResume"
                  class="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 transition-colors"
                />
                <span
                  class="text-xs font-semibold text-gray-600 group-hover:text-indigo-700 transition-colors"
                  >Sync Master Resume</span
                >
              </label>
              @if (aiService.chatHistory().length > 0) {
                <button
                  (click)="clearHistory()"
                  class="text-xs text-gray-400 hover:text-red-500 transition-colors underline decoration-dotted"
                >
                  Clear History
                </button>
              }
            </div>
            <div class="relative">
              <!-- If history is empty, the button uses jobDescription. If history exists, it uses chatInput -->
              @if (aiService.chatHistory().length > 0) {
                <textarea
                  [(ngModel)]="chatInput"
                  placeholder="Any feedback on the suggestions?"
                  (keydown.enter)="$event.preventDefault(); generate()"
                  class="w-full p-4 pr-16 bg-white border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-700 shadow-sm z-0 text-sm h-16 scrollbar-thin"
                ></textarea>
              }
              <!-- The Generate button states -->
              @if (aiService.chatHistory().length === 0) {
                <button
                  (click)="generate()"
                  [disabled]="
                    aiService.isGenerating() ||
                    (activeTab === 'optimizer' && !jobDescription.trim())
                  "
                  class="w-full bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-medium py-3 rounded-xl shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                >
                  {{
                    activeTab === "optimizer"
                      ? "Generate AI Resume"
                      : "Auto-Improve Resume"
                  }}
                </button>
              }
              @if (aiService.chatHistory().length > 0) {
                <button
                  (click)="generate()"
                  [disabled]="aiService.isGenerating() || !chatInput.trim()"
                  class="absolute right-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-2 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                    />
                  </svg>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
      <!-- Right Column (Output) -->
      <div class="w-7/12 p-8 overflow-y-auto bg-gray-50/50">
        <!-- Loading State (rich overlay) -->
        @if (aiService.isGenerating()) {
          <div
            class="h-full flex flex-col items-center justify-center text-center px-8"
          >
            <div class="relative mb-6">
              <!-- Pulsing outer ring -->
              <span
                class="absolute inset-0 rounded-full bg-indigo-200 animate-ping opacity-50"
              ></span>
              <div
                class="relative bg-white p-6 rounded-full shadow-md border border-indigo-100"
              >
                <svg
                  class="animate-spin h-10 w-10 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
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
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </div>
            </div>
            <p class="text-lg font-bold text-gray-700">AI is working...</p>
            <p
              class="text-sm text-indigo-600 font-medium mt-2 min-h-[20px] transition-all duration-300"
            >
              {{ aiService.statusMessage() }}
            </p>
            <p class="text-xs text-gray-400 mt-4 max-w-xs">
              This may take a few seconds depending on your model and network.
            </p>
          </div>
        }
        <!-- Empty State -->
        @if (!hasGenerated && !aiService.isGenerating()) {
          <div
            class="h-full flex flex-col items-center justify-center text-gray-400"
          >
            <div
              class="bg-white p-6 rounded-full shadow-sm mb-4 border border-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <p class="text-lg font-semibold text-gray-600">Ready to optimize</p>
            <p class="text-sm mt-1 text-gray-500 text-center max-w-xs">
              Enter a job description to see tailored AI suggestions for your
              resume.
            </p>
          </div>
        }
        <!-- Results List -->
        @if (hasGenerated && aiService.proposals().length > 0) {
          <div class="max-w-3xl mx-auto flex flex-col gap-6">
            <h2 class="text-xl font-bold text-gray-800 mb-2">
              Suggested Improvements
            </h2>
            @for (p of aiService.proposals(); track p) {
              <div
                class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transform transition hover:shadow-md"
              >
                <div
                  class="px-6 py-5 border-b border-gray-100 flex justify-between items-start"
                >
                  <div class="pr-6 flex-1">
                    <!-- Type Badges -->
                    @if (p.action.type === "toggle" && p.action.targetState) {
                      <span
                        class="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100"
                        >Activate Match</span
                      >
                    }
                    @if (p.action.type === "toggle" && !p.action.targetState) {
                      <span
                        class="text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100"
                        >Hide Irrelevant</span
                      >
                    }
                    @if (p.action.type === "modify") {
                      <span
                        class="text-xs font-bold uppercase tracking-widest text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-100"
                        >Improve Bullet</span
                      >
                    }
                    @if (p.action.type === "question") {
                      <span
                        class="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100"
                        >Missing Requirement</span
                      >
                    }
                    @if (p.action.type === "add_section") {
                      <span
                        class="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100"
                        >New
                        {{
                          getSectionTypeName($any(p.action).sectionType)
                        }}</span
                      >
                    }
                    <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                      {{ p.explanation }}
                    </p>
                    <!-- Question Reply Box -->
                    @if (
                      p.action.type === "question" && p.status === "pending"
                    ) {
                      <div class="mt-4 flex gap-2 w-full">
                        <input
                          type="text"
                          [(ngModel)]="p.userReply"
                          [disabled]="!!p.isResolving"
                          placeholder="Yes, I have worked with..."
                          class="flex-1 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 w-full border"
                        />
                        <button
                          (click)="resolveQuestion(p)"
                          [disabled]="!p.userReply || !!p.isResolving"
                          class="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
                        >
                          @if (!!p.isResolving) {
                            <span class="flex gap-1 items-center"
                              ><svg
                                class="animate-spin h-4 w-4"
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
                                ></circle>
                                <path
                                  class="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                              </svg>
                            </span>
                          }
                          @if (!p.isResolving) {
                            <span>Submit</span>
                          }
                        </button>
                      </div>
                    }
                  </div>
                  <div class="flex gap-2 shrink-0">
                    @if (p.status === "accepted") {
                      <span
                        class="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-4 py-2 rounded-lg text-sm font-semibold border border-emerald-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            a=""
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Applied!
                      </span>
                    }
                    @if (p.status === "rejected") {
                      <span
                        class="flex items-center gap-1.5 text-gray-500 bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold"
                      >
                        Discarded
                      </span>
                    }
                    @if (
                      p.status === "pending" && p.action.type !== "question"
                    ) {
                      <button
                        (click)="rejectProposal(p)"
                        class="px-5 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        Skip
                      </button>
                    }
                    @if (
                      p.status === "pending" && p.action.type !== "question"
                    ) {
                      <button
                        (click)="acceptProposal(p)"
                        class="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm transition-colors"
                      >
                        Apply Action
                      </button>
                    }
                  </div>
                </div>
                @if (p.action.type === "toggle") {
                  <div
                    class="p-4 bg-slate-50 border-t border-white text-sm text-gray-700"
                  >
                    <div class="flex items-start gap-2">
                      <div
                        [class.text-emerald-500]="p.action.targetState"
                        [class.text-orange-500]="!p.action.targetState"
                        class="mt-0.5 font-bold"
                      >
                        {{ p.action.targetState ? "Activate:" : "Hibernate:" }}
                      </div>
                      <div class="font-medium flex-1">
                        "{{
                          getItemDetails(p.action.itemId)?.primaryText ||
                            "Unknown
                target"
                        }}"
                      </div>
                    </div>
                  </div>
                }
                <!-- Modify: before/after diff preview -->
                @if (p.action.type === "modify") {
                  <div
                    class="p-4 bg-slate-50 border-t border-white text-sm space-y-2"
                  >
                    <div class="flex items-start gap-2">
                      <span
                        class="shrink-0 text-xs font-bold uppercase text-red-400 mt-0.5 w-14"
                        >Before</span
                      >
                      <p class="text-gray-500 line-through leading-relaxed">
                        {{
                          getItemDetails($any(p.action).itemId)?.primaryText ||
                            "Original bullet"
                        }}
                      </p>
                    </div>
                    <div class="flex items-start gap-2">
                      <span
                        class="shrink-0 text-xs font-bold uppercase text-emerald-600 mt-0.5 w-14"
                        >After</span
                      >
                      <p
                        class="dark:text-black font-medium leading-relaxed"
                      >
                        {{ $any(p.action).newText }}
                      </p>
                    </div>
                  </div>
                }
                @if (p.action.type === "add_section") {
                  <div
                    class="p-6 bg-slate-50 border-t border-white text-sm text-gray-700 space-y-2"
                  >
                    <!-- Skills -->
                    @if ($any(p.action).sectionType === 1) {
                      <p class="font-semibold text-gray-800">
                        {{ $any(p.action).content.skill_type }}
                      </p>
                      <div class="flex flex-wrap gap-1.5 mt-1">
                        @for (s of $any(p.action).content.skills; track s) {
                          <span
                            class="bg-white border border-gray-200 text-gray-600 text-xs px-2.5 py-1 rounded-full shadow-sm"
                            >{{ s }}</span
                          >
                        }
                      </div>
                    }
                    <!-- Experience -->
                    @if ($any(p.action).sectionType === 2) {
                      <div class="flex justify-between">
                        <span class="font-semibold text-gray-900">{{
                          $any(p.action).content.position
                        }}</span>
                        <span class="text-gray-500 text-xs"
                          >{{ $any(p.action).content.start_date }} -
                          {{ $any(p.action).content.end_date }}</span
                        >
                      </div>
                      <p class="text-indigo-600 font-medium">
                        {{ $any(p.action).content.company }}
                      </p>
                      <ul class="list-disc pl-5 space-y-1 mt-2 text-gray-600">
                        @for (
                          d of $any(p.action).content.descriptions;
                          track d
                        ) {
                          <li>
                            {{ d }}
                          </li>
                        }
                      </ul>
                    }
                    <!-- Projects -->
                    @if ($any(p.action).sectionType === 3) {
                      <p class="font-semibold text-gray-900">
                        {{ $any(p.action).content.project_name }}
                      </p>
                      @if ($any(p.action).content.project_url) {
                        <p class="text-indigo-500 text-xs font-mono truncate">
                          {{ $any(p.action).content.project_url }}
                        </p>
                      }
                      @if ($any(p.action).content.project_tech?.length) {
                        <div class="flex flex-wrap gap-1 mt-1">
                          @for (
                            t of $any(p.action).content.project_tech;
                            track t
                          ) {
                            <span
                              class="bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded"
                              >{{ t }}</span
                            >
                          }
                        </div>
                      }
                      <ul class="list-disc pl-5 space-y-1 mt-2 text-gray-600">
                        @for (
                          d of $any(p.action).content.project_description;
                          track d
                        ) {
                          <li>
                            {{ d }}
                          </li>
                        }
                      </ul>
                    }
                    <!-- Education -->
                    @if ($any(p.action).sectionType === 4) {
                      <div class="flex justify-between">
                        <span class="font-semibold text-gray-900">{{
                          $any(p.action).content.school
                        }}</span>
                        <span class="text-gray-500 text-xs"
                          >{{ $any(p.action).content.start_date }} -
                          {{ $any(p.action).content.end_date }}</span
                        >
                      </div>
                      <p class="text-gray-600">
                        {{ $any(p.action).content.degree }}
                      </p>
                      @if ($any(p.action).content.gpa) {
                        <p class="text-gray-500 text-xs">
                          GPA: {{ $any(p.action).content.gpa }}
                        </p>
                      }
                    }
                    <!-- Achievement -->
                    @if ($any(p.action).sectionType === 5) {
                      <p class="font-semibold text-gray-900">
                        {{ $any(p.action).content.title }}
                      </p>
                      <ul class="list-disc pl-5 space-y-1 mt-1 text-gray-600">
                        @for (
                          d of $any(p.action).content.description;
                          track d
                        ) {
                          <li>
                            {{ d }}
                          </li>
                        }
                      </ul>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>
    </div>
  }

  <!-- Settings Modal \u2014 delegated to ModelConfigComponent -->
  <app-model-config [visible]="showSettings" (close)="closeSettings()" />
</div>
`, styles: ["/* src/app/ai-builder/ai-builder.component.scss */\n/*# sourceMappingURL=ai-builder.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiBuilderComponent, { className: "AiBuilderComponent", filePath: "src/app/ai-builder/ai-builder.component.ts", lineNumber: 36 });
})();
export {
  AiBuilderComponent
};
//# sourceMappingURL=chunk-HI5DR757.js.map
