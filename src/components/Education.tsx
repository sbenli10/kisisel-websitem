// src/components/Education.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

/* ---------------- Modal ---------------- */
function PDFModal({
  open,
  src,
  title,
  onClose,
}: {
  open: boolean;
  src: string;
  title: string;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  const query = "#zoom=page-width&view=FitH&toolbar=1&navpanes=0";
  const isImage = /\.(jpe?g|png|webp)$/i.test(src);

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => { if (e.target === backdropRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-5xl rounded-2xl border border-black/10 bg-white shadow-2xl overflow-hidden
                      dark:border-white/10 dark:bg-slate-950">
        {/* header */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3
                        bg-white/85 border-b border-black/10
                        dark:bg-slate-900/80 dark:border-white/10">
          <div className="text-sm text-slate-700 dark:text-slate-300 truncate">{src.split("/").pop()}</div>
          <div className="flex items-center gap-2">
            <a href={src} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center rounded-lg border border-black/15 px-3 py-1.5 text-sm font-semibold hover:bg-black/[0.04]
                          dark:border-white/15 dark:hover:bg-white/5">
              {t("education.actions.openNewTab") || "Yeni sekmede aç"}
            </a>
            <a href={src} download
               className="inline-flex items-center rounded-lg bg-emerald-500 text-black px-3 py-1.5 text-sm font-semibold hover:bg-emerald-400">
              {t("education.actions.download") || "İndir"}
            </a>
            <button onClick={onClose} aria-label={t("education.actions.close") || "Kapat"}
                    className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg
                               hover:bg-black/[0.04] dark:hover:bg-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {isImage ? (
          <div className="h-[calc(100svh-120px)] pt-20 pb-4 px-4 md:h-[calc(100svh-140px)]">
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        ) : (
        <iframe
          title={title}
          src={`${src}${query}`}
          className="w-full h-[calc(100svh-120px)] md:h-[calc(100svh-140px)] border-0 pt-[48px]"
        />
        )}
      </div>
    </div>
  );
}

/* --------------- Education Section --------------- */
export default function Education() {
  const { t } = useI18n();
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const certs = [
    { title: t("education.certs.software") || "Yazılım Uzmanlığı Eğitimi", img: "/certificates/aribilgi.png", href: "/docs/KursSertifikasi.pdf" },
    { title: t("education.certs.english") || "İngilizce Dil Sertifikası",    img: "/certificates/publisher.jpg", href: "/docs/ENGL-certika.pdf" },
    { title: t("education.certs.ai")      || "Yapay Zeka ve Makine Öğrenmesi", img: "/certificates/oracle.png",    href: "/docs/oracle.pdf" },
    { title: t("education.certs.javascript"), img: "/img/javascript.jpg", href: "/img/javascript-sertfika.jpg" },
  ];

  return (
    <section id="education" className="border-t border-black/10 dark:border-white/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold"> {t("education.title") || "Eğitim"} </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1"> {t("education.school") || "University of the People"} </p>

        <div className="grid xl:grid-cols-12 gap-6 mt-6">
          {/* Sol: okul kartı */}
          <figure className="xl:col-span-7 rounded-2xl border border-black/10 bg-white/80 overflow-hidden ring-1 ring-black/10
                             dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
            <div className="relative aspect-[16/9]">
              <Image
                src="/certificates/Uopeople.png"
                alt={t("education.school") || "University of the People"}
                fill
                className="object-cover"
                priority
              />
              {/* Light'ta şeffaf, dark'ta hafif karartma */}
              <div className="absolute inset-0 bg-transparent dark:bg-black/35" />
            </div>

            <figcaption className="p-5 md:p-6">
              <div className="text-slate-600 dark:text-slate-300">
                {t("education.program") || "Bilgisayar Bilimleri Lisans Programı"}
              </div>
              <div className="font-semibold mt-1">
                {t("education.dates") || "2026 – Mezuniyet"}
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-black/10 bg-white/80 p-4
                                dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm text-slate-700 dark:text-slate-400 font-semibold">
                    {t("education.relatedCourses") || "İlgili Dersler"}
                  </div>
                  <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                    <li>{t("education.courses.dev") || "Yazılım Geliştirme"}</li>
                    <li>{t("education.courses.data") || "Veri Yapıları"}</li>
                    <li>{t("education.courses.security") || "Ağ Güvenliği"}</li>
                    <li>{t("education.courses.algorithms") || "Algoritmalar"}</li>
                    <li>{t("education.courses.databases") || "Veritabanı Sistemleri"}</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-black/10 bg-white/80 p-4
                                dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm text-slate-700 dark:text-slate-400 font-semibold">
                    {t("education.focusAreas") || "Odak Alanlar"}
                  </div>
                  <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                    <li>{t("education.focus.oop") || "Nesne Yönelimli Programlama"}</li>
                    <li>{t("education.focus.uiux_debug") || "UI/UX ve Hata Ayıklama"}</li>
                    <li>{t("education.focus.ml_basics") || "Makine Öğrenmesi Temelleri"}</li>
                  </ul>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActivePdf("/img/uopeople.png")}
                className="mt-5 flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition-colors hover:border-emerald-500 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10"
              >
                <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <Image src="/img/uopeople.png" alt={t("education.diplomaTitle")} fill sizes="96px" className="object-contain p-1" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-slate-900 dark:text-slate-100">{t("education.diplomaTitle")}</span>
                  <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">{t("education.school")}</span>
                  <span className="mt-2 block text-sm font-medium text-emerald-700 dark:text-emerald-400">{t("education.actions.viewDiploma")}</span>
                </span>
                <span aria-hidden="true" className="text-emerald-600 dark:text-emerald-400">↗</span>
              </button>
            </figcaption>
          </figure>

          {/* Sağ: sertifika kartları */}
          <div className="xl:col-span-5 rounded-2xl border border-black/10 bg-white/80 p-5 md:p-6 ring-1 ring-black/10
                          dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                {t("education.certificatesTitle") || "Kurs Sertifikaları"}
              </h3>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                {(t("education.count") || "").replace("{{count}}", String(certs.length)) || `${certs.length} adet`}
              </span>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {certs.map((c) => (
                <button
                  key={c.title}
                  type="button"
                  disabled={!c.href}
                  onClick={() => setActivePdf(c.href)}
                  className="group text-left h-full rounded-2xl border border-black/10 bg-black/[0.04] hover:bg-black/10 transition
                             overflow-hidden ring-1 ring-black/10 disabled:cursor-default disabled:hover:bg-black/[0.04]
                             dark:border-white/10 dark:bg-slate-900/40 dark:hover:bg-slate-900/55 dark:ring-white/5"
                >
                  <div className="relative aspect-[16/10] bg-black/[0.02] dark:bg-white/[.04]">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-contain p-6 md:p-7"
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-1 min-h-[92px]">
                    <div className="font-medium leading-snug line-clamp-2">{c.title}</div>
                    <div className="text-emerald-600 dark:text-emerald-400 text-sm">
                      {c.href ? t("education.actions.view") : t("education.actions.pending")}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PDFModal open={!!activePdf} src={activePdf ?? ""} title={activePdf === "/img/uopeople.png" ? t("education.diplomaTitle") : certs.find((c) => c.href === activePdf)?.title ?? ""} onClose={() => setActivePdf(null)} />
    </section>
  );
}
