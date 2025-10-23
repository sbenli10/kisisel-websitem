// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import ThemeToggle from "./ThemeToggle";

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="transition-colors hover:text-slate-900/80 dark:hover:ext-slate-900 dark:text-slate-100/90"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const closeMenu = () => setOpen(false);

  return (
    <header
      className="
        sticky top-0 z-50 backdrop-blur
        supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60
        border-b border-black/10 dark:border-white/10
      "
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onClick={closeMenu}
          className="font-extrabold tracking-tight text-lg md:text-xl"
        >
          Said&nbsp;Benli<span className="text-emerald-500 dark:text-emerald-400"></span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-5">
          <NavLink href="#about">{t("nav.about")}</NavLink>
          <NavLink href="#education">Eğitim</NavLink>
          <NavLink href="#projects">{t("nav.projects")}</NavLink>
          <NavLink href="#skills">{t("hero.ctaSkills")}</NavLink>
          <NavLink href="/cv">{t("nav.resume")}</NavLink>
          <NavLink href="#contact">{t("nav.contact")}</NavLink>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="
            sm:hidden inline-flex items-center rounded-xl
            border border-black/15 dark:border-white/15
            px-3 py-2 font-semibold
            hover:bg-black/[0.04] dark:hover:bg-white/5
            transition-colors
          "
        >
          Menü
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          role="menu"
          className="
            sm:hidden border-t
            border-black/10 dark:border-white/10
            bg-white/80 dark:bg-slate-900/80
            backdrop-blur
          "
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <NavLink href="#about" onClick={closeMenu}>
              {t("nav.about")}
            </NavLink>
            <NavLink href="#education" onClick={closeMenu}>
              Eğitim
            </NavLink>
            <NavLink href="#projects" onClick={closeMenu}>
              {t("nav.projects")}
            </NavLink>
            <NavLink href="#skills" onClick={closeMenu}>
              {t("hero.ctaSkills")}
            </NavLink>
            <NavLink href="/cv" onClick={closeMenu}>
              {t("nav.resume")}
            </NavLink>
            <NavLink href="#contact" onClick={closeMenu}>
              {t("nav.contact")}
            </NavLink>

            <div className="mt-2 flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
