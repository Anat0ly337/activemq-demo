import React from 'react';
import Post from './Post';
import './Feed.css';

function Feed() {
  const posts = [
    {
      id: 1,
      username: 'jules',
      imageUrl: 'https://via.placeholder.com/500',
      caption: 'Hello, world!',
    },
    {
      id: 2,
      username: 'user2',
      imageUrl: 'https://via.placeholder.com/500',
      caption: 'This is another post.',
    },
  ];

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
