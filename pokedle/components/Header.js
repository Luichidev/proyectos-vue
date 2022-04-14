Vue.component('Header', {
  template: `
  <header class="header">
    <div class="header__container">
      <h1>Pokedle</h1>
      <p>💖 {{vidas}}</p>
    </div>
  </header>
  `,
  props: ['vidas'],
})
