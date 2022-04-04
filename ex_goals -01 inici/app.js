const vm = new Vue({
  el: '#app',
  data: {
    goal: [],
    goalInput: '',
    find: '',
    count: 0,
  },
  methods: {
    addGoal() {
      const objGoal = {
        id: this.count++,
        goal: this.goalInput,
      }
      this.goalInput
        ? this.goal.push(objGoal)
        : console.error('No puede estar vacio')

      this.goalInput = ''
      console.log(this.goal)
    },
    removeGoalAll() {
      this.goal.length = 0
      this.goal = []
      this.find = ''
    },
    removeGolById(e) {
      const id = e.target.getAttribute('data-id')
      this.goal.splice(id, 1)
      this.find = ''
    },
    setDone(e) {
      e.target.style.textDecoration = 'line-through'
      e.target.style.backgroundColor = '#a2a29c'
    },
    enter(e) {
      if (e.key === 'Enter') {
        this.addGoal()
      }
    },
  },
  computed: {
    filteredGoal() {
      return this.goal.filter((goal) =>
        goal.goal.toLowerCase().includes(this.find.toLowerCase())
      )
    },
  },
})
