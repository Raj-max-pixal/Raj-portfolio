import { useEffect, useRef, type CSSProperties } from 'react'

export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--spot-x', `${e.clientX}px`)
        el.style.setProperty('--spot-y', `${e.clientY}px`)
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none z-[2] hidden md:block"
      aria-hidden="true"
      style={
        {
          '--spot-x': '50%',
          '--spot-y': '40%',
        } as CSSProperties
      }
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(124,58,237,0.15), rgba(0,229,255,0.06) 35%, transparent 65%)',
        }}
      />
    </div>
  )
}
