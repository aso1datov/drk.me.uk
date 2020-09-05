export interface IVK {
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
