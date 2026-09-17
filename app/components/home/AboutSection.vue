<script setup lang="ts">
import { personal } from '~/data/personal'
import { translations } from '~/data/translations'

const { locale } = useLanguage()
const t = computed(() => translations[locale.value])
</script>

<template>
  <section id="about" class="py-20 lg:py-28" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <UiSectionTitle :eyebrow="t.about.eyebrow" :title="t.about.title" />

      <div class="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div class="relative mx-auto w-full max-w-md" data-aos="zoom-in-right" data-aos-delay="120">
          <div class="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,_rgba(46,125,50,0.12),transparent_57%)]"></div>
          <div class="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-4 shadow-xl dark:border-slate-700 dark:bg-[#0D1B2A]/80">
            <img
              src="../../assets/images/jc.jpg"
              alt="Portrait de Jean Cabrel Houafo"
              class="h-[440px] w-full rounded-[1.5rem] object-cover"
              loading="lazy"
            />
          </div>
          <div class="absolute -bottom-6 left-6 rounded-2xl border border-[#082F5A]/20 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-sm dark:border-slate-700 dark:bg-[#0D1B2A]/90">
            <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#082F5A] dark:text-slate-200">{{ t.about.badge }}</p>
            <p class="mt-2 text-lg font-semibold text-slate-800 dark:text-white">{{ t.about.role }}</p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="160">
          <p class="text-lg leading-8 text-slate-600 dark:text-slate-300">
            {{ personal.summary }}
          </p>

          <div class="mt-8 grid gap-5 sm:grid-cols-2">
            <div class="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-slate-700 dark:bg-[#0D1B2A]/70">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">{{ t.about.parcours }}</p>
              <p class="mt-2 text-base text-slate-700 dark:text-slate-200">{{ t.about.parcoursText }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-slate-700 dark:bg-[#0D1B2A]/70">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">{{ t.about.expertise }}</p>
              <p class="mt-2 text-base text-slate-700 dark:text-slate-200">{{ t.about.expertiseText }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-slate-700 dark:bg-[#0D1B2A]/70">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">{{ t.about.valeurs }}</p>
              <p class="mt-2 text-base text-slate-700 dark:text-slate-200">{{ t.about.valeursText }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-slate-700 dark:bg-[#0D1B2A]/70">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">{{ t.about.approche }}</p>
              <p class="mt-2 text-base text-slate-700 dark:text-slate-200">{{ t.about.approcheText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
