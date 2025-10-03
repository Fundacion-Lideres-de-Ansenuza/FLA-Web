import Hero from "@/components/home/hero"
import VideoSection from "@/components/home/video-section"
import Testimonials from "@/components/home/testimonials"
import WhyWeDoIt from "@/components/home/why-we-do-it"
import CurrentPrograms from "@/components/home/current-programs"
import Stats from "@/components/stats/stats"
import { getDictionary } from "@/lib/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-white">
      <Hero dictionary={dictionary.hero} />
      <Stats dictionary={dictionary.stats} />
      <VideoSection dictionary={dictionary.video_section} />
      <Testimonials dictionary={dictionary.testimonials} />
      <WhyWeDoIt dictionary={dictionary.why_we_do_it} />
      <CurrentPrograms dictionary={dictionary.current_programs} />
    </main>
  )
}
