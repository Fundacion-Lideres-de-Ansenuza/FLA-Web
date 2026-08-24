"use client"

import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import Gallery from "@/components/programs/Gallery";
import { AVENTURA_MATEMATICA_DATA } from "@/lib/data/programs";
import { AVENTURA_MATEMATICA_DATA_EN } from "@/lib/data/programs-en";
import { useTranslation } from "react-i18next";

export default function AventuraMatematicaPageClient() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const data = isEn ? AVENTURA_MATEMATICA_DATA_EN : AVENTURA_MATEMATICA_DATA;

  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={data.title}
        description={data.shortDescription}
        colors={data.colors}
        isHistorical={true}
        year={data.year}
      />

      <ProgramDescription
        fullDescription={data.fullDescription}
        location={data.location}
        duration={data.duration}
        modality={data.modality}
        colors={data.colors}
      />

      <Requirements
        requirements={data.requirements}
        colors={data.colors}
      />

      <EnrollmentInfo
        description={data.enrollmentInfo.description}
        availablePeriod={data.enrollmentInfo.availablePeriod}
        colors={data.colors}
        isHistorical={true}
      />

      <ProgramStages
        stages={data.stages}
        colors={data.colors}
      />

      <ImpactStats
        stats={data.stats}
        colors={data.colors}
      />

      <SuccessStories
        stories={data.successStories}
        colors={data.colors}
      />

      <Gallery
        type={data.gallery.type}
        url={data.gallery.url}
        images={data.gallery.images}
        colors={data.colors}
        title={data.title}
      />
    </main>
  );
}
