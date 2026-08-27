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

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eef5e2_0%,#ffffff_40%,#accf7a_100%)] py-14 md:py-16">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -left-12 top-6 h-36 w-36 rounded-full bg-[#b2cc3b]/30 blur-3xl" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#027353]/20 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_0.95fr] items-center">
              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-contrail tracking-tight text-[#027353]">
                  {data.identity?.heading}
                </h2>
                <p className="max-w-2xl text-base md:text-lg leading-relaxed text-emerald-950/80 font-arimo">
                  {data.identity?.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {data.stats.slice(0, 4).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-full border border-[#accf7a] bg-white/85 px-4 py-2 shadow-sm"
                    >
                      <span className="font-contrail text-xl text-[#568c30]">{stat.value}</span>
                      <span className="ml-2 text-sm font-arimo text-[#027353]">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

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
