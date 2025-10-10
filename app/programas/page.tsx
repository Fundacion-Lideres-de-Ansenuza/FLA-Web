import ProgramCard from "@/components/programas/program-card";

export default function Programas() {
  const programs = [
    {
      title: "SOMOS",
      description: "Programa gratuito de liderazgo en diversidad para jóvenes de 15 a 19 años.",
      imageUrl: "/images/somos-banner.jpg",
      link: "/programas/somos",
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Nuestro Programa
        </h1>
        <div className="flex justify-center">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}