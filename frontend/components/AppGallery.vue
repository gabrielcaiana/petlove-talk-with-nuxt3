<script setup>
defineProps({
  breeds: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <div class="container m-auto">
    <ul class="flex max-w-[1200px] m-auto flex-wrap justify-center gap-8">
      <nuxt-link 
        v-for="item in breeds" 
        :key="item.id"
        class="card-zoom"
        :to="{
          name: 'breeds-slug',
          params: {
            slug: item.attributes.slug
          }
        }">
        <div :class="`card-zoom-image`">
          <img class="object-cover" :src="item.attributes.image" :alt="item.attributes.name">
        </div>
        <span class="card-zoom-text">{{ item.attributes.name }}</span>
      </nuxt-link>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.card-zoom {
  @apply relative flex flex-wrap items-center justify-center m-3 overflow-hidden shadow-xl w-80 h-96 rounded-m cursor-pointer;
}
.card-zoom-image {
  @apply absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover;
}

.card-zoom-image img {
  height: inherit;
}
.card-zoom-text {
  @apply absolute text-title-xs font-black transition-all duration-500 ease-in-out transform scale-150 text-neutral-light opacity-60;
}
.card-zoom:hover .card-zoom-image {
  @apply scale-150;
}
.card-zoom:hover .card-zoom-text {
  @apply scale-100;
}
</style>