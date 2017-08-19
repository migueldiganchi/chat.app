<template>
  <ul class="nav justify-content-center" 
    v-if="showMenu">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
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
        this.$store.dispatch('clearAuthUser')
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