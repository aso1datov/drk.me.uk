import React from 'react';
import { string, array, func } from 'prop-types';

import Posts from './Posts';
import Photos from './Photos';
import Links from './Links';
import Videos from './Videos';

const LikesList = ({ type, likes, onRemove }) => {
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

LikesList.propTypes = {
  likes: array.isRequired,
  type: string.isRequired,
  onRemove: func.isRequired,
};

LikesList.defaultProps = {
  likes: [],
};

export default LikesList;
