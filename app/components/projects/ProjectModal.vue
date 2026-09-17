<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const close = () => emit('close')

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.project) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="props.project" class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" @click.self="close">
      <div class="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-[#0D1B2A]">
        <div class="flex justify-end">
          <button type="button" aria-label="Fermer la modal" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 transition hover:border-[#082F5A] hover:text-[#082F5A] dark:border-slate-700 dark:text-slate-200" @click="close">×</button>
        </div>

        <div class="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img :src="props.project.image" :alt="props.project.title" class="h-72 w-full rounded-[1.5rem] object-cover md:h-full" loading="lazy" />
          </div>

          <div>
            <div class="mb-4 inline-flex rounded-full border border-[#2E7D32]/20 bg-[#2E7D32]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">
              {{ props.project.category.toUpperCase() }}
            </div>
            <h3 class="text-3xl font-semibold text-slate-900 dark:text-white">{{ props.project.title }}</h3>
            <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ props.project.description }}</p>

            <div class="mt-5 space-y-4">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#082F5A] dark:text-slate-200">Contexte</p>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ props.project.context }}</p>
              </div>

              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#082F5A] dark:text-slate-200">Fonctionnalités</p>
                <ul class="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li v-for="feature in props.project.features" :key="feature" class="flex items-center gap-2"><span class="text-[#2E7D32]">✓</span> {{ feature }}</li>
                </ul>
              </div>

              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#082F5A] dark:text-slate-200">Technologies</p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span v-for="tech in props.project.technologies" :key="tech" class="rounded-full bg-slate-100 px-2.5 py-1.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ tech }}</span>
                </div>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a v-if="props.project.github && props.project.github !== '#'" :href="props.project.github" target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full bg-[#082F5A] px-4 py-2 text-sm font-medium text-white">GitHub</a>
              <a v-if="props.project.demo && props.project.demo !== '#'" :href="props.project.demo" target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-[#082F5A]/20 px-4 py-2 text-sm font-medium text-[#082F5A] dark:text-white">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
