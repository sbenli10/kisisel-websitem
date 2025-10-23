export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-white/10" aria-labelledby="site-footer">
      <div id="site-footer" className="sr-only">Sitede alt bilgi</div>
      <div className="container-grid py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          © <time dateTime={`${year}`}>{year}</time> Said Benli
        </p>
        <p className="flex items-center gap-2">
          <span className="hidden sm:inline">İstanbul</span>
          <a
            className="underline decoration-dotted hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400/60 rounded"
            href="#hero"
            aria-label="Sayfanın başına dön"
          >
            Yukarı
          </a>
        </p>
      </div>
    </footer>
  )
}
