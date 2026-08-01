export interface Achievement {
  title: string
  value: number
  suffix: string
  description: string
}

export const achievements: Achievement[] = [
  {
    title: 'YouTube Videos',
    value: 150,
    suffix: '+',
    description: 'Technical videos published on YouTube',
  },
  {
    title: 'AI Products',
    value: 10,
    suffix: '+',
    description: 'AI products built and deployed',
  },
  {
    title: 'Hackathons',
    value: 15,
    suffix: '+',
    description: 'Hackathon participations',
  },
  {
    title: 'CGPA',
    value: 8.83,
    suffix: '',
    description: 'Current academic performance',
  },
]

export const achievementList = [
  'Founder of Multimax',
  'Google Student Ambassador',
  'Google Gemini Student Ambassador',
  'Google Cloud Skills Boost',
  'Research Paper Published',
  'Hackathon Participant',
  '150+ Technical Videos on YouTube',
  'Built Multiple AI Products',
]

export const certifications = [
  {
    title: 'Google Cloud Platform',
    issuer: 'Google',
    icon: 'gcp',
  },
  {
    title: 'Firebase',
    issuer: 'Google',
    icon: 'firebase',
  },
  {
    title: 'Compute Engine',
    issuer: 'Google Cloud',
    icon: 'gcp',
  },
  {
    title: 'CI/CD',
    issuer: 'Google Cloud',
    icon: 'cicd',
  },
  {
    title: 'Internal Load Balancing',
    issuer: 'Google Cloud',
    icon: 'gcp',
  },
]
