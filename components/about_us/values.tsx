import React from 'react';
import Image from "next/image";
import { JSX } from "react";

const imageStars: string = "/images/voluntarioEstrellitas.png";

function VolunteersWithStars(): JSX.Element {
  return (
              <div className="bg-[#bd2222] h-[90px] rounded-[80px] w-[289px] flex items-center justify-center">
        <Image src={imageStars} alt="stars" width={100} height={100} />
        </div>
  );
}

function ValueComponent({ title, description }: { title: string; description: string }): JSX.Element {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-[#90140e] h-[90px] rounded-[80px] w-[834px] flex items-center justify-start pl-5">
          <p className="font-contrail-one text-[#ffffff] text-[55.15px] text-start">{title}</p>
        </div>
        <VolunteersWithStars />
      </div>
      <p className="font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[40px] leading-[normal] pl-5 text-justify">{description}</p>
    </div>
  );
}

function Values(): JSX.Element {
  return (
    <div className="px-4 py-8">
      <h3 className="font-contrail-one text-[#160101] text-[80px] text-center">Valores</h3>

      <ValueComponent title="LIDERAZGO" description="No solo cultivamos este valor en las personas con las que trabajamos sino también en el equipo y en toda la organización. Creemos en el liderazgo que incluye y transforma, que inspira y acompaña, que confía y hace que las cosas pasen." />

      <ValueComponent title="COMPROMISO" description="Por llevar soluciones a problemas sociales de la mano de líderes locales y emergentes, brindando herramientas de desarrollo personal y profesional. Por dar lo mejor en cada proyecto y actividad." />

      <ValueComponent title="EMPATÍA" description="El corazón de FLA son las personas. Por y para ellas trabajamos; e invertimos tiempo y recursos en el desarrollo integral de cada una, desde la autenticidad, el amor y la entrega." />

      <ValueComponent title="LIBERTAD" description="De elegir, de pensar, de ser quien cada uno es respetando a los demás y sus singularidades. De guiarnos como organización por nuestros principios y tomar decisiones de forma autónoma." />
        <ValueComponent title="INNOVACIÓN" description="Porque no tenemos miedo de reinventarnos para estar a la vanguardia, entregando programas educativos disruptivos y de calidad. Porque somos una usina de ideas que se construye de forma colaborativa minuto a minuto." />

    </div>
  );
}

export default Values;