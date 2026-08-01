import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { featuredProjects, otherProjects, projectCategories } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredOther =
    activeCategory === 'All'
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding relative bg-bg-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Projects"
            title="Featured Work"
            subtitle="AI products and applications I've built"
          />
        </div>

        <div className="stagger-item grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="stagger-child group">
              <GlassCard glow className="h-full flex flex-col overflow-hidden p-0">
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-display text-3xl font-bold text-white/90 group-hover:scale-110 transition-transform duration-500">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-secondary text-sm font-medium mb-2">{project.subtitle}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="ghost" size="sm" href={project.github}>
                        <FiGithub className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="secondary" size="sm" href={project.live}>
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="reveal-up">
          <h3 className="font-display text-2xl font-bold text-center mb-8">Other Projects</h3>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-glow-purple'
                    : 'bg-white/5 text-muted hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredOther.map((project) => (
              <GlassCard
                key={project.id}
                className="group hover:border-accent/30 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`h-24 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center group-hover:scale-[1.02] transition-transform`}
                >
                  <span className="font-display text-lg font-bold">{project.title}</span>
                </div>
                <p className="text-muted text-sm">{project.subtitle}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
