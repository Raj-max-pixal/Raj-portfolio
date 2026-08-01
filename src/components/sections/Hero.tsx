import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import { owner } from '@/data/owner'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Button } from '@/components/ui/Button'
import { AnimatedBlobs } from '@/components/effects/AnimatedBlobs'
import { Particles } from '@/components/effects/Particles'

export function Hero() {
  const typedText = useTypingEffect(owner.tagline, 70, 35, 2500)
  const parallax = useMouseParallax(0.015)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <AnimatedBlobs />
      <Particles count={40} />

      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <p className="text-secondary text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-6">
            Hello, I&apos;m
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <span className="text-gradient">{owner.displayName}</span>
        </motion.h1>

        <motion.div
          className="h-8 md:h-10 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light">
            {typedText}
            <span className="inline-block w-[3px] h-6 md:h-8 bg-secondary ml-1 animate-pulse" />
          </p>
        </motion.div>

        <motion.p
          className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
        >
          {owner.title} · {owner.location}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7 }}
        >
          <MagneticButton href="#projects">
            <Button variant="primary" size="lg">
              View Portfolio
            </Button>
          </MagneticButton>
          <MagneticButton href="#contact">
            <Button variant="outline" size="lg">
              <FiMail className="w-5 h-5" />
              Contact Me
            </Button>
          </MagneticButton>
          <MagneticButton href="/resume.pdf">
            <Button variant="ghost" size="lg">
              <FiDownload className="w-5 h-5" />
              Resume
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
