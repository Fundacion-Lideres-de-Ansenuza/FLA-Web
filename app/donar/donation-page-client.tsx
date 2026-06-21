"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Globe, CreditCard, Landmark, Mail, Copy } from "lucide-react"
import { useTranslation } from "react-i18next"

const DARK_BROWN = "#90140e"
const DONAR_ONLINE_URL = "https://donaronline.org/fundacion-lideres-de-ansenuza/fundacion-lideres-de-ansenuza"
const PAYPAL_SDK_URL = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
const PAYPAL_DONATE_CONTAINER_ID = "paypal-donate-button-container"

const PAYPAL_HOSTED_BUTTON_ID = process.env.NEXT_PUBLIC_PAYPAL_DONATE_HOSTED_BUTTON_ID?.trim() ?? ""
const PAYPAL_BUSINESS = process.env.NEXT_PUBLIC_PAYPAL_DONATE_BUSINESS?.trim() ?? ""
const PAYPAL_ENV = process.env.NEXT_PUBLIC_PAYPAL_DONATE_ENV?.trim() || "production"

declare global {
  interface Window {
    PayPal?: {
      Donation?: {
        Button: (config: Record<string, unknown>) => { render: (selector: string) => void }
      }
    }
    __paypalDonateSdkPromise?: Promise<void>
  }
}

function loadPayPalDonateSdk() {
  if (typeof window === "undefined") {
    return Promise.resolve()
  }

  if (window.PayPal?.Donation?.Button) {
    return Promise.resolve()
  }

  if (window.__paypalDonateSdkPromise) {
    return window.__paypalDonateSdkPromise
  }

  window.__paypalDonateSdkPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${PAYPAL_SDK_URL}"]`)

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true })
      existing.addEventListener("error", () => reject(new Error("No se pudo cargar PayPal Donate SDK")), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = PAYPAL_SDK_URL
    script.async = true
    script.charset = "UTF-8"
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("No se pudo cargar PayPal Donate SDK"))
    document.body.appendChild(script)
  })

  return window.__paypalDonateSdkPromise
}

