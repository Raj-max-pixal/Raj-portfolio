import { FiBookOpen, FiAward } from 'react-icons/fi'
import { education } from '@/data/education'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

export function EducationTimeline() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Education"
            title="Academic Background"
            subtitle="Building knowledge alongside real-world experience"
          />
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent to-secondary/30" />

          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.degree} className="reveal-left relative pl-16">
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-accent border-4 border-bg shadow-glow-purple" />

                <GlassCard glow>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10 shrink-0">
                      {item.type === 'college' ? (
                        <FiBookOpen className="w-6 h-6 text-secondary" />
                      ) : (
                        <FiAward className="w-6 h-6 text-secondary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-display text-xl font-bold">{item.degree}</h3>
                        <span className="text-sm text-accent font-medium">{item.period}</span>
                      </div>
                      <p className="text-secondary font-medium mb-2">{item.institution}</p>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{item.details}</p>
                      {item.cgpa && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                          <span className="text-sm text-muted">CGPA</span>
                          <span className="font-display text-lg font-bold text-accent">{item.cgpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
