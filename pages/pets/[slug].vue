<script setup>
import breeds from '~/mocks/breed.json'
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const slug = computed(() => route.params.slug)
const route = useRoute()

useHead({
  title: `${slug.value}`,
})

const delay = () => new Promise(resolve => setTimeout(resolve, 2000))

let pet = ref(null)

const fetchPet = async () => {
  await delay()
  pet.value = breeds.find(breed => breed.slug === slug.value)
}

onMounted(() => {
  fetchPet()
})
</script>

<template>
 <div class="container m-auto">
    <div v-if="!pet" class="flex justify-center">
      <AppSpinner />
    </div>

   <div v-else class="flex flex-col md:flex-row gap-8 m-4 md:m-0">
    <img :src="pet.image.url" :alt="pet.name" class="rounded-m" width="600">

    <div>
      <h1 class="text-title-m my-4 text-neutral-darkest">{{ pet.name }}</h1>
      <p class="text-neutral-dark leading-relaxed">
        {{ pet.description }}
      </p>
    </div>
   </div>
 </div>
</template>