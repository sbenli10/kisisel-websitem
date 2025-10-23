// src/components/LanguageSwitcher.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = "lang-switcher-menu";

  // ESC ve dışarı tıklama ile kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current?.contains(t) && !btnRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const choose = (code: "tr" | "en") => {
    setLang(code);
    setOpen(false);
    // butona odak geri (klavye için)
    btnRef.current?.focus();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-1.5 text-sm font-semibold
                   hover:bg-black/[0.04]
                   dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      >
        {/* globe */}
        <svg width="18" height="18" viewBox="0 0 24 24" className="text-sky-500 dark:text-sky-400">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" fill="none" strokeWidth="1.5"/>
          <path d="M2.5 12h19M12 2.5c3.5 3.4 3.5 15.6 0 19M12 2.5c-3.5 3.4-3.5 15.6 0 19" stroke="currentColor" fill="none" strokeWidth="1.2"/>
        </svg>
        <span className="uppercase">{lang}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" className="opacity-70">
          <path d="M6 9l6 6 6-6" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <div
          id={menuId}
          ref={menuRef}
          role="menu"
          aria-labelledby={menuId}
          // 👇 mobilde taşmayı engeller
          className="absolute right-0 top-full mt-2 z-50 min-w-[8rem] max-w-[85vw]
                     rounded-xl border border-black/10 bg-white/90 p-1 shadow-xl backdrop-blur-md
                     dark:border-white/10 dark:bg-slate-900/90"
        >
          <button
            role="menuitem"
            onClick={() => choose("tr")}
            className={`block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-black/[0.04] dark:hover:bg-white/5
                        ${lang === "tr" ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-slate-100"}`}
          >
            Türkçe
          </button>
          <button
            role="menuitem"
            onClick={() => choose("en")}
            className={`block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-black/[0.04] dark:hover:bg-white/5
                        ${lang === "en" ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-slate-100"}`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
