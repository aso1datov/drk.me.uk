/**
 * Vendor
 */

import React, { Component, Fragment } from 'react';

/**
 * Components
 */

import LikesList from './LikesList';

/**
 * Services
 */

import VK from '@/services/VK';

/**
 * Expo
 */

const vk = new VK({ appId: Number(process.env.VK_APP_ID) });

const limits = {
  post: 100,
  link: 1000,
  photo: 1000,
  video: 1000,
};

class VKLikesRemover extends Component {
  state = {
    isLoading: false,
    token: '',
    likes: {
      type: '',
      items: [],
      count: 0,
    },
    request: {
      offset: 0,
      limit: 100,
    },
    errors: {},
  };

  /**
   * Authorization on vk.com
   */
  auth(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    vk.login();
  }

  /**
   * Handle token change
   */
  handleTokenChange = ({ target }) => {
    this.setState(
      () => ({
        token: target.value,
        errors: {},
      }),
      () => {
        vk.setToken(this.state.token.trim());
      }
    );
  };

  /**
   * Handle type change
   */
  handleTypeChange = ({ target }) => {
    const type = target.value;
    const limit = limits[type] || 1000;

    this.setState(
      prevState => ({
        likes: {
          ...prevState.likes,
          type,
          items: [],
          count: 0,
        },
        request: {
          offset: 0,
          limit,
        },
        errors: {},
      }),
      () => {
        this.getLikes();
      }
    );
  };

  /**
   * Handle request settings change
   */
  handleLimitsChange = ({ target }) => {
    this.setState(prevState => ({
      request: {
        ...prevState.request,
        [target.name]: target.value,
      },
    }));
  };

  /**
   * Get API method name by type
   *
   * @returns {string} Method name
   */
  getMethodName = () => {
    const { type } = this.state.likes;

    switch (type) {
      case 'post':
        return 'fave.getPosts';
      case 'link':
        return 'fave.getLinks';
      case 'photo':
        return 'fave.getPhotos';
      case 'video':
        return 'fave.getVideos';
    }
  };

  /**
   * Send request to get likes
   *
   * @param {string} [start_from]
   * @returns {Promise<void>}
   */

  getLikes = async start_from => {
    if (this.state.isLoading) return;

    const { offset, limit: count } = this.state.request;
    const method = this.getMethodName();
    const payload = { offset, count, start_from };

    this.setState(() => ({ isLoading: true }));

    const { response = {}, error } = await vk.sendRequest(method, payload);

    if (error) {
      this.handleError({ likes: error.error_msg });
      return;
    }

    const { items = [], count: itemsCount = 0, next_from } = response;

    this.setState(prevState => ({
      isLoading: false,
      likes: {
        ...prevState.likes,
        items,
        count: itemsCount,
      },
    }));

    // if (itemsCount > 0 && !items.length && !!next_from) {
    //   this.getLikes(next_from);
    // }
  };

  /**
   * Solve captcha
   *
   * @param {string} url Captcha URL
   * @returns {string} Captcha key
   */

  handleCaptcha = url => {
    return prompt(url);
  };

  /**
   * Handle click on remove button
   *
   * @param {string|number} id Item ID
   * @param {number} [owner_id] Owner ID
   *
   * @returns {Promise<void>}
   */

  handleLikeRemove = async (id, owner_id) => {
    const { type } = this.state.likes;

    this.setState(() => ({ isLoading: true }));

    const { response, error } = await this.removeLike(id, owner_id, type);

    if (error) {
      if (error.error_code === 14) {
        const captcha_key = this.handleCaptcha(error.captcha_img);

        if (captcha_key) {
          this.removeLike(id, owner_id, type, {
            captcha_key,
            captcha_sid: error.captcha_sid,
          });
        }
      } else {
        this.handleError({ likes: error.error_msg });
      }

      return;
    }

    if (response && response.likes) {
      this.removeItem(id);
    }
  };

  /**
   * Remove item from state
   *
   * @param {number|string} id Item id
   * @param {function} [cb] Callback function
   */

  removeItem = (id, cb = () => void 0) => {
    this.setState(
      prevState => ({
        isLoading: false,
        likes: {
          ...prevState.likes,
          items: prevState.likes.items.filter(item => item.id !== id),
          count: prevState.likes.count - 1,
        },
      }),
      cb
    );
  };

