<script setup lang="ts">
import type { ProjectCategory } from '~/data/projects'

interface Props {
  filters: Array<{ label: string; value: ProjectCategory }>
  selected: ProjectCategory
}

const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'update:filter', value: ProjectCategory): void }>()
</script>

<template>
  <div class="flex flex-wrap justify-center gap-3">
    <button
      v-for="filter in props.filters"
      :key="filter.value"
      type="button"
      class="rounded-full border px-4 py-2 text-sm font-medium transition duration-300"
      :class="props.selected === filter.value
        ? 'border-[#082F5A] bg-[#082F5A] text-white'
        : 'border-slate-200 bg-white/80 text-slate-700 hover:border-[#082F5A] hover:text-[#082F5A] dark:border-slate-700 dark:bg-[#0D1B2A]/80 dark:text-slate-200 dark:hover:text-white'"
      @click="emit('update:filter', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>
