/**
 * Vendor
 */

import React from 'react';

/**
 * Typings
 */

import { IVKPost } from './interfaces';
type IVKPostProps = IVKPost;

/**
 * Expo
 */

const PostItem: React.FC<IVKPostProps> = ({ id, owner_id, text, onRemove }) => {
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

export default PostItem;
