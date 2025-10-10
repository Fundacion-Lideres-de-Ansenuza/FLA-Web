export default function Impact() {
  const impactNumbers = [
    {
      number: "3",
      label: "Ediciones realizadas",
    },
    {
      number: "+70",
      label: "Participantes",
    },
    {
      number: "+4000",
      label: "Personas impactadas por las acciones realizadas por participantes",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Nuestro Impacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {impactNumbers.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-5xl font-bold text-blue-600 mb-2">
                {item.number}
              </p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}