'use client'

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const introImage = "/images/about_us/PrimeraGrandeFla.webp";

export default function Introduction(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="pt-4 md:pt-6">
      <div className="overflow-hidden rounded-[34px] border border-[#f1d6d6] bg-white shadow-[0_18px_50px_rgba(144,20,14,0.05)]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 lg:px-12">
            <h1 className="mt-5 text-[34px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[0.96] tracking-tight text-[#160101] font-contrail-one">
              {t('aboutUs.foundation.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-[18px] md:text-[21px] leading-relaxed text-gray-700 font-arimo">
              {t('aboutUs.foundation.intro')}
            </p>
          </div>

          <div className="relative min-h-70 lg:min-h-full">
            <Image
              src={introImage}
              alt="Equipo de la Fundación Líderes de Ansenuza"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(188,34,34,0.12)_0%,rgba(244,94,94,0.34)_100%)]" />
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 px-1 md:px-2">
        <div className="space-y-5 text-[17px] md:text-[19px] leading-relaxed text-[#2c1818] font-arimo">
          <p>{t('aboutUs.foundation.paragraph1')}</p>
          <p>{t('aboutUs.foundation.paragraph2')}</p>
          <p>{t('aboutUs.foundation.paragraph3')}</p>
          <p>{t('aboutUs.foundation.paragraph4')}</p>
        </div>
      </div>
    </section>
  );
}
