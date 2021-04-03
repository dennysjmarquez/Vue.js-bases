Vue.component('parent-data', {

  template: `
    
    <div>
        
        <p v-pre>{{ $parent.appName }}</p>
        <p>{{ $parent.appName }}</p>
        
    </div>
  
  `

});
