"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ProgramColors } from "./types";
import { useTranslation } from "react-i18next";
import { getProgramLogoSrc } from "@/lib/data/program-logos";

interface ProgramHeaderProps {
  title: string;
  description: string;
  colors: ProgramColors;
  slug?: string;
  isHistorical?: boolean;
  year?: string;
  isOngoing?: boolean;
}

export default function ProgramHeader({ title, description, colors, slug, isHistorical = false, year, isOngoing = false }: ProgramHeaderProps) {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const logoSrc = slug ? getProgramLogoSrc(slug) : undefined;

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyHeader(!entry.isIntersecting);
      },
      { rootMargin: "-108px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative mt-10 overflow-hidden pb-16 pt-28 md:pb-24 lg:pb-28"
        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
      >
        {/* Malla de color: manchas difusas con la paleta del programa */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
            style={{ background: colors.accent }}
          />
          <div
            className="absolute -bottom-40 right-[-8rem] h-[32rem] w-[32rem] rounded-full opacity-50 blur-3xl"
            style={{ background: colors.secondary }}
          />
          <div
            className="absolute right-1/4 top-0 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "#ffffff" }}
          />
          {/* Velo oscuro suave: asegura contraste del texto blanco en paletas claras */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/25" />
          {/* Retícula de puntos */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
              backgroundSize: "28px 28px",
              maskImage: "linear-gradient(115deg, transparent 35%, #000 100%)",
              WebkitMaskImage: "linear-gradient(115deg, transparent 35%, #000 100%)",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className={`mx-auto grid items-center gap-12 lg:gap-16 ${logoSrc ? "max-w-6xl lg:grid-cols-[1.25fr_0.75fr]" : "max-w-4xl"}`}>
            <div className={logoSrc ? "text-center lg:text-left" : "text-center"}>
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-sm text-white/90 md:text-base"
                aria-label={t("programDetail.breadcrumbLabel")}
              >
                <Link href="/" className="transition-colors hover:text-white">
                  {t("programDetail.breadcrumbHome")}
                </Link>
                <span className="mx-2">/</span>
                <Link href="/programas" className="transition-colors hover:text-white">
                  {t("programDetail.breadcrumbPrograms")}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">{title}</span>
              </motion.nav>

              {isOngoing && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mb-5 inline-block"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                    </span>
                    {t("programs.active.ongoing")}
                  </span>
                </motion.div>
              )}

              {isHistorical && year && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-5 inline-block"
                >
                  <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    {t("programDetail.historicalBadge", { year })}
                  </span>
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6 font-fla text-5xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-6xl lg:text-7xl"
              >
                {title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`mb-6 h-1.5 w-24 rounded-full ${logoSrc ? "mx-auto origin-left lg:mx-0" : "mx-auto"}`}
                style={{ background: `linear-gradient(90deg, ${colors.accent}, #ffffff)` }}
              />

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={`mb-10 text-xl leading-relaxed text-white/95 hyphens-none! md:text-2xl ${logoSrc ? "lg:text-left!" : ""}`}
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className={`flex ${logoSrc ? "justify-center lg:justify-start" : "justify-center"}`}
              >
                <Link
                  href="#mas-info"
                  className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {t("programDetail.moreInfo")}
                </Link>
              </motion.div>
            </div>

            {logoSrc && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative order-first mx-auto flex w-full max-w-[11rem] items-center justify-center sm:max-w-[16rem] lg:order-none lg:max-w-sm"
              >
                {/* Anillos concéntricos */}
                <div aria-hidden="true" className="absolute inset-[-12%] rounded-full border border-white/25" />
                <div aria-hidden="true" className="absolute inset-[-26%] rounded-full border border-white/15" />
                {/* Panel con el logo */}
                <div
                  className="relative aspect-square w-full rotate-3 rounded-[2.5rem] p-1.5 shadow-2xl"
                  style={{ background: `linear-gradient(135deg, ${colors.accent}, #ffffff 60%)` }}
                >
                  <div className="flex h-full w-full -rotate-3 items-center justify-center rounded-[2.1rem] bg-white p-8 sm:p-10">
                    <Image
                      src={logoSrc}
                      alt={title}
                      width={320}
                      height={320}
                      className="h-full w-full object-contain"
                      priority
                    />
                  </div>
                </div>
                {/* Puntos de acento */}
                <span
                  aria-hidden="true"
                  className="absolute z-10 -right-3 top-[8%] h-6 w-6 rounded-full border-4 border-white shadow-lg"
                  style={{ background: colors.accent }}
                />
                <span
                  aria-hidden="true"
                  className="absolute z-10 -left-4 bottom-[14%] h-9 w-9 rounded-full border-4 border-white shadow-lg"
                  style={{ background: colors.secondary }}
                />
                <span
                  aria-hidden="true"
                  className="absolute z-10 bottom-[-8%] right-[18%] h-4 w-4 rounded-full bg-white/80"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <div
        className={`fixed left-0 right-0 top-[129px] z-[90] border-b border-black/5 bg-white/95 backdrop-blur-sm shadow-sm transition-transform duration-300 motion-reduce:transition-none ${
          showStickyHeader ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
        aria-hidden={!showStickyHeader}
      >
        <div className="container mx-auto flex items-center gap-3 px-4 py-2">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={title}
              width={160}
              height={64}
              className="h-14 w-40 flex-shrink-0 object-contain object-left sm:h-11 sm:w-20 sm:object-center"
            />
          ) : (
            <span
              className="h-9 w-9 flex-shrink-0 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
            />
          )}
          <span className="hidden truncate font-fla text-lg md:text-xl text-gray-900 sm:inline">{title}</span>
          {isOngoing && (
            <span className="ml-auto flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${colors.primary}1a`, color: colors.primary }}>
              {t("programs.active.ongoing")}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
