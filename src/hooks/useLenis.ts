import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from '@/lib/gsap'

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    document.documentElement.classList.add('lenis', 'lenis-smooth')

    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id.replace('#', ''))
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
