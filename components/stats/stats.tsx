'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS_NUMBERS } from './_constants/constants'
import { useCountAnimation } from './hooks/useCountAnimation'

type Stat = {
  label: string;
}

interface StatsProps {
  dictionary: Stat[];
}

function AnimatedNumber({ target, isVisible }: { target: number; isVisible: boolean }) {
  const count = useCountAnimation(target, isVisible)
  return <span>{count}</span>
}

export default function Stats({ dictionary }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const statsData = STATS_NUMBERS.map((number, index) => ({
    number,
    label: dictionary[index].label,
  }));

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
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl lg:text-8xl xl:text-9xl font-black text-[#bd2222] mb-6 drop-shadow-lg font-contrail">
                +<AnimatedNumber target={stat.number} isVisible={isVisible} />
              </div>
              <div className="text-gray-700 font-bold text-xl lg:text-2xl whitespace-pre-line tracking-wide font-contrail">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 