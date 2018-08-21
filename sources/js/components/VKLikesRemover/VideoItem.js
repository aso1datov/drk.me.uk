import React from 'react';
import { number, string, func } from 'prop-types';

const VideoItem = ({ id, owner_id, title, photo_130, onRemove }) => {
  return (
    <div className="videos-gallery-item">
      <figure>
        <img src={photo_130} width="130" alt={title} />
        <figcaption>{title}</figcaption>
      </figure>

      <div className="videos-gallery-item-controls">
        <button type="button" onClick={() => onRemove(id, owner_id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  id: number.isRequired,
  owner_id: number.isRequired,
  title: string.isRequired,
  photo_130: string.isRequired,
  onRemove: func.isRequired,
};

export default VideoItem;
