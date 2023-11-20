import React from 'react'
import { useNavigate } from 'react-router-dom'
import college from '/img/Frame2.png'
import resume from '/img/Frame3.png'
import '../styles/Dash.css'

const Dash = () => {

    const navigate = useNavigate();

    return (
        <div className='dash'>
            <div className="cards">
                <div className="card">
                    <img src={college} alt="" />
                    <div className="cardtext">
                        <h1>Career Guidance
                        </h1>
                        <div style={{ marginBottom: "30px" }}>
                            <label style={{ marginRight: "18px" }}>High School</label>
                            <label>College</label>
                        </div>
                        <p>SkillBot offers personalized guidance on diverse career paths, from skill development and industry insights to job opportunities and continuous professional growth, ensuring a confident and informed transition into the professional world.</p>
                        <button className='button-5' onClick={() => navigate('/chatbot')}>EXPLORE CAREER GUIDANCE</button>
                    </div>
                </div>
                <div className="card">
                    <img src={resume} alt="" />
                    <div className="cardtext">
                        <h1>Resume Builder</h1>
                        <p>SkillBot's intuitive resume builder feature empowers users to effortlessly create professional resumes, offering customizable templates, expert tips, and a streamlined process for showcasing skills and experiences, ensuring a standout presentation to potential employers.</p>
                        <button className='button-5' onClick={() => navigate('/resume')}>EXPLORE RESUME BUILDER </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash