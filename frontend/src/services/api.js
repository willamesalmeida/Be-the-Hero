/* import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api; */

import axios from 'axios';

const baseApi = (baseURL) => {
  const api = axios.create({
    baseURL,
  })
  return api
}

export default baseApi;