export type ThemeMode = 'light' | 'dark'

export const useTheme = () => {
  const theme = useState<ThemeMode>('theme', () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme-preference') as ThemeMode | null
      if (saved === 'dark' || saved === 'light') {
        return saved
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    return 'light'
  })

  const applyTheme = (nextTheme: ThemeMode) => {
    theme.value = nextTheme

    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      document.documentElement.style.colorScheme = nextTheme
      localStorage.setItem('theme-preference', nextTheme)
    }
  }

  const isDark = computed(() => theme.value === 'dark')

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const setTheme = (nextTheme: ThemeMode) => {
    applyTheme(nextTheme)
  }

  onMounted(() => {
    applyTheme(theme.value)
  })

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme
  }
}
