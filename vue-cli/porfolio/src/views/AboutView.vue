<template>
  <div class="py-5">
    <h1>Aqui farem proves amb les APIs</h1>
    <h2>Acudit del dia</h2> 
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/id/1074/500"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="m-auto"
    >
      <b-card-text>
        {{ acudit }}
      </b-card-text>
      <b-button href="#" variant="primary" @click="getJoke">Another Joke</b-button>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() { 
    return { 
      post: null, 
      acudit:'',
    }
  },
  mounted() { 
    console.log("entra");
    this.getJoke()
  },
  methods: {
    getJoke() { 
      axios .get("https://api.chucknorris.io/jokes/random") 
          .then((response) => {
            const { data } = response
            this.acudit = data.value
          }); 
    }
  }
}
</script>
