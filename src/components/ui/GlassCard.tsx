import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
}

export function GlassCard({ children, className = '', glow = false }: GlassCardProps) {
  return (
    <div className={`${glow ? 'glass-glow glow-border' : 'glass'} p-6 md:p-8 ${className}`}>
      {children}
    </div>
  )
}
