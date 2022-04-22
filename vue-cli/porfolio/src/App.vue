<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/jokes">Jokes</router-link>
    </nav> -->
    <NavBar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  } 
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #989090;
    background: #161616;
  }
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983 !important;
  }
</style>
