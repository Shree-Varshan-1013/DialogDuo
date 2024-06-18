import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';
// import '../styles/ChatBot.css';

function ChatBotMenu() {
    const [botMessages, setBotMessages] = useState([]);
    const typewriterRef = useRef(null);
    const chatEndRef = useRef(null);
    const fixedUserMessages = ['Hi', 'Can you help me?', 'I need guidance in career counseling?'];
    const fixedBotMessages = ['Hello!', 'Of course, I will try my best.', 'Please tell me your concern.'];

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleTypewriterComplete = () => {
        scrollToBottom();
    };

    useEffect(() => {
        scrollToBottom();
        setBotMessages(fixedBotMessages);
    }, []);

    return (
        <div className='box' name="chatbot" style={{marginTop:"90px"}}>
            <div className='box--left'>
                <div className='box--left--inner'>
                    <h1 style={{ marginBottom: "20px" }}>Shape Your <span id="special-text">Destiny</span>
                        <br />with
                        Comprehensive <br /><span id="special-header-text">Career Counseling</span></h1>
                    <p>
                        With comprehensive career counseling, individuals receive the knowledge and support necessary to make informed choices and shape a fulfilling and purpose-driven professional life.
                        <br />   Feel free to ask about your doubts and queries regarding your career.
                    </p>
                </div>
            </div>
            <div className='box--right--menu'>
                <div class="chat-container">
                    <div class="chat-box">
                        <div class="chat-message received chat-start">
                            <div style={{ display: 'flex' }}>
                                <div><img src="/img/chatbot.png" width={30} id="avatar--bot" /></div>
                                Hello my name is skillBot, How can I help you
                            </div>
                        </div>
                        {fixedUserMessages.map((userMsg, index) => (
                            <div key={index} className="message">
                                <div className="chat-message chat-message-user sent">
                                    <div className='inner-boxes'>
                                        {userMsg}
                                        <div><img src="/img/user.png" width={30} id="avatar--user" /></div>
                                    </div>
                                </div>
                                {fixedBotMessages[index] && (
                                    <div className="chat-message chat-message-bot received">
                                        <div className='inner-boxes'>
                                            <div><img src="/img/chatbot.png" width={25} id="avatar--bot" /></div>
                                            {fixedBotMessages[index]}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBotMenu
