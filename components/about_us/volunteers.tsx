import Image from "next/image";
import { JSX } from "react";



const flaMap: string = "/images/mapa-fla.png"

export default function Volunteers(): JSX.Element {
  return (
    <div className="justify-center items-center mb-8 flex">
<section className="flex flex-col items-center justify-center">
      <h3 className="font-contrail-one text-[#160101] text-[200px] leading-[normal]">+100</h3>
      <h4  className="font-contrail-one text-[#160101] text-[96px] leading-[normal]">Voluntarios</h4>
      <h4  className="font-contrail-one text-[#160101] text-[96px] leading-[normal]">actuales</h4>

</section>
    <section className="flex items-center justify-center">
      <Image src={flaMap} alt="voluntarios" width={600} height={800} />
    </section>
    </div>
  );
}
