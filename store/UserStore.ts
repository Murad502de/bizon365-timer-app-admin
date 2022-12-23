import { defineStore } from 'pinia';
import { User } from '@/domain/User';
import { UserMock } from './mocks/UserMock';

const isMock: boolean = true;
interface State {
  user: User | null;
}

export const useUserStore = defineStore('UserStore', {
  state: (): State => ({
    user: null
  }),

  getters: {
    my: (state): User | any => {
      console.debug('store/UserStore/my'); //DELETE

      return state.user;
    },
  },

  actions: {
    async signin(email: Email, token: UserToken) {
      console.debug('store/UserStore/signin/email', email); //DELETE
      console.debug('store/UserStore/signin/token', token); //DELETE

      this.user = isMock ? UserMock : null;
    },
  },
});