Vue.component('Home', {
  template: `<div>
      <div class="poke-container">
        <label>The Pokemon is...</label>
        <input type="text" v-model="word" @keyup.enter="askWord">
        <button v-if="!again" @click="askWord">Ask</button>
        <button v-if="again" @click="reset">Again</button>
        <div v-if="errorMsg !== ''" class="error">
          <p>{{ errorMsg }}</p>
          <img v-if="MAX_TRIES === 0" :src="imgUrl" alt="imagen pokemon">
        </div>
        <div v-if="win" class="success">
          <p>{{ msg }}</p>
          <img :src="imgUrl" alt="imagen pokemon">
        </div>
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
      POKEMON_AVALIABLE: 809,
      previousGuesses: [],
      globalResults: [],
      again: false,
      win: false,
      msg: '',
      imgUrl: '',
      midDash: false,
    }
  },
  props: ['generation'],
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
      if (this.MAX_TRIES > 0) {
        this.previousGuesses.push(this.word)
        this.MAX_TRIES--
        this.globalResults.push(this.print())
        this.word = ''
        this.$emit('gettries', this.MAX_TRIES)
      }

      if (this.MAX_TRIES === 0) {
        this.errorMsg = '💥 You lost! The pokemon was ' + this.pokemon + '.'
        this.again = true
      }
    },
    print() {
      let result = []
      const letters = this.word.split('')
      letters.forEach((letter, index) => {
        if (letter === this.pokemon[index]) {
          result[index] = { name: letter, color: 'green' }
        } else if (
          this.pokemon.includes(letter) &&
          !this.previousGuesses.includes(letter)
        ) {
          result[index] = { name: letter, color: 'yellow' }
        } else {
          result[index] = { name: letter, color: 'grey' }
        }
      })
      return result
    },
    reset() {
      this.MAX_TRIES = 6
      this.$emit('gettries', this.MAX_TRIES)
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
      let min = this.generation.min || 1
      let max = this.generation.max || this.POKEMON_AVALIABLE
      let random = Math.floor(Math.random() * (max - min + 1)) + min

      const url = `https://pokeapi.co/api/v2/pokemon/${random}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.imgUrl = data.sprites.front_default
          this.pokemon = data.name.toUpperCase()
          this.midDash = this.pokemon.includes('-')
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
