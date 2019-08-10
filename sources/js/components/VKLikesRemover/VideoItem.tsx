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

import { IVKVideo } from './interfaces';

type IVKVideoProps = IVKVideo;

/**
 * Expo
 */

const VideoItem: React.FC<IVKVideoProps> = ({
  id,
  owner_id,
  title,
  photo_130,
  onRemove,
}) => (
  <div className="videos-gallery-item">
    <figure>
      <img src={photo_130} width="130" alt={title} />
      <figcaption>{title}</figcaption>
    </figure>

    <div className="videos-gallery-item-controls">
      <Button onClick={onRemove.bind(null, id, owner_id)}>Remove</Button>
    </div>
  </div>
);

export default VideoItem;
