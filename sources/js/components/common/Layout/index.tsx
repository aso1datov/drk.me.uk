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

type LayoutProps = {};

/**
 * Expo
 */

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="layout">
    <Container>{children}</Container>
  </div>
);

export default Layout;
