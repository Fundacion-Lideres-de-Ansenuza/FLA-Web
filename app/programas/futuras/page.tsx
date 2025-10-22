import type { Metadata } from "next";
import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import { FUTURAS_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "FUTURAS - Programa de Liderazgo y Empoderamiento Femenino | FLA",
  description: "Programa de liderazgo, mentoría y empoderamiento femenino para mujeres jóvenes argentinas. 7 ediciones, 248 participantes egresadas, 18 provincias. Programa histórico 2017-2024.",
  keywords: [
    "empoderamiento femenino",
    "liderazgo mujeres jóvenes",
    "futuras",
    "mentoría femenina argentina",
    "desarrollo personal mujeres",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "FUTURAS - Programa de Liderazgo y Empoderamiento Femenino",
    description: "Programa histórico de liderazgo femenino. 7 ediciones realizadas, 248 participantes egresadas de 18 provincias de Argentina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/futuras",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function FuturasPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={FUTURAS_DATA.title}
        description={FUTURAS_DATA.shortDescription}
        colors={FUTURAS_DATA.colors}
        isHistorical={true}
        year={FUTURAS_DATA.year}
      />

      <ProgramDescription
        fullDescription={FUTURAS_DATA.fullDescription}
        location={FUTURAS_DATA.location}
        duration={FUTURAS_DATA.duration}
        modality={FUTURAS_DATA.modality}
      />

      <Requirements
        requirements={FUTURAS_DATA.requirements}
        colors={FUTURAS_DATA.colors}
      />

      <EnrollmentInfo
        description={FUTURAS_DATA.enrollmentInfo.description}
        availablePeriod={FUTURAS_DATA.enrollmentInfo.availablePeriod}
        colors={FUTURAS_DATA.colors}
        isHistorical={true}
      />

      <ProgramStages
        stages={FUTURAS_DATA.stages}
        colors={FUTURAS_DATA.colors}
      />

      <ImpactStats
        stats={FUTURAS_DATA.stats}
        colors={FUTURAS_DATA.colors}
      />

      <SuccessStories
        stories={FUTURAS_DATA.successStories}
        colors={FUTURAS_DATA.colors}
      />
    </main>
  );
}

