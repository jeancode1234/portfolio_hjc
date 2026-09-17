export interface EducationEntry {
  period: string
  title: string
  institution: string
  location: string
}

export const education: EducationEntry[] = [
  {
    period: '2023 – 2024',
    title: 'Certificat Développement Web Fullstack PHP',
    institution: 'Localhost Académie',
    location: 'Douala'
  },
  {
    period: '2022 – 2023',
    title: 'Licence Professionnelle — Génie Logiciel',
    institution: 'Institut Supérieur La Perle',
    location: 'Douala'
  },
  {
    period: '2021 – 2022',
    title: 'BTS — Génie Logiciel',
    institution: 'Institut Supérieur La Perle',
    location: 'Douala'
  },
  {
    period: '2019 – 2020',
    title: 'Baccalauréat de l’Enseignement Général',
    institution: 'Lycée d’Oyack',
    location: 'Douala'
  },
  {
    period: '2012 – 2013',
    title: 'Certificat d’Études Primaires',
    institution: 'École Publique de Bilongue',
    location: 'Douala'
  }
]
