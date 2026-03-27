import Image from "next/image";
import { JSX } from "react";

const flaMap = "/images/about_us/Mapa_pintado_FLA.webp";

export default function Volunteers(): JSX.Element {
  return (
    <section className="grid items-center gap-6 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="flex justify-center">
        <div className="w-full max-w-[360px] rounded-[30px] bg-[linear-gradient(180deg,#fff4f4_0%,#ffffff_100%)] px-6 py-8 text-center shadow-[0_18px_40px_rgba(144,20,14,0.08)]">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#bc2222]">Comunidad activa</p>
          <h3 className="mt-3 font-contrail-one text-[#160101] text-[72px] md:text-[80px] leading-none">+100</h3>
          <p className="mt-2 font-contrail-one text-[#160101] text-[28px] md:text-[34px] leading-tight">
            Voluntarios actuales
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[30px]">
        <Image
          src={flaMap}
          alt="Mapa de voluntarios"
          width={900}
          height={620}
          className="h-auto w-full rounded-[24px] object-cover shadow-[0_18px_40px_rgba(144,20,14,0.05)]"
        />
      </div>
    </section>
  );
}
