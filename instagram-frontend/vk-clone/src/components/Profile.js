import React from 'react';
import Post from './Post'; // Import the Post component
import './Profile.css';

function Profile() {
  // Static data for the user profile
  const user = {
    name: 'Jules Vern',
    status: 'Exploring the world, one line of code at a time.',
    avatar: 'https://via.placeholder.com/200x200.png/4A76A8/FFFFFF?text=J',
  };

  // Static data for the wall posts
  const wallPosts = [
    {
      id: 1,
      author: user,
      timestamp: 'yesterday at 8:15 pm',
      content: 'Just finished setting up the basic structure for my new project. Feeling productive! #coding #react'
    },
    {
      id: 2,
      author: user,
      timestamp: '2 days ago',
      content: 'Thinking about what features to add next. A messenger? A news feed? The possibilities are endless.'
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-header-wrapper">
        <div className="profile-header">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p className="profile-status">{user.status}</p>
          </div>
        </div>
      </div>
      <div className="profile-content-wrapper">
        <div className="profile-wall">
          {wallPosts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="profile-sidebar">
          <h4>Friends</h4>
          {/* Placeholder for friends list */}
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
