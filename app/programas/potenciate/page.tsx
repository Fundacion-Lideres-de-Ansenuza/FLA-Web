import type { Metadata } from "next";
import { POTENCIATE_DATA } from "@/lib/data/programs";
import PotenciatePageClient from "./PotenciatePageClient";

export const metadata: Metadata = {
  title: "Potenciate - Programa de Mentoría y Liderazgo Juvenil | FLA",
  description: "Programa de mentoría disruptivo de 12 semanas diseñado para inspirar a jóvenes argentinos a descubrir su pasión y transformarse en agentes de cambio. 35 egresados, 11 provincias alcanzadas. Edición 2021.",
  keywords: [
    "programa mentoría jóvenes",
    "liderazgo juvenil argentina",
    "potenciate",
    "mentoría argentina",
    "proyectos impacto social",
    "autoconocimiento jóvenes",
    "desarrollo personal",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Potenciate - Programa de Mentoría y Liderazgo Juvenil",
    description: "Programa histórico de mentoría de 12 semanas. 35 egresados de 11 provincias de Argentina. Una plataforma de inspiración y networking para jóvenes agentes de cambio.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/potenciate",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/programs/potenciate.webp",
        width: 1200,
        height: 630,
        alt: "Potenciate - Programa de Mentoría y Liderazgo Juvenil"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/programs/potenciate.webp"]
  },
  alternates: {
    canonical: "/programas/potenciate"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PotenciatePage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": POTENCIATE_DATA.title,
    "description": POTENCIATE_DATA.shortDescription,
    "url": "https://www.lideresdeansenuza.org/programas/potenciate",
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
        "name": POTENCIATE_DATA.title,
        "item": "https://www.lideresdeansenuza.org/programas/potenciate"
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

      <PotenciatePageClient />
    </>
  );
}
