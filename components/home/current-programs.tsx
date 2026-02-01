import Image from "next/image"
import Link from "next/link"
import { ACTIVE_PROGRAMS } from "@/lib/data/programs"
import { generateBlobRadius } from "@/lib/shapes"

function getLogoFileName(title: string): string {
  const logoMap: Record<string, string> = {
    "Experiencia Ambientalia": "Experiencia Ambientalia",
    "SOMOS": "Somos",
    "Líderes": "lideres",
    "Potenciate": "Potenciate",
    "FUTURAS": "Futuras",
    "ImpulsaTEC": "Impulsatec",
    "Ciencia Fuera de la Caja": "Ciencia fuera de la caja",
    "Aventura Matemágica": "Aventura Matemagica"
  }

  return logoMap[title] || title
}

export default function CurrentPrograms() {
  const programs = ACTIVE_PROGRAMS.map(program => ({
    name: program.title,
    slug: program.slug,
    logo: `/images/Logos/${getLogoFileName(program.title)}.png`,
    href: `/programas/${program.slug}`,
    description: program.shortDescription,
    colors: program.colors
  }))

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 font-contrail-one tracking-tight">Programas actuales</h2>
          <p className="text-base md:text-xl text-gray-600 font-arimo max-w-2xl mx-auto">Elegí el programa que mejor se adapte a vos y conocé sus detalles al instante.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-center justify-items-center">
          {programs.map((program, index) => (
            <Link key={index} href={program.href} className="block group w-full max-w-sm">
              <div className="relative flex flex-col items-center text-center transition-all duration-300">
                <div
                  className="w-64 h-64 md:w-72 md:h-72 flex items-center justify-center relative mb-6 transition-all duration-500 group-hover:scale-110"
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
                      priority={index < 2}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-contrail-one text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-600 font-arimo line-clamp-2 px-4">{program.description}</p>
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
        </div>
      </div>
    </section>
  )
}
