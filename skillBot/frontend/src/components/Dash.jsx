import React from 'react'
import '../styles/Dash.css'
import school from '/img/Frame1.png'
import college from '/img/Frame2.png'
import resume from '/img/Frame3.png'

const Dash = () => {
    return (
        <div className='dash'>
            <div className="heading">
                <h1>SkillBot</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={school} alt="" />
                    <div className="cardtext">
                        <h1>High School Career Guidance</h1>
                        <p>Empowering high school students with personalized guidance, SkillBot navigates the post-high school maze, providing tailored insights into career options, college choices, and internships for a confident and informed decision-making journey.</p>
                        <p>EXPLORE HIGH SCHOOL CAREER GUIDANCE </p>
                    </div>
                </div>
                <div className="card">
                    <img src={college} alt="" />
                    <div className="cardtext">
                        <h1>College Career Guidance</h1>
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