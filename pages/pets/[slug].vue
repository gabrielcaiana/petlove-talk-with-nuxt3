<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pet = computed(() => route.params.slug)
</script>

<template>
  {{ pet }}
</template>