const app = new Vue({
  el: '#app',
  template: `
    <main>
      <Header :vidas="tries"/>
      <Pickbox v-if="!start" @selected="getValue($event)"/>
      <Home v-if="start" @gettries=addTry($event) :generation="generation"/>
    </main>
  `,
  data: {
    tries: 6,
    midDash: false,
    start: false,
    generation: {},
    range: {
      1: {
        min: 1,
        max: 151,
      },
      2: {
        min: 152,
        max: 251,
      },
      3: {
        min: 252,
        max: 386,
      },
      4: {
        min: 387,
        max: 493,
      },
      5: {
        min: 494,
        max: 649,
      },
      6: {
        min: 650,
        max: 721,
      },
      7: {
        min: 722,
        max: 809,
      },
    },
  },
  methods: {
    addTry(tries) {
      this.tries = tries
    },
    getValue(value) {
      this.start = true
      this.generation = this.range[value]
    },
  },
})
