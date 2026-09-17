<script setup lang="ts">
const stats = [
  { value: '3', label: 'Expériences professionnelles' },
  { value: '3+', label: 'Technologies Fullstack majeures' },
  { value: '3', label: 'Diplômes / formations supérieures' },
  { value: '1', label: 'Passion : créer des solutions digitales' }
]
</script>

<template>
  <section class="py-16 lg:py-20">
    <div class="container-shell">
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          v-for="(item, index) in stats"
          :key="item.label"
          class="rounded-3xl border border-slate-200/80 bg-white/70 p-7 text-center shadow-[0_16px_32px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-slate-700 dark:bg-[#0D1B2A]/80"
          :style="{ animationDelay: `${index * 120}ms` }"
        >
          <div class="text-4xl font-semibold text-[#082F5A] dark:text-white">{{ item.value }}</div>
          <p class="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
