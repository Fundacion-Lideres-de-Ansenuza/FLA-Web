import type React from "react"

export default function WhyWeDoIt(): React.ReactElement {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-10 flex items-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 transform rotate-180 mr-2">?</h2>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">POR QUÉ LO HACEMOS?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <img src="/images/IMG_0745-min.png" alt="Impacto social" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-red-600/80" />
            <div className="relative text-white p-10">
              <h3 className="text-5xl md:text-6xl leading-none">Impacto social</h3>
              <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl">
                Porque impulsamos a quienes participan en nuestros programas a llevar a cabo proyectos que generen
                transformaciones en sus comunidades.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <img src="/images/TESTIMONIO_1CUT.png" alt="Educación" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-red-700/80" />
            <div className="relative text-white p-10">
              <h3 className="text-5xl md:text-6xl leading-none">Educación</h3>
              <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl">
                Porque creemos en la educación como recurso y herramienta para solucionar problemas sociales.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <img src="/images/IMG_0621-min.png" alt="Oportunidades" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-red-800/80" />
          <div className="relative text-white p-10">
            <h3 className="text-5xl md:text-6xl leading-none">Oportunidades</h3>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-4xl">
              Porque creemos que el talento no tiene fronteras, llevamos experiencias transformadoras hasta los rincones
              más alejados, para que cada joven pueda ser agente de cambio en su comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
