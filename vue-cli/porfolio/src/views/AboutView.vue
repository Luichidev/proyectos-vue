<template>
  <div class="py-5">
    <h1>Aqui farem proves amb les APIs</h1>
    <h2>Acudit del dia</h2> 
    <b-card
      title="Card Title"
      img-src="https://www.lavanguardia.com/files/content_image_desktop_filter/uploads/2020/03/10/5fa90778dce37.jpeg"
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
import useJokes from "../services/useJokes.js";
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
      useJokes()
      .then(response => {
        this.acudit = response;
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>
