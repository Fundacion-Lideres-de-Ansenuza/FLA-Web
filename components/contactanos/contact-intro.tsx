"use client"

import { useTranslation } from "react-i18next"

export default function ContactIntro() {
  const { t } = useTranslation()

  return (
    <div className="px-4 py-16">
      <div className="max-w-[1535px] mx-auto text-center">
        <h1 className="font-contrail-one text-black text-6xl md:text-7xl mb-8">
          {t('contact.title')}
        </h1>
        <p className="font-arimo text-black text-xl md:text-2xl max-w-4xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>
    </div>
  )
}
