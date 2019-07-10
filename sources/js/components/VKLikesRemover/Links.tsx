/**
 * Vendor
 */

import React from 'react';
import { array, func } from 'prop-types';

/**
 * Components
 */

import Table from '@/components/Table';
import LinkItem from './LinkItem';

/**
 * Expo
 */

const Links = ({ links, onRemove }) => (
  <Table responsive="md" bordered>
    <thead>
      <tr>
        <th>Title</th>
        <th />
      </tr>
    </thead>

    {links.length > 0 && (
      <tbody>
        {links.map(link => (
          <LinkItem key={link.id} {...link} onRemove={onRemove} />
        ))}
      </tbody>
    )}
  </Table>
);

Links.propTypes = {
  links: array.isRequired,
  onRemove: func.isRequired,
};

Links.defaultProps = {
  links: [],
};

export default Links;
