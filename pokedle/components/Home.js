Vue.component('Home', {
  template: `<div>
      <div class="poke-container">
        <label>The Pokemon is...</label>
        <input type="text" v-model="word" @keyup.enter="askWord">
        <button v-if="!win" @click="askWord">Ask</button>
        <button v-if="again" @click="reset">Again</button>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <p v-if="win" class="success">{{ msg }}</p>
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
      again: false,
      win: false,
      msg: '',
    }
  },
  created() {
    this.getPokemon()
  },
  methods: {
    askWord: function () {
      this.word = this.word.toUpperCase()
      this.errorMsg = ''
      this.win = this.word === this.pokemon
      if (!this.win) {
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
      } else {
        this.globalResults.push(this.print())
        this.again = true
        this.msg = '🎉 You won! The pokemon was ' + this.pokemon + '.'
      }
    },
    startGame() {
      if (this.tries >= this.MAX_TRIES) {
        this.errorMsg = '💥 You lost! The pokemon was ' + this.pokemon + '.'
        this.again = true
      } else {
        this.tries++
        this.globalResults.push(this.print())
        this.previousGuesses.push(this.word)
        this.word = ''
        this.$emit('gettries', this.MAX_TRIES - this.tries)
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
    reset() {
      this.tries = 0
      this.globalResults = []
      this.previousGuesses = []
      this.getPokemon()
      this.again = false
      this.win = false
      this.word = ''
      this.errorMsg = ''
      this.msg = ''
    },
    getPokemon() {
      const randomID = Math.floor(Math.random() * this.POKEMON_AVALIABLE) + 1
      const url = `https://pokeapi.co/api/v2/pokemon/${randomID}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.pokemon = data.name.toUpperCase()
          console.log(this.pokemon)
        })
    },
  },
  computed: {
    reverseResult() {
      return this.globalResults.reverse()
    },
  },
})
