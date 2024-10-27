<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
</script>

<template>
  <div class="site">
    <BNav>
      <BNavItem v-if="$route.path === '/cas'" href="/">Valencià</BNavItem>
      <BNavItem v-else href="/cas">Castellano</BNavItem>
      <template #logo-append>Mazón no paga</template>
    </BNav>

    <slot />
    <div class="bg-white">
      <div class="container footer">
        <BFooter />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav-logo-append {
  margin-left: 1rem;
}

.nav-padding {
  display: none;
}

.footer {
  color: var(--white);
  padding: 1rem;
}
</style>