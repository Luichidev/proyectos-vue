<template>
  <div class="letter" :class="letter.color">
    <span> {{ letter.name }} </span>
  </div>
</template>

<script>
export default {
  name: 'EachLetter',
  props: {
    letter: Object
  }
}
</script>

<style scoped>
.letter {
  width: 1.5em;
  height: 1.5em;
  margin: 0.1em;
  padding: 0.1em;
  border: 1px solid #000;
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  color: #fff;
}
.green {
  background: #6aaa64;
}
.yellow {
  background: #cab557;
}
.grey {
  background: #ccc;
}

@media screen and (max-width: 414px) {
  .letter {
    font-size: 1.6rem;
  }
}
</style>