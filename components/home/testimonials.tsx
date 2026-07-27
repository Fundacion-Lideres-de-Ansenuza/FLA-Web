"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, Quote } from "lucide-react"
import { useTranslation } from "react-i18next"

enum TestimonialRole {
  VOLUNTEER = "volunteer",
  PARTICIPANT = "participant",
}

interface TestimonialEntry {
  name: string
  role: TestimonialRole
  programEs?: string
  programEn?: string
  contentEs: string
  contentEn: string
  avatar?: string
}

interface TestimonialView {
  name: string
  role: TestimonialRole
  roleLabel: string
  program?: string
  content: string
  avatar?: string
}

const testimonialEntries: TestimonialEntry[] = [
  {
    name: "Alexis Alejandro Rodriguez",
    role: TestimonialRole.VOLUNTEER,
    contentEs:
      "FLA significa mucho para mi. Me uni a esta fundación en 2024 sin saber que esperar y todo cambio. La amistad y el carino del equipo me hicieron sentir parte de una verdadera familia. Aprendi mucho en lo personal y profesional gracias a las oportunidades que brinda la fundación.",
    contentEn:
      "FLA means a lot to me. I joined the foundation in 2024 without knowing what to expect, and everything changed. The friendship and care from the team made me feel part of a real family. I learned a lot both personally and professionally through the opportunities the foundation creates.",
    avatar: "/images/testimonials/volunteers/Rodriguez_Alexis.webp",
  },
  {
    name: "Sebastian Marcelo Pacheco",
    role: TestimonialRole.VOLUNTEER,
    contentEs:
      "Para mi, FLA es mucho mas que una oportunidad. Es un lugar donde crecer se vuelve natural y donde siempre hay alguien para acompañarte. En FLA aprendi que no siempre se trata de estar bien, sino de estar acompañado.",
    contentEn:
      "For me, FLA is much more than an opportunity. It is a place where growth becomes natural and where someone is always there to support you. At FLA I learned that it is not always about being okay, but about being accompanied.",
    avatar: "/images/testimonials/volunteers/Sebastian_Pacheco.webp",
  },
  {
    name: "Ramiro Joaquin Gatica",
    role: TestimonialRole.VOLUNTEER,
    programEs: "Lider de Comunicacion",
    programEn: "Communication Lead",
    contentEs:
      "Me uni buscando desarrollo profesional y encontre mucho mas. Conoci personas increíbles, participe en espacios de liderazgo y creci en nuevos roles. Desde que entre, no pare de aprender.",
    contentEn:
      "I joined looking for professional growth and found much more. I met amazing people, took part in leadership spaces, and grew into new roles. Since I joined, I have not stopped learning.",
    avatar: "/images/testimonials/volunteers/Imagen_formal_SOMOS_FLA.webp",
  },
  {
    name: "Martina Blangetti",
    role: TestimonialRole.VOLUNTEER,
    contentEs:
      "Estar en FLA me interpela en todos los aspectos. Me hizo mas humana y me dio perspectivas que no imaginaba. Aprendi a liderar, a tomar decisiones dificiles y a mirar mas alla de mi persona.",
    contentEn:
      "Being at FLA challenges me in every way. It made me more human and gave me perspectives I had never imagined. I learned to lead, make difficult decisions, and look beyond myself.",
    avatar: "/images/testimonials/volunteers/Martina_Blangetti.webp",
  },
  {
    name: "Daniela Abigail Gutierrez",
    role: TestimonialRole.VOLUNTEER,
    contentEs:
      "FLA significa transformacion para mi. Me ayudó a desarrollar habilidades de comunicacion, trabajo en equipo y creacion de materiales para programas, siempre con acompañamiento del equipo.",
    contentEn:
      "FLA means transformation to me. It helped me build communication, teamwork, and content-creation skills, always with close support from the team.",
    avatar: "/images/testimonials/volunteers/Gutierrez_Daniela.webp",
  },
  {
    name: "Magali Galat Giorgi",
    role: TestimonialRole.VOLUNTEER,
    programEs: "Medicion de Impacto",
    programEn: "Impact Measurement",
    contentEs:
      "Voluntariar en FLA es una oportunidad para aportar valor y seguir aprendiendo. Compartir con un equipo joven y comprometido es algo inspirador.",
    contentEn:
      "Volunteering at FLA is an opportunity to add value and keep learning. Sharing work with a young and committed team is truly inspiring.",
    avatar: "/images/testimonials/volunteers/Magali_Galat.webp",
  },
  {
    name: "Fatima Kap",
    role: TestimonialRole.VOLUNTEER,
    contentEs:
      "La fundación llegó en un momento clave de mi vida y me ayudó a acomodar mi camino. Siempre voy a estar agradecida con FLA por el lugar en el que estoy hoy.",
    contentEn:
      "The foundation came at a key moment in my life and helped me find my path. I will always be grateful to FLA for where I am today.",
    avatar: "/images/testimonials/volunteers/Kap_Fatima.webp",
  },
  {
    name: "Alejo Pucheta",
    role: TestimonialRole.PARTICIPANT,
    programEs: "Bandada Coscorobas",
    programEn: "Coscorobas Cohort",
    contentEs:
      "La fundación me inspiró a crecer y a transformar ideas en acciones con impacto. Ser parte de Líderes de Ansenuza me ayudó a descubrir mi voz y actuar con propósito.",
    contentEn:
      "The foundation inspired me to grow and turn ideas into impactful actions. Being part of Líderes de Ansenuza helped me discover my voice and act with purpose.",
    avatar: "/images/testimonials/participants/Alejo_Pucheta.webp",
  },
  {
    name: "Luz Barzola",
    role: TestimonialRole.PARTICIPANT,
    programEs: "Bandada Federales",
    programEn: "Federales Cohort",
    contentEs:
      "La fundación es mi lugar favorito: me acompaña, me desafía y me ayuda a creer en mi. Gracias a esta experiencia conocí personas increíbles y viví momentos que me cambiaron.",
    contentEn:
      "The foundation is my favorite place: it supports me, challenges me, and helps me believe in myself. Through this experience I met incredible people and lived moments that changed me.",
    avatar: "/images/testimonials/participants/Luz_Barzola.webp",
  },
  {
    name: "Abril Bianco",
    role: TestimonialRole.PARTICIPANT,
    programEs: "Bandada Federales",
    programEn: "Federales Cohort",
    contentEs:
      "Para mi, la fundación es una red de apoyo que enseña y brinda posibilidades para crecer como persona.",
    contentEn:
      "To me, the foundation is a support network that teaches and gives real opportunities to grow as a person.",
    avatar: "/images/testimonials/participants/Abril_Bianco.webp",
  },
  {
    name: "Valentina Oyarzabal",
    role: TestimonialRole.PARTICIPANT,
    programEs: "Bandada Federales",
    programEn: "Federales Cohort",
    contentEs:
      "FLA es un espacio que te inspira a creer en vos, descubrir tus capacidades y trabajar con otras personas para lograr grandes cosas.",
    contentEn:
      "FLA is a space that inspires you to believe in yourself, discover your abilities, and work with others to achieve great things.",
    avatar: "/images/testimonials/participants/Valen_Oyarzabal.webp",
  },
  {
    name: "Tiziana Notari",
    role: TestimonialRole.PARTICIPANT,
    programEs: "Bandada Cardenales Copete Rojo",
    programEn: "Red-Crested Cardinals Cohort",
    contentEs:
      "FLA es mucho mas que una fundación: es un espacio para compartir, cuidar y ver el mundo de otra manera. Descubri el valor del trabajo en equipo y del compromiso.",
    contentEn:
      "FLA is much more than a foundation: it is a space to share, care, and see the world differently. I discovered the value of teamwork and commitment.",
    avatar: "/images/testimonials/participants/Tiziana_Notari.webp",
  },
  {
    name: "Francesco Sironi",
    role: TestimonialRole.PARTICIPANT,
    programEs: "Bandada Tacuaritas Azules",
    programEn: "Blue Tacuaritas Cohort",
    contentEs:
      "FLA es mi segunda familia. Los momentos y aprendizajes que viví en este camino son inolvidables y me dejaron una marca para toda la vida.",
    contentEn:
      "FLA is my second family. The moments and lessons I experienced on this path are unforgettable and left a lifelong mark on me.",
    avatar: "/images/testimonials/participants/Francisco_Sironi.webp",
  },
  {
    name: "Angeles Gorosito",
    role: TestimonialRole.PARTICIPANT,
    contentEs:
      "La fundación se volvio mi segundo hogar. Estoy muy agradecida por todo lo que me dio: aprendi, conocí personas increíbles y gane confianza para seguir creciendo.",
    contentEn:
      "The foundation became my second home. I am deeply grateful for everything it gave me: I learned, met incredible people, and gained confidence to keep growing.",
    avatar: "/images/testimonials/participants/Angeles_Gorosito.webp",
  },
]

