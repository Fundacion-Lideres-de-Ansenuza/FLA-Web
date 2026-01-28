"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Globe, CreditCard, Landmark, ArrowRight, Mail, Copy } from "lucide-react"

export default function DonationPage() {
    const [activeTab, setActiveTab] = useState("online")

    const donarOnlineSteps = [
        "Ingresá a líderesdeansenuza.org",
        "Seleccioná la opción 'Donar' en el menú",
        "Hacé clic en el logo de Donar Online",
        "Elegí el monto (puedes usar 'Otro monto' en ARS)",
        "Definí la frecuencia (mensual o única vez)",
        "Completá tus datos personales",
        "Ingresá los datos de tu tarjeta (procesado vía Donar Online + Mercado Pago)",
        "Confirmá presionando 'Donar a Fundación Líderes de Ansenuza'",
        "Recibirás un mail de bienvenida con el detalle"
    ]

    const paypalSteps = [
        "Ingresá a líderesdeansenuza.org",
        "Seleccioná la opción 'Donar' en el menú",
        "Hacé clic en el logo de PayPal",
        "Elegí el monto (puedes usar 'Other')",
        "Seleccioná la frecuencia (marcar casilla para mensual)",
        "Elegí pagar con PayPal o Tarjeta",
        "Completá los datos de facturación y contacto",
        "Confirmá presionando 'Aceptar y donar ahora'"
    ]

    const bankData = {
        cbu: "0000000000000000000000",
        alias: "LIDERES.ARG.ANSENUZA",
        cuit: "30-71656939-6",
        nombre: "Fundación Líderes de Ansenuza"
    }

    const [copied, setCopied] = useState<string | null>(null)

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopied(id)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <main className="min-h-screen bg-white pt-24 pb-20 overflow-x-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section Matches Site Identity */}
                <div className="flex flex-col items-center gap-6 text-center mb-16">
                    <div className="inline-flex items-center gap-3 text-[#bc2222] font-semibold uppercase tracking-[0.08em] text-sm sm:text-base font-arimo">
                        <Image src="/images/LogoFLA.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
                        <span>Fundación Líderes de Ansenuza</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl text-gray-900 leading-tight tracking-tight font-contrail-one">
                        ¿Cómo <span className="text-[#bc2222]">Donar?</span>
                    </h1>
                    <p className="font-arimo text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Tu contribución permite que miles de jóvenes accedan a programas educativos gratuitos. Elegí el método que prefieras.
                    </p>
                    <div className="w-32 h-1.5 bg-[#f45e5e] rounded-full" />
                </div>

                {/* Donation Hub Container */}
                <div className="bg-gray-50/50 rounded-[40px] sm:rounded-[60px] p-6 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">

                    {/* Custom Interactive Tabs */}
                    <div className="flex justify-center mb-12 sm:mb-16">
                        <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm flex flex-wrap justify-center gap-2">
                            {[
                                { id: "online", label: "Donar Online", icon: CreditCard, color: "#f45e5e" },
                                { id: "paypal", label: "PayPal", icon: Globe, color: "#bc2222" },
                                { id: "transfer", label: "Transferencia", icon: Landmark, color: "#90140e" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                      flex items-center px-6 sm:px-8 py-3 rounded-full font-arimo text-sm sm:text-base font-bold transition-all duration-300
                      ${activeTab === tab.id
                                            ? "text-white shadow-md lg:scale-105"
                                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}
                    `}
                                    style={activeTab === tab.id ? { backgroundColor: tab.color } : {}}
                                >
                                    <tab.icon className="w-4 h-4 mr-2" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[400px]">
                        {/* Donar Online */}
                        {activeTab === "online" && (
                            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-12">
                                    <div className="text-center space-y-4">
                                        <h2 className="font-contrail-one text-4xl md:text-5xl text-gray-900 uppercase">Plataforma Donar Online</h2>
                                        <p className="font-arimo text-gray-600 text-lg max-w-2xl mx-auto italic">
                                            &quot;Para donaciones nacionales rápidas y seguras en pesos argentinos.&quot;
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {donarOnlineSteps.map((step, i) => (
                                            <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-sm font-bold text-[#f45e5e] group-hover:bg-[#f45e5e] group-hover:text-white transition-colors">
                                                    {i + 1}
                                                </div>
                                                <span className="font-arimo text-gray-700 text-sm md:text-base leading-snug">{step}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center">
                                        <Button asChild className="px-12 py-8 rounded-full bg-[#f45e5e] hover:bg-[#f67a7a] text-xl font-contrail shadow-lg hover:shadow-red-100 transition-all group">
                                            <Link href="https://donaronline.org">
                                                Ir al Formulario <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PayPal */}
                        {activeTab === "paypal" && (
                            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-12">
                                    <div className="text-center space-y-4">
                                        <h2 className="font-contrail-one text-4xl md:text-5xl text-gray-900 uppercase">Donaciones Internacionales</h2>
                                        <p className="font-arimo text-gray-600 text-lg max-w-2xl mx-auto italic">
                                            &quot;Si te encontrás fuera de Argentina o preferís usar tarjetas internacionales.&quot;
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {paypalSteps.map((step, i) => (
                                            <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-sm font-bold text-[#bc2222] group-hover:bg-[#bc2222] group-hover:text-white transition-colors">
                                                    {i + 1}
                                                </div>
                                                <span className="font-arimo text-gray-700 text-sm md:text-base leading-snug">{step}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center">
                                        <Button asChild className="px-12 py-8 rounded-full bg-[#bc2222] hover:bg-[#d12828] text-xl font-contrail shadow-lg hover:shadow-red-200 transition-all group">
                                            <Link href="https://paypal.me">
                                                Donar por PayPal <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Transferencia */}
                        {activeTab === "transfer" && (
                            <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="text-center space-y-6">
                                    <h2 className="font-contrail-one text-4xl md:text-5xl text-gray-900 uppercase">Transferencia Directa</h2>
                                    <p className="font-arimo text-gray-600 text-lg max-w-2xl mx-auto">
                                        Usa estos datos para realizar tu aporte directamente desde tu homebanking o billetera virtual.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl space-y-8 relative group">
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <p className="text-xs font-black text-[#90140e] uppercase tracking-widest">CBU</p>
                                                <div className="flex items-center justify-between gap-2">
                                                    <p className="font-arimo text-2xl text-gray-800 break-all select-all font-medium leading-none">{bankData.cbu}</p>
                                                    <button onClick={() => copyToClipboard(bankData.cbu, 'cbu')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-[#90140e]">
                                                        {copied === 'cbu' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="space-y-1 pt-4 border-t border-gray-50">
                                                <p className="text-xs font-black text-[#90140e] uppercase tracking-widest">Alias</p>
                                                <div className="flex items-center justify-between gap-2">
                                                    <p className="font-arimo text-2xl text-gray-800 select-all font-medium leading-none">{bankData.alias}</p>
                                                    <button onClick={() => copyToClipboard(bankData.alias, 'alias')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-[#90140e]">
                                                        {copied === 'alias' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#90140e] p-10 rounded-[40px] text-white flex flex-col justify-center gap-8 shadow-xl shadow-red-100">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-6 h-6" />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Nombre</p>
                                                    <p className="font-arimo text-lg font-bold">{bankData.nombre}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-6 h-6" />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">CUIT</p>
                                                    <p className="font-arimo text-lg font-bold">{bankData.cuit}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50/50 border border-red-100 p-8 rounded-[32px] flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#90140e] flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Mail className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="space-y-3 text-center md:text-left">
                                        <h3 className="font-contrail-one text-2xl text-gray-900">¿Necesitás un recibo?</h3>
                                        <p className="font-arimo text-gray-700 leading-relaxed">
                                            Escribinos a través de nuestra <Link href="/contactanos" className="text-[#bc2222] font-bold hover:underline">página de contacto</Link> adjuntando el comprobante para emitir tu recibo de donación oficial.
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
