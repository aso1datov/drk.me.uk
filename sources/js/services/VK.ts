/**
 * Vendor
 */

import axios, { AxiosInstance } from 'axios';
import { stringify } from 'query-string';
// @ts-ignore
import jsonpAdapter from 'axios-jsonp';

/**
 * Interfaces
 */

import { IVK, IVKParams } from './interfaces';

/**
 * Expo
 */

class VK implements IVK {
  APP_ID: number;
  API_VERSION: string;
  TOKEN: string;
  REDIRECT_URI: string;

  $http: AxiosInstance;

  constructor({ appId, redirect, version = '5.100' }: IVKParams) {
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

  public setToken(token: string): void {
    this.TOKEN = token;
  }

  public async sendRequest(method: string, payload: object = {}): Promise<any> {
    const { TOKEN: access_token, API_VERSION: v } = this;

    const { data } = await this.$http.get(`/${method}`, {
      params: {
        ...payload,
        access_token,
        v,
      },
    });

    return data;
  }

  public login(): void {
    const params = {
      client_id: this.APP_ID,
      display: 'page',
      scope: 'friends, wall',
      response_type: 'token',
      redirect_uri: this.REDIRECT_URI,
      v: this.API_VERSION,
    };

    window.open(
      `https://oauth.vk.com/authorize?${stringify(params)}`,
      '_blank'
    );
  }
}

export default VK;
