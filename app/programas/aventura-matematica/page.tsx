import type { Metadata } from "next";
import { AVENTURA_MATEMATICA_DATA } from "@/lib/data/programs";
import AventuraMatematicaPageClient from "./AventuraMatematicaPageClient";

export const metadata: Metadata = {
  title: "Aventura Matemágica - Concurso de Matemática Creativa | FLA",
  description: "Concurso virtual inmersivo que transformó la educación matemática en una experiencia creativa combinando matemática y mundos de ficción. 300 participantes, 25 semifinalistas. Edición 2021.",
  keywords: [
    "educación matemática jóvenes",
    "aventura matemágica",
    "concurso matemática argentina",
    "aprendizaje lúdico",
    "matemática creativa",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Aventura Matemágica - Concurso de Matemática Creativa",
    description: "Programa histórico de educación matemática. 300 participantes, aprendizaje lúdico con mundos de ficción como Harry Potter.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/aventura-matematica",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/Logos/Aventura Matemagica.webp",
        width: 1200,
        height: 630,
        alt: "Aventura Matemágica - Concurso de Matemática Creativa"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Logos/Aventura Matemagica.webp"]
  },
  alternates: {
    canonical: "/programas/aventura-matematica"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function AventuraMatematicaPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": AVENTURA_MATEMATICA_DATA.title,
    "description": AVENTURA_MATEMATICA_DATA.shortDescription,
    "url": "https://www.lideresdeansenuza.org/programas/aventura-matematica",
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
        "name": AVENTURA_MATEMATICA_DATA.title,
        "item": "https://www.lideresdeansenuza.org/programas/aventura-matematica"
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

      <AventuraMatematicaPageClient />
    </>
  );
}
