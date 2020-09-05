/**
 * Vendor
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Typings
 */

export type MenuItemProps = Readonly<{
  to: string;
  title: string;
  exact: boolean;
}>;

/**
 * Expo
 */

const MenuItem: React.FC<MenuItemProps> = ({ to, title, exact }) => (
  <li className="navigation-item">
    <NavLink to={to} activeClassName="is-active" exact={exact}>
      {title}
    </NavLink>
  </li>
);

export default MenuItem;
