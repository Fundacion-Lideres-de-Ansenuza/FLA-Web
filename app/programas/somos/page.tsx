import Hero from "@/components/programas/somos/hero";
import Description from "@/components/programas/somos/description";
import Requirements from "@/components/programas/somos/requirements";
import Application from "@/components/programas/somos/application";
import Stages from "@/components/programas/somos/stages";
import Sponsors from "@/components/programas/somos/sponsors";
import Faq from "@/components/programas/somos/faq";
import Blog from "@/components/programas/somos/blog";
import Testimonials from "@/components/programas/somos/testimonials";
import Impact from "@/components/programas/somos/impact";
import Gallery from "@/components/programas/somos/gallery";

export default function Somos() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Description />
      <Requirements />
      <Application />
      <Stages />
      <Sponsors />
      <Faq />
      <Blog />
      <Testimonials />
      <Impact />
      <Gallery />
    </main>
  );
}