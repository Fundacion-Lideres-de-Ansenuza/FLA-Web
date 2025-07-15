'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useNavbar } from "./useNavbar"
import { NAV_ITEMS, BRAND_COLOR } from "./_constants"

export default function Header() {
  const { hoveredItem, activeItem, isActive, handleMouseEnter, handleMouseLeave } = useNavbar()

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
          
          <nav 
            className="hidden lg:flex items-center relative" 
            onMouseLeave={handleMouseLeave}
          >
            {NAV_ITEMS.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
              >
                <AnimatePresence mode="wait">
                  {(isActive(item.name) || hoveredItem === item.name) && (
                    <motion.div
                      layoutId={isActive(item.name) ? "activeBackground" : "hoverBackground"}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: BRAND_COLOR }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 0.15
                      }}
                    />
                  )}
                </AnimatePresence>
                
                <motion.a
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200 relative z-10 block ${
                    isActive(item.name) 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.name}
                </motion.a>
              </motion.div>
            ))}
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