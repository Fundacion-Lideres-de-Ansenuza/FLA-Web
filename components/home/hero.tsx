'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="bg-transparent py-6 lg:py-7">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-7 lg:gap-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center w-full rounded-[32px] border border-[#f3d7d7] bg-white/85 px-5 py-6 shadow-[0_20px_60px_rgba(144,20,14,0.06)] backdrop-blur-sm sm:px-7 lg:px-10 lg:py-8">
            <div className="md:col-span-2 space-y-4 text-center md:text-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight tracking-tight font-contrail-one">
                {t('hero.title')}
              </h1>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-arimo max-w-3xl mx-auto">
                {t('hero.description')}
              </p>
              <div className="w-40 sm:w-52 h-1.5 bg-gradient-to-r from-[#90140e] via-[#bc2222] to-[#f45e5e] rounded-full mx-auto" />
            </div>

            <div className="row-start-1 md:row-auto hidden sm:flex justify-center md:justify-end">
              <Image src="/images/LogoFLA.png" alt="Identidad FLA" width={140} height={140} className="drop-shadow-lg" />
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/images/DSC_0044.jpg"
              alt="Jóvenes colaborando en educación"
              width={1400}
              height={500}
              className="w-full h-[260px] sm:h-[320px] lg:h-[420px] rounded-3xl sm:rounded-[52px] lg:rounded-[72px] shadow-[0_30px_80px_rgba(144,20,14,0.16)] object-cover"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center">
            <Button asChild className="bg-[#90140e] hover:bg-[#a01810] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/contactanos">{t('hero.voluntariado')}</Link>
            </Button>
            <Button asChild className="bg-[#bd2222] hover:bg-[#d12828] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/contactanos">{t('hero.alianzas')}</Link>
            </Button>
            <Button asChild className="bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/donar">{t('hero.donar')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
