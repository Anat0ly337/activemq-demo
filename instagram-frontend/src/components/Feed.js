import React from 'react';
import Post from './Post';
import './Feed.css';
import { posts } from '../testData';

function Feed() {
  return (
    <main>
      {posts.map(post => (
        <Post
          key={post.id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </main>
  );
}

export default Feed;
