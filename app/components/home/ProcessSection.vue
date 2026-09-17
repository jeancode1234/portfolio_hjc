<script setup lang="ts">
const steps = [
  { number: '01', title: 'Comprendre', description: 'Analyser le contexte, les besoins et les attentes pour poser les bases du projet.' },
  { number: '02', title: 'Concevoir', description: 'Structurer l’architecture, les parcours et les choix techniques avec rigueur.' },
  { number: '03', title: 'Développer', description: 'Construire des solutions web robustes, lisibles et adaptées aux usages réels.' },
  { number: '04', title: 'Améliorer', description: 'Optimiser, tester et ajuster pour offrir une qualité durable et performante.' }
]
</script>

<template>
  <section class="py-20" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <UiSectionTitle eyebrow="Méthode" title="Ma façon de travailler" align="center" />

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div v-for="(step, index) in steps" :key="step.number" data-aos="flip-up" :data-aos-delay="100 + index * 90" class="rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-6 text-center shadow-[0_18px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-slate-700 dark:bg-[#0D1B2A]/80">
          <div class="text-3xl font-semibold text-[#082F5A] dark:text-white">{{ step.number }}</div>
          <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{{ step.title }}</h3>
          <div class="my-4 flex justify-center">
            <span class="block h-px w-8 bg-[#2E7D32]"></span>
          </div>
          <p class="text-sm leading-6 text-slate-600 dark:text-slate-300">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
