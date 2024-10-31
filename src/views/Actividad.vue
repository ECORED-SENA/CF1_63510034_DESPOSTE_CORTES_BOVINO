<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Producción cárnica, manipulación y herramientas para el desposte',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Reconocer las razas de ganado para la producción de carne en Colombia, la manipulación segura de alimentos, y el uso adecuado de herramientas y equipos en el proceso de desposte, garantizando la seguridad alimentaria y la higiene en la producción cárnica.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una de las razas puras de <i>Bos Indicus</i> utilizada en Colombia para la producción de carne?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<i>Guzerá.</i>', esCorrecta: false },
            { id: 'b', texto: '<i>Gyr.</i>', esCorrecta: true },
            { id: 'c', texto: '<i>Hereford.</i>', esCorrecta: false },
            { id: 'd', texto: '<i>Simmental.</i>', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes no es una fuente de contaminación en los alimentos?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Medio ambiente.', esCorrecta: false },
            { id: 'b', texto: 'Plagas.', esCorrecta: false },
            { id: 'c', texto: 'Embalaje sellado.', esCorrecta: true },
            { id: 'd', texto: 'Basuras.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de peligro representa la presencia de objetos extraños en los alimentos?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Químico.', esCorrecta: false },
            { id: 'b', texto: 'Biológico.', esCorrecta: false },
            { id: 'c', texto: 'Físico.', esCorrecta: true },
            { id: 'd', texto: 'Microbiano.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué porcentaje de rendimiento en canal tiene la raza Brahman?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '58 %.', esCorrecta: true },
            { id: 'b', texto: '62 %.', esCorrecta: false },
            { id: 'c', texto: '55 %.', esCorrecta: false },
            { id: 'd', texto: '60 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes razas pertenece a la especie <i>Bos Taurus</i>?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<i>Gyr.</i>', esCorrecta: false },
            { id: 'b', texto: '<i>Charolais.</i>', esCorrecta: true },
            { id: 'c', texto: '<i>Brahman.</i>', esCorrecta: false },
            { id: 'd', texto: '<i>Nelore.</i>', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué elemento de protección es utilizado para cubrir el cabello en el desposte?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tapabocas.', esCorrecta: false },
            { id: 'b', texto: 'Overol.', esCorrecta: false },
            { id: 'c', texto: 'Cofia.', esCorrecta: true },
            { id: 'd', texto: 'Delantal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes enfermedades es causada por la ingesta de alimentos contaminados?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diabetes.', esCorrecta: false },
            { id: 'b', texto: 'Hipertensión.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Enfermedades Transmitidas por Alimentos (ETA).',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Gripe.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el peso aproximado de los toros adultos de la raza Hereford?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '700 kg.', esCorrecta: false },
            { id: 'b', texto: '900 a 1100 kg.', esCorrecta: true },
            { id: 'c', texto: '500 kg.', esCorrecta: false },
            { id: 'd', texto: '1200 kg.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Las herramientas utilizadas para el desposte incluyen cuchillos despostadores y piedras de afilar.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La raza <i>Simbrah</i> es una mezcla de 5/8 <i>Brahman</i> y 3/8 <i>Simmental</i>.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
