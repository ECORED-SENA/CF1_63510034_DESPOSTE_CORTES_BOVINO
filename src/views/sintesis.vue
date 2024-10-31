<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-5.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama presenta información sobre la producción cárnica, la manipulación de alimentos y las herramientas básicas para el desposte. En la primera sección, se muestran las razas para la producción de carne en Colombia, clasificadas en razas puras de doble propósito, Bos Indicus, Bos Taurus y sus variantes sintéticas. También se incluyen otras razas. La segunda sección trata sobre los peligros en la manipulación de alimentos, divididos en peligros físicos, químicos y biológicos. Además, se destacan los tipos de contaminación, como la contaminación primaria, directa y cruzada. Por último, se mencionan las herramientas básicas para el desposte, que incluyen plantas de desposte, plantas de sacrificio y herramientas y utensilios para el desposte.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
