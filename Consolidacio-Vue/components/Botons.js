Vue.component('Botons', {
  template: ` <div class="botons">
        <button v-if="activeItem > 0" @click="prev()">Anterior</button>
        <button v-if="activeItem != frasesLength - 1" @click="next()">Siguiente</button>
      </div>`,
  props: ['activeItem', 'frasesLength'],
  data() {
    return {
      current: 0,
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
