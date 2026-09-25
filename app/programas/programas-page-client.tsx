"use client"

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { getActivePrograms, getHistoricalPrograms } from "@/lib/data/programs-i18n";
import { getProgramLogoSrc } from "@/lib/data/program-logos";
import { useTranslation } from "react-i18next";

export default function ProgramasPage() {
  const { t } = useTranslation();
  const locale = (t("language.label") === "Language" ? "en" : "es") as "es" | "en";
  const activePrograms = useMemo(() => getActivePrograms(locale), [locale]);
  const historicalPrograms = useMemo(() => getHistoricalPrograms(locale), [locale]);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden pt-[108px] sm:pt-[120px]">
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#f45e5e] to-[#d63c3c]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 font-fla tracking-tight break-words">
              {t('programs.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed px-4 max-w-3xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 break-words font-fla tracking-tight">
                  {t('programs.active.title')}
                </h2>
                <div className="w-16 h-1.5 bg-[#bc2222] mx-auto rounded-full mt-3" />
              </div>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 items-start justify-items-center">
                {activePrograms.map((program) => (
                  <Link
                    key={program.slug}
                    href={`/programas/${program.slug}`}
                    className="group w-full max-w-xs"
                  >
                    <div className="flex flex-col items-center transition-all duration-300">
                      <div className="relative mb-8">
                        <div className="flex h-56 w-56 items-center justify-center rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <Image
                            src={getProgramLogoSrc(program.slug) ?? "/images/Logos/logo FLA.webp"}
                            alt={program.title}
                            width={300}
                            height={300}
                            className="h-full w-full object-contain"
                            priority
                          />
                        </div>
                        {program.enCurso && (
                          <span
                            className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm text-white"
                            style={{ backgroundColor: program.colors.primary }}
                          >
                            {t('programs.active.ongoing')}
                          </span>
                        )}
                      </div>

                      <div className="text-center">
                        <h3 className="text-2xl font-fla text-gray-900 mb-3">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 px-4">
                          {program.shortDescription}
                        </p>
                        {program.enrollmentOpen !== false && (
                          <div className="inline-flex items-center gap-2 text-sm">
                            <span className="px-4 py-1.5 rounded-full font-bold shadow-sm" style={{ backgroundColor: `${program.colors.primary}18`, color: program.colors.primary }}>
                              {t('programs.active.openEnrollment')}
                            </span>
                          </div>
                        )}
                        <div className="mt-6 flex items-center justify-center gap-2 font-bold" style={{ color: program.colors.primary }}>
                          <span>{t('programs.active.learnMore')}</span>
                          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-gray-200 pt-6 md:pt-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 break-words font-fla tracking-tight">
                  {t('programs.historical.title')}
                </h2>
                <div className="w-16 h-1.5 bg-[#bc2222] mx-auto rounded-full mt-3" />
              </div>
              <p className="text-base md:text-lg text-gray-600 mb-10 text-center">
                {t('programs.historical.subtitle')}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start justify-items-center lg:[&>*:nth-last-child(1):nth-child(3n+1)]:col-start-2">
                {historicalPrograms.map((program) => (
                  <Link
                    key={program.slug}
                    href={`/programas/${program.slug}`}
                    className="group w-full max-w-sm"
                  >
                    <div className="flex flex-col items-center transition-all duration-300">
                      <div className="relative mb-6">
                        <div className="flex h-48 w-48 items-center justify-center rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                          <Image
                            src={getProgramLogoSrc(program.slug) ?? "/images/Logos/logo FLA.webp"}
                            alt={program.title}
                            width={200}
                            height={200}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="absolute top-0 right-0 z-20 translate-x-2 -translate-y-2">
                          <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-100">
                            {program.year}
                          </span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-fla text-gray-800 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2 px-2">
                          {program.shortDescription}
                        </p>
                        <div className="flex items-center justify-center gap-2 font-bold text-sm" style={{ color: program.colors.primary }}>
                          <span>{t('programs.historical.viewHistory')}</span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#fff4f4] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6 break-words px-2">
              {t('programs.cta.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('programs.cta.subtitle')}
            </p>
            <Link
              href="/contactanos"
              className="inline-block bg-[#bc2222] hover:bg-[#d63c3c] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('programs.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
