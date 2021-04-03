Vue.component('computed-properties-get-set', {

  data() {

    return {
      amount: 0
    }

  },
  computed: {
    amountFormatted: {

      get(currentValue) {
        return `${this.amount} $USD`;
      },
      set(newValue) {
        this.amount = newValue;
      }

    }
  },
  template: `

    <div>
        <h2>Computed Properties get y set</h2>
        <input type="number" v-model="amount">
        
        <p>{{amountFormatted}}</p>
    </div>
  
  `

});
