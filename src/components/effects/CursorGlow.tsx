import { useMousePosition } from '@/hooks/useMouseParallax'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen hidden md:block"
      aria-hidden="true"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 transition-transform duration-100 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(0,229,255,0.1) 40%, transparent 70%)',
          transform: `translate(${x - 250}px, ${y - 250}px)`,
        }}
      />
    </div>
  )
}
