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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-4 md:mx-8 lg:mx-12 px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-glass backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <a href="#" className="font-display text-xl md:text-2xl font-bold text-gradient">
            {owner.displayName}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 hover:border-accent/50 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mx-4 mt-2 glass p-6 rounded-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 mt-4 px-4 py-3 rounded-full border border-accent/30 text-accent"
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
