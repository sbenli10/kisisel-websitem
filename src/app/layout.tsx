// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Suspense } from "react";

import Navbar from "@/components/Navbar";
import I18nProvider from "@/i18n/I18nProvider";
import { ThemeProvider } from "next-themes";
import ThemeScript from "@/components/ThemeScript";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Said Benli • Portföy",
  description:
    "Said Benli - Yazılım Geliştirici ve Yapay Zekâ meraklısı. Projeler, eğitim ve iletişim.",
  metadataBase: new URL("https://sbenli10.github.io"),
  openGraph: {
    type: "website",
    url: "https://sbenli10.github.io/",
    title: "Said Benli • Portföy",
    description:
      "Yazılım Geliştirici ve Yapay Zekâ meraklısı. Projeler, eğitim ve iletişim.",
    images: [{ url: "/img/og-cover.jpg" }],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          bg-white text-slate-900
          dark:bg-slate-950 dark:text-slate-100
          antialiased
        `}
      >
        {/* Tema mümkün olduğunca erken uygulanır */}
        <ThemeScript />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🔐 useSearchParams/usePathname/useRouter kullanan her şey Suspense altında */}
          <Suspense fallback={null}>
            <I18nProvider>
              <Navbar />
              <main>{children}</main>

              <footer className="border-t border-black/10 dark:border-white/10">
                <div className="container mx-auto px-4 py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
                  <p>© {new Date().getFullYear()} Said Benli</p>
                  <p>
                    İstanbul ·{" "}
                    <a
                      className="underline decoration-dotted hover:text-slate-800 dark:hover:text-slate-200"
                      href="#hero"
                    >
                      Yukarı
                    </a>
                  </p>
                </div>
              </footer>
            </I18nProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
