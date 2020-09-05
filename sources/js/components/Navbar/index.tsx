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

type NavbarProps = {};

/**
 * Expo
 */

const Navbar: React.FC<NavbarProps> = () => (
  <div className="navbar">
    <Navigation />
  </div>
);

export default Navbar;
