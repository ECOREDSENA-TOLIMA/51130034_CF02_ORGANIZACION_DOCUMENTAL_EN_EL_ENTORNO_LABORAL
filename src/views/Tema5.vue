<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 La foliación documental

    p.mb-5(data-aos="fade-left") La foliación es una tarea previa a cualquier empaste y proceso de descripción, en donde los documentos se deben clasificar, ordenar y depurar, para poder foliar todas las unidades documentales de una serie, dentro de una unidad de conservación o carpeta, numerándola de manera consecutiva al extremo superior derecho de la hoja, con un lápiz de mina negra y sin tachaduras.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La foliación es importante realizarla a medida que se va creando y alimentando el expediente, para así poder demostrar el desarrollo de los trámites.
        br
        br
        p.mb-0 Este proceso permite acceder de manera precisa a la información, a diversos instrumentos de control como formatos de control de préstamos, inventarios, TRD; así como de consulta como guías o catálogos. Su aplicación es esencial para las transferencias.
        br
        br
        p.mb-0 Cabe anotar que no se deben foliar documentos en soportes distintos al papel (casetes, discos digitales – CD, disquetes, videos, etc.), pero sí dejar constancia de su existencia y de la unidad documental a la que pertenecen.
        br
        br

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <i>Foliación.</i>
      .row.justify-content-center
        .col-lg-8.col-md-12.col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema5/2.svg', alt='Figura que contiene un ejemplo de foliación, donde se enumeran diferentes documentos en la esquina superior derecha, los cuales están dentro de una carpeta.')
          figure.movil
            img(src='@/assets/curso/temas/tema5/2_.svg', alt='Figura que contiene un ejemplo de foliación, donde se enumeran diferentes documentos en la esquina superior derecha, los cuales están dentro de una carpeta.')

</template>

<script>
export default {
  name: 'Tema3',
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
