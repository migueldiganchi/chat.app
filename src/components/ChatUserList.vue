<template>
  <div class="wrapper chat-user-list">
    <ul class="list-group">
      <li v-for="user in chatStore.userList"
        @click="changeChatUser(user)"
        class="list-group-item tr-dark"
        :class="[{active: userIsActive(user)}]"
        v-if="user.name !== userStore.authUser.name">
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
        chatStore: state => state.chatStore,
        userStore: state => state.userStore
      })
    },
    methods: {
      userIsActive (user) {
        if (this.chatStore.currentChatUser === null) {
          return false
        }
        if (this.chatStore.currentChatUser.id === user.id) {
          return true
        }
        return false
      },
      changeChatUser (user) {
        this.$store.dispatch('setCurrentChatUser', user)
      }
    }
  }
</script>

<style>
  li.list-group-item {
    border: solid 1px #c9c9c9 !important;
  }
  li:hover {
    background-color: #333 !important;
    cursor: pointer;
  }
  li.active {
    font-weight: bolder;
    background-color: #333 !important;
  }
</style>