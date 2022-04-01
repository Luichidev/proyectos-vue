// const buttonEl = document.querySelector('button')
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('ul')

// function addGoal() {
//   const enteredValue = inputEl.value
//   const listItemEl = document.createElement('li')
//   listItemEl.textContent = enteredValue
//   listEl.appendChild(listItemEl)
//   inputEl.value = ''
// }

// buttonEl.addEventListener('click', addGoal)

const vm = new Vue({
  el: '#app',
  data: {
    goal: [],
    goalInput: '',
  },
  methods: {
    addGoal() {
      this.goalInput
        ? this.goal.push(this.goalInput)
        : console.error('No puede estar vacio')

      this.goalInput = ''
      console.log(this.goal)
    },
    removeGoalAll() {
      this.goal.length = 0
    },
    removeGolById(e) {
      console.log(e.target)

      // this.goal = this.goal.splice(this.goal.indexOf(id), 1)
    },
    setDone(e) {
      e.target.style.textDecoration = 'line-through'
    },
    enter(e) {
      if (e.key === 'Enter') {
        this.addGoal()
      }
    },
  },
})
