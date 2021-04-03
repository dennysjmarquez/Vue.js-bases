Vue.component('loops', {

  data() {

    return {

      frameworks: [
        {id: 1, name: 'Vuejs 2'},
        {id: 2, name: 'React'},
        {id: 3, name: 'Ember'},
        {id: 4, name: 'Adonisjs'},
        {id: 5, name: 'Angular'},
        {id: 6, name: 'Laravel'}
      ]

    }

  },
  template: `
  
    <div>
    
        <ul v-if="frameworks.length">
            <li v-for="(item, index) in frameworks" :key="item.id">{{index}} - {{item.name}}</li>
        </ul>
    
    </div>
  
  `

});
