'use client'

import type React from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function WhyWeDoIt(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <section className="py-7 sm:py-8 bg-gradient-to-b from-transparent via-rose-50/70 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-3 font-contrail-one">{t('whyWeDoIt.title')}</h2>
          <p className="text-base md:text-lg text-gray-600 font-arimo">{t('whyWeDoIt.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-5 lg:mb-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <Image
                src="/images/IMG_0745-min.png"
                alt="Impacto social"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-[#bc2222]/75" />
            <div className="relative text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl leading-tight">{t('whyWeDoIt.socialImpact.title')}</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                {t('whyWeDoIt.socialImpact.description')}
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <Image
                src="/images/TESTIMONIO_1CUT.png"
                alt="Educación"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-[#d63c3c]/75" />
            <div className="relative text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl leading-tight">{t('whyWeDoIt.education.title')}</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                {t('whyWeDoIt.education.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_0621-min.png"
              alt="Oportunidades"
              className="w-full h-full object-cover"
              width={1200}
              height={600}
            />
          </div>
          <div className="absolute inset-0 bg-[#f45e5e]/75" />
          <div className="relative text-white p-6 md:p-8 text-center">
            <h3 className="text-3xl md:text-4xl leading-tight">{t('whyWeDoIt.opportunities.title')}</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              {t('whyWeDoIt.opportunities.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
