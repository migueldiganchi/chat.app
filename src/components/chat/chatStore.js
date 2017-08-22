import Vue from 'vue'
import {userListUrl, getHeader, getUserConversationUrl, saveChatMessageUrl} from '@/config'

const state = {
  userList: {},
  currentChatUser: null,
  conversation: null
}

const mutations = {
  SET_USER_LIST (state, userList) {
    state.userList = userList
  },
  SET_CURRENT_CHAT_USER (state, user) {
    state.currentChatUser = user
  },
  SET_CONVERSATION (state, conversation) {
    state.conversation = conversation
  },
  ADD_CHAT_TO_CONVERSATION (state, chat) {
    state.conversation.push(chat)
  }
}

const actions = {
  setUserList: ({commit}, userList) => {
    Vue.http.get(userListUrl, {headers: getHeader()}).then((response) => {
      console.log(response)
      if (response.status === 200) {
        commit('SET_USER_LIST', response.body.data)
        return response.body.data
      }
    })
  },
  setCurrentChatUser: ({commit}, user) => {
    let data = {
      id: user.id
    }
    return Vue.http.post(getUserConversationUrl, data, {headers: getHeader()})
      .then((response) => {
        console.log('response', response)
        commit('SET_CURRENT_CHAT_USER', user)
        commit('SET_CONVERSATION', response.body.data)
      }
    )
  },
  addNewChatToConversation: ({commit}, data) => {
    return Vue.http.post(saveChatMessageUrl, data, {headers: getHeader()})
      .then((response) => {
        commit('ADD_CHAT_TO_CONVERSATION', response.body.data)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
