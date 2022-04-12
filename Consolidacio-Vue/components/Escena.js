Vue.component('Escena', {
  template: `<p v-if="" class="frases">{{ frase.frase }} <span>{{frase.autor}}</span></p>`,
  props: ['frase'],
})
