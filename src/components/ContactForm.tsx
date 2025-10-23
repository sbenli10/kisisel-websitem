// src/components/Hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Modal odak yönetimi ve scroll kilidi
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  // Modal kapandığında tetikleyiciye odak dönsün
  const handleClose = () => {
    setOpen(false);
    queueMicrotask(() => triggerRef.current?.focus());
  };

  return (
    <section
      id="hero"
      className="relative overflow-clip bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
    >
      {/* Dekoratif arka plan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(56,189,248,.12),transparent_60%),radial-gradient(800px_400px_at_110%_10%,rgba(16,185,129,.10),transparent_60%)]" />

      <div className="container mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center relative">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-sm dark:border-white/10 dark:bg-white/5">
            Portföy <span className="mx-2 opacity-40">•</span>
            <span className="text-emerald-600 dark:text-emerald-400">Yazılımcı</span>
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Ben <span className="text-emerald-600 dark:text-emerald-400">Said Benli</span>
          </h1>

          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            Yazılım geliştirme, yapay zekâ ve veri yapıları odaklı bir geliştiriciyim. Aşağıda eğitim,
            projeler ve becerilerden bir seçkiye göz atabilirsin.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">Projeleri Gör</a>
            <Link href="/docs/CV.pdf" className="btn btn-outline">Özgeçmiş</Link>
            <button
              ref={triggerRef}
              onClick={() => setOpen(true)}
              className="btn btn-outline"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="contact-modal"
            >
              İletişime Geç
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="justify-self-center"
        >
          <Image
            src="/profil.jpeg"
            alt="Said Benli profil fotoğrafı"
            width={440}
            height={440}
            priority
            className="rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
          />
        </motion.div>
      </div>

      {/* ===== Modal ===== */}
      <AnimatePresence>
        {open && (
          <ModalContact id="contact-modal" onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ========================= Modal Bileşeni ========================= */
function ModalContact({ id, onClose }: { id: string; onClose: () => void }) {
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Açılışta ilk alana odaklan, ESC ve dış tıklama ile kapat
  useEffect(() => {
    firstFieldRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Basit focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
      }
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) onClose();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      id={id}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-black/10 shadow-2xl dark:bg-slate-900 dark:border-white/10"
        initial={{ y: 22, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } }}
        exit={{ y: 10, scale: 0.98, opacity: 0, transition: { duration: 0.18 } }}
      >
        {/* Üst başlık şeridi */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-sky-500/15" />
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 dark:border-white/10">
            <h2 id={`${id}-title`} className="text-base font-semibold">
              Benimle iletişime geç
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg px-3 py-1.5 text-sm hover:bg-black/[0.04] dark:hover:bg-white/10"
              aria-label="Kapat"
            >
              Kapat
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/xblorwln"
          method="POST"
          acceptCharset="UTF-8"
          target="_blank"
          className="p-5 md:p-6 space-y-4"
        >
          {/* Formspree yardımcı alanları */}
          <input type="hidden" name="_subject" value="Portföy İletişim Formu" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="c_name" className="block text-sm text-slate-600 dark:text-slate-400 mb-1">
                Ad Soyad
              </label>
              <input id="c_name" name="name" required className="input" placeholder="Adınız" ref={firstFieldRef} />
            </div>
            <div>
              <label htmlFor="c_email" className="block text-sm text-slate-600 dark:text-slate-400 mb-1">
                E-posta
              </label>
              <input id="c_email" type="email" name="email" required className="input" placeholder="ornek@mail.com" />
            </div>
          </div>

          <div>
            <label htmlFor="c_subject" className="block text-sm text-slate-600 dark:text-slate-400 mb-1">
              Konu (opsiyonel)
            </label>
            <input id="c_subject" name="subject" className="input" placeholder="Konu" />
          </div>

          <div>
            <label htmlFor="c_msg" className="block text-sm text-slate-600 dark:text-slate-400 mb-1">
              Mesaj
            </label>
            <textarea id="c_msg" name="message" required rows={6} className="input" placeholder="Mesajınızı yazın..." />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Bu form Formspree ile gönderilir; teşekkür sayfası yeni sekmede açılır.
            </p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={onClose} className="btn btn-outline">Vazgeç</button>
              <button type="submit" className="btn btn-primary">Gönder</button>
            </div>
          </div>

          {/* Alternatif iletişim yolları */}
          <div className="pt-3 flex flex-wrap gap-2">
            <a href="mailto:benlisaid2@gmail.com" className="underline decoration-dotted hover:text-slate-800 dark:hover:text-slate-200">
              E-posta ile iletişim
            </a>
            <span className="opacity-40">•</span>
            <a href="tel:+905558965990" className="underline decoration-dotted hover:text-slate-800 dark:hover:text-slate-200">
              +90 555 896 5990
            </a>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
