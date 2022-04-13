Vue.component('Home', {
  template: `<div>
      <h1>Pokedle</h1>
      <div class="poke-container">
        <label>The Pokemon is...</label>
        <input type="text" v-model="word" @keyup.enter="askWord">
        <button @click="askWord">Ask</button>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
      </div>
      <div class="words-container" v-for="letter in reverseResult">
        <div v-for="ele in letter" class="letter" :class="ele.color">
          <span> {{ ele.name }} </span>
        </div>
      </div>
    </div>`,
  data() {
    return {
      pokemon: 'PIKACHU',
      errorMsg: '',
      word: '',
      MAX_TRIES: 6,
      POKEMON_AVALIABLE: 800,
      previousGuesses: [],
      globalResults: [],
      tries: 0,
    }
  },
  created() {
    const randomID = Math.floor(Math.random() * this.POKEMON_AVALIABLE) + 1
    const url = `https://pokeapi.co/api/v2/pokemon/${randomID}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.pokemon = data.name.toUpperCase()
      })
  },
  methods: {
    askWord: function () {
      this.word = this.word.toUpperCase()
      this.errorMsg = ''
      if (this.word == null || this.word === '') {
        this.errorMsg = '💬 You must provide a possible pokemon name.'
      } else if (this.word.length !== this.pokemon.length) {
        this.errorMsg =
          '💬 The pokemon name must be ' +
          this.pokemon.length +
          ' characters long.'
      } else if (this.previousGuesses.includes(this.word)) {
        this.errorMsg = '💬 You already tried this pokemon name.'
      } else if (!/^[a-zA-Z]+$/.test(this.word)) {
        this.errorMsg = '💬 The pokemon name must contain only letters.'
      }
      if (this.errorMsg === '') {
        this.startGame()
      }
    },
    startGame() {
      if (this.tries >= this.MAX_TRIES) {
        this.errorMsg = '💥 You lost! The pokemon was ' + this.pokemon + '.'
      } else {
        this.tries++
        this.globalResults.push(this.print())
        this.previousGuesses.push(this.word)
        this.word = ''
      }
    },
    print() {
      let result = []
      const letters = this.word.split('')
      letters.forEach((letter, index) => {
        if (letter === this.pokemon[index]) {
          result[index] = { name: letter, color: 'green' }
        } else if (this.pokemon.includes(letter)) {
          result[index] = { name: letter, color: 'yellow' }
        } else {
          result[index] = { name: letter, color: 'grey' }
        }
      })
      return result
    },
  },
  computed: {
    reverseResult() {
      return this.globalResults.reverse()
    },
  },
})
