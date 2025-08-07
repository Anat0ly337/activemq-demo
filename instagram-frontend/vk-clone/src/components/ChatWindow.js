import React, { useState } from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alex Johnson', text: 'Hey, how is the project going?' },
    { id: 2, sender: 'Jules Vern', text: 'It\'s going well! Just implemented the basic messenger UI.' },
    { id: 3, sender: 'Alex Johnson', text: 'Awesome! Can\'t wait to see it.' },
    { id: 4, sender: 'Alex Johnson', text: 'Let me know if you need any help with the styling.' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: 'Jules Vern', // Hardcoded as the current user
      text: newMessage,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="chat-window-wrapper">
      <div className="chat-window-header">
        <h3>Alex Johnson</h3>
      </div>
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender === 'Jules Vern' ? 'sent' : 'received'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
