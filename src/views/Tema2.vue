<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistema de gestión de calidad en los documentos —Norma ISO 15489—
    
    p.mb-5(data-aos="fade-left") Los principios para la gestión de documentos y los requisitos básicos para el establecimiento de buenas prácticas, que precisen la implantación de un marco de prácticas que mejoren de forma sistemática y efectiva, la creación y mantenimiento de sus documentos, de acuerdo con las políticas y objetivos de la organización, se encuentra orientado por la norma ISO 15489.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta normativa, expresa un método específico para esquematizar e implementar el sistema de gestión de documentos, concretar los procedimientos técnicos, crear las herramientas principales y establecer las actividades de evaluación, medición y aprendizaje, que conducen a la mejora continua del sistema.

    p.mb-5(data-aos="fade-left") La norma ISO 15489, está estructurada en dos partes, relacionadas con la información y documentación:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.desktop
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/2.svg', alt='Imagen decorativa')

          div.p-4(x="38%" y="28%" tooltip="Generalidades" numero="+")
            h5 Generalidades
            p Define lo esencial de la norma, precisando sus conceptos básicos, las directrices que fijan los requisitos, a manera de requerimientos esenciales para la gestión de documentos en las organizaciones. Se especifican aspectos a tener en cuenta, con el fin de garantizar que una organización cree y gestione los documentos que necesita. Los aspectos contemplados para implementar un plan de gestión de documentos son los siguientes:
            p - Cuadro reglamentario.
            p - Estrategia y responsabilidades.
            p - Obligaciones de la gestión de documentos.
            p - Delineación y aplicación de un sistema de gestión de documentos.
            p - Métodos e inspección de la gestión de documentos.
            p - Control y auditoría.
            p - Formación.

          div.p-4(x="63%" y="23%" tooltip="Directrices" numero="+")
            h5 Directrices
            p Es un documento técnico que, suministra unas técnicas de implementación de un sistema de gestión de documentos, según los principios puntualizados en el primer segmento de la norma. Así, se insiste específicamente en las habilidades y los métodos de diseño y aplicación; igualmente, fija las directrices para la concreción de procesos y los principales instrumentos en la gestión de documentos. Esta segunda parte, tiene relación con el documento técnico, el cual se enfoca más de forma sistemática, con el fin que el personal de expertos en gestión de documentos, pueda dar una mejor aplicación a la tramitación documental en sus respectivas organizaciones.

      .col-md-10.col-12.movil
        figure
          img(src='@/assets/curso/temas/tema2/2_.svg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema2',
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
