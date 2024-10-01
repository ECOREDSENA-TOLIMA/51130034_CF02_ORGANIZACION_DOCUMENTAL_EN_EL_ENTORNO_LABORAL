<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ordenación documental

    p.mb-4(data-aos="fade-left") Durante la ordenación de los documentos, es importante implementar varias acciones de carácter físico, con el objetivo de organizar, controlar y conservar la documentación. La ordenación documental es una actividad propia de la organización, basada en el establecimiento de secuencias naturales, cronológicas y/o alfabéticas, dentro de los grupos de documentos, una vez se hayan clasificado.
    p.mb-5(data-aos="fade-left") Lo anteriormente descrito, permite observar que la organización de documentos:

    .row.justify-content-center.mb-5(data-aos="Flip-up")
      .col-lg-10.col-12
        .container.BG01.px-4.px-md-5.pt-4
          .row.justify-content-center.p-4
            .col-lg-4.col-md-6.col-8.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/1.svg', alt='Imagen decorativa')
            .col-lg-7.col-12.mb-3
              p Primeramente, deriva en un <b>procedimiento de clasificación</b>.
              p Para posteriormente pasar a <b>la ordenación</b>.

    p.mb-4(data-aos="fade-left") Si no se cumple con estos dos pasos, la ordenación documental no estaría bien fundamentada; es decir, una empresa tendría la documentación bajo su custodia bien clasificada pero no ordenada.
    p.mb-4(data-aos="fade-left") Para ordenar los documentos, es necesario cumplir con el procedimiento documental claramente establecido, en donde se debe precisar qué documento va primero y cuál va después; para esto, se deben juntar los documentos de una serie y ordenarlos, de acuerdo a criterios establecidos por la entidad.
    p.mb-5(data-aos="fade-left") La eficiente ordenación documental permite el rápido acceso a la información, gracias a la correcta ubicación de los documentos. Unas de sus bondades, es permitir a la persona consultante, el comprender la información, gracias a la correcta secuencia en la ubicación física e interna de los documentos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La teoría archivística cuenta con un principio que resulta fundamental para establecer la disposición física de los documentos, este principio es conocido como Principio de Orden Original y se encuentra referido al hecho de que los documentos se van originando paulatinamente, según las etapas o pasos por los que debe pasar para cumplir su trámite; esto quiere decir que los documentos se origina uno detrás de otro y también se pueden producir documentos dentro de una misma serie, con soportes de otras instancias, lo cual implica que la disposición física de los documentos, debe respetar la secuencia de los trámites que los produjo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon2.color-secundario.p-4
          p.text-center Este principio es una herramienta que se debe utilizar <b>para una correcta y adecuada organización de archivos</b>.
      
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
