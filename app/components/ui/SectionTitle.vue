<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'left'
})
</script>

<template>
  <div :class="['mb-10', align === 'center' ? 'mx-auto max-w-2xl text-center' : '']">
    <p v-if="eyebrow" class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#2E7D32]">
      {{ eyebrow }}
    </p>
    <h2 class="section-heading">
      {{ title }}
    </h2>
  </div>
</template>
