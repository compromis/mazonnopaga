<script setup lang="ts">
import BCard from '@compromis/blobby/components/card/BCard.vue'

useHead({
  htmlAttrs: {
    lang: 'es',
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
          <p>En un año, hemos pasado de encontrarnos entre los territorios que antes pagaba a las empresas, a las PYMES y a los autónomos que trabajan con la Generalitat a ser los últimos en pagar de toda España (y eso si pagan).</p>
          <p>A esta situación de morosidad con las empresas, debemos sumar la cantidad de personas trabajadoras que no están cobrando sus nóminas, o no cobran lo que les corresponde, por los impagos de Mazón, así como las ayudas que ya tienen adjudicadas.</p>
          <p class="denounce">
            <a href="#contacta">Denúncia si estás sufriendo un impago</a>
          </p>
        </BCard>

        <p style="margin-top: 4rem; text-align: center;"><strong>Mazón <Annotated type="highlight">no paga</Annotated>:</strong></p>
      </section>
    </div>
    <BentoCardsCas />
    <SiteForm id="contacta" cas />
    <Share>
      <template #title>Haz difusión</template>
      <p>Comparte esta página con tus amistades.</p>
    </Share>
  </main>
</template>
