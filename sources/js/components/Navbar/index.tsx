/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Navigation from '@/components/Navigation';

/**
 * Typings
 */
import { INavbar } from './interfaces';
type INavbarProps = INavbar;

/**
 * Expo
 */

const Navbar: React.FC<INavbarProps> = () => (
  <div className="navbar">
    <Navigation />
  </div>
);

export default Navbar;
