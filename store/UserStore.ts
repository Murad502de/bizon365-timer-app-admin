import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }

  // getters

  // actions
});