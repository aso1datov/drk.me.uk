import { AxiosInstance } from 'axios';

export interface IVK {
  // APP Settings
  APP_ID: number;
  API_VERSION: string;
  TOKEN: string;
  REDIRECT_URI: string;

  $http: AxiosInstance;

  /**
   * Set API Token
   *
   * @param {string} token
   */
  setToken(token: string): void;

  /**
   * Send requrest to VK API
   *
   * @param {string} method VK API method
   * @param {Object} [payload={}] Request payload
   * @returns {Promise<any>}
   */
  sendRequest(method: string, payload?: object): Promise<any>;

  /**
   * Open new window with authorization
   *
   */
  login(): void;
}

export interface IVKParams {
  readonly appId: number;
  readonly redirect?: string;
  readonly version?: string;
}

//this.APP_ID = appId;
// this.API_VERSION = version;
//this.TOKEN = '';
// this.REDIRECT_URI = redirect || 'https://oauth.vk.com/blank.html';
