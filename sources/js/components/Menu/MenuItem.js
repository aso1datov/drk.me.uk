/**
 * Vendor
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { string } from 'prop-types';

/**
 * Expo
 */

const MenuItem = ({ to, title, exact }) => (
  <li className="navigation-item">
    <NavLink to={to} activeClassName="is-active" exact={exact}>
      {title}
    </NavLink>
  </li>
);

MenuItem.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
};

export default MenuItem;
