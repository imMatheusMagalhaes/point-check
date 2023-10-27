import axios from 'axios';

const request = axios.create({
  baseURL: 'http://54.224.80.47:3000',
  timeout: 1000,
});

export default request

