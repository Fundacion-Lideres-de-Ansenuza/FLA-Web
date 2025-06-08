import Image from "next/image"

export default function CurrentPrograms() {
  const programs = [
    { name: "Potenciate", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Futuras", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Experiencia Ambiental", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Somos", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-wide">PROGRAMAS ACTUALES</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {programs.map((program, index) => (
            <div key={index} className="text-center bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
              <Image
                src={program.logo || "/placeholder.svg"}
                alt={program.name}
                width={120}
                height={80}
                className="mx-auto mb-4"
              />
              <span className="text-gray-700 font-semibold text-lg">{program.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">
            Ver todos los programas
          </button>
        </div>
      </div>
    </section>
  )
}