function PayPalDonateWidget() {
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error" | "missing-config">("idle")

  useEffect(() => {
    if (!PAYPAL_HOSTED_BUTTON_ID && !PAYPAL_BUSINESS) {
      setStatus("missing-config")
      return
    }

    let cancelled = false

    const renderDonateButton = async () => {
      setStatus("loading")

      try {
        await loadPayPalDonateSdk()

        if (cancelled) {
          return
        }

        const container = document.getElementById(PAYPAL_DONATE_CONTAINER_ID)
        if (!container || !window.PayPal?.Donation?.Button) {
          setStatus("error")
          return
        }

        container.innerHTML = ""

        const config: Record<string, unknown> = {
          env: PAYPAL_ENV,
          image: {
            src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
            title: "PayPal - The safer, easier way to pay online!",
            alt: "Donate with PayPal button",
          },
        }

        if (PAYPAL_HOSTED_BUTTON_ID) {
          config.hosted_button_id = PAYPAL_HOSTED_BUTTON_ID
        } else {
          config.business = PAYPAL_BUSINESS
        }

        window.PayPal.Donation.Button(config).render(`#${PAYPAL_DONATE_CONTAINER_ID}`)
        setStatus("ready")
      } catch {
        if (!cancelled) {
          setStatus("error")
        }
      }
    }

    renderDonateButton()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div id={PAYPAL_DONATE_CONTAINER_ID} className="min-h-12" />

      {status === "loading" && (
        <p className="text-sm font-arimo text-gray-500">Cargando boton de PayPal...</p>
      )}

      {status === "missing-config" && (
        <p className="max-w-lg text-center text-sm font-arimo text-[#90140e]">
          Configura NEXT_PUBLIC_PAYPAL_DONATE_HOSTED_BUTTON_ID (o NEXT_PUBLIC_PAYPAL_DONATE_BUSINESS) para habilitar el boton.
        </p>
      )}

      {status === "error" && (
        <p className="max-w-lg text-center text-sm font-arimo text-[#90140e]">
          No pudimos cargar PayPal en este momento. Intenta nuevamente en unos segundos.
        </p>
      )}
    </div>
  )
}

function TimelineSteps({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-transparent via-[#e8caca] to-transparent md:block" />
      <div className="space-y-4 md:space-y-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative transition-transform duration-300"
            style={{ marginLeft: `${Math.min(i * 1.5, 5.5)}rem` }}
          >
            <div className="flex items-start gap-4 md:gap-5">
              <div
                className="relative z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-[18px] border-4 border-white text-sm font-black text-white shadow-lg md:flex"
                style={{ backgroundColor: accent }}
              >
                {i + 1}
              </div>
              <div className="relative w-full rounded-[28px] border border-[#f1dcdc] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(144,20,14,0.06)] md:px-6">
                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-[14px] text-sm font-black text-white md:hidden"
                  style={{ backgroundColor: accent }}
                >
                  {i + 1}
                </div>
                <p className="font-arimo text-sm leading-relaxed text-gray-700 md:text-base">{step}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DonationChip({ href }: { href: string }) {
  return (
    <Button
      asChild
      className="rounded-full px-8 py-6 text-sm font-black tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(144,20,14,0.16)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(144,20,14,0.2)]"
      style={{ backgroundColor: DARK_BROWN }}
    >
      <Link href={href}>DONAR</Link>
    </Button>
  )
}

function WelcomeNote() {
  return <p className="text-center font-arimo text-base text-gray-600 md:text-lg">Recibirás un mail de bienvenida con el detalle.</p>
}

export default function DonationPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("online")
  const donationPageSchema = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: "Donar a Fundación Líderes de Ansenuza",
    description:
      "Página de donaciones de Fundación Líderes de Ansenuza para colaborar con programas educativos gratuitos para jóvenes en Argentina.",
    recipient: {
      "@type": "NGO",
      name: "Fundación Líderes de Ansenuza",
      url: "https://www.lideresdeansenuza.org",
    },
    target: [
      {
        "@type": "EntryPoint",
        urlTemplate: "https://www.lideresdeansenuza.org/donar",
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      {
        "@type": "EntryPoint",
        urlTemplate: DONAR_ONLINE_URL,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Cómo puedo donar online a Fundación Líderes de Ansenuza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podés donar desde la pagina de donaciones y completar el proceso en Donar Online para hacer un aporte rapido y seguro.",
        },
      },
      {
        "@type": "Question",
        name: "Puedo pedir un recibo de donacion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si. Podés escribirnos desde la pagina de contacto adjuntando el comprobante para emitir tu recibo oficial de donacion.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué métodos de donación ofrece la fundación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La fundación ofrece Donar Online, PayPal para donaciones internacionales y transferencia bancaria directa.",
        },
      },
    ],
  }

  const onlineSteps = [
    "Seleccioná el botón donar y elegí el monto.",
    "Definí la frecuencia de donación y completa con tus datos personales.",
    "Confirmá el medio de pago y presioná 'Donar a Fundación Líderes de Ansenuza'.",
  ]

  const paypalSteps = [
    "Seleccioná el botón donar y elegí el monto.",
    "Elegí PayPal como medio de pago y completá tus datos personales.",
    "Confirmá la donación única y presioná 'Donar a Fundación Líderes de Ansenuza'.",
  ]

  const bankData = {
    cbu: "0000000000000000000000",
    alias: "LIDERES.ARG.ANSENUZA",
    cuit: "30-71656939-6",
    nombre: "Fundación Líderes de Ansenuza",
  }

  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const tabs = [
    { id: "online", label: t("donate.tabs.online"), icon: CreditCard },
    { id: "paypal", label: t("donate.tabs.paypal"), icon: Globe },
    { id: "transfer", label: t("donate.tabs.transfer"), icon: Landmark },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donationPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff7f6_30%,#ffffff_100%)] pb-20 pt-[108px] sm:pt-[120px]">
      <div className="container mx-auto max-w-6xl px-4 pt-6 md:pt-8">
        <div className="mb-10 flex flex-col items-center gap-5 text-center md:mb-14">
          <h1 className="text-5xl leading-tight tracking-tight text-gray-900 lg:text-7xl font-contrail-one">{t("donate.title")}</h1>
          <p className="mx-auto max-w-2xl font-arimo text-lg leading-relaxed text-gray-700 md:text-xl">{t("donate.subtitle")}</p>
          <div className="h-1.5 w-32 rounded-full bg-[#f45e5e]" />
        </div>

        <div className="rounded-[40px] border border-[#f1dddd] bg-white/85 p-5 shadow-[0_24px_70px_rgba(144,20,14,0.08)] backdrop-blur-sm sm:rounded-[56px] md:p-10">
          <div className="mb-8 flex justify-center md:mb-10">
            <div className="flex flex-wrap justify-center gap-3 rounded-full border border-[#eed9d9] bg-[#fff8f7] p-2 shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center rounded-full px-6 py-3 font-arimo text-sm font-bold transition-all duration-300 sm:text-base ${
                    activeTab === tab.id ? "scale-[1.02] text-white shadow-md" : "text-[#7b5a57] hover:bg-white"
                  }`}
                  style={activeTab === tab.id ? { backgroundColor: DARK_BROWN } : {}}
                >
                  <tab.icon className="mr-2 h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[420px]">
            {activeTab === "online" && (
              <div className="mx-auto max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 md:space-y-10">
                <div className="space-y-4 text-center">
                  <h2 className="font-contrail-one text-4xl text-gray-900 uppercase md:text-5xl">{t("donate.online.title")}</h2>
                  <p className="mx-auto max-w-2xl font-arimo text-lg italic text-gray-600">&quot;{t("donate.online.description")}&quot;</p>
                </div>

                <TimelineSteps steps={onlineSteps} accent="#bc2222" />
                <WelcomeNote />

                <div className="flex justify-center">
                  <DonationChip href={DONAR_ONLINE_URL} />
                </div>
              </div>
            )}

            {activeTab === "paypal" && (
              <div className="mx-auto max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 md:space-y-10">
                <div className="space-y-4 text-center">
                  <h2 className="font-contrail-one text-4xl text-gray-900 uppercase md:text-5xl">{t("donate.paypal.title")}</h2>
                  <p className="mx-auto max-w-2xl font-arimo text-lg italic text-gray-600">&quot;{t("donate.paypal.description")}&quot;</p>
                </div>

                <TimelineSteps steps={paypalSteps} accent="#bc2222" />
                <WelcomeNote />

                <div className="flex justify-center">
                  <PayPalDonateWidget />
                </div>
              </div>
            )}

            {activeTab === "transfer" && (
              <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                <div className="space-y-4 text-center">
                  <h2 className="font-contrail-one text-4xl text-gray-900 uppercase md:text-5xl">{t("donate.transfer.title")}</h2>
                  <p className="mx-auto max-w-2xl font-arimo text-lg text-gray-600">{t("donate.transfer.description")}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative space-y-8 rounded-[34px] border border-[#f1dcdc] bg-white p-8 shadow-[0_18px_50px_rgba(144,20,14,0.06)]">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-xs font-black uppercase tracking-widest text-[#90140e]">{t("donate.transfer.cbu")}</p>
                        <div className="flex items-center justify-between gap-2">
                          <p className="select-all break-all font-arimo text-2xl font-medium leading-none text-gray-800">{bankData.cbu}</p>
                          <button onClick={() => copyToClipboard(bankData.cbu, "cbu")} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#90140e]">
                            {copied === "cbu" ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1 border-t border-gray-100 pt-4">
                        <p className="text-xs font-black uppercase tracking-widest text-[#90140e]">{t("donate.transfer.alias")}</p>
                        <div className="flex items-center justify-between gap-2">
                          <p className="select-all font-arimo text-2xl font-medium leading-none text-gray-800">{bankData.alias}</p>
                          <button onClick={() => copyToClipboard(bankData.alias, "alias")} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#90140e]">
                            {copied === "alias" ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-8 rounded-[34px] p-8 text-white shadow-[0_18px_50px_rgba(144,20,14,0.14)]" style={{ backgroundColor: DARK_BROWN }}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{t("donate.transfer.name")}</p>
                          <p className="font-arimo text-lg font-bold">{bankData.nombre}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{t("donate.transfer.cuit")}</p>
                          <p className="font-arimo text-lg font-bold">{bankData.cuit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-6 rounded-[32px] border border-[#edd6d2] bg-[#fff8f7] p-8 text-center md:flex-row md:items-start md:text-left">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg" style={{ backgroundColor: DARK_BROWN }}>
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-contrail-one text-2xl text-gray-900">{t("donate.transfer.receiptTitle")}</h3>
                    <p className="font-arimo leading-relaxed text-gray-700">
                      {t("donate.transfer.receiptText").split(t("donate.transfer.contactPage"))[0]}
                      <Link href="/contactanos" className="font-bold hover:underline" style={{ color: DARK_BROWN }}>
                        {t("donate.transfer.contactPage")}
                      </Link>
                      {t("donate.transfer.receiptText").split(t("donate.transfer.contactPage"))[1]}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
