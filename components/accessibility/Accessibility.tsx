"use client"

import { useState } from "react"
import { ZoomIn, ZoomOut, Contrast, Underline, Type, RotateCcw, Palette, Lightbulb } from "lucide-react"
import { FaWheelchair } from "react-icons/fa"
import { useAccessibility } from "@/lib/context/AccessibilityContext"
import { useTranslation } from "react-i18next"

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const {
    increaseFontSize,
    decreaseFontSize,
    toggleGrayscale,
    toggleHighContrast,
    toggleNegativeContrast,
    toggleLightBackground,
    toggleUnderlineLinks,
    toggleReadableFont,
    resetAccessibility,
  } = useAccessibility()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button
        onClick={toggleMenu}
        className="bg-white p-4 rounded-full shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc2222] focus-visible:ring-offset-2"
        aria-label={t("accessibility.open")}
      >
        <FaWheelchair size={24} />
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-4 w-64">
          <p className="text-lg font-bold mb-2 font-arimo text-[#bc2222]">{t("accessibility.title")}</p>
          <ul>
            <li className="flex items-center mb-2">
              <button onClick={increaseFontSize} className="flex items-center w-full text-left">
                <ZoomIn size={20} className="mr-2" />
                {t("accessibility.increaseText")}
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={decreaseFontSize} className="flex items-center w-full text-left">
                <ZoomOut size={20} className="mr-2" />
                {t("accessibility.decreaseText")}
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleGrayscale} className="flex items-center w-full text-left">
                <Palette size={20} className="mr-2" />
                {t("accessibility.grayscale")}
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleHighContrast} className="flex items-center w-full text-left">
                <Contrast size={20} className="mr-2" />
                {t("accessibility.highContrast")}
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleNegativeContrast} className="flex items-center w-full text-left">
                <Contrast size={20} className="mr-2" />
                {t("accessibility.negativeContrast")}
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleLightBackground} className="flex items-center w-full text-left">
                <Lightbulb size={20} className="mr-2" />
                {t("accessibility.lightBackground")}
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleUnderlineLinks} className="flex items-center w-full text-left">
                <Underline size={20} className="mr-2" />
                {t("accessibility.underlineLinks")}
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleReadableFont} className="flex items-center w-full text-left">
                <Type size={20} className="mr-2" />
                {t("accessibility.readableFont")}
              </button>
            </li>
            <li className="flex items-center">
              <button onClick={resetAccessibility} className="flex items-center w-full text-left">
                <RotateCcw size={20} className="mr-2" />
                {t("accessibility.reset")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Accessibility
