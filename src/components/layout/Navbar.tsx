import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import { owner, navLinks } from '@/data/owner'
import { useTheme } from '@/hooks/useTheme'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'py-3' : 'py-4 md:py-5'
      }`}
    >
      <nav
        className={`mx-3 md:mx-8 lg:mx-12 px-5 md:px-6 py-3 rounded-2xl transition-all duration-700 ${
          isScrolled
            ? 'glass shadow-glass backdrop-blur-2xl border-white/10 bg-white/[0.06]'
            : 'glass border-white/[0.06] bg-white/[0.03] backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <a
            href="#"
            className="font-display text-lg md:text-2xl font-bold text-gradient-animated hover:opacity-90 transition-opacity"
          >
            {owner.displayName}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-all duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/10 hover:border-accent/40 hover:bg-accent/10 hover:shadow-glow-sm transition-all duration-300"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10 hover:border-accent/40 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mx-3 md:mx-8 mt-2 glass p-6 rounded-2xl border border-white/10 backdrop-blur-2xl shadow-glass"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 mt-4 px-4 py-3 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
