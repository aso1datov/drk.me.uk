/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Menu from '@/components/Menu';

/**
 * Navigation config
 */

import { navigation } from '@/config';

/**
 * Expo
 */

const Navigation = () => (
  <nav role="navigation">
    <Menu navigation={navigation} />
  </nav>
);

export default Navigation;
