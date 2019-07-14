/**
 * Vendor
 */

import React from 'react';
import { array } from 'prop-types';

/**
 * Components
 */

import PortfolioListItem from './PortfolioListItem';

/**
 * Typings
 */

import { IPortfolioList } from './interfaces';
type IPortfolioListProps = IPortfolioList;

/**
 * Expo
 */

const PortfolioList: React.FC<IPortfolioListProps> = ({ portfolios }) => (
  <ol className="portfolio-list">
    {portfolios.map(portfolio => (
      <PortfolioListItem key={portfolio.id} {...portfolio} />
    ))}
  </ol>
);

PortfolioList.propTypes = {
  portfolios: array.isRequired,
};

export default PortfolioList;
