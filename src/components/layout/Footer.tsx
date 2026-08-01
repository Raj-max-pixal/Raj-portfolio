import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { owner, socialLinks } from '@/data/owner'

const iconMap: Record<string, React.ReactNode> = {
  github: <FiGithub className="w-5 h-5" />,
  linkedin: <FiLinkedin className="w-5 h-5" />,
  email: <FiMail className="w-5 h-5" />,
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-bg-light">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-gradient mb-2">
              {owner.displayName}
            </h3>
            <p className="text-muted text-sm">
              {owner.role} · {owner.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:border-accent/50 hover:shadow-glow-sm transition-all"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full glass hover:border-secondary/50 hover:shadow-glow transition-all"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {owner.fullName}. Crafted with passion in Chennai.
          </p>
        </div>
      </div>
    </footer>
  )
}
