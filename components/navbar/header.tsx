'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useNavbar } from "./useNavbar"
import { BRAND_COLOR } from "./_constants"
import type { Locale } from "@/i18n/config"
import LanguageSwitcher from "@/components/language-switcher"

type Navigation = {
  home: string;
  programs: string;
  about: string;
  donate: string;
  blog: string;
  campus: string;
  contact: string;
}

interface HeaderProps {
  lang: Locale;
  navigation: Navigation;
}

export default function Header({ lang, navigation }: HeaderProps) {
  const navItems = [
    { name: navigation.home, href: `/${lang}` },
    { name: navigation.programs, href: `/${lang}/programas` },
    { name: navigation.about, href: `/${lang}/quienes-somos` },
    { name: navigation.donate, href: `/${lang}/donar` },
    { name: navigation.blog, href: `/${lang}/blog` },
    { name: navigation.campus, href: `/${lang}/campus` },
    { name: navigation.contact, href: `/${lang}/contactanos` },
  ]

  const { 
    hoveredItem, 
    isActive, 
    isMobileMenuOpen,
    handleMouseEnter, 
    handleMouseLeave,
    toggleMobileMenu,
    closeMobileMenu 
  } = useNavbar(navItems)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => window.location.href = `/${lang}`}
            >
              <Image
                src="/images/LogoFLA.png"
                alt="Fundación Líderes de Ansenuza"
                width={100}
                height={100}
                className="h-24 w-auto"
              />
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <nav
              className="flex items-center relative"
              onMouseLeave={handleMouseLeave}
            >
              {navItems.map((item) => (
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
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full font-bold shadow transition"
              onClick={() => window.location.href = `/${lang}/contactanos`}
            >
              {navigation.contact}
            </Button>
            <LanguageSwitcher />
          </div>
          
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
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-end mb-4">
                <LanguageSwitcher />
              </div>
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-4 rounded-lg text-base font-semibold transition-all duration-200 ${
                      isActive(item.name) 
                        ? 'text-white' 
                        : 'text-gray-700 active:bg-gray-50'
                    }`}
                    style={{
                      backgroundColor: isActive(item.name) ? BRAND_COLOR : 'transparent'
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
                    delay: navItems.length * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold shadow transition"
                      onClick={() => {
                        closeMobileMenu();
                        window.location.href = `/${lang}/contactanos`;
                      }}
                    >
                      {navigation.contact}
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