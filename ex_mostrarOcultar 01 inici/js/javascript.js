const app = new Vue({
  el: '#app',
  template: '#ejemplo',
  data: {
    cursos: [
      {
        name: 'Historia y ventajas de trabajar con VUE',
        url: 'https://youtu.be/AqesL138vMA',
      },
      {
        name: 'Desarrolla aplicaciones con vueJs ',
        url: 'https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/',
      },
      {
        name: 'Curso de VUE',
        url: 'https://styde.net/curso-de-vue-2/',
      },
    ],
    mostrar: true,
    mensaje: 'Benvingut a VUE',
    imagen: 'img/vue.jpg',
    num1: 0,
    num2: 0,
    total: 0,
  },
  methods: {
    toggleMostrar() {
      this.mostrar = !this.mostrar
    },
    displaynumbers() {
      return (this.total = +this.num1 + +this.num2)
    },
  },
})
