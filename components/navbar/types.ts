export interface NavbarHook {
  hoveredItem: string | null
  activeItem: string | null
  isActive: (itemName: string) => boolean
  isMobileMenuOpen: boolean
  handleMouseEnter: (itemName: string) => void
  handleMouseLeave: () => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

export interface NavItem {
  name: string
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