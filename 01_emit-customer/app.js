var vm = new Vue({
  el: '#databinding',
  data: {
    fname: '',
    lname: '',
    addr: '',
    custdet: [],
    styleobj: {
      backgroundColor: '#2196F3',
      cursor: 'pointer',
      padding: '8px 16px',
      verticalAlign: 'middle',
      borderRadius: '0.25rem',
      border: 'none',
      color: 'white',
    },
  },
  methods: {
    showData: function () {
      this.custdet.push({
        fname: this.fname,
        lname: this.lname,
        addr: this.addr,
      })
      this.fname = ''
      this.lname = ''
      this.addr = ''
      console.log(this.custdet)
    },
    removeData: function (observacions, index) {
      alert('eleminem el registre ' + index + ' degut a: ' + observacions)
      this.custdet.splice(index, 1)
    },
  },
})
