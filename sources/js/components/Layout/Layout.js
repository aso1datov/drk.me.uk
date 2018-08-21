import React from 'react';
import Container from '../Container/Container';

const Layout = ({ children }) => (
  <div className="layout">
    <Container>{children}</Container>
  </div>
);

export default Layout;
