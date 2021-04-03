Vue.component('message', {

  data() {
    return {
      message: 'Hola Mundo'
    }
  },
  template: `
    <div>
        <h2>Componente Message</h2>
        <p>{{message}}</p>
    </div>
  `


});
