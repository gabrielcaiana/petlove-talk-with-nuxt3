<template>
  <div class="bg-white h-screen flex flex-col justify-between">
    <div>
      <AppHeader />
      <AppSearch />
    </div>

    <main class=" my-10">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>