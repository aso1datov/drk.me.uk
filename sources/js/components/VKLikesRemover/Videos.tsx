/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import VideoItem from './VideoItem';

/**
 * Typings
 */

import { IVKLikesRemoverVideos } from './interfaces';
type IVKLikesRemoverVideosProps = IVKLikesRemoverVideos;

/**
 * Expo
 */

const Videos: React.FC<IVKLikesRemoverVideosProps> = ({ videos, onRemove }) => (
  <div className="videos-gallery">
    {videos.map(video => (
      <VideoItem
        key={`${video.id}${video.owner_id}`}
        {...video}
        onRemove={onRemove}
      />
    ))}
  </div>
);

Videos.defaultProps = {
  videos: [],
};

export default Videos;
