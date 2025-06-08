export default function Stats() {
  const stats = [
    { number: "+100", label: "Voluntarios\nactuales", color: "text-red-600" },
    { number: "+2200", label: "Participantes a lo\nlargo de los años", color: "text-red-600" },
    { number: "+50", label: "Proyectos de\nimpacto social", color: "text-red-600" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl lg:text-7xl font-bold ${stat.color} mb-4`}>{stat.number}</div>
              <div className="text-gray-700 font-medium text-lg whitespace-pre-line">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
