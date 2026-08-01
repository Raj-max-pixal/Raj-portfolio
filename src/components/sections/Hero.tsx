import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { owner } from '@/data/owner'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Button } from '@/components/ui/Button'
import { AuroraBackground } from '@/components/effects/AuroraBackground'
import { AnimatedBlobs } from '@/components/effects/AnimatedBlobs'
import { Particles } from '@/components/effects/Particles'
import { HeroSpotlight } from '@/components/effects/HeroSpotlight'
import { ScrollIndicator } from '@/components/effects/ScrollIndicator'
import { gsap } from '@/lib/gsap'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 2.6 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const typedText = useTypingEffect(owner.tagline, 70, 35, 2500)
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el || !imageRef.current) return

    gsap.fromTo(
      imageRef.current,
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6, delay: 2.7, ease: 'power3.out' },
    )

    gsap.to(imageRef.current.querySelector('.hero-image-inner'), {
      scale: 1.06,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 4,
    })
  }, [])

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-hero-cinematic" />
      <AuroraBackground />
      <AnimatedBlobs />
      <Particles count={45} />
      <HeroSpotlight />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2 items-center">
        {/* Left — content */}
        <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-32 lg:py-0">
          <motion.div
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-base md:text-lg mb-3"
            >
              Hi, I&apos;m a
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-bold tracking-tight mb-6 min-h-[1.2em]"
            >
              <span className="text-white">{typedText}</span>
              <span className="inline-block w-[3px] h-[0.85em] bg-secondary ml-1 animate-pulse align-middle" />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/55 text-sm md:text-base leading-relaxed mb-10 max-w-md"
            >
              {owner.heroDescription}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <MagneticButton href="#projects">
                <Button variant="primary" size="lg" className="neon-glow min-w-[160px]">
                  View My Work
                </Button>
              </MagneticButton>
              <MagneticButton href="#contact">
                <Button variant="outline" size="lg" className="neon-glow-outline min-w-[160px]">
                  <FiMail className="w-5 h-5" />
                  Contact Me
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — cinematic hero image (video-style) */}
        <div
          ref={imageRef}
          className="relative h-[50vh] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-[52%] xl:w-[48%] opacity-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="hero-image-inner absolute inset-0 origin-center">
              <img
                src="/hero-cinematic.png"
                alt={owner.fullName}
                className="w-full h-full object-cover object-top lg:object-[center_15%]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Blend edges into site background */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent lg:via-bg/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/20 lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bg/10 hidden lg:block" />

            {/* Cinematic color grade overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(124,58,237,0.12),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(0,229,255,0.08),transparent_50%)] mix-blend-screen" />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
