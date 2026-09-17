<script setup lang="ts">
const { showScrollTop, scrollToTop } = useScroll()
</script>

<template>
  <button
    v-if="showScrollTop"
    type="button"
    aria-label="Retour en haut"
    class="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#082F5A] text-xl text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#0b3d74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#07111F]"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>
