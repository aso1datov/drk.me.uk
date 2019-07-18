/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import { Table } from '@/components/common/';
import PostItem from './PostItem';

/**
 * Typings
 */

import { IVKLikesRemoverPosts } from './interfaces';

type IVKLikesRemoverPostsProps = IVKLikesRemoverPosts;

/**
 * Expo
 */

const Posts: React.FC<IVKLikesRemoverPostsProps> = ({ posts, onRemove }) => (
  <Table bordered={true} responsive="sm">
    <thead>
      <tr>
        <th>Post</th>
        <th />
      </tr>
    </thead>

    {posts.length > 0 && (
      <tbody>
        {posts.map(post => (
          <PostItem
            key={`${post.id}${post.owner_id}`}
            {...post}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    )}
  </Table>
);

Posts.defaultProps = {
  posts: [],
};

export default Posts;
