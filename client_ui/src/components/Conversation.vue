<template>
  <div class="chat-widget-wrapper">
    <div class="conversation" v-for="chat in chatStore.conversation">
      <div class="sender-data clearfix">
        <div class="name">{{ chat.sender.name }}</div>
        <div class="time">{{ chat.created_at }}</div>
      </div>
      <div class="chat-body">
        {{ chat.chat }}
      </div>
    </div>
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