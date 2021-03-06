/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Menu from '@/components/Menu';

/**
 * Typings
 */

type NavigationProps = {};

/**
 * Navigation config
 */

import { navigation } from '@/config';

/**
 * Expo
 */

const Navigation: React.FC<NavigationProps> = () => (
  <nav role="navigation">
    <Menu navigation={navigation} />
  </nav>
);

export default Navigation;
