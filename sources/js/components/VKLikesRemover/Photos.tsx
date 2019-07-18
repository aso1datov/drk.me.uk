/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import PhotoItem from './PhotoItem';

/**
 * Typings
 */

import { IVKLikesRemoverPhotos } from './interfaces';

type IVKLikesRemoverPhotosProps = IVKLikesRemoverPhotos;

/**
 * Expo
 */

const Photos: React.FC<IVKLikesRemoverPhotosProps> = ({ photos, onRemove }) => (
  <div className="photos-gallery">
    {photos.length > 0 &&
      photos.map(photo => (
        <PhotoItem
          key={`${photo.id}_${photo.owner_id}`}
          {...photo}
          onRemove={onRemove}
        />
      ))}
  </div>
);

Photos.defaultProps = {
  photos: [],
};

export default Photos;
