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

import { INavigation } from './interfaces';
type INavigationProps = INavigation;

/**
 * Navigation config
 */

import { navigation } from '@/config';

/**
 * Expo
 */

const Navigation: React.FC<INavigationProps> = () => (
  <nav role="navigation">
    <Menu navigation={navigation} />
  </nav>
);

export default Navigation;
