<script setup lang="ts">
import { personal } from '~/data/personal'
import { translations } from '~/data/translations'

const { locale } = useLanguage()
const t = computed(() => translations[locale.value])
</script>

<template>
  <footer class="border-t border-slate-200/80 bg-white/60 py-10 dark:border-slate-800 dark:bg-[#07111F]/80" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <div class="flex flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <h3 class="text-2xl font-semibold text-[#082F5A] dark:text-white">{{ personal.name }}</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ personal.title }}</p>
          <p class="mt-4 text-sm text-slate-500 dark:text-slate-400">Laravel • VueJS • NuxtJS • Java • MySQL</p>
        </div>

        <div class="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
          <a href="#home" class="hover:text-[#082F5A] dark:hover:text-white">{{ t.footer.home }}</a>
          <a href="#about" class="hover:text-[#082F5A] dark:hover:text-white">{{ t.footer.about }}</a>
          <a href="#skills" class="hover:text-[#082F5A] dark:hover:text-white">{{ t.footer.skills }}</a>
          <a href="#experience" class="hover:text-[#082F5A] dark:hover:text-white">{{ t.footer.experience }}</a>
          <a href="#projects" class="hover:text-[#082F5A] dark:hover:text-white">{{ t.footer.projects }}</a>
          <a href="#contact" class="hover:text-[#082F5A] dark:hover:text-white">{{ t.footer.contact }}</a>
        </div>

        <div class="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
          <a :href="personal.github" target="_blank" rel="noreferrer" class="hover:text-[#082F5A] dark:hover:text-white">GitHub</a>
          <a :href="personal.linkedin" target="_blank" rel="noreferrer" class="hover:text-[#082F5A] dark:hover:text-white">LinkedIn</a>
        </div>
      </div>

      <div class="mt-8 border-t border-slate-200/80 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © 2026 {{ personal.name }}
      </div>
    </div>
  </footer>
</template>
