import React, { useState } from 'react';
import StaticNavbar from '../component/common/StaticNavbar';
import { NavLink } from 'react-router-dom';


const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'user' }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages([...messages, { text: input, type: 'user' }, { text: `You said: ${input}`, type: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div >
        <div className='max-w-[1360px] w-[95%] m-auto'>
            <StaticNavbar margin={"8"}/>
        </div>
        <div>
        </div>
        <div className="flex flex-col h-[85vh] max-w-[1100px] w-[80%] mx-auto p-4 bg-gray-100">
        <div className="flex-1 overflow-auto bg-white shadow-md rounded-lg p-4">
            <div className="space-y-4">
            {messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                {msg.text}
                </div>
            ))}
            </div>
        </div>
        <form className="flex mt-4 w-[70%] m-auto overflow-y-auto" onSubmit={handleSubmit}>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-l-lg  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            Send
            </button>
        </form>
        </div>
    </div>
  );
};

export default ChatApp;
