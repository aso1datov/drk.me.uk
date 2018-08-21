import axios from 'axios';

const req = axios.create({
  baseURL: 'http://api.drk.me.uk/',
});

export const user = {
  auth(credentials) {
    return req.post('/auth', credentials);
  },
};

const ApiService = {
  user,
};

export default ApiService;
