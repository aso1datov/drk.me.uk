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

import { VKVideo } from './interfaces';

export type VKVideoProps = VKVideo & {
  onRemove: (id: number, ownerId: number) => void;
};

/**
 * Expo
 */

const VideoItem: React.FC<VKVideoProps> = ({ id, owner_id, title, photo_130, onRemove }) => {
  const handleRemove = useCallback(() => {
    onRemove(id, owner_id);
  }, [id, owner_id]);

  return (
    <div className="videos-gallery-item">
      <figure>
        <img src={photo_130} width="130" alt={title} />
        <figcaption>{title}</figcaption>
      </figure>

      <div className="videos-gallery-item-controls">
        <Button onClick={handleRemove}>Remove</Button>
      </div>
    </div>
  );
};

export default VideoItem;
