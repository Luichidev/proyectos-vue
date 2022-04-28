<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top">
      <div class="container">  
        <router-link to="/" class="navbar-brand">
          <img src="./assets/Logo.svg" alt="Logo empresa" class="d-inline-block align-text-top" width="60%">
        </router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/productos" class="nav-link">Ver productos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Añadir productos</router-link>
          </li>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
