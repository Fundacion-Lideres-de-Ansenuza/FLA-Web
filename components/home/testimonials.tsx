import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sofía Martínez",
      content:
        "Ha me mostró que hay un mundo de oportunidades y me enseñó que cualquier cosa que me proponga la puedo lograr.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Camila Díaz",
      content:
        "Desde el primer momento me hizo sentir única, especial y acompañada. Te muestra y brinda muchísimas oportunidades para que alcances tus sueños y te propones nuevos.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">TESTIMONIOS</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Testimonio 1"
              width={200}
              height={200}
              className="rounded-2xl w-full h-auto"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Testimonio 2"
              width={200}
              height={200}
              className="rounded-2xl w-full h-auto"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Testimonio 3"
              width={200}
              height={200}
              className="rounded-2xl w-full h-auto"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Testimonio 4"
              width={200}
              height={200}
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-red-500 text-white p-6 rounded-2xl relative">
                <p className="text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            ))}

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <button className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
