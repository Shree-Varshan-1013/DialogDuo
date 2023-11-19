import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import '../styles/ChatBot.css';
function ChatBot() {
    const [userMessages, setUserMessages] = useState([]);
    const [botMessages, setBotMessages] = useState([]);
    const [userData, setUserData] = useState("");
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const addBotResponseWithDelay = (botResponse) => {
        setTimeout(() => {
            setBotMessages(prevMessages => [...prevMessages, botResponse]);
        }, 1500);
    };

    const getResponse = async (event) => {
        event.preventDefault();
        if (userData === "") {
            alert("Please enter a query");
            return;
        }
        try {
            setUserMessages(prevMessages => [...prevMessages, userData]);
            const response = await axios.post('http://localhost:2018/api', {
                message: `${userData} \nAssistant:`
            });
            const data = response.data;
            const sentence = data.join(' ');
            console.log(sentence);
            setUserData('');
            addBotResponseWithDelay(sentence);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [botMessages]);

    return (
        <>
            <div class="chat-container">
                <div class="chat-box">
                    <div class="chat-message received">Hello! How can I help you?</div>
                    {userMessages.map((userMsg, index) => (
                        <div key={index} className="message">
                            <div className="chat-message chat-message-user sent">{userMsg}</div>
                            {botMessages[index] && (
                                <div className="chat-message chat-message-bot received">
                                    <Typewriter
                                        options={{
                                            strings: `${botMessages[index]}`,
                                            autoStart: true,
                                            delay: 25,
                                            loop: false,
                                            cursor: '', // Set cursor to an empty string to hide it after typing
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={chatEndRef}></div>
                </div>
                <div class="user-input">
                    <form onSubmit={getResponse}>
                        <input type="text" value={userData} id="userMessage" name="userData" placeholder="Feel free to ask...." onChange={(e) => setUserData(e.target.value)} />
                        <button type="submit" style={{ backgroundColor: "#202846" }}>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatBot
