import { useEffect, useRef, useState } from 'react'
import { FiAward, FiCheck } from 'react-icons/fi'
import { achievements, achievementList } from '@/data/achievements'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const isDecimal = value % 1 !== 0
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? Math.round(current * 100) / 100 : Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [started, value])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient">
      {count}
      {suffix}
    </span>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Achievements"
            title="Milestones & Impact"
            subtitle="Recognition and accomplishments along the journey"
          />
        </div>

        <div className="stagger-item grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item) => (
            <div key={item.title} className="stagger-child">
              <GlassCard glow className="text-center">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
                <p className="text-white/90 font-medium mt-2">{item.title}</p>
                <p className="text-muted text-sm mt-1">{item.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="reveal-scale">
          <GlassCard glow>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent/10">
                <FiAward className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold">Highlights</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievementList.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
                  <div className="p-1 rounded-full bg-secondary/20">
                    <FiCheck className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
