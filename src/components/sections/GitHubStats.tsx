import { FiGithub, FiStar, FiGitBranch, FiUsers } from 'react-icons/fi'
import { owner } from '@/data/owner'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

const contributionData = Array.from({ length: 52 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => {
    const seed = (week * 7 + day) * 13
    const level = seed % 5
    return level
  }),
)

const levelColors = [
  'bg-white/5',
  'bg-accent/20',
  'bg-accent/40',
  'bg-accent/60',
  'bg-accent/80',
]

export function GitHubStats() {
  return (
    <section id="github" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="GitHub"
            title="Open Source Activity"
            subtitle="Building in public and contributing to the community"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="reveal-left">
            <GlassCard glow>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5">
                  <FiGithub className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Raj-max-pixal</h3>
                  <p className="text-muted">AI Full Stack Developer</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                  <FiStar className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">50+</p>
                  <p className="text-muted text-xs">Repositories</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                  <FiGitBranch className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">200+</p>
                  <p className="text-muted text-xs">Commits</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                  <FiUsers className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">10+</p>
                  <p className="text-muted text-xs">Projects</p>
                </div>
              </div>

              <Button variant="primary" href={owner.github} className="w-full">
                <FiGithub className="w-5 h-5" />
                View GitHub Profile
              </Button>
            </GlassCard>
          </div>

          <div className="reveal-right">
            <GlassCard glow>
              <h3 className="font-display text-xl font-bold mb-6">Contribution Activity</h3>
              <div className="overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {contributionData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((level, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-3 h-3 rounded-sm ${levelColors[level]}`}
                          title={`Contributions level ${level}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted">
                <span>Less</span>
                {levelColors.map((color, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
                ))}
                <span>More</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
