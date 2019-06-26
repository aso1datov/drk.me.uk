/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { string, node } from 'prop-types';

/**
 * Expo
 */

const Section = ({ title, className, goBackTo, children }) => {
  return (
    <section className={cn('section', className)} role="main">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {goBackTo && (
        <Link to={goBackTo} className="go-back">
          ../
        </Link>
      )}

      {children}
    </section>
  );
};

Section.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  className: string,
  goBackTo: string,
};

export default Section;
