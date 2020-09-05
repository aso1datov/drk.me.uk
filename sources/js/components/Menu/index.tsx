/**
 * Vendor
 */

import React from 'react';

/**
 * Typings
 */

import { MenuItemProps } from './MenuItem';

type MenuProps = Readonly<{
  navigation: ReadonlyArray<MenuItemProps>;
}>;

/**
 * Components
 */

import MenuItem from './MenuItem';

/**
 * Expo
 */

const Menu: React.FC<MenuProps> = ({ navigation }) => (
  <ul className="navigation">
    {navigation.map(nav => (
      <MenuItem key={nav.to} {...nav} />
    ))}
  </ul>
);

export default Menu;
