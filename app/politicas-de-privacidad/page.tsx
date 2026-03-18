import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, HeartHandshake, Mail, ShieldCheck, Sparkles } from "lucide-react"

const programPolicy = [
  {
    title: "¿Qué describe esta política de privacidad? ¿En qué legislación se basa?",
    body: [
      "La presente Política de Privacidad de Datos Personales describe cómo la Fundación Líderes de Ansenuza, con domicilio legal en Independencia 350, Miramar de Ansenuza, Córdoba, Argentina (en adelante, “la fundación”) recopila, utiliza y protege la información personal de aquellas personas que se inscriben y participan en sus programas educativos o en actividades directamente organizadas por la fundación.",
      "Esta Política de Privacidad se rige por la Ley N° 25.326 de Protección de Datos Personales, su Decreto Reglamentario N° 1558/2001 y demás normas complementarias.",
    ],
  },
  {
    title: "¿Qué información recopila la fundación y con qué fines?",
    body: [
      "La fundación recopila la siguiente información: I) Datos identificativos: nombre y apellido, DNI, fecha de nacimiento, género; II) Datos de contacto: domicilio, código postal, teléfono móvil, correo electrónico; III) Información académica: colegio al que asiste y curso; IV) Datos del padre/madre/tutor (en caso de ser menor de edad): nombre y apellido, teléfono móvil y correo electrónico.",
      "Estos datos se recopilan y almacenan con el propósito de gestionar eficientemente la participación en los programas, mejorar la calidad de los servicios ofrecidos, asegurar una comunicación efectiva y facilitar la evaluación del impacto a largo plazo de los programas en la vida de los participantes.",
    ],
  },
  {
    title: "¿Cómo protege la fundación la información recopilada?",
    body: [
      "Con el fin de garantizar la privacidad y seguridad de la información recopilada la fundación tiene varias medidas en funcionamiento: limita el acceso a personal autorizado, implementa protocolos de seguridad tecnológica y no comparte la información con terceros sin el consentimiento expreso del participante, excepto cuando sea requerido por ley.",
    ],
  },
  {
    title: "¿Cuáles son mis derechos y cómo los ejerzo?",
    body: [
      "Los titulares de los datos personales tienen el derecho de acceder, corregir y suprimir su información personal. Para hacerlo deben enviar un correo electrónico a contacto@lideresdeansenuza.org, adjuntando una copia del frente y dorso de su DNI y el formulario (F-DP02) completo y firmado.",
      "En caso de que el titular de la información sea menor de edad, se deberá adjuntar una copia del frente y dorso del DNI del titular, una copia del frente y dorso del DNI del padre/madre/tutor y el formulario (F-DP01) completo y firmado. Ambos formularios se pueden encontrar al final de la política.",
    ],
  },
  {
    title: "¿Cuánto tiempo conservará la fundación la información?",
    body: [
      "La fundación conservará sus Datos Personales por el tiempo necesario para el cumplimiento de las finalidades descritas en la presente Política de Privacidad. Su Información será destruida cuando haya dejado de ser necesaria o pertinente a los fines para los cuales hubiese sido recolectada, salvo que exista una obligación legal de conservarla por un término mayor.",
    ],
  },
  {
    title: "¿Es necesario aceptar esta política de privacidad para inscribirse a uno de sus programas?",
    body: [
      "Al inscribirse en alguno de nuestros programas, usted reconoce haber leído y comprendido esta Política de Privacidad. Si usted es menor de edad, su padre/madre/tutor deberá leer y aceptar el presente documento.",
    ],
  },
  {
    title: "Aclaraciones finales",
    body: [
      "La fundación se reserva el derecho de modificar esta política en cualquier momento, dentro de la ley vigente. Los cambios entrarán en vigencia después de su publicación.",
      "Si tiene alguna pregunta o inquietud comuníquese con contacto@lideresdeansenuza.org.",
    ],
  },
]

