import React from 'react';
import { array } from 'prop-types';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = ({ portfolios }) => (
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
