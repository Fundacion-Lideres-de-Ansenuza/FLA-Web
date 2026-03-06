import type { Metadata } from "next";
import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import Gallery from "@/components/programs/Gallery";
import { AVENTURA_MATEMATICA_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Aventura Matemágica - Concurso de Matemática Creativa | FLA",
  description: "Concurso virtual inmersivo que transformó la educación matemática en una experiencia creativa combinando matemática y mundos de ficción. 300 participantes, 25 semifinalistas. Edición 2021.",
  keywords: [
    "educación matemática jóvenes",
    "aventura matemágica",
    "concurso matemática argentina",
    "aprendizaje lúdico",
    "matemática creativa",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Aventura Matemágica - Concurso de Matemática Creativa",
    description: "Programa histórico de educación matemática. 300 participantes, aprendizaje lúdico con mundos de ficción como Harry Potter.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/aventura-matematica",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function AventuraMatematicaPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={AVENTURA_MATEMATICA_DATA.title}
        description={AVENTURA_MATEMATICA_DATA.shortDescription}
        colors={AVENTURA_MATEMATICA_DATA.colors}
        isHistorical={true}
        year={AVENTURA_MATEMATICA_DATA.year}
      />

      <ProgramDescription
        fullDescription={AVENTURA_MATEMATICA_DATA.fullDescription}
        location={AVENTURA_MATEMATICA_DATA.location}
        duration={AVENTURA_MATEMATICA_DATA.duration}
        modality={AVENTURA_MATEMATICA_DATA.modality}
      />

      <Requirements
        requirements={AVENTURA_MATEMATICA_DATA.requirements}
        colors={AVENTURA_MATEMATICA_DATA.colors}
      />

      <EnrollmentInfo
        description={AVENTURA_MATEMATICA_DATA.enrollmentInfo.description}
        availablePeriod={AVENTURA_MATEMATICA_DATA.enrollmentInfo.availablePeriod}
        colors={AVENTURA_MATEMATICA_DATA.colors}
        isHistorical={true}
      />

      <ProgramStages
        stages={AVENTURA_MATEMATICA_DATA.stages}
        colors={AVENTURA_MATEMATICA_DATA.colors}
      />

      <ImpactStats
        stats={AVENTURA_MATEMATICA_DATA.stats}
        colors={AVENTURA_MATEMATICA_DATA.colors}
      />

      <SuccessStories
        stories={AVENTURA_MATEMATICA_DATA.successStories}
        colors={AVENTURA_MATEMATICA_DATA.colors}
      />

      <Gallery
        type={AVENTURA_MATEMATICA_DATA.gallery.type}
        url={AVENTURA_MATEMATICA_DATA.gallery.url}
        images={AVENTURA_MATEMATICA_DATA.gallery.images}
        colors={AVENTURA_MATEMATICA_DATA.colors}
        title={AVENTURA_MATEMATICA_DATA.title}
      />
    </main>
  );
}
