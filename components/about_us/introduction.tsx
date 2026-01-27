import { JSX } from "react";

const imgSerParteDeFlaNoEsSimplementeVoluntariarEsConectarConPersonasIncreiblesCrearRecuerdosInolvidablesYApostarASerParteDelCambioQueDeseasVerEnLaComunidadEnFlaHemosCompartidoMomento1: string = "http://localhost:3845/assets/97bc07ceeb67b50d3ce0ee0490daee7ada3429bc.png";

export default function Introduction(): JSX.Element {
  return (
    <div className="px-4 py-8">
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="font-contrail-one text-[#000000] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] tracking-tight">LA FUNDACIÓN</h1>
        <p className="font-['Arimo:Regular',_sans-serif] font-normal text-[#000000] text-[20px] md:text-[22px] mt-3 leading-relaxed">
          La Fundación Líderes de Ansenuza es una organización no gubernamental con sede en Miramar de Ansenuza, Córdoba, cuyo trabajo gira en torno al diseño y ejecución de programas educativos en el territorio argentino.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-8 rounded-3xl sm:rounded-[50px] md:rounded-[80px] overflow-hidden relative shadow-lg">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${imgSerParteDeFlaNoEsSimplementeVoluntariarEsConectarConPersonasIncreiblesCrearRecuerdosInolvidablesYApostarASerParteDelCambioQueDeseasVerEnLaComunidadEnFlaHemosCompartidoMomento1}')` }} />
        <div className="absolute inset-0 bg-[#f45e5e] opacity-45 rounded-3xl sm:rounded-[50px] md:rounded-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[18px] md:text-[20px] leading-relaxed mb-8 space-y-4">
        <p className="mb-0">
          <span className="text-black">En la</span>
          <span className="font-['Arimo:Bold',_sans-serif] font-bold text-[#90140e]">{` Fundación Líderes de Ansenuza`}</span>
          <span className="text-black">{` (FLA), creemos en el potencial de cada joven para transformar su comunidad y construir un futuro mejor. Nuestra misión es formar agentes de cambio, ofreciendo oportunidades, herramientas y acompañamiento para que los jóvenes desarrollen liderazgo y generen impacto social.`}</span>
        </p>
        <p className="mb-0">Trabajamos en todo el territorio argentino, con especial atención a las regiones rurales y semiurbanas, así como a las grandes ciudades. Nuestro objetivo es llegar a quienes más lo necesitan, brindando experiencias vivenciales, sin barreras económicas, que promueven el aprendizaje mediante la acción y la innovación.</p>
        <p className="mb-0">{`FLA no solo se centra en la formación de líderes, sino en crear una comunidad inclusiva, diversa y comprometida, donde los jóvenes encuentran un espacio seguro para potenciar sus ideas y proyectos sostenibles. `}</p>
        <p className="mb-0">
          <span className="text-black">{`Estar en FLA significa ser parte de un `}</span>
          <span className="font-['Arimo:Bold',_sans-serif] font-bold text-[#90140e]">{`movimiento que apuesta a la igualdad de oportunidades y al poder de la juventud para generar un impacto real y duradero. `}</span>
          <span className="text-black">Juntos, estamos construyendo un futuro lleno de posibilidades y liderazgo para todos.</span>
        </p>
      </div>
    </div>
  );
}
