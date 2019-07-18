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

import { IVKLikesRemoverLikesList } from './interfaces';

type IVKLikesRemoverLikesListProps = IVKLikesRemoverLikesList;

/**
 * Expo
 */

const LikesList: React.FC<IVKLikesRemoverLikesListProps> = ({
  type,
  likes,
  onRemove,
}) => {
  switch (type) {
    case 'photo':
      return <Photos photos={likes} onRemove={onRemove} />;
    case 'video':
      return <Videos videos={likes} onRemove={onRemove} />;
    case 'link':
      return <Links links={likes} onRemove={onRemove} />;
    case 'post':
      return <Posts posts={likes} onRemove={onRemove} />;
    default:
      return null;
  }
};

LikesList.defaultProps = {
  likes: [],
};

export default LikesList;
