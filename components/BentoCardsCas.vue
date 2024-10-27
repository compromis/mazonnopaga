<template>
  <section class="bento-cards">
    <div class="card shadow rent" v-motion-slide-visible-bottom>
      <h3>El bono alquiler</h3>
      <img src="~/assets/images/keys.png" alt="Claus" />
    </div>
    <div class="card shadow salary" v-motion-slide-visible-bottom :delay="100">
      <h3>Nóminas completas</h3>
      <p>al personal de los hospitales de Dénia, la Ribera, Torrevieja y Manises</p>
      <img src="~/assets/images/stethoscope.png" alt="Estetoscopi" />
    </div>
    <div class="card shadow schools" v-motion-slide-visible-bottom :delay="200">
      <h3>Nuevas escuelas</h3>
      <p>y la construcción de institutos</p>
      <img src="~/assets/images/escola.png" alt="Escola" />
    </div>
    <div class="card shadow social" v-motion-slide-visible-bottom>
      <h3>El salario correspondiente</h3>
      <p>al personal de servicios sociales</p>
      <img src="~/assets/images/elderly.png" alt="" />
    </div>
    <div class="card shadow hospital" v-motion-slide-visible-bottom :delay="100">
      <h3>Horas extra</h3>
      <p>de las intervenciones quirúrgicas ni las preubas radiológicas que se hacen por la tarde</p>
      <img src="~/assets/images/hospital.png" alt="" />
    </div>
    <div class="card shadow care" v-motion-slide-visible-bottom :delay="200">
      <h3>El aumento de grado de dependencia</h3>
      <p>recortando la ayuda que tienen aprobada</p>
      <img src="~/assets/images/walker.png" alt="" />
    </div>
  </section>
</template>
