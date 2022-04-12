Vue.component('Botons', {
  template: ` <div class="botons">
        <button v-if="seleccion > 0" @click="prev()">Anterior</button>
        <button v-if="seleccion != num - 1" @click="next()">Siguiente</button>
      </div>`,
  props: ['seleccion', 'num'],
  data() {
    return {
      current: 0,
      num: '',
      seleccion: '',
    }
  },

  methods: {
    prev() {
      this.current--
      this.$emit('currentSentence', this.current)
    },
    next() {
      this.current++
      this.$emit('currentSentence', this.current)
    },
  },
})
