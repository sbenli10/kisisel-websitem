"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function WelcomeScreen({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [entered, setEntered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const showWelcome = pathname === "/" && !entered;

  return (
    <>
      <AnimatePresence onExitComplete={() => {
        contentRef.current?.focus({ preventScroll: true });
      }}>
        {showWelcome && (
          <motion.section
            key="welcome"
            aria-labelledby="welcome-title"
            className="welcome-screen"
            exit={{ opacity: 0, y: reducedMotion ? 0 : -24 }}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeInOut" }}
          >
            <div className="welcome-mark" aria-label="Said Benli">
              <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true">
                <path d="M14 2C7 2 2 7 2 14h6a6 6 0 0 1 6-6V2Zm4 0v6a6 6 0 0 1 6 6h6C30 7 25 2 18 2ZM2 18c0 7 5 12 12 12v-6a6 6 0 0 1-6-6H2Zm22 0a6 6 0 0 1-6 6v6c7 0 12-5 12-12h-6Z" />
                <path d="M14 10h4v4h4v4h-4v4h-4v-4h-4v-4h4z" />
              </svg>
            </div>

            <div className="welcome-copy">
              <h1 id="welcome-title">Merhaba, Ben Said Benli</h1>
              <p>Yazılım Geliştiricisiyim.</p>
              {/* Browser extensions may inject fdprocessedid before hydration. */}
              <button suppressHydrationWarning type="button" className="welcome-enter" onClick={() => {
                setEntered(true);
                window.scrollTo({ top: 0, behavior: "instant" });
              }}>
                <span>BENİMLE ÇALIŞIN</span>
                <svg viewBox="0 0 42 16" width="42" height="16" fill="none" aria-hidden="true">
                  <path d="M1 8h38M32 1l7 7-7 7" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>

            <svg className="welcome-prism" viewBox="0 0 360 430" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="prism-left" x1="48" y1="20" x2="180" y2="355" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#edff55" /><stop offset=".3" stopColor="#95f8cb" /><stop offset=".58" stopColor="#aa65ff" /><stop offset="1" stopColor="#fc3989" />
                </linearGradient>
                <linearGradient id="prism-right" x1="65" y1="35" x2="292" y2="243" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#feff91" /><stop offset=".23" stopColor="#ff9c35" /><stop offset=".43" stopColor="#ff388f" /><stop offset=".65" stopColor="#aa8bff" /><stop offset=".84" stopColor="#a1f9c9" /><stop offset="1" stopColor="#e3ff93" />
                </linearGradient>
                <filter id="prism-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              <g opacity=".65" filter="url(#prism-glow)">
                <path d="M50 25 325 259 45 369Z" fill="#b6ff90" stroke="#d3ff70" strokeWidth="8" />
              </g>
              <path d="M50 25 325 259 45 369Z" fill="url(#prism-right)" stroke="#b5e991" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 25 139 290 45 369Z" fill="url(#prism-left)" stroke="#fc669a" strokeWidth="2" />
              <path d="M50 25 99 318 66 345Z" fill="#9af3ca" opacity=".8" />
              <path d="M50 25 139 290 184 310Z" fill="#ff7635" opacity=".9" />
              <path d="M50 25 205 292 245 279Z" fill="#c3f5db" opacity=".85" />
              <path d="m45 369 94-79 186-31Z" fill="#fc3f96" stroke="#ff6cac" strokeWidth="2" />
            </svg>
          </motion.section>
        )}
      </AnimatePresence>
      <div ref={contentRef} tabIndex={-1} hidden={showWelcome} className="outline-none">
        {children}
      </div>
    </>
  );
}
