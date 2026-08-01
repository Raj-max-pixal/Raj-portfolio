import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFlutter,
  SiNodedotjs,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiOpenai,
  SiFastapi,
  SiElectron,
} from 'react-icons/si'
import { techStack } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  python: SiPython,
  flutter: SiFlutter,
  nodejs: SiNodedotjs,
  firebase: SiFirebase,
  gcp: SiGooglecloud,
  docker: SiDocker,
  git: SiGit,
  tailwind: SiTailwindcss,
  openai: SiOpenai,
  claude: SiOpenai,
  gemini: SiGooglecloud,
  fastapi: SiFastapi,
  electron: SiElectron,
}

export function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Tech Stack"
            title="Tools & Technologies"
            subtitle="The stack powering my projects"
          />
        </div>

        <div className="reveal-scale">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techStack.map((tech, index) => {
              const Icon = iconComponents[tech.icon]
              return (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl glass hover:border-accent/40 hover:shadow-glow-sm transition-all duration-500 min-w-[100px]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {Icon && (
                    <Icon className="w-10 h-10 text-white/70 group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                  )}
                  <span className="text-sm text-muted group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
