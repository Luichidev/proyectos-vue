const app = new Vue({
  el: '#app',
  template: `
    <main>
      <Header :vidas="tries" ></Header>
      <Home @gettries=addTry($event)></Home>
    </main>
  `,
  data: {
    tries: 6,
  },
  methods: {
    addTry(tries) {
      this.tries = tries
    },
  },
})
