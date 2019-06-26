/**
 * Vendor
 */

import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

/**
 * Expo
 */

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={Component} />
);

export default PublicRoute;
