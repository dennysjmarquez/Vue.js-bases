const myMixins = {
  data(){
    return {
      mixinsData: '[mixinsData] Esto es una data del mixin'
    }
  },
  mounted(){

    console.log('mounted() in myMixins');
    console.log(this.mixinsData);
    this.test();

  },
  methods:{
    test(){
      console.log('Test from mixins');
    }
  }

};

Vue.component('mixins',{
  mixins:[myMixins],
  mounted(){
    console.log('mounted() in Component mixins');
  },
  template: `
  
    <div>
        
        <p>Vue.component('mixins')</p>
        
        <p>{{mixinsData}}</p>
    </div>
    
  `
});
