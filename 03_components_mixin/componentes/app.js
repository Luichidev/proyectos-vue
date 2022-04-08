const app = new Vue({
  el: '#app',
  data: {
    courses: [
      {
        id: 1,
        title: 'Curso introductorio JavaScript',
        subtitle: 'Aprende lo básico en JS',
        description:
          'En este curso explicaremos de la mano de los mejores profesores JS los principios básicos',
        type: 'course-js',
        price: 10,
      },
      {
        id: 2,
        title: 'Curso avanzado JavaScript',
        subtitle: 'Aprende lo avanzado en JS',
        description:
          'En este curso explicaremos de la mano de los mejores profesores JS los principios avanzados',
        type: 'course-js',
        price: 40,
      },
      {
        id: 3,
        title: 'Curso introductorio Cascading Style Sheets',
        subtitle: 'Aprende lo básico en CSS',
        description:
          'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
        type: 'course-css',
        price: 10,
      },
      {
        id: 4,
        title: 'Curso avanzado Cascading Style Sheets',
        subtitle: 'Aprende lo avanzado en CSS',
        description:
          'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
        type: 'course-css',
        price: 40,
      },
      {
        id: 5,
        title: 'Curso Vue en 10 min',
        subtitle: 'Aprende lo básico en VUE',
        description:
          'En este curso explicaremos en 10 min todo lo basico para crear tu primera aplicacion de Vue.',
        type: 'course-vue',
        price: 10,
      },
      {
        id: 6,
        title: 'Curso de 0 a experto en 1hora',
        subtitle: 'Aprende lo avanzado en VUE',
        description:
          'En este curso explicaremos de la mano de los mejores profesores Vue avanzado',
        type: 'course-vue',
        price: 50,
      },
    ],
    cart: [],
  },
  methods: {
    addToCart: function (course) {
      this.cart.push(course)
    },
  },
})
