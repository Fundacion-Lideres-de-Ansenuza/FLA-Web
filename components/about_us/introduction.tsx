import { JSX } from "react";

const imgSerParteDeFlaNoEsSimplementeVoluntariarEsConectarConPersonasIncreiblesCrearRecuerdosInolvidablesYApostarASerParteDelCambioQueDeseasVerEnLaComunidadEnFlaHemosCompartidoMomento1: string = "http://localhost:3845/assets/97bc07ceeb67b50d3ce0ee0490daee7ada3429bc.png";

type IntroductionDictionary = {
  title: string;
  subtitle: string;
  paragraph1_part1: string;
  paragraph1_part2: string;
  paragraph1_part3: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4_part1: string;
  paragraph4_part2: string;
  paragraph4_part3: string;
};

interface IntroductionProps {
  dictionary: IntroductionDictionary;
}

export default function Introduction({ dictionary }: IntroductionProps): JSX.Element {
  return (
    <div className="px-4 py-8">
      <div className="max-w-[1535px] mx-auto mb-8">
        <h1 className="font-contrail-one text-[#000000] text-[96px]">{dictionary.title}</h1>
        <p className="font-['Arimo:Regular',_sans-serif] font-normal text-[#000000] text-[36px] mt-4">
          {dictionary.subtitle}
        </p>
      </div>

      <div className="max-w-[1681px] mx-auto mb-8 rounded-[1000px] overflow-hidden relative">
        <div className="w-full h-[325px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${imgSerParteDeFlaNoEsSimplementeVoluntariarEsConectarConPersonasIncreiblesCrearRecuerdosInolvidablesYApostarASerParteDelCambioQueDeseasVerEnLaComunidadEnFlaHemosCompartidoMomento1}')` }} />
        <div className="absolute inset-0 bg-[#f45e5e] opacity-50 rounded-[1000px]" />
      </div>

      <div className="max-w-[1580px] mx-auto font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[40px] leading-[normal] mb-8">
        <p className="mb-0">
          <span className="text-black">{dictionary.paragraph1_part1}</span>
          <span className="font-['Arimo:Bold',_sans-serif] font-bold text-[#90140e]">{dictionary.paragraph1_part2}</span>
          <span className="text-black">{dictionary.paragraph1_part3}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{dictionary.paragraph2}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{dictionary.paragraph3}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="text-black">{dictionary.paragraph4_part1}</span>
          <span className="font-['Arimo:Bold',_sans-serif] font-bold text-[#90140e]">{dictionary.paragraph4_part2}</span>
          <span className="text-black">{dictionary.paragraph4_part3}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
      </div>
    </div>
  );
}
