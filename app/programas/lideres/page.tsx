import type { Metadata } from "next";
import { LIDERES_DATA } from "@/lib/data/programs";
import LideresPageClient from "./LideresPageClient";

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
        url: "/images/programs/lideres.webp",
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
    images: ["/images/programs/lideres.webp"]
  },
  alternates: {
    canonical: "https://www.lideresdeansenuza.org/programas/lideres"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LideresPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": LIDERES_DATA.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LideresPageClient />
    </>
  );
}
