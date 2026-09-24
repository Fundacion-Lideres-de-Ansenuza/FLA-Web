import type { Metadata } from "next"
import AutoridadesPageClient from "./autoridades-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/quienes-somos/autoridades"

export const metadata: Metadata = {
  title: "Autoridades | Fundación Líderes de Ansenuza",
  description:
    "Conocé al Consejo de Administración y al equipo de liderazgo de Fundación Líderes de Ansenuza.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Autoridades | Fundación Líderes de Ansenuza",
    description: "Equipo directivo y de liderazgo de FLA.",
    url: PAGE_URL,
    siteName: "Fundación Líderes de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoridades | Fundación Líderes de Ansenuza",
    description: "Conocé al equipo directivo de FLA.",
  },
}

export default function AutoridadesPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Autoridades - Fundación Líderes de Ansenuza",
    url: PAGE_URL,
    about: {
      "@type": "NGO",
      name: "Fundación Líderes de Ansenuza",
      url: "https://www.lideresdeansenuza.org",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <AutoridadesPageClient />
    </>
  )
}
