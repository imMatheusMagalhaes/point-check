import axios from 'axios';

const request = function (token = null) {
  return axios.create({
    baseURL: 'http://54.224.80.47:3000',
    timeout: 1000,
    headers: { 'Authorization': token }
  });
}

export default request

