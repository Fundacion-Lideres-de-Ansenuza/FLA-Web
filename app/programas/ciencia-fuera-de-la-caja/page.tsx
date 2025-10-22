import type { Metadata } from "next";
import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import Sponsors from "@/components/programs/Sponsors";
import { CIENCIA_FUERA_DE_LA_CAJA_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Ciencia Fuera de la Caja - Programa Educativo Científico | FLA",
  description: "Concurso científico virtual de alto impacto para desarrollar el pensamiento científico, la creatividad y el pensamiento lateral en jóvenes argentinos. 234 participantes, 65% mujeres. Edición 2020.",
  keywords: [
    "educación científica jóvenes",
    "ciencia fuera de la caja",
    "concurso científico argentina",
    "pensamiento lateral",
    "creatividad científica",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Ciencia Fuera de la Caja - Concurso Científico Virtual",
    description: "Programa histórico de educación científica. 234 participantes, 90% de efectividad en la enseñanza, 65% participación femenina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/ciencia-fuera-de-la-caja",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CienciaFueraDeLaCajaPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={CIENCIA_FUERA_DE_LA_CAJA_DATA.title}
        description={CIENCIA_FUERA_DE_LA_CAJA_DATA.shortDescription}
        colors={CIENCIA_FUERA_DE_LA_CAJA_DATA.colors}
        isHistorical={true}
        year={CIENCIA_FUERA_DE_LA_CAJA_DATA.year}
      />

      <ProgramDescription
        fullDescription={CIENCIA_FUERA_DE_LA_CAJA_DATA.fullDescription}
        location={CIENCIA_FUERA_DE_LA_CAJA_DATA.location}
        duration={CIENCIA_FUERA_DE_LA_CAJA_DATA.duration}
        modality={CIENCIA_FUERA_DE_LA_CAJA_DATA.modality}
      />

      <Requirements
        requirements={CIENCIA_FUERA_DE_LA_CAJA_DATA.requirements}
        colors={CIENCIA_FUERA_DE_LA_CAJA_DATA.colors}
      />

      <EnrollmentInfo
        description={CIENCIA_FUERA_DE_LA_CAJA_DATA.enrollmentInfo.description}
        availablePeriod={CIENCIA_FUERA_DE_LA_CAJA_DATA.enrollmentInfo.availablePeriod}
        colors={CIENCIA_FUERA_DE_LA_CAJA_DATA.colors}
        isHistorical={true}
      />

      <ProgramStages
        stages={CIENCIA_FUERA_DE_LA_CAJA_DATA.stages}
        colors={CIENCIA_FUERA_DE_LA_CAJA_DATA.colors}
      />

      <ImpactStats
        stats={CIENCIA_FUERA_DE_LA_CAJA_DATA.stats}
        colors={CIENCIA_FUERA_DE_LA_CAJA_DATA.colors}
      />

      <SuccessStories
        stories={CIENCIA_FUERA_DE_LA_CAJA_DATA.successStories}
        colors={CIENCIA_FUERA_DE_LA_CAJA_DATA.colors}
      />

      <Sponsors sponsors={CIENCIA_FUERA_DE_LA_CAJA_DATA.sponsors} />
    </main>
  );
}

