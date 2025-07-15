export const NAV_ITEMS = [
  { name: "PROGRAMAS", href: "/programas" },
  { name: "NOSOTROS", href: "/nosotros" },
  { name: "DONAR", href: "/donar" },
  { name: "BLOG", href: "/blog" },
  { name: "CAMPUS", href: "/campus" }
] as const

export const ANIMATION_CONFIG = {
  background: {
    duration: 0.3,
    ease: "easeOut"
  },
  hover: {
    duration: 0.2,
    ease: "easeOut"
  }
} as const 