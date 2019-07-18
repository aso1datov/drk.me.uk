/**
 * Vendor
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Typings
 */

import { IMenuItem } from './interfaces';

type IMenuItemProps = IMenuItem;

/**
 * Expo
 */

const MenuItem: React.FC<IMenuItemProps> = ({ to, title, exact }) => (
  <li className="navigation-item">
    <NavLink to={to} activeClassName="is-active" exact={exact}>
      {title}
    </NavLink>
  </li>
);

export default MenuItem;
