import Hero from "@/components/home/hero"
import VideoSection from "@/components/home/video-section"
import Testimonials from "@/components/home/testimonials"
import WhyWeDoIt from "@/components/home/why-we-do-it"
import CurrentPrograms from "@/components/home/current-programs"
import Stats from "@/components/stats/stats"

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://www.lideresdeansenuza.org/#organization",
    name: "Fundación Líderes de Ansenuza",
    alternateName: "FLA",
    url: "https://www.lideresdeansenuza.org",
    logo: "https://www.lideresdeansenuza.org/images/LogoFLA.webp",
    description:
      "Organización sin fines de lucro que diseña y ejecuta programas educativos gratuitos para jóvenes en Argentina.",
    email: "contacto@lideresdeansenuza.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Independencia 350",
      addressLocality: "Miramar de Ansenuza",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    sameAs: [
      "https://www.instagram.com/fundacionlideresdeansenuza/",
      "https://www.facebook.com/fundacionlideresdeansenuza",
      "https://www.linkedin.com/company/fundaci%C3%B3n-l%C3%ADderes-de-ansenuza/",
      "https://www.tiktok.com/@fundacionlideresansenuza",
      "https://www.youtube.com/@fundacionlideresdeansenuza4512",
    ],
    potentialAction: {
      "@type": "DonateAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.lideresdeansenuza.org/donar",
      },
      recipient: {
        "@id": "https://www.lideresdeansenuza.org/#organization",
      },
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.lideresdeansenuza.org/#website",
    url: "https://www.lideresdeansenuza.org",
    name: "Fundación Líderes de Ansenuza",
    inLanguage: ["es-AR", "en"],
    publisher: {
      "@id": "https://www.lideresdeansenuza.org/#organization",
    },
    potentialAction: [
      {
        "@type": "DonateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.lideresdeansenuza.org/donar",
        },
      },
      {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.lideresdeansenuza.org/contactanos",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#fff7f7_42%,#ffffff_100%)] pt-[104px] sm:pt-[116px]">
        <Hero />
        <Stats />
        <VideoSection />
        <WhyWeDoIt />
        <CurrentPrograms />
        <Testimonials />
      </main>
    </>
  )
}
