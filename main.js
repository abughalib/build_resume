import {
  NotificationService,
  ThemeService
} from "./chunk-MHJRZF2E.js";
import {
  CommonModule,
  Component,
  DataService,
  NgClass,
  RouterOutlet,
  bootstrapApplication,
  inject,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  withHashLocation,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DBFX2V6R.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-MYA6XT6X.js").then((m) => m.ManualBuilderComponent)
  },
  {
    path: "ai",
    loadComponent: () => import("./chunk-HI5DR757.js").then((m) => m.AiBuilderComponent)
  },
  {
    path: "build_resume",
    redirectTo: "",
    pathMatch: "full"
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    DataService
  ]
};

// src/app/components/notification-host.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-emerald-50 border-emerald-200 text-emerald-800": a0, "bg-red-50    border-red-200    text-red-800": a1, "bg-slate-50  border-slate-200  text-slate-700": a2 });
function NotificationHostComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function NotificationHostComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 6);
    \u0275\u0275element(1, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function NotificationHostComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function NotificationHostComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function NotificationHostComponent_For_2_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ns.dismiss(t_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275conditionalCreate(2, NotificationHostComponent_For_2_Conditional_2_Template, 2, 0, ":svg:svg", 5);
    \u0275\u0275conditionalCreate(3, NotificationHostComponent_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 6);
    \u0275\u0275conditionalCreate(4, NotificationHostComponent_For_2_Conditional_4_Template, 2, 0, ":svg:svg", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c0, t_r2.type === "success", t_r2.type === "error", t_r2.type === "info"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(t_r2.type === "success" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r2.type === "error" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r2.type === "info" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
function NotificationHostComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function NotificationHostComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ns.resolveConfirm(false));
    });
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275listener("click", function NotificationHostComponent_Conditional_3_Template_div_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 18);
    \u0275\u0275element(6, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 20);
    \u0275\u0275text(8, "Are you sure?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "button", 23);
    \u0275\u0275listener("click", function NotificationHostComponent_Conditional_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ns.resolveConfirm(false));
    });
    \u0275\u0275text(13, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 24);
    \u0275\u0275listener("click", function NotificationHostComponent_Conditional_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ns.resolveConfirm(true));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const dialog_r5 = ctx;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", dialog_r5.message, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", dialog_r5.confirmLabel, " ");
  }
}
var NotificationHostComponent = class _NotificationHostComponent {
  ns = inject(NotificationService);
  trackById(_, t) {
    return t.id;
  }
  static \u0275fac = function NotificationHostComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationHostComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationHostComponent, selectors: [["app-notification-host"]], decls: 4, vars: 1, consts: [[1, "fixed", "bottom-5", "right-5", "z-[99999]", "flex", "flex-col", "gap-3", "pointer-events-none"], [1, "pointer-events-auto", "flex", "items-start", "gap-3", "min-w-[280px]", "max-w-sm", "px-4", "py-3.5", "rounded-xl", "shadow-xl", "border", "cursor-pointer", "select-none", "transition-all", "duration-300", "animate-slide-up", 3, "ngClass"], [1, "fixed", "inset-0", "z-[99998]", "flex", "items-center", "justify-center"], [1, "pointer-events-auto", "flex", "items-start", "gap-3", "min-w-[280px]", "max-w-sm", "px-4", "py-3.5", "rounded-xl", "shadow-xl", "border", "cursor-pointer", "select-none", "transition-all", "duration-300", "animate-slide-up", 3, "click", "ngClass"], [1, "shrink-0", "mt-0.5"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-emerald-500"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-red-500"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-slate-400"], [1, "text-sm", "font-medium", "leading-snug", "flex-1"], [1, "shrink-0", "text-current", "opacity-40", "hover:opacity-70", "text-lg", "leading-none", "mt-[-2px]"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", "clip-rule", "evenodd"], [1, "fixed", "inset-0", "z-[99998]", "flex", "items-center", "justify-center", 3, "click"], [1, "absolute", "inset-0", "bg-gray-900/40", "backdrop-blur-sm"], [1, "relative", "bg-white", "rounded-2xl", "shadow-2xl", "w-[400px]", "max-w-[90vw]", "p-6", "border", "border-gray-100", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "flex-shrink-0", "bg-amber-50", "rounded-full", "p-2.5"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-amber-500"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "text-base", "font-bold", "text-gray-800"], [1, "text-sm", "text-gray-600", "leading-relaxed", "mb-6"], [1, "flex", "justify-end", "gap-3"], [1, "px-5", "py-2", "text-sm", "font-medium", "text-gray-600", "bg-white", "border", "border-gray-200", "rounded-lg", "hover:bg-gray-50", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-gray-200", 3, "click"], [1, "px-5", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-500", "hover:bg-red-600", "rounded-lg", "shadow-sm", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-red-400", 3, "click"]], template: function NotificationHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, NotificationHostComponent_For_2_Template, 9, 9, "div", 1, ctx.trackById, true);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, NotificationHostComponent_Conditional_3_Template, 16, 2, "div", 2);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.ns.toasts());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.ns.confirmDialog()) ? 3 : -1, tmp_1_0);
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-up 0.25s ease-out both;\n}\n/*# sourceMappingURL=notification-host.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationHostComponent, [{
    type: Component,
    args: [{ selector: "app-notification-host", standalone: true, imports: [CommonModule], template: `<!-- \u2500\u2500 Toast Stack (bottom-right) \u2500\u2500 -->
<div
  class="fixed bottom-5 right-5 z-[99999] flex flex-col gap-3 pointer-events-none"
>
  @for (t of ns.toasts(); track trackById($index, t)) {
    <div
      (click)="ns.dismiss(t.id)"
      class="pointer-events-auto flex items-start gap-3 min-w-[280px] max-w-sm px-4 py-3.5 rounded-xl shadow-xl border cursor-pointer select-none transition-all duration-300 animate-slide-up"
      [ngClass]="{
        'bg-emerald-50 border-emerald-200 text-emerald-800':
          t.type === 'success',
        'bg-red-50    border-red-200    text-red-800': t.type === 'error',
        'bg-slate-50  border-slate-200  text-slate-700': t.type === 'info',
      }"
    >
      <!-- Icon -->
      <div class="shrink-0 mt-0.5">
        @if (t.type === "success") {
          <svg
            class="h-5 w-5 text-emerald-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        }
        @if (t.type === "error") {
          <svg
            class="h-5 w-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        }
        @if (t.type === "info") {
          <svg
            class="h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        }
      </div>
      <!-- Message -->
      <p class="text-sm font-medium leading-snug flex-1">{{ t.message }}</p>
      <!-- Dismiss X -->
      <span
        class="shrink-0 text-current opacity-40 hover:opacity-70 text-lg leading-none mt-[-2px]"
        >\xD7</span
      >
    </div>
  }
</div>

<!-- \u2500\u2500 Confirm Dialog \u2500\u2500 -->
@if (ns.confirmDialog(); as dialog) {
  <div
    class="fixed inset-0 z-[99998] flex items-center justify-center"
    (click)="ns.resolveConfirm(false)"
  >
    <!-- Backdrop blur -->
    <div class="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"></div>
    <!-- Panel \u2014 stop propagation so clicking inside doesn't dismiss -->
    <div
      class="relative bg-white rounded-2xl shadow-2xl w-[400px] max-w-[90vw] p-6 border border-gray-100"
      (click)="$event.stopPropagation()"
    >
      <!-- Icon -->
      <div class="flex items-center gap-3 mb-4">
        <div class="flex-shrink-0 bg-amber-50 rounded-full p-2.5">
          <svg
            class="h-5 w-5 text-amber-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="text-base font-bold text-gray-800">Are you sure?</h3>
      </div>
      <p class="text-sm text-gray-600 leading-relaxed mb-6">
        {{ dialog.message }}
      </p>
      <div class="flex justify-end gap-3">
        <button
          (click)="ns.resolveConfirm(false)"
          class="px-5 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Cancel
        </button>
        <button
          (click)="ns.resolveConfirm(true)"
          class="px-5 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          {{ dialog.confirmLabel }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ["/* angular:styles/component:scss;acbc5f1a0a83987399bfd7158ff305671fb6832934d42d715188bf2929f3b77e;/home/abugh/Projects/Resume_Builder/src/app/components/notification-host.component.ts */\n@keyframes slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-slide-up {\n  animation: slide-up 0.25s ease-out both;\n}\n/*# sourceMappingURL=notification-host.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationHostComponent, { className: "NotificationHostComponent", filePath: "src/app/components/notification-host.component.ts", lineNumber: 28 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "Resume Builder";
  // Inject to trigger initialization — applies dark/light class to <html> at boot
  themeService = inject(ThemeService);
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-notification-host");
    }
  }, dependencies: [RouterOutlet, NotificationHostComponent], styles: ["\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NotificationHostComponent], template: "<router-outlet></router-outlet>\n<app-notification-host></app-notification-host>\n", styles: ["/* src/app/app.component.scss */\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
