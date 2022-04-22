<template>
  <header class="header">
    <div class="header__container">
      <h1>Pokedle</h1>
      <div class="header__container--score">
        <img src="../assets/images/jigglypuff.png" alt="pokeball">
        <p>💖{{vidas}}</p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderApp',
  props: {
    vidas: Number
  }
}
</script>

<style scoped>
.header {
  padding: 8px;
  background-color: #fafafa;
  margin-bottom: 16px;
}

.header__container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  max-width: 1024px;
  min-width: 375px;
}

.header__container--score {
  position: relative;
  width: 150px;
}

.header__container--score p {
  position: absolute;
  top: 8px;
  left: 42px;
  right: 0;
  margin: auto;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
</style>