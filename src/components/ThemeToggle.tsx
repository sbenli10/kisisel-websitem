"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(next: Theme) {
  const root = document.documentElement;
  if (next === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.style.colorScheme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  // İlk mount: localStorage > system tercih
  useEffect(() => {
    setMounted(true);

    const init = () => {
      let initial: Theme = "light";
      try {
        const ls = localStorage.getItem("theme") as Theme | null;
        if (ls === "light" || ls === "dark") initial = ls;
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
          initial = "dark";
      } catch {}
      setTheme(initial);
      applyTheme(initial);
    };

    init();

    // Sistem temasını dinle (kullanıcı OS’den değiştirirse)
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSys = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");
      if (saved) return; // kullanıcı manuel seçmiş → dokunma
      const next: Theme = e.matches ? "dark" : "light";
      setTheme(next);
      applyTheme(next);
    };
    mq.addEventListener?.("change", onSys);
    return () => mq.removeEventListener?.("change", onSys);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const toggle = () => {
    const next: Theme = isDark ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold hover:bg-white/10"
    >
      {isDark ? (
        // Sun
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4V2M12 22v-2M4.93 4.93 3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2m20 0h-2M4.93 19.07 3.51 20.49M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ) : (
        // Moon
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
        </svg>
      )}
      <span className="uppercase">{isDark ? "DARK" : "LIGHT"}</span>
    </button>
  );
}
