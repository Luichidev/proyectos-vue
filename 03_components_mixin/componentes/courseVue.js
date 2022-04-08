Vue.component('course-vue', {
  mixins: [course],
  data: function () {
    return {
      styleClass: 'course-vue',
      header: {
        title: 'Curso Vue',
        image: 'https://picsum.photos/64/64',
      },
    }
  },
})
