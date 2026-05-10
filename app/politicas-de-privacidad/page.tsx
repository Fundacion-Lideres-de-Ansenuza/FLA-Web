import type { Metadata } from "next"
import PrivacyPolicyPageClient from "./privacy-policy-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/politicas-de-privacidad"

export const metadata: Metadata = {
  title: "Politicas de Privacidad | Fundacion Lideres de Ansenuza",
  description:
    "Politicas de privacidad y tratamiento de datos personales de Fundacion Lideres de Ansenuza para programas y newsletter.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Politicas de Privacidad | Fundacion Lideres de Ansenuza",
    description: "Informacion legal sobre privacidad y datos personales en FLA.",
    url: PAGE_URL,
    siteName: "Fundacion Lideres de Ansenuza",
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Politicas de Privacidad | Fundacion Lideres de Ansenuza",
    description: "Politicas de privacidad para programas y newsletter.",
  },
}

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Politicas de Privacidad",
    url: PAGE_URL,
    about: {
      "@type": "Thing",
      name: "Politica de privacidad y proteccion de datos personales",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }} />
      <PrivacyPolicyPageClient />
    </>
  )
}
