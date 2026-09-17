export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export const useContact = () => {
  const form = ref<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const isSubmitting = ref(false)
  const status = ref<'idle' | 'success' | 'error'>('idle')
  const feedback = ref('')

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const validate = () => {
    if (!form.value.name.trim()) {
      return 'Le nom complet est requis.'
    }

    if (!validateEmail(form.value.email.trim())) {
      return 'Une adresse e-mail valide est requise.'
    }

    if (!form.value.subject.trim()) {
      return 'Le sujet est requis.'
    }

    if (!form.value.message.trim() || form.value.message.trim().length < 20) {
      return 'Le message doit contenir au moins 20 caractères.'
    }

    return ''
  }

  const submit = async () => {
    const error = validate()

    if (error) {
      status.value = 'error'
      feedback.value = error
      return false
    }

    isSubmitting.value = true
    status.value = 'idle'
    feedback.value = ''

    await new Promise((resolve) => setTimeout(resolve, 1200))

    isSubmitting.value = false
    status.value = 'success'
    feedback.value = 'Message préparé avec succès. Connectez cette logique à une API pour l’envoyer réellement.'

    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    return true
  }

  return {
    form,
    isSubmitting,
    status,
    feedback,
    submit
  }
}
