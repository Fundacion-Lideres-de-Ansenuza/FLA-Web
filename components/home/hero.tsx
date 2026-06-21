'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="bg-transparent py-8 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-10">
            <div className="max-w-5xl space-y-4 text-left">
              <p className="text-lg sm:text-xl lg:text-2xl italic font-contrail-one text-[#9f231b]">
                {t("hero.subtitle")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[0.95] tracking-tight font-contrail-one">
                {t("hero.title")}
              </h1>
              <p className="max-w-4xl text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-arimo">
                {t("hero.description")}
              </p>
              <div className="h-1.5 w-40 rounded-full bg-gradient-to-r from-[#90140e] via-[#bc2222] to-[#f45e5e] sm:w-52" />
            </div>

            <div className="hidden shrink-0 lg:block">
              <Image
                src="/images/LogoFLA.webp"
                alt="Identidad FLA"
                width={150}
                height={150}
                className="drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/images/DSC_0044.webp"
              alt="Jóvenes colaborando en educación"
              width={1400}
              height={500}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1400px"
              className="w-full h-[260px] sm:h-[320px] lg:h-[420px] rounded-3xl sm:rounded-[52px] lg:rounded-[72px] shadow-[0_30px_80px_rgba(144,20,14,0.16)] object-cover"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start justify-start">
            <Button asChild className="bg-[#90140e] hover:bg-[#a01810] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/contactanos">{t("hero.voluntariado")}</Link>
            </Button>
            <Button asChild className="bg-[#bd2222] hover:bg-[#d12828] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/contactanos">{t("hero.alianzas")}</Link>
            </Button>
            <Button asChild className="bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/donar">{t("hero.donar")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
