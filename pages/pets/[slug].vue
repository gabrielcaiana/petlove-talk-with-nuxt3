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

    <section v-else>
      <div class="flex flex-col md:flex-row gap-8 m-4 md:m-0">
        <img :src="pet.image.url" :alt="pet.name" class="rounded-m" width="600">

        <div>
          <h1 class="text-title-m my-4 text-neutral-darkest">{{ pet.name }}</h1>
          <p class="text-neutral-dark leading-relaxed">
            {{ pet.description }}
          </p>
        </div>
      </div>

      <hr class="my-10 bg-neutral-light" />

      <div class="flex flex-col md:flex-row gap-8 m-4 md:m-0">
        <div class="w-[600px]">
          <h2 class="text-title-s my-4 text-neutral-darkest">Pelagem</h2>
          <p class="text-neutral-dark leading-relaxed">
            {{ pet.pelage }}
          </p>
        </div>

        <div class="h-[300px] w-0.5 bg-neutral-light" />

        <div>
          <h2 class="text-title-s my-4 text-neutral-darkest">Características do seu {{ pet.name }}</h2>
          <ul class="text-neutral-dark leading-relaxed">
            <li v-for="item in pet.particulars" class="flex justify-between mb-4 relative">
              <span>{{ item.name }}</span>
              <ul class="flex gap-2 absolute right-0">
                <li v-for="i in 5" class="bg-neutral-light rounded-circle w-6 h-6"></li>
              </ul>
               <ul class="flex gap-2">
                <li v-for="circle in item.value" class="bg-primary rounded-circle w-6 h-6 z-10"></li>
              </ul>
            </li>
          </ul>  
        </div>
      </div>  
    </section>
 </div>
</template>