<template>
  <div class="bg-white h-screen flex flex-col justify-between">
    <div>
      <AppHeader />
      <AppSearch />
    </div>

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>