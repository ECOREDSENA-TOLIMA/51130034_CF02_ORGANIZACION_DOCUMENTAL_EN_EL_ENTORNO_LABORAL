<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Transferencia documental
    
    p.mb-5(data-aos="fade-left") La transferencia documental, consiste en el traslado de documentos de un archivo a otro; es decir, del archivo de gestión al archivo central o del archivo central al histórico, una vez que estos han culminado su trámite administrativo y han agotado su tiempo de retención estipulado en la tabla de retención documental.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon1.color-primario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-8.mb-3
              figure
                img(src='@/assets/curso/temas/tema6/1.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-3
              p Uno de los aportes de la transferencia documental hacia el interior de la empresa, tiene que ver con la reducción del espacio dedicado a la conservación de documentos en las oficinas, mejorando la eficacia de la gestión documental, sobre todo en el caso de documentos de uso frecuente, incluso aquellos que puedan mantener valor administrativo.

        p.mb-4 El proceso de transferencia documental es importante porque permite desarrollar varios procesos como:

        ul.lista-ul--color.lista-ul
          li 
            i.fas.fa-folder
            | Evita la acumulación innecesaria e irracional de los documentos.
          li 
            i.fas.fa-folder
            | Resguarda la documentación en las mejores condiciones de conservación.
          li 
            i.fas.fa-folder
            | Dispone recursos testimoniales con garantía de consulta.
          li 
            i.fas.fa-folder
            | Proporciona control ordenado de la documentación.
          li 
            i.fas.fa-folder
            | Facilita acceso a la información a quien lo requiera.

    p.mb-5(data-aos="fade-left") El proceso de transferencia documental, se hace teniendo en cuenta el ciclo vital de los documentos y lo establecido en las Tablas de Retención Documental (TRD) en cada entidad, como se explica a continuación:

    .row.justify-content-center
      .col-sm-6.col-lg-4.col-md-10.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema6/2.svg', alt='Imagen decorativa')

          h3.text-center Archivo de gestión
          p Comprende el tiempo que va desde la creación del documento y el trámite propio que debe cumplir la información que contiene. En el archivo de gestión se encuentra la documentación de las oficinas, los documentos que continúan en trámite y que, según la Tabla de Retención Documental, deben continuar el tiempo establecido de su ejercicio vital —corresponde a la fase activa—

      .col-sm-6.col-lg-4.col-md-10.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema6/3.svg', alt='Imagen decorativa')

          h3.text-center Archivo central
          p Entran los documentos que fueron transferidos desde el archivo central, según lo establecido en la Tabla de Retención Documental. Su información no es consultada frecuentemente, pero su valor de indagación puede resultar útil —corresponde a la fase semiactiva—

      .col-sm-6.col-lg-4.col-md-10.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema6/4.svg', alt='Imagen decorativa')

          h3.text-center Archivo histórico
          p Documentos transferidos desde el archivo central, según la tabla de retención documental, porque tienen un valor secundario; es decir, valor cultural científico e histórico —corresponde a la fase inactiva—


    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Pasos para realizar una transferencia documental

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <i>Archivo total.</i>
      .row.justify-content-center
        .col-lg-10.col-md-10.col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema6/5.svg', alt='Imagen que contiene un esquema donde se representa el archivo total, el cual relaciona los diferentes tipos de archivos dentro de cada una de las fases del ciclo vital y el tipo de transferencia al que pertenecen..')
          figure.movil
            img(src='@/assets/curso/temas/tema6/5_.svg', alt='Imagen que contiene un esquema donde se representa el archivo total, el cual relaciona los diferentes tipos de archivos dentro de cada una de las fases del ciclo vital y el tipo de transferencia al que pertenecen..')

    p.mb-5(data-aos="fade-left") Para realizar con éxito la transferencia de retención documental, de un archivo de gestión al archivo central, se debe tener en cuenta:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial.mb-5
          .row(numero="1" titulo="Verificar el tiempo")
            .col-12.mb-4.mb-md-0.mt-3
              p Antes de realizar la transferencia primaria —archivo de gestión al central— verificar el tiempo establecido en la Tabla de Retención Documental; igualmente importante es la verificación de que los documentos estén listos físicamente para ser transferidos, teniendo en cuenta:
              .tarjeta--blanca.p-4
                ol.lista-ol
                  li 
                    span.text-bold a. 
                    | Retirar el material metálico.
                  li 
                    span.text-bold b. 
                    | Retirar hojas y formatos en blanco.
                  li 
                    span.text-bold c. 
                    | Retirar las copias o fotocopias de documentos, siempre y cuando el original se encuentre en el expediente.
                  li 
                    span.text-bold d. 
                    | Retirar fax, borradores, etc.

          .row(numero="2" titulo="Registrar las series o subseries que van a ser transferidas")
            .col-12.mb-4.mb-md-0.mt-3
              p Registrar en el formato único de inventario documental las series o subseries que van a ser transferidas, según la Tabla de Retención Documental, pues como se sabe, esta tabla es la herramienta que indica qué documentos han cumplido su tiempo de permanencia en el archivo de gestión y ya pueden ser trasladas al archivo central.
          .row(numero="3" titulo="Ingresar las series o expedientes dentro de las cajas")
            .col-12.mb-4.mb-md-0.mt-3
              p Terminado el inventario documental, ingresar las series o expedientes dentro de las cajas. Estas cajas deben ir marcadas con la siguiente información: fondo, sección, subsección, número de carpetas, número de caja y fechas extremas.
          .row(numero="4" titulo="Solicitar la verificación del proceso")
            .col-12.mb-4.mb-md-0.mt-3
              p Solicitar a la persona encargada del archivo central, la verificación del proceso de transferencia, con el fin de constatar su buena ejecución.
          .row(numero="5" titulo="Transferir los documentos al archivo central")
            .col-12.mb-4.mb-md-0.mt-3
              p Proceder a transferir los documentos al archivo central, acompañado del formato único de inventario documental, debidamente diligenciado en original y copia.
          .row(numero="6" titulo="Establecer la veracidad de la entrega")
            .col-12.mb-4.mb-md-0.mt-3
              p El jefe del archivo central, confrontará la remisión física de la documentación con el formato único de inventario documental, para establecer la veracidad de la entrega.
              p Una vez finalizada esta actividad, se procederá a la firma del inventario único documental, por parte de quien realizó la transferencia y el jefe o persona encargada del archivo central.
          .row(numero="7" titulo="Ubicar la documentación transferida en la estantería")
            .col-12.mb-4.mb-md-0.mt-3
              p Finalmente, la persona encargada del archivo central, ubicará la documentación transferida en la estantería.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Preparación de documentos a transferir
    
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Limpieza de la documentación
          p.text-center Evita la acumulación innecesaria de papeles en los archivos de oficina.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Eliminación de todo tipo de material metálico o plástico
          p.text-center Libres de clips, grapas, gomas, carpetas de plástico o cualquier otro elemento que pudiese afectar a su conservación.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Identificar el material afectado por biodeterioro
          p.text-center Este material debe aislarse para ser tratado mediante desinfección y, de ser posible, conservarlo en óptimas condiciones.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-gris.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Revisar y foliar, toda la documentación a transferir
          p.text-center Comprobar que no falta ningún documento dentro de los expedientes o expedientes dentro de la serie documental. Verificar la ordenación correcta —numérica, cronológica o alfabética— de los documentos.

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
