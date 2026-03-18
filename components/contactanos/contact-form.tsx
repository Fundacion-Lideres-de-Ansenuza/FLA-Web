"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, HeartHandshake, Mail, PhoneCall } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    })
    alert(t("contact.form.success"))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fieldClassName =
    "h-14 rounded-2xl border border-[#bc2222]/12 bg-white/85 px-4 font-arimo text-base text-black shadow-[0_10px_30px_rgba(188,34,34,0.08)] transition-all duration-300 placeholder:text-black/35 focus-visible:border-[#bc2222]/45 focus-visible:ring-[3px] focus-visible:ring-[#f45e5e]/20"

  const labelClassName = "mb-2 block font-arimo text-sm font-semibold tracking-[0.01em] text-black/75"

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#bc2222]/15 bg-[linear-gradient(145deg,#fff7f5_0%,#fffdfc_48%,#ffe8e1_100%)] p-5 shadow-[0_30px_90px_rgba(188,34,34,0.14)] md:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-[#f45e5e]/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#bc2222]/10 blur-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 backdrop-blur-sm">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-[#bc2222]/10 bg-[linear-gradient(180deg,rgba(255,243,239,0.95)_0%,rgba(255,255,255,0.92)_100%)] p-7 lg:border-b-0 lg:border-r lg:p-10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#bc2222_0%,#f45e5e_100%)] text-white shadow-[0_18px_30px_rgba(188,34,34,0.22)]">
              <HeartHandshake className="h-7 w-7" />
            </div>

            <div className="mt-6 space-y-4">
              <span className="inline-flex rounded-full border border-[#bc2222]/12 bg-white/80 px-4 py-2 font-arimo text-xs font-bold uppercase tracking-[0.22em] text-[#bc2222]">
                FLA
              </span>
              <h2 className="font-contrail-one text-4xl leading-none text-[#90140e] md:text-5xl">
                {t("contact.form.title")}
              </h2>
              <p className="max-w-md font-arimo text-base leading-relaxed text-black/70 md:text-lg">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.4rem] border border-[#bc2222]/10 bg-white/90 p-4 shadow-[0_14px_35px_rgba(188,34,34,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f45e5e]/12 text-[#bc2222]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-arimo text-xs font-bold uppercase tracking-[0.18em] text-[#bc2222]">
                      {t("contact.info.email")}
                    </p>
                    <p className="font-arimo text-sm text-black/65">
                      {t("contact.info.emailResponse")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-[#bc2222]/10 bg-[#90140e] p-4 text-white shadow-[0_18px_40px_rgba(144,20,14,0.18)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-arimo text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                      {t("contact.info.officeHours")}
                    </p>
                    <p className="font-arimo text-sm text-white/80">
                      {t("contact.info.phoneHours")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className={labelClassName}>
                    {t("contact.form.name")} {t("contact.form.required")}
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className={fieldClassName}
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClassName}>
                    {t("contact.form.email")} {t("contact.form.required")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldClassName}
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className={labelClassName}>
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={fieldClassName}
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="asunto" className={labelClassName}>
                    {t("contact.form.subject")} {t("contact.form.required")}
                  </label>
                  <Input
                    id="asunto"
                    name="asunto"
                    type="text"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    className={fieldClassName}
                    placeholder={t("contact.form.subjectPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className={labelClassName}>
                  {t("contact.form.message")} {t("contact.form.required")}
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={7}
                  className="min-h-[180px] rounded-[1.5rem] border border-[#bc2222]/12 bg-white/85 px-4 py-4 font-arimo text-base text-black shadow-[0_12px_30px_rgba(188,34,34,0.08)] transition-all duration-300 placeholder:text-black/35 focus-visible:border-[#bc2222]/45 focus-visible:ring-[3px] focus-visible:ring-[#f45e5e]/20 resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  className="h-14 rounded-2xl bg-[linear-gradient(135deg,#bc2222_0%,#90140e_100%)] px-8 text-base font-bold text-white shadow-[0_18px_30px_rgba(188,34,34,0.24)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_24px_38px_rgba(188,34,34,0.28)]"
                >
                  <Send className="mr-3 h-5 w-5" />
                  {t("contact.form.send")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
