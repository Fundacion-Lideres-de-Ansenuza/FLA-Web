import type React from "react"
import type { Metadata } from "next"
import { Inter, Contrail_One, Arimo } from "next/font/google"
import localFont from "next/font/local"
import "./tailwind.css"
import "./globals.css"
import Header from "@/components/navbar"
import Footer from "@/components/home/footer"
import { AccessibilityProvider } from "@/lib/context/AccessibilityContext"
import Accessibility from "@/components/accessibility/Accessibility"
import I18nProvider from "@/components/I18nProvider"

const inter = Inter({ subsets: ["latin"] })
const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
})
const fla = localFont({ src: "../public/fonts/FLA.otf", variable: "--font-fla", display: "swap" })
const saridona = localFont({ src: "../public/fonts/Saridona_personal use.ttf", variable: "--font-saridona", display: "swap" })
const contrailOne = Contrail_One({ weight: "400", subsets: ["latin"], variable: "--font-contrail-one", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lideresdeansenuza.org"),
  manifest: "/manifest.webmanifest",
  title: "Fundación Líderes de Ansenuza - Jóvenes transformando la educación",
  description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en Argentina.",
  keywords: "educación, jóvenes, ONG, programas educativos, Argentina, voluntariado",
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  alternates: {
    canonical: "https://www.lideresdeansenuza.org",
    languages: {
      "es-AR": "https://www.lideresdeansenuza.org",
      en: "https://www.lideresdeansenuza.org",
    },
  },
  openGraph: {
    title: "Fundación Líderes de Ansenuza - Jóvenes transformando la educación",
    description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en Argentina.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación Líderes de Ansenuza",
    description: "Programas educativos gratuitos para jóvenes en Argentina.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} ${fla.variable} ${saridona.variable} ${contrailOne.variable} ${arimo.variable} overflow-x-hidden`}>
        <I18nProvider>
          <AccessibilityProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
            >
              Saltar al contenido principal
            </a>
            <Header />
            <div id="main-content" tabIndex={-1}>
              {children}
            </div>
            <Footer />
            <Accessibility />
          </AccessibilityProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
