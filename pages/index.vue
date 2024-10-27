<script setup lang="ts">
import BCard from '@compromis/blobby/components/card/BCard.vue'

useHead({
  htmlAttrs: {
    lang: 'ca',
  },
})

useSeoMeta({
  title: 'Mazón no paga - Compromís',
  ogTitle: 'Mazón no paga - Compromís',
  description: 'Carlos, NO PAGAS. Y aquí vamos a destapar TODAS TUS MENTIRAS',
  ogDescription: 'Carlos, NO PAGAS. Y aquí vamos a destapar TODAS TUS MENTIRAS',
  ogImage: 'https://mazon-no-paga.compromis.net/images/ogimage.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main>
    <div class="container">
      <SiteHeader>
        <SiteTitle />
      </SiteHeader>
      <section class="text text-intro">
        <h1 v-motion-fade-visible class="visually-hidden">
          Mazón no paga
        </h1>

        <Languages v-motion-slide-visible-bottom :delay="100" />

        <BCard padded shadow v-motion-slide-visible-bottom :delay="300">
          <h2 style="text-wrap: balance;">Carlos, <Annotated type="highlight">NO PAGAS</Annotated>. Aquí vamos a destapar <Annotated>todas tus mentiras</Annotated>...</h2>
          <p>En un any, em passat de trobar-nos entre els territoris que abans pagaba a les empreses, a les PIMES i als autònoms que treballen amb la Generalitat a ser els últims en pagar de tota Espanya (i això si és que paguen).</p>
          <p>A esta situació de morositat amb les empreses, hem de sumar la quantitat de persones treballadores que no estan cobrant les seues nòmines, o no cobren allò que els correspon, pels impagaments de Mazón, com tampoc les ajudes que ja tenen adjudicades.</p>
          <p class="denounce">
            <a href="#contacta">Denuncia si estàs patint un impagament</a>
          </p>
        </BCard>

        <p style="margin-top: 4rem; text-align: center;"><strong>Mazón <Annotated type="highlight">no paga</Annotated>:</strong></p>
      </section>
    </div>
    <BentoCards />
    <SiteForm id="contacta" />
    <Share>
      <template #title>Fes-ne difusió!</template>
      <p>Comparteix aquesta pàgina amb les teues amistats.</p>
    </Share>
  </main>
</template>
