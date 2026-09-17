<script setup lang="ts">
interface Props {
  items: Array<{ label: string; href: string }>
  activeSection: string
}

const props = defineProps<Props>()
const emit = defineEmits(['navigate'])
</script>

<template>
  <div class="md:hidden">
    <div class="mt-3 rounded-3xl border border-slate-200/60 bg-white/80 p-4 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-[#0D1B2A]/90">
      <div class="flex flex-col gap-2">
        <button
          v-for="item in props.items"
          :key="item.href"
          type="button"
          class="rounded-2xl px-3 py-2 text-left text-sm font-medium transition duration-300"
          :class="props.activeSection === item.href.replace('#', '') ? 'bg-[#082F5A] text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'"
          @click="emit('navigate', item.href)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </div>
</template>
