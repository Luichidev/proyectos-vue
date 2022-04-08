Vue.component('user-info', {
  template: `<span>
              <h2>{{ name }}</h2>
              <button @click="view">{{ show? 'Hide Details' : 'Show Details' }}</button>
              <ul v-if="show">
                <li><strong>Phone:</strong>{{ phone }}</li>
                <li><strong>Email:</strong>{{ email }}</li>
              </ul>
            </span>`,
  data() {
    return {
      show: false,
    }
  },
  props: ['name', 'phone', 'email'],
  methods: {
    view() {
      this.show = !this.show
    },
  },
})

const vm = new Vue({
  el: '#app',
  data: {
    friends: [
      {
        name: 'Luis Alberto',
        phone: '91727523',
        email: 'luichidev@gmail.com',
      },
      {
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
      {
        name: 'Julie Jones',
        phone: '09876 543 221',
        email: 'julie@localhost.com',
      },
    ],
  },
})
