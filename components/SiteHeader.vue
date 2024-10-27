<template>
  <header v-motion-slide-visible-bottom class="header">
    <slot />
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    margin: 7rem 0 2rem;

    &:deep(svg) {
      width: 100%;
      max-width: 650px;
    }
  }
</style>