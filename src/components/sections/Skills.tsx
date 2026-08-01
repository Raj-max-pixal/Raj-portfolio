import { skillCategories } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { ProgressBar } from '@/components/ui/ProgressBar'

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-bg-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Skills"
            title="Technical Expertise"
            subtitle="Technologies and tools I work with daily"
          />
        </div>

        <div className="stagger-item grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.category} className="stagger-child">
              <GlassCard glow className="h-full">
                <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <ProgressBar
                      key={skill.name}
                      label={skill.name}
                      value={skill.level}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
