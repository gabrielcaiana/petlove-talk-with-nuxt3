<script setup>
  import { ref, computed, reactive } from 'vue'
  const search = ref(null)
  const results = reactive([])

  const processChange = computed(() => useDebounceFn(() => filteredPets(), 1000))
  const filteredPets = () => pets.filter(pet => {
    if(pet.name.toLowerCase() === search.value.toLowerCase()) return results.push(pet)
  })

  const pets = reactive([
    {
      id: 1,
      name: 'Cat',
      slug: 'cat'
    },
     {
      id: 2,
      name: 'Dog',
      slug: 'dog'
    },
     {
      id: 3,
      name: 'Fish',
      slug: 'fish'
    }
  ])
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

      <!-- list pets -->
      <div
        v-show="results.length && search"
        class="w-full rounded-lg shadow-md shadow-neutral-dark p-6 absolute bg-white z-10"
      >
        <ul class="flex flex-col">
          <nuxt-link
            v-for="pet in results"
            :key="pet.id"
            :to="{
              name: 'pets-slug',
              params: {
                slug: pet.slug
              }
            }"
            class="py-2 text-neutral-dark cursor-pointer hover:text-primary-light transition duration-300 ease-in-out"
            @click.native="search = ''"
          >
          {{ pet.name }}
          </nuxt-link>
        </ul>

        <p v-if="!pets.length" class="text-neutral-dark">
          Nenhuma raça encontrada
        </p>
      </div>
    </div>
  </div>
</template>