import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  label: string
  value: number
  delay?: number
}

export function ProgressBar({ label, value, delay = 0 }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setWidth(value), delay)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/90 font-medium">{label}</span>
        <span className="text-secondary">{visible ? `${value}%` : '0%'}</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
          initial={{ width: 0 }}
          animate={{ width: visible ? `${width}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: delay / 1000 }}
        />
      </div>
    </div>
  )
}
