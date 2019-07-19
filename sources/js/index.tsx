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
 * Styles
 */

import '../scss/styles.scss';

/**
 * Typings
 */

interface IApp {}

/**
 * Expo
 */

const store = configureStore();

const App: React.FC<IApp> = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(<App />, document.getElementById('root'));
