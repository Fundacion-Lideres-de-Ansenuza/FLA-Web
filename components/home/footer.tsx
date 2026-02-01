import { FaTiktok, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
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
                  src="/images/Logos/fla-logo-blanco.png"
                  alt="Fundación Líderes de Ansenuza"
                  width={75}
                  height={75}
                  className="relative transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-red-600 font-contrail text-2xl leading-none tracking-tight">
                  Fundación
                </h2>
                <p className="text-white/90 font-arimo font-bold text-lg tracking-wide">
                  Lideres de Ansenuza
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Empoderando a la próxima generación de líderes en la región de Ansenuza a través de la educación y la innovación.
            </p>

            <div className="flex items-center gap-5">
              {[
                { icon: FaInstagram, href: "https://www.instagram.com/fundacionlideresdeansenuza/" },
                { icon: FaFacebook, href: "https://www.facebook.com/fundacionlideresdeansenuza" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/company/fundaci%C3%B3n-l%C3%ADderes-de-ansenuza/" },
                { icon: FaTiktok, href: "https://www.tiktok.com/@fundacionlideresansenuza" },
                { icon: FaYoutube, href: "https://www.youtube.com/@fundacionlideresdeansenuza4512" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-600/20 hover:border-red-600/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-6 lg:col-span-3 space-y-6">
            <h3 className="text-xl font-contrail text-white tracking-wider uppercase">Contacto</h3>
            <div className="space-y-4 text-gray-400 font-arimo">
              <div className="group flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                <div>
                  <p className="group-hover:text-white transition-colors">Independencia 350</p>
                  <p className="group-hover:text-white transition-colors text-sm opacity-80">Miramar de Ansenuza, Córdoba</p>
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
                  className="inline-flex items-center text-red-500 font-bold hover:text-red-400 transition-colors gap-2 group/link"
                >
                  Contacto Directo
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-6 lg:col-span-4 space-y-6">
            <h3 className="text-xl font-contrail text-white tracking-wider uppercase">Newsletter</h3>
            <p className="text-gray-400 font-arimo">Mantenete al tanto de todas nuestras novedades.</p>
            <form className="relative flex group">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full pl-6 pr-16 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-red-600 hover:bg-red-700 text-white px-5 rounded-xl font-black transition-all transform active:scale-95 flex items-center justify-center">
                <span>→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-arimo text-sm">
            © {new Date().getFullYear()} Fundación Lideres de Ansenuza. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="/politicas-de-privacidad" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
              Políticas de Privacidad
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="text-gray-500 text-sm font-medium">
              Argentina
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
