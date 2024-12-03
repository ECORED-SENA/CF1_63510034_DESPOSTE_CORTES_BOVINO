export default {
  global: {
    componenteFormativo:
      'Producción cárnica, manipulación y herramientas para el desposte',
    descripcionCurso:
      'Este componente formativo aborda la producción cárnica en Colombia, destacando las principales razas de ganado, las prácticas de manipulación de alimentos para garantizar su inocuidad, y las herramientas esenciales para el desposte. Incluye medidas de prevención de contaminaciones y el uso adecuado de equipo de protección personal en el procesamiento de carnes, asegurando calidad y seguridad alimentaria en el proceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
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
        titulo: 'Razas para la producción de carne en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Razas puras de la especie <i>Bos indicus</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Razas sintéticas de la especie <i>Bos indicus</i>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Razas puras de la especie <i>Bos Taurus</i>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Razas sintéticas de la especie <i>Bos Taurus</i>',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Razas <i>Bos taurus</i> de doble propósito',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Otras razas para la producción cárnica',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manipulación de alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Enfermedades Transmitidas por Alimentos (ETA)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Medidas para manipular y prevenir la contaminación con microorganismos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas y equipos para el desposte',
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
        download: 'downloads/63510034_CF01_DU.pdf',
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
      tema: 'Razas para la producción de carne en Colombia',
      referencia:
        'La Finca de Hoy. (2017). Razas de ovinos destinadas para carne | La Finca de Hoy. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TjMLCgq-FHE',
    },
    {
      tema: 'Razas puras de la especie <i>Bos indicus</i>',
      referencia:
        'InfoAgricola GT. (2023). Bos Indicus. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=juYeSsFUnj0',
    },
    {
      tema: 'Razas puras de la especie <i>Bos Taurus</i>',
      referencia:
        'TvAgro. (2024).Colombia potencia para la raza Bos Taurus - TvAgro por Juan Gonzalo Angel Restrepo. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9KlHJVqab5A',
    },
    {
      tema: 'Razas <i>Bos taurus</i> de doble propósito',
      referencia:
        'Udearroba. (2021).Planos generales, Diferencias entre Bos taurus y Bos indicus. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NZbCPxsVquM',
    },
    {
      tema: 'Manipulación de alimentos',
      referencia:
        'SENA. (2021). Higiene y Manipulación de Alimentos Cap 04.mp4. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aeqWCTYT-qk',
    },
    {
      tema: 'Enfermedades Transmitidas por Alimentos (ETA)',
      referencia: 'OPS. (s.f.). Enfermedades transmitidas por alimentos.',
      tipo: 'Página web',
      link:
        'https://www.paho.org/es/temas/enfermedades-transmitidas-por-alimentos',
    },
  ],
  glosario: [
    {
      termino: '<em>Bos Indicus</em>',
      significado:
        'especie de ganado bovino originaria de Asia, conocida por su resistencia a condiciones adversas.',
    },
    {
      termino: '<em>Bos Taurus</em>',
      significado:
        'especie de ganado bovino originaria de Europa, valorada por su alta producción de carne y leche.',
    },
    {
      termino: '<em>Brahman</em>',
      significado:
        'raza de ganado <em>Bos Indicus</em> conocida por su adaptabilidad y producción cárnica en climas tropicales.',
    },
    {
      termino: 'Cofia',
      significado:
        'elemento de protección utilizado para cubrir el cabello durante la manipulación de alimentos.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'transferencia de microorganismos o contaminantes de un alimento crudo a uno cocido.',
    },
    {
      termino: 'Desposte',
      significado:
        'proceso de separar la carne del hueso y distribuirla en cortes comerciales.',
    },
    {
      termino: 'ETA (Enfermedades Transmitidas por Alimentos)',
      significado:
        'enfermedades causadas por el consumo de alimentos contaminados con microorganismos patógenos.',
    },
    {
      termino: 'Peligro biológico',
      significado:
        'riesgo de contaminación de alimentos por microorganismos como bacterias, virus o hongos.',
    },
    {
      termino: 'Piedra de afilar',
      significado:
        'herramienta utilizada para mantener y mejorar el filo de los cuchillos y otros utensilios cortantes.',
    },
    {
      termino: 'Rendimiento en canal',
      significado:
        'porcentaje de carne que se obtiene de un animal tras el sacrificio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barrero, B. (2018). Manual del curso manipulador de alimentos.',
      link:
        'https://manipulador-de-alimentos.com/manual-manipulador-de-alimentos-coformacion-formato-pdf.pdf',
    },
    {
      referencia: 'Boletín agrario. (s.f.). Definición Wagyu.',
      link: 'https://boletinagrario.com/ap-6,wagyu,819.html',
    },
    {
      referencia: 'CONtexto Ganadero. (2015). Valores de la raza Simbrah.',
      link: 'https://www.contextoganadero.com/blog/valores-de-la-raza-simbrah',
    },
    {
      referencia: 'DNP. (s.f.). Generalidades de la carne productiva.',
      link:
        'https://colaboracion.dnp.gov.co/cdt/desarrollo%20empresarial/carnicos.pdf',
    },
    {
      referencia:
        'FAO. (2017). Manual para manipuladores de alimentos. Washington, D.C.: Organización de las Naciones Unidas para la Alimentación y la Agricultura y Organización Panamericana de la Salud / Organización Mundial de la Salud.',
    },
    {
      referencia:
        'FEDEGAN. (2010). Informe especial 12 censos ganaderos 2009: los indicadores de la leche, la ceba y el doble propósito. Carta FEDEGAN, 116, pp. 12-104.',
    },
    {
      referencia:
        'FEDEGAN. (2011). Modelos competitivos sostenibles en producción bovina-Las mejores del doble propósito. Carta FEDEGAN, 125, pp. 14-47.',
    },
    {
      referencia:
        'FEDEGAN. (2012). Conozca el biotipo funcional de la raza Brahman.',
      link:
        'http://www.fedegan.org.co/noticias/conozca-el-biotipo-funcional-de-la-raza-brahman',
    },
    {
      referencia:
        'Goldemberg, A. (2013). Brahman, Gyr y Guzerá son las razas que más producen leche y carne.',
      link:
        'https://www.larepublica.co/archivo/brahman-gyr-y-guzera-son-las-razas-que-mas-producen-leche-y-carne-2035921',
    },
    {
      referencia: 'González, K. (2017). Raza de ganado Simmental.',
      link:
        'https://zoovetesmipasion.com/ganaderia/razas-bovina/raza-de-ganado-simmental/',
    },
    {
      referencia:
        'Márquez, J. G. (2012). Diferencias entre Bos Taurus y Bos Indicus [Web log post].',
      link:
        'http://generalidadesdelaganaderiabovina.blogspot.com/2012/09/diferencias-entre-bos-taurus-y-bos.html',
    },
    {
      referencia:
        'Pinzón, G. (2007). Diseño de un sistema para mejorar el rendimiento de una ganadería intensiva doble propósito en la finca Sarvipai en el municipio de Yacopí, Cundinamarca (Trabajo de grado de especialización no publicado). Universidad de la Salle, Cundinamarca, Colombia.',
    },
    {
      referencia: 'Razas Bovinas de Colombia. (2018). Raza Aberdeen Angus.',
      link: 'https://razasbovinasdecolombia.weebly.com/aberdeen-angus.html',
    },
    {
      referencia: 'Razas Bovinas de Colombia. (2018). Raza Beefmaster.',
      link: 'https://razasbovinasdecolombia.weebly.com/beefmaster.html',
    },
    {
      referencia:
        'Ritchie, D. & Cols. (2013). Ganadería de doble propósito: propuesta para pequeños productores colombianos. Lima: Esan Ediciones.',
    },
    {
      referencia:
        'Velásquez, J. (1999). Nueva raza tropical colombiana de ganado vacuno. Bogotá: Instituto Colombiano Agropecuario.',
    },
    {
      referencia:
        'FEDEGAN. (2010). Informe especial 18 Bursagán: nuestra firma en el mercado bursátil. Carta FEDEGAN, 113, pp. 12-103.',
    },
    {
      referencia: 'González, K. (2017). Raza bovina Hereford.',
      link:
        'https://zoovetesmipasion.com/ganaderia/razas-bovina/raza-bovina-hereford/',
    },
    {
      referencia: 'Razas Bovinas de Colombia. (2018). Raza Red Poll.',
      link: 'https://razasbovinasdecolombia.weebly.com/red-poll.html',
    },
    {
      referencia: 'Razas Bovinas de Colombia. (2018). Raza Normando.',
      link: 'https://razasbovinasdecolombia.weebly.com/normando--normande.html',
    },
    {
      referencia: 'Razas Bovinas de Colombia. (2018). Raza Charolais.',
      link: 'https://razasbovinasdecolombia.weebly.com/charolaise.html',
    },
    {
      referencia: 'Razas Bovinas de Colombia. (2018). Raza Braford.',
      link: 'https://razasbovinasdecolombia.weebly.com/braford.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Iván Cifuentes García',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'José Eduardo Solano Rivero ',
          cargo: 'Animador y productor multimedia	 ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos ',
          cargo: 'Locución ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López ',
          cargo: 'Locución ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
