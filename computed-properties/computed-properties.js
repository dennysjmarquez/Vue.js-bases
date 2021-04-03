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
        
        <p><span style="color:#9cdcfe;">computed</span>: {<br>&nbsp; <span style="color:#dcdcaa;">fullName</span>() {<br>&nbsp; &nbsp;&nbsp;<span style="color:#499cd5;">return </span><span style="color:#cd9069;">\`</span>\${
    <span style="color:#499cd5;">this</span>.<span style="color:#9cdcfe;">name</span>} \${<span
    style="color:#499cd5;">this</span>.<span style="color:#9cdcfe;">subname</span>}<span style="color:#cd9069;">\`</span><br><span style="color:#cd9069;">&nbsp; </span>}<br>},</p>
        
        <p>{{name}} {{subname}}</p>
        <p>Metodo (fullName) en computed property: {{fullName}}</p>
    </div>
  
  `

});
