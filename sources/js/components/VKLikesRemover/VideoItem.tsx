/**
 * Vendor
 */

import React from 'react';

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
      <button type="button" onClick={onRemove.bind(null, id, owner_id)}>
        Remove
      </button>
    </div>
  </div>
);

export default VideoItem;
