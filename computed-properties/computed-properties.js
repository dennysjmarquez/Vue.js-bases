Vue.component('computed-properties', {

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
  template: `

    <div>
        <h2>Computed Properties</h2>
        
        <p>computed: {<br>&nbsp; fullName() {<br>&nbsp; &nbsp; return \`\${this.name} \${this.subname}\`<br>&nbsp; }<br>}</p>
        
        <p>{{name}} {{subname}}</p>
        <p>Metodo (fullName) en computed property: {{fullName}}</p>
    </div>
  
  `

});
