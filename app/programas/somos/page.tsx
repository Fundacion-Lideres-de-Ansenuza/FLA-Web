import type { Metadata } from "next";
import ProgramHeader from "@/components/programs/ProgramHeader";
import ProgramDescription from "@/components/programs/ProgramDescription";
import Requirements from "@/components/programs/Requirements";
import EnrollmentInfo from "@/components/programs/EnrollmentInfo";
import ProgramStages from "@/components/programs/ProgramStages";
import ImpactStats from "@/components/programs/ImpactStats";
import SuccessStories from "@/components/programs/SuccessStories";
import BlogLinks from "@/components/programs/BlogLinks";
import FAQ from "@/components/programs/FAQ";
import CTASection from "@/components/programs/CTASection";
import Gallery from "@/components/programs/Gallery";
import { SOMOS_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "SOMOS - Programa de Liderazgo en Diversidad para Jóvenes | FLA",
  description: "Programa gratuito de liderazgo en diversidad para jóvenes de 15-19 años en Argentina. Aprendé sobre diversidad, desarrollá habilidades de liderazgo y realizá acciones de impacto social. +70 participantes, +4000 personas impactadas.",
  keywords: [
    "programa diversidad jóvenes",
    "liderazgo diversidad argentina",
    "educación diversidad",
    "diversidad sexual",
    "diversidad cultural",
    "diversidad funcional",
    "inclusión escolar",
    "programa gratuito jóvenes",
    "acción social comunitaria",
    "liderazgo juvenil argentina",
    "desarrollo personal jóvenes",
    "educación secundaria inclusiva",
    "diversidad género",
    "fundación líderes ansenuza",
    "programa estudiantes secundaria"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "SOMOS - Liderazgo en Diversidad para Jóvenes de Argentina",
    description: "Programa gratuito de 2 meses para jóvenes de 15-19 años. Talleres de diversidad, mentorías y acciones de impacto. +70 participantes han impactado a +4000 personas en sus comunidades.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/somos",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/programs/somos.webp",
        width: 1200,
        height: 630,
        alt: "SOMOS - Programa de Liderazgo en Diversidad"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMOS - Liderazgo en Diversidad para Jóvenes",
    description: "Programa gratuito de 2 meses. Aprendé sobre diversidad, desarrollá liderazgo y realizá acciones de impacto en tu comunidad. Para jóvenes de 15-19 años de toda Argentina.",
    images: ["/images/programs/somos.webp"]
  },
  alternates: {
    canonical: "https://www.lideresdeansenuza.org/programas/somos"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function SomosPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Fundación Líderes de Ansenuza",
    "url": "https://www.lideresdeansenuza.org",
    "logo": "https://www.lideresdeansenuza.org/images/LogoFLA.webp",
    "description": "ONG que diseña y ejecuta programas educativos gratuitos en Argentina",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.instagram.com/fundacionlideresdeansenuza/",
      "https://www.facebook.com/fundacionlideresdeansenuza"
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "SOMOS - Programa de Liderazgo en Diversidad",
    "description": "Programa gratuito de liderazgo en diversidad para jóvenes de entre 15 y 19 años de Argentina que quieran convertirse en líderes de sus comunidades.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Fundación Líderes de Ansenuza",
      "url": "https://www.lideresdeansenuza.org"
    },
    "educationalLevel": "Secundario",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Estudiantes de secundaria de 15 a 19 años"
    },
    "isAccessibleForFree": true,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "duration": "P2M"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ARS",
      "availability": "https://schema.org/InStock"
    },
    "teaches": [
      "Diversidad cultural",
      "Diversidad corporal",
      "Diversidad funcional",
      "Diversidad de género",
      "Diversidad sexual",
      "Diversidad religiosa",
      "Liderazgo juvenil",
      "Desarrollo de proyectos sociales"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": SOMOS_DATA.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.lideresdeansenuza.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Programas",
        "item": "https://www.lideresdeansenuza.org/programas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SOMOS",
        "item": "https://www.lideresdeansenuza.org/programas/somos"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">
        <ProgramHeader
          title={SOMOS_DATA.title}
          description={SOMOS_DATA.shortDescription}
          colors={SOMOS_DATA.colors}
        />

        <ProgramDescription
          fullDescription={SOMOS_DATA.fullDescription}
          location={SOMOS_DATA.location}
          duration={SOMOS_DATA.duration}
          modality={SOMOS_DATA.modality}
        />

        <Requirements
          requirements={SOMOS_DATA.requirements}
          colors={SOMOS_DATA.colors}
        />

        <EnrollmentInfo
          description={SOMOS_DATA.enrollmentInfo.description}
          availablePeriod={SOMOS_DATA.enrollmentInfo.availablePeriod}
          colors={SOMOS_DATA.colors}
        />

        <ProgramStages
          stages={SOMOS_DATA.stages}
          colors={SOMOS_DATA.colors}
        />

        <ImpactStats
          stats={SOMOS_DATA.stats}
          colors={SOMOS_DATA.colors}
        />

        <SuccessStories
          stories={SOMOS_DATA.successStories}
          colors={SOMOS_DATA.colors}
        />

        <BlogLinks
          posts={SOMOS_DATA.blogPosts}
          colors={SOMOS_DATA.colors}
        />

      <FAQ
        faqs={SOMOS_DATA.faqs}
        colors={SOMOS_DATA.colors}
      />

      <Gallery
        type={SOMOS_DATA.gallery.type}
        url={SOMOS_DATA.gallery.url}
        images={SOMOS_DATA.gallery.images}
        colors={SOMOS_DATA.colors}
        title={SOMOS_DATA.title}
      />

      <CTASection
        title={SOMOS_DATA.title}
        colors={SOMOS_DATA.colors}
      />
      </main>
    </>
  );
}

