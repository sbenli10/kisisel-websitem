// src/app/cv/page.tsx
"use client";
import { useState, useMemo } from "react";

type Lang = "TR" | "EN";

export default function CVPage() {
  const [lang, setLang] = useState<Lang>("TR");
  const pdfSrc = useMemo(
    () => (lang === "TR" ? "/docs/CV.pdf" : "/docs/MyCV_en.pdf"),
    [lang]
  );

  // Navbar + başlık/padding payı kadar düş
  const HEIGHT = "calc(100dvh - 220px)"; // <-- svh yerine dvh

  // Not: iOS Safari iframe içindeki #zoom parametrelerini her zaman uygulamaz.
  const query = "#toolbar=1&navpanes=0";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-extrabold">Resume / Özgeçmiş</h1>

          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-xl border border-white/10 p-1 bg-white/5">
              <button
                onClick={() => setLang("TR")}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                  lang === "TR" ? "bg-white/90 text-black" : "hover:bg-white/10"
                }`}
              >
                Türkçe
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                  lang === "EN" ? "bg-white/90 text-black" : "hover:bg-white/10"
                }`}
              >
                English
              </button>
            </div>

            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/15 px-3 py-2 text-sm font-semibold hover:bg-white/5"
            >
              Yeni sekmede aç
            </a>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <iframe
            title="Resume PDF"
            src={`${pdfSrc}${query}`}
            className="w-full border-0 min-h-[60vh]"   // küçük bir güvenli alt sınır
            // Tailwind yerine inline style ile yükseklik
            style={{ height: HEIGHT }}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
