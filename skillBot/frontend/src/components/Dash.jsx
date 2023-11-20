import React from 'react'
import college from '/img/Frame2.png'
import resume from '/img/Frame3.png'
import '../styles/Dash.css'

const Dash = () => {
    return (
        <div className='dash'>
            <div className="heading">
                <h1>SkillBot</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={college} alt="" />
                    <div className="cardtext">
                        <h1>College Career Guidance
                        </h1>
                        <div style={{marginBottom:"30px"}}>
                            <label style={{ marginRight: "18px" }}>High School</label>
                            <label>College</label>
                        </div>
                        <p>Your post-college career companion, SkillBot offers personalized guidance on diverse career paths, from skill development and industry insights to job opportunities and continuous professional growth, ensuring a confident and informed transition into the professional world.</p>
                        <p>EXPLORE COLLEGE CAREER GUIDANCE </p>
                    </div>
                </div>
                <div className="card">
                    <img src={resume} alt="" />
                    <div className="cardtext">
                        <h1>Resume Builder</h1>
                        <p>SkillBot's intuitive resume builder feature empowers users to effortlessly create professional resumes, offering customizable templates, expert tips, and a streamlined process for showcasing skills and experiences, ensuring a standout presentation to potential employers.</p>
                        <p>EXPLORE RESUME BUILDER </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash