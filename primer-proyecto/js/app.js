const vm = new Vue({
  el: '#app',
  template: '#mensaje-template',
  data: {
    titulo: 'portfolio Luis',
    mensaje: 'Bienvenido a mi primera aplicación con Vue.js',
    mensajeHTML:
      '<span style="color:red">Bienvenido a mi primera aplicación con Vue.js</span>',
    imagen: './img/vue.jpg',
    url: 'https://luichi.dev',
    login: true,
    number: 5,
    contador: 0,
  },
  methods: {
    resetContador(e) {
      this.contador = 0
      alert('Contador reseteado click => ' + e.target.tagName)
    },
    setCount: function (num) {
      this.contador += num
    },
  },
})
