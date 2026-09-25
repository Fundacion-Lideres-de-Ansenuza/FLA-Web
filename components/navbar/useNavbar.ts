'use client'

import { usePathname } from "next/navigation"
import { useState, useCallback, useMemo, useEffect, useRef } from "react"
import { NAV_ITEMS } from "./_constants"
import type { NavbarHook } from "./types"

export const useNavbar = (): NavbarHook => {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement | null>(null)

  const activeItem = useMemo(() => {
    return NAV_ITEMS.find(item => pathname?.startsWith(item.href))?.name || null
  }, [pathname])

  const handleMouseEnter = useCallback((itemName: string) => {
    setHoveredItem(itemName)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null)
  }, [])

  const toggleSubmenu = useCallback((itemName: string) => {
    setOpenSubmenu(prev => (prev === itemName ? null : itemName))
  }, [])

  const closeSubmenu = useCallback(() => {
    setOpenSubmenu(null)
  }, [])

  const toggleMobileSubmenu = useCallback((itemName: string) => {
    setOpenMobileSubmenu(prev => (prev === itemName ? null : itemName))
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
        setOpenSubmenu(null)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
    setOpenMobileSubmenu(null)
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
    closeMobileMenu,
    openSubmenu,
    toggleSubmenu,
    closeSubmenu,
    openMobileSubmenu,
    toggleMobileSubmenu,
    navRef
  }
} 