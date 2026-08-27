"use client"

import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import BlogLinks from "@/components/programs/BlogLinks";
import FAQ from "@/components/programs/FAQ";
import Sponsors from "@/components/programs/Sponsors";
import Gallery from "@/components/programs/Gallery";
import CTASection from "@/components/programs/CTASection";
import { AMBIENTALIA_DATA } from "@/lib/data/programs";
import { AMBIENTALIA_DATA_EN } from "@/lib/data/programs-en";
import { useTranslation } from "react-i18next";

export default function AmbientaliaPageClient() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const data = isEn ? AMBIENTALIA_DATA_EN : AMBIENTALIA_DATA;

  return (
    <>

      <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ee_18%,#ffffff_42%,#ffffff_100%)]">
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
        />

        <Requirements
          requirements={data.requirements}
          colors={data.colors}
        />

        <EnrollmentInfo
          description={data.enrollmentInfo.description}
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

        <BlogLinks
          posts={data.blogPosts}
          colors={data.colors}
        />

        <FAQ
          faqs={data.faqs}
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

        <CTASection
          title={data.title}
          colors={data.colors}
        />
      </main>
    </>
  );
}
