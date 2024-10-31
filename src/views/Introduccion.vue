<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8.my-3.order-1
        p(data-aos="fade-down") La cadena productiva de la carne en Colombia abarca desde la cría y engorde de bovinos hasta el transporte, sacrificio, corte, congelación y comercialización de la carne. Además, se generan subproductos como grasas, sebos y sangre, que se emplean en la producción de carnes embutidas, preparadas y frías. 
        .row.justify-content-center.p-0
          .col-lg-auto.p-0.bg2.j1(data-aos="fade-left")
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='') 

          .col.j1.bg1
            .p-2
              p(data-aos="fade-down").mb-0 En los últimos años, los ganaderos han invertido en la importación de material genético para mejorar las razas de carne, principalmente a través de convenios para la importación de semen de toros de alta calidad.
                          
      .col-lg-4.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')
        
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')        
      .col-lg-7
        p(data-aos="fade-down") De este modo, la producción cárnica en Colombia se sustenta en las especies Bos Indicus y Bos Taurus, en sus variedades puras, sintéticas y criollas, lo que contribuye de manera significativa al Producto Interno Bruto. Este sector ha logrado iniciar procesos de exportación gracias a la colaboración entre actores privados y entidades gubernamentales.       
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
