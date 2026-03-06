'use client'

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import Introduction from "../../components/about_us/introduction";
import Mission from "../../components/about_us/mission";
import Values from "../../components/about_us/values";
import Volunteers from "../../components/about_us/volunteers";
import Vision from "../../components/about_us/vision";
import EnjoyFla from "@/components/about_us/EnjoyFla";

export default function QuienesSomos(): JSX.Element {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#fff8f8_26%,#ffffff_100%)] pt-[108px] sm:pt-[120px]">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6 md:pb-24">
        <Introduction />

        <section className="my-8 md:my-10 overflow-hidden rounded-[36px] border border-[#f2d7d7] bg-[linear-gradient(135deg,#fff4f4_0%,#ffffff_48%,#fde8e8_100%)] px-6 py-7 text-center shadow-[0_24px_70px_rgba(144,20,14,0.08)] md:px-10 md:py-10">
          <span className="inline-flex rounded-full bg-[#bc2222] px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg">
            Equipo institucional
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-contrail-one text-gray-900">
            {t('aboutUs.authorities.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base md:text-lg text-gray-700 font-arimo">
            {t('aboutUs.authorities.description')}
          </p>
        </section>

        <section className="mb-8 md:mb-10 text-center">
          <span className="inline-flex rounded-full border border-[#f0d3d3] bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-[#bc2222]">
            Esencia FLA
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-contrail-one text-gray-900">
            {t('aboutUs.missionVisionValues')}
          </h2>
        </section>

        <div className="space-y-6 md:space-y-10">
          <Mission />
          <Vision />
          <Values />
          <Volunteers />
          <EnjoyFla />
        </div>
      </div>
    </main>
  );
}
