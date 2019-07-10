/**
 * Vendor
 */

import React from 'react';

/**
 * Expo
 */

const LinkItem = ({ title, url, onRemove }) => (
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
