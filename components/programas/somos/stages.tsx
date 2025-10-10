export default function Stages() {
  const stages = [
    {
      title: "Aprendé!",
      items: [
        "Talleres de diversidad",
        "Manual de desarrollo personal",
        "Manual de desarrollo de proyectos",
        "Mentorías semanales",
      ],
    },
    {
      title: "Accioná!",
      items: ["¡Hora de implementar tu acción de impacto en tu comunidad!🥳"],
    },
    {
      title: "Cierre",
      items: [
        "Compartimos las acciones realizadas",
        "¡Ya pueden ser parte de la comunidad de FLA!",
      ],
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Etapas del programa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {stage.title}
              </h3>
              <ul className="text-gray-600 space-y-2">
                {stage.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}