import { defineStore } from 'pinia';

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
    updateUser (response) {
      this.user = response;
    },
  }
})

useUserStore().$subscribe(
  (_, state) => {
    if (state.user?.uid) {
      const { uid } = state.user;
      localStorage.setItem("uid", JSON.stringify(uid));
    } else {
      localStorage.removeItem("uid");
    }
  },
  { detached: true }
);
