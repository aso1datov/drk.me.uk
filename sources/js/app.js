/**
 * Vendor
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Store
 */

import configureStore from '@/store/configureStore';

/**
 * Router
 */

import AppRouter from '@/routes/AppRouter';

/**
 * Services
 */

import { user } from '@/services/ApiService';

/**
 * Styles
 */

import '../scss/styles.scss';

/**
 * Expo
 */

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(<App />, document.getElementById('root'));
