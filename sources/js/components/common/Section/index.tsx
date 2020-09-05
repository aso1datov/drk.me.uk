/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

/**
 * Typings
 */

type SectionProps = Readonly<{
  title: string;
  className?: string;
  goBackTo?: string;
}>;

/**
 * Expo
 */

const Section: React.FC<SectionProps> = ({ title, className, goBackTo, children }) => (
  <section className={cn('section', className)} role="main">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    {goBackTo && (
      <Link className="go-back" to={goBackTo}>
        ../
      </Link>
    )}

    {children}
  </section>
);

export default Section;
