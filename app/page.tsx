import Header from "@/components/navbar/header"
import Hero from "@/components/home/hero"
import Stats from "@/components/home/stats"
import VideoSection from "@/components/home/video-section"
import CallToAction from "@/components/home/call-to-action"
import Testimonials from "@/components/home/testimonials"
import WhyWeDoIt from "@/components/home/why-we-do-it"
import CurrentPrograms from "@/components/home/current-programs"
import Footer from "@/components/home/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <VideoSection />
      <CallToAction />
      <Testimonials />
      <WhyWeDoIt />
      <CurrentPrograms />
      <Footer />
    </main>
  )
}
