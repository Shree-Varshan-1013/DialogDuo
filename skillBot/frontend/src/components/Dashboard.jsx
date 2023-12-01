import React from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';
import ChatBot from './ChatBot';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <img src="/img/logo.png" width={240} />
                <ul>
                    <Link to="/resume"><li style={{marginTop:"20px", fontSize:"20px"}}>Resume Generator</li></Link>
                </ul>
            </div>
            <div className="main-content">
                <h1 style={{ margin: "5px" }}>Dashboard</h1>
                <div className="dummy-content">
                    <ChatBot />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
