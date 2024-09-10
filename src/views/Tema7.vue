<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Inventario único documental
    
    p.mb-4(data-aos="fade-left") El inventario documental es una herramienta de recuperación de la información, la cual se presenta de manera ordenada, detallada y precisa, de acuerdo con las series o asuntos de un fondo documental; es decir, su estructuración permite el reconocimiento de la documentación producida.
    p.mb-5(data-aos="fade-left") La persona responsable de velar por la aplicación de este documento, es el encargado del archivo de gestión; ya que, en su función, le corresponde la apropiada organización, manejo, conservación y uso de la información de escritos y archivos, con el fin de hacer un control de los documentos en sus diferentes fases.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .container.BG01.px-4.px-md-5.pt-4
        .row.justify-content-center
          .col-lg-10.col-12
            .row.justify-content-center.align-items-center.p-4
              .col-lg-3.col-md-8.col-12.mb-3
                figure
                  img(src='@/assets/curso/temas/tema7/1.svg', alt='Imagen decorativa')
              .col-lg-9.col-12.mb-3
                p Este servidor que sea vinculado, movido o desvinculado de su cargo, deberá recibir o entregar, según sea el caso, los escritos y archivos adecuadamente relacionados en el inventario, de tal manera que se logre garantizar la persistencia de la gestión documental.
                p Por otro lado, las entidades acogerán el formato único de inventario documental, con su respectivo instructivo, para la conservación y preservación de los escritos y documentos generados. Pues este formato, ayuda a orientar a los archivistas en los métodos para la entrega y recibo de los documentos, así como de las transferencias de estos.
    p.mb-5(data-aos="fade-left") Con el objetivo de definir los criterios a tener en cuenta para la elaboración de inventarios documentales, se presenta el Formato Único de Inventario Documental, estructurado por el Archivo General de la Nación, con su respectivo instructivo orientador y por ello, se invita a que explore el siguiente documento que contiene una infografía con cada una de sus partes explicada.

    .tarjeta.tarjeta1.p-3(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-1.col-3.p-4
          img(src="@/assets/template/folder.svg").img50
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Infografía Formato Único de Inventario Documental
              p.text-small.mb-0 En el presente documento se encuentra una explicación detallada de las partes que componen el formato.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/infografia_formato_unico_de_inventario_documental.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 


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
