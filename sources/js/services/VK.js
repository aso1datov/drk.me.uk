/**
 * Vendor
 */

import axios from 'axios';
import { stringify } from 'query-string';
import jsonpAdapter from 'axios-jsonp';

/**
 * Expo
 */

class VK {
  constructor({ appId, redirect, version = '5.100' }) {
    this.APP_ID = appId;
    this.API_VERSION = version;
    this.TOKEN = '';
    this.REDIRECT_URI = redirect || 'https://oauth.vk.com/blank.html';

    this.$http = axios.create({
      baseURL: 'https://api.vk.com/method',
      timeout: 1000,
      adapter: jsonpAdapter,
    });
  }

  /**
   * Set API Token
   *
   * @param {string} token
   */

  setToken(token) {
    this.TOKEN = token;
  }

  /**
   * Send requrest to VK API
   *
   * @param {string} method VK API method
   * @param {Object} [payload={}] Request payload
   * @returns {Promise}
   */

  sendRequest(method, payload = {}) {
    const { TOKEN: access_token, API_VERSION: v } = this;

    const params = Object.assign({}, payload, { access_token, v });

    return this.$http
      .get(`/${method}`, {
        params: { ...params },
      })
      .then(response => response.data);
  }

  /**
   * Open new window with authorization
   *
   */

  login() {
    const params = {
      client_id: this.APP_ID,
      display: 'page',
      scope: 'friends, wall',
      response_type: 'token',
      redirect_uri: this.REDIRECT_URI,
      v: this.API_VERSION,
    };

    const url = `https://oauth.vk.com/authorize?${stringify(params)}`;
    window.open(url, '_blank');
  }
}

export default VK;
