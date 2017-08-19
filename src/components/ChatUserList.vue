<template>
  <div class="wrapper chat-user-list">
    <ul class="list-group">
      <li v-for="user in chatStore.userList"
        class="list-group-item tr-dark">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
      })
    }
  }
</script>

<style>
  li.list-group-item {
    border: solid 1px red !important;
  }
</style>