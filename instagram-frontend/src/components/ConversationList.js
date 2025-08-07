import React from 'react';
import './ConversationList.css';

function ConversationList() {
  const conversations = [
    { id: 1, name: 'emma', lastMessage: 'See you then!' },
    { id: 2, name: 'liam', lastMessage: 'Sounds good.' },
    { id: 3, name: 'olivia', lastMessage: 'Haha, definitely.' },
    { id: 4, name: 'noah', lastMessage: 'Can you send me the file?' },
  ];

  return (
    <div className="conversation-list">
      <div className="conversation-list-header">
        <h3>Messages</h3>
      </div>
      {conversations.map(convo => (
        <div key={convo.id} className="conversation-item">
          <img src={`https://via.placeholder.com/50?text=${convo.name.charAt(0).toUpperCase()}`} alt={convo.name} />
          <div className="conversation-info">
            <p className="conversation-name">{convo.name}</p>
            <p className="conversation-last-message">{convo.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConversationList;
