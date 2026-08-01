import { motion } from 'framer-motion'

const blobs = [
  {
    className: 'absolute -top-1/4 -left-1/4 w-[min(600px,70vw)] h-[min(600px,70vw)] rounded-full bg-accent/25 blur-[120px]',
    animate: { x: [0, 60, -20, 0], y: [0, 40, -20, 0], scale: [1, 1.12, 0.98, 1] },
    transition: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    className: 'absolute top-1/4 -right-1/4 w-[min(520px,60vw)] h-[min(520px,60vw)] rounded-full bg-secondary/18 blur-[110px]',
    animate: { x: [0, -50, 30, 0], y: [0, 60, -30, 0], scale: [1, 1.18, 1, 1] },
    transition: { duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
  },
  {
    className: 'absolute -bottom-1/3 left-1/4 w-[min(440px,55vw)] h-[min(440px,55vw)] rounded-full bg-accent-light/12 blur-[90px]',
    animate: { x: [0, 40, -25, 0], y: [0, -50, 35, 0] },
    transition: { duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 },
  },
  {
    className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(380px,45vw)] h-[min(380px,45vw)] rounded-full bg-secondary/8 blur-[80px]',
    animate: { scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] },
    transition: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
  },
]

export function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]" aria-hidden="true">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={blob.className}
          animate={blob.animate}
          transition={blob.transition}
        />
      ))}
    </div>
  )
}
