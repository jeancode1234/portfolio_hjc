import type { Project, ProjectCategory } from '~/data/projects'
import { projectFilters, projects as allProjects } from '~/data/projects'

export const useProjects = () => {
  const selectedFilter = ref<ProjectCategory>('all')
  const selectedProject = ref<Project | null>(null)

  const filteredProjects = computed(() => {
    if (selectedFilter.value === 'all') {
      return allProjects
    }

    return allProjects.filter((project) => project.category === selectedFilter.value)
  })

  const setFilter = (filter: ProjectCategory) => {
    selectedFilter.value = filter
  }

  const openProject = (project: Project) => {
    selectedProject.value = project
  }

  const closeProject = () => {
    selectedProject.value = null
  }

  return {
    projectFilters,
    selectedFilter,
    filteredProjects,
    selectedProject,
    setFilter,
    openProject,
    closeProject
  }
}
