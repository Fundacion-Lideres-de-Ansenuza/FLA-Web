'use client'

import { usePathname } from "next/navigation"
import { useState, useCallback, useMemo } from "react"
import { NAV_ITEMS } from "./_constants"
import type { NavbarHook } from "./types"

export const useNavbar = (): NavbarHook => {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const activeItem = useMemo(() => {
    return NAV_ITEMS.find(item => pathname?.startsWith(item.href))?.name || null
  }, [pathname])

  const handleMouseEnter = useCallback((itemName: string) => {
    setHoveredItem(itemName)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null)
  }, [])

  const isActive = useCallback((itemName: string) => {
    return activeItem === itemName
  }, [activeItem])

  return {
    hoveredItem,
    activeItem,
    isActive,
    handleMouseEnter,
    handleMouseLeave
  }
} 