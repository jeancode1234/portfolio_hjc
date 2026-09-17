<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 700,
    once: true,
    offset: 30,
    easing: 'ease-out-cubic'
  })
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
