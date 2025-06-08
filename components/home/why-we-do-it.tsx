export default function WhyWeDoIt() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-wide">¿POR QUÉ LO HACEMOS?</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-red-500 text-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Impacto social</h3>
            <p className="text-base leading-relaxed">
              Porque impulsamos a quienes participan en nuestros programas a llevar a cabo proyectos que generen
              transformaciones en sus comunidades.
            </p>
          </div>
          <div className="bg-red-600 text-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Educación</h3>
            <p className="text-base leading-relaxed">
              Porque creemos en la educación como recurso y herramienta para solucionar problemas sociales complejos.
            </p>
          </div>
        </div>
        <div className="bg-red-800 text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Oportunidades</h3>
          <p className="text-base leading-relaxed">
            Porque creemos que el talento no tiene fronteras, llevamos experiencias transformadoras hasta los rincones
            más alejados, para que cada joven pueda ser agente de cambio en su comunidad.
          </p>
        </div>
      </div>
    </section>
  )
}
