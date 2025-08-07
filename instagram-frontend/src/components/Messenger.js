import React from 'react';
import ConversationList from './ConversationList';
import ChatWindow from './ChatWindow';
import './Messenger.css';

function Messenger() {
  return (
    <div className="messenger-container">
      <ConversationList />
      <ChatWindow />
    </div>
  );
}

export default Messenger;
