import axios from 'axios';

const { REACT_APP_API_URL = 'http://localhost:8080/' } = process.env;

const AxiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
});

export default AxiosInstance;
