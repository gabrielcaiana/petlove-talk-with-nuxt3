<script setup>
  import { ref, computed } from 'vue'
  import breeds from '~/mocks/breed.json'
  const search = ref(null)
  let results = ref([])

  const processChange = computed(() => useDebounceFn(() => filteredBreeds(), 1000))

  const filteredBreeds = () => {
    results.value = []
    const term = search.value.toLowerCase()
    breeds.filter(breed => breed.name.toLowerCase().includes(term) && results.value.push(breed))
  }
</script>

<template>
  <div class="bg-primary p-6 flex flex-col items-center">
    <h2 class="text-body md:text-title-s mb-4 text-white">Olá, Pesquise por uma raça de cachorro</h2>
    <div class="relative w-full md:w-1/2">
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <img class="left-0" src="~/assets/icons/search.svg" alt="ícone de lupa" width="24" />
        </div>
        <input
          id="default-search"
          v-model="search"
          type="search"
          class="block p-4 pl-10 w-full text-sm text-neutral-dark bg-neutral-light rounded-lg border border-neutral focus:ring-neutral-dark focus:border-neutral-dark"
          placeholder="Pesquise por uma raça de cachorro"
          required
          @input="processChange"
        />
      </div>

      <!-- list breeds -->
      <div
        v-show="search"
        class="w-full rounded-lg shadow-md shadow-neutral-dark p-6 absolute bg-white z-10"
      >
        <ul class="flex flex-col">
          <nuxt-link
            v-for="breed in results"
            :key="breed.id"
            :to="{
              name: 'breeds-slug',
              params: {
                slug: breed.slug
              }
            }"
            class="py-2 text-neutral-dark cursor-pointer hover:text-primary-light transition duration-300 ease-in-out"
            @click.native="search = ''"
          >
          {{ breed.name }}
          </nuxt-link>
          <p v-show="!results.length" class="text-neutral">
            Pesquise por uma raça existente...
          </p>
        </ul>
      </div>
    </div>
  </div>
</template>