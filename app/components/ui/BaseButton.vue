<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button'
})

const classes = computed(() => {
  const common = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#07111F]'

  if (props.variant === 'secondary') {
    return `${common} border border-[#2E7D32] bg-[#2E7D32]/10 text-[#2E7D32] hover:-translate-y-0.5 hover:bg-[#2E7D32] hover:text-white active:scale-[0.98]`
  }

  if (props.variant === 'ghost') {
    return `${common} border border-slate-200 bg-transparent text-slate-700 hover:border-[#082F5A] hover:text-[#082F5A] dark:border-slate-700 dark:text-slate-200 dark:hover:border-white dark:hover:text-white`
  }

  return `${common} bg-[#082F5A] text-white hover:-translate-y-0.5 hover:bg-[#0b3d74] active:scale-[0.98]`
})
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="type"
    :class="classes"
  >
    <slot />
  </component>
</template>
