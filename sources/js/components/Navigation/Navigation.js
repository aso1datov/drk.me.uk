import React from 'react';
import Menu from '../Menu/Menu';
import { navigation } from '../../config';

const Navigation = () => (
  <nav role="navigation">
    <Menu navigation={navigation} />
  </nav>
);

export default Navigation;
