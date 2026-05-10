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
import Sponsors from "@/components/programs/Sponsors";
import Gallery from "@/components/programs/Gallery";
import CTASection from "@/components/programs/CTASection";
import { AMBIENTALIA_DATA } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Experiencia Ambientalia - Programa de EducaciÃ³n Ambiental para JÃ³venes | FLA",
  description: "Programa gratuito de educaciÃ³n ambiental en Laguna Mar Chiquita, Ansenuza. DesarrollÃ¡ proyectos ambientales, adquirÃ­ habilidades de liderazgo y conectÃ¡ con tu ecosistema. 700+ estudiantes capacitados.",
  keywords: [
    "educaciÃ³n ambiental argentina",
    "programa educaciÃ³n ambiental jÃ³venes",
    "laguna mar chiquita",
    "ansenuza",
    "parque nacional ansenuza",
    "conservaciÃ³n biodiversidad",
    "liderazgo ambiental",
    "proyectos ambientales escolares",
    "programa gratuito estudiantes",
    "educaciÃ³n secundaria cÃ³rdoba",
    "aves playeras argentina",
    "humedales argentina",
    "rhrap argentina",
    "manomet conservation",
    "fundaciÃ³n lÃ­deres ansenuza"
  ],
  authors: [{ name: "FundaciÃ³n LÃ­deres de Ansenuza" }],
  openGraph: {
    title: "Experiencia Ambientalia - EducaciÃ³n Ambiental en Laguna Mar Chiquita",
    description: "Programa gratuito de 8 meses que conecta jÃ³venes con sus ecosistemas. +700 estudiantes capacitados, 62 proyectos comunitarios desarrollados en 21+ localidades de Ansenuza.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/ambientalia",
    siteName: "FundaciÃ³n LÃ­deres de Ansenuza",
    images: [
      {
        url: "/images/programs/exp_ambientalia.webp",
        width: 1200,
        height: 630,
        alt: "Experiencia Ambientalia - Programa de EducaciÃ³n Ambiental"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencia Ambientalia - EducaciÃ³n Ambiental para JÃ³venes",
    description: "Programa gratuito de 8 meses en Laguna Mar Chiquita. +700 estudiantes capacitados desarrollando proyectos ambientales que transforman comunidades.",
    images: ["/images/programs/exp_ambientalia.webp"]
  },
  alternates: {
    canonical: "https://www.lideresdeansenuza.org/programas/ambientalia"
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

export default function AmbientaliaPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "FundaciÃ³n LÃ­deres de Ansenuza",
    "url": "https://www.lideresdeansenuza.org",
    "logo": "https://www.lideresdeansenuza.org/images/LogoFLA.webp",
    "description": "ONG que diseÃ±a y ejecuta programas educativos gratuitos en Argentina",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressRegion": "CÃ³rdoba"
    },
    "sameAs": [
      "https://www.instagram.com/fundacionlideresdeansenuza/",
      "https://www.facebook.com/fundacionlideresdeansenuza"
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Experiencia Ambientalia",
    "description": "Programa de educaciÃ³n ambiental que conecta a jÃ³venes con sus ecosistemas y biodiversidad, desarrollando habilidades de liderazgo a travÃ©s de proyectos comunitarios ambientales.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "FundaciÃ³n LÃ­deres de Ansenuza",
      "url": "https://www.lideresdeansenuza.org"
    },
    "educationalLevel": "Secundario",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Estudiantes de secundaria"
    },
    "isAccessibleForFree": true,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "blended",
      "duration": "P8M",
      "location": {
        "@type": "Place",
        "name": "Laguna Mar Chiquita, Ansenuza, CÃ³rdoba, Argentina"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ARS",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": AMBIENTALIA_DATA.faqs.map((faq) => ({
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
        "name": "Experiencia Ambientalia",
        "item": "https://www.lideresdeansenuza.org/programas/ambientalia"
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

      <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f3fff8_18%,#ffffff_42%,#ffffff_100%)]">
        <ProgramHeader
          title={AMBIENTALIA_DATA.title}
          description={AMBIENTALIA_DATA.shortDescription}
          colors={AMBIENTALIA_DATA.colors}
        />

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_40%,#d1fae5_100%)] py-14 md:py-16">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -left-12 top-6 h-36 w-36 rounded-full bg-[#34d399]/30 blur-3xl" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#10b981]/20 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_0.95fr] items-center">
              <div className="space-y-5">
                <span className="inline-flex rounded-full bg-[#10b981] px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg">
                  Identidad Ambientalia
                </span>
                <h2 className="text-4xl md:text-5xl font-contrail-one tracking-tight text-[#064e3b]">
                  Una experiencia con mÃ¡s naturaleza, territorio e impacto visible
                </h2>
                <p className="max-w-2xl text-base md:text-lg leading-relaxed text-emerald-950/80 font-arimo">
                  Reforzamos esta pÃ¡gina con una atmÃ³sfera mÃ¡s verde para que respire mejor la esencia de Ambientalia:
                  biodiversidad, liderazgo joven, comunidad y acciÃ³n ambiental concreta.
                </p>
                <div className="flex flex-wrap gap-3">
                  {AMBIENTALIA_DATA.stats.slice(0, 4).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-full border border-[#86efac] bg-white/85 px-4 py-2 shadow-sm"
                    >
                      <span className="font-contrail-one text-xl text-[#047857]">{stat.value}</span>
                      <span className="ml-2 text-sm font-arimo text-[#14532d]">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#bbf7d0] bg-white/80 p-6 shadow-[0_24px_60px_rgba(16,185,129,0.12)] backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-[#10b981] px-5 py-6 text-white shadow-lg">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Color base</p>
                    <p className="mt-3 font-contrail-one text-3xl">Bosque y agua</p>
                    <p className="mt-2 text-sm font-arimo text-white/85">
                      Una paleta que conecta con humedales, aves y territorio vivo.
                    </p>
                  </div>
                  <div className="rounded-[24px] bg-[#ecfdf5] px-5 py-6 text-[#065f46] border border-[#bbf7d0]">
                    <p className="text-xs font-black uppercase tracking-[0.2em]">Enfoque</p>
                    <p className="mt-3 font-contrail-one text-3xl">Aprender haciendo</p>
                    <p className="mt-2 text-sm font-arimo text-[#14532d]">
                      El diseÃ±o acompaÃ±a la narrativa de exploraciÃ³n, conservaciÃ³n y liderazgo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProgramDescription
          fullDescription={AMBIENTALIA_DATA.fullDescription}
          location={AMBIENTALIA_DATA.location}
          duration={AMBIENTALIA_DATA.duration}
          modality={AMBIENTALIA_DATA.modality}
        />

        <Requirements
          requirements={AMBIENTALIA_DATA.requirements}
          colors={AMBIENTALIA_DATA.colors}
        />

        <EnrollmentInfo
          description={AMBIENTALIA_DATA.enrollmentInfo.description}
          availablePeriod={AMBIENTALIA_DATA.enrollmentInfo.availablePeriod}
          colors={AMBIENTALIA_DATA.colors}
        />

        <ProgramStages
          stages={AMBIENTALIA_DATA.stages}
          colors={AMBIENTALIA_DATA.colors}
        />

        <ImpactStats
          stats={AMBIENTALIA_DATA.stats}
          colors={AMBIENTALIA_DATA.colors}
        />

        <SuccessStories
          stories={AMBIENTALIA_DATA.successStories}
          colors={AMBIENTALIA_DATA.colors}
        />

        <BlogLinks
          posts={AMBIENTALIA_DATA.blogPosts}
          colors={AMBIENTALIA_DATA.colors}
        />

        <FAQ
          faqs={AMBIENTALIA_DATA.faqs}
          colors={AMBIENTALIA_DATA.colors}
        />

        <Sponsors sponsors={AMBIENTALIA_DATA.sponsors} />

        <Gallery
          type={AMBIENTALIA_DATA.gallery.type}
          url={AMBIENTALIA_DATA.gallery.url}
          images={AMBIENTALIA_DATA.gallery.images}
          colors={AMBIENTALIA_DATA.colors}
          title={AMBIENTALIA_DATA.title}
        />

        <CTASection
          title={AMBIENTALIA_DATA.title}
          colors={AMBIENTALIA_DATA.colors}
        />
      </main>
    </>
  );
}
