'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS_DATA } from './_constants/constants'
import { useCountAnimation } from './hooks/useCountAnimation'

function AnimatedNumber({ target, isVisible }: { target: number; isVisible: boolean }) {
  const count = useCountAnimation(target, isVisible)
  return <span>{count}</span>
}

export default function Stats() {
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
    <section ref={sectionRef} className="py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STATS_DATA?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#bd2222] mb-4 drop-shadow-lg font-contrail">
                +<AnimatedNumber target={stat?.number || 0} isVisible={isVisible} />
              </div>
              <div className="text-gray-700 font-bold text-lg lg:text-xl whitespace-pre-line tracking-wide font-contrail">
                {stat?.label || ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 