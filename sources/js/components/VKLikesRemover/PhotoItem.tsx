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

import { IVKPhoto } from './interfaces';

type IVKPhotoProps = IVKPhoto;

/**
 * Expo
 */

const PhotoItem: React.FC<IVKPhotoProps> = ({
  id,
  owner_id,
  sizes,
  onRemove,
}) => {
  const photo = sizes.find(size => size.type === 'm');

  return (
    <div className="photos-gallery-item">
      <figure>
        {photo && (
          <img
            src={photo.url}
            width={photo.width}
            height={photo.height}
            alt=""
          />
        )}

        <figcaption>
          <Button onClick={onRemove.bind(null, id, owner_id)}>Remove</Button>
        </figcaption>
      </figure>
    </div>
  );
};

export default PhotoItem;
