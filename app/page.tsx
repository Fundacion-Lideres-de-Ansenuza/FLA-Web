import Hero from "@/components/home/hero"
import VideoSection from "@/components/home/video-section"
import Testimonials from "@/components/home/testimonials"
import WhyWeDoIt from "@/components/home/why-we-do-it"
import CurrentPrograms from "@/components/home/current-programs"
import Stats from "@/components/stats/stats"

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#fff7f7_42%,#ffffff_100%)] pt-[104px] sm:pt-[116px]">
      <Hero />
      <Stats />
      <VideoSection />
      <WhyWeDoIt />
      <CurrentPrograms />
      <Testimonials />
    </main>
  )
}
