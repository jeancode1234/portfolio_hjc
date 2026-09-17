<script setup lang="ts">
import { personal } from '~/data/personal'
import { translations } from '~/data/translations'

const { locale } = useLanguage()
const t = computed(() => translations[locale.value])
const heroItems = ['Laravel', 'VueJS', 'NuxtJS', 'TypeScript', 'Java', 'MySQL']
</script>

<template>
  <section id="home" class="relative overflow-hidden pt-16 pb-16 md:pt-20 lg:pt-24" data-aos="fade-up" data-aos-delay="100">
    <div class="absolute inset-0 pointer-events-none overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
      <div class="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#082F5A]/10 blur-3xl"></div>
      <div class="absolute right-8 top-24 h-40 w-40 rounded-full border border-[#2E7D32]/20"></div>
      <div class="absolute left-12 top-1/3 h-20 w-20 rounded-full border border-[#082F5A]/20"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,125,50,0.08),transparent_35%)]"></div>
      <div class="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:44px_44px]"></div>
    </div>

    <div class="container-shell relative z-10">
      <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="max-w-3xl" data-aos="fade-right" data-aos-delay="200">
          <UiBadge class="mb-6" tone="success">{{ t.hero.eyebrow }}</UiBadge>
          <p class="mb-3 text-lg font-medium text-[#082F5A] dark:text-slate-200">{{ t.hero.greeting }}</p>
          <h1 class="text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[5rem] dark:text-white">
            JEAN CABREL<br />
            <span class="text-[#082F5A] dark:text-[#dfeaf8]">HOUAFO</span>
          </h1>

          <h2 class="mt-6 text-2xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-200">
            {{ personal.title }}
          </h2>

          <p class="mt-6 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            {{ personal.about }}
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <UiBaseButton to="#projects">{{ t.hero.ctaProjects }}</UiBaseButton>
            <UiBaseButton href="#contact" variant="secondary">{{ t.hero.ctaContact }}</UiBaseButton>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="https://github.com/jeancode1234" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 hover:text-[#082F5A] dark:hover:text-white">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/HOUAFO-jean" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 hover:text-[#082F5A] dark:hover:text-white">
              <span>LinkedIn</span>
            </a>
          </div>

          <p class="mt-8 text-base font-medium text-slate-500 dark:text-slate-300">{{ personal.tagline }}</p>
        </div>

        <div class="relative flex items-center justify-center" data-aos="fade-left" data-aos-delay="250">
          <div class="relative h-[420px] w-full max-w-[520px] bg-[url('../../assets/images/code.png')] bg-cover bg-center">
            <div class="absolute inset-0 rounded-[2rem] border-0"></div>
            <div class="absolute inset-6 rounded-[2rem] border border-[#082F5A]/15 bg-[radial-gradient(circle_at_top_left,_rgba(8,47,90,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(46,125,50,0.12),transparent_35%)] dark:border-[#2E7D32]/30"></div>

            <div class="absolute left-8 top-10 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-[#0D1B2A]/90 floating-card">
              <span class="text-xs uppercase tracking-[0.2em] text-[#2E7D32]">Stack</span>
              <p class="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">Laravel</p>
            </div>

            <div class="absolute right-8 top-24 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-[#0D1B2A]/90 floating-card" style="animation-delay: 0.8s;">
              <p class="text-sm font-medium text-slate-700 dark:text-slate-200">VueJS</p>
            </div>

            <div class="absolute left-12 bottom-10 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-[#0D1B2A]/90 floating-card" style="animation-delay: 1.4s;">
              <p class="text-sm font-medium text-slate-700 dark:text-slate-200">NuxtJS</p>
            </div>

            <div class="absolute right-12 bottom-20 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-[#0D1B2A]/90 floating-card" style="animation-delay: 2s;">
              <p class="text-sm font-medium text-slate-700 dark:text-slate-200">TypeScript</p>
            </div>

            <div class="absolute inset-x-20 bottom-8 flex justify-center gap-2">
              <div v-for="(item, index) in heroItems" :key="item" class="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-[#0D1B2A]/90 dark:text-slate-200" :style="{ animationDelay: `${index * 200}ms` }">
                {{ item }}
              </div>
            </div>

            <div class="absolute inset-0 rounded-[2rem] opacity-20 [background:linear-gradient(rgba(8,47,90,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(8,47,90,0.15)_1px,transparent_1px)] [background-size:26px_26px]"></div>
          </div>
        </div>
      </div>

      <div class="mt-16 flex justify-center">
        <div class="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          <span>{{ t.hero.scroll }}</span>
          <span class="animate-bounce text-base text-[#082F5A] dark:text-[#2E7D32]">↓</span>
        </div>
      </div>
    </div>
  </section>
</template>
