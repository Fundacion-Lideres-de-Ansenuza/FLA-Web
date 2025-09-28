import { Mail, Phone, MapPin, Clock, Users } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-4xl font-contrail-one text-[#000000] mb-6">Información de contacto</h3>
        <p className="font-['Arimo:Regular',_sans-serif] text-[#000000] text-[20px] leading-relaxed">
          Estamos aquí para escucharte y trabajar juntos. Puedes contactarnos de varias formas.
          No dudes en escribirnos, ¡tu mensaje es importante para nosotros!
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-6 p-6 bg-red-50 rounded-2xl border border-red-200">
          <div className="w-14 h-14 bg-[#f45e5e] rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-[#000000] text-2xl mb-2">Correo electrónico</h4>
            <p className="font-['Arimo:Regular',_sans-serif] text-[#000000] text-lg">info@fundacionlideresdeansenuza.org</p>
            <p className="font-['Arimo:Regular',_sans-serif] text-gray-600 text-base">Respondemos en 24-48 horas</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 p-6 bg-blue-50 rounded-2xl border border-blue-200">
          <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-[#000000] text-2xl mb-2">Teléfono</h4>
            <p className="font-['Arimo:Regular',_sans-serif] text-[#000000] text-lg">+54 358 123 4567</p>
            <p className="font-['Arimo:Regular',_sans-serif] text-gray-600 text-base">Lunes a Viernes, 9:00 - 18:00</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 p-6 bg-green-50 rounded-2xl border border-green-200">
          <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-[#000000] text-2xl mb-2">Dirección</h4>
            <p className="font-['Arimo:Regular',_sans-serif] text-[#000000] text-lg">Independencia 350</p>
            <p className="font-['Arimo:Regular',_sans-serif] text-[#000000] text-lg">Miramar de Ansenuza, Córdoba</p>
            <p className="font-['Arimo:Regular',_sans-serif] text-gray-600 text-base">Argentina</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 p-6 bg-purple-50 rounded-2xl border border-purple-200">
          <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-[#000000] text-2xl mb-2">Horarios de atención</h4>
            <p className="font-['Arimo:Regular',_sans-serif] text-[#000000] text-lg">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="font-['Arimo:Regular',_sans-serif] text-gray-600 text-base">Sábados: 9:00 - 12:00 (solo urgencias)</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 p-6 bg-orange-50 rounded-2xl border border-orange-200">
          <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Users className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-[#000000] text-2xl mb-2">¿Quieres colaborar?</h4>
            <p className="font-['Arimo:Regular',_sans-serif] text-[#000000] text-lg">Voluntariado • Donaciones • Alianzas</p>
            <p className="font-['Arimo:Regular',_sans-serif] text-gray-600 text-base">Todas las formas de apoyo son bienvenidas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
