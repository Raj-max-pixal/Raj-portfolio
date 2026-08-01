export interface GalleryItem {
  id: string
  title: string
  category: string
  gradient: string
  aspect: 'tall' | 'wide' | 'square'
}

export const galleryItems: GalleryItem[] = [
  { id: '1', title: 'MAXie Desktop', category: 'AI', gradient: 'from-purple-600 to-violet-900', aspect: 'tall' },
  { id: '2', title: 'Multimax Hub', category: 'Workspace', gradient: 'from-blue-600 to-indigo-900', aspect: 'wide' },
  { id: '3', title: 'StudyBuddy', category: 'Education', gradient: 'from-emerald-600 to-teal-900', aspect: 'square' },
  { id: '4', title: 'FocusFlow', category: 'Productivity', gradient: 'from-pink-600 to-rose-900', aspect: 'tall' },
  { id: '5', title: 'EcoMind AI', category: 'Sustainability', gradient: 'from-green-600 to-emerald-900', aspect: 'square' },
  { id: '6', title: 'CareerForge', category: 'Career', gradient: 'from-orange-600 to-amber-900', aspect: 'wide' },
  { id: '7', title: 'Hackathon Win', category: 'Events', gradient: 'from-cyan-600 to-blue-900', aspect: 'square' },
  { id: '8', title: 'Google Cloud', category: 'Certification', gradient: 'from-red-600 to-orange-900', aspect: 'tall' },
  { id: '9', title: 'Team Multimax', category: 'Team', gradient: 'from-violet-600 to-purple-900', aspect: 'wide' },
  { id: '10', title: 'AI Workshop', category: 'Events', gradient: 'from-teal-600 to-cyan-900', aspect: 'square' },
  { id: '11', title: 'Flutter Apps', category: 'Mobile', gradient: 'from-sky-600 to-blue-900', aspect: 'tall' },
  { id: '12', title: 'Research Paper', category: 'Academic', gradient: 'from-indigo-600 to-violet-900', aspect: 'square' },
]
