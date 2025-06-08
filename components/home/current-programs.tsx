import Image from "next/image"

export default function CurrentPrograms() {
  const programs = [
    { name: "Potenciate", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Futuras", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Experiencia Ambiental", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Somos", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">PROGRAMAS ACTUALES</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {programs.map((program, index) => (
            <div key={index} className="text-center">
              <Image
                src={program.logo || "/placeholder.svg"}
                alt={program.name}
                width={120}
                height={80}
                className="mx-auto mb-4"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium">
            Ver todos los programas
          </button>
        </div>
      </div>
    </section>
  )
}
