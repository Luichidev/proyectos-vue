Vue.component('Pickbox', {
  template: `
  <div class="poke-container">
      <h2>Selected a generation to play</h2>
      <select @change="select">
        <option :value="0" selected>Select a generation</option>
        <option :value="1">Generation I</option>
        <option :value="2">Generation II</option>
        <option :value="3">Generation III</option>
        <option :value="4">Generation IV</option>
        <option :value="5">Generation V</option>
        <option :value="6">Generation VI</option>
        <option :value="7">Generation VII</option>
      </select>
    </div>
  `,
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    select: function (event) {
      this.value = event.target.value
      if (this.value !== 0) {
        this.$emit('selected', this.value)
      }
    },
  },
})
