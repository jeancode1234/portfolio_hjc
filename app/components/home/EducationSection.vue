<script setup lang="ts">
import { education } from '~/data/education'
</script>

<template>
  <section class="py-20" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <UiSectionTitle eyebrow="Formation" title="Mon parcours académique" align="center" />

      <div class="relative mx-auto max-w-5xl">
        <div class="absolute left-5 top-0 h-full w-px bg-slate-300 dark:bg-slate-700"></div>

        <div v-for="(item, index) in education" :key="item.period" data-aos="fade-left" :data-aos-delay="120 + index * 90" class="relative mb-8 pl-10">
          <span class="absolute left-0 top-7 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-[#082F5A] shadow-lg dark:bg-[#2E7D32]"></span>
          <div class="rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-slate-700 dark:bg-[#0D1B2A]/80">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D32]">{{ item.period }}</p>
            <h3 class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{{ item.title }}</h3>
            <p class="mt-2 text-base text-slate-600 dark:text-slate-300">{{ item.institution }}, {{ item.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
