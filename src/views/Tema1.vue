<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Razas para la producción de carne en Colombia

    p(data-aos="fade-down").mb-4 La ganadería mundial, perteneciente al género #[i Bos], se divide en dos especies principales: #[i #[b Bos indicus y Bos taurus]]. Estas especies se distribuyen globalmente y se utilizan tanto para la producción de leche como para la de carne.
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.mb-4
          .col-lg-auto.mb-3.mb-lg-0.p-0.j1.brad-left 
            img.img-mov.brad-left(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='') 

          .col.j1.bg2.brad-right(data-aos="fade-left")
            .p-2
              p(data-aos="fade-down").mb-0 Ambas especies poseen características claramente diferenciadas. Por ejemplo, las especies #[i indicus], originarias de Asia, presentan estructuras anatómicas distintivas como el morrillo o joroba, la gola o corbatín, y un prepucio más largo. 

    p(data-aos="fade-down").mb-4 A continuación, se detallan las diferencias más relevantes entre ambas especies:   

    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido(data-aos="fade-left")
                  h5 Tabla 1.
                  span Diferencias entre #[i Bos indicus] y #[i Bos taurus]
                .tabla-a.color-acento-botones.mb-5(data-aos="fade-right")
                  table        
                    thead.bgth
                      tr
                        th Atributos
                        th.fst-italic  Bos indicus
                        th.fst-italic  Bos taurus
                    tbody
                      tr
                        td Apariencia 
                        td Corpulentos, musculosos, sin grasa subcutánea y sin grasa abundante. Esqueleto de huesos largos y finos, con índices de fortaleza física.
                        td Voluminosos, con abundante carne y grasa. Esqueleto de huesos cortos y gruesos, signos de gran precocidad.
                      tr
                        td Temperamento
                        td Activo y vivaz.
                        td Tranquilo o apático.
                      tr
                        td Cabeza
                        td Proporción mediana, larga y estrecha.
                        td Proporcionalmente pequeña, corta y ancha.
                      tr
                        td Orejas
                        td Largas, puntiagudas, móviles y/o #[i pendulosas].
                        td Cortas, no #[i pendulosas].
                      tr
                        td Cuernos
                        td Grandes y fuertes (excepto en el #[i Nelore]).
                        td Cortos y finos.
                      tr
                        td Cuello
                        td Mediano y largo.
                        td Corto a mediano.
                      tr
                        td Línea dorsal
                        td Cruz alta y dorso lomo algo más bajo.
                        td Es una sola línea horizontal.
                      tr
                        td Tórax
                        td Algo estrecho, pero profundo y largo.
                        td Amplio, con costillas bien arqueadas.
                      tr
                        td Pecho
                        td Estrecho y profundo.
                        td Ancho y profundo.
                      tr
                        td Espalda
                        td No muy musculosa.
                        td Musculosa.
                      tr
                        td Grupa
                        td Ancha, corta y oblicua.
                        td Amplia y horizontal.
                      tr
                        td Cuarto posterior
                        td Musculoso.
                        td Muy desarrollado.
                      tr
                        td Cola
                        td Implantada alta, larga y con forma de látigo.
                        td Inserción a nivel, corta y gruesa.
                      tr
                        td Giba
                        td Implantada en la cruz o dorso, muy voluminosa.
                        td Carece de giba.
                      tr
                        td Extremidades
                        td Largas, de huesos finos.
                        td Cortas y de huesos gruesos.
                      tr
                        td Piel
                        td Fina, de mayor área, formando pliegues colgantes en papada, vientre y prepucio, intensamente pigmentada.
                        td Textura espesa, generalmente sin pigmentación (razas como Aberdeen Angus, etc.).
                      tr
                        td Pelaje
                        td Cobertura pilosa con pelos cortos, finos, lacios y muy suaves.
                        td Pelos relativamente largos, rizados y ondulados. 
                      tr
                        td Color
                        td Piel negra o ébano y pelos blancos, colorados, grises o negros.
                        td Piel y pelos claros, excepto en algunas razas negras. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.1 Razas puras de la especie #[i Bos indicus] 

    .row.justify-content-center.mb-4 
      .col-lg-9.my-3.order-1
        p(data-aos="fade-down") Las razas puras de la especie Bos indicus se caracterizan por su gran resistencia a climas cálidos y tropicales, así como su capacidad de adaptación a condiciones ambientales adversas. Algunas especies son:
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")(data-aos="fade-left")
          .row.justify-content-center(titulo="<i>Guzerá</i>")
            .col-lg-8.my-3
              p El Guzerá se adapta fácilmente a ambientes adversos y tiene una gran capacidad de crecimiento en pastoreo. Además de ser un buen productor de carne, también ha demostrado ser una raza productora de leche gracias a sus excelentes cualidades, lo que le asegura una posición de predominancia en la ganadería tropical.

              p La vaca adulta pesa entre 500 y 650 kg, mientras que el toro alcanza entre 800 y 1000 kg. Los becerros al nacer pesan aproximadamente entre 32 y 35 kg. Es la raza más longeva dentro de las cebuinas, superando los 15 años de vida productiva. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='')    

          .row.justify-content-center(titulo="<i>Gyr</i>")
            .col-lg-8.my-3
              p Originaria de la península de Kathiawar, en la India, una región de clima muy cálido y suelos pobres y secos, el Gyr ha participado activamente en la formación de las razas Brahman Rojo e Indubrasil.

              p El Gyr es una raza versátil y muy apta para la producción de leche, contribuyendo al mejoramiento de razas lecheras en Colombia, creando animales de doble propósito destinados tanto a la carne como a la leche. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='') 

          .row.justify-content-center(titulo="<i>Nelore</i>")
            .col-lg-8.my-3
              p La raza Nelore corresponde a la Ongole de la India. Como parte del ganado Cebú, destaca por su resistencia a las enfermedades y su capacidad para subsistir en pastos secos, incluso en condiciones de escasez de forraje. Ha sido fundamental en la formación de ganado de carne que prospera en condiciones tropicales.

              p La vaca adulta pesa entre 550 y 600 kg, mientras que el toro puede alcanzar los 1000 kg. Los becerros al nacer pesan entre 26 y 28 kg, y el rendimiento en canal varía entre el 58 % y el 60 %. La longevidad de la vaca supera los 10 años de vida productiva. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='') 

      .col-lg-3.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')        

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.2 Razas sintéticas de la especie Bos indicus 

    p(data-aos="fade-down").mb-5 Las razas sintéticas de la especie Bos indicus son el resultado de cruzamientos controlados entre razas puras Bos indicus y otras razas, generalmente Bos taurus, con el fin de combinar las ventajas de ambas. Algunas especies son: 

    .row.justify-content-center.mb-4 
      .col-lg-9.my-3.order-1
        .row.justify-content-start.mb-4
          .col-auto(data-aos="flip-down")
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.brad.p-0.px-4
                h3.mb-0 Indubrasil  

        p(data-aos="fade-down") Esta raza se originó en Brasil mediante el cruce de las razas Gyr y Guzerá. Formada a principios del siglo XX, su objetivo era sintetizar las mejores características de las tres principales razas cebuinas: Nelore, Guzerá y Gyr.

        .row.justify-content-center.p-0
          .col-lg-auto.p-0.bg2.j1(data-aos="fade-left")
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='') 

          .col.j1.bg1
            .p-2
              p(data-aos="fade-down").mb-0 La vaca adulta pesa entre 600 y 650 kg, y el toro puede llegar a los 1100 kg. Los becerros al nacer pesan en promedio 31 kg, con un rendimiento en canal del 58 %. La longevidad de la vaca supera los 10 años de vida productiva. 
      .col-lg-3.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')                  


    .row.justify-content-center.mb-4 
      .col-lg-9.my-3.order-1
        .row.justify-content-start.mb-4
          .col-auto(data-aos="flip-down")
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.brad.p-0.px-4
                h3.mb-0.fst-italic Brahman   

        p(data-aos="fade-down") El #[i Brahman] es ideal para la producción de carne en países tropicales. Entre sus características más destacadas están su pelaje predominantemente blanco, especialmente en las hembras, aunque también puede ser ceniza en algunas áreas del cuerpo. El #[i Brahman] tiene un rápido crecimiento muscular, lo que le permite producir más carne en menos tiempo, siendo apto para el sacrificio a corta edad y con mayores pesos. Además, sus crías, al destete, pesan en promedio 35 kg más que las de razas puras.

        .row.justify-content-center.p-0
          .col-lg-auto.p-0.bg2.j1(data-aos="fade-left")
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/12.svg', alt='') 

          .col.j1.bg1
            .p-2
              p(data-aos="fade-down").mb-0 El peso de la vaca adulta varía entre 550 y 650 kg, mientras que el del toro puede alcanzar los 1000 kg. LOS terneros al nacer pesan entre 30 y 38 kg, y el rendimiento en canal promedio es del 58 %. La longevidad de la vaca supera los 12 años. En Colombia, el Brahman es considerado la raza cárnica por excelencia.
      .col-lg-3.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='') 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Razas puras de la especie #[i Bos Taurus]

    p(data-aos="fade-down") Las razas sintéticas de la especie #[i Bos indicus] son el resultado de cruzamientos controlados entre razas puras #[i Bos indicus] y otras razas, generalmente #[i Bos taurus], con el fin de combinar las ventajas de ambas. Algunas especies son: 
    .row.justify-content-center.mb-4 
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")(data-aos="fade-left")
          .row.justify-content-center(titulo="<i>Charolais</i>")
            .col-lg-8.my-3
              p Originaria de Francia, específicamente del distrito de Charolles, la #[i Charolais] es una de las razas más apreciadas por su capacidad productora de carne de alta calidad, con bajo contenido en grasa.

              p El peso de la vaca adulta varía entre 560 y 950 kg, mientras que el toro puede alcanzar los 1250 kg. Los terneros al nacer pesan entre 30 y 40 kg, y el rendimiento en canal promedio es del 62 %. La longevidad de la vaca supera los 12 años. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')       

          .row.justify-content-center(titulo="<i>Aberdeen Angus</i>")
            .col-lg-8.my-3
              p Originaria de Escocia, la raza #[i Aberdeen Angus] es conocida por su excelente calidad cárnica y su tamaño mediano. Existen dos variedades, una de pelaje negro y otra colorado.

              p El peso de la vaca oscila entre 500 y 550 kg, y el del toro entre 800 y 900 kg. Los terneros al nacer pesan entre 25 y 28 kg, con un rendimiento en canal del 65 % al 70 %. La longevidad de la vaca supera los 9 años. La raza Angus es famosa en Colombia por la terneza de su carne. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='')  

          .row.justify-content-center(titulo="<i>Wagyu</i>")
            .col-lg-8.my-3
              p Originaria de Japón, la raza #[i Wagyu], conocida por su carne marmoleada con altos niveles de grasa insaturada, es apreciada en todo el mundo por su suavidad, jugosidad y sabor excepcional.

              p El peso de la vaca varía entre 400 y 450 kg, mientras que el del toro se encuentra entre 600 y 700 kg. Los terneros al nacer pesan entre 26 y 28 kg, y el rendimiento en canal es del 55 %. La longevidad de la vaca supera los 8 años. En Colombia, existe un mercado exclusivo para la carne de #[i Wagyu], debido a los altos costos de sus cortes. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='')  

          .row.justify-content-center(titulo="<i>Hereford</i>")
            .col-lg-8.my-3
              p La raza #[i Hereford] se originó en Inglaterra, en el condado de #[i Hereford], una región con valles fértiles y pastizales de alta calidad. En su lugar de origen, los animales viven principalmente del pastoreo, lo que ha permitido que mantengan su rusticidad y habilidad para obtener su propio alimento. Esta raza se formó hace aproximadamente 250 años.

              p En Colombia, el #[i Hereford] se encuentra distribuido en varias zonas del país. Junto al Aberdeen Angus, es una de las razas cárnicas más importantes de Argentina.

              p El peso de la vaca oscila entre 550 y 620 kg, y el del toro entre 900 y 1100 kg. Los terneros al nacer pesan entre 30 y 35 kg. El rendimiento en canal es del 60 al 63 %. La longevidad de la vaca supera los 12 años. 
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='')       


    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Razas sintéticas de la especie #[i Bos Taurus] 

    p(data-aos="fade-down").mb-3 Las razas sintéticas de la especie Bos taurus son el resultado de cruzamientos entre razas puras de Bos taurus y otras razas, buscando aprovechar las mejores cualidades de cada una. Algunas especies son:      
    .row.justify-content-center.mb-4 
      .col-lg-4.col-md-6.my-3
        .bg5.h-100.brad1.p-0(data-aos="fade-right")
          img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='') 
          .p-3 
            h5.fst-italic(data-aos="fade-down") Simbrah
            p(data-aos="fade-down").mb-0 Híbrido compuesto por 5/8 de sangre Simmental y 3/8 de sangre #[i Brahman]. Esta mezcla ofrece mejor peso, rendimiento en canal, rusticidad y buena capacidad de crecimiento. Los terneros destetados pesan 280 kg al año, y los machos cebados alcanzan los 450 kg a los 20 meses. Rendimiento en canal: 58-60 %.    

      .col-lg-4.col-md-6.my-3
        .bg5.h-100.brad1.p-0(data-aos="fade-down")
          img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='') 
          .p-3 
            h5.fst-italic(data-aos="fade-down") Beefmaster
            p(data-aos="fade-down").mb-0 Raza desarrollada en Texas, compuesta por 1/2 #[i Brahman], 1/4 Shorthorn y 1/4 Hereford. Aunque tiene huesos más pesados que otras razas, presenta buen rendimiento en canal (67-69 %). Las vacas pesan entre 700-800 kg y los machos alcanzan entre 1100-1300 kg. 

      .col-lg-4.col-md-6.my-3
        .bg5.h-100.brad1.p-0(data-aos="fade-left")
          img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='') 
          .p-3 
            h5.fst-italic(data-aos="fade-down") Braford
            p(data-aos="fade-down").mb-0 Formada a partir de #[i Bos taurus] y #[i Bos indicus], con 3/8 Cebú y 5/8 #[i Hereford]. Raza resistente que se adapta a climas diversos, con alta conversión de pasto en carne. Los novillos cebados pesan entre 440-460 kg a los 22 meses. Rendimiento en canal: 60 %. Longevidad de la vaca: más de 8 años.    

    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Razas #[i Bos taurus] de doble propósito

    p(data-aos="fade-down").mb-3 Las razas #[i Bos taurus] de doble propósito son aquellas que se crían tanto para la producción de carne como para la producción de leche. Algunas especies son:    
    .row.justify-content-center.mb-4 
      .col-lg-4.col-md-6.my-3
        .bg5.h-100.brad1.p-0(data-aos="fade-right")
          img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='') 
          .p-3 
            h5.fst-italic(data-aos="fade-down") Red Poll
            p(data-aos="fade-down").mb-0 Desarrollada en Inglaterra en el siglo XIX, esta raza surge del cruce entre ganado Norfolk y Suffolk. Es de tamaño mediano, con vacas que pesan entre 544 y 771 kg, y toros que alcanzan los 907 kg. Los becerros al nacer pesan entre 30 y 40 kg. Rendimiento en canal: 60 %.    

      .col-lg-4.col-md-6.my-3
        .bg5.h-100.brad1.p-0(data-aos="fade-down")
          img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='') 
          .p-3 
            h5.fst-italic(data-aos="fade-down") Simmental
            p(data-aos="fade-down").mb-0 Raza de doble propósito, con toros que pesan 1000 kg y vacas de 750 kg. Los terneros al nacer pesan entre 30 y 35 kg. Presenta un buen rendimiento en canal (58 %) y es valorada por su producción de leche y carne. Longevidad de las vacas: más de 12 años.

      .col-lg-4.col-md-6.my-3
        .bg5.h-100.brad1.p-0(data-aos="fade-left")
          img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='') 
          .p-3 
            h5.fst-italic(data-aos="fade-down") Normando
            p(data-aos="fade-down").mb-0 Originaria de Francia, en las regiones de La Manche y Calvados. Adaptada a climas fríos y zonas de ladera, es conocida como la "reina de la ladera" en Colombia. Los becerros al nacer pesan entre 40 y 45 kg. Rendimiento en canal: 58 %. Carne comparable a la de Aberdeen Angus.                                   

    Separador 
    #t_1_6.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.6 Otras razas para la producción cárnica

    .row.justify-content-center.mb-4 
      .col-lg-8.my-3
        .row.justify-content-center.p-0.mb-4
          .col-lg-auto.p-0.bg4.j1(data-aos="fade-left")
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg', alt='') 

          .col.j1.bg1
            .p-2
              p(data-aos="fade-down").mb-0 Colombia es un país con un valioso patrimonio genético en razas criollas de ganado. La producción de estas razas se destina mayormente a ganaderías de doble propósito, que se encuentran distribuidas por todo el territorio nacional. 

        p(data-aos="fade-down") Entre las razas criollas colombianas se destacan:

        .bg7.p-4
          ul.lista-ul--color.lista-ul--separador.mb-0
            li 
              i.fas.fa-check-circle.color1
              span Blanco Orejinegro (BON) (y sus variedades: blanco orejimono, azul pintado y dos pelos)

            li 
              i.fas.fa-check-circle.color1
              span Romosinuano

            li 
              i.fas.fa-check-circle.color1
              span Costeño con Cuernos

            li 
              i.fas.fa-check-circle.color1
              span Hartón del Valle (y su variedad Sajón Hondo)

            li 
              i.fas.fa-check-circle.color1
              span Sanmartinero

            li 
              i.fas.fa-check-circle.color1
              span Casanareño

            li 
              i.fas.fa-check-circle.color1
              span Caqueteño

            li.mb-0 
              i.fas.fa-check-circle.color1
              span.mb-0 Chino Santandereano         


      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')                  

    p(data-aos="fade-down") Las razas sintéticas colombianas son:

    .row.justify-content-center
      .col-lg-5.my-3
        .row.justify-content-center.px-2
          .col-lg-auto.p-0.bg4.j1(data-aos="fade-left")
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='') 

          .col.j1.bg1
            .p-2
              h5(data-aos="fade-down") Velásquez
              p(data-aos="fade-down").mb-0 Compuesta por 50 % Red Poll, 25 % Brahman Rojo y 25 % Romosinuano.     

      .col-lg-5.my-3
        .row.justify-content-center.px-2
          .col-lg-auto.p-0.bg4.j1(data-aos="fade-left")
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='') 

          .col.j1.bg1
            .p-2
              h5(data-aos="fade-down") Lucerna
              p(data-aos="fade-down").mb-0 Compuesta por 30 % Hartón del Valle, 40 % Holstein y 30 % Shofthorn Lechera.                 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
