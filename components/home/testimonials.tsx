"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, Quote } from "lucide-react"
import { useTranslation } from "react-i18next"


enum TestimonialRole {
  VOLUNTARIO = "Voluntarix",
  PARTICIPANTE = "Participante",
}

interface Testimonial {
  name: string
  role: TestimonialRole
  program?: string
  content: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Alexis Alejandro Rodriguez",
    role: TestimonialRole.VOLUNTARIO,
    content: "FLA significa mucho para mí, me uní a esta hermosa fundación en 2024 sin saber qué esperar, y todo cambió. Recuerdo escuchar la palabra 'flamilia' y no entender su verdadero significado hasta que viví la experiencia. La amistad y el cariño de cada voluntario y líder te hacen sentir parte de la flamilia sin dudas, aprendí mucho a nivel personal y profesional gracias a las herramientas y oportunidades que nos brinda la fundación. Las oportunidades de crecimiento dentro de la fundación son impresionantes, recuerdo mi primera Cumbre de SOMOS fue inolvidable, me sentí parte de un equipo con un mismo objetivo de allí surgieron amistades que perduran hasta hoy. Sin dudas, la fundación se ha convertido en una familia más para mí, y su impacto en mi vida es invaluable.",
    avatar: "/images/testimonials/volunteers/Rodriguez_Alexis.jpg"
  },
  {
    name: "Sebastián Marcelo Pacheco",
    role: TestimonialRole.VOLUNTARIO,
    content: "Para mí, FLA es mucho más que una oportunidad. Es un lugar donde crecer se vuelve algo natural, donde equivocarse no da miedo porque sabés que hay alguien al lado que te va a tender la mano. Es ese espacio donde no solo te forman, sino que te acompañan, te cuidan y te enseñan desde el corazón. En FLA aprendí que no siempre se trata de estar bien, sino de estar acompañado. Y eso, para mí, lo hace único.",
    avatar: "/images/testimonials/volunteers/Sebastian_Pacheco.jpg"
  },
  {
    name: "Ramiro Joaquín Gatica",
    role: TestimonialRole.VOLUNTARIO,
    program: "Líder de Comunicación",
    content: "Me uní a FLA buscando un lugar para desarrollarme profesionalmente, pero encontré mucho más. Tuve la oportunidad de conocer personas increíbles y de participar en espacios que promueven el liderazgo. Comencé voluntariando en Prensa, luego acompañé al STAFF de SOMOS en la 3ra edición del programa, y ahora me encuentro como Líder de comunicación. Desde que entré no he parado de aprender cosas nuevas, y cada día agradezco poder ser parte de esta FLAmilia.",
    avatar: "/images/testimonials/volunteers/Imagen_formal_SOMOS_FLA.jpg"
  },
  {
    name: "Martina Blangetti",
    role: TestimonialRole.VOLUNTARIO,
    content: "Estar en FLA es algo que me interpela en todos los aspectos. Me hace más humana y me brinda perspectivas que jamás hubiera imaginado. Siendo voluntaria en FLA aprendí a ser líder, a tomar decisiones difíciles y a ver más allá de mi persona. Puedo afirmar que realmente es una experiencia gratificante y que me llena el alma, por ese y muchos motivos más, elijo todos los días seguir en esta hermosa Fundación.",
    avatar: "/images/testimonials/volunteers/Martina_Blangetti.jpg"
  },
  {
    name: "Daniela Abigail Gutierrez",
    role: TestimonialRole.VOLUNTARIO,
    content: "FLA significa transformación para mí, tengo 16 años y unirme cómo voluntaria a la fundación hizo que aprenda tantas cosas en poco tiempo, habilidades como comunicación, trabajo en equipo y creación de material para los programas son herramientas que fui trabajando y mejorando con apoyo de mí equipo que siempre está presente. La comunidad hermosa que existe dentro de FLA no tiene comparación y no la cambiaría por nada.",
    avatar: "/images/testimonials/volunteers/Gutierrez_Daniela.jpg"
  },
  {
    name: "Magali Galat Giorgi",
    role: TestimonialRole.VOLUNTARIO,
    program: "Medición de Impacto",
    content: "Voluntariar en FLA para mí es una oportunidad para corroborar que el trabajo colaborativo es posible, para aportar valor y continuar aprendiendo desde mi rol en la Medición de Impacto. He podido experimentar lo alegre, inspirador y refrescante que es compartir con un equipo joven y pujante, que avanza con pasión y compromiso en pos de construir un mundo mejor!",
    avatar: "/images/testimonials/volunteers/Magali_Galat.jpg"
  },
  {
    name: "Fatima Kap",
    role: TestimonialRole.VOLUNTARIO,
    content: "La Fundación llegó en una etapa de mi vida en la que me estaba desarrollando personalmente, y fue como un impulso que me ayudó a acomodar mi camino. Me guió a ir por un rumbo mejor y siempre voy a estar agradecida con FLA por el lugar en el que estoy hoy.",
    avatar: "/images/testimonials/volunteers/Kap_Fatima.jpg"
  },
  {
    name: "Alejo Pucheta",
    role: TestimonialRole.PARTICIPANTE,
    program: "Bandada Coscorobas",
    content: "La Fundación para mí es un espacio que me inspira y me impulsa a crecer. Es donde aprendí que cada idea, por más pequeña que parezca, puede transformarse en algo grande si se hace con compromiso y en equipo. Me hizo entender el valor de la empatía, del trabajo colectivo y de creer que los jóvenes podemos generar un cambio real. Ser parte de Líderes de Ansenuza me ayudó a descubrir mi voz, a actuar con propósito y a sentir que formo parte de algo mucho más grande que yo.",
    avatar: "/images/testimonials/participants/Alejo_Pucheta.jpg"
  },
  {
    name: "Luz Barzola",
    role: TestimonialRole.PARTICIPANTE,
    program: "Bandada Federales",
    content: "La fundación para mí es mi lugar favorito, donde me ayudan a crecer, me acompañan, me desafían y me hacen creer en mí. Es como una familia, donde todos vamos con el mismo propósito y nos apoyamos siempre. Gracias a la fundación conocí personas increíbles, lugares nuevos y viví experiencias que me cambiaron. Me ayudó a sacar mi mejor versión y a formar la persona que soy hoy.",
    avatar: "/images/testimonials/participants/Luz_Barzola.jpg"
  },
  {
    name: "Abril Bianco",
    role: TestimonialRole.PARTICIPANTE,
    program: "Bandada Federales",
    content: "Para mí la fundación es una red de apoyo la cual te enseña y te brinda posibilidades para crecer como persona, a mi me permitió impulsar aspectos personales que no sabía que tenía o que estaban apagados.",
    avatar: "/images/testimonials/participants/Abril_Bianco.jpg"
  },
  {
    name: "Valentina Oyarzabal",
    role: TestimonialRole.PARTICIPANTE,
    program: "Bandada Federales",
    content: "Para mi FLA es un espacio que te inspira a creer en vos mismo, a descubrir tus capacidades y a trabajar junto a otros. Te enseña que con compromiso y confianza podes lograr grandes cosas.",
    avatar: "/images/testimonials/participants/Valen_Oyarzabal.jpg"
  },
  {
    name: "Tiziana Notari",
    role: TestimonialRole.PARTICIPANTE,
    program: "Bandada Cardenales Copete Rojo",
    content: "FLA es mucho más que una Fundación, es un espacio en donde aprendemos a compartir, a cuidar y a ver el mundo de otra manera. Con cada actividad, por más pequeña que sea, podemos realizar un cambio importante y real. En este espacio descubrí el valor del trabajo en equipo y del compromiso.",
    avatar: "/images/testimonials/participants/Tiziana_Notari.jpg"
  },
  {
    name: "Francesco Sironi",
    role: TestimonialRole.PARTICIPANTE,
    program: "Bandada Tacuaritas Azules",
    content: "FLA es mi segunda familia, los momentos que creé y los aprendizajes adquiridos en el camino con ellos son inolvidables, espero que muchos más jóvenes experimenten en carne propia esta etapa que te deja una marca en el corazón que llevarás durante toda tu vida.",
    avatar: "/images/testimonials/participants/Francisco_Sironi.jpg"
  },
  {
    name: "Angeles Gorosito",
    role: TestimonialRole.PARTICIPANTE,
    content: "La Fundación se volvió como mi segundo hogar, la verdad que estoy super agradecidas por todo lo que me brindó este año, aprendí muchas cosas nuevas en especial a ser más líder (lo cuál, fue una de las cosas que más me gustaron), conocí gente con un gran corazón las cuales siempre las voy a tener en mi corazón en especial a MARINA, la cual nunca me dejo bajar los brazos, y obvio los falaropos que sin ellos esto no sería nada.",
    avatar: "/images/testimonials/participants/Angeles_Gorosito.jpg"
  },
]

