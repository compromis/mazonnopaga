<template>
  <section class="bento-cards">
    <div class="card shadow rent" v-motion-slide-visible-bottom>
      <h3>El bo lloguer</h3>
      <img src="~/assets/images/keys.png" alt="Claus" />
    </div>
    <div class="card shadow salary" v-motion-slide-visible-bottom :delay="100">
      <h3>Nòmines completes</h3>
      <p>al personal dels hospitals de Dénia, la Ribera, Torrevieja i Manises</p>
      <img src="~/assets/images/stethoscope.png" alt="Estetoscopi" />
    </div>
    <div class="card shadow schools" v-motion-slide-visible-bottom :delay="200">
      <h3>Noves escoles</h3>
      <p>i la construcció d'instituts</p>
      <img src="~/assets/images/escola.png" alt="Escola" />
    </div>
    <div class="card shadow social" v-motion-slide-visible-bottom>
      <h3>El salari corresponent</h3>
      <p>al personal de serveis socials</p>
      <img src="~/assets/images/elderly.png" alt="" />
    </div>
    <div class="card shadow hospital" v-motion-slide-visible-bottom :delay="100">
      <h3>Hores extra</h3>
      <p>de les intervencions quirúrgiques ni les proves radiològiques que es fan per les vesprades</p>
      <img src="~/assets/images/hospital.png" alt="" />
    </div>
    <div class="card shadow care" v-motion-slide-visible-bottom :delay="200">
      <h3>L'augment de grau de dependència</h3>
      <p>retallant l'ajuda que tenen aprovades</p>
      <img src="~/assets/images/walker.png" alt="" />
    </div>
  </section>
</template>
