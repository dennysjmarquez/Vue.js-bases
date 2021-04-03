Vue.component('conditionals', {

  data() {

    return {
      age: 10
    }

  },
  template: `
  
    <div>
    
        <p><span style="color:#808080;">&lt;</span><span style="color:#569cd6;">input </span><span
                style="color:#9cdcfe;">type</span><span style="color:#ce9178;">="text" </span><span
                style="color:#9cdcfe;">v-model</span><span style="color:#ce9178;">="</span><span style="color:#9cdcfe;">age</span><span
                style="color:#ce9178;">"</span><span style="color:#808080;">&gt;</span><br><span style="color:#808080;">&lt;</span><span
                style="color:#569cd6;">p </span><span style="color:#9cdcfe;">v-if</span><span
                style="color:#ce9178;">="</span><span style="color:#9cdcfe;">age</span><span style="color:#ce9178;"> &lt; 18" </span><span
                style="color:#808080;">&gt;</span>Menos de edad<span style="color:#808080;">&lt;/</span><span
                style="color:#569cd6;">p</span><span style="color:#808080;">&gt;</span><br><span style="color:#808080;">&lt;</span><span
                style="color:#569cd6;">p </span><span style="color:#9cdcfe;">v-else-if</span><span
                style="color:#ce9178;">="</span><span style="color:#9cdcfe;">age</span><span style="color:#ce9178;"> &gt;= 18 &amp;&amp; </span><span
                style="color:#9cdcfe;">age</span><span style="color:#ce9178;"> &lt; 30"</span><span
                style="color:#808080;">&gt;</span>Mayor de edad y menor de 30<span
                style="color:#808080;">&lt;/</span><span style="color:#569cd6;">p</span><span style="color:#808080;">&gt;</span><br><span
                style="color:#808080;">&lt;</span><span style="color:#569cd6;">p </span><span style="color:#9cdcfe;">v-else-if</span><span
                style="color:#ce9178;">="</span><span style="color:#9cdcfe;">age</span><span style="color:#ce9178;"> &gt;= 30 &amp;&amp; </span><span
                style="color:#9cdcfe;">age</span><span style="color:#ce9178;"> &lt; 65"</span><span
                style="color:#808080;">&gt;</span>30 años o más y menor de 65<span
                style="color:#808080;">&lt;/</span><span style="color:#569cd6;">p</span><span style="color:#808080;">&gt;</span><br><span
                style="color:#808080;">&lt;</span><span style="color:#569cd6;">p </span><span style="color:#9cdcfe;">v-else</span><span
                style="color:#ce9178;">="age &gt;=65"</span><span style="color:#808080;">&gt;</span>Estás jubila@<span
                style="color:#808080;">&lt;/</span><span style="color:#569cd6;">p</span><span style="color:#808080;">&gt;</span>
        </p>
    
        <input type="text" v-model="age">
        <p v-if="age < 18" >Menos de edad</p>
        <p v-else-if="age >= 18 && age < 30">Mayor de edad y menor de 30</p>
        <p v-else-if="age >= 30 && age < 65">30 años o más y menor de 65</p>
        <p v-else="age >=65">Estás jubila@</p>
    
    </div>
  
  `

});
