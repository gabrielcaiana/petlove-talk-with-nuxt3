<template>
  <div class="bg-white h-screen flex flex-col justify-between">
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>