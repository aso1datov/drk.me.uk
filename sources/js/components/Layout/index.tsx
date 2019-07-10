/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Container from '@/components/Container';

/**
 * Expo
 */

const Layout: React.FC = ({ children }) => (
  <div className="layout">
    <Container>{children}</Container>
  </div>
);

export default Layout;
