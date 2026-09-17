<script setup lang="ts">
import type { Project, ProjectCategory } from '~/data/projects'
import { projectFilters } from '~/data/projects'

interface Props {
  selectedFilter: ProjectCategory
  filteredProjects: Project[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'set-filter', filter: ProjectCategory): void
  (e: 'open-project', project: Project): void
}>()
</script>

<template>
  <section id="projects" class="py-20 lg:py-28" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <UiSectionTitle eyebrow="Projets" title="Mes projets" align="center" />
      <p class="mx-auto mb-8 max-w-2xl text-center text-base text-slate-600 dark:text-slate-300">
        Quelques réalisations et expériences digitales illustrant mon approche du développement web.
      </p>

      <div class="mb-8">
        <ProjectsProjectFilter :filters="projectFilters" :selected="props.selectedFilter" @update:filter="(filter) => emit('set-filter', filter)" />
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectsProjectCard
          v-for="(project, index) in props.filteredProjects"
          :key="project.id"
          :project="project"
          :data-aos="'zoom-in-up'"
          :data-aos-delay="120 + index * 90"
          @open="(project) => emit('open-project', project)"
        />
      </div>
    </div>
  </section>
</template>
