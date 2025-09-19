import Hero from "@/components/home/hero"
import VideoSection from "@/components/home/video-section"
import Testimonials from "@/components/home/testimonials"
import WhyWeDoIt from "@/components/home/why-we-do-it"
import CurrentPrograms from "@/components/home/current-programs"
import Stats from "@/components/stats/stats"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <VideoSection />
      <Testimonials />
      <WhyWeDoIt />
      <CurrentPrograms />
    </main>
  )
}
