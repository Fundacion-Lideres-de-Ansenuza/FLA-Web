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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {STATS_DATA?.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center rounded-[28px] border border-[#f1d3d3] bg-white/90 px-5 py-6 shadow-[0_20px_45px_rgba(188,34,34,0.08)]">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#bd2222] mb-3 drop-shadow-lg font-contrail">
                +<AnimatedNumber target={stat?.number || 0} isVisible={isVisible} />
              </div>
              <div className="max-w-[12ch] text-gray-700 font-bold text-lg lg:text-xl whitespace-pre-line tracking-wide font-contrail text-center">
                {t(stat?.labelKey || '')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
