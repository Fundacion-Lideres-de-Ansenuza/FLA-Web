import type { RefObject } from "react"

export interface NavbarHook {
  hoveredItem: string | null
  activeItem: string | null
  isActive: (itemName: string) => boolean
  isMobileMenuOpen: boolean
  handleMouseEnter: (itemName: string) => void
  handleMouseLeave: () => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  openSubmenu: string | null
  toggleSubmenu: (itemName: string) => void
  closeSubmenu: () => void
  openMobileSubmenu: string | null
  toggleMobileSubmenu: (itemName: string) => void
  navRef: RefObject<HTMLElement | null>
}

export interface NavItem {
  name: string
  href: string
  hasSubmenu?: boolean
}

export interface NavSubItem {
  label: string
  href: string
}

export interface AnimationConfig {
  background: {
    type: "spring"
    stiffness: number
    damping: number
    duration: number
  }
  hover: {
    type: "spring"
    stiffness: number
    damping: number
  }
} 