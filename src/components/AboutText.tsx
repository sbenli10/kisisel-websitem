// src/components/AboutText.tsx
"use client";
import { useI18n } from "@/i18n/I18nProvider";

export default function AboutText() {
  const { t } = useI18n();

  return (
    <div className="space-y-3 leading-relaxed text-slate-600 dark:text-slate-300">
      <p>{t("about.p1")}</p>
      <p>{t("about.p2")}</p>
      <p>{t("about.p3")}</p>
      <p>{t("about.p4")}</p>
      <p>{t("about.p5")}</p>
    </div>
  );
}
