"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

const isgFeatures = [
  ["Merkezi Veri Yönetimi", "Firmalar, çalışan havuzları, risk değerlendirme raporları, eğitim planları ve OSGB doküman arşivleri tek panelde toplanır."],
  ["Yapay Zeka (AI) Destekli Takip", "Riskleri analiz ederek geciken aksiyonları, yüksek risk barındıran firmaları ve eksik evrakları tespit eder, karar desteği sunar."],
  ["Mobil Saha Denetimi", "Mobil panel üzerinden sahada anlık fotoğraf ve gözlem kaydı alınmasını, DÖF (Düzeltici ve Önleyici Faaliyet) oluşturulmasını ve terminli görev ataması yapılmasını sağlar."],
  ["Otomatik Raporlama", "Sisteme girilen verilerle trend analizleri yapar ve yöneticiler için canlı dashboard üzerinden Excel/CSV formatında anında çıktı üretir."],
];

const teklifFeatures = [
  ["Hızlı ve Ücretsiz Talep", "Temizlik, tadilat, nakliyat veya özel ders gibi ihtiyaçlarınız için kategoriye özel kısa soruları yanıtlayarak anında talep oluşturulmasını sağlar."],
  ["Şeffaf Karşılaştırma", "Kullanıcılar gelen teklifleri yalnızca fiyata göre değil; uzmanların platformdaki puanına, deneyimine, doğrulanmış belgelerine ve gerçek müşteri yorumlarına göre kıyaslayabilir."],
  ["Gizlilik ve Güven Odaklı İletişim", "Karar verilip uzman seçilene kadar müşterinin iletişim bilgileri gizli tutulur. Görüşmeler platform içi mesajlaşma üzerinden güvenle yürütülerek gereksiz aramaların önüne geçilir."],
  ["Uzmanlar İçin Büyüme Fırsatı", "Hizmet veren profesyoneller ve firmalar, kendi hizmet bölgelerindeki iş fırsatlarını anında görerek teklif verebilir ve müşteri ağlarını genişletebilir."],
];

export default function DetailedProjectCard({ project }: { project: "isgvizyon" | "teklifbul" }) {
  const { t } = useI18n();
  const isTeklif = project === "teklifbul";
  const name = isTeklif ? "TeklifBul" : "İSGVizyon";
  const image = isTeklif ? "/img/teklifbul.jpg" : "/img/isgviyon.jpg";
  const category = isTeklif ? "Hizmet Pazaryeri" : "İSG & Saha Yönetimi";
  const subtitle = isTeklif ? "İhtiyacını paylaş, doğru uzmanı bul." : "Bulut tabanlı dijital yönetim platformu";
  const summary = isTeklif ? "Hizmet arayanları ve güvenilir uzmanları buluşturan dijital pazaryeri." : "İSG süreçleri, saha denetimleri ve raporlama tek platformda.";
  const introduction = isTeklif
    ? "profesyonel hizmet almak isteyen kullanıcılar ile güvenilir uzmanları tek bir çatı altında buluşturan yeni nesil bir hizmet pazaryeri platformudur."
    : "İş Sağlığı ve Güvenliği (İSG) ve saha denetim operasyonlarını tek bir merkezden yönetmenizi sağlayan bulut tabanlı dijital bir platformdur.";
  const features = isTeklif ? teklifFeatures : isgFeatures;
  const featureHeading = isTeklif ? "Temel İşleyişi ve Öne Çıkan Özellikleri" : "Temel İşlevleri ve Özellikleri";
  const conclusion = isTeklif
    ? 'Armut veya Bionluk gibi platformların çalışma mantığına sahip olan TeklifBul, özellikle "doğrulanmış profiller" ve "kontrollü iletişim" özellikleri ile süreci güven temeline oturtan pratik bir eşleştirme sistemidir.'
    : "OSGB firmaları, şantiye ekipleri, çok lokasyonlu işletmeler ve İSG uzmanları için tasarlanan platform, süreçleri kişilerin inisiyatifinden çıkarıp sisteme bağlayarak operasyonel hata payını en aza indirmeyi hedefler.";
  const url = isTeklif ? "https://teklifbul.tr/" : "https://www.isgvizyon.com/";
  const domain = isTeklif ? "teklifbul.tr" : "isgvizyon.com";
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <button ref={triggerRef} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" className="group block h-full w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-emerald-500">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
            <Image src={image} alt={name} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-medium text-white">{category}</span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-2xl font-bold tracking-tight">{isTeklif ? name : "İSGVİZYON"}</p>
              <p className="mt-1 text-xs text-slate-200">{subtitle}</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{t(`projects.items.${project}.title`)}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{summary}</p>
            <span className="mt-4 flex items-center justify-between text-sm font-semibold text-emerald-700 dark:text-emerald-400">Projeyi incele <span aria-hidden="true">↗</span></span>
          </div>
        </button>
      </article>

      <dialog ref={dialogRef} aria-labelledby={titleId} onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false); } }} className="m-auto max-h-[90svh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
          <h2 id={titleId} className="text-xl font-bold tracking-tight">{name}</h2>
          <button type="button" autoFocus onClick={() => setOpen(false)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-100 focus-visible:outline-emerald-500 dark:border-slate-700 dark:hover:bg-slate-800">{t("common.close")}</button>
        </div>
        <div className="space-y-7 p-6 sm:p-8">
          <div className="border-l-4 border-emerald-500 pl-5">
            <p className="text-lg font-medium leading-8"><strong>{name}</strong>, {introduction}</p>
          </div>
          {!isTeklif && <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">İSG süreçlerindeki dağınık veri yönetimini (Excel dosyaları, mesajlaşma uygulamaları, fiziksel klasörler) ortadan kaldırarak tüm akışı izlenebilir ve raporlanabilir bir yapıya kavuşturur.</p>}
          <section aria-label={featureHeading}>
            <h3 className="mb-4 text-lg font-semibold">{featureHeading}</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map(([title, description], index) => <li key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950/50">
                <span aria-hidden="true" className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">0{index + 1}</span>
                <h4 className="mt-2 text-sm font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
              </li>)}
            </ul>
          </section>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{conclusion}</p>
          <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-3 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500">Uygulamaya Git · {domain} <span aria-hidden="true">↗</span><span className="sr-only">(Yeni sekmede açılır)</span></a>
          </div>
        </div>
      </dialog>
    </>
  );
}
