import Image from "next/image";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const girlTeaching = "/images/about_us/girlTeaching.webp";

export default function Mission(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden">
      <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[240px] overflow-hidden rounded-[30px]">
          <Image
            src={girlTeaching}
            alt={t("aboutUs.mission.imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(188,34,34,0.12)_0%,rgba(244,94,94,0.26)_100%)]" />
        </div>

        <div className="px-0 py-6 md:px-2 md:py-8 lg:pl-8">
          <span className="inline-flex rounded-full bg-[#bc2222] px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg">
            {t("aboutUs.mission.tag")}
          </span>
          <p className="mt-5 text-[18px] md:text-[20px] leading-relaxed text-[#2c1818] font-arimo">{t("aboutUs.mission.text")}</p>
        </div>
      </div>
    </section>
  );
}
