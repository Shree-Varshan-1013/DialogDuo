import React from 'react';
import '../styles/Dashboard.css'; // Import your custom CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Reports</a></li>
                    {/* Add more sidebar links as needed */}
                </ul>
            </div>

            {/* Main content area */}
            <div className="main-content">
                <h1>Main Content</h1>
                <div className="dummy-content">
                    <h3>Section 1</h3>
                    <p>This is a sample section in the main content area.</p>
                </div>
                <div className="dummy-content">
                    <h3>Section 2</h3>
                    <p>This is another section in the main content area.</p>
                </div>
                {/* Add your content here */}
            </div>
        </div>
    );
}

export default Dashboard;
