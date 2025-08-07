import React from 'react';
import { posts } from '../testData';
import './Profile.css';

function Profile() {
  const user = {
    username: 'jules',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'Software Engineer | Building things for the web.',
    followers: 1234,
    following: 567,
    postsCount: posts.filter(post => post.username === 'jules').length,
  };

  const userPosts = posts.filter(post => post.username === user.username);

  return (
    <div className="profile-container">
      <header className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h2>{user.username}</h2>
          <div className="profile-stats">
            <span><strong>{user.postsCount}</strong> posts</span>
            <span><strong>{user.followers}</strong> followers</span>
            <span><strong>{user.following}</strong> following</span>
          </div>
          <p>{user.bio}</p>
        </div>
      </header>
      <div className="profile-posts-grid">
        {userPosts.map(post => (
          <div key={post.id} className="profile-post">
            <img src={post.imageUrl} alt={post.caption} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
