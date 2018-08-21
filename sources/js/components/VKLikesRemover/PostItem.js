import React from 'react';
import { number, string, func } from 'prop-types';

const PostItem = ({ id, owner_id, text, onRemove }) => (
  <tr>
    <td>
      {text ? (
        text
      ) : (
        <a
          href={`https://vk.com/wall${owner_id}_${id}`}
          target="_blank"
        >{`https://vk.com/wall${owner_id}_${id}`}</a>
      )}
    </td>
    <td className="text-right">
      <button type="button" onClick={() => onRemove(id, owner_id)}>
        Remove
      </button>
    </td>
  </tr>
);

PostItem.propTypes = {
  id: number.isRequired,
  owner_id: number.isRequired,
  text: string.isRequired,
  onRemove: func.isRequired,
};

export default PostItem;
