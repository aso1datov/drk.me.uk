/**
 * Vendor
 */

import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

/**
 * Routes
 */

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

/**
 * Components
 */

import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

/**
 * Pages
 */

import HomePage from '@/pages/HomePage';
import PortfolioPage from '@/pages/PortfolioPage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import LoremIpsumPage from '@/pages/services/LoremIpsumPage';
import VKLikesRemoverPage from '@/pages/services/VKLikesRemoverPage';
import CanteenSelectorPage from '@/pages/services/CanteenSelectorPage';

/**
 * History
 */

const history = createBrowserHistory();

/**
 * Expo
 */

const AppRouter = () => (
  <Router history={history}>
    <Layout>
      <Header />
      <Navbar />
      <Switch>
        <PublicRoute path="/" component={HomePage} exact />
        <PublicRoute path="/portfolio" component={PortfolioPage} exact />
        <PublicRoute path="/portfolio/:id" component={PortfolioPage} exact />
        <PublicRoute path="/about" component={AboutPage} exact />
        <PublicRoute path="/services" component={ServicesPage} exact />
        <PublicRoute
          path="/services/vk-likes-remover"
          component={VKLikesRemoverPage}
          exact
        />
        <PublicRoute
          path="/services/lorem-ipsum"
          component={LoremIpsumPage}
          exact
        />
        <PublicRoute
          path="/services/canteen-selector"
          component={CanteenSelectorPage}
          exact
        />
      </Switch>
    </Layout>
  </Router>
);

export default AppRouter;
