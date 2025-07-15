'use client'
import { usePathname } from "next/navigation"
import { useState, useCallback } from "react"
import { NAV_ITEMS } from "./_constants"

export const useNavbar = () => {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const getActiveItem = useCallback(() => {
    return NAV_ITEMS.find(item => pathname?.startsWith(item.href))?.name || null
  }, [pathname])

  const handleMouseEnter = useCallback((itemName: string) => {
    if (itemName) {
      setHoveredItem(itemName)
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null)
  }, [])

  const isActive = useCallback((itemName: string) => {
    return getActiveItem() === itemName
  }, [getActiveItem])

  return {
    hoveredItem,
    activeItem: getActiveItem(),
    isActive,
    handleMouseEnter,
    handleMouseLeave
  }
} 