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

import { VKLink } from './interfaces';

type VKLinkProps = VKLink & {
  onRemove: (id: string) => void;
};

/**
 * Expo
 */

const LinkItem: React.FC<VKLinkProps> = ({ id, title, url, onRemove }) => {
  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [id]);

  return (
    <tr>
      <td>
        <a href={url} target="_blank" rel="nofollow">
          {title}
        </a>
      </td>
      <td className="text-right">
        <Button onClick={handleRemove} aria-label="Remove">
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default LinkItem;
