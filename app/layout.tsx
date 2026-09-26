import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./tailwind.css"
import "./globals.css"
import Header from "@/components/navbar"
import Footer from "@/components/home/footer"
import { AccessibilityProvider } from "@/lib/context/AccessibilityContext"
import Accessibility from "@/components/accessibility/Accessibility"
import I18nProvider from "@/components/I18nProvider"

const inter = Inter({ subsets: ["latin"] })
// FLA (Saridona) es muy condensada: size-adjust la agranda de forma pareja para que los títulos
// tengan el peso visual que tenían con la fuente anterior, sin tocar cada clase de tamaño.
const fla = localFont({
  src: "../public/fonts/FLA.otf",
  variable: "--font-fla",
  display: "swap",
  declarations: [{ prop: "size-adjust", value: "115%" }],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lideresdeansenuza.org"),
  manifest: "/manifest.webmanifest",
  title: "Fundación Líderes de Ansenuza - Jóvenes transformando la educación",
  description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en Argentina.",
  keywords: "educación, jóvenes, ONG, programas educativos, Argentina, voluntariado",
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    url: "/",
    title: "Fundación Líderes de Ansenuza - Jóvenes transformando la educación",
    description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en Argentina.",
    type: "website",
    locale: "es_AR",
    siteName: "Fundación Líderes de Ansenuza",
    images: [
      {
        url: "/images/DSC_0044.webp",
        width: 6000,
        height: 4000,
        alt: "Jóvenes de Fundación Líderes de Ansenuza"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación Líderes de Ansenuza",
    description: "Programas educativos gratuitos para jóvenes en Argentina.",
    images: ["/images/DSC_0044.webp"]
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
      <body className={`${inter.className} ${fla.variable} overflow-x-hidden`}>
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
