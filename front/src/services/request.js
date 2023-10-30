import axios from 'axios';

const request = axios.create({
  baseURL: 'http://54.224.80.47:3000',
  // baseURL: 'https://4b01-2804-7f3-fa82-7081-31fe-91ef-9d4f-467d.ngrok-free.app',
  timeout: 1000,
});

export default request

