export interface EducationItem {
  degree: string
  institution: string
  period: string
  details: string
  cgpa?: string
  type: 'college' | 'school' | 'certificate'
}

export const education: EducationItem[] = [
  {
    degree: 'B.Tech Information Technology',
    institution: 'Arunachala College of Engineering for Women',
    period: '2024 - 2028',
    details: 'Pursuing Bachelor of Technology in Information Technology with focus on AI, software engineering, and cloud technologies.',
    cgpa: '8.83',
    type: 'college',
  },
]

export const experience = [
  {
    title: 'Founder & CEO',
    company: 'Multimax',
    period: '2024 - Present',
    location: 'Chennai, India',
    description:
      'Building Multimax AI Hub — a complete AI workspace with chat, research, coding assistant, document intelligence, plugin marketplace, AI agents, voice assistant, and team workspace.',
    highlights: [
      'Developed MAXie AI Desktop Assistant with Electron & React',
      'Built Multimax AI Hub with modern dashboard and marketplace',
      'Created multiple AI products serving real-world use cases',
    ],
  },
  {
    title: 'Google Student Ambassador',
    company: 'Google',
    period: '2024 - Present',
    location: 'India',
    description:
      'Representing Google on campus, organizing tech events, and helping students learn Google technologies and cloud skills.',
    highlights: [
      'Organized workshops and hackathons',
      'Promoted Google Cloud and developer tools',
      'Mentored students in cloud and AI technologies',
    ],
  },
  {
    title: 'Google Gemini Student Ambassador',
    company: 'Google',
    period: '2024 - Present',
    location: 'India',
    description:
      'Ambassador for Google Gemini AI, demonstrating AI capabilities and integrating Gemini into student projects.',
    highlights: [
      'Integrated Gemini API in multiple projects',
      'Conducted AI workshops and demos',
      'Published technical content on AI integration',
    ],
  },
]
