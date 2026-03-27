import { JSX } from "react";
import Image from "next/image";

const girlVision = "/images/about_us/girlVision.webp";

export default function Vision(): JSX.Element {
  return (
    <section className="overflow-hidden">
      <div className="grid items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="px-0 py-6 md:px-2 md:py-8 lg:pr-8">
          <span className="inline-flex rounded-full bg-[#90140e] px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg">
            Visión
          </span>
          <p className="mt-5 text-[18px] md:text-[20px] leading-relaxed text-[#2c1818] font-arimo">
            Un mundo en el que las nuevas generaciones tengan acceso a educación de calidad, que les permita decidir con libertad
            y que tengan la motivación de convertirse en líderes y transformar positivamente sus comunidades.
          </p>
        </div>

        <div className="relative min-h-[240px] overflow-hidden rounded-[30px]">
          <Image
            src={girlVision}
            alt="Visión de la fundación"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(144,20,14,0.14)_0%,rgba(244,94,94,0.22)_100%)]" />
        </div>
      </div>
    </section>
  );
}
