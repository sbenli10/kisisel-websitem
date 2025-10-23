// src/components/AboutText.tsx
import { useI18n } from "@/i18n/I18nProvider";

export default function AboutText() {
  const { t } = useI18n();

  return (
    <div className="space-y-3 leading-relaxed text-slate-600 dark:text-slate-300">
      <p>
        {t("about.p1")}
        {" "}
        Bilgisayar Bilimleri alanında lisans eğitimime devam etmekteyim.
        Yazılım geliştirme, veri yapıları, algoritmalar ve ağ güvenliği gibi temel alanlarda
        güçlü bir teknik altyapıya sahibim. Edindiğim teorik bilgileri, bireysel projeler ve
        uygulamalı eğitimlerle pekiştirerek pratiğe dönüştürüyorum.
      </p>

      <p>
        {t("about.p2")}
        {" "}
        Yazılım geliştirme sürecine dair nesne yönelimli programlama, veritabanı yönetimi,
        kullanıcı arayüzü tasarımı ve hata ayıklama gibi birçok konuda proje bazlı deneyime sahibim.
        Ayrıca yapay zekâ, makine öğrenmesi ve derin öğrenme gibi ileri düzey konularda eğitimler
        alarak bu alanlara yönelik ilgi ve yetkinliğimi artırdım.
      </p>

      <p>
        {t("about.p3")}
        {" "}
        Yazılım geliştirme sürecine dair nesne yönelimli programlama, veritabanı yönetimi,
        kullanıcı arayüzü tasarımı ve hata ayıklama gibi birçok konuda proje bazlı deneyime sahibim.
        Ayrıca yapay zekâ, makine öğrenmesi ve derin öğrenme gibi ileri düzey konularda eğitimler
        alarak bu alanlara yönelik ilgi ve yetkinliğimi artırdım.
      </p>

      <p>
        {t("about.p4")}
        {" "}
        İngilizce seviyemi teknik dokümantasyonları rahatlıkla anlayabilecek düzeye getirerek,
        küresel kaynaklardan faydalanma kabiliyetimi geliştirdim. Programlama dilleri (C#, Java,
        HTML, CSS, JavaScript) ve geliştirme araçları (SQL, çeşitli IDE’ler) ile çalışarak yazılım
        geliştirme süreçlerinde kendimi sürekli olarak ileri taşımaya devam ediyorum.
      </p>

      <p>
        {t("about.p5")}
        {" "}
        Öğrenmeye açık, takım çalışmasına yatkın, çözüm odaklı ve yenilikçi bir yaklaşım benimsiyorum.
        Dinamik bir çalışma ortamında hem katkı sağlamak hem de profesyonel deneyim kazanmak amacıyla
        yeni fırsatlara açığım.
      </p>
    </div>
  );
}
