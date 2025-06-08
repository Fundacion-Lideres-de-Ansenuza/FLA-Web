import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-white py-24 lg:py-32 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Jóvenes transformando la educación
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow">Voluntariado</Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow">Alianzas</Button>
              <Button className="bg-red-400 hover:bg-red-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow">Donar</Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Jóvenes colaborando en educación"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                priority
              />
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
