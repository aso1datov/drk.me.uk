import React from 'react';
import { array, func } from 'prop-types';
import Table from '@/components/Table';
import PostItem from './PostItem';

const Posts = ({ posts, onRemove }) => (
  <Table bordered responsive="sm">
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

Posts.propTypes = {
  posts: array.isRequired,
  onRemove: func.isRequired,
};

Posts.defaultProps = {
  posts: [],
};

export default Posts;
