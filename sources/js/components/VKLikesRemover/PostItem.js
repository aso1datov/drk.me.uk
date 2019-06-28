/**
 * Vendor
 */

import React from 'react';
import { number, string, func } from 'prop-types';

/**
 * Expo
 */

const PostItem = ({ id, owner_id, text, onRemove }) => {
  const link = `https://vk.com/wall${owner_id}_${id}`;

  return (
    <tr>
      <td>
        {text ? (
          text
        ) : (
          <a href={link} target="_blank">
            {link}
          </a>
        )}
      </td>
      <td className="text-right">
        <button type="button" onClick={onRemove.bind(null, id, owner_id)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

PostItem.propTypes = {
  id: number.isRequired,
  owner_id: number.isRequired,
  text: string.isRequired,
  onRemove: func.isRequired,
};

export default PostItem;
