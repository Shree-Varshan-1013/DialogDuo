import React, { useEffect } from 'react'
import axios from 'axios';
import Footer from './Footer';
import ChatBot from './ChatBot';
import Home from './Home';
import ChatBotFixedMenu from './ChatBotFixedMenu';
import Header from './Header';
import Content from './Content';
import Contact from './Contact';
// import run from '../gemini';
const Master = () => {

    // run("Tell me about london") gemini Ai

    return (
        <>
            {/* <Navbar />
            <div class='home'>
                <div className='header'>
                    <div className='header-text'>
                        <h1 id="special-header">
                            <Typewriter
                                options={{
                                    strings: ["DialogDuo", "Skill Bot"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p>Your personalized career companion guiding high school students in choosing paths, exploring colleges, internships, and higher education, while offering resume building tools for a seamless transition to a successful future.</p>
                    </div>
                    <div className='header-img'>
                        <span style={{ marginLeft: "190px" }}></span>
                        <img src={headerpic} alt="homepage logo" />
                    </div>
                </div>
            </div>
            <ChatBotMenu />
            <Dash />
            <Footer /> */}
            <Header />
            <Home />
            <Content />
            <ChatBotFixedMenu />
            <Contact />
            <Footer />
        </>
    )
}

export default Master