import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          <div className="grid md:grid-cols-3 gap-8 items-center w-full max-w-7xl lg:max-w-8xl">
            <div className="md:col-span-2 space-y-6 text-left">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight font-saridona">
                Jóvenes transformando la educación
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-arimo">
                Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.
              </p>
              <div className="w-1/2 h-1.5 bg-[#f45e5e] rounded-full" />
            </div>

            <div className="row-start-1 md:row-auto hidden sm:flex justify-center md:justify-end">
              <Image src="/images/Iconoito.png" alt="Logo" width={115} height={115} />
            </div>
          </div>

          <div className="w-full max-w-8xl px-4">
            <Image
              src="/images/DSC_0044.jpg"
              alt="Jóvenes colaborando en educación"
              width={1400}
              height={500}
              className="w-full h-[400px] lg:h-[500px] rounded-l-[200px] rounded-r-[200px] shadow-2xl object-cover"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button className="bg-[#90140e] hover:bg-[#a01810] text-white px-10 py-6 rounded-full text-2xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[250px] lg:w-[280px] font-contrail">
              Voluntariado
            </Button>
            <Button className="bg-[#bd2222] hover:bg-[#d12828] text-white px-10 py-6 rounded-full text-2xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[250px] lg:w-[280px] font-contrail">
              Alianzas
            </Button>
            <Button className="bg-[#f45e5e] hover:bg-[#f67a7a] text-white px-10 py-6 rounded-full text-2xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[250px] lg:w-[280px] font-contrail">
              Donar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
