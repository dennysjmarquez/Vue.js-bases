Vue.component('watchers', {

  data() {

    return {
      user: null,
      oldUser: null,
      loading: false
    }

  },
  methods: {

    async randomUser() {

      try {

        this.loading = true

        const response = await fetch('https://randomuser.me/api/'),
          users = await response.json(),
          user = users.results[0];

        this.user = `${user.name.title} ${user.name.first} ${user.name.last}`

      } catch (e) {

        console.log(e);

      } finally {
        this.loading = false
      }

    }
  },

  // Este metodo escucha los cambios de un valor establecido en el data()
  // Maneja el nuevo valor y el valor anterior
  watch: {

    user(newValue, oldValue) {

      this.user = newValue;
      this.oldUser = oldValue;

    }
  },
  template: `
  
    <div>
        
        <button @click="randomUser">Obtener un nuevo usuario</button>
        <br><br>
        <p v-show="user">Nuevo usuario: <strong>{{user}}</strong></p>
        <p v-show="oldUser">Anterior usuario: <strong>{{oldUser}}</strong></p>
        <div v-show="loading">
        
            <br>
            <p>Cargando Nuevo usuario... Espere.</p>
        
        </div>
        
    </div>
  
  `

});
