import type { Metadata } from "next";
import { IMPULSATEC_DATA } from "@/lib/data/programs";
import ImpulsatecPageClient from "./ImpulsatecPageClient";

export const metadata: Metadata = {
  title: "ImpulsaTEC - Programa de Capacitación Tecnológica para Jóvenes | FLA",
  description: "Programa educativo federal de capacitación y mentoría en tecnología para jóvenes del interior de Argentina. +500 participantes, alianza con EY GDS Argentina. Edición 2024.",
  keywords: [
    "capacitación tecnológica jóvenes",
    "impulsatec",
    "inteligencia artificial educación",
    "metodologías ágiles",
    "ux diseño",
    "mentoría tecnológica",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "ImpulsaTEC - Capacitación Tecnológica para Jóvenes",
    description: "Programa histórico de capacitación tecnológica. +500 jóvenes participantes, alianza estratégica con EY GDS Argentina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/impulsatec",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/Logos/Impulsatec.webp",
        width: 1200,
        height: 630,
        alt: "ImpulsaTEC - Programa de Capacitación Tecnológica para Jóvenes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Logos/Impulsatec.webp"]
  },
  alternates: {
    canonical: "/programas/impulsatec"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ImpulsatecPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": IMPULSATEC_DATA.title,
    "description": IMPULSATEC_DATA.shortDescription,
    "url": "https://www.lideresdeansenuza.org/programas/impulsatec",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Fundación Líderes de Ansenuza",
      "url": "https://www.lideresdeansenuza.org"
    },
    "educationalLevel": "Secundario",
    "isAccessibleForFree": true,
    "inLanguage": "es"
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
        "name": IMPULSATEC_DATA.title,
        "item": "https://www.lideresdeansenuza.org/programas/impulsatec"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ImpulsatecPageClient />
    </>
  );
}
