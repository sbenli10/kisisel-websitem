// src/components/Section.tsx
import * as React from "react";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dividerTop?: boolean;
};

const Section: React.FC<Props> = ({ id, title, subtitle, children, className = "", dividerTop = false }) => {
  return (
    <section
      id={id}
      className={`${dividerTop ? "border-t border-black/10 dark:border-white/10" : ""} py-16 md:py-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
