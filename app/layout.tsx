import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./tailwind.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fundación Compromiso - Jóvenes transformando la educación",
  description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.",
  keywords: "educación, jóvenes, ONG, programas educativos, Argentina, voluntariado",
  authors: [{ name: "Fundación Compromiso" }],
  openGraph: {
    title: "Fundación Compromiso - Jóvenes transformando la educación",
    description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.",
    type: "website",
    locale: "es_AR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
