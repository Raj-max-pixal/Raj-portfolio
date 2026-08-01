import { FiAward } from 'react-icons/fi'
import { SiGooglecloud, SiFirebase } from 'react-icons/si'
import { certifications } from '@/data/achievements'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

const certIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  gcp: SiGooglecloud,
  firebase: SiFirebase,
  cicd: SiGooglecloud,
}

export function Certificates() {
  return (
    <section id="certificates" className="section-padding relative bg-bg-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Certifications"
            title="Professional Credentials"
            subtitle="Validated expertise in cloud and development"
          />
        </div>

        <div className="stagger-item grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {certifications.map((cert) => {
            const Icon = certIcons[cert.icon] || FiAward
            return (
              <div key={cert.title} className="stagger-child">
                <GlassCard glow className="text-center h-full group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-white/90 mb-1">{cert.title}</h3>
                  <p className="text-muted text-sm">{cert.issuer}</p>
                </GlassCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
