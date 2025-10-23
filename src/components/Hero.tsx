// src/components/Hero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
 // const [open] = useState(false); // (modal kullanmıyorsan silebilirsin)

  return (
    <section
      id="hero"
      className="
        relative overflow-clip
        bg-gradient-to-b
        from-white to-slate-100
        dark:from-slate-900 dark:to-slate-950
      "
    >
      {/* arka plan ışıkları */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(2,132,199,.10),transparent_60%),radial-gradient(800px_400px_at_110%_10%,rgba(16,185,129,.10),transparent_60%)]
          dark:bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(56,189,248,.12),transparent_60%),radial-gradient(800px_400px_at_110%_10%,rgba(16,185,129,.10),transparent_60%)]
        "
      />

      <div className="container mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center relative">
        {/* LEFT */}
        <div>
          <span
            className="
              inline-flex items-center rounded-full
              border border-black/10 bg-black/[0.04]
              dark:border-white/10 dark:bg-white/5
              px-3 py-1 text-sm
            "
          >
            {t("hero.badgeLeft")}
            <span className="mx-2 opacity-40">•</span>
            <span className="text-emerald-600 dark:text-emerald-400">
              {t("hero.badgeRight")}
            </span>
          </span>

          <h1
            className="
              mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight
              text-slate-900 dark:text-slate-100
            "
          >
            {t("hero.greeting")}{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {t("hero.title")}
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            {t("hero.subtitle")}
          </p>

          {/* BUTONLAR + SOSYAL LİNKLER */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">{t("hero.ctaProjects")}</a>
            <a href="#skills" className="btn btn-outline">{t("hero.ctaSkills")}</a>
            <Link href="/cv" className="btn btn-outline">{t("hero.ctaResume")}</Link>

            
            {/* GitHub */}
              <a
                href="https://github.com/sbenli10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="GitHub profilim"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="mr-1">
                  <path
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.17-3.37-1.17-.46-1.15-1.12-1.46-1.12-1.46-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.93.84.09-.66.35-1.1.63-1.36-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.93.68 1.88v2.78c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                    className="fill-current"
                  />
                </svg>
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/saidbenli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="LinkedIn profilim"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="mr-1">
                  <path
                    className="fill-current"
                    d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5Zm.02 5.5H2V22h3V9ZM9 9H6v13h3v-7.2c0-1.94 1.02-3.2 2.67-3.2 1.22 0 2.33.88 2.33 2.96V22h3v-7.92C17 10.03 15.38 9 13.64 9 12.25 9 11.2 9.65 10.7 10.5H10.6V9Z"
                  />
                </svg>
                LinkedIn
              </a>

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
            alt="Said Benli"
            width={440}
            height={440}
            priority
            unoptimized
            className="rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
