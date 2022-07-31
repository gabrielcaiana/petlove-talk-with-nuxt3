<template>
  <div class="bg-white h-screen">
    <AppHeader />
    <AppSearch />

    <main class="mb-15">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>