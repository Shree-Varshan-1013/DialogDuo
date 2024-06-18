const ChatBotFixedMenu = () => {

    const fixedUserMessages = ['Hi', 'Can you help me?', 'I need guidance in career counseling?'];
    const fixedBotMessages = ['Hello!', 'Of course, I will try my best.', 'Please tell me your concern.'];

    return (
        <div className="mx-5">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='text-justify'>
                    <h1 className='mb-8 text-4xl font-bold leading-10 tracking-tighter text-neutral-600 md:text-5xl lg:text-5xl'>Shape Your <span id="special-text" style={{ color: "white" }}>Destiny</span>
                        <br />with
                        Comprehensive <br /><span id="special-header-text" className='mb-8 font-bold tracking-tighter text-neutral-600 text-4xl lg:text-5xl md:text-5xl'>Career Counseling</span></h1>
                    <p className='text-md leading-7 lg:text-lg'>
                        DialogDuo is a career guidance tool which leverages Artificial Intelligence powered by LLaMA by Meta. DialogDuo offers AI Chatbot which solves various career guidance queries of the students, by throwing light onto plethora of opportunities available in this fast-developing world.
                        With comprehensive career counseling, individuals receive the knowledge and support necessary to make informed choices and shape a fulfilling and purpose-driven professional life.
                        <br /></p>
                </div>
                <div className=''>
                    <div className="mockup-browser border bg-base-300">
                        <div className="mockup-browser-toolbar">
                            <div className="input border border-base-300">https://dialogduo.com</div>
                        </div>
                        <div className="bg-base-200">
                            <div className='box' name="chatbot">
                                <div className='box--right--menu'>
                                    <div className="chat-container">
                                        <div className="flex-grow p-4 overflow-y-auto bg-white rounded-lg shadow-md">
                                            <div className="chat-message received chat-start flex items-center space-x-2 p-2 rounded-lg bg-pink max-w-max">
                                                <div><img src="/img/chatbot.png" width={30} className="pr-1" /></div>
                                                Hello my name is DialogDuo, How can I help you
                                            </div>
                                            {fixedUserMessages.map((userMsg, index) => (
                                                <div key={index} className="space-y-2 my-2">
                                                    <div className="flex justify-end w-full">
                                                        <div className='flex items-center bg-thBlue space-x-2 p-2 rounded-lg sent text-black self-end'>
                                                            {userMsg}
                                                            <div><img src="/img/user.png" width={30} id="avatar--user" /></div>
                                                        </div>
                                                    </div>
                                                    {fixedBotMessages[index] && (
                                                        <div className="flex items-center space-x-2 bg-pink p-2 rounded-lg  max-w-max received">
                                                            <div><img src="/img/chatbot.png" width={25} className="pr-1" /></div>
                                                            {fixedBotMessages[index]}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBotFixedMenu