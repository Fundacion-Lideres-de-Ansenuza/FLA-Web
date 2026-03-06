import type { Metadata } from "next";
import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import Sponsors from "@/components/programs/Sponsors";
import Gallery from "@/components/programs/Gallery";
import { POTENCIATE_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Potenciate - Programa de Mentoría y Liderazgo Juvenil | FLA",
  description: "Programa de mentoría disruptivo de 12 semanas diseñado para inspirar a jóvenes argentinos a descubrir su pasión y transformarse en agentes de cambio. 35 egresados, 11 provincias alcanzadas. Edición 2021.",
  keywords: [
    "programa mentoría jóvenes",
    "liderazgo juvenil argentina",
    "potenciate",
    "mentoría argentina",
    "proyectos impacto social",
    "autoconocimiento jóvenes",
    "desarrollo personal",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Potenciate - Programa de Mentoría y Liderazgo Juvenil",
    description: "Programa histórico de mentoría de 12 semanas. 35 egresados de 11 provincias de Argentina. Una plataforma de inspiración y networking para jóvenes agentes de cambio.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/potenciate",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PotenciatePage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={POTENCIATE_DATA.title}
        description={POTENCIATE_DATA.shortDescription}
        colors={POTENCIATE_DATA.colors}
        isHistorical={true}
        year={POTENCIATE_DATA.year}
      />

      <ProgramDescription
        fullDescription={POTENCIATE_DATA.fullDescription}
        location={POTENCIATE_DATA.location}
        duration={POTENCIATE_DATA.duration}
        modality={POTENCIATE_DATA.modality}
      />

      <Requirements
        requirements={POTENCIATE_DATA.requirements}
        colors={POTENCIATE_DATA.colors}
      />

      <EnrollmentInfo
        description={POTENCIATE_DATA.enrollmentInfo.description}
        availablePeriod={POTENCIATE_DATA.enrollmentInfo.availablePeriod}
        colors={POTENCIATE_DATA.colors}
        isHistorical={true}
      />

      <ProgramStages
        stages={POTENCIATE_DATA.stages}
        colors={POTENCIATE_DATA.colors}
      />

      <ImpactStats
        stats={POTENCIATE_DATA.stats}
        colors={POTENCIATE_DATA.colors}
      />

      <SuccessStories
        stories={POTENCIATE_DATA.successStories}
        colors={POTENCIATE_DATA.colors}
      />

      <Sponsors sponsors={POTENCIATE_DATA.sponsors} />

      <Gallery
        type={POTENCIATE_DATA.gallery.type}
        url={POTENCIATE_DATA.gallery.url}
        images={POTENCIATE_DATA.gallery.images}
        colors={POTENCIATE_DATA.colors}
        title={POTENCIATE_DATA.title}
      />
    </main>
  );
}
