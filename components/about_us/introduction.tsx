'use client'

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const introImage = "/images/about_us/grupo-quienes-somos.webp";

export default function Introduction(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section id="introduccion" className="pt-4 md:pt-6 scroll-mt-[120px]">
      <div className="relative h-[480px] sm:h-[560px] lg:h-[640px] overflow-hidden rounded-[28px] sm:rounded-[40px] lg:rounded-[56px] border border-[#f1d6d6] shadow-[0_30px_80px_rgba(144,20,14,0.16)]">
        <Image
          src={introImage}
          alt={t("aboutUs.foundation.imageAlt")}
          fill
          className="object-cover object-[50%_30%]"
          sizes="(max-width: 1024px) 100vw, 1152px"
          priority
        />
        <div className="absolute inset-0 bg-[#bc2222]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#90140e]/95 via-[#90140e]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 sm:pb-10 lg:px-14 lg:pb-12">
          <p className="text-lg sm:text-xl italic font-fla text-[#ffd9d9]">
            {t('nav.quienes_somos')}
          </p>
          <h1 className="mt-2 max-w-3xl text-[38px] sm:text-[52px] md:text-[60px] lg:text-[68px] leading-[0.96] tracking-tight text-white font-fla drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            {t('aboutUs.foundation.title')}
          </h1>
          <div className="mt-4 h-1.5 w-40 rounded-full bg-gradient-to-r from-[#f45e5e] via-[#f67a7a] to-white/80 sm:w-52" />
          <p className="mt-4 max-w-3xl text-left! text-[17px] sm:text-[19px] md:text-[21px] leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            {t('aboutUs.foundation.intro')}
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-8 px-1 md:px-2">
        <div className="space-y-5 text-[17px] md:text-[19px] leading-relaxed text-[#2c1818]">
          <p>{t('aboutUs.foundation.paragraph1')}</p>
          <p>{t('aboutUs.foundation.paragraph2')}</p>
          <p>{t('aboutUs.foundation.paragraph3')}</p>
          <p>{t('aboutUs.foundation.paragraph4')}</p>
        </div>
      </div>
    </section>
  );
}
