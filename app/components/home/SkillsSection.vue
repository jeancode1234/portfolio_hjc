<script setup lang="ts">
import { skills } from '~/data/skills'

const skillPreview = [
  { label: 'VueJS', category: 'Frontend Framework', icon: 'V' },
  { label: 'Laravel', category: 'Framework PHP', icon: 'L' },
  { label: 'NuxtJS', category: 'Framework Vue', icon: 'N' },
  { label: 'Java', category: 'Backend & logique applicative', icon: 'J' }
]
</script>

<template>
  <section id="skills" class="py-20 lg:py-28" data-aos="fade-up" data-aos-delay="60">
    <div class="container-shell">
      <UiSectionTitle eyebrow="Compétences" title="Mon arsenal technique" align="center" />

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div v-for="(category, index) in skills" :key="category.key" data-aos="zoom-in" :data-aos-delay="100 + index * 80" class="rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_18px_38px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#082F5A]/30 dark:border-slate-700 dark:bg-[#0D1B2A]/80">
          <div class="mb-5 flex items-center justify-between">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ category.title }}</h3>
            <div class="flex h-11 w-11 items-center justify-center rounded-full bg-[#2E7D32]/10 text-sm font-semibold text-[#2E7D32]">
              {{ category.title.charAt(0) }}
            </div>
          </div>

          <ul class="space-y-3">
            <li v-for="item in category.items" :key="item" class="group flex items-center gap-3 rounded-2xl border border-transparent px-2 py-2 transition duration-300 hover:border-[#082F5A]/10 hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <span class="h-2.5 w-2.5 rounded-full bg-[#2E7D32]"></span>
              <span class="text-sm text-slate-700 dark:text-slate-200">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div v-for="(skill, index) in skillPreview" :key="skill.label" data-aos="fade-up" :data-aos-delay="150 + index * 90" class="rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#2E7D32]/30 dark:border-slate-700 dark:bg-[#0D1B2A]/80">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082F5A] text-sm font-semibold text-white">
              {{ skill.icon }}
            </div>
            <div>
              <p class="font-semibold text-slate-900 dark:text-white">{{ skill.label }}</p>
              <p class="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">{{ skill.category }}</p>
            </div>
          </div>
          <div class="h-px w-full bg-slate-200 dark:bg-slate-700"></div>
          <p class="mt-4 text-sm text-slate-600 dark:text-slate-300">Technologie utilisée dans la création d'interfaces, de produits et de solutions web modernes.</p>
        </div>
      </div>
    </div>
  </section>
</template>
