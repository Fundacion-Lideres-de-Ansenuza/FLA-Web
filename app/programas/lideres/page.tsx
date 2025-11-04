import type { Metadata } from "next";
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
import { LIDERES_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Líderes - Comunidad de Líderes FLA | Fundación Líderes de Ansenuza",
  description: "Programa de Fundación Líderes de Ansenuza encargado de reunir, impulsar, acompañar y reconocer a todas aquellas personas que luego de haber transitado por al menos un programa de la fundación quieran seguir potenciando sus habilidades para convertirse en líderes de sus comunidades.",
  keywords: [
    "comunidad líderes",
    "liderazgo juvenil argentina",
    "programa líderes",
    "red de líderes",
    "desarrollo liderazgo",
    "comunidad activa",
    "talleres liderazgo",
    "capacitación liderazgo",
    "fundación líderes ansenuza",
    "post programa",
    "impacto social",
    "comunidad FLA"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Líderes - Comunidad de Líderes FLA",
    description: "Comunidad activa para ex-participantes de programas de FLA que quieren seguir potenciando sus habilidades de liderazgo. Talleres, capacitaciones, acompañamiento personalizado y mix de oportunidades quincenal.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/lideres",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/programs/lideres.png",
        width: 1200,
        height: 630,
        alt: "Líderes - Comunidad de Líderes FLA"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Líderes - Comunidad de Líderes FLA",
    description: "Comunidad activa para ex-participantes de programas de FLA que quieren seguir potenciando sus habilidades de liderazgo.",
    images: ["/images/programs/lideres.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LideresPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgramHeader
        title={LIDERES_DATA.title}
        description={LIDERES_DATA.shortDescription}
        colors={LIDERES_DATA.colors}
        isHistorical={false}
      />

      <ProgramDescription
        fullDescription={LIDERES_DATA.fullDescription}
        location={LIDERES_DATA.location}
        duration={LIDERES_DATA.duration}
        modality={LIDERES_DATA.modality}
      />

      <Requirements
        requirements={LIDERES_DATA.requirements}
        colors={LIDERES_DATA.colors}
      />

      <EnrollmentInfo
        description={LIDERES_DATA.enrollmentInfo.description}
        availablePeriod={LIDERES_DATA.enrollmentInfo.availablePeriod}
        colors={LIDERES_DATA.colors}
        isHistorical={false}
      />

      <ProgramStages
        stages={LIDERES_DATA.stages}
        colors={LIDERES_DATA.colors}
      />

      <SuccessStories
        stories={LIDERES_DATA.successStories}
        colors={LIDERES_DATA.colors}
      />

      <BlogLinks
        posts={LIDERES_DATA.blogPosts}
        colors={LIDERES_DATA.colors}
      />

      <FAQ
        faqs={LIDERES_DATA.faqs}
        colors={LIDERES_DATA.colors}
      />

      <Sponsors sponsors={LIDERES_DATA.sponsors} />

      <CTASection
        title={LIDERES_DATA.title}
        colors={LIDERES_DATA.colors}
      />
    </main>
  );
}

