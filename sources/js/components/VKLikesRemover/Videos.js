import React from 'react';
import { array, func } from 'prop-types';
import VideoItem from './VideoItem';

const Videos = ({ videos, onRemove }) => (
  <div className="videos-gallery">
    {videos.map(video => (
      <VideoItem key={`${video.id}${video.owner_id}`} {...video} onRemove={onRemove} />
    ))}
  </div>
);

Videos.propTypes = {
  videos: array.isRequired,
  onRemove: func.isRequired,
};

Videos.defaultProps = {
  videos: [],
};

export default Videos;
