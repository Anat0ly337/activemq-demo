import React from 'react';
import './Post.css';

function Post({ username, imageUrl, caption }) {
  return (
    <article>
      <div>
        <h3>{username}</h3>
      </div>
      <img src={imageUrl} alt="Post" />
      <div>
        <p>
          <strong>{username}</strong> {caption}
        </p>
      </div>
      <div>
        {/* Like, Comment, Share buttons */}
      </div>
    </article>
  );
}

export default Post;
