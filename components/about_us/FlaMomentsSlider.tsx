"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export type FlaMomentSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
};

interface FlaMomentsSliderProps {
  badge: string;
  title: string;
  subtitle: string;
  slides: FlaMomentSlide[];
}

export default function FlaMomentsSlider({
  badge,
  title,
  subtitle,
  slides,
}: FlaMomentsSliderProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  const currentSlide = slides[currentIndex];

  const moveSlide = (step: number) => {
    setDirection(step);
    setCurrentIndex((prev) => (prev + step + slides.length) % slides.length);
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="px-0 py-4 md:py-6">
      <div className="relative overflow-hidden rounded-[34px] border border-[#f3cdcd] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.96)_0%,rgba(255,244,242,0.98)_44%,rgba(255,231,227,0.94)_100%)] px-4 py-5 shadow-[0_32px_90px_rgba(144,20,14,0.12)] sm:px-6 md:px-8 md:py-8">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-[#f45e5e]/20 blur-3xl" />
          <div className="absolute right-6 top-0 h-44 w-44 rounded-full bg-[#bc2222]/14 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[#ffcc70]/25 blur-3xl" />
        </div>

        <div className="relative z-10 mb-8 text-center">
          <span className="inline-flex rounded-full border border-[#f0bbbb] bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-[#bc2222] shadow-[0_12px_30px_rgba(188,34,34,0.12)]">
            {badge}
          </span>
          <h3 className="mt-4 text-[34px] md:text-[44px] font-contrail-one leading-none text-[#160101]">
            {title}
          </h3>
          {subtitle ? (
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5f4848] sm:text-base md:text-lg font-arimo">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="relative z-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/70 p-3 shadow-[0_26px_70px_rgba(144,20,14,0.16)] backdrop-blur-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${currentSlide.src}-${currentIndex}`}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 42 : -42, rotate: direction > 0 ? 1.25 : -1.25 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -42 : 42, rotate: direction > 0 ? -1.25 : 1.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-3"
              >
                <div className="relative aspect-16/10 min-h-100 overflow-hidden rounded-3xl sm:min-h-117.5">
                  <Image
                    src={currentSlide?.src}
                    alt={currentSlide?.alt}
                    fill
                    priority={currentIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,1,1,0.04)_0%,rgba(22,1,1,0.12)_24%,rgba(22,1,1,0.4)_100%)]" />
                  <div className="absolute left-4 top-4 flex items-center gap-3 sm:left-6 sm:top-6">
                    <span className="inline-flex rounded-full bg-white/92 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-[#8f1f18] shadow-lg">
                      {currentSlide?.eyebrow}
                    </span>
                    <span className="rounded-full border border-white/45 bg-[#160101]/28 px-3 py-1 text-xs font-semibold text-white/92 backdrop-blur-sm">
                      {currentIndex + 1}/{slides.length}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                    <h4 className="max-w-xl text-3xl font-contrail-one leading-none sm:text-[42px]">
                      {currentSlide?.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {slides.map((slide, index) => {
                const isActive = index === currentIndex;

                return (
                  <button
                    key={`${slide.src}-${index}`}
                    type="button"
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`group relative overflow-hidden rounded-[24px] border p-2 text-left transition-all duration-300 ${
                      isActive
                        ? "border-transparent bg-white shadow-[0_18px_40px_rgba(144,20,14,0.14)]"
                        : "border-[#efcaca] bg-white/70 hover:bg-white"
                    }`}
                    aria-label={t("aboutUs.enjoyFla.goToSlide", { number: index + 1 })}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-20 w-20 overflow-hidden rounded-[18px] sm:h-24 sm:w-24">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          sizes="96px"
                          className={`object-cover object-center transition-transform duration-500 ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#bc2222]">
                          {slide.eyebrow}
                        </p>
                        <p className="mt-1 text-xl font-contrail-one leading-none text-[#160101]">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[26px] border border-[#efcaca] bg-white/80 px-4 py-4 shadow-[0_18px_40px_rgba(144,20,14,0.08)] backdrop-blur-sm">
              {slides.length > 1 && (
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => moveSlide(-1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#efcaca] bg-white text-[#533737] transition-colors hover:bg-[#fff3f1]"
                      aria-label={t("aboutUs.enjoyFla.previous")}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveSlide(1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bc2222] text-white transition-colors hover:bg-[#d63c3c]"
                      aria-label={t("aboutUs.enjoyFla.next")}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
