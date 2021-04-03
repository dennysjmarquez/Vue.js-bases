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
        
        <p><span style="color:#9cdcfe;">computed</span>: {<br>&nbsp; <span style="color:#9cdcfe;">amountFormatted</span>: {<br><br>&nbsp; &nbsp;&nbsp;<span style="color:#dcdcaa;">get</span>(<span style="color:#9cdcfe;">currentValue</span>) {<br>&nbsp; &nbsp; &nbsp;&nbsp;<span style="color:#499cd5;">return </span><span style="color:#cd9069;">\`</span>\${
    <span style="color:#499cd5;">this</span>.<span style="color:#9cdcfe;">amount</span>}<span style="color:#cd9069;"> $USD\`</span>;<br>&nbsp; &nbsp; },<br>&nbsp; &nbsp;&nbsp;<span style="color:#dcdcaa;">set</span>(<span style="color:#9cdcfe;">newValue</span>) {<br>&nbsp; &nbsp; &nbsp;&nbsp;<span style="color:#499cd5;">this</span>.<span style="color:#9cdcfe;">amount </span>= <span style="color:#9cdcfe;">newValue</span>;<br>&nbsp; &nbsp; }<br><br>&nbsp; }<br>},</p>
        
        <input type="number" v-model="amount">
        
        <p>{{amountFormatted}}</p>
    </div>
  
  `

});
