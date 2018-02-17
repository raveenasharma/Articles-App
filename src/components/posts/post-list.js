import React from 'react';
import { Link } from 'react-router-dom';

import { POST } from '../common/constants';
import PostPreview from './post-preview';

const conditionalRender = (WrappedComponent) => ({ posts, ...props }) => (
  posts.length === 0 ?
  <WrappedComponent>
    <p>Post list is empty</p>
  </WrappedComponent>
  :
  <WrappedComponent {...props}>
    <div className="posts-container">
    {posts.map(
      post => <PostPreview key={post.id} {...post} />
    )}
    </div>
  </WrappedComponent>
)

const PostList = ({ children }) => (
  <div className='post-list'>
    <div className='post-submenu'>
    </div>
    {children}
  </div>
)

export default conditionalRender(PostList);
