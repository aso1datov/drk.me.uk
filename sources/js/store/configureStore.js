/**
 * Vendor
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

/**
 * Reducers
 */

import rootReducer from '@/reducers/rootReducer';

/**
 * Expo
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
