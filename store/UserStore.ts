import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { User } from '@/domain/User';
import { getCredentials } from '@/services/credentials/credentialsService';

interface State {
  user: User | null;
}

export const useUserStore = defineStore('UserStore', {
  state: (): State => ({
    user: getCredentials()
  }),

  getters: {
    my: (state): User | any => {
      console.debug('store/UserStore/my'); //DELETE

      return state.user;
    },
  },

  actions: {
    async signin(user: User) {
      console.debug('store/UserStore/signin/user', user); //DELETE

      this.user = user;

      Cookies.set('uuid', user.uuid);
      Cookies.set('token', user.token);
    },
  },
});