import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          <div className="grid md:grid-cols-3 gap-8 items-center w-full max-w-7xl lg:max-w-8xl">
            <div className="md:col-span-2 space-y-5 text-left">
              <div className="inline-flex items-center gap-3 text-[#bc2222] font-semibold uppercase tracking-[0.08em] text-sm sm:text-base font-arimo">
                <Image src="/images/LogoFLA.png" alt="Fundación Líderes de Ansenuza" width={48} height={48} className="h-12 w-auto" />
                <span>Fundación Líderes de Ansenuza</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight tracking-tight font-contrail-one">
                Jóvenes transformando la educación
              </h1>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-arimo max-w-3xl">
                Diseñamos y ejecutamos programas educativos gratuitos en todo el territorio argentino para que más jóvenes lideren el cambio en sus comunidades.
              </p>
              <div className="w-2/3 h-1.5 bg-[#f45e5e] rounded-full" />
            </div>

            <div className="row-start-1 md:row-auto hidden sm:flex justify-center md:justify-end">
              <Image src="/images/LogoFLA.png" alt="Identidad FLA" width={140} height={140} className="drop-shadow-lg" />
            </div>
          </div>

          <div className="w-full max-w-8xl px-4">
            <Image
              src="/images/DSC_0044.jpg"
              alt="Jóvenes colaborando en educación"
              width={1400}
              height={500}
              className="w-full h-[380px] lg:h-[460px] rounded-[90px] shadow-2xl object-cover"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
            <Button asChild className="bg-[#90140e] hover:bg-[#a01810] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/contactanos">Voluntariado</Link>
            </Button>
            <Button asChild className="bg-[#bd2222] hover:bg-[#d12828] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/contactanos">Alianzas</Link>
            </Button>
            <Button asChild className="bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[240px] lg:w-[260px] font-contrail">
              <Link href="/donar">Donar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
