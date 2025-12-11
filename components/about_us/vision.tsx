import { JSX } from "react";
import Image from "next/image";
const girlVision = "/images/about_us/girlVision.png"

export default function Vision(): JSX.Element {
  return (
    <div className="px-4 py-8">
      <div className="max-w-3xl bg-[#bc2222] h-[72px] rounded-[28px] mb-6 flex items-center justify-end ml-auto px-6 shadow-md">
        <p className="font-['Contrail_One:Regular',_sans-serif] text-[#ffffff] text-[32px]">Visión</p>
      </div>
      <section className="flex flex-col md:flex-row justify-between items-center gap-6 font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[18px] md:text-[20px] leading-relaxed">
        <article className="w-full md:max-w-[60%]">
            <p className="mb-0 text-justify">Un mundo en el que las nuevas generaciones tengan acceso a educación de calidad, que les permita decidir con libertad y que tengan la motivación de convertirse en líderes y transformar positivamente sus comunidades.</p>
        </article>
        <Image src={girlVision} alt="girlVision" width={360} height={320} className="mb-4 md:mb-0 rounded-2xl shadow-md" />
      </section>
    </div>
  );
}
