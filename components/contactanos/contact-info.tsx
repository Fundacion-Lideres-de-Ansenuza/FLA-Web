import { Mail, Phone, Clock, Users, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-4xl font-contrail-one text-[#000000] mb-6">Información de contacto</h3>
        <p className="font-arimo text-black text-lg leading-relaxed">
          Estamos aquí para escucharte y trabajar juntos. Podés contactarnos de varias formas.
          No dudes en escribirnos, ¡tu mensaje es importante para nosotros!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4 p-6 bg-[#f45e5e]/10 rounded-2xl border border-[#f45e5e]/20 transition-all hover:bg-[#f45e5e]/20">
          <div className="w-12 h-12 bg-[#f45e5e] rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-black text-xl mb-2">Correo electrónico</h4>
            <p className="font-arimo text-black text-base">info@fundacionlideresdeansenuza.org</p>
            <p className="font-arimo text-gray-600 text-sm">Respondemos en 24-48 horas</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-[#bc2222]/10 rounded-2xl border border-[#bc2222]/20 transition-all hover:bg-[#bc2222]/20">
          <div className="w-12 h-12 bg-[#bc2222] rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-black text-xl mb-2">Teléfono</h4>
            <p className="font-arimo text-black text-base">+54 358 123 4567</p>
            <p className="font-arimo text-gray-600 text-sm">Lunes a Viernes, 9:00 - 18:00</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-[#90140e]/10 rounded-2xl border border-[#90140e]/20 transition-all hover:bg-[#90140e]/20 md:col-span-2">
          <div className="w-12 h-12 bg-[#90140e] rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-black text-xl mb-2">Horarios de atención</h4>
            <p className="font-arimo text-black text-base">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="font-arimo text-gray-600 text-sm">Sábados: 9:00 - 12:00 (solo urgencias)</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-[#f45e5e]/10 rounded-2xl border border-[#f45e5e]/20 transition-all hover:bg-[#f45e5e]/20 md:col-span-2">
          <div className="w-12 h-12 bg-[#f45e5e] rounded-xl flex items-center justify-center flex-shrink-0">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail-one text-black text-xl mb-2">¿Querés colaborar?</h4>
            <p className="font-arimo text-black text-base">Voluntariado • Donaciones • Alianzas</p>
            <p className="font-arimo text-gray-600 text-sm">Todas las formas de apoyo son bienvenidas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
