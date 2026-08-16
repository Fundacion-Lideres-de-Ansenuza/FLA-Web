'use client'

import { FaTiktok, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import NewsletterForm from "./newsletter-form"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#2a2a2a] text-white py-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-600/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-12 lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/images/Logos/fla-logo-blanco.webp"
                  alt="Fundación Líderes de Ansenuza"
                  width={75}
                  height={75}
                  className="relative transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="font-arimo text-base text-white leading-tight">
                <p className="font-semibold tracking-wide">Fundación</p>
                <p className="font-semibold tracking-wide">Líderes de Ansenuza</p>
              </div>
            </div>

            <p className="text-gray-400 font-arimo text-base leading-relaxed max-w-md">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-5">
              {[
                { icon: FaInstagram, href: "https://www.instagram.com/fundacionlideresdeansenuza/", label: "Instagram" },
                { icon: FaFacebook, href: "https://www.facebook.com/fundacionlideresdeansenuza", label: "Facebook" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/company/fundaci%C3%B3n-l%C3%ADderes-de-ansenuza/", label: "LinkedIn" },
                { icon: FaTiktok, href: "https://www.tiktok.com/@fundacionlideresansenuza", label: "TikTok" },
                { icon: FaYoutube, href: "https://www.youtube.com/@fundacionlideresdeansenuza4512", label: "YouTube" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-600/20 hover:border-red-600/40 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-6 lg:col-span-3 space-y-6">
            <h3 className="text-base font-arimo font-semibold text-white tracking-wider uppercase">{t('footer.contact')}</h3>
            <div className="space-y-4 text-gray-400 font-arimo text-base">
              <div className="group flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                <div>
                  <p className="group-hover:text-white transition-colors">Independencia 350</p>
                  <p className="group-hover:text-white transition-colors opacity-80">Miramar de Ansenuza, Cordoba</p>
                </div>
              </div>
              <div className="group flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                <a href="mailto:contacto@lideresdeansenuza.org" className="group-hover:text-white transition-colors">
                  contacto@lideresdeansenuza.org
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="/contactanos"
                  className="inline-flex items-center text-base font-arimo font-semibold text-white hover:text-white/80 transition-colors gap-2 group/link"
                >
                  {t('footer.directContact')}
                  <span className="group-hover/link:translate-x-1 transition-transform">-&gt;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-6 lg:col-span-4">
            <NewsletterForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-arimo text-base">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-8 font-arimo text-base">
            <a href="/politicas-de-privacidad" className="text-gray-500 hover:text-white font-medium transition-colors">
              {t('footer.privacyPolicy')}
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="text-gray-500 font-medium">
              Argentina
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
