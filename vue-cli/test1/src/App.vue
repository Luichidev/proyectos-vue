<template>
  <main>
    <HomeUser></HomeUser>
  </main>
</template>

<script>
import HomeUser from './components/HomeUser.vue'

export default {
  name: 'App',
  components: {
    HomeUser
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
    margin-top: 60px;
    background: #161616;
  }
  main {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
