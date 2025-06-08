import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div className="text-red-600 font-bold text-lg">
              Fundación
              <br />
              <span className="text-sm">Compromiso</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              INICIO
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-sm font-medium">
              PROGRAMAS
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-sm font-medium">
              NOSOTROS
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-sm font-medium">
              CONTACTO
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-sm font-medium">
              DONAR
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-sm font-medium">
              BLOG
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 text-sm font-medium">
              CAMPUS
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full hidden lg:block">
            CONTACTANOS
          </Button>

          {/* Mobile menu button */}
          <button className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
