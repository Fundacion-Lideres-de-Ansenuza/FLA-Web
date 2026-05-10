"use client"

import Link from "next/link"
import { ArrowUpRight, HeartHandshake, Mail, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"

type PolicyItem = {
  title: string
  body: string[]
}

type ActionCardContent = {
  title: string
  description: string
  label: string
}

const ACTION_CARD_LINKS = [
  "https://docs.google.com/document/d/1sCvQnEDodp5GYG97c0UYq9PABudIXC4uQCGcnyqicps/",
  "https://docs.google.com/document/d/1dAlF0QjVPqO-Vowtuzx8CK7CjDoRTkY080SJtvitmuc/",
  "https://www.argentina.gob.ar/aaip/datospersonales/reclama/30716569396--RL-2024-5099117-APN-DNPDP#AAIP",
] as const

function PolicyCard({
  index,
  title,
  body,
  defaultOpen = false,
}: {
  index: number
  title: string
  body: string[]
  defaultOpen?: boolean
}) {
  return (
    <details
      open={defaultOpen}
      className="group relative overflow-hidden rounded-[28px] border border-[#f6caca] bg-white/90 shadow-[0_18px_50px_rgba(144,20,14,0.08)] backdrop-blur-sm transition-colors duration-300 open:border-[#efb3b3]"
    >
      <div className="pointer-events-none absolute right-5 top-5 h-14 w-14 rounded-full bg-[radial-gradient(circle,#ffd1a8_0%,#ffd1a8_35%,transparent_36%)] opacity-80" />
      <summary className="relative flex cursor-pointer list-none items-start gap-4 p-6 pr-20 sm:p-8 sm:pr-24">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#90140e] text-lg font-black text-white shadow-[0_10px_24px_rgba(144,20,14,0.24)]">
          {index}
        </span>
        <div className="flex-1">
          <h3 className="text-xl font-extrabold leading-tight text-[#3d1713] sm:text-2xl">{title}</h3>
        </div>
        <span className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#efc7c7] bg-white text-xl font-black text-[#90140e] shadow-[0_8px_18px_rgba(144,20,14,0.08)] transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        <div className="mb-5 h-px w-full bg-[linear-gradient(90deg,rgba(144,20,14,0.16),rgba(244,94,94,0.2),rgba(255,255,255,0))]" />
        <div className="space-y-4 font-arimo text-base leading-8 text-[#5a3c37]">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </details>
  )
}

export default function PoliticasDePrivacidadPage() {
  const { t } = useTranslation()
  const programPolicy = t("privacyPolicy.program.sections", { returnObjects: true }) as PolicyItem[]
  const newsletterPolicy = t("privacyPolicy.newsletter.sections", { returnObjects: true }) as PolicyItem[]
  const actionCardContent = t("privacyPolicy.actionCards", { returnObjects: true }) as ActionCardContent[]
  const actionCards = actionCardContent.map((card, index) => ({
    ...card,
    href: ACTION_CARD_LINKS[index],
  }))

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(244,94,94,0.22)_0%,rgba(244,94,94,0)_30%),radial-gradient(circle_at_top_right,rgba(255,192,120,0.28)_0%,rgba(255,192,120,0)_26%),linear-gradient(180deg,#fffaf7_0%,#fff3ef_30%,#fff8f0_65%,#ffffff_100%)] pt-[108px] sm:pt-[120px]">
      <section className="relative">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] border border-[#f1d3c0] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,244,236,0.96))] px-6 py-8 shadow-[0_28px_80px_rgba(144,20,14,0.12)] sm:px-10 sm:py-12">
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#f45e5e]/20 blur-2xl" />
            <div className="absolute right-0 top-0 h-36 w-36 translate-x-8 -translate-y-8 rounded-full bg-[#ffd8a8]/70 blur-2xl" />
            <div className="absolute bottom-0 right-20 h-24 w-24 rounded-full border-8 border-dashed border-[#f7b36c]/40" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl leading-none text-[#2f1614] sm:text-5xl lg:text-6xl">
                  {t("privacyPolicy.hero.title")}
                </h1>
                <p className="max-w-3xl font-arimo text-lg leading-8 text-[#5b4038] sm:text-xl">
                  {t("privacyPolicy.hero.description")}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[28px] border border-white/60 bg-white/75 p-5 shadow-[0_12px_35px_rgba(144,20,14,0.08)] backdrop-blur-sm">
                  <ShieldCheck className="mb-3 h-8 w-8 text-[#bc2222]" />
                  <h2 className="mb-2 text-xl font-black text-[#3d1713]">{t("privacyPolicy.hero.legalBaseTitle")}</h2>
                  <p className="font-arimo text-[#5a3c37]">{t("privacyPolicy.hero.legalBaseDescription")}</p>
                </div>
                <div className="rounded-[28px] border border-white/60 bg-[#90140e] p-5 text-white shadow-[0_18px_40px_rgba(144,20,14,0.22)]">
                  <Mail className="mb-3 h-8 w-8" />
                  <h2 className="mb-2 text-xl font-black">{t("privacyPolicy.hero.contactChannelTitle")}</h2>
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
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">{t("privacyPolicy.intro.eyebrow")}</p>
          <p className="mt-4 font-arimo text-lg leading-8 text-[#5a3c37]">
            {t("privacyPolicy.intro.body")}
          </p>
        </div>

        <div className="grid gap-8">
          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">{t("privacyPolicy.program.eyebrow")}</p>
                <h2 className="text-3xl text-[#2f1614] sm:text-4xl">{t("privacyPolicy.program.title")}</h2>
              </div>
            </div>

            <div className="grid gap-5">
              {programPolicy.map((item, index) => (
                <PolicyCard key={item.title} index={index + 1} title={item.title} body={item.body} defaultOpen={index === 0} />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">{t("privacyPolicy.newsletter.eyebrow")}</p>
                <h2 className="text-3xl text-[#2f1614] sm:text-4xl">{t("privacyPolicy.newsletter.title")}</h2>
              </div>
            </div>

            <div className="grid gap-5">
              {newsletterPolicy.map((item, index) => (
                <PolicyCard key={item.title} index={index + 1} title={item.title} body={item.body} defaultOpen={index === 0} />
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-[#f0c8a7] bg-[linear-gradient(135deg,#fff6ec,#fff1f4)] p-7 shadow-[0_22px_55px_rgba(144,20,14,0.1)] sm:p-9">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">{t("privacyPolicy.officialLink.eyebrow")}</p>
                <h2 className="mt-2 text-3xl text-[#2f1614] sm:text-4xl">{t("privacyPolicy.officialLink.title")}</h2>
                <p className="mt-4 font-arimo text-lg leading-8 text-[#5a3c37]">
                  {t("privacyPolicy.officialLink.description")}
                </p>
              </div>

              <a
                href="https://www.argentina.gob.ar/aaip/datospersonales/reclama/30716569396--RL-2024-5099117-APN-DNPDP#AAIP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#90140e] px-6 py-4 text-center font-arimo text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(144,20,14,0.24)] transition-transform duration-300 hover:scale-[1.02]"
              >
                {t("privacyPolicy.officialLink.button")}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          <section className="rounded-[32px] border border-[#f3d7d7] bg-white/85 p-7 shadow-[0_18px_50px_rgba(144,20,14,0.08)] sm:p-9">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#bc2222]">{t("privacyPolicy.help.eyebrow")}</p>
                <h2 className="mt-2 text-3xl text-[#2f1614] sm:text-4xl">{t("privacyPolicy.help.title")}</h2>
                <p className="mt-3 max-w-2xl font-arimo text-lg leading-8 text-[#5a3c37]">
                  {t("privacyPolicy.help.description")}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:contacto@lideresdeansenuza.org"
                  className="inline-flex items-center justify-center rounded-full border border-[#90140e] bg-white px-6 py-4 font-arimo text-sm font-bold uppercase tracking-[0.14em] text-[#90140e] transition-colors hover:bg-[#fff2ef]"
                >
                  {t("privacyPolicy.help.emailButton")}
                </a>
                <Link
                  href="/contactanos"
                  className="inline-flex items-center justify-center rounded-full bg-[#f45e5e] px-6 py-4 font-arimo text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#e85353]"
                >
                  {t("privacyPolicy.help.contactButton")}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
