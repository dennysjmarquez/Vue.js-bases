Vue.component('child-methods', {

  data() {

    return {
      cmpName: 'child Methods CMP'
    }

  },
  methods: {
    showCMPName() {
      console.log('Llamada al método showCMPName', this.cmpName);
    }
  },
  template: `<div></div>`

});
