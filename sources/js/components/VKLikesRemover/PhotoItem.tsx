/**
 * Vendor
 */

import React from 'react';
import { number, array, func } from 'prop-types';

/**
 * Expo
 */

const PhotoItem = ({ id, owner_id, sizes, onRemove }) => {
  const photo = sizes.find(size => size.type === 'm') || {};

  return (
    <div className="photos-gallery-item">
      <figure>
        <img src={photo.url} width={photo.width} height={photo.height} alt="" />

        <figcaption>
          <button type="button" onClick={onRemove.bind(null, id, owner_id)}>
            Remove
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

PhotoItem.propTypes = {
  id: number.isRequired,
  owner_id: number.isRequired,
  sizes: array.isRequired,
  onRemove: func.isRequired,
};

export default PhotoItem;
