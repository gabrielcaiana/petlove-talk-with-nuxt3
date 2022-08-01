<script setup>
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-primary">
    <div class="container mx-auto p-6">
      <p class="text-white text-center">{{ `Petlove - Copyright ${year}` }}</p>
    </div>
  </footer>
</template>