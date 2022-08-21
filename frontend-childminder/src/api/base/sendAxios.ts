import { AxiosInstance, AxiosResponse } from 'axios';
import toMock from './toMock';

const sendAxios = <ResponseType>(axios: AxiosInstance, path: string, query: any, form: any, method: string, mock_response?: any) => {
  // yarn buildした時以外はモックを使用
  if (process.env.NODE_ENV !== 'production') {
    toMock(axios, path, query, method, mock_response);
  }

  if (method === 'post') {
    return axios.post(path, form).then((res: AxiosResponse<ResponseType>) => res);
  } else if (method === 'put') {
    return axios.put(path, form).then((res: AxiosResponse<ResponseType>) => res);
  } else if (method === 'delete') {
    return axios.delete(path, query).then((res: AxiosResponse<ResponseType>) => res);
  }
  return axios.get(path, query).then((res: AxiosResponse<ResponseType>) => res);
};

// -- finally export part --
export default sendAxios;
