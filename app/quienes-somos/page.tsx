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
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 md:px-6 md:pb-24">
        <Introduction />

        <section className="my-8 md:my-10 px-2 text-center">
          <h2 className="text-3xl md:text-4xl font-contrail-one text-gray-900">
            {t('aboutUs.authorities.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base md:text-lg text-gray-700 font-arimo">
            {t('aboutUs.authorities.description')}
          </p>
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
