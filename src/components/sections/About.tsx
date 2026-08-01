import { FiMapPin, FiMail } from 'react-icons/fi'
import { owner } from '@/data/owner'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

export function About() {
  const paragraphs = owner.about.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="About Me"
            title="Crafting the Future with AI"
            subtitle="Passionate developer building products that impact millions"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <GlassCard glow className="relative overflow-hidden p-0">
              <div className="aspect-[4/5] max-w-md mx-auto relative">
                <img
                  src="/profile-about.png"
                  alt={owner.fullName}
                  className="w-full h-full object-cover object-top rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-accent/10 rounded-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold">{owner.fullName}</h3>
                  <p className="text-secondary mt-1">{owner.role}</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="reveal-right space-y-6">
            <GlassCard>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-white/80 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <FiMapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Location</p>
                    <p className="text-sm text-white/90">{owner.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <FiMail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${owner.email}`}
                      className="text-sm text-white/90 hover:text-secondary transition-colors"
                    >
                      {owner.email}
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
