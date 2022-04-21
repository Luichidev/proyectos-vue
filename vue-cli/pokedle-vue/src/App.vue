  <template>
  <main id="app">
      <HeaderApp :vidas="tries"/>
      <PickBox v-if="!start" @selected="getValue($event)"/>
      <HomeApp v-if="start" @gettries=addTry($event) @reset="reset" :generation="generation"/>
    </main>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import PickBox from './components/Pickbox.vue'
import HomeApp from './components/HomeApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    PickBox,
    HomeApp
  },
  data() {
    return {
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
    }
  },
  methods: {
    addTry(tries) {
      this.tries = tries
    },
    getValue(value) {
      this.start = true
      this.generation = this.range[value]
    },
    reset() {
      this.start = false
      this.tries = 6
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5rem;
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
}

#app {
  max-width: 1024px;
  min-width: 375px;
  margin: 32px auto 0;
}

.poke-container {
  text-align: center;
  margin-bottom: 32px;
}

.poke-container label,
.poke-container input,
.poke-container button,
.poke-container select {
  font-size: 1.1rem;
  padding: 8px;
  border-radius: 0.25rem;
}

.poke-container button {
  margin: 0 0 0 8px;
  background-color: #da471b;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  min-width: 100px;
}

.poke-container input {
  width: 30%;
}

@media screen and (max-width: 414px) { 
  .poke-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  .poke-container label,
  .poke-container input,
  .poke-container button,
  .poke-container select {
    font-size: 1rem;
    padding: 8px;
    border-radius: 0.25rem;
    width: 100%;
  }
  .poke-container input {
    margin-bottom: 8px;
  }

  .poke-container button {
    margin: 0 0 8px;
  }
}
</style>
