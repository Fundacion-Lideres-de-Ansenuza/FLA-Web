"use client"

import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import SuccessStories from "@/components/programs/SuccessStories";
import BlogLinks from "@/components/programs/BlogLinks";
import FAQ from "@/components/programs/FAQ";
import Sponsors from "@/components/programs/Sponsors";
import CTASection from "@/components/programs/CTASection";
import Gallery from "@/components/programs/Gallery";
import { LIDERES_DATA } from "@/lib/data/programs";
import { LIDERES_DATA_EN } from "@/lib/data/programs-en";
import { useTranslation } from "react-i18next";

export default function LideresPageClient() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const data = isEn ? LIDERES_DATA_EN : LIDERES_DATA;

  return (
    <>
      <main className="min-h-screen bg-white">
      <ProgramHeader
        title={data.title}
        description={data.shortDescription}
        colors={data.colors}
        isHistorical={false}
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
        isHistorical={false}
      />

      <ProgramStages
        stages={data.stages}
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
