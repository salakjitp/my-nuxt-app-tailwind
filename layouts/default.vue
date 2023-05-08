<template>
  <div>
    <AppHeader />
    <div class="p-10" style="min-height: calc(100vh - 120px)">
      <slot />
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
