// src/components/Skills.tsx
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

type Item = { label: string; icon?: string };

function Group({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 md:p-5
                    dark:border-white/10 dark:bg-white/5">
      <h3 className="font-semibold mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-3">
        {items.map((it) => (
          <li
            key={it.label}
            className="h-11 min-w-11 px-2 rounded-xl
                       bg-black/[0.04] border border-black/10
                       dark:bg-slate-900/40 dark:border-white/10
                       flex items-center justify-center"
            title={it.label}
          >
            {it.icon ? (
              <Image
                src={it.icon}
                alt={it.label}
                width={28}
                height={28}
                className="object-contain"
                unoptimized
              />
            ) : (
              <span className="text-xs font-medium">{it.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();

  const langsAndDbs: Item[] = [
    { label: "C#", icon: "/img/C.png" },
    { label: "Java", icon: "/img/java.png" },
    { label: "JavaScript", icon: "/img/JavaScript.png" },
    { label: "MySQL", icon: "/img/MySQL.png" },
    { label: "SQL Server", icon: "/img/SQL%20Server.png" }, // dosya adını düzeltmen önerilir
  ];

  const techs: Item[] = [
    { label: ".NET", icon: "/img/NET.png" },
    { label: "ASP.NET", icon: "/img/ASP.NET.png" },
    { label: "jQuery", icon: "/img/jQuery.jpeg" },
    { label: "Bootstrap", icon: "/img/Bootstrap.jpeg" },
  ];

  const tools: Item[] = [
    { label: "Git", icon: "/img/git-original.svg" },
    { label: "VS Code", icon: "/img/vscode-original.svg" },
    { label: "Visual Studio", icon: "/img/Visual_Studio_Icon_2022.svg" },
    { label: "Eclipse", icon: "/img/eclipse-icon-svgrepo-com.svg" },
    { label: "Inkscape", icon: "/img/Inkscape_Logo.svg" },
    { label: "Notepad++", icon: "/img/Notepad++_Logo.svg" },
  ];

  return (
    <section id="skills" className="border-t border-black/10 dark:border-white/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold">{t("skills.title")}</h2>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Group title={t("skills.langsDbs")} items={langsAndDbs} />
          <Group title={t("skills.techs")} items={techs} />
        </div>

        <div className="mt-4">
          <Group title={t("skills.tools")} items={tools} />
        </div>
      </div>
    </section>
  );
}
