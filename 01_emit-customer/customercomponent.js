Vue.component('customercomponent', {
  template: `
    <div class = "Table">
     <div class = "Row"  v-bind:style = "styleobj">
         <div class = "Cell id"><p>{{index}}</p></div>
         <div class = "Cell"><p>{{itr.fname}}</p></div>
         <div class = "Cell"><p>{{itr.lname}}</p></div>
         <div class = "Cell"><p>{{itr.addr}}</p></div>
         <div class = "Cell id"><p>
            <button v-on:click = "$emit('removeelement', observacions)">X</button></p>
         </div>
         <div class="Cell">
            <input type="text" placeholder="observacions" v-model="observacions">
         </div>
      </div>
      </div>
    `,
  props: ['itr', 'index'],
  data: function () {
    return {
      styleobj: {
        backgroundColor: this.getcolor(),
        fontSize: 20,
      },
      observacions: '',
    }
  },
  methods: {
    getcolor: function () {
      if (this.index % 2) {
        return '#dee2e6'
      } else {
        return '#c3e6cb'
      }
    },
  },
})