const roleColors: Record<TestimonialRole, string> = {
  [TestimonialRole.VOLUNTARIO]: "#f45e5f",
  [TestimonialRole.PARTICIPANTE]: "#bc2222",
}

const testimonialPairs = testimonials.reduce<Testimonial[][]>((acc, _, index) => {
  if (index % 2 === 0) {
    acc.push(testimonials.slice(index, index + 2))
  }
  return acc
}, [])

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden h-[240px]"
      style={{ backgroundColor: roleColors[testimonial.role] }}
    >
      <Quote className="absolute top-4 right-4 w-10 h-10 opacity-20" />

      <div>
        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3">
          {testimonial.role}
          {testimonial.program && ` • ${testimonial.program}`}
        </div>

        <p className="text-sm leading-relaxed italic font-saridona line-clamp-4 overflow-hidden">
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
            <span className="text-xl font-bold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <span className="font-semibold block text-sm">{testimonial.name}</span>
          <span className="text-white/80 text-xs">{testimonial.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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

  const currentPair = testimonialPairs[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 150 : -150,
      opacity: 0,
    }),
  }

  return (
    <section className="py-8 sm:py-9 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight font-contrail-one">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/TESTIMONIO_1CUT.png"
              alt="Testimonio 1"
              width={200}
              height={100}
              className="rounded-3xl w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[360px] shadow-lg object-cover"
            />
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <Image
                src="/images/TESTIMONIO_2.png"
                alt="Testimonio 2"
                width={200}
                height={200}
                className="rounded-2xl w-full h-[140px] sm:h-[190px] md:h-[250px] lg:h-[290px] shadow-lg object-cover"
              />
              <Image
                src="/images/TESTIMONIO_3_MIN.png"
                alt="Testimonio 3"
                width={200}
                height={200}
                className="rounded-2xl w-full h-[140px] sm:h-[190px] md:h-[250px] lg:h-[290px] shadow-lg object-cover"
              />
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
                aria-label="Testimonio anterior"
              >
                <ChevronUp className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg"
                aria-label="Siguiente testimonio"
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
                    opacity: { duration: 0.6, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 flex flex-col gap-4"
                >
                  {currentPair.map((testimonial, idx) => (
                    <div key={idx} className="h-[240px]">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="w-full rounded-full"
                  style={{ backgroundColor: roleColors[currentPair[0].role] }}
                  initial={{ height: "0%" }}
                  animate={{ height: isPaused ? `${((currentIndex + 1) / totalPairs) * 100}%` : "100%" }}
                  transition={{
                    duration: isPaused ? 0 : 6,
                    ease: "linear"
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
