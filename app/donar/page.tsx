"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Globe, CreditCard, Landmark, ArrowRight, Mail, Copy } from "lucide-react"
import { useTranslation } from "react-i18next"

const DARK_BROWN = "#90140e"

function TimelineSteps({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#e8caca] to-transparent md:block" />
      <div className="space-y-5">
        {steps.map((step, i) => {
          const isRight = i % 2 === 1
          return (
            <div key={i} className={`grid items-center gap-4 md:grid-cols-2 ${isRight ? "" : ""}`}>
              <div className={`${isRight ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-white text-sm font-black text-white shadow-lg" style={{ backgroundColor: accent }}>
                    {i + 1}
                  </div>
                  <div className="w-full rounded-[26px] border border-[#f1dcdc] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(144,20,14,0.06)]">
                    <div className="mb-3 flex md:hidden h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white" style={{ backgroundColor: accent }}>
                      {i + 1}
                    </div>
                    <p className="font-arimo text-gray-700 text-sm md:text-base leading-relaxed">{step}</p>
                  </div>
                </div>
              </div>
              <div className={`${isRight ? "md:order-1" : ""} hidden md:block`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function DonationPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("online")

  const onlineSteps = t("donate.online.steps", { returnObjects: true }) as string[]
  const paypalSteps = t("donate.paypal.steps", { returnObjects: true }) as string[]

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
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#fff7f6_30%,#ffffff_100%)] pt-[108px] sm:pt-[120px] pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl pt-6 md:pt-8">
        <div className="flex flex-col items-center gap-5 text-center mb-10 md:mb-14">
          <h1 className="text-5xl lg:text-7xl text-gray-900 leading-tight tracking-tight font-contrail-one">
            {t("donate.title").split(" ").map((word, i) =>
              word === "Donar?" || word === "Donate?" ? (
                <span key={i} className="text-[#bc2222]">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="font-arimo text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {t("donate.subtitle")}
          </p>
          <div className="w-32 h-1.5 bg-[#f45e5e] rounded-full" />
        </div>

        <div className="rounded-[40px] sm:rounded-[56px] border border-[#f1dddd] bg-white/85 p-5 md:p-10 shadow-[0_24px_70px_rgba(144,20,14,0.08)] backdrop-blur-sm">
          <div className="mb-8 md:mb-10 flex justify-center">
            <div className="flex flex-wrap justify-center gap-3 rounded-full border border-[#eed9d9] bg-[#fff8f7] p-2 shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center rounded-full px-6 py-3 font-arimo text-sm sm:text-base font-bold transition-all duration-300 ${
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
              <div className="mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 md:space-y-10">
                <div className="text-center space-y-4">
                  <h2 className="font-contrail-one text-4xl md:text-5xl text-gray-900 uppercase">{t("donate.online.title")}</h2>
                  <p className="font-arimo text-gray-600 text-lg max-w-2xl mx-auto italic">&quot;{t("donate.online.description")}&quot;</p>
                </div>

                <TimelineSteps steps={onlineSteps} accent="#bc2222" />

                <div className="flex justify-center">
                  <Button asChild className="rounded-full px-12 py-8 text-xl font-contrail text-white shadow-lg transition-all group hover:shadow-[0_18px_40px_rgba(144,20,14,0.18)]" style={{ backgroundColor: DARK_BROWN }}>
                    <Link href="https://donaronline.org">
                      {t("donate.online.button")} <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "paypal" && (
              <div className="mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 md:space-y-10">
                <div className="text-center space-y-4">
                  <h2 className="font-contrail-one text-4xl md:text-5xl text-gray-900 uppercase">{t("donate.paypal.title")}</h2>
                  <p className="font-arimo text-gray-600 text-lg max-w-2xl mx-auto italic">&quot;{t("donate.paypal.description")}&quot;</p>
                </div>

                <TimelineSteps steps={paypalSteps} accent="#bc2222" />

                <div className="flex justify-center">
                  <Button asChild className="rounded-full px-12 py-8 text-xl font-contrail text-white shadow-lg transition-all group hover:shadow-[0_18px_40px_rgba(144,20,14,0.18)]" style={{ backgroundColor: DARK_BROWN }}>
                    <Link href="https://paypal.me">
                      {t("donate.paypal.button")} <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "transfer" && (
              <div className="mx-auto max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center space-y-4">
                  <h2 className="font-contrail-one text-4xl md:text-5xl text-gray-900 uppercase">{t("donate.transfer.title")}</h2>
                  <p className="font-arimo text-gray-600 text-lg max-w-2xl mx-auto">{t("donate.transfer.description")}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-[34px] border border-[#f1dcdc] shadow-[0_18px_50px_rgba(144,20,14,0.06)] space-y-8 relative">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-xs font-black text-[#90140e] uppercase tracking-widest">{t("donate.transfer.cbu")}</p>
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-arimo text-2xl text-gray-800 break-all select-all font-medium leading-none">{bankData.cbu}</p>
                          <button onClick={() => copyToClipboard(bankData.cbu, "cbu")} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-[#90140e]">
                            {copied === "cbu" ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1 pt-4 border-t border-gray-100">
                        <p className="text-xs font-black text-[#90140e] uppercase tracking-widest">{t("donate.transfer.alias")}</p>
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-arimo text-2xl text-gray-800 select-all font-medium leading-none">{bankData.alias}</p>
                          <button onClick={() => copyToClipboard(bankData.alias, "alias")} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-[#90140e]">
                            {copied === "alias" ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-[34px] text-white flex flex-col justify-center gap-8 shadow-[0_18px_50px_rgba(144,20,14,0.14)]" style={{ backgroundColor: DARK_BROWN }}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{t("donate.transfer.name")}</p>
                          <p className="font-arimo text-lg font-bold">{bankData.nombre}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{t("donate.transfer.cuit")}</p>
                          <p className="font-arimo text-lg font-bold">{bankData.cuit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-[#edd6d2] bg-[#fff8f7] p-8 rounded-[32px] flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: DARK_BROWN }}>
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-3 text-center md:text-left">
                    <h3 className="font-contrail-one text-2xl text-gray-900">{t("donate.transfer.receiptTitle")}</h3>
                    <p className="font-arimo text-gray-700 leading-relaxed">
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
  )
}
