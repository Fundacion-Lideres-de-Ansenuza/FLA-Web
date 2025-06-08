import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-lg">F</span>
            </div>
            <div className="text-red-600 font-extrabold text-xl leading-tight">
              Fundación
              <br />
              <span className="text-sm font-semibold">Compromiso</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="bg-red-600 text-white px-5 py-2 rounded-full text-base font-bold shadow hover:bg-red-700 transition">
              INICIO
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-base font-semibold transition">
              PROGRAMAS
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-base font-semibold transition">
              NOSOTROS
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-base font-semibold transition">
              CONTACTO
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-base font-semibold transition">
              DONAR
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-base font-semibold transition">
              BLOG
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-base font-semibold transition">
              CAMPUS
            </a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full hidden lg:block font-bold shadow transition">
            CONTACTANOS
          </Button>
          <button className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
