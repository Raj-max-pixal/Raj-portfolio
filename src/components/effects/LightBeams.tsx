import { motion } from 'framer-motion'

const beams = [
  { left: '8%', width: '1px', delay: 0, duration: 14 },
  { left: '22%', width: '2px', delay: 2, duration: 18 },
  { left: '48%', width: '1px', delay: 1, duration: 16 },
  { left: '72%', width: '1px', delay: 3, duration: 20 },
  { left: '88%', width: '2px', delay: 0.5, duration: 15 },
]

export function LightBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" aria-hidden="true">
      {beams.map((beam, index) => (
        <motion.div
          key={index}
          className="absolute top-0 h-full origin-top"
          style={{
            left: beam.left,
            width: beam.width,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(124,58,237,0.12) 35%, rgba(0,229,255,0.06) 60%, transparent 100%)',
          }}
          animate={{
            opacity: [0.15, 0.45, 0.2],
            scaleY: [0.85, 1.05, 0.9],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: beam.delay,
          }}
        />
      ))}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(0,229,255,0.05) 40%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
