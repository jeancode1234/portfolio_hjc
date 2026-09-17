export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'api'

export interface Project {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'all'>
  description: string
  context: string
  features: string[]
  technologies: string[]
  image: string
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    id: 'project-placeholder-1',
    title: 'Projet à ajouter',
    category: 'fullstack',
    description: 'Projet à ajouter. Remplacez ce placeholder par une vraie réalisation dès qu’elle est disponible.',
    context: 'À définir',
    features: ['À compléter', 'À renseigner', 'À ajouter'],
    technologies: ['VueJS', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#'
  },
  {
    id: 'project-placeholder-2',
    title: 'Projet à ajouter',
    category: 'frontend',
    description: 'Projet à ajouter. Cette carte sert de placeholder pour une future interface métier ou marketing.',
    context: 'À définir',
    features: ['Interface moderne', 'Responsive', 'UX claire'],
    technologies: ['NuxtJS', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#'
  },
  {
    id: 'project-placeholder-3',
    title: 'Projet à ajouter',
    category: 'backend',
    description: 'Projet à ajouter. Ce placeholder peut être remplacé par un service backend ou une API d’entreprise.',
    context: 'À définir',
    features: ['API REST', 'Authentification', 'Intégration'],
    technologies: ['PHP', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1558494949cc5c3ee9de8d2f0f3d4e1d0?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#'
  }
]

export const projectFilters: Array<{ label: string; value: ProjectCategory }> = [
  { label: 'Tous', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Fullstack', value: 'fullstack' },
  { label: 'API', value: 'api' }
]
