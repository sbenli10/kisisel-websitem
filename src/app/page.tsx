// src/app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

import Section from "@/components/Section";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import AboutText from "@/components/AboutText";
import { useI18n } from "@/i18n/I18nProvider";

export default function HomePage() {
  const { t } = useI18n();

  const projects = useMemo<Project[]>(
    () => [
      {
        title: t("projects.items.quiz.title") || "Bilgi Yarışması",
        desc:
          t("projects.items.quiz.desc") ||
          "Çoktan seçmeli soru motoru, zamanlayıcı ve puanlama ile.",
        source: "https://github.com/sbenli10/BilgiYarismasi.git",
        image: "/portfolio/quizapp.png",
        tags: ["TS/JS", "HTML", "CSS"],
      },
      {
        title: t("projects.items.checkers.title") || "Dama Uygulaması",
        desc:
          t("projects.items.checkers.desc") ||
          "Hamle doğrulama ve çok oyunculu mod.",
        source: "https://github.com/sbenli10/DamaUygulamas-.git",
        image: "/portfolio/damauygulamasi.png",
        tags: ["C#", ".NET"],
      },
      {
        title: t("projects.items.inventory.title") || "Stok Uygulaması",
        desc:
          t("projects.items.inventory.desc") ||
          "CRUD, filtreleme ve raporlama.",
        source: "https://github.com/sbenli10/StokMaster.git",
        image: "/portfolio/stokuygulamasi.png",
        tags: ["C#", "SQL"],
      },
      {
        title: t("projects.items.carSite.title") || "Araba Sitesi",
        desc:
          t("projects.items.carSite.desc") ||
          "Araç listeleme ve detay sayfaları.",
        source: "https://github.com/sbenli10/Voltrix-Araba-Sitesi.git",
        image: "/portfolio/arabaSitesi.png",
        tags: ["HTML", "Bootstrap"],
      },
    ],
    [t]
  );

  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-clip bg-gradient-to-b
                   from-white to-slate-50
                   dark:from-slate-900 dark:to-slate-950"
      >
        <div className="pointer-events-none absolute inset-0
                        bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(56,189,248,.12),transparent_60%),radial-gradient(800px_400px_at_110%_10%,rgba(16,185,129,.10),transparent_60%)]" />

        <div className="container mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <span className="inline-flex items-center rounded-full
                             border border-black/10 bg-black/[0.04]
                             px-3 py-1 text-sm
                             dark:border-white/10 dark:bg-white/5">
              {t("hero.badgeLeft") || "Portföy"}{" "}
              <span className="mx-2 opacity-40">•</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {t("hero.badgeRight") || "Yazılımcı"}
              </span>
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              {t("hero.greeting") || "Ben"}{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                {t("hero.title") || "Said Benli"}
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              {t("hero.subtitle") ||
                "Yazılım geliştirme, yapay zekâ ve veri yapıları üzerine odaklanan bir geliştiriciyim. Aşağıda çalışmalarım ve teknik becerilerimden öne çıkan örnekleri bulabilirsin."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                {t("hero.ctaProjects") || "Projeleri Gör"}
              </a>
              <a href="#skills" className="btn btn-outline">
                {t("hero.ctaSkills") || "Beceriler"}
              </a>
              <a href="/cv" className="btn btn-outline">
                {t("hero.ctaResume") || "Özgeçmiş"}
              </a>
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

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="justify-self-center"
          >
            <Image
              src="/img/profil.jpeg"
              alt="Said Benli profil fotoğrafı"
              width={440}
              height={400}
              priority
              className="rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* HAKKIMDA */}
      <Section id="about" title={t("about.title") || "Hakkımda"}>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <AboutText />
          </div>
          <div className="lg:col-span-5">
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              [t("about.info.phoneLabel") || "Telefon", "+90 555 896 5990"],
              [t("about.info.cityLabel") || "Şehir", t("about.info.cityValue") || "İstanbul, Türkiye"],
              [t("about.info.emailLabel") || "E-posta", "benlisaid2@gmail.com"],
              [t("about.info.statusLabel") || "Durum", t("about.info.statusValue") || "Yeni projelere açık"],
            ].map(([k, v]) => (
              <li
                key={k as string}
                className="rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {k}
                </div>
                <div className="font-semibold">{v as string}</div>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </Section>

      {/* EĞİTİM + SERTİFİKALAR */}
      <Education />

      {/* PROJELER */}
      <Section
        id="projects"
        title={t("projects.title") || "Projeler"}
        subtitle={t("projects.subtitle") || "Seçili çalışmalarım"}
        dividerTop
      >
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* BECERİLER */}
      <Skills />

      {/* İLETİŞİM */}
      <Section id="contact" title={t("contact.title") || "İletişim"}>
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6
                        dark:border-white/10 dark:bg-white/5">
          <h3 className="font-semibold">
            {t("contact.subtitle") || "Benimle iletişime geç"}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mt-1">
            E-posta, telefon veya form ile ulaşabilirsin.
          </p>

          <form
            action="https://formspree.io/f/xblorwln"
            method="POST"
            acceptCharset="UTF-8"
            target="_blank"
            className="mt-4 space-y-3"
          >
            <input type="hidden" name="_subject" value="Portföy İletişim Formu" />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="c_name" className="block text-sm text-slate-500 dark:text-slate-400 mb-1">
                  {t("contact.name") || "Ad Soyad"}
                </label>
                <input id="c_name" name="name" required className="input" placeholder="Adınız" />
              </div>
              <div>
                <label htmlFor="c_email" className="block text-sm text-slate-500 dark:text-slate-400 mb-1">
                  {t("contact.email") || "E-posta"}
                </label>
                <input id="c_email" type="email" name="email" required className="input" placeholder="ornek@mail.com" />
              </div>
            </div>

            <div>
              <label htmlFor="c_msg" className="block text-sm text-slate-500 dark:text-slate-400 mb-1">
                {t("contact.message") || "Mesaj"}
              </label>
              <textarea id="c_msg" name="message" required rows={5} className="input" placeholder="Mesajınızı yazın..." />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button type="submit" className="btn btn-primary">
                {t("contact.send") || "Gönder"}
              </button>
              <a href="mailto:benlisaid2@gmail.com" className="btn btn-outline">
                Email Gönder
              </a>
              <a
                href="tel:+905558965990"
                className="underline decoration-dotted hover:text-slate-800 dark:hover:text-slate-200"
              >
                +90 555 896 5990
              </a>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bu form Formspree ile gönderilir; teşekkür sayfası yeni sekmede açılır.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}
