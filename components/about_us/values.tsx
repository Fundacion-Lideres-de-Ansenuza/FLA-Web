import { JSX } from "react";
import Image from "next/image";

const imageStars = "/images/voluntarioEstrellitas.png";

const VALUES = [
  {
    title: "LIDERAZGO",
    description:
      "No solo cultivamos este valor en las personas con las que trabajamos sino también en el equipo y en toda la organización. Creemos en el liderazgo que incluye y transforma, que inspira y acompaña, que confía y hace que las cosas pasen.",
  },
  {
    title: "COMPROMISO",
    description:
      "Por llevar soluciones a problemas sociales de la mano de líderes locales y emergentes, brindando herramientas de desarrollo personal y profesional. Por dar lo mejor en cada proyecto y actividad.",
  },
  {
    title: "EMPATÍA",
    description:
      "El corazón de FLA son las personas. Por y para ellas trabajamos; e invertimos tiempo y recursos en el desarrollo integral de cada una, desde la autenticidad, el amor y la entrega.",
  },
  {
    title: "LIBERTAD",
    description:
      "De elegir, de pensar, de ser quien cada uno es respetando a los demás y sus singularidades. De guiarnos como organización por nuestros principios y tomar decisiones de forma autónoma.",
  },
  {
    title: "INNOVACIÓN",
    description:
      "Porque no tenemos miedo de reinventarnos para estar a la vanguardia, entregando propuestas educativas disruptivas y de calidad. Porque somos una usina de ideas que se construye de forma colaborativa minuto a minuto.",
  },
];

export default function Values(): JSX.Element {
  return (
    <section className="px-0 py-2">
      <div className="mb-8 flex flex-col items-center justify-center text-center">
        <div className="rounded-[26px] bg-[linear-gradient(135deg,#bc2222_0%,#f45e5e_100%)] px-6 py-4 shadow-lg">
          <Image src={imageStars} alt="Decoración valores" width={86} height={86} />
        </div>
        <h3 className="mt-5 text-[36px] md:text-[44px] text-[#160101] font-contrail-one">Valores</h3>
      </div>

      <div className="space-y-5">
        {VALUES.map((value, index) => (
          <article key={value.title} className={`pb-5 ${index < VALUES.length - 1 ? "border-b border-[#f1dede]" : ""}`}>
            <div className="inline-flex rounded-full bg-[linear-gradient(135deg,#bc2222_0%,#f45e5e_100%)] px-4 py-2 text-sm font-black tracking-[0.16em] text-white">
              {value.title}
            </div>
            <p className="mt-4 text-[17px] md:text-[18px] leading-relaxed text-[#2c1818] font-arimo">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
