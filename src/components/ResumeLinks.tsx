// src/components/ResumeLinks.tsx
export default function ResumeLinks() {
  return (
    <section id="resume" className="border-t border-white/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold">Özgeçmiş ve Bağlantılar</h2>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {/* CV Kartı */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold">Özgeçmiş</div>
            <p className="text-slate-400 mt-1">
              İndirilebilir güncel özgeçmişimi buradan görüntüleyebilirsiniz.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="/docs/CV.pdf"
                target="_blank"
                className="inline-flex items-center rounded-xl bg-emerald-500 text-black px-3 py-2 font-semibold hover:bg-emerald-400"
              >
                Türkçe (PDF)
              </a>
              <a
                href="/docs/MyCV_en.pdf"
                target="_blank"
                className="inline-flex items-center rounded-xl border border-white/15 px-3 py-2 font-semibold hover:bg-white/5"
              >
                English (PDF)
              </a>
            </div>
          </div>

          {/* GitHub Kartı */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold">GitHub Projelerim</div>
            <p className="text-slate-400 mt-1">
              Yapay zekâ, yazılım geliştirme ve veri yapıları üzerine projelerimi GitHub üzerinden
              inceleyebilirsiniz.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/sbenli10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white/10 px-3 py-2 font-semibold hover:bg-white/20"
              >
                GitHub Profilim
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
