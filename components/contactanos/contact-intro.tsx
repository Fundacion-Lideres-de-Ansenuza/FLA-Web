"use client"

import { useTranslation } from "react-i18next"

export default function ContactIntro() {
  const { t } = useTranslation()

  return (
    <div className="px-4 pb-4 pt-10 md:pb-6 md:pt-12">
      <div className="mx-auto max-w-[1535px] text-center">
        <h1 className="font-contrail-one text-6xl text-black md:text-7xl">{t("contact.title")}</h1>
      </div>
    </div>
  )
}