const newsletterPolicy = [
  {
    title: "¿Qué describe esta política de privacidad? ¿En qué legislación se basa?",
    body: [
      "La presente Política de Privacidad de Datos Personales describe cómo la Fundación Líderes de Ansenuza, con domicilio legal en Independencia 350, Miramar de Ansenuza, Córdoba, Argentina (en adelante, “la fundación”) recopila, utiliza y protege la información personal de aquellas personas que se suscriben en su Newsletter.",
      "Esta Política de Privacidad se rige por la Ley N° 25.326 de Protección de Datos Personales, su Decreto Reglamentario N° 1558/2001 y demás normas complementarias.",
    ],
  },
  {
    title: "¿Qué información recopila la fundación y con qué fines?",
    body: [
      "La fundación recopila la siguiente información: I) Datos identificativos: nombre y apellido; II) Datos de contacto: correo electrónico. Estos datos se recopilan y almacenan con el propósito de enviar información relevante y actualizada sobre la fundación, incluyendo noticias, eventos, publicaciones y actividades relacionadas. Además, se utilizarán para gestionar el envío del Newsletter y realizar análisis estadísticos para mejorar su contenido y funcionamiento.",
    ],
  },
  {
    title: "¿Cómo protege la fundación la información recopilada?",
    body: [
      "Con el fin de garantizar la privacidad y seguridad de la información recopilada, la fundación tiene varias medidas en funcionamiento: limita el acceso a personal autorizado, implementa protocolos de seguridad tecnológica y no comparte la información con terceros sin el consentimiento expreso del participante, excepto cuando sea requerido por ley.",
    ],
  },
  {
    title: "¿Cuáles son mis derechos y cómo los ejerzo?",
    body: [
      "Los titulares de los datos personales tienen el derecho de acceder, corregir y suprimir su información personal. Para hacerlo el titular puede utilizar los enlaces proporcionados en cada correo electrónico del Newsletter o contactarse por correo electrónico a contacto@lideresdeansenuza.org.",
    ],
  },
  {
    title: "¿Cuánto tiempo conservará la fundación la información?",
    body: [
      "La fundación conservará sus Datos Personales por el tiempo necesario para el cumplimiento de las finalidades descritas en la presente Política de Privacidad. Su información será destruida cuando haya dejado de ser necesaria o cuando el titular de los datos dé de baja del newsletter.",
    ],
  },
  {
    title: "¿Es necesario aceptar esta política de privacidad para darse de alta en el Newsletter?",
    body: [
      "Al enviar el formulario de alta en el Newsletter, el usuario otorga su consentimiento expreso para el tratamiento de sus datos personales de acuerdo con los fines establecidos en la Política de Privacidad. Si usted es menor de edad, su padre/madre/tutor deberá leer y aceptar el presente documento.",
    ],
  },
  {
    title: "Aclaraciones finales",
    body: [
      "La fundación se reserva el derecho de modificar esta política en cualquier momento, dentro de la ley vigente. Los cambios entrarán en vigencia después de su publicación.",
      "Si tiene alguna pregunta o inquietud comuníquese con contacto@lideresdeansenuza.org.",
    ],
  },
]

const actionCards = [
  {
    title: "Formulario F-DP01",
    description: "Para titulares menores de edad, con firma de padre, madre o tutor.",
    href: "https://docs.google.com/document/d/1sCvQnEDodp5GYG97c0UYq9PABudIXC4uQCGcnyqicps/",
    label: "Abrir formulario menor de edad",
  },
  {
    title: "Formulario F-DP02",
    description: "Para titulares mayores de edad que quieran acceder, corregir o suprimir datos.",
    href: "https://docs.google.com/document/d/1dAlF0QjVPqO-Vowtuzx8CK7CjDoRTkY080SJtvitmuc/",
    label: "Abrir formulario mayor de edad",
  },
  {
    title: "Reclamo ante la AAIP",
    description: "Enlace oficial para reclamos vinculados a protección de datos personales.",
    href: "https://www.argentina.gob.ar/aaip/datospersonales/reclama/30716569396--RL-2024-5099117-APN-DNPDP#AAIP",
    label: "Ir al portal oficial de la AAIP",
  },
]

export const metadata: Metadata = {
  title: "Políticas de privacidad | Fundación Líderes de Ansenuza",
  description:
    "Cómo Fundación Líderes de Ansenuza recopila, usa y protege los datos personales de participantes y suscriptores.",
}

