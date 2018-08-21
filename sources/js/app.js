import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routes/AppRouter';

import { user } from './services/ApiService';

import '../scss/styles.scss';

const credentials = {
  email: 'admin@drk.me.uk',
  password: '12345',
};

// ApiService.post('/auth', { credentials });

// user.auth({ credentials });

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(<App />, document.getElementById('root'));
