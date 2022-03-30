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
      this.goal.push(this.goalInput)
      this.goalInput = ''
      console.log(this.goal)
    },
    removeGoal(goal) {
      this.goal.splice(this.goal.indexOf(goal), 1)
      console.log(this.goal)
    },
  },
})
