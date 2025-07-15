'use client'

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [activeItemPosition, setActiveItemPosition] = useState({ left: 0, width: 0 })
  const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { name: "PROGRAMAS", href: "/programas" },
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "DONAR", href: "/donar" },
    { name: "BLOG", href: "/blog" },
    { name: "CAMPUS", href: "/campus" }
  ]

  const getActiveItem = () => {
    return navItems.find(item => pathname.startsWith(item.href))?.name || null
  }

  const updateActivePosition = () => {
    const activeItem = getActiveItem()
    if (activeItem && navRef.current) {
      const activeElement = navRef.current.querySelector(`[data-nav="${activeItem}"]`) as HTMLElement
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect()
        const navRect = navRef.current.getBoundingClientRect()
        setActiveItemPosition({
          left: rect.left - navRect.left,
          width: rect.width
        })
      }
    }
  }

  const handleMouseEnter = (itemName: string, event: React.MouseEvent) => {
    setHoveredItem(itemName)
    if (navRef.current) {
      const rect = (event.target as HTMLElement).getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      setHoverPosition({
        left: rect.left - navRect.left,
        width: rect.width
      })
    }
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  useEffect(() => {
    updateActivePosition()
    const handleResize = () => updateActivePosition()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [pathname])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/Iconoito.png" 
              alt="Fundación Líderes de Ansenuza" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center relative" ref={navRef} onMouseLeave={handleMouseLeave}>
            {getActiveItem() && (
              <div 
                className="absolute top-0 h-full rounded-full transition-all duration-300 ease-out -z-10"
                style={{
                  left: `${activeItemPosition.left}px`,
                  width: `${activeItemPosition.width}px`,
                  backgroundColor: '#f45e5e'
                }}
              />
            )}
            {hoveredItem && (
              <div 
                className="absolute top-0 h-full rounded-full transition-all duration-200 ease-out -z-10"
                style={{
                  left: `${hoverPosition.left}px`,
                  width: `${hoverPosition.width}px`,
                  backgroundColor: '#f45e5e'
                }}
              />
            )}
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <a 
                  key={item.name}
                  href={item.href}
                  data-nav={item.name}
                  className={`px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200 relative z-10 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-white'
                  }`}
                  onMouseEnter={(e) => handleMouseEnter(item.name, e)}
                >
                  {item.name}
                </a>
              )
            })}
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
