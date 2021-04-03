Vue.component('emit', {

  data() {

    return {
      carBrand: 'Toyota'
    }

  },
  template: `
    
    <div>

        <p @click="$emit('show-car-brand', carBrand)" style="cursor: pointer; user-select: none">Pulsa aquí para emitir un evento a la instancia ROOT de vuejs 2</p>
        
    </div>
  
  `

});
