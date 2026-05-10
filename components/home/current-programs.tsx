'use client'

import Image from "next/image"
import Link from "next/link"
import { ACTIVE_PROGRAMS } from "@/lib/data/programs"
import { generateBlobRadius } from "@/lib/shapes"
import { useTranslation } from "react-i18next"

function getLogoFileName(title: string): string {
  const logoMap: Record<string, string> = {
    "Experiencia Ambientalia": "Experiencia Ambientalia",
    "SOMOS": "Somos",
    "LÃ­deres": "lideres",
    "Potenciate": "Potenciate",
    "FUTURAS": "Futuras",
    "ImpulsaTEC": "Impulsatec",
    "Ciencia Fuera de la Caja": "Ciencia fuera de la caja",
    "Aventura MatemÃ¡gica": "Aventura Matemagica"
  }

  return logoMap[title] || title
}

export default function CurrentPrograms() {
  const { t } = useTranslation()

  const programs = ACTIVE_PROGRAMS.map(program => ({
    name: program.title,
    slug: program.slug,
    logo: `/images/Logos/${getLogoFileName(program.title)}.webp`,
    href: `/programas/${program.slug}`,
    description: program.shortDescription,
    colors: program.colors
  }))

  return (
    <section className="py-9 sm:py-10 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-3 font-contrail-one tracking-tight">{t('currentPrograms.title')}</h2>
          <p className="text-base md:text-xl text-gray-600 font-arimo max-w-2xl mx-auto">{t('currentPrograms.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-center justify-items-center">
          {programs.map((program, index) => (
            <Link key={index} href={program.href} className="block group w-full max-w-sm">
              <div className="relative flex flex-col items-center text-center rounded-[28px] border border-[#f0d8d8] bg-white/90 px-4 py-6 transition-all duration-300 shadow-[0_20px_50px_rgba(144,20,14,0.06)] group-hover:-translate-y-1">
                <div
                  className="w-56 h-56 md:w-64 md:h-64 flex items-center justify-center relative mb-5 transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: `${program.colors.primary}25`,
                    borderRadius: generateBlobRadius(program.name)
                  }}
                >
                  <div className="absolute inset-0 opacity-20" style={{ backgroundColor: `${program.colors.accent}25`, borderRadius: generateBlobRadius(program.name + 'bg') }} />
                  <div className="relative z-10 w-48 h-32 flex items-center justify-center p-4">
                    <Image
                      src={program.logo || "/placeholder.svg"}
                      alt={program.name}
                      width={360}
                      height={180}
                      className="h-full w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-contrail-one text-gray-900 mb-1">{program.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/programas"
            className="inline-block bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-10 py-3 md:px-12 md:py-4 rounded-full font-contrail text-xl md:text-2xl shadow-lg"
          >
            {t('currentPrograms.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  )
}
