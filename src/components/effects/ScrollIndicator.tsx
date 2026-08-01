import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  href?: string
  delay?: number
}

export function ScrollIndicator({ href = '#about', delay = 4.2 }: ScrollIndicatorProps) {
  return (
    <motion.a
      href={href}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Scroll to about section"
    >
      <span className="text-[10px] tracking-[0.35em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
        Scroll
      </span>
      <div className="relative w-6 h-10 rounded-full border border-white/20 group-hover:border-accent/40 transition-colors">
        <motion.div
          className="absolute left-1/2 top-2 -translate-x-1/2 w-1 h-2 rounded-full bg-gradient-to-b from-accent to-secondary"
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.a>
  )
}
