import type { Metadata } from "next"
import ContáctanosPageClient from "./contactanos-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/contactanos"

export const metadata: Metadata = {
  title: "Contacto | Fundación Líderes de Ansenuza",
  description:
    "Contactate con Fundación Líderes de Ansenuza para voluntariado, alianzas y colaboraciones en programas educativos para jóvenes en Argentina.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Contacto | Fundación Líderes de Ansenuza",
    description:
      "Canal de contacto institucional para voluntariado, alianzas y colaboraciones con programas educativos de impacto.",
    url: PAGE_URL,
    siteName: "Fundación Líderes de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Fundación Líderes de Ansenuza",
    description: "Escribinos para voluntariado, alianzas y trabajo conjunto.",
  },
}

export default function ContáctanosPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto - Fundación Líderes de Ansenuza",
    url: PAGE_URL,
    about: {
      "@type": "NGO",
      name: "Fundación Líderes de Ansenuza",
      url: "https://www.lideresdeansenuza.org",
      email: "contacto@lideresdeansenuza.org",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContáctanosPageClient />
    </>
  )
}

