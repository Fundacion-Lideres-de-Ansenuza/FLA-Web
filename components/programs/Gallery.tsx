"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";
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
  src?: string;
};

const FALLBACK_SLIDES: Slide[] = [
  { id: "scene-1", title: "Escena 01" },
  { id: "scene-2", title: "Escena 02" },
  { id: "scene-3", title: "Escena 03" },
];

export default function Gallery({ images, colors, title = "Galería visual" }: GalleryProps) {
  const slides = useMemo<Slide[]>(() => {
    if (images && images.length > 0) {
      return images.map((src, index) => ({
        id: `custom-${index + 1}`,
        title: `Imagen ${index + 1}`,
        src,
      }));
    }

    return FALLBACK_SLIDES;
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
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <span
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              Galería visual
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-contrail" style={{ color: colors.secondary }}>
              {title}
            </h2>
          </motion.div>

          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_160px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative min-h-80 sm:min-h-105"
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

                      <div className="absolute right-5 top-5 flex items-center gap-3">
                        <span
                          className="inline-flex rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white"
                          style={{ backgroundColor: colors.primary }}
                        >
                          {hasCustomImages ? "Galería" : "Visual"}
                        </span>
                        <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-gray-700 backdrop-blur-sm">
                          {currentIndex + 1}/{slides.length}
                        </span>
                      </div>

                      <div className="relative z-10 flex w-full flex-col items-center justify-center px-3 text-center sm:px-6">
                        {hasCustomImages ? (
                          <div className="relative aspect-3/2 w-full max-w-4xl overflow-hidden rounded-[22px] bg-white shadow-xl">
                            <Image
                              src={currentSlide.src!}
                              alt={currentSlide.title}
                              fill
                              className="object-contain object-center"
                              sizes="(max-width: 768px) 100vw, 70vw"
                            />
                            <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#8f1f18]">
                              {currentSlide.title}
                            </div>
                          </div>
                        ) : (
                          <>
                            <div
                              className="mb-5 flex h-20 w-20 items-center justify-center rounded-[28px] text-white shadow-xl"
                              style={{ backgroundColor: colors.primary }}
                            >
                              <Images className="h-9 w-9" />
                            </div>
                            <h3 className="text-3xl tracking-tight text-gray-900 sm:text-5xl font-contrail">
                              {currentSlide.title}
                            </h3>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => moveSlide(-1)}
                    className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border bg-white/92 text-gray-700 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-colors hover:bg-white"
                    style={{ borderColor: `${colors.accent}45` }}
                    aria-label="Imagen anterior"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSlide(1)}
                    className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-colors"
                    style={{ backgroundColor: colors.primary }}
                    aria-label="Imagen siguiente"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="flex h-full items-center justify-center"
            >
              <div className="flex w-full flex-row justify-center gap-3 sm:flex-row lg:flex-col">
                {slides.map((slide, index) => (
                  <button
                    key={`${slide.id}-${index}`}
                    type="button"
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`group relative h-94px w-94px overflow-hidden rounded-3xl border p-1.5 transition-all duration-300 sm:h-[108px] sm:w-[108px] ${
                      index === currentIndex
                        ? "border-transparent bg-white shadow-[0_16px_42px_rgba(0,0,0,0.12)]"
                        : "bg-white/70 hover:bg-white"
                    }`}
                    style={{ borderColor: index === currentIndex ? "transparent" : `${colors.accent}40` }}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center rounded-3xl"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}20 0%, white 54%, ${colors.accent}24 100%)`,
                      }}
                    >
                      {slide.src ? (
                        <Image
                          src={slide.src}
                          alt={slide.title}
                          width={120}
                          height={120}
                          className="h-full w-full rounded-[18px] object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <div
                            className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                            style={{ backgroundColor: colors.primary }}
                          >
                            <Images className="h-4.5 w-4.5" />
                          </div>
                          <p className="text-sm text-gray-900 font-contrail">{slide.title}</p>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
