Vue.component('vmodel-checkboxes', {

  data() {

    return {
      frameworks: []
    }

  },
  template: `
    
    <div>
        
        <h4>v-model con arrays</h4>
        
        <label 
        style="display: block; cursor: pointer; user-select: none">
            <input type="checkbox" value="Vuejs 2" v-model="frameworks"> Vuejs 2</label>
            
        <label 
        style="display: block; cursor: pointer; user-select: none">
            <input type="checkbox" value="React" v-model="frameworks"> React</label>
            
        <label 
        style="display: block; cursor: pointer; user-select: none">
            <input type="checkbox" value="Angular" v-model="frameworks"> Angular</label>
        
        <p>Frameworks seleccionados: {{ frameworks }}</p>

    </div>
  
  `

});
