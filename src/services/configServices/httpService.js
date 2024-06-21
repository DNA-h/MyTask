import axios from 'axios';

import {getLocalStorage} from '../../utils/localStorage/localStorage';

// Axios Setting
// Common Headers
axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.headers.common['Content-Type'] = 'application/json';
// End

// Request interceptors for API calls
axios.interceptors.request.use(
  async config => {
    const accessToken = await getLocalStorage('accessToken');
    // Set Authorization Token In Header
    if (accessToken) config.headers['Authorization'] = `${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default http;
