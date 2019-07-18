/**
 * Vendor
 */

import React from 'react';

/**
 * Typings
 */

import { IPortfolioListItem } from './interfaces';
type IPortfolioListItemProps = IPortfolioListItem;

/**
 * Expo
 */

const PortfolioListItem: React.FC<IPortfolioListItemProps> = ({ title }) => (
  <li className="portfolio-list-item">{title}</li>
);

export default PortfolioListItem;
