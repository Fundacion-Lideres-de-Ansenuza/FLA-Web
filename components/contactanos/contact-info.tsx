"use client"

import { Mail, Phone, Clock, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ContactInfo() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-4xl font-contrail text-[#000000] mb-6">{t('contact.info.title')}</h3>
        <p className="font-arimo text-black text-lg leading-relaxed">
          {t('contact.info.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4 p-6 bg-[#f45e5e]/10 rounded-2xl border border-[#f45e5e]/20 transition-all hover:bg-[#f45e5e]/20">
          <div className="w-12 h-12 bg-[#f45e5e] rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail text-black text-xl mb-2">{t('contact.info.email')}</h4>
            <p className="font-arimo text-black text-base">contacto@lideresdeansenuza.org</p>
            <p className="font-arimo text-gray-600 text-sm">{t('contact.info.emailResponse')}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-[#bc2222]/10 rounded-2xl border border-[#bc2222]/20 transition-all hover:bg-[#bc2222]/20">
          <div className="w-12 h-12 bg-[#bc2222] rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail text-black text-xl mb-2">{t('contact.info.phone')}</h4>
            <p className="font-arimo text-black text-base">+54 358 123 4567</p>
            <p className="font-arimo text-gray-600 text-sm">{t('contact.info.phoneHours')}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-[#90140e]/10 rounded-2xl border border-[#90140e]/20 transition-all hover:bg-[#90140e]/20 md:col-span-2">
          <div className="w-12 h-12 bg-[#90140e] rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail text-black text-xl mb-2">{t('contact.info.officeHours')}</h4>
            <p className="font-arimo text-black text-base">{t('contact.info.weekdays')}</p>
            <p className="font-arimo text-gray-600 text-sm">{t('contact.info.saturday')}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-[#f45e5e]/10 rounded-2xl border border-[#f45e5e]/20 transition-all hover:bg-[#f45e5e]/20 md:col-span-2">
          <div className="w-12 h-12 bg-[#f45e5e] rounded-xl flex items-center justify-center flex-shrink-0">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-contrail text-black text-xl mb-2">{t('contact.info.collaborate')}</h4>
            <p className="font-arimo text-black text-base">{t('contact.info.collaborateOptions')}</p>
            <p className="font-arimo text-gray-600 text-sm">{t('contact.info.collaborateText')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
