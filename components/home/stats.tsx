export default function Stats() {
  const stats = [
    { number: "+100", label: "Voluntarios\nactuales", color: "text-red-600" },
    { number: "+2200", label: "Participantes a lo\nlargo de los años", color: "text-red-600" },
    { number: "+50", label: "Proyectos de\nimpacto social", color: "text-red-600" },
  ]

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl shadow p-8">
              <div className={`text-5xl lg:text-7xl font-extrabold ${stat.color} mb-4 drop-shadow`}>{stat.number}</div>
              <div className="text-gray-700 font-semibold text-lg whitespace-pre-line tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
