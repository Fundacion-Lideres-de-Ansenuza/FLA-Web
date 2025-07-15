import { useEffect, useState } from 'react'

export function useCountAnimation(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible || !target || target <= 0) return

    let start = 0
    const duration = 2000
    const startTime = performance?.now() || Date.now()

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.round(start + (target - start) * easeOutQuart)
      
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame?.(animate) || setTimeout(() => animate(Date.now()), 16)
      }
    }

    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(animate)
    } else {
      setTimeout(() => animate(Date.now()), 16)
    }
  }, [target, isVisible])

  return count
} 