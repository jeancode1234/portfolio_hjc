<script setup lang="ts">
import { personal } from '~/data/personal'
import { translations } from '~/data/translations'

const { activeSection, scrollToSection, scrollY } = useScroll()
const { isDark, toggleTheme } = useTheme()
const { locale, toggleLanguage } = useLanguage()
const menuOpen = ref(false)

const t = computed(() => translations[locale.value])
const navItems = computed(() => t.value.nav)

const handleNavClick = (href: string) => {
  menuOpen.value = false
  const sectionId = href.replace('#', '')
  scrollToSection(sectionId)
}

const onResize = () => {
  if (window.innerWidth >= 768) {
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <header class="sticky top-0 z-50 transition-all duration-300">
    <nav
      class="glass-panel mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6"
      :class="scrollY > 40 ? 'border border-slate-200/60 bg-white/70 shadow-lg dark:border-slate-700 dark:bg-[#0D1B2A]/80' : 'border border-transparent bg-transparent shadow-none'"
    >
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#082F5A] text-sm font-semibold text-white shadow-md">
          JC
        </div>
        <div class="hidden sm:block">
          <p class="text-sm font-semibold text-[#082F5A] dark:text-white">Jean Cabrel</p>
        </div>
      </div>

      <div class="hidden items-center gap-8 md:flex">
        <button
          v-for="item in navItems"
          :key="item.href"
          type="button"
          class="group relative text-sm font-medium transition duration-300"
          :class="activeSection === item.href.replace('#', '') ? 'text-[#082F5A] dark:text-white' : 'text-slate-600 hover:text-[#082F5A] dark:text-slate-300 dark:hover:text-white'"
          @click="handleNavClick(item.href)"
        >
          <span class="relative inline-block pb-1">
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 h-px w-full origin-left bg-[#082F5A] transition-transform duration-300 group-hover:scale-x-100 dark:bg-white"
              :class="activeSection === item.href.replace('#', '') ? 'scale-x-100' : 'scale-x-0'"
            />
          </span>
        </button>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="hidden rounded-full border border-[#082F5A]/20 bg-white/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#082F5A] transition duration-300 hover:bg-[#082F5A] hover:text-white md:inline-flex"
          @click="toggleLanguage"
        >
          {{ locale === 'fr' ? 'EN' : 'FR' }}
        </button>

        <a
          href="/Houafo_jean_cabrel.pdf"
          target="_blank"
          rel="noreferrer"
          class="hidden rounded-full border border-[#082F5A]/20 bg-white/40 px-4 py-2 text-sm font-medium text-[#082F5A] transition duration-300 hover:bg-[#082F5A] hover:text-white md:inline-flex"
        >
          {{ personal.cvLabel }}
        </a>

        <button
          type="button"
          aria-label="Changer le thème"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-lg text-[#082F5A] transition duration-300 hover:border-[#082F5A] hover:text-[#082F5A] dark:border-slate-700 dark:bg-[#0D1B2A]/80 dark:text-white"
          @click="toggleTheme"
        >
          {{ isDark ? '☀' : '☾' }}
        </button>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-xl text-[#082F5A] md:hidden dark:border-slate-700 dark:bg-[#0D1B2A]/80 dark:text-white"
          aria-label="Ouvrir le menu"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? '×' : '☰' }}
        </button>
      </div>
    </nav>

    <div v-if="menuOpen" class="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200/60 bg-white/80 p-4 shadow-xl backdrop-blur-md md:hidden dark:border-slate-700 dark:bg-[#0D1B2A]/90">
      <div class="flex flex-col gap-2">
        <button
          v-for="item in navItems"
          :key="item.href"
          type="button"
          class="rounded-2xl px-3 py-2 text-left text-sm font-medium transition duration-300"
          :class="activeSection === item.href.replace('#', '') ? 'bg-[#082F5A] text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'"
          @click="handleNavClick(item.href)"
        >
          {{ item.label }}
        </button>
        <button
          type="button"
          class="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          @click="toggleLanguage"
        >
          {{ locale === 'fr' ? 'Switch to English' : 'Passer au français' }}
        </button>
      </div>
    </div>
  </header>
</template>
