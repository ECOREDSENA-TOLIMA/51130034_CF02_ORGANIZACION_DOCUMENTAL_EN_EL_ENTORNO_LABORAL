export default {
  global: {
    componenteFormativo:
      'Ordenamiento documental y transferencias documentales',
    descripcionCurso:
      'Toda empresa que emprende el camino del desarrollo y fortalecimiento comercial y económico, requiere del respaldo de un sistema de calidad y mejoramiento continuo. Además, una vez clasificados los documentos y ordenados dentro de cada expediente o serie documental, se da paso aplicativo a la Tabla de Retención Documental, en donde la empresa debe realizar las transferencias documentales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ordenación documental',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Sistema de gestión de calidad en los documentos —Norma ISO 15489—',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de ordenación documental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Unidades de conservación documental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'La foliación documental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Transferencia documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Pasos para realizar una transferencia documental',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Preparación de documentos a transferir',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Inventario único documental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_51130034_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ordenación documental',
      referencia:
        'Jiménez, González. G. (2003). Ordenación documental. División de clasificación y descripción. Bogotá: Archivo General de la Nación.',
      tipo: 'Documento',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%20organizacion/DOCUMENTOS%20TECNICOS/CARTILLA%20DE%20ORDENACION%20DOCUMENTAL.pdf',
    },
    {
      tema: 'Transferencia documental',
      referencia:
        'Julia, G. y López Ávila, M. I. (2001). Cartilla de Clasificación Documental. Bogotá: Archivo General de la Nación.',
      tipo: 'Documento',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/Minimanual_TRD.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acervo documental',
      significado: 'conjunto de documentos de un archivo.',
    },
    {
      termino: 'Casetes',
      significado:
        'formato o medio donde se logra realizar grabaciones de sonido o video de cinta magnética, permitiendo guardar información documental. Actualmente, se encuentra sustituido por formatos de cinta de audio digital o compacto digital.',
    },
    {
      termino: 'Conservación documental',
      significado:
        'comprende las estrategias y técnicas específicas para la protección de los materiales de archivo.',
    },
    {
      termino: 'Disquetes',
      significado:
        'disco flexible con un formato de almacenamiento antiguo para la coyuntura, por su escaso volumen de acumulación en información ha sido sustituido por las memorias USB que son pequeñas y portátiles. Los disquetes se encuentran constituidos por una fracción circular de material magnético, fino y elástico (de ahí su denominación) encerrada en una carcasa de plástico, cuadrada o rectangular. Los disquetes se leen y se escriben mediante un dispositivo llamado disquetera.',
    },
    {
      termino: 'Expediente',
      significado:
        'conjunto de documentos relacionados con un asunto que constituyen una unidad archivística. Unidad documental formada por un conjunto de documentos generados orgánica y funcionalmente por una oficina productora en la resolución de un mismo asunto.',
    },
    {
      termino: 'Foliación',
      significado: 'acción de numerar hojas.',
    },
    {
      termino: 'Foliar',
      significado:
        'es el proceso de numerar ordenadamente las páginas de un documento.',
    },
    {
      termino: 'Fondo documental',
      significado:
        'conjunto de documentos producidos por una persona natural o jurídica en desarrollo de sus funciones o actividades.',
    },
    {
      termino: 'Preservación documental',
      significado:
        'acciones preventivas que contribuyen al buen estado de los acervos documentales.',
    },
    {
      termino: 'Unidades de conservación',
      significado:
        'es el lugar en donde se desarrolla la gestión, administración y ejecución de los diversos procesos de conservación que se deben implementar en el archivo documental, para la preservación en el tiempo de los documentos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (20 de septiembre de 2002). Acuerdo No. 037 de 2002. Por el cual se establecen las especificaciones técnicas y los requisitos para la contratación de los servicios de depósito, custodia, organización, reprografía y conservación de documentos de archivo en desarrollo de los artículos 13 y 14 y sus Parágrafos 1 y 3 de la Ley General de Archivos 594 de 2000.',
      link: 'https://normativa.archivogeneral.gov.co/acuerdo-37-de-2002/',
    },
    {
      referencia:
        'Archivo General de la Nación. (31 de octubre de 2014). Acuerdo No. 008 de 2014. Por el cual se establecen las especificaciones técnicas y los requisitos para la prestación de los servicios de depósito, custodia, organización, reprografía y conservación de documentos de archivo y demás procesos de la función archivística en desarrollo de los artículos 13° y 14° y sus parágrafos 1° y 3° de la Ley 594 de 2000.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=61791#15',
    },
    {
      referencia:
        'Archivo General de la Nación. (2014). Formato Único de Inventario Documental.',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/2_Politica_archivistica/Instrumentos_Archivisticos/Formatounicoinventariodocumental.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (14 de julio de 2000). Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4275',
    },
    {
      referencia:
        'Godoy, J., López, I., Casilimas, C. y otros. (s.f.). Tablas de retención y transferencias documentales. Bogotá: Archivo General de la Nación.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/9.%20disposicion%20final/DOCUMENTOS%20TECNICOS/MINIMANUAL%20TRD.pdf',
    },
    {
      referencia:
        'Jiménez, González. G. (2003). Ordenación documental. División de clasificación y descripción. Bogotá: Archivo General de la Nación.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%20organizacion/DOCUMENTOS%20TECNICOS/CARTILLA%20DE%20ORDENACION%20DOCUMENTAL.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder línea de producción',
          centro:
            'Centro Industrial de Mantenimiento Integral -Regional Santander',
        },
        {
          nombre: 'Carmen Milena Ferreira Ardila',
          cargo: 'Experta temática ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro Industrial de Mantenimiento Integral -Regional Santander',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral -Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Animación y Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
