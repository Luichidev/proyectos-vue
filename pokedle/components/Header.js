Vue.component('Header', {
  template: `
  <header class="header">
    <div class="header__container">
      <h1>Pokedle</h1>
      <div class="header__container--score">
        <img src="images/jigglypuff.png" alt="pokeball">
        <p>💖{{vidas}}</p>
      </div>
    </div>
  </header>
  `,
  props: ['vidas'],
})
