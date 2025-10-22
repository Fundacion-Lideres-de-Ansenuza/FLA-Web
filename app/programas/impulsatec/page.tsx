import type { Metadata } from "next";
import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import Sponsors from "@/components/programs/Sponsors";
import { IMPULSATEC_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "ImpulsaTEC - Programa de Capacitación Tecnológica para Jóvenes | FLA",
  description: "Programa educativo federal de capacitación y mentoría en tecnología para jóvenes del interior de Argentina. +500 participantes, alianza con EY GDS Argentina. Edición 2024.",
  keywords: [
    "capacitación tecnológica jóvenes",
    "impulsatec",
    "inteligencia artificial educación",
    "metodologías ágiles",
    "ux diseño",
    "mentoría tecnológica",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "ImpulsaTEC - Capacitación Tecnológica para Jóvenes",
    description: "Programa histórico de capacitación tecnológica. +500 jóvenes participantes, alianza estratégica con EY GDS Argentina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/impulsatec",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ImpulsatecPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={IMPULSATEC_DATA.title}
        description={IMPULSATEC_DATA.shortDescription}
        colors={IMPULSATEC_DATA.colors}
        isHistorical={true}
        year={IMPULSATEC_DATA.year}
      />

      <ProgramDescription
        fullDescription={IMPULSATEC_DATA.fullDescription}
        location={IMPULSATEC_DATA.location}
        duration={IMPULSATEC_DATA.duration}
        modality={IMPULSATEC_DATA.modality}
      />

      <Requirements
        requirements={IMPULSATEC_DATA.requirements}
        colors={IMPULSATEC_DATA.colors}
      />

      <EnrollmentInfo
        description={IMPULSATEC_DATA.enrollmentInfo.description}
        availablePeriod={IMPULSATEC_DATA.enrollmentInfo.availablePeriod}
        colors={IMPULSATEC_DATA.colors}
        isHistorical={true}
      />

      <ProgramStages
        stages={IMPULSATEC_DATA.stages}
        colors={IMPULSATEC_DATA.colors}
      />

      <ImpactStats
        stats={IMPULSATEC_DATA.stats}
        colors={IMPULSATEC_DATA.colors}
      />

      <SuccessStories
        stories={IMPULSATEC_DATA.successStories}
        colors={IMPULSATEC_DATA.colors}
      />

      <Sponsors sponsors={IMPULSATEC_DATA.sponsors} />
    </main>
  );
}

