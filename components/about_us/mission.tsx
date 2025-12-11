import Image from "next/image";
import { JSX } from "react";

const girlTeaching : string = "/images/about_us/girlTeaching.png"

export default function Mission(): JSX.Element {
  return (
    <div className="px-4 py-8">
      <div className="max-w-3xl bg-[#bc2222] h-[72px] rounded-[28px] mb-6 flex items-center justify-start mr-auto px-6 shadow-md">
        <p className="font-contrail-one text-[#ffffff] text-[32px]">Misión</p>
      </div>
      <section className="flex flex-col md:flex-row gap-6 items-center font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[18px] md:text-[20px] leading-relaxed">
        <Image src={girlTeaching} alt="girl teaching in fla" width={360} height={320} className="mb-4 md:mb-0 rounded-2xl shadow-md" />
        <article className="w-full md:max-w-[60%]">
            <p className="mb-0 text-justify">Empoderar a jóvenes de todo el país a ser líderes a través de programas educativos y motivacionales, brindando acompañamiento ante oportunidades de desarrollo que les permita concretar proyectos de impacto social.</p>
        </article>
      </section>
    </div>
  );
}
