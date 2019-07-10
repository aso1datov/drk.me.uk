/**
 * Vendor
 */

import React from 'react';

/**
 * Typings
 */

import { IContainer } from './interfaces';

type IContainerProps = IContainer;

/**
 * Expo
 */

const Container: React.FC<IContainerProps> = ({ children }) => (
  <div className="container">{children}</div>
);

export default Container;
