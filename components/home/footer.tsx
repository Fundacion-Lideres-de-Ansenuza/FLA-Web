import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-lg">F</span>
              </div>
              <div className="text-red-500 font-extrabold text-xl leading-tight">
                Fundación
                <br />
                <span className="text-sm font-semibold">Compromiso</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <p className="text-gray-400 text-base mb-2">Independencia 350</p>
              <p className="text-gray-400 text-base mb-2">Miramar de Ansenuza</p>
              <p className="text-gray-400 text-base">Córdoba, Argentina</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-base mb-4">Suscribite acá</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500 text-base"
              />
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-r-lg text-lg font-bold">→</button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Seguinos</h3>
            <div className="flex space-x-6">
              <Facebook className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 mt-10 text-center">
          <p className="text-gray-400 text-base font-medium">
            © 2024 Fundación Compromiso. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
