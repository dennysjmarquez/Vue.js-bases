Vue.component('vmodel', {

  data() {

    return {
      framework: 'Vuejs 2'
    }

  },
  template: `
    
    <div>
        <h4>Trabajando con v-model</h4>
        <input type="text" v-model="framework"/>
        <p>el Framework escojido es: {{ framework }}</p>
    </div>
  
  `

});
