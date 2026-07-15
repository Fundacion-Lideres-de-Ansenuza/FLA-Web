import type { NavItem, AnimationConfig } from "./types"

export const NAV_ITEMS: NavItem[] = [
  { name: "PROGRAMAS", href: "/programas" },
  { name: "QUIENES SOMOS", href: "/quienes-somos" },
  { name: "DONAR", href: "/donar" }
] as const

export const BRAND_COLOR = '#bc2222'

export const ANIMATION_CONFIG: AnimationConfig = {
  background: {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
    duration: 0.15
  },
  hover: {
    type: "spring" as const,
    stiffness: 400,
    damping: 17
  }
} as const 
