export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  github?: string
  live?: string
  featured: boolean
  category: string
  gradient: string
}

export const featuredProjects: Project[] = [
  {
    id: 'maxie',
    title: 'MAXie',
    subtitle: 'AI Desktop Assistant',
    description:
      'A beautiful AI desktop pet assistant with chat, memory, voice commands, and automation. Built with Electron and React, with a mobile version in development.',
    features: [
      'Desktop Pet',
      'AI Chat',
      'Memory',
      'Voice',
      'Automation',
      'Electron',
      'React',
      'Mobile Version',
      'Beautiful UI',
    ],
    tech: ['Electron', 'React', 'TypeScript', 'OpenAI', 'Node.js'],
    github: 'https://github.com/Raj-max-pixal',
    live: 'https://github.com/Raj-max-pixal',
    featured: true,
    category: 'AI',
    gradient: 'from-purple-600/30 to-cyan-500/20',
  },
  {
    id: 'multimax-hub',
    title: 'Multimax AI Hub',
    subtitle: 'Complete AI Workspace',
    description:
      'A comprehensive AI workspace platform featuring chat, research tools, coding assistant, document intelligence, plugin marketplace, AI agents, and team collaboration.',
    features: [
      'AI Chat',
      'Research',
      'Coding Assistant',
      'Document Intelligence',
      'Plugin Marketplace',
      'AI Agents',
      'Voice Assistant',
      'Team Workspace',
      'Marketplace',
      'Modern Dashboard',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Firebase', 'OpenAI', 'Claude'],
    github: 'https://github.com/Raj-max-pixal',
    featured: true,
    category: 'AI',
    gradient: 'from-violet-600/30 to-blue-500/20',
  },
  {
    id: 'studybuddy',
    title: 'StudyBuddy AI',
    subtitle: 'AI Study Assistant',
    description:
      'An intelligent study companion with AI tutor, quiz generation, chat-based learning, and memory retention features powered by Gemini.',
    features: ['Chat', 'Quiz', 'Memory', 'AI Tutor'],
    tech: ['FastAPI', 'Flutter', 'Gemini', 'Python'],
    github: 'https://github.com/Raj-max-pixal',
    featured: true,
    category: 'Education',
    gradient: 'from-emerald-600/30 to-teal-500/20',
  },
  {
    id: 'careerforge',
    title: 'CareerForge AI',
    subtitle: 'AI Career Recommendation Platform',
    description:
      'Hackathon project featuring resume analyzer, intelligent job matching, and AI-powered career guidance for students and professionals.',
    features: ['Resume Analyzer', 'Job Matching', 'AI Career Guidance', 'Hackathon Project'],
    tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
    github: 'https://github.com/Raj-max-pixal',
    featured: true,
    category: 'AI',
    gradient: 'from-orange-600/30 to-red-500/20',
  },
  {
    id: 'focusflow',
    title: 'FocusFlow',
    subtitle: 'Gamified Productivity App',
    description:
      'A gamified productivity application with Pomodoro timer, study rooms, XP system, and social features to boost focus and motivation.',
    features: ['Flutter', 'Firebase', 'Pomodoro', 'Study Rooms', 'XP System'],
    tech: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/Raj-max-pixal',
    featured: true,
    category: 'Mobile',
    gradient: 'from-pink-600/30 to-purple-500/20',
  },
  {
    id: 'ecomind',
    title: 'EcoMind AI',
    subtitle: 'AI Carbon Footprint Platform',
    description:
      'Hackathon project for tracking and analyzing carbon footprint with AI-powered insights using Claude API and React analytics dashboard.',
    features: ['Claude API', 'React', 'Analytics', 'Hackathon Project'],
    tech: ['React', 'Claude API', 'TypeScript', 'Chart.js'],
    github: 'https://github.com/Raj-max-pixal',
    featured: true,
    category: 'AI',
    gradient: 'from-green-600/30 to-emerald-500/20',
  },
]

export const otherProjects: Project[] = [
  {
    id: 'janvoice',
    title: 'JanVoice AI',
    subtitle: 'Voice AI Application',
    description: 'AI-powered voice assistant application.',
    features: ['Voice AI', 'Speech Recognition'],
    tech: ['Python', 'AI'],
    featured: false,
    category: 'AI',
    gradient: 'from-indigo-600/30 to-purple-500/20',
  },
  {
    id: 'werzex',
    title: 'Werzex',
    subtitle: 'Web Application',
    description: 'Modern web application with rich features.',
    features: ['Web App'],
    tech: ['React', 'Node.js'],
    featured: false,
    category: 'Web',
    gradient: 'from-blue-600/30 to-cyan-500/20',
  },
  {
    id: 'votemate',
    title: 'VoteMate',
    subtitle: 'Voting Platform',
    description: 'Digital voting and polling platform.',
    features: ['Voting', 'Real-time'],
    tech: ['React', 'Firebase'],
    featured: false,
    category: 'Web',
    gradient: 'from-yellow-600/30 to-orange-500/20',
  },
  {
    id: 'animeverse',
    title: 'AnimeVerse',
    subtitle: 'Anime Discovery App',
    description: 'Discover and track anime with a beautiful UI.',
    features: ['Anime DB', 'Tracking'],
    tech: ['Flutter', 'API'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-red-600/30 to-pink-500/20',
  },
  {
    id: 'coffeehome',
    title: 'CoffeeHome',
    subtitle: 'Coffee Shop App',
    description: 'Coffee shop ordering and management app.',
    features: ['Ordering', 'Menu'],
    tech: ['Flutter', 'Firebase'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-amber-600/30 to-yellow-500/20',
  },
  {
    id: 'foodie',
    title: 'Foodie',
    subtitle: 'Food Delivery App',
    description: 'Food discovery and delivery application.',
    features: ['Food Delivery', 'Reviews'],
    tech: ['Flutter', 'Firebase'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-orange-600/30 to-red-500/20',
  },
  {
    id: 'fitto',
    title: 'Fitto',
    subtitle: 'Fitness Tracker',
    description: 'Fitness tracking and workout planning app.',
    features: ['Workouts', 'Tracking'],
    tech: ['Flutter', 'Firebase'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-lime-600/30 to-green-500/20',
  },
  {
    id: 'stepcash',
    title: 'StepCash',
    subtitle: 'Rewards App',
    description: 'Earn rewards for staying active and walking.',
    features: ['Step Tracking', 'Rewards'],
    tech: ['Flutter', 'Firebase'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-teal-600/30 to-cyan-500/20',
  },
  {
    id: 'calculator',
    title: 'Premium Calculator',
    subtitle: 'Advanced Calculator',
    description: 'Beautiful premium calculator with advanced functions.',
    features: ['Scientific', 'Premium UI'],
    tech: ['Flutter'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-slate-600/30 to-gray-500/20',
  },
  {
    id: 'temp-converter',
    title: 'Temperature Converter',
    subtitle: 'Unit Converter',
    description: 'Fast and elegant temperature conversion tool.',
    features: ['Conversion', 'Multiple Units'],
    tech: ['Flutter'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-sky-600/30 to-blue-500/20',
  },
  {
    id: 'insta-clone',
    title: 'Insta Clone',
    subtitle: 'Social Media App',
    description: 'Instagram-inspired social media clone with modern features.',
    features: ['Feed', 'Stories', 'Chat'],
    tech: ['Flutter', 'Firebase'],
    featured: false,
    category: 'Mobile',
    gradient: 'from-fuchsia-600/30 to-purple-500/20',
  },
]

export const allProjects = [...featuredProjects, ...otherProjects]

export const projectCategories = ['All', 'AI', 'Mobile', 'Web', 'Education']
