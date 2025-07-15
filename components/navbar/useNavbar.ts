'use client'

import { usePathname } from "next/navigation"
import { useState, useCallback, useMemo, useEffect } from "react"
import { NAV_ITEMS } from "./_constants"
import type { NavbarHook } from "./types"

export const useNavbar = (): NavbarHook => {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const activeItem = useMemo(() => {
    return NAV_ITEMS.find(item => pathname?.startsWith(item.href))?.name || null
  }, [pathname])

  const handleMouseEnter = useCallback((itemName: string) => {
    setHoveredItem(itemName)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const isActive = useCallback((itemName: string) => {
    return activeItem === itemName
  }, [activeItem])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return {
    hoveredItem,
    activeItem,
    isActive,
    isMobileMenuOpen,
    handleMouseEnter,
    handleMouseLeave,
    toggleMobileMenu,
    closeMobileMenu
  }
} 