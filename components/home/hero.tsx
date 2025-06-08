import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Jóvenes transformando la educación
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">Voluntariado</Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full">Alianzas</Button>
              <Button className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-full">Donar</Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Jóvenes colaborando en educación"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-lg"
                priority
              />
            </div>

            {/* Decorative Star */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
