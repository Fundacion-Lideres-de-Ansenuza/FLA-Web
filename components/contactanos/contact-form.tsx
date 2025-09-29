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
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="shadow-xl border-0 bg-white">
      <CardHeader className="bg-[#f45e5e] text-white rounded-t-lg">
        <CardTitle className="text-3xl font-contrail-one flex items-center justify-center">
          <Heart className="mr-3 h-8 w-8" />
          Envíanos un mensaje
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2 font-['Arimo:Regular',_sans-serif]"
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
                className="w-full border-2 border-gray-200 focus:border-[#f45e5e] transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2 font-['Arimo:Regular',_sans-serif]"
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
                className="w-full border-2 border-gray-200 focus:border-[#f45e5e] transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2 font-['Arimo:Regular',_sans-serif]"
              >
                Teléfono
              </label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 focus:border-[#f45e5e] transition-colors"
                placeholder="+54 123 456 7890"
              />
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block text-sm font-medium text-gray-700 mb-2 font-['Arimo:Regular',_sans-serif]"
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
                className="w-full border-2 border-gray-200 focus:border-[#f45e5e] transition-colors"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700 mb-2 font-['Arimo:Regular',_sans-serif]"
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
              className="w-full border-2 border-gray-200 focus:border-[#f45e5e] transition-colors resize-none"
              placeholder="Cuéntanos más sobre tu consulta, idea o cómo quieres colaborar con nosotros..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#f45e5e] hover:bg-[#e05555] text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Send className="mr-3 h-6 w-6" />
            Enviar mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
