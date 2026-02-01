'use client'

import { JSX } from "react";
import { useTranslation } from "react-i18next";

const imgSerParteDeFlaNoEsSimplementeVoluntariarEsConectarConPersonasIncreiblesCrearRecuerdosInolvidablesYApostarASerParteDelCambioQueDeseasVerEnLaComunidadEnFlaHemosCompartidoMomento1: string = "http://localhost:3845/assets/97bc07ceeb67b50d3ce0ee0490daee7ada3429bc.png";

export default function Introduction(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-8">
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="font-contrail-one text-[#000000] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] tracking-tight">
          {t('aboutUs.foundation.title')}
        </h1>
        <p className="font-['Arimo:Regular',_sans-serif] font-normal text-[#000000] text-[20px] md:text-[22px] mt-3 leading-relaxed">
          {t('aboutUs.foundation.intro')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-8 rounded-3xl sm:rounded-[50px] md:rounded-[80px] overflow-hidden relative shadow-lg">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${imgSerParteDeFlaNoEsSimplementeVoluntariarEsConectarConPersonasIncreiblesCrearRecuerdosInolvidablesYApostarASerParteDelCambioQueDeseasVerEnLaComunidadEnFlaHemosCompartidoMomento1}')` }} />
        <div className="absolute inset-0 bg-[#f45e5e] opacity-45 rounded-3xl sm:rounded-[50px] md:rounded-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[18px] md:text-[20px] leading-relaxed mb-8 space-y-4">
        <p className="mb-0">
          {t('aboutUs.foundation.paragraph1')}
        </p>
        <p className="mb-0">
          {t('aboutUs.foundation.paragraph2')}
        </p>
        <p className="mb-0">
          {t('aboutUs.foundation.paragraph3')}
        </p>
        <p className="mb-0">
          {t('aboutUs.foundation.paragraph4')}
        </p>
      </div>
    </div>
  );
}
