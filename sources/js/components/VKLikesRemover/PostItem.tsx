/**
 * Vendor
 */

import React, { useCallback } from 'react';

/**
 * Components
 */

import { Button } from '@/components/common';

/**
 * Typings
 */

import { VKPost } from './interfaces';

type VKPostProps = VKPost & {
  onRemove: (id: number, ownerId: number) => void;
};

/**
 * Expo
 */

const PostItem: React.FC<VKPostProps> = ({ id, owner_id, text, onRemove }) => {
  const link = `https://vk.com/wall${owner_id}_${id}`;

  const handleRemove = useCallback(() => {
    onRemove(id, owner_id);
  }, [id, owner_id]);

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
        <Button onClick={handleRemove}>Remove</Button>
      </td>
    </tr>
  );
};

export default PostItem;
