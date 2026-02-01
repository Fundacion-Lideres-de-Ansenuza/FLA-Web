'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useNavbar } from "./useNavbar"
import { NAV_ITEMS } from "./_constants"

export default function Header() {
  const {
    hoveredItem,
    isActive,
    isMobileMenuOpen,
    handleMouseEnter,
    handleMouseLeave,
    toggleMobileMenu,
    closeMobileMenu
  } = useNavbar()

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-[#a81c1c] bg-gradient-to-r from-[#bc2222] via-[#f45e5e] to-[#bc2222] shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => window.location.href = '/'}
            >
              <Image
                src="/images/Logos/fla-logo-blanco.png"
                alt="Fundación Líderes de Ansenuza"
                width={160}
                height={160}
                className="h-32 w-auto py-1"
              />
            </div>
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
                      style={{ backgroundColor: hoveredItem === item.name ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.18)' }}
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
                  className={`px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200 relative z-10 block ${isActive(item.name)
                    ? 'text-white'
                    : 'text-white/85 hover:text-white'
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

          <Button
            className="bg-white hover:bg-white/90 text-[#bc2222] px-8 py-2 rounded-full hidden lg:block font-bold shadow transition"
            onClick={() => window.location.href = '/contactanos'}
          >
            CONTACTANOS
          </Button>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition relative z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-7 h-7 flex flex-col justify-center items-center"
            >
              <motion.span
                className="block w-6 h-0.5 bg-gray-600 mb-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-600 mb-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-600"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gradient-to-b from-[#bc2222] via-[#d63c3c] to-[#f45e5e] border-b border-[#a81c1c] overflow-hidden text-white"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-4 rounded-lg text-base font-semibold transition-all duration-200 ${isActive(item.name)
                      ? 'text-white'
                      : 'text-white/80 active:bg-white/10'
                      }`}
                    style={{
                      backgroundColor: isActive(item.name) ? 'rgba(255,255,255,0.14)' : 'transparent'
                    }}
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="pt-6 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: NAV_ITEMS.length * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full bg-white text-[#bc2222] hover:bg-white/90 px-8 py-4 rounded-lg font-bold shadow transition"
                      onClick={() => {
                        closeMobileMenu();
                        window.location.href = '/contactanos';
                      }}
                    >
                      CONTACTANOS
                    </Button>
                  </motion.div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 