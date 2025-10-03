import { JSX } from "react";
import Introduction from "@/components/about_us/introduction";
import Mission from "@/components/about_us/mission";
import Values from "@/components/about_us/values";
import Volunteers from "@/components/about_us/volunteers";
import Vision from "@/components/about_us/vision";
import EnjoyFla from "@/components/about_us/EnjoyFla";
import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function QuienesSomos({ params: { lang } }: { params: { lang: Locale } }): Promise<JSX.Element> {
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white max-w-[90%] mx-auto">
      <Introduction dictionary={dictionary.introduction} />
      <h2 className="text-center text-[80px] font-contrail-one">{dictionary.about_us.mission_vision_values}</h2>
      <Mission dictionary={dictionary.about_us.mission} />
      <Vision dictionary={dictionary.about_us.vision} />
      <Values />
      <Volunteers />
      <EnjoyFla />
    </main>
  );
}
