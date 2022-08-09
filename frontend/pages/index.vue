<script setup>
import useBreeds from '~/composables/useBreeds'
  useHead({
    title: 'Home',
  })

  const { data } = await useBreeds()
</script>

<template>
 <div v-if="!data" class="flex justify-center">
    <AppSpinner />
  </div>
  <AppGallery v-else :breeds="data.breeds?.data"  />
</template>