import { FaTiktok, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#2b2b2b] text-white py-8 border-t border-[#2b2b2b]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <Image src="/images/LogoFLA.png" alt="Fundación Líderes de Ansenuza" width={100} height={100} />
              <div className="text-red-500 font-extrabold text-xl leading-tight">
                Fundación
                <br />
                <span className="text-sm font-semibold">Lideres de Ansenuza</span>
              </div>
              <div className="flex space-x-6">
            </div>
            </div>
            <div className="flex space-x-6">
            <a href="https://www.instagram.com/fundacionlideresdeansenuza/" target="_blank" rel="noopener noreferrer"><FaInstagram className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a href="https://www.facebook.com/fundacionlideresdeansenuza" target="_blank" rel="noopener noreferrer"><FaFacebook className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a href="https://www.linkedin.com/company/fundaci%C3%B3n-l%C3%ADderes-de-ansenuza/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a href="https://www.tiktok.com/@fundacionlideresansenuza" target="_blank" rel="noopener noreferrer"><FaTiktok className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a href="h
ttps://www.youtube.com/@fundacionlideresdeansenuza4512" target="_blank" rel="noopener noreferrer"><FaYoutube className="h-7 w-7 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
</div>


          </div>

          <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <p className="text-gray-400 text-base mb-2">Independencia 350</p>
              <p className="text-gray-400 text-base mb-2">Miramar de Ansenuza</p>
              <p className="text-gray-400 text-base">Córdoba, Argentina</p>
            </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-base mb-4">Suscribite acá</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-[#1f1e1e] text-white border border-[#1f1e1e] focus:outline-none focus:border-red-500 text-base"
              />
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-r-lg text-lg font-bold">→</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-10 text-center">
          <p className="text-gray-400 text-base font-medium">
            © { new Date().getFullYear() } Fundación Lideres de Ansenuza. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
