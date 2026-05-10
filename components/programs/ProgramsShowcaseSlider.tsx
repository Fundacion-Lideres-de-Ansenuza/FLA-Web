"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Images } from "lucide-react"
import { useTranslation } from "react-i18next"

type ShowcaseSlide = {
  title: string
  label: string
  description: string
  color: string
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    title: "Experiencia Ambientalia",
    label: "Experiencias",
    description: "Placeholder listo para sumar escenas de naturaleza, territorio y liderazgo.",
    color: "#bc2222",
  },
  {
    title: "FUTURAS",
    label: "Innovacion",
    description: "Espacio visual pensado para destacar momentos, comunidad y crecimiento.",
    color: "#f45e5e",
  },
  {
    title: "Líderes",
    label: "Impacto",
    description: "Bloque preparado para mostrar actividades, encuentros o experiencias.",
    color: "#90140e",
  },
  {
    title: "Potenciate",
    label: "Desarrollo",
    description: "Diseñado para que después solo cargues tus fotos y el slider ya funcione.",
    color: "#d63c3c",
  },
  {
    title: "SOMOS",
    label: "Comunidad",
    description: "Placeholder visual con color y dinamismo hasta tener las imagenes finales.",
    color: "#7f1712",
  },
]

export default function ProgramsShowcaseSlider() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  const currentSlide = SHOWCASE_SLIDES[currentIndex]

  const moveSlide = (step: number) => {
    setDirection(step)
    setCurrentIndex((prev) => (prev + step + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length)
  }

  return (
    <section className="py-10 md:py-12">
      <div className="relative overflow-hidden rounded-[36px] border border-[#f1d7d7] bg-[radial-gradient(circle_at_top,#fff5f5_0%,#ffffff_62%)] px-5 py-8 shadow-[0_28px_80px_rgba(144,20,14,0.08)] sm:px-8 lg:px-10">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -left-16 top-8 h-32 w-32 rounded-full bg-[#f8b1b1]/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f45e5e]/20 blur-3xl" />
        </div>

        <div className="relative z-10 text-center mb-8">
          <span className="inline-flex rounded-full border border-[#f2cccc] bg-white px-4 py-1 text-xs font-black uppercase tracking-[0.24em] text-[#bc2222]">
            {t("programs.showcase.eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-contrail-one tracking-tight text-gray-900">
            {t("programs.showcase.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-gray-600 font-arimo">
            {t("programs.showcase.subtitle")}
          </p>
        </div>

        <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[340px] sm:min-h-[420px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.title}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 48 : -48, rotate: direction > 0 ? 1.5 : -1.5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -48 : 48, rotate: direction > 0 ? -1.5 : 1.5 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="relative h-full overflow-hidden rounded-[32px] border border-white/80 bg-white p-3 shadow-[0_20px_70px_rgba(144,20,14,0.16)]">
                  <div
                    className="absolute inset-x-0 top-0 h-24"
                    style={{ background: `linear-gradient(180deg, ${currentSlide.color}22 0%, transparent 100%)` }}
                  />
                  <div
                    className="relative flex h-full items-center justify-center overflow-hidden rounded-[24px]"
                    style={{
                      background: `linear-gradient(135deg, ${currentSlide.color}24 0%, white 35%, ${currentSlide.color}38 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.55),transparent_28%)]" />
                    <div className="absolute left-5 top-5">
                      <span
                        className="inline-flex rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg"
                        style={{ backgroundColor: currentSlide.color }}
                      >
                        {currentSlide.label}
                      </span>
                    </div>
                    <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center justify-center px-8 text-center">
                      <div
                        className="mb-5 flex h-20 w-20 items-center justify-center rounded-[28px] text-white shadow-xl"
                        style={{ backgroundColor: currentSlide.color }}
                      >
                        <Images className="h-9 w-9" />
                      </div>
                      <p className="text-xs font-black uppercase tracking-[0.34em]" style={{ color: currentSlide.color }}>
                        Placeholder visual
                      </p>
                      <h3 className="mt-4 text-4xl sm:text-5xl font-contrail-one tracking-tight text-gray-900">
                        {currentSlide.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed font-arimo text-gray-600">
                        {currentSlide.description}
                      </p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                      <h3 className="text-3xl sm:text-4xl font-contrail-one tracking-tight">
                        {currentSlide.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed font-arimo text-white/90">
                        Carrusel preparado para cargar fotos reales del programa más adelante.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {SHOWCASE_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`group flex items-center gap-4 rounded-[24px] border px-4 py-4 text-left transition-all duration-300 ${
                    index === currentIndex
                      ? "border-transparent bg-white shadow-[0_18px_40px_rgba(144,20,14,0.12)]"
                      : "border-[#f0d9d9] bg-white/70 hover:bg-white"
                  }`}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${slide.color}18` }}
                  >
                    <Images className="h-6 w-6" style={{ color: slide.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-contrail-one text-xl text-gray-900">{slide.title}</p>
                    <p className="mt-1 text-sm text-gray-600 font-arimo line-clamp-2">{slide.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-[24px] border border-[#f0d9d9] bg-white/80 px-4 py-3">
              <p className="text-sm font-arimo text-gray-600">{t("programs.showcase.note")}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => moveSlide(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#efdbdb] bg-white text-gray-700 transition-colors hover:bg-[#fff1f1]"
                  aria-label={t("programs.showcase.previous")}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => moveSlide(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bc2222] text-white transition-colors hover:bg-[#d63c3c]"
                  aria-label={t("programs.showcase.next")}
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


