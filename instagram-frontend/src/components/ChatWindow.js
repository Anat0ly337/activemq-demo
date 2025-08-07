import React from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const messages = [
    { id: 1, sender: 'emma', text: 'Hey, how are you?' },
    { id: 2, sender: 'jules', text: 'I\'m good, thanks! How about you?' },
    { id: 3, sender: 'emma', text: 'Doing great! Just finished the project.' },
    { id: 4, sender: 'jules', text: 'Awesome! We should celebrate.' },
    { id: 5, sender: 'emma', text: 'Definitely! How about tomorrow?' },
    { id: 6, sender: 'jules', text: 'Sounds like a plan.' },
    { id: 7, sender: 'emma', text: 'See you then!' },
  ];

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>emma</h3>
      </div>
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender === 'jules' ? 'sent' : 'received'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