const roleColors: Record<TestimonialRole, string> = {
  [TestimonialRole.VOLUNTEER]: "#f45e5f",
  [TestimonialRole.PARTICIPANT]: "#bc2222",
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialView }) {
  return (
    <div
      className="text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden h-[240px]"
      style={{ backgroundColor: roleColors[testimonial.role] }}
    >
      <Quote className="absolute top-4 right-4 w-10 h-10 opacity-20" />

      <div>
        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3">
          {testimonial.roleLabel}
          {testimonial.program && ` • ${testimonial.program}`}
        </div>

        <p className="text-sm leading-relaxed italic font-medium line-clamp-4 overflow-hidden">
          &quot;{testimonial.content}&quot;
        </p>
      </div>

      <div className="flex items-center mt-4">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full mr-3 object-cover w-10 h-10 border-2 border-white/30"
          />
        ) : (
          <div className="w-10 h-10 rounded-full mr-3 bg-white/20 flex items-center justify-center">
            <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
          </div>
        )}
        <div>
          <span className="font-semibold block text-sm">{testimonial.name}</span>
          <span className="text-white/80 text-xs">{testimonial.roleLabel}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t, i18n } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const isEnglish = (i18n.resolvedLanguage || i18n.language || "es").startsWith("en")

  const testimonials = useMemo<TestimonialView[]>(() => {
    const volunteerLabel = t("testimonials.volunteer")
    const participantLabel = t("testimonials.participant")

    return testimonialEntries.map((entry) => ({
      name: entry.name,
      role: entry.role,
      roleLabel: entry.role === TestimonialRole.VOLUNTEER ? volunteerLabel : participantLabel,
      program: isEnglish ? entry.programEn : entry.programEs,
      content: isEnglish ? entry.contentEn : entry.contentEs,
      avatar: entry.avatar,
    }))
  }, [isEnglish, t])

  const testimonialPairs = useMemo(
    () =>
      testimonials.reduce<TestimonialView[][]>((acc, _, index) => {
        if (index % 2 === 0) {
          acc.push(testimonials.slice(index, index + 2))
        }
        return acc
      }, []),
    [testimonials],
  )

  const totalPairs = testimonialPairs.length

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % totalPairs)
  }, [totalPairs])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + totalPairs) % totalPairs)
  }, [totalPairs])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  useEffect(() => {
    setCurrentIndex(0)
  }, [isEnglish])

  const currentPair = testimonialPairs[currentIndex] || testimonialPairs[0]

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir < 0 ? 150 : -150,
      opacity: 0,
    }),
  }

  return (
    <section className="py-8 sm:py-9 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight font-contrail">{t("testimonials.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="grid grid-cols-1 gap-4">
            <Image src="/images/TESTIMONIO_1CUT.webp" alt="Testimonio 1" width={200} height={100} className="rounded-3xl w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[360px] shadow-lg object-cover" />
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <Image src="/images/TESTIMONIO_2.webp" alt="Testimonio 2" width={200} height={200} className="rounded-2xl w-full h-[140px] sm:h-[190px] md:h-[250px] lg:h-[290px] shadow-lg object-cover" />
              <Image src="/images/TESTIMONIO_3_MIN.webp" alt="Testimonio 3" width={200} height={200} className="rounded-2xl w-full h-[140px] sm:h-[190px] md:h-[250px] lg:h-[290px] shadow-lg object-cover" />
            </div>
          </div>

          <div
            className="relative flex items-center gap-4 rounded-[28px] border border-[#eed6d6] bg-white/90 p-4 shadow-[0_18px_44px_rgba(144,20,14,0.08)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg"
                aria-label={t("testimonials.previous")}
              >
                <ChevronUp className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg"
                aria-label={t("testimonials.next")}
              >
                <ChevronDown className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="flex-1 relative h-[500px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 100, damping: 20 },
                    opacity: { duration: 0.6, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 flex flex-col gap-4"
                >
                  {currentPair?.map((testimonial, idx) => (
                    <div key={idx} className="h-[240px]">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="w-full rounded-full"
                  style={{ backgroundColor: roleColors[currentPair?.[0]?.role ?? TestimonialRole.VOLUNTEER] }}
                  initial={{ height: "0%" }}
                  animate={{ height: isPaused ? `${((currentIndex + 1) / totalPairs) * 100}%` : "100%" }}
                  transition={{
                    duration: isPaused ? 0 : 6,
                    ease: "linear",
                  }}
                  key={`progress-${currentIndex}-${isPaused}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
