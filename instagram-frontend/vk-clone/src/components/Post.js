import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.author.avatar} alt={post.author.name} className="post-author-avatar" />
        <div className="post-author-info">
          <p className="post-author-name">{post.author.name}</p>
          <p className="post-timestamp">{post.timestamp}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}

export default Post;
