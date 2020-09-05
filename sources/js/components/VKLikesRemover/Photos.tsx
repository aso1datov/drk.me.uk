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

import { VKPhoto } from './interfaces';

type IVKLikesRemoverPhotosProps = {
  photos: ReadonlyArray<VKPhoto>;
  onRemove: (id: number, ownerId: number) => void;
};

/**
 * Expo
 */

const Photos: React.FC<IVKLikesRemoverPhotosProps> = ({ photos = [], onRemove }) => (
  <div className="photos-gallery">
    {photos.length > 0 &&
      photos.map(photo => <PhotoItem key={`${photo.id}_${photo.owner_id}`} {...photo} onRemove={onRemove} />)}
  </div>
);

export default Photos;
