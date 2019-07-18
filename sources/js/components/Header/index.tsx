/**
 * Vendor
 */

import React from 'react';

/**
 * Typings
 */

import { IHeader } from './interfaces';

type IHeaderProps = IHeader;

/**
 * Expo
 */

const Header: React.FC<IHeaderProps> = () => (
  <header className="site-header">
    <h1>**** DRK ****</h1>
  </header>
);

export default Header;
