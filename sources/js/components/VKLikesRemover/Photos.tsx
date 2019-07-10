/**
 * Vendor
 */

import React from 'react';
import { array, func } from 'prop-types';

/**
 * Components
 */

import PhotoItem from './PhotoItem';

/**
 * Expo
 */

const Photos = ({ photos, onRemove }) => (
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

Photos.propTypes = {
  photos: array.isRequired,
  onRemove: func.isRequired,
};

Photos.defaultProps = {
  photos: [],
};

export default Photos;
