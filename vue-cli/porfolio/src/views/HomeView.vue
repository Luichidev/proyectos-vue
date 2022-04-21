<template>
  <section>
    <HomeUser/>
  </section>
  
</template>

<script>
// @ is an alias to /src
import HomeUser from '@/components/HomeUser.vue'

export default {
  name: 'HomeView',
  components: {
    HomeUser
  }
}
</script>
