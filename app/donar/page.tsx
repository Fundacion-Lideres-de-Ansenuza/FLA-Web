import type { Metadata } from "next"
import DonationPageClient from "./donation-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/donar"

export const metadata: Metadata = {
  title: "Donar | Fundación Líderes de Ansenuza",
  description:
    "Donaciones para sostener programas educativos gratuitos de Fundación Líderes de Ansenuza. Opciones: Donar Online, PayPal y transferencia bancaria.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Donar | Fundación Líderes de Ansenuza",
    description: "Colabora con programas educativos gratuitos para jóvenes en Argentina.",
    url: PAGE_URL,
    siteName: "Fundación Líderes de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donar | Fundación Líderes de Ansenuza",
    description: "Ayuda a financiar programas educativos de impacto social.",
  },
}

export default function DonationPage() {
  return <DonationPageClient />
}

