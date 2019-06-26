/**
 * Vendor
 */

import { combineReducers } from 'redux';

/**
 * Reducers
 */

import portfolio from './portfolio';
import user from './user';

/**
 * Expo
 */

export default combineReducers({ portfolio, user });
