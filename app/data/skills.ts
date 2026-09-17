export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools'

export const skillCategories: Record<SkillCategory, { title: string; items: string[] }> = {
  frontend: {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'VueJS', 'NuxtJS', 'Bootstrap', 'Tailwind CSS']
  },
  backend: {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Java 17+', 'API REST']
  },
  database: {
    title: 'Database',
    items: ['MySQL', 'Merise', 'UML']
  },
  tools: {
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Postman', 'StarUML', 'Sage 100', 'Microsoft Office']
  }
}

export const skills = Object.entries(skillCategories).map(([key, category]) => ({
  key: key as SkillCategory,
  title: category.title,
  items: category.items
}))
