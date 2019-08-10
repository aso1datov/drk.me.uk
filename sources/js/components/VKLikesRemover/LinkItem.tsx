/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import { Button } from '@/components/common';

/**
 * Typings
 */

import { IVKLink } from './interfaces';

type IVKLinkProps = IVKLink;

/**
 * Expo
 */

const LinkItem: React.FC<IVKLinkProps> = ({ id, title, url, onRemove }) => (
  <tr>
    <td>
      <a href={url} target="_blank">
        {title}
      </a>
    </td>
    <td className="text-right">
      <Button onClick={onRemove.bind(null, id)} aria-label="Remove">
        Remove
      </Button>
    </td>
  </tr>
);

export default LinkItem;
