import React from 'react'
import headerpic from '../assets/headerpic.png'
import '../styles/Home.css'
const Home = () => {
    return (
        <div class='home'>
            <div className='header'>
                <div className='header-text'>
                    <h1>SkillBot</h1>
                    <p>Your personalized career companion guiding high school students in choosing paths, exploring colleges, internships, and higher education, while offering resume building tools for a seamless transition to a successful future. SkillBot offers personalized guidance on diverse career paths, from skill development and industry insights to job opportunities and continuous professional growth, ensuring a confident and informed transition into the professional world.</p>
                </div>
                <div className='header-img'>
                    <img src={headerpic} alt="" />
                </div>
            </div>
            <div className="cto">
                <p>EXPERIENCE OUR SKILLBOT SERVICES</p>
                <div>
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Home