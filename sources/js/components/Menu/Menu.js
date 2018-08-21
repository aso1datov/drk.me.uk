import React from 'react';
import { array } from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ navigation }) => (
  <ul className="navigation">
    {navigation.map(nav => <MenuItem key={nav.to} {...nav} />)}
  </ul>
);

Menu.propTypes = {
  navigation: array.isRequired,
};

export default Menu;
