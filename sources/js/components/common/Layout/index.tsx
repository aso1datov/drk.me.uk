/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import { Container } from '@/components/common';

/**
 * Typings
 */
import { ILayout } from './interfaces';

type ILayoutProps = ILayout;

/**
 * Expo
 */

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <div className="layout">
    <Container>{children}</Container>
  </div>
);

export default Layout;
