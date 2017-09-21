<template>
  <div class="container">
    <section class="content row">
      <div class="col-md-3 user-list-col">
        <user-list></user-list>
      </div>
      <div class="col-md-9 chat-container" style="border: solid 1px blue;">
        <div class="conversation-block">
          <conversation></conversation>
        </div>
        <div class="input-block">
          <chat-input></chat-input>
        </div>
      </div>
    </section>         
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ChatUserList from '@/components/ChatUserList'
  import Conversation from '@/components/Conversation'
  import ChatInput from '@/components/ChatInput'
  export default {
    components: {
      'user-list': ChatUserList,
      'conversation': Conversation,
      'chat-input': ChatInput
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