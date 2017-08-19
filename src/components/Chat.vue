<template>
  <div>
    <h1>Chat Page</h1>

    <section class="content row">
      <div class="col-md-3 user-list-col">
        <user-list></user-list>
      </div>
      <div class="col-md-9 chat-container">
        Chant content
      </div>
    </section>         
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ChatUserList from '@/components/ChatUserList'
  export default {
    components: {
      'user-list': ChatUserList
    },
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
      })
    },
    created () {
      this.$store.dispatch('setUserList')
    }
  }
</script>