import axios from 'axios';
import config from '../config';

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
    this.unauthorizedCallback = () => {};
  }

  handleSuccessResponse(response) {
    return response;
  }

  handleErrorResponse(error) {
    return Promise.reject(error);
  }
}

const options = {
  baseURL: config.API_BASE_URL
};
const httpService = new HttpService(options);

export default httpService;
