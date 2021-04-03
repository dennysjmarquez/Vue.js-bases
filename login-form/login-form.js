Vue.component('login-form', {

  data() {

    return {
      logger: false,
      user: {
        email: 'test@test.com',
        password: '1234'
      }
    }

  },
  methods: {
    login() {
      this.logger = (this.user.email === 'test@test.com' && this.user.password === '1234');
    }
  },
  template: `
    
    <div>
    
        <p><span style="color:#808080;">&lt;</span><span style="color:#569cd6;">form </span><span style="color:#9cdcfe;">@submit.prevent</span><span style="color:#ce9178;">="</span><span style="color:#dcdcaa;">login</span><span style="color:#ce9178;">"</span><span style="color:#808080;">&gt;</span></p>
        
        <p><span style="color:#808080;">&lt;</span><span style="color:#569cd6;">p </span><span style="color:#9cdcfe;">v-show</span><span style="color:#ce9178;">="</span><span style="color:#9cdcfe;">logger</span><span style="color:#ce9178;">" </span><span style="color:#9cdcfe;">style</span><span style="color:#ce9178;">="</span><span style="color:#9cdcfe;">background</span>: <span style="color:#ce9178;">green</span>; <span style="color:#9cdcfe;">color</span>: <span style="color:#4c84d9;">#fff</span>; <span style="color:#9cdcfe;">padding</span>: <span style="color:#b4cda8;">10</span><span style="color:#ce9178;">px"</span><span style="color:#808080;">&gt;</span></p>
    
        <h6>Formulario de login</h6>

        <form @submit.prevent="login">
        
            <input type="email" autocomplete="off" placeholder="Email:" v-model="user.email">
            <input type="password" placeholder="Password" v-model="user.password">
            <br/><br/>
            
            <p v-show="logger" style="background: green; color: #fff; padding: 10px">
                Has iniciado sesión con los datos: {{ user }} 
            </p>
            
            <div>
                <button type="submit">Iniciar sesión</button>
            </div>
        
        </form>
        

    
    </div>
  
  `


});
