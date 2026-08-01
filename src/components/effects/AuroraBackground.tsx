import { motion } from 'framer-motion'

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-[40%] left-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(124,58,237,0.5) 0deg, rgba(0,229,255,0.35) 120deg, rgba(139,92,246,0.25) 240deg, rgba(124,58,237,0.5) 360deg)',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[20%] -right-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0,229,255,0.45) 0%, rgba(124,58,237,0.2) 45%, transparent 70%)',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-[30%] left-[25%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full opacity-25 blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(0,229,255,0.15) 50%, transparent 72%)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/20 to-bg/80" />
    </div>
  )
}
