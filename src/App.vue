<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from './components/Menu'
  export default {
    name: 'app',
    components: {
      AppMenu: Menu
    },
    created () {
      // get user from local storage
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      // set userto the local storage
      this.$store.dispatch('setUserObject', userObj)
    }
  }
</script>

<style>
  @import "./assets/css/app.css";
</style>
