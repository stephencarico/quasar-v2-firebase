import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {}
  }),

  // getters: {
  //   doubleCount (state) {
  //     return state.user * 2
  //   }
  // },

  actions: {
    signIn (response) {
      this.user = response;
    }
  }
})
