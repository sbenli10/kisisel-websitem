// src/components/LanguageSwitcher.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node) && !btnRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-1.5 text-sm font-semibold
                   hover:bg-black/[0.04]
                   dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" className="text-sky-500 dark:text-sky-400">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" fill="none" strokeWidth="1.5"/>
          <path d="M2.5 12h19M12 2.5c3.5 3.4 3.5 15.6 0 19M12 2.5c-3.5 3.4-3.5 15.6 0 19" stroke="currentColor" fill="none" strokeWidth="1.2"/>
        </svg>
        <span className="uppercase">{lang}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" className="opacity-70"><path d="M6 9l6 6 6-6" fill="currentColor"/></svg>
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-36 rounded-xl bg-white border border-black/10 shadow-xl p-1
                     dark:bg-slate-900 dark:border-white/10"
        >
          <button
            onClick={() => { setLang("tr"); setOpen(false); }}
            className={`w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-black/[0.04] dark:hover:bg-white/5
                        ${lang === "tr" ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-slate-100"}`}
          >
            Türkçe
          </button>
          <button
            onClick={() => { setLang("en"); setOpen(false); }}
            className={`w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-black/[0.04] dark:hover:bg-white/5
                        ${lang === "en" ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-slate-100"}`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
