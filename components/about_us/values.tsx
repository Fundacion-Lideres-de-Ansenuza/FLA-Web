import React from 'react';
import Image from "next/image";
import { JSX } from "react";

const imageStars: string = "/images/voluntarioEstrellitas.png";

function VolunteersWithStars(): JSX.Element {
  return (
    <div className="bg-[#f45e5e] h-[64px] rounded-[20px] w-[220px] flex items-center justify-center shadow-md">
      <Image src={imageStars} alt="stars" width={76} height={76} />
    </div>
  );
}

function ValueComponent({ title, description }: { title: string; description: string }): JSX.Element {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-3">
        <div className="bg-gradient-to-r from-[#bc2222] to-[#f45e5e] h-[68px] rounded-[24px] w-full md:w-[75%] flex items-center px-5 shadow-md">
          <p className="font-contrail-one text-[#ffffff] text-[28px] md:text-[32px] text-start">{title}</p>
        </div>
        <VolunteersWithStars />
      </div>
      <p className="font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[18px] md:text-[20px] leading-relaxed pl-1 md:pl-2 text-justify">{description}</p>
    </div>
  );
}

function Values(): JSX.Element {
  return (
    <div className="px-4 py-8">
      <h3 className="font-contrail-one text-[#160101] text-[36px] md:text-[44px] text-center mb-4">Valores</h3>

      <ValueComponent title="LIDERAZGO" description="No solo cultivamos este valor en las personas con las que trabajamos sino también en el equipo y en toda la organización. Creemos en el liderazgo que incluye y transforma, que inspira y acompaña, que confía y hace que las cosas pasen." />

      <ValueComponent title="COMPROMISO" description="Por llevar soluciones a problemas sociales de la mano de líderes locales y emergentes, brindando herramientas de desarrollo personal y profesional. Por dar lo mejor en cada proyecto y actividad." />

      <ValueComponent title="EMPATÍA" description="El corazón de FLA son las personas. Por y para ellas trabajamos; e invertimos tiempo y recursos en el desarrollo integral de cada una, desde la autenticidad, el amor y la entrega." />

      <ValueComponent title="LIBERTAD" description="De elegir, de pensar, de ser quien cada uno es respetando a los demás y sus singularidades. De guiarnos como organización por nuestros principios y tomar decisiones de forma autónoma." />
        <ValueComponent title="INNOVACIÓN" description="Porque no tenemos miedo de reinventarnos para estar a la vanguardia, entregando programas educativos disruptivos y de calidad. Porque somos una usina de ideas que se construye de forma colaborativa minuto a minuto." />

    </div>
  );
}

export default Values;