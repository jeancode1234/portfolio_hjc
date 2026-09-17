<script setup lang="ts">
const services = [
  {
    title: 'Développement Fullstack',
    description: 'Conception d’applications web complètes, ambitieuses et adaptées aux besoins réels des utilisateurs et des entreprises.'
  },
  {
    title: 'Frontend moderne',
    description: 'Interfaces fluides, lisibles et centrées sur l’expérience utilisateur avec VueJS et NuxtJS.'
  },
  {
    title: 'Backend & API',
    description: 'Développement de services backend, intégrations et API REST fiables et évolutives.'
  },
  {
    title: 'Formation Web',
    description: 'Transmission des connaissances en développement web avec une approche pédagogique claire et concrète.'
  }
]
</script>

<template>
  <section class="py-20 lg:py-28" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <UiSectionTitle eyebrow="Services" title="Ce que je peux faire" align="center" />

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div v-for="(service, index) in services" :key="service.title" data-aos="zoom-in-up" :data-aos-delay="100 + index * 90" class="rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_16px_32px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#2E7D32]/40 dark:border-slate-700 dark:bg-[#0D1B2A]/80" :style="{ animationDelay: `${index * 120}ms` }">
          <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082F5A] text-lg font-semibold text-white">0{{ index + 1 }}</div>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ service.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
