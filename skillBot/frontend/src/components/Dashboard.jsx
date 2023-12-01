import React from 'react';
import '../styles/Dashboard.css'; // Import your custom CSS file for styling
import ChatBot from './ChatBot';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <img src="/img/logo.png" width={240} />
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Reports</a></li>
                </ul>
            </div>
            <div className="main-content">
                <h1>Dashboard</h1>
                <div className="dummy-content">
                    <ChatBot />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
