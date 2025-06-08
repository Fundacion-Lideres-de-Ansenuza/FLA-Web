export default function WhyWeDoIt() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">¿POR QUÉ LO HACEMOS?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Impacto Social */}
          <div className="bg-red-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Impacto social</h3>
            <p className="text-sm leading-relaxed">
              Porque impulsamos a quienes participan en nuestros programas a llevar a cabo proyectos que generen
              transformaciones en sus comunidades.
            </p>
          </div>

          {/* Educación */}
          <div className="bg-red-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Educación</h3>
            <p className="text-sm leading-relaxed">
              Porque creemos en la educación como recurso y herramienta para solucionar problemas sociales complejos.
            </p>
          </div>
        </div>

        {/* Oportunidades */}
        <div className="bg-red-800 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Oportunidades</h3>
          <p className="text-sm leading-relaxed">
            Porque creemos que el talento no tiene fronteras, llevamos experiencias transformadoras hasta los rincones
            más alejados, para que cada joven pueda ser agente de cambio en su comunidad.
          </p>
        </div>
      </div>
    </section>
  )
}