  // @ts-ignore
  /**
   * Send request to remove like
   *
   * @param {number} item_id Item ID
   * @param {number} [owner_id] Item owner ID
   * @param {string} type Item type
   * @param {object} [extra] Extra payload
   * @returns {Promise<any>} Promise represent request
   */
  removeLike = (item_id, owner_id, type, extra = {}) => {
    const payload = {
      item_id,
      owner_id,
      type,
      ...extra,
    };

    return vk.sendRequest('likes.delete', payload);
  };

  /**
   * Start remove all likes
   *
   * @param {object} [extra] Extra payload
   */
  removeAllLikes = (extra = {}) => {
    const { items = [], type } = this.state.likes;
    const [item] = items;

    if (!item || !type) {
      this.setState(() => ({ isLoading: false }));
      return;
    }

    this.setState(() => ({ isLoading: true }));

    this.removeLike(item.id, item.owner_id, type, extra).then(
      ({ response, error }) => {
        this.setState(() => ({ isLoading: false }));

        if (error) {
          if (error.error_code === 14) {
            const captcha_key = this.handleCaptcha(error.captcha_img);

            if (captcha_key) {
              this.removeAllLikes({
                captcha_key,
                captcha_sid: error.captcha_sid,
              });
            }
          } else if (error.error_code === 14) {
            this.handleError({ likes: error.error_msg });
            this.removeItem(item.id, setTimeout(this.removeAllLikes, 2000));
          } else {
            this.handleError({ likes: error.error_msg });
          }
        } else if (response && response.likes) {
          this.removeItem(item.id, setTimeout(this.removeAllLikes, 2000));
        }
      }
    );
  };

  /**
   * Handle request error
   *
   * @param {object} [error]
   */
  handleError = (error = {}) => {
    this.setState(prevState => ({
      isLoading: false,
      errors: {
        ...prevState.errors,
        ...error,
      },
    }));
  };

  increaseOffset = () => {
    this.setState(
      prevState => ({
        request: {
          ...prevState.request,
          offset:
            parseInt(prevState.request.offset, 10) +
            parseInt(prevState.request.limit, 10),
        },
      }),
      () => {
        this.getLikes();
      }
    );
  };

  render() {
    const { isLoading, token, likes, request, errors } = this.state;

    return (
      <div className="vk-likes-remover">
        <h3>Instruction:</h3>
        <ol>
          <li>
            <a href="#" onClick={this.auth}>
              Authorize
            </a>
          </li>
          <li>
            Copy <mark>access_token</mark> from address bar
          </li>
          <li>
            Paste token to input below
            <input
              id="token"
              className="form-control block-control"
              value={token}
              onChange={this.handleTokenChange}
              autoComplete="off"
            />
          </li>
        </ol>

        {token && (
          <Fragment>
            <div className="settings">
              <div className="field">
                <label htmlFor="type">Choose type:</label>{' '}
                <select
                  id="type"
                  name="type"
                  className="form-control"
                  onChange={this.handleTypeChange}
                  value={likes.type}
                  disabled={isLoading}
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  <option value="photo">Photos</option>
                  <option value="post">Posts</option>
                  <option value="link">Links</option>
                  <option value="video">Videos</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="limit">Count:</label>{' '}
                <input
                  className="form-control"
                  size="5"
                  name="limit"
                  value={request.limit}
                  onChange={this.handleLimitsChange}
                />
              </div>

              <div className="field">
                <label htmlFor="offset">Offset:</label>{' '}
                <input
                  className="form-control"
                  size="5"
                  name="offset"
                  value={request.offset}
                  onChange={this.handleLimitsChange}
                />
                <button
                  type="button"
                  onClick={this.increaseOffset}
                  disabled={!likes.type}
                >
                  ++
                </button>
              </div>
            </div>

            {errors.likes && <p className="text-error">{errors.likes}</p>}

            <div className="results">
              <div className="results-info">
                <div className="pull-left">
                  <strong>Count: </strong>
                  {likes.count}
                </div>

                {likes.count > 0 && (
                  <div className="pull-right">
                    <button
                      type="button"
                      onClick={this.removeAllLikes.bind(this, {})}
                    >
                      Remove all
                    </button>
                  </div>
                )}
              </div>

              {likes.type && (
                <LikesList
                  type={likes.type}
                  likes={likes.items}
                  onRemove={this.handleLikeRemove}
                />
              )}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default VKLikesRemover;
