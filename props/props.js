Vue.component('props', {

  //Esta es otra forma mas sencilla de declarar una propiedad del componente
  //props: ['name'],

  props: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true,

      // valida el dato de entrada
      validator: (value) => {

        if (value < 18) {
          alert('No eres mayor de edad...');
        }

        return !(value < 18);

      }
    }

  },
  template: `
    
    <div>
        <p>{{name}} {{surname}}, Edad: {{age}} años.</p>  
    </div>
  
  `

});
