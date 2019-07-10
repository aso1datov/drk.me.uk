/**
 * Vendor
 */

import React from 'react';
import { array } from 'prop-types';

/**
 * Components
 */

import MenuItem from './MenuItem';

/**
 * Expo
 */

const Menu = ({ navigation }) => (
  <ul className="navigation">
    {navigation.map(nav => (
      <MenuItem key={nav.to} {...nav} />
    ))}
  </ul>
);

Menu.propTypes = {
  navigation: array.isRequired,
};

export default Menu;
