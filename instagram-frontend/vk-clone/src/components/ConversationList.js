import React from 'react';
import './ConversationList.css';

function ConversationList() {
  const conversations = [
    { id: 1, name: 'Alex Johnson', lastMessage: 'See you there!', avatar: 'https://via.placeholder.com/150/FFC0CB/000000?text=A' },
    { id: 2, name: 'Maria Garcia', lastMessage: 'Sounds good, thanks!', avatar: 'https://via.placeholder.com/150/90EE90/000000?text=M' },
    { id: 3, name: 'Sam Chen', lastMessage: 'Haha, you got it.', avatar: 'https://via.placeholder.com/150/ADD8E6/000000?text=S' },
  ];

  return (
    <div className="conversation-list-wrapper">
      <div className="conversation-list-header">
        <h3>Messenger</h3>
      </div>
      <div className="conversation-list">
        {conversations.map(convo => (
          <div key={convo.id} className="conversation-item">
            <img src={convo.avatar} alt={convo.name} />
            <div className="conversation-info">
              <p className="conversation-name">{convo.name}</p>
              <p className="conversation-last-message">{convo.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConversationList;
