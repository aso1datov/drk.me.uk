/**
 * Vendor
 */

import React from 'react';

/**
 * Component
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
      <button type="button" onClick={onRemove.bind(null, id)}>
        Remove
      </button>
    </td>
  </tr>
);

export default LinkItem;
