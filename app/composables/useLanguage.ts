export type Locale = 'fr' | 'en'

export const useLanguage = () => {
  const locale = useState<Locale>('locale', () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('site-locale') as Locale | null
      if (saved === 'fr' || saved === 'en') {
        return saved
      }
    }

    return 'fr'
  })

  const setLocale = (nextLocale: Locale) => {
    locale.value = nextLocale

    if (import.meta.client) {
      document.documentElement.lang = nextLocale
      localStorage.setItem('site-locale', nextLocale)
    }
  }

  const toggleLanguage = () => {
    setLocale(locale.value === 'fr' ? 'en' : 'fr')
  }

  const isFrench = computed(() => locale.value === 'fr')

  onMounted(() => {
    if (import.meta.client) {
      document.documentElement.lang = locale.value
    }
  })

  return {
    locale,
    isFrench,
    setLocale,
    toggleLanguage
  }
}