function PolicyCard({
  index,
  title,
  body,
}: {
  index: number
  title: string
  body: string[]
}) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-[#f6caca] bg-white/90 p-6 shadow-[0_18px_50px_rgba(144,20,14,0.08)] backdrop-blur-sm sm:p-8">
      <div className="absolute right-4 top-4 h-14 w-14 rounded-full bg-[radial-gradient(circle,#ffd1a8_0%,#ffd1a8_35%,transparent_36%)] opacity-80" />
      <div className="mb-5 flex items-center gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#90140e] text-lg font-black text-white shadow-[0_10px_24px_rgba(144,20,14,0.24)]">
          {index}
        </span>
        <h3 className="text-xl font-extrabold leading-tight text-[#3d1713] sm:text-2xl">{title}</h3>
      </div>
      <div className="space-y-4 text-base leading-8 text-[#5a3c37] font-arimo">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default function PoliticasDePrivacidadPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(244,94,94,0.22)_0%,rgba(244,94,94,0)_30%),radial-gradient(circle_at_top_right,rgba(255,192,120,0.28)_0%,rgba(255,192,120,0)_26%),linear-gradient(180deg,#fffaf7_0%,#fff3ef_30%,#fff8f0_65%,#ffffff_100%)] pt-[108px] sm:pt-[120px]">
      <section className="relative">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] border border-[#f1d3c0] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,244,236,0.96))] px-6 py-8 shadow-[0_28px_80px_rgba(144,20,14,0.12)] sm:px-10 sm:py-12">
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#f45e5e]/20 blur-2xl" />
            <div className="absolute right-0 top-0 h-36 w-36 translate-x-8 -translate-y-8 rounded-full bg-[#ffd8a8]/70 blur-2xl" />
            <div className="absolute bottom-0 right-20 h-24 w-24 rounded-full border-8 border-dashed border-[#f7b36c]/40" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f3c9c0] bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[#90140e]">
                  <Sparkles className="h-4 w-4" />
                  Privacidad con claridad
                </span>
                <div className="space-y-4">
                  <h1 className="max-w-3xl text-4xl leading-none text-[#2f1614] sm:text-5xl lg:text-6xl">
                    Políticas de privacidad con tono humano y corazón FLA
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-[#5b4038] font-arimo sm:text-xl">
                    Acá reunimos la información sobre cómo cuidamos los datos personales de quienes participan en nuestros programas y de quienes se suscriben al newsletter. Mantuvimos el texto legal, pero lo ordenamos para que se lea más fácil y se sienta más cercano.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[28px] border border-white/60 bg-white/75 p-5 shadow-[0_12px_35px_rgba(144,20,14,0.08)] backdrop-blur-sm">
                  <ShieldCheck className="mb-3 h-8 w-8 text-[#bc2222]" />
                  <h2 className="mb-2 text-xl font-black text-[#3d1713]">Base legal</h2>
                  <p className="font-arimo text-[#5a3c37]">
                    Ley N° 25.326, Decreto Reglamentario N° 1558/2001 y normas complementarias.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/60 bg-[#90140e] p-5 text-white shadow-[0_18px_40px_rgba(144,20,14,0.22)]">
                  <Mail className="mb-3 h-8 w-8" />
                  <h2 className="mb-2 text-xl font-black">Canal de contacto</h2>
                  <a
                    href="mailto:contacto@lideresdeansenuza.org"
                    className="font-arimo text-lg underline decoration-white/50 underline-offset-4"
                  >
                    contacto@lideresdeansenuza.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {actionCards.map((card, index) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(144,20,14,0.16)] ${
                  index === 1
                    ? "border-[#f0c6a5] bg-[linear-gradient(135deg,#fff7ec,#fff0e6)]"
                    : "border-[#f3d7d7] bg-white/85"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <HeartHandshake className="h-8 w-8 text-[#bc2222]" />
                  <ArrowUpRight className="h-5 w-5 text-[#90140e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h2 className="mb-2 text-2xl font-black text-[#341715]">{card.title}</h2>
                <p className="mb-4 font-arimo text-[#61443e]">{card.description}</p>
                <span className="font-arimo text-sm font-bold uppercase tracking-[0.18em] text-[#90140e]">
                  {card.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-[30px] border border-[#f3d7d7] bg-white/80 p-6 shadow-[0_16px_40px_rgba(144,20,14,0.07)] backdrop-blur-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">Introducción</p>
          <p className="mt-4 text-lg leading-8 text-[#5a3c37] font-arimo">
            Te damos la bienvenida a nuestra página de políticas de privacidad. En Fundación Líderes de Ansenuza valoramos y respetamos tu privacidad. Estas políticas describen cómo recopilamos, usamos y protegemos la información que nos proporcionás. Te invitamos a leer detenidamente para comprender cómo tratamos tus datos personales y cómo podés ejercer tus derechos. Si tenés alguna pregunta, no dudes en ponerte en contacto con nosotros.
          </p>
        </div>

        <div className="grid gap-8">
          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">Sección 1</p>
                <h2 className="text-3xl text-[#2f1614] sm:text-4xl">Inscripción y participación en programas y actividades</h2>
              </div>
              <div className="rounded-full border border-[#f3d7d7] bg-white/70 px-4 py-2 font-arimo text-sm text-[#6a4a44]">
                Última actualización: 07 de marzo de 2024
              </div>
            </div>

            <div className="grid gap-5">
              {programPolicy.map((item, index) => (
                <PolicyCard key={item.title} index={index + 1} title={item.title} body={item.body} />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">Sección 2</p>
                <h2 className="text-3xl text-[#2f1614] sm:text-4xl">Suscripción a newsletter</h2>
              </div>
              <div className="rounded-full border border-[#f3d7d7] bg-white/70 px-4 py-2 font-arimo text-sm text-[#6a4a44]">
                Última actualización: 07 de marzo de 2024
              </div>
            </div>

            <div className="grid gap-5">
              {newsletterPolicy.map((item, index) => (
                <PolicyCard key={item.title} index={index + 1} title={item.title} body={item.body} />
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-[#f0c8a7] bg-[linear-gradient(135deg,#fff6ec,#fff1f4)] p-7 shadow-[0_22px_55px_rgba(144,20,14,0.1)] sm:p-9">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">Enlace oficial obligatorio</p>
                <h2 className="mt-2 text-3xl text-[#2f1614] sm:text-4xl">Autoridad de aplicación y canal de reclamo</h2>
                <p className="mt-4 text-lg leading-8 text-[#5a3c37] font-arimo">
                  Si necesitás realizar un reclamo vinculado a la protección de datos personales, podés hacerlo a través del portal oficial de la Agencia de Acceso a la Información Pública.
                </p>
              </div>

              <a
                href="https://www.argentina.gob.ar/aaip/datospersonales/reclama/30716569396--RL-2024-5099117-APN-DNPDP#AAIP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#90140e] px-6 py-4 text-center font-arimo text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(144,20,14,0.24)] transition-transform duration-300 hover:scale-[1.02]"
              >
                Ir al enlace oficial AAIP
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          <section className="rounded-[32px] border border-[#f3d7d7] bg-white/85 p-7 shadow-[0_18px_50px_rgba(144,20,14,0.08)] sm:p-9">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">¿Necesitás ayuda?</p>
                <h2 className="mt-2 text-3xl text-[#2f1614] sm:text-4xl">Podés escribirnos directo</h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-[#5a3c37] font-arimo">
                  Si querés hacer una consulta sobre tus datos personales o sobre estas políticas, estamos disponibles para acompañarte.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:contacto@lideresdeansenuza.org"
                  className="inline-flex items-center justify-center rounded-full border border-[#90140e] bg-white px-6 py-4 font-arimo text-sm font-bold uppercase tracking-[0.14em] text-[#90140e] transition-colors hover:bg-[#fff2ef]"
                >
                  Escribir a contacto
                </a>
                <Link
                  href="/contactanos"
                  className="inline-flex items-center justify-center rounded-full bg-[#f45e5e] px-6 py-4 font-arimo text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#e85353]"
                >
                  Ir a contacto
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
