import axios from 'axios';

const request = axios.create({
  baseURL: 'http://54.224.80.47:3000',
  // baseURL: 'https://5a50-2804-7f3-fa83-84f1-7a1a-9b02-340a-1945.ngrok-free.app',
  timeout: 1000,
});

export default request

