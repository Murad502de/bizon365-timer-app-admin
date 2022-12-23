import { api } from '@/api';
import { User } from '@/domain/User';
import { UserMock } from '@/store/mocks/UserMock';

const isMock: boolean = false;

interface Error {
  response?: any;
};
interface Response {
  status: StatusCode,
  user: User;
};

let error: Error = {};

export const signinService = async (email: Email, password: Password): Promise<Response> => {
  console.debug('services/auth/signinService/email', email); //DELETE
  console.debug('services/auth/signinService/password', password); //DELETE

  // mister.stolica@yandex.ru //DELETE
  // qsT7KdzJPxwH+k3g //DELETE

  try {
    const response = await api.post('auth/signin', {
      email,
      password,
    });

    console.debug('services/auth/signinService/response', response); //DELETE

    const out: Response = {
      status: response.status,
      user: isMock ? UserMock : response.data,
    };

    return out;
  }
  catch (e) {
    return Object.assign(error, e).response;
  }
};