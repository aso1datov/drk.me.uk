/**
 * Vendor
 */

import React from 'react';

/**
 * Typings
 */

import { IMenu } from './interfaces';

type IMenuProps = IMenu;

/**
 * Components
 */

import MenuItem from './MenuItem';

/**
 * Expo
 */

const Menu: React.FC<IMenuProps> = ({ navigation }) => (
  <ul className="navigation">
    {navigation.map(nav => (
      <MenuItem key={nav.to} {...nav} />
    ))}
  </ul>
);

export default Menu;
