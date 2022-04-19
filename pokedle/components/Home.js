Vue.component('Home', {
  template: `<div>
      <div class="poke-container">
        <label>The Pokemon is...</label>
        <input type="text" v-model="word" @keyup.enter="askWord" :placeholder="placeHolder">
        <button v-if="!again" @click="askWord">Ask</button>
        <button v-if="again" @click="reset">Again</button>
        <div v-if="messages.errorMsg !== ''" class="error">
          <p>{{ messages.errorMsg }}</p>
          <img v-if="MAX_TRIES === 0" :src="imgUrl" alt="imagen pokemon">
        </div>
        <div v-if="win" class="success">
          <p>{{ messages.msg }}</p>
          <img :src="imgUrl" alt="imagen pokemon">
        </div>
      </div>
      <div class="words-container" v-for="letter in reverseResult">
        <EachLetter v-for="ele in letter" :letter="ele" />
      </div>
    </div>`,
  data() {
    return {
      pokemon: 'PIKACHU',
      word: '',
      placeHolder: '',
      messages: {
        errorMsg: '',
        msg: '',
      },
      imgUrl: '',
      MAX_TRIES: 6,
      POKEMON_AVALIABLE: 809,
      previousGuesses: [],
      globalResults: [],
      again: false,
      win: false,
      midDash: false,
      pokemonLength: 0,
    }
  },
  props: ['generation'],
  created() {
    this.getPokemon().then(() => {
      this.pokemonLength = this.pokemon.length
      this.globalResults.push(this.print(this.pokemonLength))
      this.midDash
        ? (this.placeHolder = 'Nombre compuesto, separado por -')
        : false
    })
  },
  methods: {
    askWord: function () {
      this.word = this.word.toUpperCase()
      this.messages.errorMsg = ''
      this.win = this.word === this.pokemon
      if (!this.win) {
        if (this.word == null || this.word === '') {
          this.messages.errorMsg =
            '💬 You must provide a possible pokemon name.'
        } else if (this.word.length !== this.pokemon.length) {
          this.messages.errorMsg =
            '💬 The pokemon name must be ' +
            this.pokemon.length +
            ' characters long.'
        } else if (this.previousGuesses.includes(this.word)) {
          this.messages.errorMsg = '💬 You already tried this pokemon name.'
        } else if (!/^[a-zA-Z]+$/.test(this.word)) {
          this.messages.errorMsg =
            '💬 The pokemon name must contain only letters.'
        }

        if (this.messages.errorMsg === '') {
          if (this.MAX_TRIES === 6) {
            this.removeHelper()
          }

          this.startGame()
        }
      } else {
        this.removeHelper()
        this.globalResults.push(this.print())
        this.again = true
        this.messages.msg = '🎉 You won! The pokemon was ' + this.pokemon + '.'
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
        this.messages.errorMsg =
          '💥 You lost! The pokemon was ' + this.pokemon + '.'
        this.again = true
      }
    },
    print(blank = 0) {
      let result = []

      if (blank > 0) {
        for (let i = 0; i < this.pokemonLength; i++) {
          result.push({
            name: ' ',
            color: 'blank',
          })
        }
      } else {
        console.log(this.previousGuesses)
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
      }
      return result
    },
    reset() {
      this.MAX_TRIES = 6
      this.$emit('gettries', this.MAX_TRIES)
      this.$emit('reset', false)
      this.globalResults = []
      this.previousGuesses = []
      this.again = false
      this.win = false
      this.word = ''
      this.messages.errorMsg = ''
      this.messages.msg = ''
    },
    getPokemon() {
      let min = this.generation.min || 1
      let max = this.generation.max || this.POKEMON_AVALIABLE
      let random = Math.floor(Math.random() * (max - min + 1)) + min

      const url = `https://pokeapi.co/api/v2/pokemon/${random}`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.imgUrl = data.sprites.front_default
          this.pokemon = data.name.toUpperCase()
          this.midDash = this.pokemon.includes('-')
          console.log(this.pokemon)
          return this.pokemon.length
        })
    },
    removeHelper() {
      this.globalResults = []
      this.globalResults.length = 0
    },
  },
  computed: {
    reverseResult() {
      return this.globalResults.reverse()
    },
  },
})
