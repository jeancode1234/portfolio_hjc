export interface Experience {
  period: string
  company: string
  role: string
  type: string
  description: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    period: '2024 — 2025',
    company: 'PROMOTECH SARL',
    role: 'Stagiaire',
    type: 'Logistique & Facturation',
    description: 'Participation à la gestion logistique et à la facturation avec un accompagnement sur les processus internes.',
    achievements: ['Gestion des stocks', 'Contrôle qualité', 'Facturation', 'Sage 100']
  },
  {
    period: '2024',
    company: 'MFLGROUP',
    role: 'Stagiaire',
    type: 'Digital & Communication',
    description: 'Appui sur les activités digitales et de communication au sein de l’entreprise.',
    achievements: ['Support digital', 'Communication interne', 'Mise en valeur des contenus']
  },
  {
    period: '2024',
    company: 'KAYLANGROUP',
    role: 'Formateur',
    type: 'Développement Web',
    description: 'Encadrement et transmission des savoir-faire en développement web à des apprenants.',
    achievements: ['Formation web', 'Accompagnement technique', 'Initiation au développement']
  }
]
