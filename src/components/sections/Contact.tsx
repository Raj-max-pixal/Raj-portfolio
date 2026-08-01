import { useState, FormEvent } from 'react'
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { owner } from '@/data/owner'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    )
    window.location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Contact"
            title="Let's Build Together"
            subtitle="Have a project in mind? Let's connect and create something amazing"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal-left">
            <GlassCard glow>
              <h3 className="font-display text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6 mb-8">
                <a
                  href={`mailto:${owner.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <FiMail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                    <p className="text-white/90">{owner.email}</p>
                  </div>
                </a>

                <a
                  href={owner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <FiGithub className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">GitHub</p>
                    <p className="text-white/90">Raj-max-pixal</p>
                  </div>
                </a>

                <a
                  href={owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <FiLinkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">LinkedIn</p>
                    <p className="text-white/90">Raja Saranya</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02]">
                  <div className="p-3 rounded-xl bg-white/5">
                    <FiMapPin className="w-5 h-5 text-muted" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Location</p>
                    <p className="text-white/90">{owner.location}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="reveal-right">
            <GlassCard glow>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-muted"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-muted mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-muted"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-muted resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {submitted ? (
                    'Opening Email Client...'
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
