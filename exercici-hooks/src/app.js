const app = new Vue({
  el: '#app',
  template: `
    <div ref="bgImage">
      <h1 style="color:white; text-align:center; text-shadow:1px 1px 1px black"> {{ title }} </h1>
    </div>
  `,
  data() {
    return {
      title: 'Mounted',
    }
  },
  mounted() {
    console.log('El componente ' + this.$options.el + ' ha sido montado.')
    const div = this.$refs.bgImage
    div.style.backgroundImage = 'url("https://picsum.photos/500")'
    div.style.backgroundRepeat = 'no-repeat'
    div.style.backgroundSize = 'contain'
    div.style.backgroundPosition = 'center'
    div.style.height = '50vh'
    div.style.width = '50vh'

    const body = document.body
    body.style.backgroundImage = 'url("https://picsum.photos/900")'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
    body.style.height = '100vh'
    body.style.display = 'grid'
    body.style.placeContent = 'center'
  },
})
