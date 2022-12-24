import { api } from '@/api';
import { Webinar } from '@/domain/Webinar';

interface Error {
  response?: any;
};
interface Response {
  status: StatusCode,
  webinars: Webinar;
};
interface DeleteResponse {
  status: StatusCode,
};

let error: Error = {};

export const fetchWebinarDetail = async (): Promise<Response> => {
  console.debug('api/webinar/webinars/fetchWebinarDetail'); //DELETE

  try {
    const response = await api.get('webinars');

    console.debug('api/webinar/webinars/fetchWebinarDetail/response', response); //DELETE

    const out: Response = {
      status: response.status,
      webinars: response.data,
    };

    return out;
  } catch (e) {
    return Object.assign(error, e).response;
  }
};
export const deleteWebinar = async (uuid: string): Promise<DeleteResponse> => {
  console.debug('api/webinar/webinars/deleteWebinar', uuid); //DELETE

  try {
    const response = await api.delete(`webinars/${uuid}`);

    console.debug('api/webinar/webinars/deleteWebinar/response', response); //DELETE

    const out: DeleteResponse = {
      status: response.status,
    };

    return out;
  } catch (e) {
    return Object.assign(error, e).response;
  }
};