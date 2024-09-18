<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de ordenación documental
    
    p.mb-4(data-aos="fade-left") Consiste en la ordenación de datos mediante el establecimiento de secuencias que se pueden realizar por orden alfabético o numérico, para cada una de las categorías o grupos previamente clasificados según definición constituida.
    p.mb-5(data-aos="fade-left") Es importante tener en cuenta la siguiente ecuación: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Ecuación de la organización.</i>
      .row.justify-content-center
        .col-lg-8.col-md-12.col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema3/1.svg', alt='Imagen que relaciona una ecuación, la cual indica que la organización es el resultado de la clasificación más la ordenación.')
          figure.movil
            img(src='@/assets/curso/temas/tema3/1_.svg', alt='Imagen que relaciona una ecuación, la cual indica que la organización es el resultado de la clasificación más la ordenación.')

    p.mb-5(data-aos="flip-up") Las empresas pueden utilizar varios sistemas de ordenación:

    .col.desktop
      .row.justify-content-center.mb-0(data-aos="flip-up")
        .col-lg-10.col-12
          ImagenInfograficaB.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/2.svg', alt='Imagen decorativa')

            div.p-4(x="16%" y="32%" tooltip="Numéricos" numero="+")
              h5 Numéricos
              p Están conformados por los llamados simples u ordinales y los cronológicos.
              p · <b>Simples u ordinales</b>
              p Consisten en la colocación de los documentos en forma consecutiva y de forma progresiva. Ejemplo:
              p - 1.
              p - 2.
              p - 3.
              p · <b>Cronológicos</b>
              p Consisten en colocar un documento detrás del otro, de forma secuencial, de acuerdo con la fecha en que se haya tramitado el documento, teniendo en cuenta, primero el año, luego el mes y por último, el día. Ejemplo:
              p - 2005/03/12.
              p - 1982/11/25.
              p - 1975/06/27.

            div.p-4(x="84%" y="32%" tooltip="Alfabéticos" numero="+")
              h5 Alfabéticos
              p Consiste en ordenar los documentos por las letras del alfabeto, estos pueden ser: onomásticos, toponímicos o geográficos, temáticos.
              p · <b>Onomásticos</b>
              p Se utiliza para series documentales compuestas por expedientes que permanecen abiertos por lapsos de largo tiempo. Ejemplo:
              p Historias laborales, historias clínicas, expedientes académicos de estudiantes o alumnos.
              p · <b>Toponímicos o geográficos</b>
              p Se ordena la serie documental de manera alfabética, según los nombres de lugares. Ejemplo:
              p Arauca, Boyacá, Cauca.
              p · <b>Temáticos</b>
              p Se ordenan las series alfabéticamente por el contenido temático o nombres de las series. Ejemplo:
              p Actas, informes, resoluciones.

            div.p-4(x="13%" y="87%" tooltip="Mixtos" numero="+")
              h5 Mixtos
              p Como su nombre lo indica, son aquellos que combinan elementos.
              p · <b>Alfanuméricos</b>
              p Se ordena las series documentales utilizando los dos, alfabético y numérico cronológico. Ejemplo:
              p - 100 GARCIA LOPEZ, Laura.
              p - 101 BUITRAGO DEVIA, Luis.
              p · <b>Cronológicos</b>
              p Se utiliza para las series documentales que son numéricas y a su vez cronológicas. Ejemplo:
              p - Resolución 001 2016-01-10.
              p - Resolución 002 2016-01-15.
    ///-.tarjeta.tarjeta1.p-3(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-1.col-3.p-4
          img(src="@/assets/template/folder.svg").img50
      .row.justify-content-center
        .col.movil
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Sistemas de ordenación.
              p.text-small.mb-0 En el presente documento se encuentra una explicación detallada de las partes que componen el formato.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/sistemas_de_ordenacion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 
    
    .col.movil
      .row.justify-content-center
        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/sistemas_de_ordenacion.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Sistemas de ordenación.

    //-.col.movil
      .tarjeta.tarjeta1.p-3(data-aos="flip-up")
        .row.justify-content-around.align-items-center
          .col-lg-1.col-3.p-4
            img(src="@/assets/template/folder.svg").img50
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-1 Sistemas de ordenación.
                p.text-small.mb-0 En el presente documento se encuentra una explicación detallada de las partes que componen el formato.
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/sistemas_de_ordenacion.pdf')" target="_blank")
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
