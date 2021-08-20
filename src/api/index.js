import axios from './axios';

class _ApiService {
  constructor() {
    this.config = {
      timeout: 90000,
      baseURL: 'https://pokeapi.co/api/v2/',
      headers: {'Content-Type': 'application/json'},
    };
  }

  get = (uri, config) => {
    return axios.get(uri, {...this.config, ...config});
  };

  put = (uri, data, config) => {
    return axios.put(uri, data, {...this.config, ...config});
  };

  post = (uri, data) => {
    return axios.post(uri, data, this.config);
  };

  patch = (uri, data) => {
    return axios.patch(uri, data, this.config);
  };

  delete = uri => {
    return axios.delete(uri, this.config);
  };

  options = uri => {
    return axios.options(uri, this.config);
  };

  head = uri => {
    return axios.head(uri, this.config);
  };
}

export const ApiService = new _ApiService();
