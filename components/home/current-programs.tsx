import Image from "next/image"
import Link from "next/link"
import { ACTIVE_PROGRAMS } from "@/lib/data/programs"

function getLogoFileName(title: string): string {
  const logoMap: Record<string, string> = {
    "Experiencia Ambientalia": "Experiencia Ambientalia",
    "SOMOS": "Somos",
    "Líderes": "lideres",
  }

  return logoMap[title] || title
}

export default function CurrentPrograms() {
  const programs = ACTIVE_PROGRAMS.map(program => ({
    name: program.title,
    logo: `/images/Logos/${getLogoFileName(program.title)}.png`,
    href: `/programas/${program.slug}`,
    description: program.shortDescription,
    colors: program.colors
  }))

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
      <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-3 font-contrail-one tracking-tight">Programas actuales</h2>
          <p className="text-base md:text-lg text-gray-600 font-arimo">Elegí el programa que mejor se adapte a vos y conocé sus detalles al instante.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
          {programs.map((program, index) => (
            <Link key={index} href={program.href} className="block group">
              <div className="h-full rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                <div
                  className="h-28 md:h-32 flex items-center justify-center px-4"
                  style={{ backgroundColor: `${program.colors.primary}1f` }}
                >
                  <div className="bg-white/90 rounded-xl px-3 py-2 shadow-sm">
              <Image
                src={program.logo || "/placeholder.svg"}
                alt={program.name}
                width={360}
                height={180}
                      className="mx-auto h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority={index < 2}
              />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <p className="text-base font-semibold text-gray-900">{program.name}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/programas"
            className="inline-block bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-10 py-3 md:px-12 md:py-4 rounded-full font-contrail text-xl md:text-2xl shadow-lg"
          >
            Ver todos los programas
          </Link>
          <p className="text-sm md:text-base text-gray-700 mt-4 font-arimo">
            ¿Necesitás ayuda para elegir? Escribinos a <a href="mailto:contacto@lideresdeansenuza.org" className="font-semibold text-[#bc2222] hover:underline">contacto@lideresdeansenuza.org</a>
          </p>
        </div>
      </div>
    </section>
  )
}
