import { useScrollProgress } from '@/hooks/useTheme'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-accent via-secondary to-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
