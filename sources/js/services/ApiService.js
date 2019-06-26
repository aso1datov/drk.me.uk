/**
 * Vendor
 */

import axios from 'axios';

/**
 * Expo
 */

const req = axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
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
