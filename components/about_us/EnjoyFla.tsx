"use client";

import Image from "next/image";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const equipoJunto = "/images/about_us/PrimeraGrandeFla.png";
const equipoFeliz = "/images/about_us/SegundaFlaGrande.png";
const chicosSonriendo = "/images/about_us/TerceraFlaGrande.png";

function EnjoyFla(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="px-0 py-2">
      <div className="mb-8 text-center">
        <span className="inline-flex rounded-full bg-[#f45e5e] px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg">
          {t('aboutUs.enjoyFla.badge')}
        </span>
        <h3 className="mt-4 text-[34px] md:text-[42px] font-contrail-one text-[#160101]">
          {t('aboutUs.enjoyFla.title')}
        </h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[30px]">
          <Image
            src={equipoJunto}
            alt={t('aboutUs.enjoyFla.imageAlt1')}
            width={1562}
            height={860}
            className="h-full w-full rounded-[24px] object-cover shadow-[0_18px_40px_rgba(144,20,14,0.05)]"
          />
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[30px]">
            <Image
              src={equipoFeliz}
              alt={t('aboutUs.enjoyFla.imageAlt2')}
              width={900}
              height={620}
              className="h-full w-full rounded-[24px] object-cover shadow-[0_18px_40px_rgba(144,20,14,0.05)]"
            />
          </div>
          <div className="overflow-hidden rounded-[30px]">
            <Image
              src={chicosSonriendo}
              alt={t('aboutUs.enjoyFla.imageAlt3')}
              width={900}
              height={620}
              className="h-full w-full rounded-[24px] object-cover shadow-[0_18px_40px_rgba(144,20,14,0.05)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnjoyFla;
