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

import { VKPost } from './interfaces';

type VKLikesRemoverPostsProps = {
  posts: ReadonlyArray<VKPost>;
  onRemove: (id: number, ownerId: number) => void;
};

/**
 * Expo
 */

const Posts: React.FC<VKLikesRemoverPostsProps> = ({ posts = [], onRemove }) => (
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
          <PostItem key={`${post.id}${post.owner_id}`} {...post} onRemove={onRemove} />
        ))}
      </tbody>
    )}
  </Table>
);

export default Posts;
