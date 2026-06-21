'use client'

import { useEffect, useRef, useState } from 'react'
import { useCountAnimation } from './hooks/useCountAnimation'
import { useTranslation } from 'react-i18next'

const STATS_DATA = [
  { number: 100, labelKey: "stats.volunteers" },
  { number: 2200, labelKey: "stats.participants" },
  { number: 250, labelKey: "stats.projects" },
]

function AnimatedNumber({ target, isVisible }: { target: number; isVisible: boolean }) {
  const count = useCountAnimation(target, isVisible)
  return <span>{count}</span>
}

export default function Stats() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {STATS_DATA?.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-2 py-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#bd2222] drop-shadow-[0_10px_25px_rgba(188,34,34,0.12)] font-contrail">
                +<AnimatedNumber target={stat?.number || 0} isVisible={isVisible} />
              </div>
              <div className="mt-2 max-w-[18rem] text-balance text-base font-bold tracking-wide text-gray-700 sm:text-lg lg:text-xl font-contrail">
                {t(stat?.labelKey || '')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
