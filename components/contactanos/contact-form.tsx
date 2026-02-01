"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Heart } from "lucide-react"
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
      mensaje: ""
    })
    alert(t('contact.form.success'))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="shadow-2xl border-0 bg-white rounded-2xl overflow-hidden">
      <CardHeader className="bg-chart-5 text-white p-6">
        <CardTitle className="text-2xl md:text-3xl font-contrail-one flex items-center justify-center text-[#bc2222]">
          <Heart className="mr-3 h-7 w-7" />
          {t('contact.form.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
              >
                {t('contact.form.name')} {t('contact.form.required')}
              </label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
              >
                {t('contact.form.email')} {t('contact.form.required')}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
              >
                {t('contact.form.phone')}
              </label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder={t('contact.form.phonePlaceholder')}
              />
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
              >
                {t('contact.form.subject')} {t('contact.form.required')}
              </label>
              <Input
                id="asunto"
                name="asunto"
                type="text"
                required
                value={formData.asunto}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder={t('contact.form.subjectPlaceholder')}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
            >
              {t('contact.form.message')} {t('contact.form.required')}
            </label>
            <Textarea
              id="mensaje"
              name="mensaje"
              required
              value={formData.mensaje}
              onChange={handleChange}
              rows={6}
              className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors resize-none"
              placeholder={t('contact.form.messagePlaceholder')}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#bc2222] hover:bg-[#bc2222]/90 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-lg"
          >
            <Send className="mr-3 h-6 w-6" />
            {t('contact.form.send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
