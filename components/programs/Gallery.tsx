"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Images } from "lucide-react";
import type { ProgramColors } from "./types";

interface GalleryProps {
  type: "drive" | "images";
  url?: string;
  images?: string[];
  colors: ProgramColors;
  title?: string;
}

type Slide = {
  id: string;
  title: string;
  caption: string;
};

const FALLBACK_SLIDES = [
  { id: "scene-1", title: "Escena 01", caption: "Espacio reservado para una imagen destacada del programa." },
  { id: "scene-2", title: "Escena 02", caption: "Acá puede ir una actividad, un momento grupal o una dinámica." },
  { id: "scene-3", title: "Escena 03", caption: "Preparado para sumar más color y contexto cuando cargues las fotos." },
];

export default function Gallery({ type, url, images, colors, title = "Este programa" }: GalleryProps) {
  const slides = useMemo<Slide[]>(() => {
    if (images && images.length > 0) {
      return images.map((_, index) => ({
        id: `custom-${index + 1}`,
        title: `Imagen ${index + 1}`,
        caption: "Imagen lista para mostrarse en este slider.",
      }));
    }

    return FALLBACK_SLIDES.map((slide) => ({ ...slide }));
  }, [images]);

  const hasCustomImages = Boolean(images && images.length > 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  const moveSlide = (step: number) => {
    setDirection(step);
    setCurrentIndex((prev) => (prev + step + slides.length) % slides.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              Galería visual
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl text-gray-900 font-contrail-one">
              {hasCustomImages ? `Momentos de ${title}` : `Espacio visual para ${title}`}
            </h2>
            <p className="mt-3 text-lg text-gray-600 font-arimo max-w-3xl mx-auto">
              {hasCustomImages
                ? "Deslizá para recorrer imágenes del programa."
                : "El slider ya quedó listo para que después sumemos las imágenes finales sin tocar el diseño."}
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative min-h-[320px] sm:min-h-[420px]"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${currentSlide.id}-${currentIndex}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 42 : -42, rotate: direction > 0 ? 1 : -1 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -42 : 42, rotate: direction > 0 ? -1 : 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div
                    className="relative h-full overflow-hidden rounded-[34px] border p-3 shadow-[0_24px_80px_rgba(0,0,0,0.10)]"
                    style={{
                      borderColor: `${colors.accent}55`,
                      background: `linear-gradient(160deg, ${colors.primary}15 0%, white 34%, ${colors.accent}18 100%)`,
                    }}
                  >
                    <div
                      className="relative flex h-full items-center justify-center overflow-hidden rounded-[26px]"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}22 0%, white 38%, ${colors.accent}30 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.45),transparent_28%)]" />
                      <div className="absolute left-5 top-5 flex items-center gap-3">
                        <span
                          className="inline-flex rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white"
                          style={{ backgroundColor: colors.primary }}
                        >
                          {hasCustomImages ? "Galería" : "Placeholder"}
                        </span>
                        <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-gray-700 backdrop-blur-sm">
                          {currentIndex + 1}/{slides.length}
                        </span>
                      </div>
                      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center justify-center px-8 text-center">
                        <div
                          className="mb-5 flex h-20 w-20 items-center justify-center rounded-[28px] text-white shadow-xl"
                          style={{ backgroundColor: colors.primary }}
                        >
                          <Images className="h-9 w-9" />
                        </div>
                        <p className="text-xs font-black uppercase tracking-[0.34em]" style={{ color: colors.primary }}>
                          Placeholder visual
                        </p>
                        <h3 className="mt-4 text-3xl sm:text-5xl font-contrail-one tracking-tight text-gray-900">
                          {currentSlide.title}
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed font-arimo text-gray-600">
                          {currentSlide.caption}
                        </p>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                        <h3 className="text-3xl sm:text-4xl font-contrail-one tracking-tight">
                          {title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed font-arimo text-white/90">
                          {hasCustomImages
                            ? "Un recorrido visual para reforzar la identidad, la experiencia y el impacto del programa."
                            : "Cuando me pases las fotos, las agregamos acá y el slider ya queda funcionando sin rehacer la sección."}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {slides.map((slide, index) => (
                  <button
                    key={`${slide.id}-${index}`}
                    type="button"
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`group flex items-center gap-4 rounded-[24px] border px-4 py-4 text-left transition-all duration-300 ${
                      index === currentIndex
                        ? "border-transparent bg-white shadow-[0_16px_42px_rgba(0,0,0,0.08)]"
                        : "bg-white/70 hover:bg-white"
                    }`}
                    style={{ borderColor: index === currentIndex ? "transparent" : `${colors.accent}40` }}
                    >
                      <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                      style={{ borderColor: `${colors.accent}40` }}
                    >
                      <Images className="h-6 w-6" style={{ color: colors.primary }} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-contrail-one text-xl text-gray-900">{slide.title}</p>
                      <p className="mt-1 text-sm text-gray-600 font-arimo line-clamp-2">
                        {slide.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div
                className="rounded-[26px] border px-4 py-4"
                style={{ borderColor: `${colors.accent}40`, backgroundColor: `${colors.primary}10` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: colors.primary }}>
                      Slider listo
                    </p>
                    <p className="mt-2 text-sm text-gray-700 font-arimo">
                      La estructura ya está preparada para sumar fotos reales del programa sin volver a diseñar esta sección.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-3">
                    <Images className="h-6 w-6" style={{ color: colors.primary }} />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => moveSlide(-1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-gray-700 transition-colors hover:bg-gray-50"
                      style={{ borderColor: `${colors.accent}45` }}
                      aria-label="Imagen anterior"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveSlide(1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors"
                      style={{ backgroundColor: colors.primary }}
                      aria-label="Imagen siguiente"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {type === "drive" && url && (
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: colors.secondary }}
                    >
                      Ver carpeta
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
