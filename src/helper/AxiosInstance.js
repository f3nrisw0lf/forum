import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const { API_URL = 'http://localhost:8080/' } = process.env;

const AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default AxiosInstance;
