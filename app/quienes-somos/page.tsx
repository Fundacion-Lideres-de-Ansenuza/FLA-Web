import { JSX } from "react";
import Introduction from "../../components/about_us/introduction";
import Mission from "../../components/about_us/mission";
import Values from "../../components/about_us/values";
import Volunteers from "../../components/about_us/volunteers";
import Vision from "../../components/about_us/vision";
import EnjoyFla from "@/components/about_us/EnjoyFla";

export default function QuienesSomos(): JSX.Element {
  return (
    <main className="min-h-screen bg-white max-w-6xl mx-auto px-4 md:px-6 pt-[108px] sm:pt-[120px]">
      <Introduction />
      <section className="bg-gradient-to-r from-[#fff4f4] via-[#fde7e7] to-[#fff4f4] rounded-3xl p-6 md:p-8 my-6 text-center">
        <h2 className="text-3xl md:text-4xl font-contrail-one text-gray-900 mb-3">Autoridades</h2>
        <p className="text-base md:text-lg text-gray-700 font-arimo max-w-3xl mx-auto">
          Presentamos al equipo directivo de la fundación y a las personas que acompañan nuestra gestión institucional.
        </p>
      </section>
      <h2 className="text-center text-3xl md:text-4xl font-contrail-one mb-4">Misión, Visión y Valores</h2>
      <Mission />
      <Vision />
      <Values />
      <Volunteers />
      <EnjoyFla />
    </main>
  );
}
