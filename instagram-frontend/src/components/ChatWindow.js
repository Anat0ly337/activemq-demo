import React, { useState } from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const initialMessages = [
    { id: 1, sender: 'emma', text: 'Hey, how are you?' },
    { id: 2, sender: 'jules', text: 'I\'m good, thanks! How about you?' },
    { id: 3, sender: 'emma', text: 'Doing great! Just finished the project.' },
    { id: 4, sender: 'jules', text: 'Awesome! We should celebrate.' },
    { id: 5, sender: 'emma', text: 'Definitely! How about tomorrow?' },
    { id: 6, sender: 'jules', text: 'Sounds like a plan.' },
    { id: 7, sender: 'emma', text: 'See you then!' },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: 'jules', // Hardcoded as the current user
      text: newMessage,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

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
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
