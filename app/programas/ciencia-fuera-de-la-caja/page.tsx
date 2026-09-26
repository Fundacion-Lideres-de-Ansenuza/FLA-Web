import type { Metadata } from "next";
import { CIENCIA_FUERA_DE_LA_CAJA_DATA } from "@/lib/data/programs";
import CienciaFueraDeLaCajaPageClient from "./CienciaFueraDeLaCajaPageClient";

export const metadata: Metadata = {
  title: "Ciencia Fuera de la Caja - Programa Educativo Científico | FLA",
  description: "Concurso científico virtual de alto impacto para desarrollar el pensamiento científico, la creatividad y el pensamiento lateral en jóvenes argentinos. 234 participantes, 65% mujeres. Edición 2020.",
  keywords: [
    "educación científica jóvenes",
    "ciencia fuera de la caja",
    "concurso científico argentina",
    "pensamiento lateral",
    "creatividad científica",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Ciencia Fuera de la Caja - Concurso Científico Virtual",
    description: "Programa histórico de educación científica. 234 participantes, 90% de efectividad en la enseñanza, 65% participación femenina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/ciencia-fuera-de-la-caja",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/Logos/Ciencia fuera de la caja.webp",
        width: 1200,
        height: 630,
        alt: "Ciencia Fuera de la Caja - Programa Educativo Científico"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Logos/Ciencia fuera de la caja.webp"]
  },
  alternates: {
    canonical: "/programas/ciencia-fuera-de-la-caja"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CienciaFueraDeLaCajaPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": CIENCIA_FUERA_DE_LA_CAJA_DATA.title,
    "description": CIENCIA_FUERA_DE_LA_CAJA_DATA.shortDescription,
    "url": "https://www.lideresdeansenuza.org/programas/ciencia-fuera-de-la-caja",
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
        "name": CIENCIA_FUERA_DE_LA_CAJA_DATA.title,
        "item": "https://www.lideresdeansenuza.org/programas/ciencia-fuera-de-la-caja"
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

      <CienciaFueraDeLaCajaPageClient />
    </>
  );
}
