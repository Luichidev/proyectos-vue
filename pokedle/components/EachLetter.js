Vue.component('EachLetter', {
  template: `
  <div class="letter" :class="letter.color">
    <span> {{ letter.name }} </span>
  </div>`,
  data() {
    return {
      letter: [],
    }
  },
  props: ['letter'],
})
