<script setup>
  useHead({
  title: 'Home',
})
const { x, y } = useMouse()
</script>

<template>
  <h1 class="text-primary p-14 font-medium">Home</h1>

  <div class="flex bg-primary-dark rounded-m p-3 w-10 text-white ">box</div>

  <div>pos: {{x}}, {{y}}</div>
</template>