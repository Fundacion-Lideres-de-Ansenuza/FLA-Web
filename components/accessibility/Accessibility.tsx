"use client"

import { useState } from "react"
import { ZoomIn, ZoomOut, Contrast, Underline, Type, RotateCcw, Palette, Lightbulb } from "lucide-react"
import { FaWheelchair } from "react-icons/fa"
import { useAccessibility } from "@/lib/context/AccessibilityContext"

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false)
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
        className="bg-white p-4 rounded-full shadow-lg focus:outline-none"
        aria-label="Herramientas de accesibilidad"
      >
        <FaWheelchair size={24} />
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-4 w-64">
          <p className="text-lg font-bold mb-2 font-arimo text-[#bc2222]">Herramientas de accesibilidad</p>
          <ul>
            <li className="flex items-center mb-2">
              <button onClick={increaseFontSize} className="flex items-center w-full text-left">
                <ZoomIn size={20} className="mr-2" />
                Aumentar texto
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={decreaseFontSize} className="flex items-center w-full text-left">
                <ZoomOut size={20} className="mr-2" />
                Reducir texto
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleGrayscale} className="flex items-center w-full text-left">
                <Palette size={20} className="mr-2" />
                Escala de grises
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleHighContrast} className="flex items-center w-full text-left">
                <Contrast size={20} className="mr-2" />
                Alto contraste
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleNegativeContrast} className="flex items-center w-full text-left">
                <Contrast size={20} className="mr-2" />
                Contraste negativo
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleLightBackground} className="flex items-center w-full text-left">
                <Lightbulb size={20} className="mr-2" />
                Fondo claro
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleUnderlineLinks} className="flex items-center w-full text-left">
                <Underline size={20} className="mr-2" />
                Subrayar enlaces
              </button>
            </li>
            <li className="flex items-center mb-2">
              <button onClick={toggleReadableFont} className="flex items-center w-full text-left">
                <Type size={20} className="mr-2" />
                Fuente legible
              </button>
            </li>
            <li className="flex items-center">
              <button onClick={resetAccessibility} className="flex items-center w-full text-left">
                <RotateCcw size={20} className="mr-2" />
                Reset
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Accessibility