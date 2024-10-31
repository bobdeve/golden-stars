import React, { useState } from 'react';
import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Goldenchatbot.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot,faX,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { BotMessageSquare } from 'lucide-react';
import bot from '../../assets/chatbot.png'
export default function Goldenchatbot() {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
      setShowChatbot(!showChatbot);
    };
  
    return (
      <div className='chat-bot-container'>
        <div className='chat-bot-icon' onClick={toggleChatbot}>
          {showChatbot ? (
            <span className='close-icon'>
              <FontAwesomeIcon icon={faCircleXmark} size='2x' />
             
            </span>
          ) : (
            // <FontAwesomeIcon className='icon-robot' icon={faRobot} size='6x' />
            <img src={bot} alt="chat bot" />
            // <BotMessageSquare className='icon-bot' size={84}/>
          )}
        </div>
        {showChatbot && (
          <div className='chat-bot-floating'>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}
      </div>
    );
  }