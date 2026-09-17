<script setup lang="ts">
import { experiences } from '~/data/experiences'
</script>

<template>
  <section id="experience" class="py-20 lg:py-28" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <UiSectionTitle eyebrow="Expérience" title="Mon parcours professionnel" align="center" />

      <div class="relative mx-auto max-w-5xl">
        <div class="absolute left-6 top-0 h-full w-px bg-slate-300 dark:bg-slate-700 md:left-1/2"></div>

        <div v-for="(item, index) in experiences" :key="item.company" data-aos="fade-up" :data-aos-delay="80 + index * 100" class="relative mb-10">
          <div class="flex flex-col md:flex-row md:items-center">
            <div class="md:w-1/2 md:pr-10" :class="index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:pl-10 md:text-left'">
              <div class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">{{ item.period }}</div>
              <div class="rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-slate-700 dark:bg-[#0D1B2A]/80">
                <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ item.company }}</h3>
                <p class="mt-2 text-sm uppercase tracking-[0.16em] text-[#082F5A] dark:text-slate-300">{{ item.role }} — {{ item.type }}</p>
                <p class="mt-4 text-sm text-slate-600 dark:text-slate-300">{{ item.description }}</p>
                <ul class="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li v-for="achievement in item.achievements" :key="achievement" class="flex items-center gap-2">
                    <span class="text-[#2E7D32]">✓</span>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="relative z-10 my-5 flex w-full justify-center md:w-1/2 md:justify-center">
              <div class="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#082F5A] text-lg text-white shadow-lg dark:border-[#07111F] dark:bg-[#2E7D32]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
