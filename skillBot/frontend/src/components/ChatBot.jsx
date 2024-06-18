import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';
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
        <section className='lg:ml-60 max-w-5xl'>
            <div className='w-full bg-slate-200 h-screen flex flex-col justify-between mt-10 lg:mt-0 lg:min-w-100'>
                <div className='flex-grow p-4 overflow-y-auto bg-white rounded-lg shadow-md'>
                    <div className="chat-message received flex items-center space-x-2 p-2 rounded-lg bg-pink">
                        <img src="/img/chatbot.png" width={30} id="avatar--bot" alt="bot avatar" />
                        <Typewriter
                            options={{
                                strings: "Hello my name is skillBot, How can I help you",
                                autoStart: true,
                                delay: 25,
                                loop: false,
                                cursor: '',
                            }}
                        />
                    </div>
                    {userMessages.map((userMsg, index) => (
                        <div key={index} className="space-y-2 my-2">
                            <div className="flex justify-end w-full">
                                <div className="flex items-center space-x-2 p-2 rounded-lg sent self-end bg-thBlue">
                                    <span>{userMsg}</span>
                                    <img src="/img/user.png" width={30} id="avatar--user" alt="user avatar" />
                                </div>
                            </div>
                            {botMessages[index] && (
                                <div className="flex items-center space-x-2 p-2 rounded-lg bg-pink max-w-max received">
                                    <img src="/img/chatbot.png" width={25} id="avatar--bot" alt="bot avatar" />
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
                            )}
                        </div>
                    ))}
                    <div ref={chatEndRef}></div>
                </div>
                <div className="user-input p-4 bg-gray-100 flex justify-center">
                    <form onSubmit={getResponse} className="flex space-x-2">
                        <input
                            type="text"
                            value={userData}
                            id="userMessage"
                            name="userData"
                            placeholder="😄..."
                            onChange={(e) => setUserData(e.target.value)}
                            className="flex-grow p-2 border border-gray-300 rounded-lg"
                        />
                        <button
                            type="submit"
                            className={`button-54 px-4 py-2 rounded-lg ${timer ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                            disabled={!timer}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ChatBot
