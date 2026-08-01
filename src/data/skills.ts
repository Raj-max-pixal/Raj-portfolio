export interface SkillCategory {
  category: string
  skills: { name: string; level: number }[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'C', level: 80 },
      { name: 'C++', level: 82 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Dart', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'TailwindCSS', level: 95 },
      { name: 'HTML', level: 98 },
      { name: 'CSS', level: 95 },
    ],
  },
  {
    category: 'Mobile',
    skills: [{ name: 'Flutter', level: 92 }],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Firebase', level: 90 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    category: 'AI',
    skills: [
      { name: 'Prompt Engineering', level: 95 },
      { name: 'LLM Integration', level: 93 },
      { name: 'AI Agents', level: 90 },
      { name: 'Claude API', level: 92 },
      { name: 'Gemini', level: 90 },
      { name: 'OpenAI', level: 88 },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'Google Cloud Platform', level: 85 },
      { name: 'Firebase Hosting', level: 90 },
      { name: 'Cloud Build', level: 82 },
      { name: 'Compute Engine', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'Firestore', level: 88 },
      { name: 'Firebase', level: 90 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'Figma', level: 85 },
    ],
  },
]

export const techStack = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Python', icon: 'python' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'GCP', icon: 'gcp' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'TailwindCSS', icon: 'tailwind' },
  { name: 'OpenAI', icon: 'openai' },
  { name: 'Claude', icon: 'claude' },
  { name: 'Gemini', icon: 'gemini' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Electron', icon: 'electron' },
]
