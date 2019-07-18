/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import { Table } from '@/components/common/';
import LinkItem from './LinkItem';

/**
 * Typings
 */

import { IVKLikesRemoverLinks } from './interfaces';

type IVKLikesRemoverLinksProps = IVKLikesRemoverLinks;

/**
 * Expo
 */

const Links: React.FC<IVKLikesRemoverLinksProps> = ({ links, onRemove }) => (
  <Table responsive="md" bordered={true}>
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

Links.defaultProps = {
  links: [],
};

export default Links;
