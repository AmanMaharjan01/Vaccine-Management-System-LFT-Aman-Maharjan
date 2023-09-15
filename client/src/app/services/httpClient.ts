import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from 'constants/api-constants';

const httpClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default httpClient;
