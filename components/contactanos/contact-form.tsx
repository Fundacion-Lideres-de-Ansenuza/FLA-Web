"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Heart } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: ""
    })
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto con vos pronto.")
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
          Envíanos un mensaje
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
                Nombre completo *
              </label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
              >
                Correo electrónico *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
              >
                Teléfono
              </label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder="+54 123 456 7890"
              />
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
              >
                Asunto *
              </label>
              <Input
                id="asunto"
                name="asunto"
                type="text"
                required
                value={formData.asunto}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700 mb-2 font-arimo"
            >
              Mensaje *
            </label>
            <Textarea
              id="mensaje"
              name="mensaje"
              required
              value={formData.mensaje}
              onChange={handleChange}
              rows={6}
              className="w-full border-2 border-gray-200 focus:border-chart-5 focus:ring-chart-5/50 transition-colors resize-none"
              placeholder="Contanos más sobre tu consulta, idea o cómo querés colaborar con nosotros..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#bc2222] hover:bg-[#bc2222]/90 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-lg"
          >
            <Send className="mr-3 h-6 w-6" />
            Enviar mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
