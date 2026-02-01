import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ACTIVE_PROGRAMS, HISTORICAL_PROGRAMS } from "@/lib/data/programs";
import { generateBlobRadius } from "@/lib/shapes";

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
  };

  return logoMap[title] || title;
}

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
  const showcasePrograms = [...ACTIVE_PROGRAMS, ...HISTORICAL_PROGRAMS].slice(0, 8);
  return (
    <main className="min-h-screen bg-white overflow-x-hidden pt-[108px] sm:pt-[120px]">
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#f45e5e] to-[#d63c3c]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 font-contrail-one tracking-tight break-words">
              Nuestros Programas
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed px-4 max-w-3xl mx-auto font-arimo">
              Programas educativos gratuitos que transforman vidas en toda Argentina
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 break-words font-contrail-one tracking-tight">
                  Programas vigentes
                </h2>
                <div className="w-16 h-1.5 bg-[#bc2222] mx-auto rounded-full mt-3" />
              </div>
              <p className="text-base md:text-lg text-gray-600 mb-10 text-center">
                Programas activos en los que podés participar ahora
              </p>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start justify-items-center">
                {ACTIVE_PROGRAMS.map((program) => (
                  <Link
                    key={program.slug}
                    href={`/programas/${program.slug}`}
                    className="group w-full max-w-md"
                  >
                    <div className="flex flex-col items-center transition-all duration-300">
                      <div
                        className="w-72 h-72 md:w-80 md:h-80 relative flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-105"
                        style={{
                          backgroundColor: `${program.colors.primary}25`,
                          borderRadius: generateBlobRadius(program.title)
                        }}
                      >
                        <div className="absolute inset-0 opacity-30" style={{ backgroundColor: `${program.colors.accent}30`, borderRadius: generateBlobRadius(program.title + 'bg') }} />
                        <div className="relative z-10 w-60 h-40 flex items-center justify-center p-4">
                          <Image
                            src={`/images/Logos/${getLogoFileName(program.title)}.png`}
                            alt={program.title}
                            width={300}
                            height={150}
                            className="object-contain max-h-full filter drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                            priority
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-2xl font-contrail-one text-gray-900 mb-3">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 font-arimo mb-6 line-clamp-3 px-4">
                          {program.shortDescription}
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm">
                          <span className="px-4 py-1.5 rounded-full font-bold shadow-sm" style={{ backgroundColor: `${program.colors.primary}18`, color: program.colors.primary }}>
                            ✓ Inscripciones abiertas
                          </span>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-2 font-bold" style={{ color: program.colors.primary }}>
                          <span>Conocer programa</span>
                          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-gray-200 pt-16">
              <div className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 break-words font-contrail-one tracking-tight">
                  Programas históricos
                </h2>
                <div className="w-16 h-1.5 bg-[#bc2222] mx-auto rounded-full mt-3" />
              </div>
              <p className="text-base md:text-lg text-gray-600 mb-10 text-center">
                Programas que han dejado huella en miles de jóvenes de toda Argentina
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start justify-items-center">
                {HISTORICAL_PROGRAMS.map((program) => (
                  <Link
                    key={program.slug}
                    href={`/programas/${program.slug}`}
                    className="group w-full max-w-sm"
                  >
                    <div className="flex flex-col items-center transition-all duration-300">
                      <div
                        className="w-56 h-56 md:w-64 md:h-64 relative flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-105"
                        style={{
                          backgroundColor: `${program.colors.primary}18`,
                          borderRadius: generateBlobRadius(program.title)
                        }}
                      >
                        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: `${program.colors.accent}20`, borderRadius: generateBlobRadius(program.title + 'hist') }} />
                        <div className="relative z-10 w-48 h-32 flex items-center justify-center p-4">
                          <Image
                            src={`/images/Logos/${getLogoFileName(program.title)}.png`}
                            alt={program.title}
                            width={200}
                            height={100}
                            className="object-contain max-h-full filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute top-0 right-0 z-20">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-100">
                            {program.year}
                          </span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-contrail-one text-gray-800 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-arimo mb-4 line-clamp-2 px-2">
                          {program.shortDescription}
                        </p>
                        <div className="flex items-center justify-center gap-2 font-bold text-sm" style={{ color: program.colors.primary }}>
                          <span>Ver historia</span>
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
              ¿Querés saber más sobre nuestros programas?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Si tenés alguna consulta o querés más información sobre cómo participar, no dudes en contactarnos
            </p>
            <Link
              href="/contactanos"
              className="inline-block bg-[#bc2222] hover:bg-[#d63c3c] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

