import { FiBriefcase } from 'react-icons/fi'
import { experience } from '@/data/education'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

export function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-bg-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Experience"
            title="Professional Journey"
            subtitle="Building products and leading innovation"
          />
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-secondary to-accent/20 hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.title}
                className={`reveal-up relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg shadow-glow-purple hidden md:block" />

                <div className="md:w-1/2 pl-16 md:pl-0">
                  <GlassCard glow>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-accent/10 shrink-0">
                        <FiBriefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                        <p className="text-secondary font-medium">{exp.company}</p>
                        <p className="text-muted text-sm mt-1">
                          {exp.period} · {exp.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/70 leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
