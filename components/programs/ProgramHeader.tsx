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
      <section ref={heroRef} className="relative mt-10 py-20 md:py-32 overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-white/90 text-sm md:text-base"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <Link href="/programas" className="hover:text-white transition-colors">
                Programas
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{title}</span>
            </motion.nav>

            {logoSrc && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-6 flex justify-center"
              >
                <div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-3xl bg-white/95 p-3 shadow-xl">
                  <Image
                    src={logoSrc}
                    alt={title}
                    width={112}
                    height={112}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
              </motion.div>
            )}

            {isOngoing && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-4 inline-block"
              >
                <span className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {t("programs.active.ongoing")}
                </span>
              </motion.div>
            )}

            {isHistorical && year && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 inline-block"
              >
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Programa Histórico - {year}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-fla"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex justify-center"
            >
              <Link
                href="#mas-info"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {t("programDetail.moreInfo")}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <div
        className={`fixed left-0 right-0 top-[108px] sm:top-[120px] z-[90] border-b border-black/5 bg-white/95 backdrop-blur-sm shadow-sm transition-transform duration-300 motion-reduce:transition-none ${
          showStickyHeader ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
        aria-hidden={!showStickyHeader}
      >
        <div className="container mx-auto flex items-center gap-3 px-4 py-2">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 flex-shrink-0 rounded-lg object-contain"
            />
          ) : (
            <span
              className="h-9 w-9 flex-shrink-0 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
            />
          )}
          <span className="truncate font-fla text-base md:text-lg text-gray-900">{title}</span>
          {isOngoing && (
            <span className="ml-auto hidden sm:inline-block flex-shrink-0 rounded-full bg-[color:var(--sticky-accent,#f45e5e)]/10 px-3 py-1 text-xs font-semibold text-gray-900" style={{ backgroundColor: `${colors.primary}1a`, color: colors.primary }}>
              {t("programs.active.ongoing")}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
