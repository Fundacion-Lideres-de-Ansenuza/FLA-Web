import type { Metadata } from "next";
import { DECIDIR_CON_CIENCIA_DATA } from "@/lib/data/programs";
import DecidirConCienciaPageClient from "./DecidirConCienciaPageClient";

export const metadata: Metadata = {
  title: "Decidir con Ciencia - Pensamiento científico para escuelas secundarias | FLA",
  description: "Programa educativo gratuito para escuelas secundarias de Córdoba basado en Thinking-Based Learning (TBL) y enfoque STEM. Estudiantes de 14 a 20 años aprenden a analizar evidencias y tomar decisiones fundamentadas. Fundación Líderes de Ansenuza.",
  keywords: [
    "decidir con ciencia",
    "pensamiento científico",
    "programa educativo secundaria",
    "TBL thinking based learning",
    "STEM educación argentina",
    "escuelas secundarias Córdoba",
    "toma de decisiones estudiantes",
    "programa educativo gratuito",
    "fundación líderes ansenuza",
    "ciencia jóvenes argentina"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Decidir con Ciencia - Pensamiento científico para escuelas secundarias",
    description: "Programa gratuito para escuelas secundarias de Córdoba. Metodología TBL y enfoque STEM para tomar decisiones fundamentadas frente a desafíos reales. Edición 2026.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/decidir-con-ciencia",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/Logos/Decidir_con_Ciencia.png",
        width: 1200,
        height: 630,
        alt: "Decidir con Ciencia - Pensamiento científico para escuelas secundarias"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Logos/Decidir_con_Ciencia.png"]
  },
  alternates: {
    canonical: "/programas/decidir-con-ciencia"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function DecidirConCienciaPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": DECIDIR_CON_CIENCIA_DATA.title,
    "description": DECIDIR_CON_CIENCIA_DATA.shortDescription,
    "url": "https://www.lideresdeansenuza.org/programas/decidir-con-ciencia",
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
        "name": DECIDIR_CON_CIENCIA_DATA.title,
        "item": "https://www.lideresdeansenuza.org/programas/decidir-con-ciencia"
      }
    ]
  };

  const faqSchema = DECIDIR_CON_CIENCIA_DATA.faqs && DECIDIR_CON_CIENCIA_DATA.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": DECIDIR_CON_CIENCIA_DATA.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '')
      }
    }))
  } : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <DecidirConCienciaPageClient />
    </>
  );
}
