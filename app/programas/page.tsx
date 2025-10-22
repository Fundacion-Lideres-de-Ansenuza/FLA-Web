import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ACTIVE_PROGRAMS, HISTORICAL_PROGRAMS } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Nuestros Programas - Fundación Líderes de Ansenuza",
  description: "Conocé todos los programas educativos de FLA: programas vigentes como SOMOS y Experiencia Ambientalia, y nuestros programas históricos que han impactado a miles de jóvenes en Argentina.",
  keywords: [
    "programas fla",
    "programas educativos argentina",
    "somos",
    "ambientalia",
    "potenciate",
    "futuras",
    "impulsatec",
    "fundación líderes ansenuza"
  ],
  openGraph: {
    title: "Nuestros Programas - FLA",
    description: "Programas educativos gratuitos que transforman vidas en toda Argentina",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ProgramasPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#f45e5e] to-[#d63c3c]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-fla">
              Nuestros Programas
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Programas educativos gratuitos que transforman vidas en toda Argentina
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-12 bg-green-500 rounded-full" />
                <h2 className="text-4xl md:text-5xl text-gray-900">
                  Programas Vigentes
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-12">
                Programas activos en los que podés participar ahora
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {ACTIVE_PROGRAMS.map((program) => (
                  <Link
                    key={program.slug}
                    href={`/programas/${program.slug}`}
                    className="group"
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div
                        className="h-48 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${program.colors.primary} 0%, ${program.colors.secondary} 100%)`
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <Image
                            src={`/images/Logos/${program.slug === 'ambientalia' ? 'Experiencia Ambientalia' : program.title}.png`}
                            alt={program.title}
                            width={300}
                            height={150}
                            className="object-contain max-h-32 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                            priority
                          />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {program.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                            ✓ Inscripciones abiertas
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-2" style={{ color: program.colors.primary }}>
                          <span className="font-semibold">Ver más</span>
                          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-gray-200 pt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-12 bg-amber-500 rounded-full" />
                <h2 className="text-4xl md:text-5xl text-gray-900">
                  Programas Históricos
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-12">
                Programas que han dejado huella en miles de jóvenes de toda Argentina
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HISTORICAL_PROGRAMS.map((program) => (
                  <Link
                    key={program.slug}
                    href={`/programas/${program.slug}`}
                    className="group"
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div
                        className="h-32 relative overflow-hidden flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${program.colors.primary} 0%, ${program.colors.secondary} 100%)`
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <Image
                            src={`/images/Logos/${program.title === 'Ciencia Fuera de la Caja' ? 'Ciencia fuera de la caja' : program.title === 'Aventura Matemágica' ? 'Aventura Matemagica' : program.title}.png`}
                            alt={program.title}
                            width={200}
                            height={100}
                            className="object-contain max-h-20 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute top-2 right-2 z-10">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {program.year}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {program.shortDescription}
                        </p>
                        <div className="flex items-center gap-2" style={{ color: program.colors.primary }}>
                          <span className="text-sm font-semibold">Conocer más</span>
                          <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
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

      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              ¿Querés saber más sobre nuestros programas?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Si tenés alguna consulta o querés más información sobre cómo participar, no dudes en contactarnos
            </p>
            <Link
              href="/contactanos"
              className="inline-block bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

