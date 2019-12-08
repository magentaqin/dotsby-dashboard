/* eslint-disable arrow-body-style */
import axios from 'axios'
import qs from 'qs'
import config from '../config'

const client = axios.create({
  baseURL: `${config.apiPrefix}`,
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 20000,
})

const request = (url, method, data, headerData = {}) => {
  const headers = { ...headerData }
  const options = {
    url,
    method,
    headers,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
  }

  if (method === 'GET') {
    options.params = data;
  } else {
    options.data = data;
  }

  const requestPromise = new Promise((resolve, reject) => {
    client.request(options).then((resp) => {
      resolve(resp)
    }).catch(error => {
      const formattedError = {
        method: error.config.method,
        url: error.config.url,
        status: error.response ? error.response.status : '',
        statusText: error.response ? error.response.statusText : '',
        data: error.response ? error.response.data : '',
        raw: error,
      };
      reject(formattedError)
    })
  })

  return requestPromise;
}

const http = {
  get: (url, data, headerData = {}) => request(url, 'GET', data, headerData),
  post: (url, data, headerData = {}) => request(url, 'POST', data, headerData),
}

export const signupApi = async(query) => {
  const resp = await http.post('/user/signup', query);
  return resp;
}


export const loginApi = async(query) => {
  const resp = await http.post('/user/login', query);
  return resp;
}
