/**
 * Vendor
 */

import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Typings
 */
import { IPublicRoute } from './interfaces';

/**
 * Expo
 */

export const PublicRoute: React.FC<IPublicRoute> = ({
  component: Component,
  ...rest
}) => <Route {...rest} component={Component} />;

export default PublicRoute;
