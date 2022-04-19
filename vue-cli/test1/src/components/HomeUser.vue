<template>
  <section>
    <div class="user-info">
      <h1>Hello</h1>
      <p></p>
      <div class="socials"></div>
    </div>
    <div class="user-image">
      <img src="#" alt="User avatar">
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeUser',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
