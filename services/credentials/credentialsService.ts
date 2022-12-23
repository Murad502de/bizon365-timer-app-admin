import { User } from '@/domain/User';
import Cookies from 'js-cookie';

export const setCredentials = (user: User): void => {
  Cookies.set('uuid', user.uuid);
  Cookies.set('token', user.token);
};
export const resetCredentials = (): void => {
  setCredentials({
    uuid: '',
    token: '',
  });
};
export const getCredentials = (): User => ({
  uuid: Cookies.get('uuid') || '',
  token: Cookies.get('token') || '',
});