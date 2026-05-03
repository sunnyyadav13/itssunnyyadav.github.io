"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sunny-theme-mode";

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  function toggleMode() {
    const nextMode = mode === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextMode;
    window.localStorage.setItem(STORAGE_KEY, nextMode);
    setMode(nextMode);
  }

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:border-foreground"
      aria-label="Toggle between light and dark mode"
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          mode === "dark" ? "bg-foreground" : "bg-[#5e7d91]"
        }`}
      />
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
