import type { Metadata } from "next"
import PrivacyPolicyPageClient from "./privacy-policy-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/politicas-de-privacidad"

export const metadata: Metadata = {
  title: "Políticas de Privacidad | Fundación Líderes de Ansenuza",
  description:
    "Políticas de privacidad y tratamiento de datos personales de Fundación Líderes de Ansenuza para programas y newsletter.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Políticas de Privacidad | Fundación Líderes de Ansenuza",
    description: "Información legal sobre privacidad y datos personales en FLA.",
    url: PAGE_URL,
    siteName: "Fundación Líderes de Ansenuza",
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Políticas de Privacidad | Fundación Líderes de Ansenuza",
    description: "Políticas de privacidad para programas y newsletter.",
  },
}

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Políticas de Privacidad",
    url: PAGE_URL,
    about: {
      "@type": "Thing",
      name: "Política de privacidad y protección de datos personales",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }} />
      <PrivacyPolicyPageClient />
    </>
  )
}
