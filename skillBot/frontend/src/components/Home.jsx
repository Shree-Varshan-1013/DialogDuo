import React from 'react'
import headerpic from '/img/headerpic.png'
import axios from 'axios';
import '../styles/Home.css'
const Home = () => {
    const download = async () => {
        try {
            const response = await fetch('http://localhost:2018/api/resume/fetch-pdf');
            const blob = await response.blob();

            // Create a temporary URL to the blob
            const url = window.URL.createObjectURL(new Blob([blob]));
            
            // Create a link element
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Resume.pdf'); // Set the filename for download
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            // Clean up
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

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
                    <button className="login" onClick={download}>Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Home