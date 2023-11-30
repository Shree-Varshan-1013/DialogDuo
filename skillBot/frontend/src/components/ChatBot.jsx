import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';
import '../styles/ChatBot.css';
function ChatBot() {
    const [userMessages, setUserMessages] = useState([]);
    const [botMessages, setBotMessages] = useState([]);
    const [userData, setUserData] = useState("");
    const [timer, setTimer] = useState(true);
    const typewriterRef = useRef(null);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleTypewriterComplete = () => {
        scrollToBottom();
    };

    const addBotResponseWithDelay = (botResponse) => {
        setTimeout(() => {
            setBotMessages(prevMessages => [...prevMessages, botResponse]);
        }, 1500);
    };

    const getResponse = async (event) => {
        event.preventDefault();
        if (userData === "") {
            Swal.fire({
                title: "<h3>Please enter the query !</h3>",
                icon: "info",
            });
            return;
        }
        setTimer(false);
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
            setTimeout(() => {
                setTimer(true);
            }, 10000);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [botMessages]);

    return (
        <div className='box'>
            <div className='box--left'>
                <div className='box--left--inner'>
                    <h1 style={{ marginBottom: "20px" }}>Shape Your <span id="special-text">Destiny</span>
                        <br/>with
                        Comprehensive <br/><span id="special-header-text">Career Counseling</span></h1>
                    <p>
                        With comprehensive career counseling, individuals receive the knowledge and support necessary to make informed choices and shape a fulfilling and purpose-driven professional life.
                        <br />   Feel free to ask about your doubts and queries regarding your career.
                    </p>
                </div>
            </div>
            <div className='box--right'>
                <div class="chat-container">
                    <div class="chat-box">
                        <div class="chat-message received chat-start">
                            <div style={{ display: 'flex' }}>
                                <div><img src="/img/chatbot.png" width={30} id="avatar--bot" /></div>
                                <Typewriter
                                    options={{
                                        strings: "Hello my name is skillBot, How can I help you",
                                        autoStart: true,
                                        delay: 25,
                                        loop: false,
                                        cursor: '', // Set cursor to an empty string to hide it after typing
                                    }}
                                />
                            </div>
                        </div>
                        {userMessages.map((userMsg, index) => (
                            <div key={index} className="message">
                                <div className="chat-message chat-message-user sent">
                                    <div className='inner-boxes'>
                                        {userMsg}
                                        <div><img src="/img/user.png" width={30} id="avatar--user" /></div>
                                    </div>
                                </div>
                                {botMessages[index] && (
                                    <div className="chat-message chat-message-bot received">
                                        <div className='inner-boxes'>
                                            <div><img src="/img/chatbot.png" width={25} id="avatar--bot" /></div>
                                            <Typewriter
                                                onInit={(typewriter) => {
                                                    typewriterRef.current = typewriter;
                                                    typewriter
                                                        .typeString(botMessages[index])
                                                        .callFunction(handleTypewriterComplete)
                                                        .start();
                                                }}
                                                options={{
                                                    autoStart: false,
                                                    delay: 25,
                                                    loop: false,
                                                    cursor: '',
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={chatEndRef}></div>
                    </div>
                    <div class="user-input">
                        <form onSubmit={getResponse}>
                            <input type="text" value={userData} id="userMessage" name="userData" placeholder="😄..." onChange={(e) => setUserData(e.target.value)} />
                            {
                                timer ? (
                                    <button type="submit" className='button-54'>Send</button>
                                ) : (
                                    <button type="submit" className='button-54' style={{ cursor: 'not-allowed' }} disabled>Send</button>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBot
