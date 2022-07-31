<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pet = computed(() => route.params.slug)

 useHead({
    title: `${pet.value}`,
  })
</script>

<template>
  <h1>{{ pet }}</h1>
</template>