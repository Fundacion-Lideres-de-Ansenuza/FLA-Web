import Image from "next/image";
import { JSX } from "react";

const imgCapturaDePantalla20250806ALaS2012491: string = "http://localhost:3845/assets/becbc097c0959380a0028a376f9ae0ac22ea006d.png";
const girlVision = "/images/about_us/girlVision.png"

export default function Vision(): JSX.Element {
  return (
    <div className="px-4 py-8">
      <div className="max-w-[1020px] bg-[#bc2222] h-[92px] rounded-[80px] mb-8 flex items-center justify-end ml-auto">
        <p className="font-['Contrail_One:Regular',_sans-serif] text-[#ffffff] text-[55.15px] mr-[30px]">Visión</p>
      </div>
      <section className="flex justify-around items-center  font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[40px] ">
        <article className="max-w-[60%]">
            <p className="mb-0 text-justify">Un mundo en el que las nuevas generaciones tengan acceso a educación de calidad, que les permita decidir con libertad y que tengan la motivación de convertirse en líderes y transformar positivamente sus comunidades.</p>
        </article>
        <Image src={girlVision} alt="girlVision" width={415} height={357} className="mb-8 ml-auto" />
      </section>
    </div>
  );
}
