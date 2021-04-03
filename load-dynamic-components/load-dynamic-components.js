Vue.component('load-dynamic-components', {

  data() {

    return {
      components: ['component-1', 'component-2', 'component-3'],
      currentComponent: 'component-1'
    }

  },
  methods: {
    changeComponent(component) {
      this.currentComponent = component;
    }
  },
  template: `
    
    <div>
        
        <button v-for="(component, index) in components" :key="index" @click="changeComponent(component)">Select: {{component}}</button>
        
        <!--    
           
           Este amigo sirve para cargar componentes dinámico el attr :is=”” 
           indica el nombre del componente y funciona sobre cualquier tag,
           este es remplazado lo único que para buenas practicas es preferible 
           usar como nombre de tag component ya que es mas indicativo
           
           <component :is="currentComponent"/> 
           
           -->
           <br><br>
        <component :is="currentComponent"/>
        
    </div>
  
  `

});
