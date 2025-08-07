import React from 'react';
import Post from './Post'; // Reuse the Post component
import './News.css'; // I'll create this CSS file

function News() {
  // Static data for the news feed
  const newsFeedPosts = [
    {
      id: 1,
      author: { name: 'Alex Johnson', avatar: 'https://via.placeholder.com/150/FFC0CB/000000?text=A' },
      timestamp: '15 minutes ago',
      content: 'Just saw the new Blade Runner movie, it was amazing! Highly recommend it. #scifi #movies'
    },
    {
      id: 2,
      author: { name: 'Maria Garcia', avatar: 'https://via.placeholder.com/150/90EE90/000000?text=M' },
      timestamp: '1 hour ago',
      content: 'Enjoying a beautiful day at the park. Perfect weather for a picnic! ☀️'
    },
    {
      id: 3,
      author: { name: 'Sam Chen', avatar: 'https://via.placeholder.com/150/ADD8E6/000000?text=S' },
      timestamp: '3 hours ago',
      content: 'My band just released a new single! Check it out on Spotify. Link in bio. #newmusic #indierock'
    }
  ];

  return (
    <div className="news-page">
      <h2>News</h2>
      <div className="news-feed">
        {newsFeedPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default News;
