'use client'

import Image from "next/image"
import Link from "next/link"
import { ACTIVE_PROGRAMS } from "@/lib/data/programs"
import { useTranslation } from "react-i18next"

function getLogoFileName(title: string): string {
  const logoMap: Record<string, string> = {
    "Experiencia Ambientalia": "Experiencia_Ambientalia",
    "SOMOS": "Somos",
    "Líderes": "lideres",
    "Potenciate": "Potenciate",
    "FUTURAS": "Futuras",
    "ImpulsaTEC": "Impulsatec",
    "Ciencia Fuera de la Caja": "Ciencia fuera de la caja",
    "Aventura Matemágica": "Aventura Matemagica",
    "Decidir con Ciencia": "Decidir_con_Ciencia.png"
  }

  return logoMap[title] || title
}

export default function CurrentPrograms() {
  const { t } = useTranslation()

  const programs = ACTIVE_PROGRAMS.map(program => ({
    name: program.title,
    slug: program.slug,
    logo: getLogoFileName(program.title).endsWith(".png") ? `/images/Logos/${getLogoFileName(program.title)}` : `/images/Logos/${getLogoFileName(program.title)}.webp`,
    href: `/programas/${program.slug}`,
    description: program.shortDescription,
    colors: program.colors
  }))

  return (
    <section className="py-9 sm:py-10 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-3 font-fla tracking-tight">{t('currentPrograms.title')}</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">{t('currentPrograms.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-center justify-items-center">
          {programs.map((program, index) => (
            <Link key={index} href={program.href} className="block group w-full max-w-sm">
              <div className="relative flex flex-col items-center text-center px-4 py-2 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative mb-4 flex h-56 w-56 items-center justify-center rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 md:h-64 md:w-64">
                  <Image
                    src={program.logo || "/placeholder.svg"}
                    alt={program.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="text-2xl font-fla text-gray-900">{program.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/programas"
            className="inline-block bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-10 py-3 md:px-12 md:py-4 rounded-full font-fla text-xl md:text-2xl shadow-lg"
          >
            {t('currentPrograms.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  )
}
