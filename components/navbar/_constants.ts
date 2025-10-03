import type { AnimationConfig } from "./types"

export const BRAND_COLOR = '#f45e5e'

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