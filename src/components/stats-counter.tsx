'use client'

import React, { useState, useEffect, useRef } from 'react'

interface StatsCounterProps {
  end: number
  label: string
  suffix?: string
}

export function StatsCounter({ end, label, suffix = '' }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCount()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCount = () => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
  }

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg md:text-xl text-white uppercase tracking-wide">{label}</div>
    </div>
  )
}
