import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume / Özgeçmiş — Said Benli",
  description: "Said Benli - Türkçe ve İngilizce özgeçmiş",
  openGraph: {
    title: "Resume / Özgeçmiş — Said Benli",
    description: "Türkçe ve İngilizce özgeçmiş (PDF).",
    type: "article",
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
