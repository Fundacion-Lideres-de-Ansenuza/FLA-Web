import type { Metadata } from "next";
import { SOMOS_DATA } from "@/lib/data/programs";
import SomosPageClient from "./SomosPageClient";

export const metadata: Metadata = {
  title: "SOMOS - Programa de Liderazgo en Diversidad para Jóvenes | FLA",
  description: "Programa gratuito de liderazgo en diversidad para jóvenes de 15-19 años en Argentina. Aprendé sobre diversidad, desarrollá habilidades de liderazgo y realizá acciones de impacto social. +90 participantes, +6000 personas impactadas.",
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
    description: "Programa gratuito de 11 semanas para jóvenes de 15-19 años. Talleres de diversidad, mentorías y acciones de impacto. +90 participantes han impactado a +6000 personas en sus comunidades.",
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
    description: "Programa gratuito de 11 semanas. Aprendé sobre diversidad, desarrollá liderazgo y realizá acciones de impacto en tu comunidad. Para jóvenes de 15-19 años de toda Argentina.",
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

      <SomosPageClient />
    </>
  );
}
