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

import { VKVideo } from './interfaces';

type VKLikesRemoverVideosProps = {
  videos: ReadonlyArray<VKVideo>;
  onRemove: (id: number, ownerId: number) => void;
};

/**
 * Expo
 */

const Videos: React.FC<VKLikesRemoverVideosProps> = ({ videos = [], onRemove }) => (
  <div className="videos-gallery">
    {videos.map(video => (
      <VideoItem key={`${video.id}${video.owner_id}`} {...video} onRemove={onRemove} />
    ))}
  </div>
);

export default Videos;
