import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {},
  }),

  getters: {
    isAuthenticated (state) {
      return !!state.user?.uid;
    }
  },

  actions: {
    signIn (response) {
      this.user = response;
    }
  }
})
