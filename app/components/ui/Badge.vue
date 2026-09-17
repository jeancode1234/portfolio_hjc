<script setup lang="ts">
interface Props {
  tone?: 'primary' | 'success' | 'neutral'
}

withDefaults(defineProps<Props>(), {
  tone: 'primary'
})

const tones = {
  primary: 'border-[#082F5A]/20 bg-[#082F5A]/5 text-[#082F5A] dark:bg-[#082F5A]/20 dark:text-white',
  success: 'border-[#2E7D32]/20 bg-[#2E7D32]/10 text-[#2E7D32]',
  neutral: 'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
}
</script>

<template>
  <span :class="['inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.08em] uppercase', tones[tone]]">
    <slot />
  </span>
</template>
