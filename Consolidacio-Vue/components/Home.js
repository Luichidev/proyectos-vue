Vue.component('Home', {
  template: `<section class="home" v-bind:style="cssObj">
              <div class="home-header">
                <h1>Frases de StarsWar</h1>
                <Botons v-on:currentSentence="selectItem($event)" :seleccion="activeItem" :num="frases.length"></Botons>
              </div>
              <div class="home-body">
                <Escena v-for="(frase, index) in frases" :key="index" :frase="frase" :class="{active: index === activeItem}"></Escena>
              </div>
            </section>`,
  data() {
    return {
      activeItem: 0,
      imagenes: [
        'url("images/roster.webp")',
        'url("images/obi-wan-kenobi.webp")',
        'url("images/yoga-luke.jpg")',
        'url("images/Qui-Gon-Jinn-and-Anakin-Skywalker.webp")',
        'url("images/yoda-force.jpg")',
        'url("images/master-yoda.jpg")',
      ],
      cssObj: {
        background: 'url("images/roster.webp")',
      },
    }
  },
  props: ['frases'],
  methods: {
    selectItem(index) {
      this.activeItem = index
      this.cssObj.background = this.imagenes[index]
    },
  },
})
