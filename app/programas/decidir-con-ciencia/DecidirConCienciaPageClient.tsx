"use client";

import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import Sponsors from "@/components/programs/Sponsors";
import Gallery from "@/components/programs/Gallery";
import { useTranslation } from "react-i18next";
import { DECIDIR_CON_CIENCIA_DATA } from "@/lib/data/programs";
import { DECIDIR_CON_CIENCIA_DATA_EN } from "@/lib/data/programs-en";

export default function DecidirConCienciaPageClient() {
  const { i18n } = useTranslation();
  const data = i18n.language.startsWith("en") ? DECIDIR_CON_CIENCIA_DATA_EN : DECIDIR_CON_CIENCIA_DATA;

  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={data.title}
        description={data.shortDescription}
        colors={data.colors}
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
        registrationLabel={data.enrollmentInfo.registrationLabel}
        registrationUrl={data.enrollmentInfo.registrationUrl}
        availablePeriod={data.enrollmentInfo.availablePeriod}
        colors={data.colors}
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

      <Sponsors sponsors={data.sponsors} />

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
