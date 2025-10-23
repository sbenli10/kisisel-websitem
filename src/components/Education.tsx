// src/components/Education.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

/* ---------------- Modal ---------------- */
function PDFModal({
  open,
  src,
  onClose,
}: {
  open: boolean;
  src: string;
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

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
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

        {/* PDF */}
        <iframe
          title="Sertifika PDF"
          src={`${src}${query}`}
          className="w-full h-[calc(100svh-120px)] md:h-[calc(100svh-140px)] border-0 pt-[48px]"
        />
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
                {t("education.dates") || "Ekim 2023 – Devam Ediyor"}
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
                  onClick={() => setActivePdf(c.href)}
                  className="group text-left h-full rounded-2xl border border-black/10 bg-black/[0.04] hover:bg-black/10 transition
                             overflow-hidden ring-1 ring-black/10
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
                      {t("education.actions.view") || "Sertifikayı Görüntüle"}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PDFModal open={!!activePdf} src={activePdf ?? ""} onClose={() => setActivePdf(null)} />
    </section>
  );
}
