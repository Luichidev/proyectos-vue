<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#" class='fst-italic font-weight-bold'><b-icon icon="chevron-left" variant="success" animation="fade" font-scale="1"></b-icon>LUIS<b-icon icon="chevron-right" variant="success" animation="fade" font-scale="1"></b-icon></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/jokes">Jokes</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sticky: true
    }
  },
}
</script>

