import {
  Injectable,
  LlmSettingsService,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-DBFX2V6R.js";

// src/app/services/notification.service.ts
var NotificationService = class _NotificationService {
  toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : (
    /* istanbul ignore next */
    []
  ));
  confirmDialog = signal(null, ...ngDevMode ? [{ debugName: "confirmDialog" }] : (
    /* istanbul ignore next */
    []
  ));
  nextId = 1;
  toastTimers = /* @__PURE__ */ new Map();
  /** Show a dismissable toast notification */
  toast(message, type = "info", durationMs = 4e3) {
    const id = this.nextId++;
    this.toasts.update((ts) => [...ts, { id, message, type }]);
    const timer = setTimeout(() => this.dismiss(id), durationMs);
    this.toastTimers.set(id, timer);
  }
  dismiss(id) {
    const timer = this.toastTimers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.toastTimers.delete(id);
    }
    this.toasts.update((ts) => ts.filter((t) => t.id !== id));
  }
  /** Show a confirm dialog, returns a Promise<boolean> */
  confirm(message, confirmLabel = "Confirm") {
    return new Promise((resolve) => {
      const id = this.nextId++;
      this.confirmDialog.set({ id, message, confirmLabel, resolve });
    });
  }
  resolveConfirm(result) {
    const dialog = this.confirmDialog();
    if (dialog) {
      dialog.resolve(result);
      this.confirmDialog.set(null);
    }
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  llmSettings = inject(LlmSettingsService);
  _resolved = signal("light", ...ngDevMode ? [{ debugName: "_resolved" }] : (
    /* istanbul ignore next */
    []
  ));
  resolvedTheme = this._resolved.asReadonly();
  mediaQuery = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  constructor() {
    this.applyTheme(this.llmSettings.getPreferences().darkMode);
    this.mediaQuery?.addEventListener("change", () => {
      const pref = this.llmSettings.getPreferences().darkMode;
      if (pref === "system")
        this.applyTheme("system");
    });
  }
  setTheme(mode) {
    this.llmSettings.updatePreference("darkMode", mode);
    this.applyTheme(mode);
  }
  getTheme() {
    return this.llmSettings.getPreferences().darkMode;
  }
  toggleTheme() {
    const current = this.getTheme();
    if (current === "light")
      this.setTheme("dark");
    else if (current === "dark")
      this.setTheme("system");
    else
      this.setTheme("light");
  }
  applyTheme(mode) {
    const isDark = mode === "dark" || mode === "system" && this.mediaQuery?.matches === true;
    this._resolved.set(isDark ? "dark" : "light");
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  NotificationService,
  ThemeService
};
//# sourceMappingURL=chunk-MHJRZF2E.js.map
