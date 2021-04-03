Vue.component('slots', {

  template: `
    <div class="slots">
    
      <header style="border: 1px solid;">
          <slot name="header"></slot>
      </header>
      <main style="border: 1px solid;">
        <slot></slot>
      </main>
      <footer style="border: 1px solid;">
          <slot name="footer"></slot>
      </footer>
    
    </div>
  
  `

});
