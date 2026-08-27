"use client";

import Image from "next/image";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const flaMap = "/images/Mapa_fla.webp";

export default function Volunteers(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="grid items-center gap-6 lg:grid-cols-[0.78fr_1.22fr] min-h-[400px]">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[360px] rounded-[30px] bg-[linear-gradient(180deg,#fff4f4_0%,#ffffff_100%)] px-6 py-8 text-center shadow-[0_18px_40px_rgba(144,20,14,0.08)]">
          <h3 className="mt-3 font-contrail text-[#160101] text-[72px] md:text-[80px] leading-none">+50</h3>
          <p className="mt-2 font-contrail text-[#160101] text-[28px] md:text-[34px] leading-tight text-center">{t("aboutUs.volunteers.current")}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[30px] max-w-[500px] mx-auto bg-transparent">
        <Image
          src={flaMap}
          alt={t("aboutUs.volunteers.imageAlt")}
          width={1080}
          height={1920}
          className="h-auto w-full rounded-[24px] object-contain shadow-[0_18px_40px_rgba(144,20,14,0.05)] bg-transparent"
        />
      </div>
    </section>
  );
}
