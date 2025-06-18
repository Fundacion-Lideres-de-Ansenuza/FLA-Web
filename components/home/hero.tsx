import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          <div className="grid md:grid-cols-3 gap-8 items-center w-full max-w-6xl">
            <div className="md:col-span-2 space-y-6 text-left">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Jóvenes transformando la educación
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.
              </p>
              <div className="w-1/2 h-1.5 bg-red-500 rounded-full" />
            </div>

            <div className="row-start-1 md:row-auto flex justify-center md:justify-end">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-14 h-14 lg:w-26 lg:h-26 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4 L12 20" />
                  <path d="M4 12 L20 12" />
                  <path d="M6 6 L18 18" />
                  <path d="M6 18 L18 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl px-4">
            <Image
              src="/images/DSC_0044.jpg"
              alt="Jóvenes colaborando en educación"
              width={1200}
              height={400}
              className="w-full h-[400] rounded-l-[200px] rounded-r-[200px] shadow-2xl object-cover"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button className="bg-[#9B1C1C] hover:bg-[#B92A2A] text-white px-10 py-6 rounded-full text-2xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[250px]">
              Voluntariado
            </Button>
            <Button className="bg-[#C83939] hover:bg-[#E04848] text-white px-10 py-6 rounded-full text-2xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[250px]">
              Alianzas
            </Button>
            <Button className="bg-[#E55A5A] hover:bg-[#F27A7A] text-white px-10 py-6 rounded-full text-2xl font-bold shadow-lg transition-transform transform hover:scale-105 w-[250px]">
              Donar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
