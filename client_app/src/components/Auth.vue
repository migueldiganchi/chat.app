<template>
  <div class="row">
    <div class="col-md-4 center-block">
      <h1 class="m-30">Login</h1>
      <form method="post" v-on:submit.prevent="doLogin()">
        <input type="email" 
          placeholder="Username" 
          required="required"
          v-model="login.email" />

        <input type="password" 
          placeholder="Password" 
          required="required" 
          class="m-top-10"
          v-model="login.password"/>
          
        <button type="submit" class="btn btn-primary btn-block btn-large">
          Let me in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {loginUrl, getHeader, userUrl} from '../config'
import {clientId, clientSecret} from '../env'
import {mapState} from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      login: {
        email: 'migueldiganchi@gmail.com',
        password: 'password'
      }
    }
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    doLogin () {
      const data = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: this.login.email,
        password: this.login.password,
        scope: ''
      }

      const authUser = {}

      this.$http.post(loginUrl, data).then((response) => {
        if (response.status === 200) {
          // set tokens to the authenticated user
          authUser.access_token = response.data.access_token
          authUser.refresh_token = response.data.refresh_token
          // storage locally the authenticated user
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          // go get user data
          this.$http.get(userUrl, {headers: getHeader()}).then((response) => {
            authUser.email = response.body.email
            authUser.name = response.body.name
            // set new data to the local storaged user
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            // set user state
            this.$store.dispatch('setUserObject', authUser)
            // go dashboard
            this.$router.push({name: 'dashboard'})
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .btn-primary {
    margin-top: 30px;
  }
</style>
