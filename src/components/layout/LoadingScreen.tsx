import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { owner } from '@/data/owner'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-hero-cinematic opacity-60" />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center z-10"
      >
        <motion.h1
          className="font-display text-5xl md:text-7xl font-bold text-gradient-animated mb-4"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {owner.displayName}
        </motion.h1>
        <motion.p
          className="text-muted text-sm md:text-base tracking-[0.3em] uppercase"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {owner.role}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-56 h-[2px] bg-white/10 rounded-full overflow-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-accent via-secondary to-accent rounded-full"
          style={{ backgroundSize: '200% 100%' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}
