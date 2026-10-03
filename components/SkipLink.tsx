"use client"

import { useTranslation } from "react-i18next"

export default function SkipLink() {
  const { t } = useTranslation()

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
    >
      {t("accessibility.skipToContent")}
    </a>
  )
}
