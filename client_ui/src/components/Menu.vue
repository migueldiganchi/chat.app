<template>
  <ul class="nav justify-content-center" 
    v-if="showMenu">
    <li class="nav-item">
      <router-link :to="{name: 'dashboard'}"
        class="nav-link">
        Dashboard
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{name: 'chat'}"
        class="nav-link">
        Chat
      </router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link"
        @click="doLogout()">Logout</a>
    </li>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        show: false
      }
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      }),
      showMenu () {
        return (this.userStore.authUser !== null && this.userStore.authUser.access_token)
      }
    },
    methods: {
      doLogout () {
        // clear authUser object
        this.$store.dispatch('clearAuthUser')
        // remove authUser from local storage
        window.localStorage.removeItem('authUser')
        // go home
        this.$router.push({name: 'auth'})
      }
    },
    created () {
    }
  }
</script>

<style>
  .nav {
    border-bottom: solid 1px #c9c9c9;
    padding: 10px;
    margin-bottom: 30px;
  }
</style>