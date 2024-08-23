import React, { useState, useEffect, useRef } from 'react';
import StaticNavbar from '../component/common/StaticNavbar';
import { AiOutlineLike, AiOutlineDislike, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoReload, IoShareSocialOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { RxSpeakerQuiet } from "react-icons/rx";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: `Bot: ${input}`, type: 'bot' }]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='bg-richblack-900'>
      <div className='max-w-[1360px]  m-auto w-[95%]'>
        <StaticNavbar margin={1}/>
      </div>
      <div className='w-screen h-[1px]  text-richblack-50 border-b  border-richblack-50'> </div>
      <div className='max-w-[800px] m-auto  h-[calc(100vh-15.15vh)] ' >
        <div className='flex flex-col justify-between h-full'>

          <div ref={chatContainerRef} className="flex-1 rounded-lg p-4 overflow-auto">
            <div className="space-y-4 flex flex-col">
            {messages.map((msg, index) => (
              <div key={index} className={`px-4 py-6 relative flex flex-col gap-4 h-auto rounded-lg ${msg.type === 'user' ? 'bg-[rgb(252,232,231)] text-right ml-auto max-w-[70%] min-w-[45%]  ' : ' mr-auto max-w-[70%] min-w-[45%] bg-[rgb(213,218,231)] text-left'} break-words`}>

                <div className='flex flex-row gap-3'>
                  <RxSpeakerQuiet className='size-[1.2rem] cursor-pointer'/>
                  <AiOutlineHeart className='size-[1.2rem] cursor-pointer'/>
                </div>
  
                <p>{msg.text}</p>

                {msg.type !== 'user' && 
                  <div className='flex flex-row gap-3'>
                    <AiOutlineLike className='size-[1.2rem] cursor-pointer'/>
                    <AiOutlineDislike className='size-[1.2rem] cursor-pointer'/>
                  </div>
                }

                <div className='absolute flex flex-row gap-2 -bottom-5 right-2'>
                  <div className='text-black bg-white text-sm border rounded-lg border-richblack-50 cursor-pointer px-4 py-1 flex flex-row gap-2 items-center'>
                    <MdOutlineContentCopy /> <p>Copy</p>
                  </div>
                  <div className='text-black bg-white text-sm border rounded-lg border-richblack-50 cursor-pointer px-4 py-1 flex flex-row gap-2 items-center'>
                    <IoReload /> Regenerate
                  </div>
                  <div className='text-black bg-white text-sm border rounded-lg border-richblack-50 cursor-pointer px-4 py-1 flex flex-row gap-2 items-center'>
                    <IoShareSocialOutline /> Share
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          <form className="flex  w-[80%] m-auto overflow-y-auto relative" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-2 py-4 border rounded-lg text-lg border-[rgb(211,212,213)]  outline-none"
            />
            <button
              type="submit"
              className="p-2 right-2 top-4 bg-[rgb(213,218,231)] text-richblue-900 absolute rounded-lg outline-none hover:bg-richblack-50 focus:bg-richblack-100"
            >
              <LuSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
