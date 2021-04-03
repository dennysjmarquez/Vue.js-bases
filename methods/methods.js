Vue.component('methods', {

  data() {

    return {
      name: 'Dennys',
      subname: 'Marquez'
    }

  },
  computed: {
    fullName() {
      return `${this.name} ${this.subname}`
    }
  },
  methods: {
    hello() {
      alert(this.fullName);
    }
  },
  template: `
    
    <div>
        <p @click="hello" style="cursor: pointer">Click aquí para ejecutar el método hello</p>
    </div>
      
  `

});
