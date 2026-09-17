export const useScroll = () => {
  const scrollY = ref(0)
  const activeSection = ref('home')
  const showScrollTop = ref(false)

  const updateScroll = () => {
    if (typeof window === 'undefined') {
      return
    }

    scrollY.value = window.scrollY
    showScrollTop.value = window.scrollY > 500

    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
    let current = 'home'

    for (const section of sections) {
      const element = document.getElementById(section)
      if (!element) continue

      const rect = element.getBoundingClientRect()
      if (rect.top <= 180 && rect.bottom >= 180) {
        current = section
      }
    }

    activeSection.value = current
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToSection = (id: string) => {
    if (typeof document === 'undefined') return
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  onMounted(() => {
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScroll)
  })

  return {
    scrollY,
    activeSection,
    showScrollTop,
    scrollToTop,
    scrollToSection
  }
}
