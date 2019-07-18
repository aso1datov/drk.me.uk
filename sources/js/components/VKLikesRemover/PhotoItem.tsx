/**
 * Vendor
 */

import React from 'react';

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
          <button type="button" onClick={onRemove.bind(null, id, owner_id)}>
            Remove
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

export default PhotoItem;
