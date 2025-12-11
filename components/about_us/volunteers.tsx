import Image from "next/image";
import { JSX } from "react";



const flaMap: string = "/images/mapa-fla.png"

export default function Volunteers(): JSX.Element {
  return (
    <div className="justify-center items-center mb-8 flex flex-col lg:flex-row gap-6">
      <section className="flex flex-col items-center justify-center bg-gradient-to-b from-[#fff4f4] to-white rounded-3xl px-8 py-6 shadow-md">
        <h3 className="font-contrail-one text-[#160101] text-[72px] md:text-[80px] leading-tight">+100</h3>
        <h4 className="font-contrail-one text-[#160101] text-[32px] md:text-[36px] leading-tight">Voluntarios</h4>
        <h4 className="font-contrail-one text-[#160101] text-[32px] md:text-[36px] leading-tight">actuales</h4>
</section>
    <section className="flex items-center justify-center">
        <Image src={flaMap} alt="voluntarios" width={520} height={680} className="rounded-3xl shadow-md" />
    </section>
    </div>
  );
}
