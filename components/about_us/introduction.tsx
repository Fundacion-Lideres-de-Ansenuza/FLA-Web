'use client'

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const introImage = "/images/about_us/PrimeraGrandeFla.png";

export default function Introduction(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="pt-3 md:pt-5">
      <div className="overflow-hidden rounded-[30px] border border-[#f1d6d6] bg-white shadow-[0_18px_50px_rgba(144,20,14,0.05)]">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-center px-6 py-7 md:px-9 md:py-10 lg:px-11 lg:py-11">
            <span className="inline-flex w-fit rounded-full bg-[#bc2222] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-lg">
              {t('aboutUs.foundation.badge')}
            </span>
            <h1 className="mt-4 max-w-[11ch] text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] leading-[0.98] tracking-tight text-[#160101] font-contrail-one">
              {t('aboutUs.foundation.title')}
            </h1>
            <p className="mt-4 max-w-[62ch] text-[16px] md:text-[18px] leading-[1.7] text-[#5c4a4a] font-arimo">
              {t('aboutUs.foundation.intro')}
            </p>
          </div>

          <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-full">
            <Image
              src={introImage}
              alt={t('aboutUs.foundation.imageAlt')}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(188,34,34,0.12)_0%,rgba(244,94,94,0.34)_100%)]" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[72ch] px-1 md:mt-10 md:px-2">
        <div className="space-y-4 text-[16px] md:text-[17px] leading-[1.85] text-[#2c1818] font-arimo">
          <p>{t('aboutUs.foundation.paragraph1')}</p>
          <p>{t('aboutUs.foundation.paragraph2')}</p>
          <p>{t('aboutUs.foundation.paragraph3')}</p>
          <p>{t('aboutUs.foundation.paragraph4')}</p>
        </div>
      </div>
    </section>
  );
}
