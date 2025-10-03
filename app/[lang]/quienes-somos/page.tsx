import { JSX } from "react";
import Introduction from "../../components/about_us/introduction";
import Mission from "../../components/about_us/mission";
import Values from "../../components/about_us/values";
import Volunteers from "../../components/about_us/volunteers";
import Vision from "../../components/about_us/vision";
import EnjoyFla from "@/components/about_us/EnjoyFla";

export default function QuienesSomos(): JSX.Element {
  return (
    <main className="min-h-screen bg-white max-w-[90%] mx-auto">
      <Introduction />
      <h2 className="text-center text-[80px] font-contrail-one">Misión, Visión y Valores</h2>
      <Mission />
      <Vision />
      <Values />
      <Volunteers />
      <EnjoyFla />
    </main>
  );
}
