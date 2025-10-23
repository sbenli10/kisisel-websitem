// src/components/ProjectCard.tsx
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

export type Project = {
  title: string;
  desc: string;
  demo?: string;
  source?: string;
  image?: string;
  tags?: string[];
};

export default function ProjectCard(props: Project) {
  const { title, desc, demo, source, image = "/portfolio/placeholder.png", tags = [] } = props;
  const { t } = useI18n();

  return (
    <article className="group rounded-2xl border border-black/10 bg-white/80 overflow-hidden
                        dark:border-white/10 dark:bg-white/5">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${title} görseli`}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>

        {!!tags.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t_) => (
              <span
                key={t_}
                className="rounded-full border border-black/10 bg-black/[0.04] px-2 py-1 text-xs
                           dark:border-white/10 dark:bg-white/5"
              >
                {t_}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex gap-2">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-emerald-500 text-black px-3 py-1.5 text-sm font-semibold hover:bg-emerald-400"
            >
              {t("projects.demo")}
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-black/15 px-3 py-1.5 text-sm font-semibold hover:bg-black/[0.04]
                         dark:border-white/15 dark:hover:bg-white/5"
            >
              {t("projects.source")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
