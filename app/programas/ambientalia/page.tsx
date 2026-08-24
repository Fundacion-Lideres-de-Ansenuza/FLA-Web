import type { Metadata } from "next";
import { AMBIENTALIA_DATA } from "@/lib/data/programs";
import AmbientaliaPageClient from "./AmbientaliaPageClient";

export const metadata: Metadata = {
  title: "Experiencia Ambientalia - Programa de Educación Ambiental para Jóvenes | FLA",
  description: "Programa gratuito de educación ambiental en Laguna Mar Chiquita, Ansenuza. Desarrollá proyectos ambientales, adquirí habilidades de liderazgo y conectá con tu ecosistema. 700+ estudiantes capacitados.",
  keywords: [
    "educación ambiental argentina",
    "programa educación ambiental jóvenes",
    "laguna mar chiquita",
    "ansenuza",
    "parque nacional ansenuza",
    "conservación biodiversidad",
    "liderazgo ambiental",
    "proyectos ambientales escolares",
    "programa gratuito estudiantes",
    "educación secundaria córdoba",
    "aves playeras argentina",
    "humedales argentina",
    "rhrap argentina",
    "manomet conservation",
    "fundación líderes ansenuza"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Experiencia Ambientalia - Educación Ambiental en Laguna Mar Chiquita",
    description: "Programa gratuito de 8 meses que conecta jóvenes con sus ecosistemas. +700 estudiantes capacitados, 62 proyectos comunitarios desarrollados en 21+ localidades de Ansenuza.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/ambientalia",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/programs/exp_ambientalia.webp",
        width: 1200,
        height: 630,
        alt: "Experiencia Ambientalia - Programa de Educación Ambiental"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencia Ambientalia - Educación Ambiental para Jóvenes",
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
    "name": "Fundación Líderes de Ansenuza",
    "url": "https://www.lideresdeansenuza.org",
    "logo": "https://www.lideresdeansenuza.org/images/LogoFLA.webp",
    "description": "ONG que diseña y ejecuta programas educativos gratuitos en Argentina",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressRegion": "Córdoba"
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
    "description": "Programa de educación ambiental que conecta a jóvenes con sus ecosistemas y biodiversidad, desarrollando habilidades de liderazgo a través de proyectos comunitarios ambientales.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Fundación Líderes de Ansenuza",
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
        "name": "Laguna Mar Chiquita, Ansenuza, Córdoba, Argentina"
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

      <AmbientaliaPageClient />
    </>
  );
}
