import type React from "react"
import Image from "next/image"

export default function WhyWeDoIt(): React.ReactElement {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-3 font-contrail-one">¿Por qué lo hacemos?</h2>
          <p className="text-base md:text-lg text-gray-600 font-arimo">Porque la educación crea oportunidades y transforma comunidades.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <Image 
                src="/images/IMG_0745-min.png" 
                alt="Impacto social" 
                className="w-full h-full object-cover" 
                width={600}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-[#bc2222]/75" />
            <div className="relative text-white p-10">
              <h3 className="text-3xl md:text-4xl leading-tight">Impacto social</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl">
                Porque impulsamos a quienes participan en nuestros programas a llevar a cabo proyectos que generen
                transformaciones en sus comunidades.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <Image 
                src="/images/TESTIMONIO_1CUT.png" 
                alt="Educación" 
                className="w-full h-full object-cover" 
                width={600}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-[#d63c3c]/75" />
            <div className="relative text-white p-10">
              <h3 className="text-3xl md:text-4xl leading-tight">Educación</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl">
                Porque creemos en la educación como recurso y herramienta para solucionar problemas sociales.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <Image 
              src="/images/IMG_0621-min.png" 
              alt="Oportunidades" 
              className="w-full h-full object-cover" 
              width={1200}
              height={600}
            />
          </div>
          <div className="absolute inset-0 bg-[#f45e5e]/75" />
          <div className="relative text-white p-10">
            <h3 className="text-3xl md:text-4xl leading-tight">Oportunidades</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-4xl">
              Porque creemos que el talento no tiene fronteras, llevamos experiencias transformadoras hasta los rincones
              más alejados, para que cada joven pueda ser agente de cambio en su comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
