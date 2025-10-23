"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
// Eğer dosyaları src/app/locales altında tutuyorsan:
import tr from "@/locales/tr.json";
import en from "@/locales/en.json";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Lang = "tr" | "en";
type Dict = Record<string, any>;

type I18nCtx = {
  lang: Lang;
  dict: Dict;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

function deepGet(o: Dict, path: string) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), o);
}
function dictFor(lang: Lang): Dict {
  return lang === "en" ? (en as Dict) : (tr as Dict);
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const initial =
    ((sp.get("lang") as Lang) ||
      (typeof window !== "undefined" ? ((localStorage.getItem("lang") as Lang) || "tr") : "tr")) as Lang;

  const [lang, _setLang] = useState<Lang>(initial);
  const dict = useMemo(() => dictFor(lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (next: Lang) => {
    _setLang(next);
    const q = new URLSearchParams(sp.toString());
    q.set("lang", next);
    router.replace(`${pathname}?${q.toString()}`, { scroll: false });
  };

  const t = (key: string) => {
    const v = deepGet(dict, key);
    return typeof v === "string" ? v : key;
  };

  const value = useMemo(() => ({ lang, dict, setLang, t }), [lang, dict]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
};
