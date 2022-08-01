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
  pet.value = breeds.find(breed => breed.id === Number(slug.value))
}

onMounted(() => {
  fetchPet()
})
</script>

<template>
 <div class="flex justify-center">
    <AppSpinner v-if="!pet" />
   <pre v-else>{{ pet }}</pre>
 </div>
</template>