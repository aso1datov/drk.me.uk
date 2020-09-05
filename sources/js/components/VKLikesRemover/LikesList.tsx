/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Posts from './Posts';
import Photos from './Photos';
import Links from './Links';
import Videos from './Videos';

/**
 * Typings
 */

import { VKLink, VKPhoto, VKPost, VKVideo, LikesTypes } from './interfaces';

type VKLikesRemoverLikesListProps = {
  type: LikesTypes;
  likes: VKPhoto[] | VKVideo[] | VKLink[] | VKPost[];
  onRemove: (...args: any) => void;
};

/**
 * Expo
 */

const LikesList: React.FC<VKLikesRemoverLikesListProps> = ({ type, likes = [], onRemove }) => {
  switch (type) {
    case 'photo':
      return <Photos photos={likes as VKPhoto[]} onRemove={onRemove} />;
    case 'video':
      return <Videos videos={likes as VKVideo[]} onRemove={onRemove} />;
    case 'link':
      return <Links links={likes as VKLink[]} onRemove={onRemove} />;
    case 'post':
      return <Posts posts={likes as VKPost[]} onRemove={onRemove} />;
    default:
      return null;
  }
};

export default LikesList;
