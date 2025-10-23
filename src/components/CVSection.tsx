export default function CVSection() {
  const cvs = [
    { lang: "Türkçe CV", href: "/docs/CV.pdf", desc: "PDF • TR" },
    { lang: "English CV", href: "/docs/MyCV_en.pdf", desc: "PDF • EN" },
  ];
  return (
    <section id="cv" className="border-t border-white/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold">Özgeçmiş</h2>
        <p className="text-slate-400 mt-1">Türkçe ve İngilizce CV’lerim</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {cvs.map((c) => (
            <a
              key={c.lang}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="text-lg font-semibold">{c.lang}</div>
              <div className="text-slate-400">{c.desc}</div>
              <div className="mt-3 inline-flex items-center rounded-xl bg-emerald-500 text-black px-3 py-2 font-semibold hover:bg-emerald-400">
                Görüntüle / İndir
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
