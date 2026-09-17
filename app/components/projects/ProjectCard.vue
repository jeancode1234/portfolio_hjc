<script setup lang="ts">
import type { Project } from '~/data/projects'

interface Props {
  project: Project
}

const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'open', project: Project): void }>()
</script>

<template>
  <article class="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 shadow-[0_18px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#2E7D32]/40 dark:border-slate-700 dark:bg-[#0D1B2A]/80">
    <div class="relative overflow-hidden">
      <img
        :src="props.project.image"
        :alt="props.project.title"
        class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-slate-950/40 opacity-0 transition duration-300 group-hover:opacity-100"></div>
      <div class="absolute inset-x-4 bottom-4 flex justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
        <button type="button" class="rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#082F5A]" @click="emit('open', props.project)">Voir le projet</button>
        <a v-if="props.project.github !== '#'" :href="props.project.github" target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-medium text-[#082F5A]">GitHub</a>
      </div>
    </div>

    <div class="p-6">
      <div class="mb-3 flex items-center justify-between gap-3">
        <span class="rounded-full border border-[#2E7D32]/20 bg-[#2E7D32]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">
          {{ props.project.category.toUpperCase() }}
        </span>
        <span class="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {{ props.project.technologies[0] }}
        </span>
      </div>

      <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ props.project.title }}</h3>
      <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ props.project.description }}</p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span v-for="tech in props.project.technologies.slice(0, 3)" :key="tech" class="rounded-full bg-slate-100 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {{ tech }}
        </span>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <button type="button" class="inline-flex items-center rounded-full bg-[#082F5A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0b315d]" @click="emit('open', props.project)">
          Voir le projet
        </button>
        <a v-if="props.project.demo !== '#'" :href="props.project.demo" target="_blank" rel="noreferrer" class="inline-flex items-center text-sm font-medium text-[#082F5A] transition hover:text-[#0b315d] dark:text-slate-200 dark:hover:text-white">
          Live
        </a>
      </div>
    </div>
  </article>
</template>
