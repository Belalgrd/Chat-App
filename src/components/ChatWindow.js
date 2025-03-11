import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/chat/messages');
      setMessages(res.data);
    } catch (error) {
      console.error('Error fetching messages', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      const res = await axios.post('http://localhost:5001/api/chat/message', {
        sender: 'user',
        message: input,
      });
      setMessages((prev) => [...prev, res.data.userMessage, res.data.botMessage]);
      setInput('');
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg._id} className={`message ${msg.sender}`}>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
