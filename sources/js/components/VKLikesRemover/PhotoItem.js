import React from 'react';

const PhotoItem = ({ id, owner_id, sizes, onRemove }) => {
  const photo = sizes.find(size => size.type === 'm') || {};

  return (
    <div className="photos-gallery-item">
      <figure>
        <img src={photo.url} width={photo.width} height={photo.height} alt="" />
        <figcaption>
          <button type="button" onClick={() => onRemove(id, owner_id)}>
            Remove
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

export default PhotoItem;
