<template>
  <div class="chat-input">
      <form v-on:submit.prevent="addChat()">
        <div class="form-group">
          <input type="text" 
            placeholder="Enter your text" 
            class="form-control"
            v-model="message">
        </div>
      </form>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
      })
    },
    data () {
      return {
        message: null
      }
    },
    methods: {
      addChat () {
        if (this.message !== null) {
          let data = {
            'receiver_id': this.chatStore.currentChatUser.id,
            'chat': this.message
          }

          this.$store.dispatch('addNewChatToConversation', data)
            .then((response) => {
              this.message = null
            })
        }
      }
    }
  }
</script>

<style lang="scss">
    
</style>