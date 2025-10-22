import Image from "next/image"
import Link from "next/link"
import { ACTIVE_PROGRAMS } from "@/lib/data/programs"

export default function CurrentPrograms() {
  const programs = ACTIVE_PROGRAMS.map(program => ({
    name: program.title,
    logo: `/images/Logos/${program.slug === 'ambientalia' ? 'Experiencia Ambientalia' : program.title}.png`,
    href: `/programas/${program.slug}`
  }))

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
      <div className="text-left mb-10">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">PROGRAMAS ACTUALES</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          {programs.map((program, index) => (
            <Link key={index} href={program.href} className="block group">
              <Image
                src={program.logo || "/placeholder.svg"}
                alt={program.name}
                width={360}
                height={180}
                className="mx-auto h-28 md:h-32 lg:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority={index < 2}
              />
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
