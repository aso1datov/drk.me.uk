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

import { VKPhoto } from './interfaces';

type VKPhotoProps = VKPhoto & {
  onRemove: (id: number, ownerId: number) => void;
};

/**
 * Expo
 */

const PhotoItem: React.FC<VKPhotoProps> = ({ id, owner_id, sizes, onRemove }) => {
  const photo = sizes.find(size => size.type === 'm');
  const handleRemove = useCallback(() => {
    onRemove(id, owner_id);
  }, [id, owner_id]);

  return (
    <div className="photos-gallery-item">
      <figure>
        {photo && <img src={photo.url} width={photo.width} height={photo.height} alt="" />}

        <figcaption>
          <Button onClick={handleRemove}>Remove</Button>
        </figcaption>
      </figure>
    </div>
  );
};

export default PhotoItem;
